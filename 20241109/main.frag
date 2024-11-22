precision mediump float;
varying vec4 vColor;

void main(void) {
    // gl_PointCoord は点の内側座標 (0.0 ~ 1.0)
    vec2 coord = gl_PointCoord * 2.0 - 1.0; // (-1.0 ~ 1.0)
    float dist = dot(coord, coord);
    
    // 円形にカットする (dist > 1.0 の部分を透明にする)
    if (dist > 1.0) {
        discard;
    }
    // 点の色を設定
    gl_FragColor = vColor;
}