
import { WebGLUtility, ShaderProgram } from '../lib/webgl.js';
import { WebGLMath } from '../lib/math.js';
import { WebGLOrbitCamera } from '../lib/camera.js';
import { Pane } from '../lib/tweakpane-4.0.0.min.js';

window.addEventListener('DOMContentLoaded', async () => {
  const app = new WebGLApp();
  window.addEventListener('resize', app.resize, false);
  app.init('webgl-canvas');
  await app.load();
  app.setup();
  app.render();
}, false);

class WebGLApp {
  /**
   * @constructor
   */
  constructor() {
    // 汎用的なプロパティ
    this.canvas = null;
    this.gl = null;
    this.running = false;

    // this を固定するためメソッドをバインドする
    this.resize = this.resize.bind(this);
    this.render = this.render.bind(this);

    // 各種パラメータや uniform 変数用
    this.previousTime = 0; // 直前のフレームのタイムスタンプ
    this.timeScale = 0;  // 時間の進み方に対するスケール
    this.uTime = 0.0;      // uniform 変数 time 用

    // tweakpane を初期化
    const pane = new Pane();
    pane.addBlade({
      view: 'slider',
      label: 'time-scale',
      min: 0.0,
      max: 2.0,
      value: this.timeScale,
    })
    .on('change', (v) => {
      this.timeScale = v.value;
    });
  }
  /**
   * シェーダやテクスチャ用の画像など非同期で読み込みする処理を行う。
   * @return {Promise}
   */
  async load() {
    const vs = await WebGLUtility.loadFile('./main.vert');
    const fs = await WebGLUtility.loadFile('./main.frag');
    this.shaderProgram = new ShaderProgram(this.gl, {
      vertexShaderSource: vs,
      fragmentShaderSource: fs,
      // attribute や uniform の構成がシェーダと一致するように気をつける @@@
      attribute: [
        'position',
        'color',
        'size',
      ],
      stride: [
        3,
        4,
        1,
      ],
      uniform: [
        'mvpMatrix',
        'textureUnit', // テクスチャユニット
      ],
      type: [
        'uniformMatrix4fv',
        'uniform1i', // テクスチャユニットは整数値なので 1i を使う
      ],
    });
  }
  /**
   * WebGL のレンダリングを開始する前のセットアップを行う。
   */
  setup() {
    const gl = this.gl;

    const cameraOption = {
      distance: 3.0,
      min: 1.0,
      max: 10.0,
      move: 2.0,
    };
    this.camera = new WebGLOrbitCamera(this.canvas, cameraOption);

    this.setupGeometry();
    this.resize();
    this.running = true;
    this.previousTime = Date.now();

    gl.clearColor(1.0, 0.8, 0.5, 1.0);
    gl.clearDepth(1.0);
    gl.enable(gl.DEPTH_TEST);

    // このサンプルではテクスチャは途中で切り替えないので……
    // このタイミングでユニット０（ゼロ）にバインドしておく @@@
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.texture);
  }
  /**
   * ジオメトリ（頂点情報）を構築するセットアップを行う。
   */
  setupGeometry() {
    // 1つ目の三角形の頂点座標
    const triangle1Position = [
      0.0,  0.5,  0.0,   // 上
      -0.866, -0.5,  0.0,  // 左下
      0.866, -0.5,  0.0,   // 右下
    ];
    const triangle2Position = [
      0.2,  0.25, 0.01, // 左上
      0.5, 0.25, 0.01, // 右上
      0.0, -0.5, 0.01, // 下
    ];
    // 3つ目の三角形：triangle2Positionを左右反転
    const triangle3Position = [
      0.0, -0.5, 0.01, // 下
      -0.2,  0.25, 0.01, // 右上
      -0.5, 0.25, 0.01, // 左上
    ];
    // const triangle3Position = triangle2Position.map((v, i) => {
    //   if (i % 3 === 0) return -v; // X軸の符号を反転
    //   return v;                   // Y, Zはそのまま
    // });
    // 4つ目の三角形：triangle1Positionを50%縮小
    const triangle4Position = triangle1Position.map((v, i) => {
      const scale = 0.5;
      const zOffset = 0.012;
      const yOffset = -0.25;
      if (i % 3 === 0) {
        // X成分: 縮小
        return v * scale;
      } else if (i % 3 === 1) {
        // Y成分: 縮小して平行移動
        return v * scale + yOffset;
      } else {
        // Z成分: 手前に移動
        return v + zOffset;
      }
    });
    const triangle5Position = [
      -0.866, -0.5, 0.013,    // 左下
      0.866, -0.5, 0.013,    // 右下
      -0.7,  -0.3, 0.013,  // 左上
      0.7,  -0.3, 0.013,   // 右上
    ];
    // 頂点座標を結合
    this.position = [
      ...triangle1Position,
      ...triangle2Position,
      ...triangle3Position,
      ...triangle4Position,
      ...triangle5Position,
    ];
  
    // 1つ目の三角形の色データ
    const triangle1Color = [
      1.0, 0.0, 0.0, 1.0,  // 赤
      0.0, 1.0, 0.0, 1.0,  // 緑
      0.0, 0.0, 1.0, 1.0,  // 青
    ];
  
    // 2つ目の三角形の色データ（例として紫、黄、シアン）
    const triangle2Color = [
      1.0, 0.0, 1.0, 1.0,  // 紫
      1.0, 1.0, 0.0, 1.0,  // 黄
      0.0, 1.0, 1.0, 1.0,  // シアン
    ];
    const triangle4Color = [
      1.0, 0.0, 1.0, 1.0,  // 紫
    ];
  
    // 色データを結合
    this.color = [
      ...triangle1Color,
      ...triangle2Color,
      ...triangle2Color,
      ...triangle1Color,
      ...triangle4Color,
    ];
  
    // VBO を作成
    this.vbo = [
      WebGLUtility.createVbo(this.gl, this.position),
      WebGLUtility.createVbo(this.gl, this.color),
      WebGLUtility.createVbo(this.gl, this.pointSize),
    ];
  }
  /**
   * WebGL を利用して描画を行う。
   */
  render() {
    // 短く書けるようにローカル変数に一度代入する
    const gl = this.gl;
    const m4 = WebGLMath.Mat4;
    const v3 = WebGLMath.Vec3;

    // running が true の場合は requestAnimationFrame を呼び出す
    if (this.running === true) {
      requestAnimationFrame(this.render);
    }

    // 直前のフレームからの経過時間を取得
    const now = Date.now();
    const time = (now - this.previousTime) / 1000;
    this.uTime += time * this.timeScale;
    this.previousTime = now;

    // ビューポートの設定と背景色・深度値のクリア
    gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // - 各種行列を生成する ---------------------------------------------------
    // モデル座標変換行列
    const rotateAxis  = v3.create(0.0, 1.0, 0.0);
    const rotateAngle = this.uTime * 0.2;
    const m = m4.rotate(m4.identity(), rotateAngle, rotateAxis);

    // ビュー座標変換行列（WebGLOrbitCamera から行列を取得する）
    const v = this.camera.update();

    // プロジェクション座標変換行列
    const fovy   = 60;                                     // 視野角（度数）
    const aspect = this.canvas.width / this.canvas.height; // アスペクト比
    const near   = 0.1;                                    // ニア・クリップ面までの距離
    const far    = 20.0;                                   // ファー・クリップ面までの距離
    const p = m4.perspective(fovy, aspect, near, far);

    // 行列を乗算して MVP 行列を生成する（行列を掛ける順序に注意）
    const vp = m4.multiply(p, v);
    const mvp = m4.multiply(vp, m);
    // ------------------------------------------------------------------------

    // プログラムオブジェクトを指定し、VBO と uniform 変数を設定
    this.shaderProgram.use();
    this.shaderProgram.setAttribute(this.vbo);
    this.shaderProgram.setUniform([
      mvp,
      0, // 使いたいテクスチャのバインドされているユニット番号 @@@
    ]);

    // 設定済みの情報を使って、頂点を画面にレンダリングする
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, this.position.length / 3);
  }
  /**
   * リサイズ処理を行う。
   */
  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  /**
   * WebGL を実行するための初期化処理を行う。
   * @param {HTMLCanvasElement|string} canvas - canvas への参照か canvas の id 属性名のいずれか
   * @param {object} [option={}] - WebGL コンテキストの初期化オプション
   */
  init(canvas, option = {}) {
    if (canvas instanceof HTMLCanvasElement === true) {
      this.canvas = canvas;
    } else if (Object.prototype.toString.call(canvas) === '[object String]') {
      const c = document.querySelector(`#${canvas}`);
      if (c instanceof HTMLCanvasElement === true) {
        this.canvas = c;
      }
    }
    if (this.canvas == null) {
      throw new Error('invalid argument');
    }
    this.gl = this.canvas.getContext('webgl', option);
    if (this.gl == null) {
      throw new Error('webgl not supported');
    }
  }
}
