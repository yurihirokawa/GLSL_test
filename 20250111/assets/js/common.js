!function(){var t={254:function(){var t,e,r,i,a,n,s,o;t=document,r={kitId:"xco4aoo",scriptTimeout:3e3,async:!0},i=t.documentElement,a=setTimeout((function(){i.className=i.className.replace(/\bwf-loading\b/g,"")+" wf-inactive"}),r.scriptTimeout),n=t.createElement("script"),s=!1,o=t.getElementsByTagName("script")[0],i.className+=" wf-loading",n.src="https://use.typekit.net/"+r.kitId+".js",n.async=!0,n.onload=n.onreadystatechange=function(){if(e=this.readyState,!(s||e&&"complete"!=e&&"loaded"!=e)){s=!0,clearTimeout(a);try{Typekit.load(r)}catch(t){}}},o.parentNode.insertBefore(n,o)}},e={};function r(i){var a=e[i];if(void 0!==a)return a.exports;var n=e[i]={exports:{}};return t[i](n,n.exports,r),n.exports}!function(){"use strict";class t{static loadFile(t){return new Promise(((e,r)=>{fetch(t).then((t=>t.text())).then((t=>{e(t)})).catch((t=>{r(t)}))}))}static loadImage(t){return new Promise((e=>{const r=new Image;r.addEventListener("load",(()=>{e(r)}),!1),r.src=t}))}static createShader(t,e,r){const i=t.createShader(r);return t.shaderSource(i,e),t.compileShader(i),t.getShaderParameter(i,t.COMPILE_STATUS)?i:(alert(t.getShaderInfoLog(i)),null)}static createProgram(t,e,r){const i=t.createProgram();return t.attachShader(i,e),t.attachShader(i,r),t.linkProgram(i),t.getProgramParameter(i,t.LINK_STATUS)?(t.useProgram(i),i):(alert(t.getProgramInfoLog(i)),null)}static createTransformFeedbackProgram(t,e,r,i){const a=t.createProgram();return t.attachShader(a,e),t.attachShader(a,r),t.transformFeedbackVaryings(a,i,t.SEPARATE_ATTRIBS),t.linkProgram(a),t.getProgramParameter(a,t.LINK_STATUS)?(t.useProgram(a),a):(alert(t.getProgramInfoLog(a)),null)}static createVbo(t,e){const r=t.createBuffer();return t.bindBuffer(t.ARRAY_BUFFER,r),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,null),r}static createIbo(t,e){const r=t.createBuffer();return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,r),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Int16Array(e),t.STATIC_DRAW),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null),r}static createIboInt(t,e,r){if(null==e||null==e.elementIndexUint)throw new Error("element index Uint not supported");const i=t.createBuffer();return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,i),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint32Array(r),t.STATIC_DRAW),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null),i}static createTextureFromFile(t,e){return new Promise((r=>{const i=new Image;i.addEventListener("load",(()=>{const e=t.createTexture();t.bindTexture(t.TEXTURE_2D,e),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,i),t.generateMipmap(t.TEXTURE_2D),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.bindTexture(t.TEXTURE_2D,null),r(e)}),!1),i.src=e}))}static createFramebuffer(t,e,r){const i=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,i);const a=t.createRenderbuffer();t.bindRenderbuffer(t.RENDERBUFFER,a),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,e,r),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,a);const n=t.createTexture();return t.bindTexture(t.TEXTURE_2D,n),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,e,r,0,t.RGBA,t.UNSIGNED_BYTE,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0),t.bindTexture(t.TEXTURE_2D,null),t.bindRenderbuffer(t.RENDERBUFFER,null),t.bindFramebuffer(t.FRAMEBUFFER,null),{framebuffer:i,renderbuffer:a,texture:n}}static createFramebufferFloat(t,e,r,i){if(null==e||null==e.textureFloat&&null==e.textureHalfFloat)throw new Error("float texture not supported");const a=null!=e.textureFloat?t.FLOAT:e.textureHalfFloat.HALF_FLOAT_OES,n=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,n);const s=t.createTexture();return t.bindTexture(t.TEXTURE_2D,s),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,r,i,0,t.RGBA,a,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,s,0),t.bindTexture(t.TEXTURE_2D,null),t.bindFramebuffer(t.FRAMEBUFFER,null),{framebuffer:n,texture:s}}static createFramebufferFloat2(t,e,r){const i=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,i);const a=t.createTexture();return t.bindTexture(t.TEXTURE_2D,a),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,e,r,0,t.RGBA,t.FLOAT,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.REPEAT),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,a,0),t.bindTexture(t.TEXTURE_2D,null),t.bindFramebuffer(t.FRAMEBUFFER,null),{framebuffer:i,texture:a}}static deleteFramebuffer(t,e,r,i){null!=e&&(!0===e.hasOwnProperty("renderbuffer")&&!0===t.isRenderbuffer(e.renderbuffer)&&(t.bindRenderbuffer(t.RENDERBUFFER,this.buffers.renderbuffer),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,r,i)),!0===e.hasOwnProperty("texture")&&!0===t.isTexture(e.texture)&&(t.bindTexture(t.TEXTURE_2D,this.buffers.texture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,r,i,0,t.RGBA,t.UNSIGNED_BYTE,null)))}static deleteFramebuffer(t,e){null!=e&&(!0===e.hasOwnProperty("framebuffer")&&!0===t.isFramebuffer(e.framebuffer)&&(t.bindFramebuffer(t.FRAMEBUFFER,null),t.deleteFramebuffer(e.framebuffer),e.framebuffer=null),!0===e.hasOwnProperty("renderbuffer")&&!0===t.isRenderbuffer(e.renderbuffer)&&(t.bindRenderbuffer(t.RENDERBUFFER,null),t.deleteRenderbuffer(e.renderbuffer),e.renderbuffer=null),!0===e.hasOwnProperty("texture")&&!0===t.isTexture(e.texture)&&(t.bindTexture(t.TEXTURE_2D,null),t.deleteTexture(e.texture),e.texture=null),e=null)}static getWebGLExtensions(t){return{elementIndexUint:t.getExtension("OES_element_index_uint"),textureFloat:t.getExtension("OES_texture_float"),textureHalfFloat:t.getExtension("OES_texture_half_float")}}}class e{constructor(e,r){if(this.gl=e,this.vertexShaderSource=r.vertexShaderSource,this.fragmentShaderSource=r.fragmentShaderSource,this.attribute=r.attribute,this.stride=r.stride,this.uniform=r.uniform,this.type=r.type,this.transformFeedbackVaryings=r.transformFeedbackVaryings,!0!==Array.isArray(this.attribute)||!0!==Array.isArray(this.stride)||this.attribute.length!==this.stride.length)throw new Error("attribute or stride does not match");if(!0===Array.isArray(this.uniform)||!0===Array.isArray(this.type)){if(!0!==Array.isArray(this.uniform)||!0!==Array.isArray(this.type)||this.uniform.length!==this.type.length)throw new Error("uniform or type does not match")}else this.uniform=null,this.type=null;if(this.vertexShader=t.createShader(e,this.vertexShaderSource,e.VERTEX_SHADER),this.fragmentShader=t.createShader(e,this.fragmentShaderSource,e.FRAGMENT_SHADER),null==this.vertexShader||null==this.fragmentShader)throw new Error("shader compilation failed");if(!0===Array.isArray(this.transformFeedbackVaryings)&&this.transformFeedbackVaryings.length>0?this.program=t.createTransformFeedbackProgram(e,this.vertexShader,this.fragmentShader,this.transformFeedbackVaryings):this.program=t.createProgram(e,this.vertexShader,this.fragmentShader),null==this.program)throw new Error("shader program creation failed");this.attributeLocation=this.attribute.map((t=>{const r=e.getAttribLocation(this.program,t);return r})),null!=this.uniform&&(this.uniformLocation=this.uniform.map((t=>{const r=e.getUniformLocation(this.program,t);return r})))}use(){this.gl.useProgram(this.program)}setAttribute(t,e=null){const r=this.gl;if(!0!==Array.isArray(t)||t.length!==this.attribute.length)throw new Error("vbo or attribute does not match");t.forEach(((t,e)=>{r.bindBuffer(r.ARRAY_BUFFER,t),r.enableVertexAttribArray(this.attributeLocation[e]),r.vertexAttribPointer(this.attributeLocation[e],this.stride[e],r.FLOAT,!1,0,0)})),null!=e&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e)}setUniform(t){const e=this.gl;if(null!=this.uniform){if(!0!==Array.isArray(t)||t.length!==this.uniform.length)throw new Error("value is an invalid");t.forEach(((t,r)=>{const i=this.type[r];!0===i.includes("Matrix")?e[i](this.uniformLocation[r],!1,t):e[i](this.uniformLocation[r],t)}))}}}class i{static get Vec2(){return a}static get Vec3(){return n}static get Mat4(){return s}static get Qtn(){return o}}class a{static create(t=0,e=0){const r=new Float32Array(2);return r[0]=t,r[1]=e,r}static length(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])}static normalize(t){const e=a.create(),r=a.length(t);if(r>0){const i=1/r;e[0]=t[0]*i,e[1]=t[1]*i}return e}static dot(t,e){return t[0]*e[0]+t[1]*e[1]}static cross(t,e){a.create();return t[0]*e[1]-t[1]*e[0]}}class n{static create(t=0,e=0,r=0){const i=new Float32Array(3);return i[0]=t,i[1]=e,i[2]=r,i}static length(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2])}static normalize(t){const e=n.create(),r=n.length(t);if(r>0){const i=1/r;e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i}return e}static dot(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}static cross(t,e){return n.create(t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0])}static faceNormal(t,e,r){const i=n.create(e[0]-t[0],e[1]-t[1],e[2]-t[2]),a=n.create(r[0]-t[0],r[1]-t[1],r[2]-t[2]),s=n.create(i[1]*a[2]-i[2]*a[1],i[2]*a[0]-i[0]*a[2],i[0]*a[1]-i[1]*a[0]);return n.normalize(s)}}class s{static create(){return new Float32Array(16)}static identity(t){const e=null==t?s.create():t;return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}static multiply(t,e,r){const i=null==r?s.create():r,a=t[0],n=t[1],o=t[2],c=t[3],l=t[4],u=t[5],h=t[6],E=t[7],f=t[8],m=t[9],T=t[10],d=t[11],R=t[12],A=t[13],g=t[14],_=t[15],F=e[0],b=e[1],p=e[2],U=e[3],y=e[4],D=e[5],x=e[6],S=e[7],P=e[8],v=e[9],I=e[10],M=e[11],w=e[12],L=e[13],B=e[14],X=e[15];return i[0]=F*a+b*l+p*f+U*R,i[1]=F*n+b*u+p*m+U*A,i[2]=F*o+b*h+p*T+U*g,i[3]=F*c+b*E+p*d+U*_,i[4]=y*a+D*l+x*f+S*R,i[5]=y*n+D*u+x*m+S*A,i[6]=y*o+D*h+x*T+S*g,i[7]=y*c+D*E+x*d+S*_,i[8]=P*a+v*l+I*f+M*R,i[9]=P*n+v*u+I*m+M*A,i[10]=P*o+v*h+I*T+M*g,i[11]=P*c+v*E+I*d+M*_,i[12]=w*a+L*l+B*f+X*R,i[13]=w*n+L*u+B*m+X*A,i[14]=w*o+L*h+B*T+X*g,i[15]=w*c+L*E+B*d+X*_,i}static scale(t,e,r){const i=null==r?s.create():r;return i[0]=t[0]*e[0],i[1]=t[1]*e[0],i[2]=t[2]*e[0],i[3]=t[3]*e[0],i[4]=t[4]*e[1],i[5]=t[5]*e[1],i[6]=t[6]*e[1],i[7]=t[7]*e[1],i[8]=t[8]*e[2],i[9]=t[9]*e[2],i[10]=t[10]*e[2],i[11]=t[11]*e[2],i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15],i}static translate(t,e,r){const i=null==r?s.create():r;return i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=t[3],i[4]=t[4],i[5]=t[5],i[6]=t[6],i[7]=t[7],i[8]=t[8],i[9]=t[9],i[10]=t[10],i[11]=t[11],i[12]=t[0]*e[0]+t[4]*e[1]+t[8]*e[2]+t[12],i[13]=t[1]*e[0]+t[5]*e[1]+t[9]*e[2]+t[13],i[14]=t[2]*e[0]+t[6]*e[1]+t[10]*e[2]+t[14],i[15]=t[3]*e[0]+t[7]*e[1]+t[11]*e[2]+t[15],i}static rotate(t,e,r,i){let a=null==i?s.create():i;const n=Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);if(!n)return null;let o=r[0],c=r[1],l=r[2];if(1!=n){const t=1/n;o*=t,c*=t,l*=t}const u=Math.sin(e),h=Math.cos(e),E=1-h,f=t[0],m=t[1],T=t[2],d=t[3],R=t[4],A=t[5],g=t[6],_=t[7],F=t[8],b=t[9],p=t[10],U=t[11],y=o*o*E+h,D=c*o*E+l*u,x=l*o*E-c*u,S=o*c*E-l*u,P=c*c*E+h,v=l*c*E+o*u,I=o*l*E+c*u,M=c*l*E-o*u,w=l*l*E+h;return e?t!=a&&(a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15]):a=t,a[0]=f*y+R*D+F*x,a[1]=m*y+A*D+b*x,a[2]=T*y+g*D+p*x,a[3]=d*y+_*D+U*x,a[4]=f*S+R*P+F*v,a[5]=m*S+A*P+b*v,a[6]=T*S+g*P+p*v,a[7]=d*S+_*P+U*v,a[8]=f*I+R*M+F*w,a[9]=m*I+A*M+b*w,a[10]=T*I+g*M+p*w,a[11]=d*I+_*M+U*w,a}static lookAt(t,e,r,i){const a=null==i?s.create():i,n=t[0],o=t[1],c=t[2],l=e[0],u=e[1],h=e[2],E=r[0],f=r[1],m=r[2];if(n==l&&o==u&&c==h)return s.identity(a);let T,d,R,A,g,_,F,b,p,U;return F=n-l,b=o-u,p=c-h,U=1/Math.sqrt(F*F+b*b+p*p),F*=U,b*=U,p*=U,T=f*p-m*b,d=m*F-E*p,R=E*b-f*F,U=Math.sqrt(T*T+d*d+R*R),U?(U=1/U,T*=U,d*=U,R*=U):(T=0,d=0,R=0),A=b*R-p*d,g=p*T-F*R,_=F*d-b*T,U=Math.sqrt(A*A+g*g+_*_),U?(U=1/U,A*=U,g*=U,_*=U):(A=0,g=0,_=0),a[0]=T,a[1]=A,a[2]=F,a[3]=0,a[4]=d,a[5]=g,a[6]=b,a[7]=0,a[8]=R,a[9]=_,a[10]=p,a[11]=0,a[12]=-(T*n+d*o+R*c),a[13]=-(A*n+g*o+_*c),a[14]=-(F*n+b*o+p*c),a[15]=1,a}static perspective(t,e,r,i,a){const n=null==a?s.create():a,o=r*Math.tan(t*Math.PI/360),c=2*(o*e),l=2*o,u=i-r;return n[0]=2*r/c,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=2*r/l,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=-(i+r)/u,n[11]=-1,n[12]=0,n[13]=0,n[14]=-i*r*2/u,n[15]=0,n}static ortho(t,e,r,i,a,n,o){const c=null==o?s.create():o,l=e-t,u=r-i,h=n-a;return c[0]=2/l,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/u,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/h,c[11]=0,c[12]=-(t+e)/l,c[13]=-(r+i)/u,c[14]=-(n+a)/h,c[15]=1,c}static transpose(t,e){const r=null==e?s.create():e;return r[0]=t[0],r[1]=t[4],r[2]=t[8],r[3]=t[12],r[4]=t[1],r[5]=t[5],r[6]=t[9],r[7]=t[13],r[8]=t[2],r[9]=t[6],r[10]=t[10],r[11]=t[14],r[12]=t[3],r[13]=t[7],r[14]=t[11],r[15]=t[15],r}static inverse(t,e){const r=null==e?s.create():e,i=t[0],a=t[1],n=t[2],o=t[3],c=t[4],l=t[5],u=t[6],h=t[7],E=t[8],f=t[9],m=t[10],T=t[11],d=t[12],R=t[13],A=t[14],g=t[15],_=i*l-a*c,F=i*u-n*c,b=i*h-o*c,p=a*u-n*l,U=a*h-o*l,y=n*h-o*u,D=E*R-f*d,x=E*A-m*d,S=E*g-T*d,P=f*A-m*R,v=f*g-T*R,I=m*g-T*A,M=1/(_*I-F*v+b*P+p*S-U*x+y*D);return r[0]=(l*I-u*v+h*P)*M,r[1]=(-a*I+n*v-o*P)*M,r[2]=(R*y-A*U+g*p)*M,r[3]=(-f*y+m*U-T*p)*M,r[4]=(-c*I+u*S-h*x)*M,r[5]=(i*I-n*S+o*x)*M,r[6]=(-d*y+A*b-g*F)*M,r[7]=(E*y-m*b+T*F)*M,r[8]=(c*v-l*S+h*D)*M,r[9]=(-i*v+a*S-o*D)*M,r[10]=(d*U-R*b+g*_)*M,r[11]=(-E*U+f*b-T*_)*M,r[12]=(-c*P+l*x-u*D)*M,r[13]=(i*P-a*x+n*D)*M,r[14]=(-d*p+R*F-A*_)*M,r[15]=(E*p-f*F+m*_)*M,r}static toVecIV(t,e){const r=t[0],i=t[1],a=t[2],n=t[3],s=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=t[9],E=t[10],f=t[11],m=t[12],T=t[13],d=t[14],R=t[15],A=e[0],g=e[1],_=e[2],F=e[3],b=new Float32Array(4);return b[0]=A*r+g*s+_*u+F*m,b[1]=A*i+g*o+_*h+F*T,b[2]=A*a+g*c+_*E+F*d,b[3]=A*n+g*l+_*f+F*R,b}static screenPositionFromMvp(t,e,r,i){const n=.5*r,o=.5*i,c=s.toVecIV(t,[e[0],e[1],e[2],1]);if(c[3]<=0)return[NaN,NaN];c[0]/=c[3],c[1]/=c[3],c[2]/=c[3];const l=a.create();return l[0]=n+c[0]*n,l[1]=o-c[1]*o,l}}class o{static create(){return new Float32Array(4)}static identity(t){const e=null==t?o.create():t;return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e}static inverse(t,e){const r=null==e?o.create():e;return r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r[3]=t[3],r}static normalize(t){const e=o.create(),r=t[0],i=t[1],a=t[2],n=Math.sqrt(r*r+i*i+a*a);if(n>0){const t=1/n;e[0]=r*t,e[1]=i*t,e[2]=a*t}return e}static multiply(t,e,r){const i=null==r?o.create():r,a=t[0],n=t[1],s=t[2],c=t[3],l=e[0],u=e[1],h=e[2],E=e[3];return i[0]=a*E+c*l+n*h-s*u,i[1]=n*E+c*u+s*l-a*h,i[2]=s*E+c*h+a*u-n*l,i[3]=c*E-a*l-n*u-s*h,i}static rotate(t,e,r){const i=null==r?o.create():r;let a=e[0],n=e[1],s=e[2];const c=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);if(0!==c){const t=1/c;a*=t,n*=t,s*=t}const l=Math.sin(.5*t);return i[0]=a*l,i[1]=n*l,i[2]=s*l,i[3]=Math.cos(.5*t),i}static toVecIII(t,e,r){const i=null==r?n.create():r,a=o.create(),s=o.create(),c=o.create();return o.inverse(e,c),a[0]=t[0],a[1]=t[1],a[2]=t[2],o.multiply(c,a,s),o.multiply(s,e,c),i[0]=c[0],i[1]=c[1],i[2]=c[2],i}static toMatIV(t,e){const r=null==e?s.create():e,i=t[0],a=t[1],n=t[2],o=t[3],c=i+i,l=a+a,u=n+n,h=i*c,E=i*l,f=i*u,m=a*l,T=a*u,d=n*u,R=o*c,A=o*l,g=o*u;return r[0]=1-(m+d),r[1]=E-g,r[2]=f+A,r[3]=0,r[4]=E+g,r[5]=1-(h+d),r[6]=T-R,r[7]=0,r[8]=f-A,r[9]=T+R,r[10]=1-(h+m),r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}static slerp(t,e,r,i){const a=null==i?o.create():i,n=t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3];let s=1-n*n;if(s<=0)a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3];else if(s=Math.sqrt(s),Math.abs(s)<1e-4)a[0]=.5*t[0]+.5*e[0],a[1]=.5*t[1]+.5*e[1],a[2]=.5*t[2]+.5*e[2],a[3]=.5*t[3]+.5*e[3];else{const i=Math.acos(n),o=i*r,c=Math.sin(i-o)/s,l=Math.sin(o)/s;a[0]=t[0]*c+e[0]*l,a[1]=t[1]*c+e[1]*l,a[2]=t[2]*c+e[2]*l,a[3]=t[3]*c+e[3]*l}return a}}const c=i.Vec2,l=i.Vec3,u=i.Mat4,h=i.Qtn;class E{static DEFAULT_DISTANCE=5;static DEFAULT_MIN_DISTANCE=1;static DEFAULT_MAX_DISTANCE=10;static DEFAULT_MOVE_SCALE=2;constructor(t,e={}){this.target=t,this.distance=e.distance||E.DEFAULT_DISTANCE,this.minDistance=e.min||E.DEFAULT_MIN_DISTANCE,this.maxDistance=e.max||E.DEFAULT_MAX_DISTANCE,this.moveScale=e.move||E.DEFAULT_MOVE_SCALE,this.position=l.create(0,0,this.distance),this.center=l.create(0,0,0),this.upDirection=l.create(0,1,0),this.defaultPosition=l.create(0,0,this.distance),this.defaultCenter=l.create(0,0,0),this.defaultUpDirection=l.create(0,1,0),this.movePosition=l.create(0,0,0),this.rotateX=0,this.rotateY=0,this.scale=0,this.isDown=!1,this.prevPosition=c.create(0,0),this.offsetPosition=c.create(0,0),this.qt=h.create(),this.qtx=h.create(),this.qty=h.create(),this.mouseInteractionStart=this.mouseInteractionStart.bind(this),this.mouseInteractionMove=this.mouseInteractionMove.bind(this),this.mouseInteractionEnd=this.mouseInteractionEnd.bind(this),this.wheelScroll=this.wheelScroll.bind(this),this.target.addEventListener("mousedown",this.mouseInteractionStart,!1),this.target.addEventListener("mousemove",this.mouseInteractionMove,!1),this.target.addEventListener("mouseup",this.mouseInteractionEnd,!1),this.target.addEventListener("contextmenu",(t=>{t.preventDefault()}),!1)}mouseInteractionStart(t){this.isDown=!0;const e=this.target.getBoundingClientRect();this.prevPosition=c.create(t.clientX-e.left,t.clientY-e.top)}mouseInteractionMove(t){if(!0!==this.isDown)return;const e=this.target.getBoundingClientRect(),r=e.width,i=e.height,a=t.clientX-e.left,n=t.clientY-e.top,s=1/Math.min(r,i);switch(this.offsetPosition=c.create(a-this.prevPosition[0],n-this.prevPosition[1]),this.prevPosition=c.create(a,n),t.buttons){case 1:this.rotateX+=this.offsetPosition[0]*s,this.rotateY+=this.offsetPosition[1]*s,this.rotateX=this.rotateX%1,this.rotateY=Math.min(Math.max(this.rotateY%1,-.25),.25);break;case 2:const t=l.create(this.offsetPosition[0],-this.offsetPosition[1],0),e=h.toVecIII(t,this.qt);this.movePosition[0]-=e[0]*s*this.moveScale,this.movePosition[1]-=e[1]*s*this.moveScale,this.movePosition[2]-=e[2]*s*this.moveScale}}mouseInteractionEnd(t){this.isDown=!1}wheelScroll(t){const e=t.wheelDelta;e>0?this.scale=-.5:e<0&&(this.scale=.5)}update(){const t=2*Math.PI,e=l.create(1,0,0),r=l.create(0,1,0);return this.scale*=.7,this.distance+=this.scale,this.distance=Math.min(Math.max(this.distance,this.minDistance),this.maxDistance),this.defaultPosition[2]=this.distance,h.identity(this.qt),h.identity(this.qtx),h.identity(this.qty),h.rotate(this.rotateX*t,r,this.qtx),h.toVecIII(e,this.qtx,e),h.rotate(this.rotateY*t,e,this.qty),h.multiply(this.qtx,this.qty,this.qt),h.toVecIII(this.defaultPosition,this.qt,this.position),h.toVecIII(this.defaultUpDirection,this.qt,this.upDirection),this.position[0]+=this.movePosition[0],this.position[1]+=this.movePosition[1],this.position[2]+=this.movePosition[2],this.center[0]=this.defaultCenter[0]+this.movePosition[0],this.center[1]=this.defaultCenter[1]+this.movePosition[1],this.center[2]=this.defaultCenter[2]+this.movePosition[2],u.lookAt(this.position,this.center,this.upDirection)}}window.addEventListener("DOMContentLoaded",(async()=>{const t=new f;window.addEventListener("resize",t.resize,!1),t.init("webgl-canvas"),await t.load(),t.setup(),t.render()}),!1);class f{constructor(){this.canvas=null,this.gl=null,this.running=!1,this.resize=this.resize.bind(this),this.render=this.render.bind(this),this.previousTime=0,this.timeScale=0,this.uTime=0}async load(){const r=await t.loadFile("./main.vert"),i=await t.loadFile("./main.frag");this.shaderProgram=new e(this.gl,{vertexShaderSource:r,fragmentShaderSource:i,attribute:["position","color","size"],stride:[3,4,1],uniform:["mvpMatrix","textureUnit"],type:["uniformMatrix4fv","uniform1i"]})}setup(){const t=this.gl;this.camera=new E(this.canvas,{distance:10,min:1,max:20,move:2}),this.setupGeometry(),this.resize(),this.running=!0,this.previousTime=Date.now(),t.clearColor(.8,1,1,1),window.addEventListener("scroll",(()=>{const e=document.querySelector("#section01").getBoundingClientRect(),r=document.querySelector("#section02").getBoundingClientRect(),i=document.querySelector("#section03").getBoundingClientRect(),a=.6*window.innerHeight;e.top<a&&t.clearColor(.8,1,1,1),r.top<a&&t.clearColor(1,.9,.9,1),i.top<a&&t.clearColor(.8,.9,.8,1),t.clear(t.COLOR_BUFFER_BIT)})),t.clearDepth(1),t.enable(t.DEPTH_TEST),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.texture)}setupGeometry(){const e=[-.5,.5,-.01,0,.5,-.01,-.5,0,-.01,-.5,0,-.01,0,.5,-.01,0,0,-.01],r=e.map(((t,r)=>{const i=Math.PI/4,a=Math.cos(i),n=Math.sin(i);if(r%3==0){return t*a-e[r+1]*n+.1}if(r%3==1){return e[r-1]*n+t*a+.25}return t})),i=Array(9).fill([1,1,1,1]).flat(),a=Array(6).fill([.3,.8,1,1]).flat(),n=Array(6).fill([.9,.4,.3,1]).flat(),s=Array(6).fill([1,.8,.2,1]).flat();let o=[[-.866,-.866,0,-.2,.3,0,.2,.3,0,.2,.3,0,.866,-.866,0,-.866,-.866,0],[-.2,.3,.01,.2,.3,.01,.366,0,.01,.2,.3,.01,-.2,.3,.01,-.366,0,.01,.2,.3,.01,-.2,.3,.01,0,0,.01],e,r],c=[a,i,s,s],l=[n,i,s,s];const u=Array(12).fill([1,1,1,1]).flat(),h=Array(3).fill([.1,.3,.4,1]).flat(),E=Array(3).fill([1,.8,.2,1]).flat();let f=[[0,.866,0,.866,0,0,-.866,0,0,0,0,0,-.866,0,0,-.433,-.433,0,0,0,0,.433,-.433,0,-.433,-.433,0,0,0,0,.866,0,0,.433,-.433,0],[0,.866,.01,.266,.6,.01,-.266,.6,.01],[-.866,0,.01,-.433,.433,.01,0,0,.01,0,0,.01,-.433,-.433,.01,-.866,0,.01],[.866,0,.01,.433,.433,.01,0,0,.01,0,0,.01,.433,-.433,.01,.866,0,.01,0,0,.01,.433,-.433,.01,-.433,-.433,.01],[0,-.1,.012,.3,.2,.012,-.3,.2,.012]],m=[u,h,Array(6).fill([.8,.4,.3,1]).flat(),Array(9).fill([.9,.4,.3,1]).flat(),E],T=[u,h,Array(6).fill([.1,.4,.4,1]).flat(),Array(9).fill([.1,.5,.5,1]).flat(),E];const d=Array(6).fill([1,.8,.2,1]).flat(),R=Array(3).fill([1,1,1,1]).flat(),A=Array(3).fill([.9,.4,.3,1]).flat(),g=Array(6).fill([.1,.3,.4,1]).flat(),_=Array(3).fill([.1,.3,.4,1]).flat();const F=[{positions:o,colors:[c,l]},{positions:f,colors:[m,T]},{positions:[[-.69,-.3,.013,.69,-.3,.013,-.866,-.5,.013,.69,-.3,.013,.866,-.5,.013,-.866,-.5,.013],[0,0,.012,-.4,-.5,.012,.4,-.5,.012],[.2,.26,.01,.5,.26,.01,0,-.5,.01,0,-.5,.01,-.2,.26,.01,-.5,.26,.01],[0,.5,0,-.866,-.5,0,.866,-.5,0]],colors:[[g,R,d,A],[Array(6).fill([1,.8,.2,1]).flat(),R,d,_]]}];function b(t,e){return Array.from({length:t},((r,i)=>i*e-t/2*e))}const p=b(10,2),U=b(10,2);window.addEventListener("scroll",(()=>{const e=[{element:document.querySelector("#section01"),geometry:F[0]},{element:document.querySelector("#section02"),geometry:F[1]},{element:document.querySelector("#section03"),geometry:F[2]}],r=.6*window.innerHeight;e.forEach((({element:e,geometry:i})=>{if(e.getBoundingClientRect().top<r){const{position:e,color:r}=function(t,e){const r=[],i=[];return p.forEach(((a,n)=>{U.forEach(((s,o)=>{t.positions.forEach(((t,o)=>{r.push(...t.map(((t,e)=>e%3==0?t+a:e%3==1?t+s:t))),i.push(...e[(n+1)%2][o])}))}))})),{position:r,color:i}}(i,i.colors);this.vbo=function(e,r,i,a){return[t.createVbo(e,r),t.createVbo(e,i),t.createVbo(e,a)]}(this.gl,e,r,this.pointSize)}}))}));for(let t=0;t<10;t++)p.push(2*t-10),U.push(2*t-10);this.position=[],this.color=[];var y=o,D=l,x=c;for(let t=0;t<p.length;t++)for(let e=0;e<U.length;e++)y.forEach(((r,i)=>{this.position.push(...r.map(((r,i)=>i%3==0?r+p[t]:i%3==1?r+U[e]:r))),(t+1)%2==1?this.color.push(...D[i]):this.color.push(...x[i])}));this.vbo=[t.createVbo(this.gl,this.position),t.createVbo(this.gl,this.color),t.createVbo(this.gl,this.pointSize)]}render(){const t=this.gl,e=i.Mat4,r=i.Vec3;!0===this.running&&requestAnimationFrame(this.render);const a=Date.now(),n=(a-this.previousTime)/1e3;this.uTime+=n*this.timeScale,this.previousTime=a,t.viewport(0,0,this.canvas.width,this.canvas.height),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT);const s=r.create(0,1,0),o=.2*this.uTime,c=e.rotate(e.identity(),o,s),l=this.camera.update(),u=this.canvas.width/this.canvas.height,h=e.perspective(60,u,.1,20),E=e.multiply(h,l),f=e.multiply(E,c);this.shaderProgram.use(),this.shaderProgram.setAttribute(this.vbo),this.shaderProgram.setUniform([f,0]),t.drawArrays(t.TRIANGLES,0,this.position.length/3)}resize(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight}init(t,e={}){if(t instanceof HTMLCanvasElement==!0)this.canvas=t;else if("[object String]"===Object.prototype.toString.call(t)){const e=document.querySelector(`#${t}`);e instanceof HTMLCanvasElement==!0&&(this.canvas=e)}if(null==this.canvas)throw new Error("invalid argument");if(this.gl=this.canvas.getContext("webgl",e),null==this.gl)throw new Error("webgl not supported")}}r(254)}()}();