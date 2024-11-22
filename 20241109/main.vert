
attribute vec3 position;
attribute vec4 color;
attribute float size;

uniform float pointScale;
uniform vec2 mouse; // マウスカーソルの座標（-1.0 ~ 1.0） @@@

varying vec4 vColor;

void main(void) {
    // 頂点の位置をクリップ空間へ変換
    gl_Position = vec4(position, 1.0);
    // 点のサイズをスケールに基づいて設定
    gl_PointSize = size * pointScale;
    // 色をフラグメントシェーダへ送る
    vColor = color;
    
}