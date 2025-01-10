attribute vec3 position;
attribute vec4 color;
attribute float size;

uniform float pointScale;
uniform vec2 mouse; // マウスカーソルの座標（-1.0 ~ 1.0）

uniform mat4 mvpMatrix;
varying vec4 vColor;

void main() {
  vColor = color;

  // 頂点座標からマウスの位置を指すベクトル
  vec2 toMouse = mouse - position.xy;
  // ベクトルの長さを測る
  float distanceToMouse = length(toMouse);

  // ちょっとしたオマケで改造（マウスからの距離に応じて頂点を動かす）
  // 方向だけに注目したいので、ベクトルを単位化する
  vec2 normalizedToMouse = normalize(toMouse);
  // 方向の影響を 0.1 倍したものに、距離をもとに求めた値を乗算
  vec2 offset = normalizedToMouse * 0.1 * (1.0 - distanceToMouse);
  // オフセット量を加味して動かしてから出力する
  vec3 p = vec3(position.xy - offset, position.z);
  gl_Position = vec4(p, 1.0);

  // ベクトルの長さを考慮して頂点のサイズを変化させる
  gl_PointSize = size * pointScale * distanceToMouse;

  gl_Position = mvpMatrix * vec4(position, 1.0);

}
