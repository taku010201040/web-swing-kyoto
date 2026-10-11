(()=>{var oe=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};var Bv=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};function sn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ti[i&255]+ti[i>>8&255]+ti[i>>16&255]+ti[i>>24&255]+"-"+ti[e&255]+ti[e>>8&255]+"-"+ti[e>>16&15|64]+ti[e>>24&255]+"-"+ti[t&63|128]+ti[t>>8&255]+"-"+ti[t>>16&255]+ti[t>>24&255]+ti[n&255]+ti[n>>8&255]+ti[n>>16&255]+ti[n>>24&255]).toLowerCase()}function Nt(i,e,t){return Math.max(e,Math.min(t,i))}function mf(i,e){return(i%e+e)%e}function Mb(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Sb(i,e,t){return i!==e?(t-i)/(e-i):0}function Yo(i,e,t){return(1-t)*i+t*e}function Tb(i,e,t,n){return Yo(i,e,1-Math.exp(-t*n))}function wb(i,e=1){return e-Math.abs(mf(i,e*2)-e)}function Eb(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ab(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Cb(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Rb(i,e){return i+Math.random()*(e-i)}function Pb(i){return i*(.5-Math.random())}function Ib(i){i!==void 0&&(jm=i);let e=jm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lb(i){return i*qo}function Db(i){return i*kr}function Ub(i){return(i&i-1)===0&&i!==0}function Nb(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bb(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Fb(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function nn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function v0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Qo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ob(){let i=Qo("canvas");return i.style.display="block",i}function Go(i){i in Zm||(Zm[i]=!0,console.warn(i))}function zb(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function kb(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Vb(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}function Cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function tu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function nu(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Bs.fromArray(i,r);let a=s.x*Math.abs(Bs.x)+s.y*Math.abs(Bs.y)+s.z*Math.abs(Bs.z),l=e.dot(Bs),c=t.dot(Bs),h=n.dot(Bs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function gu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Qb(i,e,t,n,s,r,o,a){let l;if(e.side===ri?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Li,a),l===null)return null;Ml.copy(a),Ml.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ml);return c<t.near||c>t.far?null:{distance:c,point:Ml.clone(),object:i}}function Sl(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,xl),i.getVertexPosition(l,_l),i.getVertexPosition(c,vl);let h=Qb(i,e,t,n,xl,_l,vl,dg);if(h){let u=new C;si.getBarycoord(dg,xl,_l,vl,u),s&&(h.uv=si.getInterpolatedAttribute(s,a,l,c,u,new Q)),r&&(h.uv1=si.getInterpolatedAttribute(r,a,l,c,u,new Q)),o&&(h.normal=si.getInterpolatedAttribute(o,a,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new C,materialIndex:0};si.getNormal(xl,_l,vl,d.normal),h.face=d,h.barycoord=u}return h}function Vr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function li(i){let e={};for(let t=0;t<i.length;t++){let n=Vr(i[t]);for(let s in n)e[s]=n[s]}return e}function eM(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function M0(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}function S0(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function oM(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],y=u[f];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let y=u[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}function VT(i,e,t,n,s,r,o){let a=new ve(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function p(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function y(v){let x=!1,_=p(v);_===null?m(a,l):_&&_.isColor&&(m(_,1),x=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(v,x){let _=p(x);_&&(_.isCubeTexture||_.mapping===Tc)?(h===void 0&&(h=new Ve(new Pn(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:Vr(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),zs.copy(x.backgroundRotation),zs.x*=-1,zs.y*=-1,zs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kT.makeRotationFromEuler(zs)),h.material.toneMapped=Ye.getTransfer(_.colorSpace)!==mt,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Ve(new Hr(2,2),new Ui({name:"BackgroundMaterial",uniforms:Vr(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(_.colorSpace)!==mt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,x){v.getRGB(wl,M0(i)),n.buffers.color.setClear(wl.r,wl.g,wl.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(a,l)},render:y,addToRenderList:g}}function HT(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(b,I,U,L,N){let H=!1,k=u(L,U,I);r!==k&&(r=k,c(r.object)),H=f(b,L,U,N),H&&p(b,L,U,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,_(b,I,U,L),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,I,U){let L=U.wireframe===!0,N=n[b.id];N===void 0&&(N={},n[b.id]=N);let H=N[I.id];H===void 0&&(H={},N[I.id]=H);let k=H[L];return k===void 0&&(k=d(l()),H[L]=k),k}function d(b){let I=[],U=[],L=[];for(let N=0;N<t;N++)I[N]=0,U[N]=0,L[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:L,object:b,attributes:{},index:null}}function f(b,I,U,L){let N=r.attributes,H=I.attributes,k=0,ee=U.getAttributes();for(let q in ee)if(ee[q].location>=0){let ce=N[q],_e=H[q];if(_e===void 0&&(q==="instanceMatrix"&&b.instanceMatrix&&(_e=b.instanceMatrix),q==="instanceColor"&&b.instanceColor&&(_e=b.instanceColor)),ce===void 0||ce.attribute!==_e||_e&&ce.data!==_e.data)return!0;k++}return r.attributesNum!==k||r.index!==L}function p(b,I,U,L){let N={},H=I.attributes,k=0,ee=U.getAttributes();for(let q in ee)if(ee[q].location>=0){let ce=H[q];ce===void 0&&(q==="instanceMatrix"&&b.instanceMatrix&&(ce=b.instanceMatrix),q==="instanceColor"&&b.instanceColor&&(ce=b.instanceColor));let _e={};_e.attribute=ce,ce&&ce.data&&(_e.data=ce.data),N[q]=_e,k++}r.attributes=N,r.attributesNum=k,r.index=L}function y(){let b=r.newAttributes;for(let I=0,U=b.length;I<U;I++)b[I]=0}function g(b){m(b,0)}function m(b,I){let U=r.newAttributes,L=r.enabledAttributes,N=r.attributeDivisors;U[b]=1,L[b]===0&&(i.enableVertexAttribArray(b),L[b]=1),N[b]!==I&&(i.vertexAttribDivisor(b,I),N[b]=I)}function v(){let b=r.newAttributes,I=r.enabledAttributes;for(let U=0,L=I.length;U<L;U++)I[U]!==b[U]&&(i.disableVertexAttribArray(U),I[U]=0)}function x(b,I,U,L,N,H,k){k===!0?i.vertexAttribIPointer(b,I,U,N,H):i.vertexAttribPointer(b,I,U,L,N,H)}function _(b,I,U,L){y();let N=L.attributes,H=U.getAttributes(),k=I.defaultAttributeValues;for(let ee in H){let q=H[ee];if(q.location>=0){let re=N[ee];if(re===void 0&&(ee==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),ee==="instanceColor"&&b.instanceColor&&(re=b.instanceColor)),re!==void 0){let ce=re.normalized,_e=re.itemSize,Be=e.get(re);if(Be===void 0)continue;let xe=Be.buffer,G=Be.type,K=Be.bytesPerElement,he=G===i.INT||G===i.UNSIGNED_INT||re.gpuType===cf;if(re.isInterleavedBufferAttribute){let se=re.data,Ee=se.stride,Ce=re.offset;if(se.isInstancedInterleavedBuffer){for(let Le=0;Le<q.locationSize;Le++)m(q.location+Le,se.meshPerAttribute);b.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Le=0;Le<q.locationSize;Le++)g(q.location+Le);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let Le=0;Le<q.locationSize;Le++)x(q.location+Le,_e/q.locationSize,G,ce,Ee*K,(Ce+_e/q.locationSize*Le)*K,he)}else{if(re.isInstancedBufferAttribute){for(let se=0;se<q.locationSize;se++)m(q.location+se,re.meshPerAttribute);b.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let se=0;se<q.locationSize;se++)g(q.location+se);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let se=0;se<q.locationSize;se++)x(q.location+se,_e/q.locationSize,G,ce,_e*K,_e/q.locationSize*se*K,he)}}else if(k!==void 0){let ce=k[ee];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(q.location,ce);break;case 3:i.vertexAttrib3fv(q.location,ce);break;case 4:i.vertexAttrib4fv(q.location,ce);break;default:i.vertexAttrib1fv(q.location,ce)}}}}v()}function T(){A();for(let b in n){let I=n[b];for(let U in I){let L=I[U];for(let N in L)h(L[N].object),delete L[N];delete I[U]}delete n[b]}}function S(b){if(n[b.id]===void 0)return;let I=n[b.id];for(let U in I){let L=I[U];for(let N in L)h(L[N].object),delete L[N];delete I[U]}delete n[b.id]}function w(b){for(let I in n){let U=n[I];if(U[b.id]===void 0)continue;let L=U[b.id];for(let N in L)h(L[N].object),delete L[N];delete U[b.id]}}function A(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:g,disableUnusedAttributes:v}}function GT(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let p=0;for(let y=0;y<u;y++)p+=h[y]*d[y];t.update(p,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function WT(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==vi&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let A=w===fa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==dn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==_i&&!A)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=p>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:T,maxSamples:S}}function XT(i){let e=this,t=null,n=0,s=!1,r=!1,o=new ci,a=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,y=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let v=r?0:n,x=v*4,_=m.clippingState||null;l.value=_,_=h(p,d,x,f);for(let T=0;T!==x;++T)_[T]=t[T];m.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){let y=u!==null?u.length:0,g=null;if(y!==0){if(g=l.value,p!==!0||g===null){let m=f+y*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let x=0,_=f;x!==y;++x,_+=4)o.copy(u[x]).applyMatrix4(v,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function qT(i){let e=new WeakMap;function t(o,a){return a===Xu?o.mapping=Ur:a===qu&&(o.mapping=Nr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Xu||a===qu)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Td(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}function YT(i){let e=[],t=[],n=[],s=i,r=i-Cr+1+mg.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Cr?l=mg[o-i+Cr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,y=3,g=2,m=1,v=new Float32Array(y*p*f),x=new Float32Array(g*p*f),_=new Float32Array(m*p*f);for(let S=0;S<f;S++){let w=S%3*2/3-1,A=S>2?0:-1,M=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];v.set(M,y*p*S),x.set(d,g*p*S);let b=[S,S,S,S,S,S];_.set(b,m*p*S)}let T=new Qe;T.setAttribute("position",new He(v,y)),T.setAttribute("uv",new He(x,g)),T.setAttribute("faceIndex",new He(_,m)),e.push(T),s>Cr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xg(i,e,t){let n=new ki(i,e,t);return n.texture.mapping=Tc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function El(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function jT(i,e,t){let n=new Float32Array(Xs),s=new C(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:Xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function _g(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function vg(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function gf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ZT(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Xu||l===qu,h=l===Ur||l===Nr;if(c||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Jl(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Jl(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function $T(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Go("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function KT(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);for(let p in d.morphAttributes){let y=d.morphAttributes[p];for(let g=0,m=y.length;g<m;g++)e.remove(y[g])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)e.update(d[p],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let p in f){let y=f[p];for(let g=0,m=y.length;g<m;g++)e.update(y[g],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,p=u.attributes.position,y=0;if(f!==null){let v=f.array;y=f.version;for(let x=0,_=v.length;x<_;x+=3){let T=v[x+0],S=v[x+1],w=v[x+2];d.push(T,S,S,w,w,T)}}else if(p!==void 0){let v=p.array;y=p.version;for(let x=0,_=v.length/3-1;x<_;x+=3){let T=x+0,S=x+1,w=x+2;d.push(T,S,S,w,w,T)}}else return;let g=new(v0(d)?Zl:jl)(d,1);g.version=y;let m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function JT(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,d*o,p),t.update(f,n,p))}function h(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,n,1)}function u(d,f,p,y){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],y[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,y,0,p);let m=0;for(let v=0;v<p;v++)m+=f[v]*y[v];t.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function QT(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ew(i,e,t){let n=new WeakMap,s=new nt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let M=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],x=0;f===!0&&(x=1),p===!0&&(x=2),y===!0&&(x=3);let _=a.attributes.position.count*x,T=1;_>e.maxTextureSize&&(T=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let S=new Float32Array(_*T*4*u),w=new Yl(S,_,T,u);w.type=_i,w.needsUpdate=!0;let A=x*4;for(let b=0;b<u;b++){let I=g[b],U=m[b],L=v[b],N=_*T*4*b;for(let H=0;H<I.count;H++){let k=H*A;f===!0&&(s.fromBufferAttribute(I,H),S[N+k+0]=s.x,S[N+k+1]=s.y,S[N+k+2]=s.z,S[N+k+3]=0),p===!0&&(s.fromBufferAttribute(U,H),S[N+k+4]=s.x,S[N+k+5]=s.y,S[N+k+6]=s.z,S[N+k+7]=0),y===!0&&(s.fromBufferAttribute(L,H),S[N+k+8]=s.x,S[N+k+9]=s.y,S[N+k+10]=s.z,S[N+k+11]=L.itemSize===4?s.w:1)}}d={count:u,texture:w,size:new Q(_,T)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function tw(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}function Kr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Mg[s];if(r===void 0&&(r=new Float32Array(s),Mg[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Pc(i,e){let t=Sg[e];t===void 0&&(t=new Int32Array(e),Sg[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function iw(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function nw(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2fv(this.addr,e),Ht(t,e)}}function sw(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;i.uniform3fv(this.addr,e),Ht(t,e)}}function rw(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4fv(this.addr,e),Ht(t,e)}}function ow(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,n))return;Eg.set(n),i.uniformMatrix2fv(this.addr,!1,Eg),Ht(t,n)}}function aw(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,n))return;wg.set(n),i.uniformMatrix3fv(this.addr,!1,wg),Ht(t,n)}}function lw(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,n))return;Tg.set(n),i.uniformMatrix4fv(this.addr,!1,Tg),Ht(t,n)}}function cw(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function hw(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2iv(this.addr,e),Ht(t,e)}}function uw(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3iv(this.addr,e),Ht(t,e)}}function dw(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4iv(this.addr,e),Ht(t,e)}}function fw(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function pw(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2uiv(this.addr,e),Ht(t,e)}}function mw(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3uiv(this.addr,e),Ht(t,e)}}function gw(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4uiv(this.addr,e),Ht(t,e)}}function yw(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(bg.compareFunction=_0,r=bg):r=T0,t.setTexture2D(e||r,s)}function xw(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||E0,s)}function _w(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||A0,s)}function vw(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||w0,s)}function bw(i){switch(i){case 5126:return iw;case 35664:return nw;case 35665:return sw;case 35666:return rw;case 35674:return ow;case 35675:return aw;case 35676:return lw;case 5124:case 35670:return cw;case 35667:case 35671:return hw;case 35668:case 35672:return uw;case 35669:case 35673:return dw;case 5125:return fw;case 36294:return pw;case 36295:return mw;case 36296:return gw;case 35678:case 36198:case 36298:case 36306:case 35682:return yw;case 35679:case 36299:case 36307:return xw;case 35680:case 36300:case 36308:case 36293:return _w;case 36289:case 36303:case 36311:case 36292:return vw}}function Mw(i,e){i.uniform1fv(this.addr,e)}function Sw(i,e){let t=Kr(e,this.size,2);i.uniform2fv(this.addr,t)}function Tw(i,e){let t=Kr(e,this.size,3);i.uniform3fv(this.addr,t)}function ww(i,e){let t=Kr(e,this.size,4);i.uniform4fv(this.addr,t)}function Ew(i,e){let t=Kr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Aw(i,e){let t=Kr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Cw(i,e){let t=Kr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Rw(i,e){i.uniform1iv(this.addr,e)}function Pw(i,e){i.uniform2iv(this.addr,e)}function Iw(i,e){i.uniform3iv(this.addr,e)}function Lw(i,e){i.uniform4iv(this.addr,e)}function Dw(i,e){i.uniform1uiv(this.addr,e)}function Uw(i,e){i.uniform2uiv(this.addr,e)}function Nw(i,e){i.uniform3uiv(this.addr,e)}function Bw(i,e){i.uniform4uiv(this.addr,e)}function Fw(i,e,t){let n=this.cache,s=e.length,r=Pc(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||T0,r[o])}function Ow(i,e,t){let n=this.cache,s=e.length,r=Pc(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||E0,r[o])}function zw(i,e,t){let n=this.cache,s=e.length,r=Pc(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||A0,r[o])}function kw(i,e,t){let n=this.cache,s=e.length,r=Pc(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||w0,r[o])}function Vw(i){switch(i){case 5126:return Mw;case 35664:return Sw;case 35665:return Tw;case 35666:return ww;case 35674:return Ew;case 35675:return Aw;case 35676:return Cw;case 5124:case 35670:return Rw;case 35667:case 35671:return Pw;case 35668:case 35672:return Iw;case 35669:case 35673:return Lw;case 5125:return Dw;case 36294:return Uw;case 36295:return Nw;case 36296:return Bw;case 35678:case 36198:case 36298:case 36306:case 35682:return Fw;case 35679:case 36299:case 36307:return Ow;case 35680:case 36300:case 36308:case 36293:return zw;case 36289:case 36303:case 36311:case 36292:return kw}}function Ag(i,e){i.seq.push(e),i.map[e.id]=e}function Hw(i,e,t){let n=i.name,s=n.length;for(wu.lastIndex=0;;){let r=wu.exec(n),o=wu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ag(t,c===void 0?new wd(a,i,e):new Ed(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Ad(a),Ag(t,u)),t=u}}}function Cg(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function Xw(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function qw(i){Ye._getMatrix(Rg,Ye.workingColorSpace,i);let e=`mat3( ${Rg.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(i)){case Rc:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Pg(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Xw(i.getShaderSource(e),o)}else return s}function Yw(i,e){let t=qw(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function jw(i,e){let t;switch(e){case nb:t="Linear";break;case sb:t="Reinhard";break;case rb:t="Cineon";break;case ob:t="ACESFilmic";break;case lb:t="AgX";break;case cb:t="Neutral";break;case ab:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Zw(){Ye.getLuminanceCoefficients(Al);let i=Al.x.toFixed(4),e=Al.y.toFixed(4),t=Al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $w(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function Kw(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Jw(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Wo(i){return i!==""}function Ig(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Cd(i){return i.replace(Qw,t1)}function t1(i,e){let t=We[e];if(t===void 0){let n=e1.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Cd(t)}function Dg(i){return i.replace(i1,n1)}function n1(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ug(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function s1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===l0?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===zv?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===wn&&(e="SHADOWMAP_TYPE_VSM"),e}function r1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ur:case Nr:e="ENVMAP_TYPE_CUBE";break;case Tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function o1(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Nr&&(e="ENVMAP_MODE_REFRACTION"),e}function a1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case af:e="ENVMAP_BLENDING_MULTIPLY";break;case tb:e="ENVMAP_BLENDING_MIX";break;case ib:e="ENVMAP_BLENDING_ADD";break}return e}function l1(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function c1(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=s1(t),c=r1(t),h=o1(t),u=a1(t),d=l1(t),f=$w(t),p=Kw(r),y=s.createProgram(),g,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Wo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Wo).join(`
`),m.length>0&&(m+=`
`)):(g=[Ug(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),m=[Ug(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==as?"#define TONE_MAPPING":"",t.toneMapping!==as?We.tonemapping_pars_fragment:"",t.toneMapping!==as?jw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Yw("linearToOutputTexel",t.outputColorSpace),Zw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wo).join(`
`)),o=Cd(o),o=Ig(o,t),o=Lg(o,t),a=Cd(a),a=Ig(a,t),a=Lg(a,t),o=Dg(o),a=Dg(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Ym?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ym?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=v+g+o,_=v+m+a,T=Cg(s,s.VERTEX_SHADER,x),S=Cg(s,s.FRAGMENT_SHADER,_);s.attachShader(y,T),s.attachShader(y,S),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function w(I){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(y).trim(),L=s.getShaderInfoLog(T).trim(),N=s.getShaderInfoLog(S).trim(),H=!0,k=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,T,S);else{let ee=Pg(s,T,"vertex"),q=Pg(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+ee+`
`+q)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(L===""||N==="")&&(k=!1);k&&(I.diagnostics={runnable:H,programLog:U,vertexShader:{log:L,prefix:g},fragmentShader:{log:N,prefix:m}})}s.deleteShader(T),s.deleteShader(S),A=new Lr(s,y),M=Jw(s,y)}let A;this.getUniforms=function(){return A===void 0&&w(this),A};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(y,Gw)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ww++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=S,this}function u1(i,e,t,n,s,r,o){let a=new ta,l=new Rd,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,b,I,U,L){let N=U.fog,H=L.geometry,k=M.isMeshStandardMaterial?U.environment:null,ee=(M.isMeshStandardMaterial?t:e).get(M.envMap||k),q=ee&&ee.mapping===Tc?ee.image.height:null,re=p[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let ce=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,_e=ce!==void 0?ce.length:0,Be=0;H.morphAttributes.position!==void 0&&(Be=1),H.morphAttributes.normal!==void 0&&(Be=2),H.morphAttributes.color!==void 0&&(Be=3);let xe,G,K,he;if(re){let dt=hn[re];xe=dt.vertexShader,G=dt.fragmentShader}else xe=M.vertexShader,G=M.fragmentShader,l.update(M),K=l.getVertexShaderID(M),he=l.getFragmentShaderID(M);let se=i.getRenderTarget(),Ee=i.state.buffers.depth.getReversed(),Ce=L.isInstancedMesh===!0,Le=L.isBatchedMesh===!0,yt=!!M.map,qe=!!M.matcap,Pt=!!ee,B=!!M.aoMap,vt=!!M.lightMap,Fe=!!M.bumpMap,Oe=!!M.normalMap,Ae=!!M.displacementMap,Tt=!!M.emissiveMap,Re=!!M.metalnessMap,D=!!M.roughnessMap,E=M.anisotropy>0,V=M.clearcoat>0,Z=M.dispersion>0,J=M.iridescence>0,j=M.sheen>0,Te=M.transmission>0,ue=E&&!!M.anisotropyMap,me=V&&!!M.clearcoatMap,it=V&&!!M.clearcoatNormalMap,ie=V&&!!M.clearcoatRoughnessMap,ge=J&&!!M.iridescenceMap,Pe=J&&!!M.iridescenceThicknessMap,De=j&&!!M.sheenColorMap,ye=j&&!!M.sheenRoughnessMap,et=!!M.specularMap,Ge=!!M.specularColorMap,bt=!!M.specularIntensityMap,F=Te&&!!M.transmissionMap,le=Te&&!!M.thicknessMap,Y=!!M.gradientMap,$=!!M.alphaMap,pe=M.alphaTest>0,de=!!M.alphaHash,ze=!!M.extensions,Dt=as;M.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Dt=i.toneMapping);let ei={shaderID:re,shaderType:M.type,shaderName:M.name,vertexShader:xe,fragmentShader:G,defines:M.defines,customVertexShaderID:K,customFragmentShaderID:he,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Le,batchingColor:Le&&L._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&L.instanceColor!==null,instancingMorph:Ce&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:qt,alphaToCoverage:!!M.alphaToCoverage,map:yt,matcap:qe,envMap:Pt,envMapMode:Pt&&ee.mapping,envMapCubeUVHeight:q,aoMap:B,lightMap:vt,bumpMap:Fe,normalMap:Oe,displacementMap:d&&Ae,emissiveMap:Tt,normalMapObjectSpace:Oe&&M.normalMapType===pb,normalMapTangentSpace:Oe&&M.normalMapType===pf,metalnessMap:Re,roughnessMap:D,anisotropy:E,anisotropyMap:ue,clearcoat:V,clearcoatMap:me,clearcoatNormalMap:it,clearcoatRoughnessMap:ie,dispersion:Z,iridescence:J,iridescenceMap:ge,iridescenceThicknessMap:Pe,sheen:j,sheenColorMap:De,sheenRoughnessMap:ye,specularMap:et,specularColorMap:Ge,specularIntensityMap:bt,transmission:Te,transmissionMap:F,thicknessMap:le,gradientMap:Y,opaque:M.transparent===!1&&M.blending===Rr&&M.alphaToCoverage===!1,alphaMap:$,alphaTest:pe,alphaHash:de,combine:M.combine,mapUv:yt&&y(M.map.channel),aoMapUv:B&&y(M.aoMap.channel),lightMapUv:vt&&y(M.lightMap.channel),bumpMapUv:Fe&&y(M.bumpMap.channel),normalMapUv:Oe&&y(M.normalMap.channel),displacementMapUv:Ae&&y(M.displacementMap.channel),emissiveMapUv:Tt&&y(M.emissiveMap.channel),metalnessMapUv:Re&&y(M.metalnessMap.channel),roughnessMapUv:D&&y(M.roughnessMap.channel),anisotropyMapUv:ue&&y(M.anisotropyMap.channel),clearcoatMapUv:me&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:it&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:De&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:ye&&y(M.sheenRoughnessMap.channel),specularMapUv:et&&y(M.specularMap.channel),specularColorMapUv:Ge&&y(M.specularColorMap.channel),specularIntensityMapUv:bt&&y(M.specularIntensityMap.channel),transmissionMapUv:F&&y(M.transmissionMap.channel),thicknessMapUv:le&&y(M.thicknessMap.channel),alphaMapUv:$&&y(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Oe||E),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!H.attributes.uv&&(yt||$),fog:!!N,useFog:M.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ee,skinning:L.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Be,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Dt,decodeVideoTexture:yt&&M.map.isVideoTexture===!0&&Ye.getTransfer(M.map.colorSpace)===mt,decodeVideoTextureEmissive:Tt&&M.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(M.emissiveMap.colorSpace)===mt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Zt,flipSided:M.side===ri,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ze&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&M.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ei.vertexUv1s=c.has(1),ei.vertexUv2s=c.has(2),ei.vertexUv3s=c.has(3),c.clear(),ei}function m(M){let b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(let I in M.defines)b.push(I),b.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(v(b,M),x(b,M),b.push(i.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function v(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function x(M,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),M.push(a.mask)}function _(M){let b=p[M.type],I;if(b){let U=hn[b];I=tM.clone(U.uniforms)}else I=M.uniforms;return I}function T(M,b){let I;for(let U=0,L=h.length;U<L;U++){let N=h[U];if(N.cacheKey===b){I=N,++I.usedTimes;break}}return I===void 0&&(I=new c1(i,b,M,r),h.push(I)),I}function S(M){if(--M.usedTimes===0){let b=h.indexOf(M);h[b]=h[h.length-1],h.pop(),M.destroy()}}function w(M){l.remove(M)}function A(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:_,acquireProgram:T,releaseProgram:S,releaseShaderCache:w,programs:h,dispose:A}}function d1(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function f1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ng(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Bg(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,p,y,g){let m=i[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:y,group:g},i[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=y,m.group=g),e++,m}function a(u,d,f,p,y,g){let m=o(u,d,f,p,y,g);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(u,d,f,p,y,g){let m=o(u,d,f,p,y,g);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||f1),n.length>1&&n.sort(d||Ng),s.length>1&&s.sort(d||Ng)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function p1(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Bg,i.set(n,[o])):s>=r.length?(o=new Bg,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function m1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new ve};break;case"SpotLight":t={position:new C,direction:new C,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function g1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function x1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function _1(i){let e=new m1,t=g1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new te,o=new te;function a(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,p=0,y=0,g=0,m=0,v=0,x=0,_=0,T=0,S=0,w=0;c.sort(x1);for(let M=0,b=c.length;M<b;M++){let I=c[M],U=I.color,L=I.intensity,N=I.distance,H=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=U.r*L,u+=U.g*L,d+=U.b*L;else if(I.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(I.sh.coefficients[k],L);w++}else if(I.isDirectionalLight){let k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let ee=I.shadow,q=t.get(I);q.shadowIntensity=ee.intensity,q.shadowBias=ee.bias,q.shadowNormalBias=ee.normalBias,q.shadowRadius=ee.radius,q.shadowMapSize=ee.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=H,n.directionalShadowMatrix[f]=I.shadow.matrix,v++}n.directional[f]=k,f++}else if(I.isSpotLight){let k=e.get(I);k.position.setFromMatrixPosition(I.matrixWorld),k.color.copy(U).multiplyScalar(L),k.distance=N,k.coneCos=Math.cos(I.angle),k.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),k.decay=I.decay,n.spot[y]=k;let ee=I.shadow;if(I.map&&(n.spotLightMap[T]=I.map,T++,ee.updateMatrices(I),I.castShadow&&S++),n.spotLightMatrix[y]=ee.matrix,I.castShadow){let q=t.get(I);q.shadowIntensity=ee.intensity,q.shadowBias=ee.bias,q.shadowNormalBias=ee.normalBias,q.shadowRadius=ee.radius,q.shadowMapSize=ee.mapSize,n.spotShadow[y]=q,n.spotShadowMap[y]=H,_++}y++}else if(I.isRectAreaLight){let k=e.get(I);k.color.copy(U).multiplyScalar(L),k.halfWidth.set(I.width*.5,0,0),k.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=k,g++}else if(I.isPointLight){let k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),k.distance=I.distance,k.decay=I.decay,I.castShadow){let ee=I.shadow,q=t.get(I);q.shadowIntensity=ee.intensity,q.shadowBias=ee.bias,q.shadowNormalBias=ee.normalBias,q.shadowRadius=ee.radius,q.shadowMapSize=ee.mapSize,q.shadowCameraNear=ee.camera.near,q.shadowCameraFar=ee.camera.far,n.pointShadow[p]=q,n.pointShadowMap[p]=H,n.pointShadowMatrix[p]=I.shadow.matrix,x++}n.point[p]=k,p++}else if(I.isHemisphereLight){let k=e.get(I);k.skyColor.copy(I.color).multiplyScalar(L),k.groundColor.copy(I.groundColor).multiplyScalar(L),n.hemi[m]=k,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let A=n.hash;(A.directionalLength!==f||A.pointLength!==p||A.spotLength!==y||A.rectAreaLength!==g||A.hemiLength!==m||A.numDirectionalShadows!==v||A.numPointShadows!==x||A.numSpotShadows!==_||A.numSpotMaps!==T||A.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+T-S,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=w,A.directionalLength=f,A.pointLength=p,A.spotLength=y,A.rectAreaLength=g,A.hemiLength=m,A.numDirectionalShadows=v,A.numPointShadows=x,A.numSpotShadows=_,A.numSpotMaps=T,A.numLightProbes=w,n.version=y1++)}function l(c,h){let u=0,d=0,f=0,p=0,y=0,g=h.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){let x=c[m];if(x.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),u++}else if(x.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),f++}else if(x.isRectAreaLight){let _=n.rectArea[p];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(x.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),p++}else if(x.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){let _=n.hemi[y];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:n}}function Fg(i){let e=new _1(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function v1(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Fg(i),e.set(s,[a])):r>=o.length?(a=new Fg(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function S1(i,e,t){let n=new In,s=new Q,r=new Q,o=new nt,a=new Id({depthPacking:fb}),l=new Ld,c={},h=t.maxTextureSize,u={[Li]:ri,[ri]:Li,[Zt]:Zt},d=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:b1,fragmentShader:M1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Qe;p.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ve(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=l0;let m=this.type;this.render=function(S,w,A){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let M=i.getRenderTarget(),b=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),U=i.state;U.setBlending(os),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let L=m!==wn&&this.type===wn,N=m===wn&&this.type!==wn;for(let H=0,k=S.length;H<k;H++){let ee=S[H],q=ee.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let re=q.getFrameExtents();if(s.multiply(re),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,q.mapSize.y=r.y)),q.map===null||L===!0||N===!0){let _e=this.type!==wn?{minFilter:$t,magFilter:$t}:{};q.map!==null&&q.map.dispose(),q.map=new ki(s.x,s.y,_e),q.map.texture.name=ee.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let ce=q.getViewportCount();for(let _e=0;_e<ce;_e++){let Be=q.getViewport(_e);o.set(r.x*Be.x,r.y*Be.y,r.x*Be.z,r.y*Be.w),U.viewport(o),q.updateMatrices(ee,_e),n=q.getFrustum(),_(w,A,q.camera,ee,this.type)}q.isPointLightShadow!==!0&&this.type===wn&&v(q,A),q.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(M,b,I)};function v(S,w){let A=e.update(y);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new ki(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(w,null,A,d,y,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(w,null,A,f,y,null)}function x(S,w,A,M){let b=null,I=A.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)b=I;else if(b=A.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let U=b.uuid,L=w.uuid,N=c[U];N===void 0&&(N={},c[U]=N);let H=N[L];H===void 0&&(H=b.clone(),N[L]=H,w.addEventListener("dispose",T)),b=H}if(b.visible=w.visible,b.wireframe=w.wireframe,M===wn?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:u[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,A.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let U=i.properties.get(b);U.light=A}return b}function _(S,w,A,M,b){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&b===wn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,S.matrixWorld);let L=e.update(S),N=S.material;if(Array.isArray(N)){let H=L.groups;for(let k=0,ee=H.length;k<ee;k++){let q=H[k],re=N[q.materialIndex];if(re&&re.visible){let ce=x(S,re,M,b);S.onBeforeShadow(i,S,w,A,L,ce,q),i.renderBufferDirect(A,null,L,ce,S,q),S.onAfterShadow(i,S,w,A,L,ce,q)}}}else if(N.visible){let H=x(S,N,M,b);S.onBeforeShadow(i,S,w,A,L,H,null),i.renderBufferDirect(A,null,L,H,S,null),S.onAfterShadow(i,S,w,A,L,H,null)}}let U=S.children;for(let L=0,N=U.length;L<N;L++)_(U[L],w,A,M,b)}function T(S){S.target.removeEventListener("dispose",T);for(let A in c){let M=c[A],b=S.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}function w1(i,e){function t(){let F=!1,le=new nt,Y=null,$=new nt(0,0,0,0);return{setMask:function(pe){Y!==pe&&!F&&(i.colorMask(pe,pe,pe,pe),Y=pe)},setLocked:function(pe){F=pe},setClear:function(pe,de,ze,Dt,ei){ei===!0&&(pe*=Dt,de*=Dt,ze*=Dt),le.set(pe,de,ze,Dt),$.equals(le)===!1&&(i.clearColor(pe,de,ze,Dt),$.copy(le))},reset:function(){F=!1,Y=null,$.set(-1,0,0,0)}}}function n(){let F=!1,le=!1,Y=null,$=null,pe=null;return{setReversed:function(de){if(le!==de){let ze=e.get("EXT_clip_control");le?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT);let Dt=pe;pe=null,this.setClear(Dt)}le=de},getReversed:function(){return le},setTest:function(de){de?se(i.DEPTH_TEST):Ee(i.DEPTH_TEST)},setMask:function(de){Y!==de&&!F&&(i.depthMask(de),Y=de)},setFunc:function(de){if(le&&(de=T1[de]),$!==de){switch(de){case zu:i.depthFunc(i.NEVER);break;case ku:i.depthFunc(i.ALWAYS);break;case Vu:i.depthFunc(i.LESS);break;case Dr:i.depthFunc(i.LEQUAL);break;case Hu:i.depthFunc(i.EQUAL);break;case Gu:i.depthFunc(i.GEQUAL);break;case Xl:i.depthFunc(i.GREATER);break;case Wu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=de}},setLocked:function(de){F=de},setClear:function(de){pe!==de&&(le&&(de=1-de),i.clearDepth(de),pe=de)},reset:function(){F=!1,Y=null,$=null,pe=null,le=!1}}}function s(){let F=!1,le=null,Y=null,$=null,pe=null,de=null,ze=null,Dt=null,ei=null;return{setTest:function(dt){F||(dt?se(i.STENCIL_TEST):Ee(i.STENCIL_TEST))},setMask:function(dt){le!==dt&&!F&&(i.stencilMask(dt),le=dt)},setFunc:function(dt,Ki,yn){(Y!==dt||$!==Ki||pe!==yn)&&(i.stencilFunc(dt,Ki,yn),Y=dt,$=Ki,pe=yn)},setOp:function(dt,Ki,yn){(de!==dt||ze!==Ki||Dt!==yn)&&(i.stencilOp(dt,Ki,yn),de=dt,ze=Ki,Dt=yn)},setLocked:function(dt){F=dt},setClear:function(dt){ei!==dt&&(i.clearStencil(dt),ei=dt)},reset:function(){F=!1,le=null,Y=null,$=null,pe=null,de=null,ze=null,Dt=null,ei=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],p=null,y=!1,g=null,m=null,v=null,x=null,_=null,T=null,S=null,w=new ve(0,0,0),A=0,M=!1,b=null,I=null,U=null,L=null,N=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,ee=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(q)[1]),k=ee>=1):q.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),k=ee>=2);let re=null,ce={},_e=i.getParameter(i.SCISSOR_BOX),Be=i.getParameter(i.VIEWPORT),xe=new nt().fromArray(_e),G=new nt().fromArray(Be);function K(F,le,Y,$){let pe=new Uint8Array(4),de=i.createTexture();i.bindTexture(F,de),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ze=0;ze<Y;ze++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(le+ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return de}let he={};he[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(i.DEPTH_TEST),o.setFunc(Dr),Fe(!1),Oe(zm),se(i.CULL_FACE),B(os);function se(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function Ee(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Ce(F,le){return u[F]!==le?(i.bindFramebuffer(F,le),u[F]=le,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=le),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=le),!0):!1}function Le(F,le){let Y=f,$=!1;if(F){Y=d.get(le),Y===void 0&&(Y=[],d.set(le,Y));let pe=F.textures;if(Y.length!==pe.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let de=0,ze=pe.length;de<ze;de++)Y[de]=i.COLOR_ATTACHMENT0+de;Y.length=pe.length,$=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,$=!0);$&&i.drawBuffers(Y)}function yt(F){return p!==F?(i.useProgram(F),p=F,!0):!1}let qe={[Ws]:i.FUNC_ADD,[kv]:i.FUNC_SUBTRACT,[Vv]:i.FUNC_REVERSE_SUBTRACT};qe[Hv]=i.MIN,qe[Gv]=i.MAX;let Pt={[rf]:i.ZERO,[of]:i.ONE,[Wv]:i.SRC_COLOR,[Fu]:i.SRC_ALPHA,[$v]:i.SRC_ALPHA_SATURATE,[jv]:i.DST_COLOR,[qv]:i.DST_ALPHA,[Xv]:i.ONE_MINUS_SRC_COLOR,[Ou]:i.ONE_MINUS_SRC_ALPHA,[Zv]:i.ONE_MINUS_DST_COLOR,[Yv]:i.ONE_MINUS_DST_ALPHA,[Kv]:i.CONSTANT_COLOR,[Jv]:i.ONE_MINUS_CONSTANT_COLOR,[Qv]:i.CONSTANT_ALPHA,[eb]:i.ONE_MINUS_CONSTANT_ALPHA};function B(F,le,Y,$,pe,de,ze,Dt,ei,dt){if(F===os){y===!0&&(Ee(i.BLEND),y=!1);return}if(y===!1&&(se(i.BLEND),y=!0),F!==sf){if(F!==g||dt!==M){if((m!==Ws||_!==Ws)&&(i.blendEquation(i.FUNC_ADD),m=Ws,_=Ws),dt)switch(F){case Rr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wl:i.blendFunc(i.ONE,i.ONE);break;case km:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vm:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Rr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case km:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vm:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}v=null,x=null,T=null,S=null,w.set(0,0,0),A=0,g=F,M=dt}return}pe=pe||le,de=de||Y,ze=ze||$,(le!==m||pe!==_)&&(i.blendEquationSeparate(qe[le],qe[pe]),m=le,_=pe),(Y!==v||$!==x||de!==T||ze!==S)&&(i.blendFuncSeparate(Pt[Y],Pt[$],Pt[de],Pt[ze]),v=Y,x=$,T=de,S=ze),(Dt.equals(w)===!1||ei!==A)&&(i.blendColor(Dt.r,Dt.g,Dt.b,ei),w.copy(Dt),A=ei),g=F,M=!1}function vt(F,le){F.side===Zt?Ee(i.CULL_FACE):se(i.CULL_FACE);let Y=F.side===ri;le&&(Y=!Y),Fe(Y),F.blending===Rr&&F.transparent===!1?B(os):B(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let $=F.stencilWrite;a.setTest($),$&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Tt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):Ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(F){b!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),b=F)}function Oe(F){F!==Fv?(se(i.CULL_FACE),F!==I&&(F===zm?i.cullFace(i.BACK):F===Ov?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ee(i.CULL_FACE),I=F}function Ae(F){F!==U&&(k&&i.lineWidth(F),U=F)}function Tt(F,le,Y){F?(se(i.POLYGON_OFFSET_FILL),(L!==le||N!==Y)&&(i.polygonOffset(le,Y),L=le,N=Y)):Ee(i.POLYGON_OFFSET_FILL)}function Re(F){F?se(i.SCISSOR_TEST):Ee(i.SCISSOR_TEST)}function D(F){F===void 0&&(F=i.TEXTURE0+H-1),re!==F&&(i.activeTexture(F),re=F)}function E(F,le,Y){Y===void 0&&(re===null?Y=i.TEXTURE0+H-1:Y=re);let $=ce[Y];$===void 0&&($={type:void 0,texture:void 0},ce[Y]=$),($.type!==F||$.texture!==le)&&(re!==Y&&(i.activeTexture(Y),re=Y),i.bindTexture(F,le||he[F]),$.type=F,$.texture=le)}function V(){let F=ce[re];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(F){xe.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),xe.copy(F))}function ye(F){G.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),G.copy(F))}function et(F,le){let Y=c.get(le);Y===void 0&&(Y=new WeakMap,c.set(le,Y));let $=Y.get(F);$===void 0&&($=i.getUniformBlockIndex(le,F.name),Y.set(F,$))}function Ge(F,le){let $=c.get(le).get(F);l.get(le)!==$&&(i.uniformBlockBinding(le,$,F.__bindingPointIndex),l.set(le,$))}function bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},re=null,ce={},u={},d=new WeakMap,f=[],p=null,y=!1,g=null,m=null,v=null,x=null,_=null,T=null,S=null,w=new ve(0,0,0),A=0,M=!1,b=null,I=null,U=null,L=null,N=null,xe.set(0,0,i.canvas.width,i.canvas.height),G.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:Ee,bindFramebuffer:Ce,drawBuffers:Le,useProgram:yt,setBlending:B,setMaterial:vt,setFlipSided:Fe,setCullFace:Oe,setLineWidth:Ae,setPolygonOffset:Tt,setScissorTest:Re,activeTexture:D,bindTexture:E,unbindTexture:V,compressedTexImage2D:Z,compressedTexImage3D:J,texImage2D:ge,texImage3D:Pe,updateUBOMapping:et,uniformBlockBinding:Ge,texStorage2D:it,texStorage3D:ie,texSubImage2D:j,texSubImage3D:Te,compressedTexSubImage2D:ue,compressedTexSubImage3D:me,scissor:De,viewport:ye,reset:bt}}function E1(i,e){let t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2):(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0),i}function A1(i,e){let t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0):(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2),i}function C1(i){return i.repeat.x=1,i.repeat.y=1,i.offset.x=0,i.offset.y=0,i}function Dd(i,e,t,n){let s=R1(n);switch(t){case f0:return i*e;case m0:return i*e;case g0:return i*e*2;case wc:return i*e/s.components*s.byteLength;case Ec:return i*e/s.components*s.byteLength;case df:return i*e*2/s.components*s.byteLength;case ff:return i*e*2/s.components*s.byteLength;case p0:return i*e*3/s.components*s.byteLength;case vi:return i*e*4/s.components*s.byteLength;case Ac:return i*e*4/s.components*s.byteLength;case zl:case kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Vl:case Hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ju:case $u:return Math.max(i,16)*Math.max(e,8)/4;case Yu:case Zu:return Math.max(i,8)*Math.max(e,8)/2;case Ku:case Ju:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ed:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case td:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case id:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case nd:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case sd:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case rd:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case od:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ad:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ld:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case cd:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case hd:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ud:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case dd:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case fd:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Gl:case pd:case md:return Math.ceil(i/4)*Math.ceil(e/4)*16;case y0:case gd:return Math.ceil(i/4)*Math.ceil(e/4)*8;case yd:case xd:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function R1(i){switch(i){case dn:case h0:return{byteLength:1,components:1};case Jo:case u0:case fa:return{byteLength:2,components:1};case hf:case uf:return{byteLength:2,components:4};case ls:case cf:case _i:return{byteLength:4,components:1};case d0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function P1(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Q,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(D,E){return f?new OffscreenCanvas(D,E):Qo("canvas")}function y(D,E,V){let Z=1,J=Re(D);if((J.width>V||J.height>V)&&(Z=V/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let j=Math.floor(Z*J.width),Te=Math.floor(Z*J.height);u===void 0&&(u=p(j,Te));let ue=E?p(j,Te):u;return ue.width=j,ue.height=Te,ue.getContext("2d").drawImage(D,0,0,j,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+j+"x"+Te+")."),ue}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),D;return D}function g(D){return D.generateMipmaps}function m(D){i.generateMipmap(D)}function v(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(D,E,V,Z,J=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let j=E;if(E===i.RED&&(V===i.FLOAT&&(j=i.R32F),V===i.HALF_FLOAT&&(j=i.R16F),V===i.UNSIGNED_BYTE&&(j=i.R8)),E===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.R8UI),V===i.UNSIGNED_SHORT&&(j=i.R16UI),V===i.UNSIGNED_INT&&(j=i.R32UI),V===i.BYTE&&(j=i.R8I),V===i.SHORT&&(j=i.R16I),V===i.INT&&(j=i.R32I)),E===i.RG&&(V===i.FLOAT&&(j=i.RG32F),V===i.HALF_FLOAT&&(j=i.RG16F),V===i.UNSIGNED_BYTE&&(j=i.RG8)),E===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.RG8UI),V===i.UNSIGNED_SHORT&&(j=i.RG16UI),V===i.UNSIGNED_INT&&(j=i.RG32UI),V===i.BYTE&&(j=i.RG8I),V===i.SHORT&&(j=i.RG16I),V===i.INT&&(j=i.RG32I)),E===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.RGB8UI),V===i.UNSIGNED_SHORT&&(j=i.RGB16UI),V===i.UNSIGNED_INT&&(j=i.RGB32UI),V===i.BYTE&&(j=i.RGB8I),V===i.SHORT&&(j=i.RGB16I),V===i.INT&&(j=i.RGB32I)),E===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),V===i.UNSIGNED_INT&&(j=i.RGBA32UI),V===i.BYTE&&(j=i.RGBA8I),V===i.SHORT&&(j=i.RGBA16I),V===i.INT&&(j=i.RGBA32I)),E===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),E===i.RGBA){let Te=J?Rc:Ye.getTransfer(Z);V===i.FLOAT&&(j=i.RGBA32F),V===i.HALF_FLOAT&&(j=i.RGBA16F),V===i.UNSIGNED_BYTE&&(j=Te===mt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function _(D,E){let V;return D?E===null||E===ls||E===Br?V=i.DEPTH24_STENCIL8:E===_i?V=i.DEPTH32F_STENCIL8:E===Jo&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ls||E===Br?V=i.DEPTH_COMPONENT24:E===_i?V=i.DEPTH_COMPONENT32F:E===Jo&&(V=i.DEPTH_COMPONENT16),V}function T(D,E){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==$t&&D.minFilter!==hi?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function S(D){let E=D.target;E.removeEventListener("dispose",S),A(E),E.isVideoTexture&&h.delete(E)}function w(D){let E=D.target;E.removeEventListener("dispose",w),b(E)}function A(D){let E=n.get(D);if(E.__webglInit===void 0)return;let V=D.source,Z=d.get(V);if(Z){let J=Z[E.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(D),Object.keys(Z).length===0&&d.delete(V)}n.remove(D)}function M(D){let E=n.get(D);i.deleteTexture(E.__webglTexture);let V=D.source,Z=d.get(V);delete Z[E.__cacheKey],o.memory.textures--}function b(D){let E=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let J=0;J<E.__webglFramebuffer[Z].length;J++)i.deleteFramebuffer(E.__webglFramebuffer[Z][J]);else i.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)i.deleteFramebuffer(E.__webglFramebuffer[Z]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let V=D.textures;for(let Z=0,J=V.length;Z<J;Z++){let j=n.get(V[Z]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(V[Z])}n.remove(D)}let I=0;function U(){I=0}function L(){let D=I;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),I+=1,D}function N(D){let E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function H(D,E){let V=n.get(D);if(D.isVideoTexture&&Ae(D),D.isRenderTargetTexture===!1&&D.version>0&&V.__version!==D.version){let Z=D.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(V,D,E);return}}t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+E)}function k(D,E){let V=n.get(D);if(D.version>0&&V.__version!==D.version){G(V,D,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+E)}function ee(D,E){let V=n.get(D);if(D.version>0&&V.__version!==D.version){G(V,D,E);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+E)}function q(D,E){let V=n.get(D);if(D.version>0&&V.__version!==D.version){K(V,D,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+E)}let re={[qs]:i.REPEAT,[En]:i.CLAMP_TO_EDGE,[Ko]:i.MIRRORED_REPEAT},ce={[$t]:i.NEAREST,[lf]:i.NEAREST_MIPMAP_NEAREST,[Ar]:i.NEAREST_MIPMAP_LINEAR,[hi]:i.LINEAR,[Xo]:i.LINEAR_MIPMAP_NEAREST,[un]:i.LINEAR_MIPMAP_LINEAR},_e={[mb]:i.NEVER,[bb]:i.ALWAYS,[gb]:i.LESS,[_0]:i.LEQUAL,[yb]:i.EQUAL,[vb]:i.GEQUAL,[xb]:i.GREATER,[_b]:i.NOTEQUAL};function Be(D,E){if(E.type===_i&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===hi||E.magFilter===Xo||E.magFilter===Ar||E.magFilter===un||E.minFilter===hi||E.minFilter===Xo||E.minFilter===Ar||E.minFilter===un)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,re[E.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,re[E.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,re[E.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,ce[E.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,ce[E.minFilter]),E.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,_e[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===$t||E.minFilter!==Ar&&E.minFilter!==un||E.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function xe(D,E){let V=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",S));let Z=E.source,J=d.get(Z);J===void 0&&(J={},d.set(Z,J));let j=N(E);if(j!==D.__cacheKey){J[j]===void 0&&(J[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),J[j].usedTimes++;let Te=J[D.__cacheKey];Te!==void 0&&(J[D.__cacheKey].usedTimes--,Te.usedTimes===0&&M(E)),D.__cacheKey=j,D.__webglTexture=J[j].texture}return V}function G(D,E,V){let Z=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=i.TEXTURE_3D);let J=xe(D,E),j=E.source;t.bindTexture(Z,D.__webglTexture,i.TEXTURE0+V);let Te=n.get(j);if(j.version!==Te.__version||J===!0){t.activeTexture(i.TEXTURE0+V);let ue=Ye.getPrimaries(Ye.workingColorSpace),me=E.colorSpace===ss?null:Ye.getPrimaries(E.colorSpace),it=E.colorSpace===ss||ue===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let ie=y(E.image,!1,s.maxTextureSize);ie=Tt(E,ie);let ge=r.convert(E.format,E.colorSpace),Pe=r.convert(E.type),De=x(E.internalFormat,ge,Pe,E.colorSpace,E.isVideoTexture);Be(Z,E);let ye,et=E.mipmaps,Ge=E.isVideoTexture!==!0,bt=Te.__version===void 0||J===!0,F=j.dataReady,le=T(E,ie);if(E.isDepthTexture)De=_(E.format===Fr,E.type),bt&&(Ge?t.texStorage2D(i.TEXTURE_2D,1,De,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,De,ie.width,ie.height,0,ge,Pe,null));else if(E.isDataTexture)if(et.length>0){Ge&&bt&&t.texStorage2D(i.TEXTURE_2D,le,De,et[0].width,et[0].height);for(let Y=0,$=et.length;Y<$;Y++)ye=et[Y],Ge?F&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,ye.width,ye.height,ge,Pe,ye.data):t.texImage2D(i.TEXTURE_2D,Y,De,ye.width,ye.height,0,ge,Pe,ye.data);E.generateMipmaps=!1}else Ge?(bt&&t.texStorage2D(i.TEXTURE_2D,le,De,ie.width,ie.height),F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie.width,ie.height,ge,Pe,ie.data)):t.texImage2D(i.TEXTURE_2D,0,De,ie.width,ie.height,0,ge,Pe,ie.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ge&&bt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,De,et[0].width,et[0].height,ie.depth);for(let Y=0,$=et.length;Y<$;Y++)if(ye=et[Y],E.format!==vi)if(ge!==null)if(Ge){if(F)if(E.layerUpdates.size>0){let pe=Dd(ye.width,ye.height,E.format,E.type);for(let de of E.layerUpdates){let ze=ye.data.subarray(de*pe/ye.data.BYTES_PER_ELEMENT,(de+1)*pe/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,de,ye.width,ye.height,1,ge,ze)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ye.width,ye.height,ie.depth,ge,ye.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,De,ye.width,ye.height,ie.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ye.width,ye.height,ie.depth,ge,Pe,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,De,ye.width,ye.height,ie.depth,0,ge,Pe,ye.data)}else{Ge&&bt&&t.texStorage2D(i.TEXTURE_2D,le,De,et[0].width,et[0].height);for(let Y=0,$=et.length;Y<$;Y++)ye=et[Y],E.format!==vi?ge!==null?Ge?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,ye.width,ye.height,ge,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,De,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?F&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,ye.width,ye.height,ge,Pe,ye.data):t.texImage2D(i.TEXTURE_2D,Y,De,ye.width,ye.height,0,ge,Pe,ye.data)}else if(E.isDataArrayTexture)if(Ge){if(bt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,De,ie.width,ie.height,ie.depth),F)if(E.layerUpdates.size>0){let Y=Dd(ie.width,ie.height,E.format,E.type);for(let $ of E.layerUpdates){let pe=ie.data.subarray($*Y/ie.data.BYTES_PER_ELEMENT,($+1)*Y/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,ie.width,ie.height,1,ge,Pe,pe)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ge,Pe,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,ie.width,ie.height,ie.depth,0,ge,Pe,ie.data);else if(E.isData3DTexture)Ge?(bt&&t.texStorage3D(i.TEXTURE_3D,le,De,ie.width,ie.height,ie.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ge,Pe,ie.data)):t.texImage3D(i.TEXTURE_3D,0,De,ie.width,ie.height,ie.depth,0,ge,Pe,ie.data);else if(E.isFramebufferTexture){if(bt)if(Ge)t.texStorage2D(i.TEXTURE_2D,le,De,ie.width,ie.height);else{let Y=ie.width,$=ie.height;for(let pe=0;pe<le;pe++)t.texImage2D(i.TEXTURE_2D,pe,De,Y,$,0,ge,Pe,null),Y>>=1,$>>=1}}else if(et.length>0){if(Ge&&bt){let Y=Re(et[0]);t.texStorage2D(i.TEXTURE_2D,le,De,Y.width,Y.height)}for(let Y=0,$=et.length;Y<$;Y++)ye=et[Y],Ge?F&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,ge,Pe,ye):t.texImage2D(i.TEXTURE_2D,Y,De,ge,Pe,ye);E.generateMipmaps=!1}else if(Ge){if(bt){let Y=Re(ie);t.texStorage2D(i.TEXTURE_2D,le,De,Y.width,Y.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,Pe,ie)}else t.texImage2D(i.TEXTURE_2D,0,De,ge,Pe,ie);g(E)&&m(Z),Te.__version=j.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function K(D,E,V){if(E.image.length!==6)return;let Z=xe(D,E),J=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+V);let j=n.get(J);if(J.version!==j.__version||Z===!0){t.activeTexture(i.TEXTURE0+V);let Te=Ye.getPrimaries(Ye.workingColorSpace),ue=E.colorSpace===ss?null:Ye.getPrimaries(E.colorSpace),me=E.colorSpace===ss||Te===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let it=E.isCompressedTexture||E.image[0].isCompressedTexture,ie=E.image[0]&&E.image[0].isDataTexture,ge=[];for(let $=0;$<6;$++)!it&&!ie?ge[$]=y(E.image[$],!0,s.maxCubemapSize):ge[$]=ie?E.image[$].image:E.image[$],ge[$]=Tt(E,ge[$]);let Pe=ge[0],De=r.convert(E.format,E.colorSpace),ye=r.convert(E.type),et=x(E.internalFormat,De,ye,E.colorSpace),Ge=E.isVideoTexture!==!0,bt=j.__version===void 0||Z===!0,F=J.dataReady,le=T(E,Pe);Be(i.TEXTURE_CUBE_MAP,E);let Y;if(it){Ge&&bt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,le,et,Pe.width,Pe.height);for(let $=0;$<6;$++){Y=ge[$].mipmaps;for(let pe=0;pe<Y.length;pe++){let de=Y[pe];E.format!==vi?De!==null?Ge?F&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe,0,0,de.width,de.height,De,de.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe,et,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe,0,0,de.width,de.height,De,ye,de.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe,et,de.width,de.height,0,De,ye,de.data)}}}else{if(Y=E.mipmaps,Ge&&bt){Y.length>0&&le++;let $=Re(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,le,et,$.width,$.height)}for(let $=0;$<6;$++)if(ie){Ge?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ge[$].width,ge[$].height,De,ye,ge[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,et,ge[$].width,ge[$].height,0,De,ye,ge[$].data);for(let pe=0;pe<Y.length;pe++){let ze=Y[pe].image[$].image;Ge?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe+1,0,0,ze.width,ze.height,De,ye,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe+1,et,ze.width,ze.height,0,De,ye,ze.data)}}else{Ge?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,De,ye,ge[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,et,De,ye,ge[$]);for(let pe=0;pe<Y.length;pe++){let de=Y[pe];Ge?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe+1,0,0,De,ye,de.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe+1,et,De,ye,de.image[$])}}}g(E)&&m(i.TEXTURE_CUBE_MAP),j.__version=J.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function he(D,E,V,Z,J,j){let Te=r.convert(V.format,V.colorSpace),ue=r.convert(V.type),me=x(V.internalFormat,Te,ue,V.colorSpace),it=n.get(E),ie=n.get(V);if(ie.__renderTarget=E,!it.__hasExternalTextures){let ge=Math.max(1,E.width>>j),Pe=Math.max(1,E.height>>j);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,j,me,ge,Pe,E.depth,0,Te,ue,null):t.texImage2D(J,j,me,ge,Pe,0,Te,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),Oe(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,J,ie.__webglTexture,0,Fe(E)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,J,ie.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(D,E,V){if(i.bindRenderbuffer(i.RENDERBUFFER,D),E.depthBuffer){let Z=E.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,j=_(E.stencilBuffer,J),Te=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=Fe(E);Oe(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,j,E.width,E.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,j,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,j,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,D)}else{let Z=E.textures;for(let J=0;J<Z.length;J++){let j=Z[J],Te=r.convert(j.format,j.colorSpace),ue=r.convert(j.type),me=x(j.internalFormat,Te,ue,j.colorSpace),it=Fe(E);V&&Oe(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,me,E.width,E.height):Oe(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,me,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,me,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ee(D,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(E.depthTexture);Z.__renderTarget=E,(!Z.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),H(E.depthTexture,0);let J=Z.__webglTexture,j=Fe(E);if(E.depthTexture.format===Pr)Oe(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(E.depthTexture.format===Fr)Oe(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ce(D){let E=n.get(D),V=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){let Z=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){let J=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",J)};Z.addEventListener("dispose",J),E.__depthDisposeCallback=J}E.__boundDepthTexture=Z}if(D.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ee(E.__webglFramebuffer,D)}else if(V){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=i.createRenderbuffer(),se(E.__webglDepthbuffer[Z],D,!1);else{let J=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=E.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,j)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),se(E.__webglDepthbuffer,D,!1);else{let Z=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,J)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(D,E,V){let Z=n.get(D);E!==void 0&&he(Z.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Ce(D)}function yt(D){let E=D.texture,V=n.get(D),Z=n.get(E);D.addEventListener("dispose",w);let J=D.textures,j=D.isWebGLCubeRenderTarget===!0,Te=J.length>1;if(Te||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=E.version,o.memory.textures++),j){V.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[ue]=[];for(let me=0;me<E.mipmaps.length;me++)V.__webglFramebuffer[ue][me]=i.createFramebuffer()}else V.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let ue=0;ue<E.mipmaps.length;ue++)V.__webglFramebuffer[ue]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Te)for(let ue=0,me=J.length;ue<me;ue++){let it=n.get(J[ue]);it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&Oe(D)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ue=0;ue<J.length;ue++){let me=J[ue];V.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[ue]);let it=r.convert(me.format,me.colorSpace),ie=r.convert(me.type),ge=x(me.internalFormat,it,ie,me.colorSpace,D.isXRRenderTarget===!0),Pe=Fe(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,ge,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,V.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),se(V.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Be(i.TEXTURE_CUBE_MAP,E);for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)he(V.__webglFramebuffer[ue][me],D,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,me);else he(V.__webglFramebuffer[ue],D,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);g(E)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let ue=0,me=J.length;ue<me;ue++){let it=J[ue],ie=n.get(it);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture),Be(i.TEXTURE_2D,it),he(V.__webglFramebuffer,D,it,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,0),g(it)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ue=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,Z.__webglTexture),Be(ue,E),E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)he(V.__webglFramebuffer[me],D,E,i.COLOR_ATTACHMENT0,ue,me);else he(V.__webglFramebuffer,D,E,i.COLOR_ATTACHMENT0,ue,0);g(E)&&m(ue),t.unbindTexture()}D.depthBuffer&&Ce(D)}function qe(D){let E=D.textures;for(let V=0,Z=E.length;V<Z;V++){let J=E[V];if(g(J)){let j=v(D),Te=n.get(J).__webglTexture;t.bindTexture(j,Te),m(j),t.unbindTexture()}}}let Pt=[],B=[];function vt(D){if(D.samples>0){if(Oe(D)===!1){let E=D.textures,V=D.width,Z=D.height,J=i.COLOR_BUFFER_BIT,j=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(D),ue=E.length>1;if(ue)for(let me=0;me<E.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let me=0;me<E.length;me++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ue){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[me]);let it=n.get(E[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,it,0)}i.blitFramebuffer(0,0,V,Z,0,0,V,Z,J,i.NEAREST),l===!0&&(Pt.length=0,B.length=0,Pt.push(i.COLOR_ATTACHMENT0+me),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Pt.push(j),B.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Pt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let me=0;me<E.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,Te.__webglColorRenderbuffer[me]);let it=n.get(E[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,it,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){let E=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Fe(D){return Math.min(s.maxSamples,D.samples)}function Oe(D){let E=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ae(D){let E=o.render.frame;h.get(D)!==E&&(h.set(D,E),D.update())}function Tt(D,E){let V=D.colorSpace,Z=D.format,J=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||V!==qt&&V!==ss&&(Ye.getTransfer(V)===mt?(Z!==vi||J!==dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}function Re(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=U,this.setTexture2D=H,this.setTexture2DArray=k,this.setTexture3D=ee,this.setTextureCube=q,this.rebindTextures=Le,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Oe}function I1(i,e){function t(n,s=ss){let r,o=Ye.getTransfer(s);if(n===dn)return i.UNSIGNED_BYTE;if(n===hf)return i.UNSIGNED_SHORT_4_4_4_4;if(n===uf)return i.UNSIGNED_SHORT_5_5_5_1;if(n===d0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===h0)return i.BYTE;if(n===u0)return i.SHORT;if(n===Jo)return i.UNSIGNED_SHORT;if(n===cf)return i.INT;if(n===ls)return i.UNSIGNED_INT;if(n===_i)return i.FLOAT;if(n===fa)return i.HALF_FLOAT;if(n===f0)return i.ALPHA;if(n===p0)return i.RGB;if(n===vi)return i.RGBA;if(n===m0)return i.LUMINANCE;if(n===g0)return i.LUMINANCE_ALPHA;if(n===Pr)return i.DEPTH_COMPONENT;if(n===Fr)return i.DEPTH_STENCIL;if(n===wc)return i.RED;if(n===Ec)return i.RED_INTEGER;if(n===df)return i.RG;if(n===ff)return i.RG_INTEGER;if(n===Ac)return i.RGBA_INTEGER;if(n===zl||n===kl||n===Vl||n===Hl)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===zl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===kl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===zl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===kl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yu||n===ju||n===Zu||n===$u)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Yu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ju)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$u)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ku||n===Ju||n===Qu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ku||n===Ju)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ed||n===td||n===id||n===nd||n===sd||n===rd||n===od||n===ad||n===ld||n===cd||n===hd||n===ud||n===dd||n===fd)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ed)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===td)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===id)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nd)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sd)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rd)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===od)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ad)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ld)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cd)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hd)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ud)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dd)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fd)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gl||n===pd||n===md)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Gl)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pd)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===md)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===y0||n===gd||n===yd||n===xd)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Gl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===gd)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yd)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xd)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}function B1(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,M0(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,v,x,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,_)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),y(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,v,x):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===ri&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===ri&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let v=e.get(m),x=v.envMap,_=v.envMapRotation;x&&(g.envMap.value=x,ks.copy(_),ks.x*=-1,ks.y*=-1,ks.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ks.y*=-1,ks.z*=-1),g.envMapRotation.value.setFromMatrix4(N1.makeRotationFromEuler(ks)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,x){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=x*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ri&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){let v=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function F1(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){let _=x.program;n.uniformBlockBinding(v,_)}function c(v,x){let _=s[v.id];_===void 0&&(p(v),_=h(v),s[v.id]=_,v.addEventListener("dispose",g));let T=x.program;n.updateUBOMapping(v,T);let S=e.render.frame;r[v.id]!==S&&(d(v),r[v.id]=S)}function h(v){let x=u();v.__bindingPointIndex=x;let _=i.createBuffer(),T=v.__size,S=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,T,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,_),_}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let x=s[v.id],_=v.uniforms,T=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let S=0,w=_.length;S<w;S++){let A=Array.isArray(_[S])?_[S]:[_[S]];for(let M=0,b=A.length;M<b;M++){let I=A[M];if(f(I,S,M,T)===!0){let U=I.__offset,L=Array.isArray(I.value)?I.value:[I.value],N=0;for(let H=0;H<L.length;H++){let k=L[H],ee=y(k);typeof k=="number"||typeof k=="boolean"?(I.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,U+N,I.__data)):k.isMatrix3?(I.__data[0]=k.elements[0],I.__data[1]=k.elements[1],I.__data[2]=k.elements[2],I.__data[3]=0,I.__data[4]=k.elements[3],I.__data[5]=k.elements[4],I.__data[6]=k.elements[5],I.__data[7]=0,I.__data[8]=k.elements[6],I.__data[9]=k.elements[7],I.__data[10]=k.elements[8],I.__data[11]=0):(k.toArray(I.__data,N),N+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,x,_,T){let S=v.value,w=x+"_"+_;if(T[w]===void 0)return typeof S=="number"||typeof S=="boolean"?T[w]=S:T[w]=S.clone(),!0;{let A=T[w];if(typeof S=="number"||typeof S=="boolean"){if(A!==S)return T[w]=S,!0}else if(A.equals(S)===!1)return A.copy(S),!0}return!1}function p(v){let x=v.uniforms,_=0,T=16;for(let w=0,A=x.length;w<A;w++){let M=Array.isArray(x[w])?x[w]:[x[w]];for(let b=0,I=M.length;b<I;b++){let U=M[b],L=Array.isArray(U.value)?U.value:[U.value];for(let N=0,H=L.length;N<H;N++){let k=L[N],ee=y(k),q=_%T,re=q%ee.boundary,ce=q+re;_+=re,ce!==0&&T-ce<ee.storage&&(_+=T-ce),U.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=_,_+=ee.storage}}}let S=_%T;return S>0&&(_+=T-S),v.__size=_,v.__cache={},this}function y(v){let x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function g(v){let x=v.target;x.removeEventListener("dispose",g);let _=o.indexOf(x.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function m(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}function Cu(i,e){return i-e}function V1(i,e){return i.z-e.z}function H1(i,e){return e.z-i.z}function X1(i,e,t=0){let n=e.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==e.array.constructor){let s=i.count;for(let r=0;r<s;r++)for(let o=0;o<n;o++)e.setComponent(r+t,o,i.getComponent(r,o))}else e.array.set(i.array,t*n);e.needsUpdate=!0}function Hs(i,e){if(i.constructor!==e.constructor){let t=Math.min(i.length,e.length);for(let n=0;n<t;n++)e[n]=i[n]}else{let t=Math.min(i.length,e.length);e.set(new i.constructor(i.buffer,0,t))}}function Dl(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(sc.fromBufferAttribute(o,s),rc.fromBufferAttribute(o,r),t.distanceSqToSegment(sc,rc,Iu,jg)>n)return;Iu.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Iu);if(!(l<e.near||l>e.far))return{distance:l,point:jg.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}function Jg(i,e,t,n,s,r,o){let a=Od.distanceSqToPoint(i);if(a<t){let l=new C;Od.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}function xf(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}function Qg(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function q1(i,e){let t=1-i;return t*t*e}function Y1(i,e){return 2*(1-i)*i*e}function j1(i,e){return i*i*e}function Zo(i,e,t,n){return q1(i,e)+Y1(i,t)+j1(i,n)}function Z1(i,e){let t=1-i;return t*t*t*e}function $1(i,e){let t=1-i;return 3*t*t*i*e}function K1(i,e){return 3*(1-i)*i*i*e}function J1(i,e){return i*i*i*e}function $o(i,e,t,n,s){return Z1(i,e)+$1(i,t)+K1(i,n)+J1(i,s)}function Fl(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Q1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function eE(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function e0(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function C0(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}function tE(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Un;case"vector":case"vector2":case"vector3":case"vector4":return Bn;case"color":return pc;case"quaternion":return Nn;case"bool":case"boolean":return us;case"string":return ds}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function iE(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=tE(i.type);if(i.times===void 0){let t=[],n=[];C0(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}function r0(i,e){return i.distance-e.distance}function nf(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)nf(r[o],e,t,!0)}}var Fv,zm,Ov,l0,zv,wn,Li,ri,Zt,os,Rr,Wl,km,Vm,sf,Ws,kv,Vv,Hv,Gv,rf,of,Wv,Xv,Fu,Ou,qv,Yv,jv,Zv,$v,Kv,Jv,Qv,eb,zu,ku,Vu,Dr,Hu,Gu,Xl,Wu,af,tb,ib,as,nb,sb,rb,ob,ab,lb,cb,Hm,hb,c0,Ur,Nr,Xu,qu,Tc,qs,En,Ko,$t,lf,Ar,hi,Xo,un,dn,h0,u0,Jo,cf,ls,_i,fa,hf,uf,Br,d0,f0,p0,vi,m0,g0,Pr,Fr,wc,Ec,df,ff,Ac,zl,kl,Vl,Hl,Yu,ju,Zu,$u,Ku,Ju,Qu,ed,td,id,nd,sd,rd,od,ad,ld,cd,hd,ud,dd,fd,Gl,pd,md,y0,gd,yd,xd,Or,zr,Qh,Gm,Wm,Xm,ub,x0,Cc,pa,db,fb,pf,pb,ss,At,qt,Rc,mt,dr,qm,mb,gb,yb,_0,xb,_b,vb,bb,_d,Ym,An,ql,bi,ti,jm,qo,kr,$s,Q,Ue,eu,Zm,Ye,$m,Km,Jm,Qm,eg,fr,vd,Hb,ea,Gb,kt,nt,bd,ki,Yl,Md,Kt,C,iu,tg,$e,_n,Qi,ll,pr,mr,gr,Jn,Qn,Ns,Uo,cl,hl,Bs,Wb,No,su,It,vn,ru,ul,es,ou,dl,au,Mi,te,yr,en,Xb,qb,ts,fl,Pi,ig,ng,Di,ta,Yb,sg,xr,bn,pl,Bo,jb,Zb,rg,og,ag,lg,$b,_r,lu,Lt,tn,Mn,cu,Sn,vr,br,cg,hu,uu,du,fu,pu,mu,si,b0,is,ml,ve,ii,Kb,Si,Ct,Ot,gl,He,jl,Zl,Ke,Jb,zi,yu,Mr,Ii,Fo,Wt,Qe,hg,Fs,yl,ug,xl,_l,vl,xu,bl,dg,Ml,Ve,Pn,tM,iM,nM,Ui,$l,ns,fg,pg,Bt,Sr,Tr,Sd,Kl,Td,_u,sM,rM,ci,Os,Tl,In,Hr,aM,lM,cM,hM,uM,dM,fM,pM,mM,gM,yM,xM,_M,vM,bM,MM,SM,TM,wM,EM,AM,CM,RM,PM,IM,LM,DM,UM,NM,BM,FM,OM,zM,kM,VM,HM,GM,WM,XM,qM,YM,jM,ZM,$M,KM,JM,QM,eS,tS,iS,nS,sS,rS,oS,aS,lS,cS,hS,uS,dS,fS,pS,mS,gS,yS,xS,_S,vS,bS,MS,SS,TS,wS,ES,AS,CS,RS,PS,IS,LS,DS,US,NS,BS,FS,OS,zS,kS,VS,HS,GS,WS,XS,qS,YS,jS,ZS,$S,KS,JS,QS,eT,tT,iT,nT,sT,rT,oT,aT,lT,cT,hT,uT,dT,fT,pT,mT,gT,yT,xT,_T,vT,bT,MT,ST,TT,wT,ET,AT,CT,RT,PT,IT,LT,DT,UT,NT,BT,FT,OT,zT,We,ae,hn,wl,zs,kT,Ln,Cr,mg,Xs,vu,gg,bu,Mu,Su,Tu,Gs,wr,yg,Jl,Ql,T0,bg,w0,E0,A0,Mg,Sg,Tg,wg,Eg,wd,Ed,Ad,wu,Lr,Gw,Ww,Rg,Al,Qw,e1,i1,h1,Rd,Pd,y1,Id,Ld,b1,M1,T1,yf,Ud,Xt,L1,jo,D1,U1,Nd,Bd,ks,N1,Gr,ec,tc,ia,ai,na,Og,zg,kg,O1,Vg,Cl,Eu,Hg,Au,ic,sa,Rn,Gg,z1,nc,Ys,Er,Wg,Rl,Xg,k1,Oo,zo,Wr,Fd,xi,G1,Ru,Pl,Vs,ko,qg,W1,Pu,ni,Il,ra,Xr,sc,rc,Yg,Vo,Ll,Iu,jg,Dn,Zg,$g,cs,js,Vi,Kg,Od,Ul,Nl,Ti,oa,Hi,aa,zd,Bl,Lu,Du,Uu,la,oc,kd,ac,Vd,lc,cc,hc,Hd,Gd,Wd,Xd,uc,ca,ha,dc,qr,fc,Zs,Ni,Yr,hs,qd,Yd,jd,Gi,us,pc,Un,Zd,Nn,ds,Bn,mc,rs,ua,Ks,rn,Tn,$d,fn,Kd,gc,jr,yc,Nu,t0,i0,da,Jd,xc,n0,Ho,Bu,Qd,_c,ef,Zr,fs,vc,_f,nE,vf,sE,rE,oE,aE,lE,cE,hE,tf,St,jC,s0,$r,bc,Mc,o0,Sc,a0,Ol,wi,pt=oe(()=>{Fv=0,zm=1,Ov=2,l0=1,zv=2,wn=3,Li=0,ri=1,Zt=2,os=0,Rr=1,Wl=2,km=3,Vm=4,sf=5,Ws=100,kv=101,Vv=102,Hv=103,Gv=104,rf=200,of=201,Wv=202,Xv=203,Fu=204,Ou=205,qv=206,Yv=207,jv=208,Zv=209,$v=210,Kv=211,Jv=212,Qv=213,eb=214,zu=0,ku=1,Vu=2,Dr=3,Hu=4,Gu=5,Xl=6,Wu=7,af=0,tb=1,ib=2,as=0,nb=1,sb=2,rb=3,ob=4,ab=5,lb=6,cb=7,Hm="attached",hb="detached",c0=300,Ur=301,Nr=302,Xu=303,qu=304,Tc=306,qs=1e3,En=1001,Ko=1002,$t=1003,lf=1004,Ar=1005,hi=1006,Xo=1007,un=1008,dn=1009,h0=1010,u0=1011,Jo=1012,cf=1013,ls=1014,_i=1015,fa=1016,hf=1017,uf=1018,Br=1020,d0=35902,f0=1021,p0=1022,vi=1023,m0=1024,g0=1025,Pr=1026,Fr=1027,wc=1028,Ec=1029,df=1030,ff=1031,Ac=1033,zl=33776,kl=33777,Vl=33778,Hl=33779,Yu=35840,ju=35841,Zu=35842,$u=35843,Ku=36196,Ju=37492,Qu=37496,ed=37808,td=37809,id=37810,nd=37811,sd=37812,rd=37813,od=37814,ad=37815,ld=37816,cd=37817,hd=37818,ud=37819,dd=37820,fd=37821,Gl=36492,pd=36494,md=36495,y0=36283,gd=36284,yd=36285,xd=36286,Or=2300,zr=2301,Qh=2302,Gm=2400,Wm=2401,Xm=2402,ub=2500,x0=0,Cc=1,pa=2,db=3200,fb=3201,pf=0,pb=1,ss="",At="srgb",qt="srgb-linear",Rc="linear",mt="srgb",dr=7680,qm=519,mb=512,gb=513,yb=514,_0=515,xb=516,_b=517,vb=518,bb=519,_d=35044,Ym="300 es",An=2e3,ql=2001,bi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jm=1234567,qo=Math.PI/180,kr=180/Math.PI;$s={DEG2RAD:qo,RAD2DEG:kr,generateUUID:sn,clamp:Nt,euclideanModulo:mf,mapLinear:Mb,inverseLerp:Sb,lerp:Yo,damp:Tb,pingpong:wb,smoothstep:Eb,smootherstep:Ab,randInt:Cb,randFloat:Rb,randFloatSpread:Pb,seededRandom:Ib,degToRad:Lb,radToDeg:Db,isPowerOfTwo:Ub,ceilPowerOfTwo:Nb,floorPowerOfTwo:Bb,setQuaternionFromProperEuler:Fb,normalize:ft,denormalize:nn},Q=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ue=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],y=s[0],g=s[3],m=s[6],v=s[1],x=s[4],_=s[7],T=s[2],S=s[5],w=s[8];return r[0]=o*y+a*v+l*T,r[3]=o*g+a*x+l*S,r[6]=o*m+a*_+l*w,r[1]=c*y+h*v+u*T,r[4]=c*g+h*x+u*S,r[7]=c*m+h*_+u*w,r[2]=d*y+f*v+p*T,r[5]=d*g+f*x+p*S,r[8]=d*m+f*_+p*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=t*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return e[0]=u*y,e[1]=(s*c-h*n)*y,e[2]=(a*n-s*o)*y,e[3]=d*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-a*t)*y,e[6]=f*y,e[7]=(n*l-c*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(eu.makeScale(e,t)),this}rotate(e){return this.premultiply(eu.makeRotation(-e)),this}translate(e,t){return this.premultiply(eu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},eu=new Ue;Zm={};Ye={enabled:!0,workingColorSpace:qt,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===mt&&(i.r=Cn(i.r),i.g=Cn(i.g),i.b=Cn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===mt&&(i.r=Ir(i.r),i.g=Ir(i.g),i.b=Ir(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ss?Rc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};$m=[.64,.33,.3,.6,.15,.06],Km=[.2126,.7152,.0722],Jm=[.3127,.329],Qm=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eg=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ye.define({[qt]:{primaries:$m,whitePoint:Jm,transfer:Rc,toXYZ:Qm,fromXYZ:eg,luminanceCoefficients:Km,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:$m,whitePoint:Jm,transfer:mt,toXYZ:Qm,fromXYZ:eg,luminanceCoefficients:Km,outputColorSpaceConfig:{drawingBufferColorSpace:At}}});vd=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fr===void 0&&(fr=Qo("canvas")),fr.width=e.width,fr.height=e.height;let n=fr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=fr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Qo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Cn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Cn(t[n]/255)*255):t[n]=Cn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Hb=0,ea=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hb++}),this.uuid=sn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(tu(s[o].image)):r.push(tu(s[o]))}else r=tu(s);n.url=r}return t||(e.images[this.uuid]=n),n}};Gb=0,kt=class i extends bi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=En,s=En,r=hi,o=un,a=vi,l=dn,c=i.DEFAULT_ANISOTROPY,h=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gb++}),this.uuid=sn(),this.name="",this.source=new ea(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==c0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qs:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case Ko:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qs:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case Ko:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=c0;kt.DEFAULT_ANISOTROPY=1;nt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],y=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,_=(f+1)/2,T=(m+1)/2,S=(h+d)/4,w=(u+y)/4,A=(p+g)/4;return x>_&&x>T?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=S/n,r=w/n):_>T?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=S/s,r=A/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=w/r,s=A/r),this.set(n,s,r,t),this}let v=Math.sqrt((g-p)*(g-p)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(u-y)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},bd=class extends bi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new kt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ea(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ki=class extends bd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Yl=class extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Md=class extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Kt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],p=r[o+2],y=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=y;return}if(u!==y||l!==d||c!==f||h!==p){let g=1-a,m=l*d+c*f+h*p+u*y,v=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){let T=Math.sqrt(x),S=Math.atan2(T,m*v);g=Math.sin(g*S)/T,a=Math.sin(a*S)/T}let _=a*v;if(l=l*g+d*_,c=c*g+f*_,h=h*g+p*_,u=u*g+y*_,g===1-a){let T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-a*f,e[t+2]=c*p+h*f+a*d-l*u,e[t+3]=h*p-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tg.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return iu.copy(this).projectOnVector(e),this.sub(iu)}reflect(e){return this.sub(iu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},iu=new C,tg=new Kt,$e=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qi):Qi.fromBufferAttribute(r,o),Qi.applyMatrix4(e.matrixWorld),this.expandByPoint(Qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ll.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ll.copy(n.boundingBox)),ll.applyMatrix4(e.matrixWorld),this.union(ll)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qi),Qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uo),cl.subVectors(this.max,Uo),pr.subVectors(e.a,Uo),mr.subVectors(e.b,Uo),gr.subVectors(e.c,Uo),Jn.subVectors(mr,pr),Qn.subVectors(gr,mr),Ns.subVectors(pr,gr);let t=[0,-Jn.z,Jn.y,0,-Qn.z,Qn.y,0,-Ns.z,Ns.y,Jn.z,0,-Jn.x,Qn.z,0,-Qn.x,Ns.z,0,-Ns.x,-Jn.y,Jn.x,0,-Qn.y,Qn.x,0,-Ns.y,Ns.x,0];return!nu(t,pr,mr,gr,cl)||(t=[1,0,0,0,1,0,0,0,1],!nu(t,pr,mr,gr,cl))?!1:(hl.crossVectors(Jn,Qn),t=[hl.x,hl.y,hl.z],nu(t,pr,mr,gr,cl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},_n=[new C,new C,new C,new C,new C,new C,new C,new C],Qi=new C,ll=new $e,pr=new C,mr=new C,gr=new C,Jn=new C,Qn=new C,Ns=new C,Uo=new C,cl=new C,hl=new C,Bs=new C;Wb=new $e,No=new C,su=new C,It=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Wb.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);let t=No.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(No,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(su.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(su)),this.expandByPoint(No.copy(e.center).sub(su))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},vn=new C,ru=new C,ul=new C,es=new C,ou=new C,dl=new C,au=new C,Mi=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vn.copy(this.origin).addScaledVector(this.direction,t),vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ru.copy(e).add(t).multiplyScalar(.5),ul.copy(t).sub(e).normalize(),es.copy(this.origin).sub(ru);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ul),a=es.dot(this.direction),l=-es.dot(ul),c=es.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let y=1/h;u*=y,d*=y,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ru).addScaledVector(ul,d),f}intersectSphere(e,t){vn.subVectors(e.center,this.origin);let n=vn.dot(this.direction),s=vn.dot(vn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,vn)!==null}intersectTriangle(e,t,n,s,r){ou.subVectors(t,e),dl.subVectors(n,e),au.crossVectors(ou,dl);let o=this.direction.dot(au),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;es.subVectors(this.origin,e);let l=a*this.direction.dot(dl.crossVectors(es,dl));if(l<0)return null;let c=a*this.direction.dot(ou.cross(es));if(c<0||l+c>o)return null;let h=-a*es.dot(au);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},te=class i{constructor(e,t,n,s,r,o,a,l,c,h,u,d,f,p,y,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,f,p,y,g)}set(e,t,n,s,r,o,a,l,c,h,u,d,f,p,y,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/yr.setFromMatrixColumn(e,0).length(),r=1/yr.setFromMatrixColumn(e,1).length(),o=1/yr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,p=a*h,y=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-y*c,t[9]=-a*l,t[2]=y-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,p=c*h,y=c*u;t[0]=d+y*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=y+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,p=c*h,y=c*u;t[0]=d-y*a,t[4]=-o*u,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=y-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,p=a*h,y=a*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+y,t[1]=l*u,t[5]=y*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,p=a*l,y=a*c;t[0]=l*h,t[4]=y-d*u,t[8]=p*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-y*u}else if(e.order==="XZY"){let d=o*l,f=o*c,p=a*l,y=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+y,t[5]=o*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=a*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xb,e,qb)}lookAt(e,t,n){let s=this.elements;return Pi.subVectors(e,t),Pi.lengthSq()===0&&(Pi.z=1),Pi.normalize(),ts.crossVectors(n,Pi),ts.lengthSq()===0&&(Math.abs(n.z)===1?Pi.x+=1e-4:Pi.z+=1e-4,Pi.normalize(),ts.crossVectors(n,Pi)),ts.normalize(),fl.crossVectors(Pi,ts),s[0]=ts.x,s[4]=fl.x,s[8]=Pi.x,s[1]=ts.y,s[5]=fl.y,s[9]=Pi.y,s[2]=ts.z,s[6]=fl.z,s[10]=Pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],y=n[6],g=n[10],m=n[14],v=n[3],x=n[7],_=n[11],T=n[15],S=s[0],w=s[4],A=s[8],M=s[12],b=s[1],I=s[5],U=s[9],L=s[13],N=s[2],H=s[6],k=s[10],ee=s[14],q=s[3],re=s[7],ce=s[11],_e=s[15];return r[0]=o*S+a*b+l*N+c*q,r[4]=o*w+a*I+l*H+c*re,r[8]=o*A+a*U+l*k+c*ce,r[12]=o*M+a*L+l*ee+c*_e,r[1]=h*S+u*b+d*N+f*q,r[5]=h*w+u*I+d*H+f*re,r[9]=h*A+u*U+d*k+f*ce,r[13]=h*M+u*L+d*ee+f*_e,r[2]=p*S+y*b+g*N+m*q,r[6]=p*w+y*I+g*H+m*re,r[10]=p*A+y*U+g*k+m*ce,r[14]=p*M+y*L+g*ee+m*_e,r[3]=v*S+x*b+_*N+T*q,r[7]=v*w+x*I+_*H+T*re,r[11]=v*A+x*U+_*k+T*ce,r[15]=v*M+x*L+_*ee+T*_e,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],y=e[7],g=e[11],m=e[15];return p*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+y*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+g*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+m*(-s*a*h-t*l*u+t*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],y=e[13],g=e[14],m=e[15],v=u*g*c-y*d*c+y*l*f-a*g*f-u*l*m+a*d*m,x=p*d*c-h*g*c-p*l*f+o*g*f+h*l*m-o*d*m,_=h*y*c-p*u*c+p*a*f-o*y*f-h*a*m+o*u*m,T=p*u*l-h*y*l-p*a*d+o*y*d+h*a*g-o*u*g,S=t*v+n*x+s*_+r*T;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/S;return e[0]=v*w,e[1]=(y*d*r-u*g*r-y*s*f+n*g*f+u*s*m-n*d*m)*w,e[2]=(a*g*r-y*l*r+y*s*c-n*g*c-a*s*m+n*l*m)*w,e[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*w,e[4]=x*w,e[5]=(h*g*r-p*d*r+p*s*f-t*g*f-h*s*m+t*d*m)*w,e[6]=(p*l*r-o*g*r-p*s*c+t*g*c+o*s*m-t*l*m)*w,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*f+t*l*f)*w,e[8]=_*w,e[9]=(p*u*r-h*y*r-p*n*f+t*y*f+h*n*m-t*u*m)*w,e[10]=(o*y*r-p*a*r+p*n*c-t*y*c-o*n*m+t*a*m)*w,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*w,e[12]=T*w,e[13]=(h*y*s-p*u*s+p*n*d-t*y*d-h*n*g+t*u*g)*w,e[14]=(p*a*s-o*y*s-p*n*l+t*y*l+o*n*g-t*a*g)*w,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*d+t*a*d)*w,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,y=o*h,g=o*u,m=a*u,v=l*c,x=l*h,_=l*u,T=n.x,S=n.y,w=n.z;return s[0]=(1-(y+m))*T,s[1]=(f+_)*T,s[2]=(p-x)*T,s[3]=0,s[4]=(f-_)*S,s[5]=(1-(d+m))*S,s[6]=(g+v)*S,s[7]=0,s[8]=(p+x)*w,s[9]=(g-v)*w,s[10]=(1-(d+y))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=yr.set(s[0],s[1],s[2]).length(),o=yr.set(s[4],s[5],s[6]).length(),a=yr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],en.copy(this);let c=1/r,h=1/o,u=1/a;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=h,en.elements[5]*=h,en.elements[6]*=h,en.elements[8]*=u,en.elements[9]*=u,en.elements[10]*=u,t.setFromRotationMatrix(en),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=An){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,p;if(a===An)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===ql)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=An){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*c,f=(n+s)*h,p,y;if(a===An)p=(o+r)*u,y=-2*u;else if(a===ql)p=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},yr=new C,en=new te,Xb=new C(0,0,0),qb=new C(1,1,1),ts=new C,fl=new C,Pi=new C,ig=new te,ng=new Kt,Di=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ig.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ig,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ng.setFromEuler(this),this.setFromQuaternion(ng,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Di.DEFAULT_ORDER="XYZ";ta=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Yb=0,sg=new C,xr=new Kt,bn=new te,pl=new C,Bo=new C,jb=new C,Zb=new Kt,rg=new C(1,0,0),og=new C(0,1,0),ag=new C(0,0,1),lg={type:"added"},$b={type:"removed"},_r={type:"childadded",child:null},lu={type:"childremoved",child:null},Lt=class i extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yb++}),this.uuid=sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new Di,n=new Kt,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new Ue}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.multiply(xr),this}rotateOnWorldAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.premultiply(xr),this}rotateX(e){return this.rotateOnAxis(rg,e)}rotateY(e){return this.rotateOnAxis(og,e)}rotateZ(e){return this.rotateOnAxis(ag,e)}translateOnAxis(e,t){return sg.copy(e).applyQuaternion(this.quaternion),this.position.add(sg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rg,e)}translateY(e){return this.translateOnAxis(og,e)}translateZ(e){return this.translateOnAxis(ag,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pl.copy(e):pl.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(Bo,pl,this.up):bn.lookAt(pl,Bo,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),xr.setFromRotationMatrix(bn),this.quaternion.premultiply(xr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lg),_r.child=e,this.dispatchEvent(_r),_r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($b),lu.child=e,this.dispatchEvent(lu),lu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lg),_r.child=e,this.dispatchEvent(_r),_r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,jb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,Zb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Lt.DEFAULT_UP=new C(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;tn=new C,Mn=new C,cu=new C,Sn=new C,vr=new C,br=new C,cg=new C,hu=new C,uu=new C,du=new C,fu=new nt,pu=new nt,mu=new nt,si=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),tn.subVectors(e,t),s.cross(tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){tn.subVectors(s,t),Mn.subVectors(n,t),cu.subVectors(e,t);let o=tn.dot(tn),a=tn.dot(Mn),l=tn.dot(cu),c=Mn.dot(Mn),h=Mn.dot(cu),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Sn.x),l.addScaledVector(o,Sn.y),l.addScaledVector(a,Sn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return fu.setScalar(0),pu.setScalar(0),mu.setScalar(0),fu.fromBufferAttribute(e,t),pu.fromBufferAttribute(e,n),mu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(fu,r.x),o.addScaledVector(pu,r.y),o.addScaledVector(mu,r.z),o}static isFrontFacing(e,t,n,s){return tn.subVectors(n,t),Mn.subVectors(e,t),tn.cross(Mn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),tn.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;vr.subVectors(s,n),br.subVectors(r,n),hu.subVectors(e,n);let l=vr.dot(hu),c=br.dot(hu);if(l<=0&&c<=0)return t.copy(n);uu.subVectors(e,s);let h=vr.dot(uu),u=br.dot(uu);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(vr,o);du.subVectors(e,r);let f=vr.dot(du),p=br.dot(du);if(p>=0&&f<=p)return t.copy(r);let y=f*c-l*p;if(y<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(br,a);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return cg.subVectors(r,s),a=(u-h)/(u-h+(f-p)),t.copy(s).addScaledVector(cg,a);let m=1/(g+y+d);return o=y*m,a=d*m,t.copy(n).addScaledVector(vr,o).addScaledVector(br,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},b0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},ml={h:0,s:0,l:0};ve=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ye.workingColorSpace){if(e=mf(e,1),t=Nt(t,0,1),n=Nt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=gu(o,r,e+1/3),this.g=gu(o,r,e),this.b=gu(o,r,e-1/3)}return Ye.toWorkingColorSpace(this,s),this}setStyle(e,t=At){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let n=b0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cn(e.r),this.g=Cn(e.g),this.b=Cn(e.b),this}copyLinearToSRGB(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return Ye.fromWorkingColorSpace(ii.copy(this),e),Math.round(Nt(ii.r*255,0,255))*65536+Math.round(Nt(ii.g*255,0,255))*256+Math.round(Nt(ii.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(ii.copy(this),t);let n=ii.r,s=ii.g,r=ii.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(ii.copy(this),t),e.r=ii.r,e.g=ii.g,e.b=ii.b,e}getStyle(e=At){Ye.fromWorkingColorSpace(ii.copy(this),e);let t=ii.r,n=ii.g,s=ii.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(is),this.setHSL(is.h+e,is.s+t,is.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(is),e.getHSL(ml);let n=Yo(is.h,ml.h,t),s=Yo(is.s,ml.s,t),r=Yo(is.l,ml.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ii=new ve;ve.NAMES=b0;Kb=0,Si=class extends bi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kb++}),this.uuid=sn(),this.name="",this.blending=Rr,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fu,this.blendDst=Ou,this.blendEquation=Ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dr,this.stencilZFail=dr,this.stencilZPass=dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(n.blending=this.blending),this.side!==Li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fu&&(n.blendSrc=this.blendSrc),this.blendDst!==Ou&&(n.blendDst=this.blendDst),this.blendEquation!==Ws&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qm&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==dr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==dr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==dr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ct=class extends Si{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=af,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ot=new C,gl=new Q,He=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_d,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gl.fromBufferAttribute(this,t),gl.applyMatrix3(e),this.setXY(t,gl.x,gl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_d&&(e.usage=this.usage),e}},jl=class extends He{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Zl=class extends He{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Ke=class extends He{constructor(e,t,n){super(new Float32Array(e),t,n)}},Jb=0,zi=new te,yu=new Lt,Mr=new C,Ii=new $e,Fo=new $e,Wt=new C,Qe=class i extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jb++}),this.uuid=sn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(v0(e)?Zl:jl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ue().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zi.makeRotationFromQuaternion(e),this.applyMatrix4(zi),this}rotateX(e){return zi.makeRotationX(e),this.applyMatrix4(zi),this}rotateY(e){return zi.makeRotationY(e),this.applyMatrix4(zi),this}rotateZ(e){return zi.makeRotationZ(e),this.applyMatrix4(zi),this}translate(e,t,n){return zi.makeTranslation(e,t,n),this.applyMatrix4(zi),this}scale(e,t,n){return zi.makeScale(e,t,n),this.applyMatrix4(zi),this}lookAt(e){return yu.lookAt(e),yu.updateMatrix(),this.applyMatrix4(yu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ke(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $e);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Ii.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Ii.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Ii.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Ii.min),this.boundingBox.expandByPoint(Ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new It);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(Ii.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Fo.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(Ii.min,Fo.min),Ii.expandByPoint(Wt),Wt.addVectors(Ii.max,Fo.max),Ii.expandByPoint(Wt)):(Ii.expandByPoint(Fo.min),Ii.expandByPoint(Fo.max))}Ii.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Wt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Wt.fromBufferAttribute(a,c),l&&(Mr.fromBufferAttribute(e,c),Wt.add(Mr)),s=Math.max(s,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new C,l[A]=new C;let c=new C,h=new C,u=new C,d=new Q,f=new Q,p=new Q,y=new C,g=new C;function m(A,M,b){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,A),f.fromBufferAttribute(r,M),p.fromBufferAttribute(r,b),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let I=1/(f.x*p.y-p.x*f.y);isFinite(I)&&(y.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(I),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(I),a[A].add(y),a[M].add(y),a[b].add(y),l[A].add(g),l[M].add(g),l[b].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let A=0,M=v.length;A<M;++A){let b=v[A],I=b.start,U=b.count;for(let L=I,N=I+U;L<N;L+=3)m(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let x=new C,_=new C,T=new C,S=new C;function w(A){T.fromBufferAttribute(s,A),S.copy(T);let M=a[A];x.copy(M),x.sub(T.multiplyScalar(T.dot(M))).normalize(),_.crossVectors(S,M);let I=_.dot(l[A])<0?-1:1;o.setXYZW(A,x.x,x.y,x.z,I)}for(let A=0,M=v.length;A<M;++A){let b=v[A],I=b.start,U=b.count;for(let L=I,N=I+U;L<N;L+=3)w(e.getX(L+0)),w(e.getX(L+1)),w(e.getX(L+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new He(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),y=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new He(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hg=new te,Fs=new Mi,yl=new It,ug=new C,xl=new C,_l=new C,vl=new C,xu=new C,bl=new C,dg=new C,Ml=new C,Ve=class extends Lt{constructor(e=new Qe,t=new Ct){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){bl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(xu.fromBufferAttribute(u,e),o?bl.addScaledVector(xu,h):bl.addScaledVector(xu.sub(t),h))}t.add(bl)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yl.copy(n.boundingSphere),yl.applyMatrix4(r),Fs.copy(e.ray).recast(e.near),!(yl.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(yl,ug)===null||Fs.origin.distanceToSquared(ug)>(e.far-e.near)**2))&&(hg.copy(r).invert(),Fs.copy(e.ray).applyMatrix4(hg),!(n.boundingBox!==null&&Fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Fs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,y=d.length;p<y;p++){let g=d[p],m=o[g.materialIndex],v=Math.max(g.start,f.start),x=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let _=v,T=x;_<T;_+=3){let S=a.getX(_),w=a.getX(_+1),A=a.getX(_+2);s=Sl(this,m,e,n,c,h,u,S,w,A),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let g=p,m=y;g<m;g+=3){let v=a.getX(g),x=a.getX(g+1),_=a.getX(g+2);s=Sl(this,o,e,n,c,h,u,v,x,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,y=d.length;p<y;p++){let g=d[p],m=o[g.materialIndex],v=Math.max(g.start,f.start),x=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=v,T=x;_<T;_+=3){let S=_,w=_+1,A=_+2;s=Sl(this,m,e,n,c,h,u,S,w,A),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let g=p,m=y;g<m;g+=3){let v=g,x=g+1,_=g+2;s=Sl(this,o,e,n,c,h,u,v,x,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};Pn=class i extends Qe{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(u,2));function p(y,g,m,v,x,_,T,S,w,A,M){let b=_/w,I=T/A,U=_/2,L=T/2,N=S/2,H=w+1,k=A+1,ee=0,q=0,re=new C;for(let ce=0;ce<k;ce++){let _e=ce*I-L;for(let Be=0;Be<H;Be++){let xe=Be*b-U;re[y]=xe*v,re[g]=_e*x,re[m]=N,c.push(re.x,re.y,re.z),re[y]=0,re[g]=0,re[m]=S>0?1:-1,h.push(re.x,re.y,re.z),u.push(Be/w),u.push(1-ce/A),ee+=1}}for(let ce=0;ce<A;ce++)for(let _e=0;_e<w;_e++){let Be=d+_e+H*ce,xe=d+_e+H*(ce+1),G=d+(_e+1)+H*(ce+1),K=d+(_e+1)+H*ce;l.push(Be,xe,K),l.push(xe,G,K),q+=6}a.addGroup(f,q,M),f+=q,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};tM={clone:Vr,merge:li},iM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ui=class extends Si{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iM,this.fragmentShader=nM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vr(e.uniforms),this.uniformsGroups=eM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},$l=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=An}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ns=new C,fg=new Q,pg=new Q,Bt=class extends $l{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=kr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(qo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kr*2*Math.atan(Math.tan(qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,t){return this.getViewBounds(e,fg,pg),t.subVectors(pg,fg)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(qo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Sr=-90,Tr=1,Sd=class extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Bt(Sr,Tr,e,t);s.layers=this.layers,this.add(s);let r=new Bt(Sr,Tr,e,t);r.layers=this.layers,this.add(r);let o=new Bt(Sr,Tr,e,t);o.layers=this.layers,this.add(o);let a=new Bt(Sr,Tr,e,t);a.layers=this.layers,this.add(a);let l=new Bt(Sr,Tr,e,t);l.layers=this.layers,this.add(l);let c=new Bt(Sr,Tr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===An)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ql)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Kl=class extends kt{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ur,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Td=class extends ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Kl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:hi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Pn(5,5,5),r=new Ui({name:"CubemapFromEquirect",uniforms:Vr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ri,blending:os});r.uniforms.tEquirect.value=t;let o=new Ve(s,r),a=t.minFilter;return t.minFilter===un&&(t.minFilter=hi),new Sd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},_u=new C,sM=new C,rM=new Ue,ci=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=_u.subVectors(n,t).cross(sM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(_u),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||rM.getNormalMatrix(e),s=this.coplanarPoint(_u).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Os=new It,Tl=new C,In=class{constructor(e=new ci,t=new ci,n=new ci,s=new ci,r=new ci,o=new ci){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=An){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],p=s[9],y=s[10],g=s[11],m=s[12],v=s[13],x=s[14],_=s[15];if(n[0].setComponents(l-r,d-c,g-f,_-m).normalize(),n[1].setComponents(l+r,d+c,g+f,_+m).normalize(),n[2].setComponents(l+o,d+h,g+p,_+v).normalize(),n[3].setComponents(l-o,d-h,g-p,_-v).normalize(),n[4].setComponents(l-a,d-u,g-y,_-x).normalize(),t===An)n[5].setComponents(l+a,d+u,g+y,_+x).normalize();else if(t===ql)n[5].setComponents(a,u,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(e){return Os.center.set(0,0,0),Os.radius=.7071067811865476,Os.applyMatrix4(e.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Tl.x=s.normal.x>0?e.max.x:e.min.x,Tl.y=s.normal.y>0?e.max.y:e.min.y,Tl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Tl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};Hr=class i extends Qe{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],p=[],y=[],g=[];for(let m=0;m<h;m++){let v=m*d-o;for(let x=0;x<c;x++){let _=x*u-r;p.push(_,-v,0),y.push(0,0,1),g.push(x/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){let x=v+c*m,_=v+c*(m+1),T=v+1+c*(m+1),S=v+1+c*m;f.push(x,_,S),f.push(_,T,S)}this.setIndex(f),this.setAttribute("position",new Ke(p,3)),this.setAttribute("normal",new Ke(y,3)),this.setAttribute("uv",new Ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},aM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_M=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,EM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,AM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,RM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,PM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,IM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,LM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,DM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,UM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,NM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FM="gl_FragColor = linearToOutputTexel( gl_FragColor );",OM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,VM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,HM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,GM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,WM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ZM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$M=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,QM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,eS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,oS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,aS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_S=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,SS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ES=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,RS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,PS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,US=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,NS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,BS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,OS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,HS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,GS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,WS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,XS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$S=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,oT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_T=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ST=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ET=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,AT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,CT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,IT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,NT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,OT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:aM,alphahash_pars_fragment:lM,alphamap_fragment:cM,alphamap_pars_fragment:hM,alphatest_fragment:uM,alphatest_pars_fragment:dM,aomap_fragment:fM,aomap_pars_fragment:pM,batching_pars_vertex:mM,batching_vertex:gM,begin_vertex:yM,beginnormal_vertex:xM,bsdfs:_M,iridescence_fragment:vM,bumpmap_pars_fragment:bM,clipping_planes_fragment:MM,clipping_planes_pars_fragment:SM,clipping_planes_pars_vertex:TM,clipping_planes_vertex:wM,color_fragment:EM,color_pars_fragment:AM,color_pars_vertex:CM,color_vertex:RM,common:PM,cube_uv_reflection_fragment:IM,defaultnormal_vertex:LM,displacementmap_pars_vertex:DM,displacementmap_vertex:UM,emissivemap_fragment:NM,emissivemap_pars_fragment:BM,colorspace_fragment:FM,colorspace_pars_fragment:OM,envmap_fragment:zM,envmap_common_pars_fragment:kM,envmap_pars_fragment:VM,envmap_pars_vertex:HM,envmap_physical_pars_fragment:QM,envmap_vertex:GM,fog_vertex:WM,fog_pars_vertex:XM,fog_fragment:qM,fog_pars_fragment:YM,gradientmap_pars_fragment:jM,lightmap_pars_fragment:ZM,lights_lambert_fragment:$M,lights_lambert_pars_fragment:KM,lights_pars_begin:JM,lights_toon_fragment:eS,lights_toon_pars_fragment:tS,lights_phong_fragment:iS,lights_phong_pars_fragment:nS,lights_physical_fragment:sS,lights_physical_pars_fragment:rS,lights_fragment_begin:oS,lights_fragment_maps:aS,lights_fragment_end:lS,logdepthbuf_fragment:cS,logdepthbuf_pars_fragment:hS,logdepthbuf_pars_vertex:uS,logdepthbuf_vertex:dS,map_fragment:fS,map_pars_fragment:pS,map_particle_fragment:mS,map_particle_pars_fragment:gS,metalnessmap_fragment:yS,metalnessmap_pars_fragment:xS,morphinstance_vertex:_S,morphcolor_vertex:vS,morphnormal_vertex:bS,morphtarget_pars_vertex:MS,morphtarget_vertex:SS,normal_fragment_begin:TS,normal_fragment_maps:wS,normal_pars_fragment:ES,normal_pars_vertex:AS,normal_vertex:CS,normalmap_pars_fragment:RS,clearcoat_normal_fragment_begin:PS,clearcoat_normal_fragment_maps:IS,clearcoat_pars_fragment:LS,iridescence_pars_fragment:DS,opaque_fragment:US,packing:NS,premultiplied_alpha_fragment:BS,project_vertex:FS,dithering_fragment:OS,dithering_pars_fragment:zS,roughnessmap_fragment:kS,roughnessmap_pars_fragment:VS,shadowmap_pars_fragment:HS,shadowmap_pars_vertex:GS,shadowmap_vertex:WS,shadowmask_pars_fragment:XS,skinbase_vertex:qS,skinning_pars_vertex:YS,skinning_vertex:jS,skinnormal_vertex:ZS,specularmap_fragment:$S,specularmap_pars_fragment:KS,tonemapping_fragment:JS,tonemapping_pars_fragment:QS,transmission_fragment:eT,transmission_pars_fragment:tT,uv_pars_fragment:iT,uv_pars_vertex:nT,uv_vertex:sT,worldpos_vertex:rT,background_vert:oT,background_frag:aT,backgroundCube_vert:lT,backgroundCube_frag:cT,cube_vert:hT,cube_frag:uT,depth_vert:dT,depth_frag:fT,distanceRGBA_vert:pT,distanceRGBA_frag:mT,equirect_vert:gT,equirect_frag:yT,linedashed_vert:xT,linedashed_frag:_T,meshbasic_vert:vT,meshbasic_frag:bT,meshlambert_vert:MT,meshlambert_frag:ST,meshmatcap_vert:TT,meshmatcap_frag:wT,meshnormal_vert:ET,meshnormal_frag:AT,meshphong_vert:CT,meshphong_frag:RT,meshphysical_vert:PT,meshphysical_frag:IT,meshtoon_vert:LT,meshtoon_frag:DT,points_vert:UT,points_frag:NT,shadow_vert:BT,shadow_frag:FT,sprite_vert:OT,sprite_frag:zT},ae={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},hn={basic:{uniforms:li([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:li([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new ve(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:li([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:li([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:li([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new ve(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:li([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:li([ae.points,ae.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:li([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:li([ae.common,ae.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:li([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:li([ae.sprite,ae.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:li([ae.common,ae.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:li([ae.lights,ae.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};hn.physical={uniforms:li([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};wl={r:0,b:0,g:0},zs=new Di,kT=new te;Ln=class extends $l{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Cr=4,mg=[.125,.215,.35,.446,.526,.582],Xs=20,vu=new Ln,gg=new ve,bu=null,Mu=0,Su=0,Tu=!1,Gs=(1+Math.sqrt(5))/2,wr=1/Gs,yg=[new C(-Gs,wr,0),new C(Gs,wr,0),new C(-wr,0,Gs),new C(wr,0,Gs),new C(0,Gs,-wr),new C(0,Gs,wr),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],Jl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){bu=this._renderer.getRenderTarget(),Mu=this._renderer.getActiveCubeFace(),Su=this._renderer.getActiveMipmapLevel(),Tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_g(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bu,Mu,Su),this._renderer.xr.enabled=Tu,e.scissorTest=!1,El(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ur||e.mapping===Nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bu=this._renderer.getRenderTarget(),Mu=this._renderer.getActiveCubeFace(),Su=this._renderer.getActiveMipmapLevel(),Tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:fa,format:vi,colorSpace:qt,depthBuffer:!1},s=xg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xg(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YT(r)),this._blurMaterial=jT(r,e,t)}return s}_compileMaterial(e){let t=new Ve(this._lodPlanes[0],e);this._renderer.compile(t,vu)}_sceneToCubeUV(e,t,n,s){let a=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(gg),h.toneMapping=as,h.autoClear=!1;let f=new Ct({name:"PMREM.Background",side:ri,depthWrite:!1,depthTest:!1}),p=new Ve(new Pn,f),y=!1,g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,y=!0):(f.color.copy(gg),y=!0);for(let m=0;m<6;m++){let v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let x=this._cubeSize;El(s,v*x,m>2?x:0,x,x),h.setRenderTarget(s),y&&h.render(p,a),h.render(e,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ur||e.mapping===Nr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_g());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ve(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;El(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,vu)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=yg[(s-r-1)%yg.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ve(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Xs-1),y=r/p,g=isFinite(r)?1+Math.floor(h*y):Xs;g>Xs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Xs}`);let m=[],v=0;for(let w=0;w<Xs;++w){let A=w/y,M=Math.exp(-A*A/2);m.push(M),w===0?v+=M:w<g&&(v+=2*M)}for(let w=0;w<m.length;w++)m[w]=m[w]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=p,d.mipInt.value=x-n;let _=this._sizeLods[s],T=3*_*(s>x-Cr?s-x+Cr:0),S=4*(this._cubeSize-_);El(t,T,S,3*_,2*_),l.setRenderTarget(t),l.render(u,vu)}};Ql=class extends kt{constructor(e,t,n,s,r,o,a,l,c,h=Pr){if(h!==Pr&&h!==Fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Pr&&(n=ls),n===void 0&&h===Fr&&(n=Br),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},T0=new kt,bg=new Ql(1,1),w0=new Yl,E0=new Md,A0=new Kl,Mg=[],Sg=[],Tg=new Float32Array(16),wg=new Float32Array(9),Eg=new Float32Array(4);wd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bw(t.type)}},Ed=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vw(t.type)}},Ad=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},wu=/(\w+)(\])?(\[|\.)?/g;Lr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Hw(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};Gw=37297,Ww=0;Rg=new Ue;Al=new C;Qw=/^[ \t]*#include +<([\w\d./]+)>/gm;e1=new Map;i1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;h1=0,Rd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Pd(e),t.set(e,n)),n}},Pd=class{constructor(e){this.id=h1++,this.code=e,this.usedTimes=0}};y1=0;Id=class extends Si{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=db,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ld=class extends Si{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},b1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;T1={[zu]:ku,[Vu]:Xl,[Hu]:Wu,[Dr]:Gu,[ku]:zu,[Xl]:Vu,[Wu]:Hu,[Gu]:Dr};yf={contain:E1,cover:A1,fill:C1,getByteLength:Dd};Ud=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Xt=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},L1={type:"move"},jo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let g=t.getJointPose(y,n),m=this._getHandJoint(c,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(L1)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Xt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},D1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Nd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new kt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ui({vertexShader:D1,fragmentShader:U1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ve(new Hr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bd=class extends bi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,y=new Nd,g=t.getContextAttributes(),m=null,v=null,x=[],_=[],T=new Q,S=null,w=new Bt;w.viewport=new nt;let A=new Bt;A.viewport=new nt;let M=[w,A],b=new Ud,I=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let K=x[G];return K===void 0&&(K=new jo,x[G]=K),K.getTargetRaySpace()},this.getControllerGrip=function(G){let K=x[G];return K===void 0&&(K=new jo,x[G]=K),K.getGripSpace()},this.getHand=function(G){let K=x[G];return K===void 0&&(K=new jo,x[G]=K),K.getHandSpace()};function L(G){let K=_.indexOf(G.inputSource);if(K===-1)return;let he=x[K];he!==void 0&&(he.update(G.inputSource,G.frame,c||o),he.dispatchEvent({type:G.type,data:G.inputSource}))}function N(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",H);for(let G=0;G<x.length;G++){let K=_[G];K!==null&&(_[G]=null,x[G].disconnect(K))}I=null,U=null,y.reset(),e.setRenderTarget(m),f=null,d=null,u=null,s=null,v=null,xe.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",N),s.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0){let K={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,K),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new ki(f.framebufferWidth,f.framebufferHeight,{format:vi,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,he=null,se=null;g.depth&&(se=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=g.stencil?Fr:Pr,he=g.stencil?Br:ls);let Ee={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Ee),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new ki(d.textureWidth,d.textureHeight,{format:vi,type:dn,depthTexture:new Ql(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),xe.setContext(s),xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(G){for(let K=0;K<G.removed.length;K++){let he=G.removed[K],se=_.indexOf(he);se>=0&&(_[se]=null,x[se].disconnect(he))}for(let K=0;K<G.added.length;K++){let he=G.added[K],se=_.indexOf(he);if(se===-1){for(let Ce=0;Ce<x.length;Ce++)if(Ce>=_.length){_.push(he),se=Ce;break}else if(_[Ce]===null){_[Ce]=he,se=Ce;break}if(se===-1)break}let Ee=x[se];Ee&&Ee.connect(he)}}let k=new C,ee=new C;function q(G,K,he){k.setFromMatrixPosition(K.matrixWorld),ee.setFromMatrixPosition(he.matrixWorld);let se=k.distanceTo(ee),Ee=K.projectionMatrix.elements,Ce=he.projectionMatrix.elements,Le=Ee[14]/(Ee[10]-1),yt=Ee[14]/(Ee[10]+1),qe=(Ee[9]+1)/Ee[5],Pt=(Ee[9]-1)/Ee[5],B=(Ee[8]-1)/Ee[0],vt=(Ce[8]+1)/Ce[0],Fe=Le*B,Oe=Le*vt,Ae=se/(-B+vt),Tt=Ae*-B;if(K.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Tt),G.translateZ(Ae),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Ee[10]===-1)G.projectionMatrix.copy(K.projectionMatrix),G.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let Re=Le+Ae,D=yt+Ae,E=Fe-Tt,V=Oe+(se-Tt),Z=qe*yt/D*Re,J=Pt*yt/D*Re;G.projectionMatrix.makePerspective(E,V,Z,J,Re,D),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function re(G,K){K===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(K.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let K=G.near,he=G.far;y.texture!==null&&(y.depthNear>0&&(K=y.depthNear),y.depthFar>0&&(he=y.depthFar)),b.near=A.near=w.near=K,b.far=A.far=w.far=he,(I!==b.near||U!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),I=b.near,U=b.far),w.layers.mask=G.layers.mask|2,A.layers.mask=G.layers.mask|4,b.layers.mask=w.layers.mask|A.layers.mask;let se=G.parent,Ee=b.cameras;re(b,se);for(let Ce=0;Ce<Ee.length;Ce++)re(Ee[Ce],se);Ee.length===2?q(b,w,A):b.projectionMatrix.copy(w.projectionMatrix),ce(G,b,se)};function ce(G,K,he){he===null?G.matrix.copy(K.matrixWorld):(G.matrix.copy(he.matrixWorld),G.matrix.invert(),G.matrix.multiply(K.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(K.projectionMatrix),G.projectionMatrixInverse.copy(K.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=kr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(b)};let _e=null;function Be(G,K){if(h=K.getViewerPose(c||o),p=K,h!==null){let he=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let se=!1;he.length!==b.cameras.length&&(b.cameras.length=0,se=!0);for(let Ce=0;Ce<he.length;Ce++){let Le=he[Ce],yt=null;if(f!==null)yt=f.getViewport(Le);else{let Pt=u.getViewSubImage(d,Le);yt=Pt.viewport,Ce===0&&(e.setRenderTargetTextures(v,Pt.colorTexture,d.ignoreDepthValues?void 0:Pt.depthStencilTexture),e.setRenderTarget(v))}let qe=M[Ce];qe===void 0&&(qe=new Bt,qe.layers.enable(Ce),qe.viewport=new nt,M[Ce]=qe),qe.matrix.fromArray(Le.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(Le.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(yt.x,yt.y,yt.width,yt.height),Ce===0&&(b.matrix.copy(qe.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),se===!0&&b.cameras.push(qe)}let Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")){let Ce=u.getDepthInformation(he[0]);Ce&&Ce.isValid&&Ce.texture&&y.init(e,Ce,s.renderState)}}for(let he=0;he<x.length;he++){let se=_[he],Ee=x[he];se!==null&&Ee!==void 0&&Ee.update(se,K,c||o)}_e&&_e(G,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),p=null}let xe=new S0;xe.setAnimationLoop(Be),this.setAnimationLoop=function(G){_e=G},this.dispose=function(){}}},ks=new Di,N1=new te;Gr=class{constructor(e={}){let{canvas:t=Ob(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let p=new Uint32Array(4),y=new Int32Array(4),g=null,m=null,v=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this.toneMapping=as,this.toneMappingExposure=1;let _=this,T=!1,S=0,w=0,A=null,M=-1,b=null,I=new nt,U=new nt,L=null,N=new ve(0),H=0,k=t.width,ee=t.height,q=1,re=null,ce=null,_e=new nt(0,0,k,ee),Be=new nt(0,0,k,ee),xe=!1,G=new In,K=!1,he=!1,se=new te,Ee=new te,Ce=new C,Le=new nt,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qe=!1;function Pt(){return A===null?q:1}let B=n;function vt(R,O){return t.getContext(R,O)}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",de,!1),B===null){let O="webgl2";if(B=vt(O,R),B===null)throw vt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Fe,Oe,Ae,Tt,Re,D,E,V,Z,J,j,Te,ue,me,it,ie,ge,Pe,De,ye,et,Ge,bt,F;function le(){Fe=new $T(B),Fe.init(),Ge=new I1(B,Fe),Oe=new WT(B,Fe,e,Ge),Ae=new w1(B,Fe),Oe.reverseDepthBuffer&&d&&Ae.buffers.depth.setReversed(!0),Tt=new QT(B),Re=new d1,D=new P1(B,Fe,Ae,Re,Oe,Ge,Tt),E=new qT(_),V=new ZT(_),Z=new oM(B),bt=new HT(B,Z),J=new KT(B,Z,Tt,bt),j=new tw(B,J,Z,Tt),De=new ew(B,Oe,D),ie=new XT(Re),Te=new u1(_,E,V,Fe,Oe,bt,ie),ue=new B1(_,Re),me=new p1,it=new v1(Fe),Pe=new VT(_,E,V,Ae,j,f,l),ge=new S1(_,j,Oe),F=new F1(B,Tt,Oe,Ae),ye=new GT(B,Fe,Tt),et=new JT(B,Fe,Tt),Tt.programs=Te.programs,_.capabilities=Oe,_.extensions=Fe,_.properties=Re,_.renderLists=me,_.shadowMap=ge,_.state=Ae,_.info=Tt}le();let Y=new Bd(_,B);this.xr=Y,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let R=Fe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Fe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(k,ee,!1))},this.getSize=function(R){return R.set(k,ee)},this.setSize=function(R,O,W=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=R,ee=O,t.width=Math.floor(R*q),t.height=Math.floor(O*q),W===!0&&(t.style.width=R+"px",t.style.height=O+"px"),this.setViewport(0,0,R,O)},this.getDrawingBufferSize=function(R){return R.set(k*q,ee*q).floor()},this.setDrawingBufferSize=function(R,O,W){k=R,ee=O,q=W,t.width=Math.floor(R*W),t.height=Math.floor(O*W),this.setViewport(0,0,R,O)},this.getCurrentViewport=function(R){return R.copy(I)},this.getViewport=function(R){return R.copy(_e)},this.setViewport=function(R,O,W,X){R.isVector4?_e.set(R.x,R.y,R.z,R.w):_e.set(R,O,W,X),Ae.viewport(I.copy(_e).multiplyScalar(q).round())},this.getScissor=function(R){return R.copy(Be)},this.setScissor=function(R,O,W,X){R.isVector4?Be.set(R.x,R.y,R.z,R.w):Be.set(R,O,W,X),Ae.scissor(U.copy(Be).multiplyScalar(q).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(R){Ae.setScissorTest(xe=R)},this.setOpaqueSort=function(R){re=R},this.setTransparentSort=function(R){ce=R},this.getClearColor=function(R){return R.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(R=!0,O=!0,W=!0){let X=0;if(R){let z=!1;if(A!==null){let ne=A.texture.format;z=ne===Ac||ne===ff||ne===Ec}if(z){let ne=A.texture.type,fe=ne===dn||ne===ls||ne===Jo||ne===Br||ne===hf||ne===uf,be=Pe.getClearColor(),Me=Pe.getClearAlpha(),Ne=be.r,ke=be.g,Se=be.b;fe?(p[0]=Ne,p[1]=ke,p[2]=Se,p[3]=Me,B.clearBufferuiv(B.COLOR,0,p)):(y[0]=Ne,y[1]=ke,y[2]=Se,y[3]=Me,B.clearBufferiv(B.COLOR,0,y))}else X|=B.COLOR_BUFFER_BIT}O&&(X|=B.DEPTH_BUFFER_BIT),W&&(X|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",de,!1),me.dispose(),it.dispose(),Re.dispose(),E.dispose(),V.dispose(),j.dispose(),bt.dispose(),F.dispose(),Te.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Im),Y.removeEventListener("sessionend",Lm),Us.stop()};function $(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let R=Tt.autoReset,O=ge.enabled,W=ge.autoUpdate,X=ge.needsUpdate,z=ge.type;le(),Tt.autoReset=R,ge.enabled=O,ge.autoUpdate=W,ge.needsUpdate=X,ge.type=z}function de(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ze(R){let O=R.target;O.removeEventListener("dispose",ze),Dt(O)}function Dt(R){ei(R),Re.remove(R)}function ei(R){let O=Re.get(R).programs;O!==void 0&&(O.forEach(function(W){Te.releaseProgram(W)}),R.isShaderMaterial&&Te.releaseShaderCache(R))}this.renderBufferDirect=function(R,O,W,X,z,ne){O===null&&(O=yt);let fe=z.isMesh&&z.matrixWorld.determinant()<0,be=Dv(R,O,W,X,z);Ae.setMaterial(X,fe);let Me=W.index,Ne=1;if(X.wireframe===!0){if(Me=J.getWireframeAttribute(W),Me===void 0)return;Ne=2}let ke=W.drawRange,Se=W.attributes.position,rt=ke.start*Ne,Mt=(ke.start+ke.count)*Ne;ne!==null&&(rt=Math.max(rt,ne.start*Ne),Mt=Math.min(Mt,(ne.start+ne.count)*Ne)),Me!==null?(rt=Math.max(rt,0),Mt=Math.min(Mt,Me.count)):Se!=null&&(rt=Math.max(rt,0),Mt=Math.min(Mt,Se.count));let wt=Mt-rt;if(wt<0||wt===1/0)return;bt.setup(z,X,be,W,Me);let yi,lt=ye;if(Me!==null&&(yi=Z.get(Me),lt=et,lt.setIndex(yi)),z.isMesh)X.wireframe===!0?(Ae.setLineWidth(X.wireframeLinewidth*Pt()),lt.setMode(B.LINES)):lt.setMode(B.TRIANGLES);else if(z.isLine){let we=X.linewidth;we===void 0&&(we=1),Ae.setLineWidth(we*Pt()),z.isLineSegments?lt.setMode(B.LINES):z.isLineLoop?lt.setMode(B.LINE_LOOP):lt.setMode(B.LINE_STRIP)}else z.isPoints?lt.setMode(B.POINTS):z.isSprite&&lt.setMode(B.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)lt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))lt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let we=z._multiDrawStarts,xn=z._multiDrawCounts,ct=z._multiDrawCount,Ji=Me?Z.get(Me).bytesPerElement:1,ur=Re.get(X).currentProgram.getUniforms();for(let Ri=0;Ri<ct;Ri++)ur.setValue(B,"_gl_DrawID",Ri),lt.render(we[Ri]/Ji,xn[Ri])}else if(z.isInstancedMesh)lt.renderInstances(rt,wt,z.count);else if(W.isInstancedBufferGeometry){let we=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,xn=Math.min(W.instanceCount,we);lt.renderInstances(rt,wt,xn)}else lt.render(rt,wt)};function dt(R,O,W){R.transparent===!0&&R.side===Zt&&R.forceSinglePass===!1?(R.side=ri,R.needsUpdate=!0,al(R,O,W),R.side=Li,R.needsUpdate=!0,al(R,O,W),R.side=Zt):al(R,O,W)}this.compile=function(R,O,W=null){W===null&&(W=R),m=it.get(W),m.init(O),x.push(m),W.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),R!==W&&R.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();let X=new Set;return R.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ne=z.material;if(ne)if(Array.isArray(ne))for(let fe=0;fe<ne.length;fe++){let be=ne[fe];dt(be,W,z),X.add(be)}else dt(ne,W,z),X.add(ne)}),x.pop(),m=null,X},this.compileAsync=function(R,O,W=null){let X=this.compile(R,O,W);return new Promise(z=>{function ne(){if(X.forEach(function(fe){Re.get(fe).currentProgram.isReady()&&X.delete(fe)}),X.size===0){z(R);return}setTimeout(ne,10)}Fe.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let Ki=null;function yn(R){Ki&&Ki(R)}function Im(){Us.stop()}function Lm(){Us.start()}let Us=new S0;Us.setAnimationLoop(yn),typeof self<"u"&&Us.setContext(self),this.setAnimationLoop=function(R){Ki=R,Y.setAnimationLoop(R),R===null?Us.stop():Us.start()},Y.addEventListener("sessionstart",Im),Y.addEventListener("sessionend",Lm),this.render=function(R,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(O),O=Y.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,O,A),m=it.get(R,x.length),m.init(O),x.push(m),Ee.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),G.setFromProjectionMatrix(Ee),he=this.localClippingEnabled,K=ie.init(this.clippingPlanes,he),g=me.get(R,v.length),g.init(),v.push(g),Y.enabled===!0&&Y.isPresenting===!0){let ne=_.xr.getDepthSensingMesh();ne!==null&&Jh(ne,O,-1/0,_.sortObjects)}Jh(R,O,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(re,ce),qe=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,qe&&Pe.addToRenderList(g,R),this.info.render.frame++,K===!0&&ie.beginShadows();let W=m.state.shadowsArray;ge.render(W,R,O),K===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=g.opaque,z=g.transmissive;if(m.setupLights(),O.isArrayCamera){let ne=O.cameras;if(z.length>0)for(let fe=0,be=ne.length;fe<be;fe++){let Me=ne[fe];Um(X,z,R,Me)}qe&&Pe.render(R);for(let fe=0,be=ne.length;fe<be;fe++){let Me=ne[fe];Dm(g,R,Me,Me.viewport)}}else z.length>0&&Um(X,z,R,O),qe&&Pe.render(R),Dm(g,R,O);A!==null&&(D.updateMultisampleRenderTarget(A),D.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(_,R,O),bt.resetDefaultState(),M=-1,b=null,x.pop(),x.length>0?(m=x[x.length-1],K===!0&&ie.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function Jh(R,O,W,X){if(R.visible===!1)return;if(R.layers.test(O.layers)){if(R.isGroup)W=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(O);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||G.intersectsSprite(R)){X&&Le.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ee);let fe=j.update(R),be=R.material;be.visible&&g.push(R,fe,be,W,Le.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||G.intersectsObject(R))){let fe=j.update(R),be=R.material;if(X&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Le.copy(R.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Le.copy(fe.boundingSphere.center)),Le.applyMatrix4(R.matrixWorld).applyMatrix4(Ee)),Array.isArray(be)){let Me=fe.groups;for(let Ne=0,ke=Me.length;Ne<ke;Ne++){let Se=Me[Ne],rt=be[Se.materialIndex];rt&&rt.visible&&g.push(R,fe,rt,W,Le.z,Se)}}else be.visible&&g.push(R,fe,be,W,Le.z,null)}}let ne=R.children;for(let fe=0,be=ne.length;fe<be;fe++)Jh(ne[fe],O,W,X)}function Dm(R,O,W,X){let z=R.opaque,ne=R.transmissive,fe=R.transparent;m.setupLightsView(W),K===!0&&ie.setGlobalState(_.clippingPlanes,W),X&&Ae.viewport(I.copy(X)),z.length>0&&ol(z,O,W),ne.length>0&&ol(ne,O,W),fe.length>0&&ol(fe,O,W),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Um(R,O,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new ki(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?fa:dn,minFilter:un,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));let ne=m.state.transmissionRenderTarget[X.id],fe=X.viewport||I;ne.setSize(fe.z,fe.w);let be=_.getRenderTarget();_.setRenderTarget(ne),_.getClearColor(N),H=_.getClearAlpha(),H<1&&_.setClearColor(16777215,.5),_.clear(),qe&&Pe.render(W);let Me=_.toneMapping;_.toneMapping=as;let Ne=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),K===!0&&ie.setGlobalState(_.clippingPlanes,X),ol(R,W,X),D.updateMultisampleRenderTarget(ne),D.updateRenderTargetMipmap(ne),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Se=0,rt=O.length;Se<rt;Se++){let Mt=O[Se],wt=Mt.object,yi=Mt.geometry,lt=Mt.material,we=Mt.group;if(lt.side===Zt&&wt.layers.test(X.layers)){let xn=lt.side;lt.side=ri,lt.needsUpdate=!0,Nm(wt,W,X,yi,lt,we),lt.side=xn,lt.needsUpdate=!0,ke=!0}}ke===!0&&(D.updateMultisampleRenderTarget(ne),D.updateRenderTargetMipmap(ne))}_.setRenderTarget(be),_.setClearColor(N,H),Ne!==void 0&&(X.viewport=Ne),_.toneMapping=Me}function ol(R,O,W){let X=O.isScene===!0?O.overrideMaterial:null;for(let z=0,ne=R.length;z<ne;z++){let fe=R[z],be=fe.object,Me=fe.geometry,Ne=X===null?fe.material:X,ke=fe.group;be.layers.test(W.layers)&&Nm(be,O,W,Me,Ne,ke)}}function Nm(R,O,W,X,z,ne){R.onBeforeRender(_,O,W,X,z,ne),R.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),z.onBeforeRender(_,O,W,X,R,ne),z.transparent===!0&&z.side===Zt&&z.forceSinglePass===!1?(z.side=ri,z.needsUpdate=!0,_.renderBufferDirect(W,O,X,z,R,ne),z.side=Li,z.needsUpdate=!0,_.renderBufferDirect(W,O,X,z,R,ne),z.side=Zt):_.renderBufferDirect(W,O,X,z,R,ne),R.onAfterRender(_,O,W,X,z,ne)}function al(R,O,W){O.isScene!==!0&&(O=yt);let X=Re.get(R),z=m.state.lights,ne=m.state.shadowsArray,fe=z.state.version,be=Te.getParameters(R,z.state,ne,O,W),Me=Te.getProgramCacheKey(be),Ne=X.programs;X.environment=R.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(R.isMeshStandardMaterial?V:E).get(R.envMap||X.environment),X.envMapRotation=X.environment!==null&&R.envMap===null?O.environmentRotation:R.envMapRotation,Ne===void 0&&(R.addEventListener("dispose",ze),Ne=new Map,X.programs=Ne);let ke=Ne.get(Me);if(ke!==void 0){if(X.currentProgram===ke&&X.lightsStateVersion===fe)return Fm(R,be),ke}else be.uniforms=Te.getUniforms(R),R.onBeforeCompile(be,_),ke=Te.acquireProgram(be,Me),Ne.set(Me,ke),X.uniforms=be.uniforms;let Se=X.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Se.clippingPlanes=ie.uniform),Fm(R,be),X.needsLights=Nv(R),X.lightsStateVersion=fe,X.needsLights&&(Se.ambientLightColor.value=z.state.ambient,Se.lightProbe.value=z.state.probe,Se.directionalLights.value=z.state.directional,Se.directionalLightShadows.value=z.state.directionalShadow,Se.spotLights.value=z.state.spot,Se.spotLightShadows.value=z.state.spotShadow,Se.rectAreaLights.value=z.state.rectArea,Se.ltc_1.value=z.state.rectAreaLTC1,Se.ltc_2.value=z.state.rectAreaLTC2,Se.pointLights.value=z.state.point,Se.pointLightShadows.value=z.state.pointShadow,Se.hemisphereLights.value=z.state.hemi,Se.directionalShadowMap.value=z.state.directionalShadowMap,Se.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Se.spotShadowMap.value=z.state.spotShadowMap,Se.spotLightMatrix.value=z.state.spotLightMatrix,Se.spotLightMap.value=z.state.spotLightMap,Se.pointShadowMap.value=z.state.pointShadowMap,Se.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=ke,X.uniformsList=null,ke}function Bm(R){if(R.uniformsList===null){let O=R.currentProgram.getUniforms();R.uniformsList=Lr.seqWithValue(O.seq,R.uniforms)}return R.uniformsList}function Fm(R,O){let W=Re.get(R);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Dv(R,O,W,X,z){O.isScene!==!0&&(O=yt),D.resetTextureUnits();let ne=O.fog,fe=X.isMeshStandardMaterial?O.environment:null,be=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:qt,Me=(X.isMeshStandardMaterial?V:E).get(X.envMap||fe),Ne=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ke=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Se=!!W.morphAttributes.position,rt=!!W.morphAttributes.normal,Mt=!!W.morphAttributes.color,wt=as;X.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(wt=_.toneMapping);let yi=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,lt=yi!==void 0?yi.length:0,we=Re.get(X),xn=m.state.lights;if(K===!0&&(he===!0||R!==b)){let Oi=R===b&&X.id===M;ie.setState(X,R,Oi)}let ct=!1;X.version===we.__version?(we.needsLights&&we.lightsStateVersion!==xn.state.version||we.outputColorSpace!==be||z.isBatchedMesh&&we.batching===!1||!z.isBatchedMesh&&we.batching===!0||z.isBatchedMesh&&we.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&we.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&we.instancing===!1||!z.isInstancedMesh&&we.instancing===!0||z.isSkinnedMesh&&we.skinning===!1||!z.isSkinnedMesh&&we.skinning===!0||z.isInstancedMesh&&we.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&we.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&we.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&we.instancingMorph===!1&&z.morphTexture!==null||we.envMap!==Me||X.fog===!0&&we.fog!==ne||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ie.numPlanes||we.numIntersection!==ie.numIntersection)||we.vertexAlphas!==Ne||we.vertexTangents!==ke||we.morphTargets!==Se||we.morphNormals!==rt||we.morphColors!==Mt||we.toneMapping!==wt||we.morphTargetsCount!==lt)&&(ct=!0):(ct=!0,we.__version=X.version);let Ji=we.currentProgram;ct===!0&&(Ji=al(X,O,z));let ur=!1,Ri=!1,Lo=!1,Et=Ji.getUniforms(),cn=we.uniforms;if(Ae.useProgram(Ji.program)&&(ur=!0,Ri=!0,Lo=!0),X.id!==M&&(M=X.id,Ri=!0),ur||b!==R){Ae.buffers.depth.getReversed()?(se.copy(R.projectionMatrix),kb(se),Vb(se),Et.setValue(B,"projectionMatrix",se)):Et.setValue(B,"projectionMatrix",R.projectionMatrix),Et.setValue(B,"viewMatrix",R.matrixWorldInverse);let $n=Et.map.cameraPosition;$n!==void 0&&$n.setValue(B,Ce.setFromMatrixPosition(R.matrixWorld)),Oe.logarithmicDepthBuffer&&Et.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Et.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,Ri=!0,Lo=!0)}if(z.isSkinnedMesh){Et.setOptional(B,z,"bindMatrix"),Et.setOptional(B,z,"bindMatrixInverse");let Oi=z.skeleton;Oi&&(Oi.boneTexture===null&&Oi.computeBoneTexture(),Et.setValue(B,"boneTexture",Oi.boneTexture,D))}z.isBatchedMesh&&(Et.setOptional(B,z,"batchingTexture"),Et.setValue(B,"batchingTexture",z._matricesTexture,D),Et.setOptional(B,z,"batchingIdTexture"),Et.setValue(B,"batchingIdTexture",z._indirectTexture,D),Et.setOptional(B,z,"batchingColorTexture"),z._colorsTexture!==null&&Et.setValue(B,"batchingColorTexture",z._colorsTexture,D));let Do=W.morphAttributes;if((Do.position!==void 0||Do.normal!==void 0||Do.color!==void 0)&&De.update(z,W,Ji),(Ri||we.receiveShadow!==z.receiveShadow)&&(we.receiveShadow=z.receiveShadow,Et.setValue(B,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(cn.envMap.value=Me,cn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(cn.envMapIntensity.value=O.environmentIntensity),Ri&&(Et.setValue(B,"toneMappingExposure",_.toneMappingExposure),we.needsLights&&Uv(cn,Lo),ne&&X.fog===!0&&ue.refreshFogUniforms(cn,ne),ue.refreshMaterialUniforms(cn,X,q,ee,m.state.transmissionRenderTarget[R.id]),Lr.upload(B,Bm(we),cn,D)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Lr.upload(B,Bm(we),cn,D),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Et.setValue(B,"center",z.center),Et.setValue(B,"modelViewMatrix",z.modelViewMatrix),Et.setValue(B,"normalMatrix",z.normalMatrix),Et.setValue(B,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let Oi=X.uniformsGroups;for(let $n=0,Kn=Oi.length;$n<Kn;$n++){let Om=Oi[$n];F.update(Om,Ji),F.bind(Om,Ji)}}return Ji}function Uv(R,O){R.ambientLightColor.needsUpdate=O,R.lightProbe.needsUpdate=O,R.directionalLights.needsUpdate=O,R.directionalLightShadows.needsUpdate=O,R.pointLights.needsUpdate=O,R.pointLightShadows.needsUpdate=O,R.spotLights.needsUpdate=O,R.spotLightShadows.needsUpdate=O,R.rectAreaLights.needsUpdate=O,R.hemisphereLights.needsUpdate=O}function Nv(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,O,W){Re.get(R.texture).__webglTexture=O,Re.get(R.depthTexture).__webglTexture=W;let X=Re.get(R);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,O){let W=Re.get(R);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(R,O=0,W=0){A=R,S=O,w=W;let X=!0,z=null,ne=!1,fe=!1;if(R){let Me=Re.get(R);if(Me.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(B.FRAMEBUFFER,null),X=!1;else if(Me.__webglFramebuffer===void 0)D.setupRenderTarget(R);else if(Me.__hasExternalTextures)D.rebindTextures(R,Re.get(R.texture).__webglTexture,Re.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Se=R.depthTexture;if(Me.__boundDepthTexture!==Se){if(Se!==null&&Re.has(Se)&&(R.width!==Se.image.width||R.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(R)}}let Ne=R.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(fe=!0);let ke=Re.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ke[O])?z=ke[O][W]:z=ke[O],ne=!0):R.samples>0&&D.useMultisampledRTT(R)===!1?z=Re.get(R).__webglMultisampledFramebuffer:Array.isArray(ke)?z=ke[W]:z=ke,I.copy(R.viewport),U.copy(R.scissor),L=R.scissorTest}else I.copy(_e).multiplyScalar(q).floor(),U.copy(Be).multiplyScalar(q).floor(),L=xe;if(Ae.bindFramebuffer(B.FRAMEBUFFER,z)&&X&&Ae.drawBuffers(R,z),Ae.viewport(I),Ae.scissor(U),Ae.setScissorTest(L),ne){let Me=Re.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,Me.__webglTexture,W)}else if(fe){let Me=Re.get(R.texture),Ne=O||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Me.__webglTexture,W||0,Ne)}M=-1},this.readRenderTargetPixels=function(R,O,W,X,z,ne,fe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Re.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&fe!==void 0&&(be=be[fe]),be){Ae.bindFramebuffer(B.FRAMEBUFFER,be);try{let Me=R.texture,Ne=Me.format,ke=Me.type;if(!Oe.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=R.width-X&&W>=0&&W<=R.height-z&&B.readPixels(O,W,X,z,Ge.convert(Ne),Ge.convert(ke),ne)}finally{let Me=A!==null?Re.get(A).__webglFramebuffer:null;Ae.bindFramebuffer(B.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(R,O,W,X,z,ne,fe){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Re.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&fe!==void 0&&(be=be[fe]),be){let Me=R.texture,Ne=Me.format,ke=Me.type;if(!Oe.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=R.width-X&&W>=0&&W<=R.height-z){Ae.bindFramebuffer(B.FRAMEBUFFER,be);let Se=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Se),B.bufferData(B.PIXEL_PACK_BUFFER,ne.byteLength,B.STREAM_READ),B.readPixels(O,W,X,z,Ge.convert(Ne),Ge.convert(ke),0);let rt=A!==null?Re.get(A).__webglFramebuffer:null;Ae.bindFramebuffer(B.FRAMEBUFFER,rt);let Mt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await zb(B,Mt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Se),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ne),B.deleteBuffer(Se),B.deleteSync(Mt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,O=null,W=0){R.isTexture!==!0&&(Go("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,R=arguments[1]);let X=Math.pow(2,-W),z=Math.floor(R.image.width*X),ne=Math.floor(R.image.height*X),fe=O!==null?O.x:0,be=O!==null?O.y:0;D.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,W,0,0,fe,be,z,ne),Ae.unbindTexture()},this.copyTextureToTexture=function(R,O,W=null,X=null,z=0){R.isTexture!==!0&&(Go("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,R=arguments[1],O=arguments[2],z=arguments[3]||0,W=null);let ne,fe,be,Me,Ne,ke,Se,rt,Mt,wt=R.isCompressedTexture?R.mipmaps[z]:R.image;W!==null?(ne=W.max.x-W.min.x,fe=W.max.y-W.min.y,be=W.isBox3?W.max.z-W.min.z:1,Me=W.min.x,Ne=W.min.y,ke=W.isBox3?W.min.z:0):(ne=wt.width,fe=wt.height,be=wt.depth||1,Me=0,Ne=0,ke=0),X!==null?(Se=X.x,rt=X.y,Mt=X.z):(Se=0,rt=0,Mt=0);let yi=Ge.convert(O.format),lt=Ge.convert(O.type),we;O.isData3DTexture?(D.setTexture3D(O,0),we=B.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(D.setTexture2DArray(O,0),we=B.TEXTURE_2D_ARRAY):(D.setTexture2D(O,0),we=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,O.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,O.unpackAlignment);let xn=B.getParameter(B.UNPACK_ROW_LENGTH),ct=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Ji=B.getParameter(B.UNPACK_SKIP_PIXELS),ur=B.getParameter(B.UNPACK_SKIP_ROWS),Ri=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,wt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,wt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Me),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ne),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ke);let Lo=R.isDataArrayTexture||R.isData3DTexture,Et=O.isDataArrayTexture||O.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let cn=Re.get(R),Do=Re.get(O),Oi=Re.get(cn.__renderTarget),$n=Re.get(Do.__renderTarget);Ae.bindFramebuffer(B.READ_FRAMEBUFFER,Oi.__webglFramebuffer),Ae.bindFramebuffer(B.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let Kn=0;Kn<be;Kn++)Lo&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Re.get(R).__webglTexture,z,ke+Kn),R.isDepthTexture?(Et&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Re.get(O).__webglTexture,z,Mt+Kn),B.blitFramebuffer(Me,Ne,ne,fe,Se,rt,ne,fe,B.DEPTH_BUFFER_BIT,B.NEAREST)):Et?B.copyTexSubImage3D(we,z,Se,rt,Mt+Kn,Me,Ne,ne,fe):B.copyTexSubImage2D(we,z,Se,rt,Mt+Kn,Me,Ne,ne,fe);Ae.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Et?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(we,z,Se,rt,Mt,ne,fe,be,yi,lt,wt.data):O.isCompressedArrayTexture?B.compressedTexSubImage3D(we,z,Se,rt,Mt,ne,fe,be,yi,wt.data):B.texSubImage3D(we,z,Se,rt,Mt,ne,fe,be,yi,lt,wt):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,z,Se,rt,ne,fe,yi,lt,wt.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,z,Se,rt,wt.width,wt.height,yi,wt.data):B.texSubImage2D(B.TEXTURE_2D,z,Se,rt,ne,fe,yi,lt,wt);B.pixelStorei(B.UNPACK_ROW_LENGTH,xn),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ct),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ji),B.pixelStorei(B.UNPACK_SKIP_ROWS,ur),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ri),z===0&&O.generateMipmaps&&B.generateMipmap(we),Ae.unbindTexture()},this.copyTextureToTexture3D=function(R,O,W=null,X=null,z=0){return R.isTexture!==!0&&(Go("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,R=arguments[2],O=arguments[3],z=arguments[4]||0),Go('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,O,W,X,z)},this.initRenderTarget=function(R){Re.get(R).__webglFramebuffer===void 0&&D.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),Ae.unbindTexture()},this.resetState=function(){S=0,w=0,A=null,Ae.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}},ec=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ve(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},tc=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ia=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_d,this.updateRanges=[],this.version=0,this.uuid=sn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ai=new C,na=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ai.fromBufferAttribute(this,t),ai.applyMatrix4(e),this.setXYZ(t,ai.x,ai.y,ai.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ai.fromBufferAttribute(this,t),ai.applyNormalMatrix(e),this.setXYZ(t,ai.x,ai.y,ai.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ai.fromBufferAttribute(this,t),ai.transformDirection(e),this.setXYZ(t,ai.x,ai.y,ai.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=nn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=nn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=nn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=nn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new He(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Og=new C,zg=new nt,kg=new nt,O1=new C,Vg=new te,Cl=new C,Eu=new It,Hg=new te,Au=new Mi,ic=class extends Ve{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Hm,this.bindMatrix=new te,this.bindMatrixInverse=new te,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $e),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Cl),this.boundingBox.expandByPoint(Cl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new It),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Cl),this.boundingSphere.expandByPoint(Cl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Eu.copy(this.boundingSphere),Eu.applyMatrix4(s),e.ray.intersectsSphere(Eu)!==!1&&(Hg.copy(s).invert(),Au.copy(e.ray).applyMatrix4(Hg),!(this.boundingBox!==null&&Au.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Au)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Hm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===hb?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;zg.fromBufferAttribute(s.attributes.skinIndex,e),kg.fromBufferAttribute(s.attributes.skinWeight,e),Og.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=kg.getComponent(r);if(o!==0){let a=zg.getComponent(r);Vg.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(O1.copy(Og).applyMatrix4(Vg),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},sa=class extends Lt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Rn=class extends kt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=$t,h=$t,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Gg=new te,z1=new te,nc=class i{constructor(e=[],t=[]){this.uuid=sn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new te)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new te;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:z1;Gg.multiplyMatrices(a,t[r]),Gg.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Rn(t,e,e,vi,_i);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new sa),this.bones.push(o),this.boneInverses.push(new te().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Ys=class extends He{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Er=new te,Wg=new te,Rl=[],Xg=new $e,k1=new te,Oo=new Ve,zo=new It,Wr=class extends Ve{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ys(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,k1)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $e),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Er),Xg.copy(e.boundingBox).applyMatrix4(Er),this.boundingBox.union(Xg)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new It),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Er),zo.copy(e.boundingSphere).applyMatrix4(Er),this.boundingSphere.union(zo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Oo.geometry=this.geometry,Oo.material=this.material,Oo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zo.copy(this.boundingSphere),zo.applyMatrix4(n),e.ray.intersectsSphere(zo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Er),Wg.multiplyMatrices(n,Er),Oo.matrixWorld=Wg,Oo.raycast(e,Rl);for(let o=0,a=Rl.length;o<a;o++){let l=Rl[o];l.instanceId=r,l.object=this,t.push(l)}Rl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ys(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Rn(new Float32Array(s*this.count),s,this.count,wc,_i));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};Fd=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,s){let r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let a=r[this.index];o.push(a),this.index++,a.start=e,a.count=t,a.z=n,a.index=s}reset(){this.list.length=0,this.index=0}},xi=new te,G1=new ve(1,1,1),Ru=new In,Pl=new $e,Vs=new It,ko=new C,qg=new C,W1=new C,Pu=new Fd,ni=new Ve,Il=[];ra=class extends Ve{get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}constructor(e,t,n=t*2,s){super(new Qe,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4),n=new Rn(t,e,e,vi,_i);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Uint32Array(e*e),n=new Rn(t,e,e,Ec,ls);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Float32Array(e*e*4).fill(1),n=new Rn(t,e,e,vi,_i);n.colorSpace=Ye.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){let t=this.geometry,n=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in e.attributes){let o=e.getAttribute(r),{array:a,itemSize:l,normalized:c}=o,h=new a.constructor(n*l),u=new He(h,l,c);t.setAttribute(r,u)}if(e.getIndex()!==null){let r=n>65535?new Uint32Array(s):new Uint16Array(s);t.setIndex(new He(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(let n in t.attributes){if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let s=e.getAttribute(n),r=t.getAttribute(n);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $e);let e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,xi),this.getBoundingBoxAt(r,Pl).applyMatrix4(xi),e.union(Pl)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new It);let e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,xi),this.getBoundingSphereAt(r,Vs).applyMatrix4(xi),e.union(Vs)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:e},s=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Cu),s=this._availableInstanceIds.shift(),this._instanceInfo[s]=n):(s=this._instanceInfo.length,this._instanceInfo.push(n));let r=this._matricesTexture;xi.identity().toArray(r.image.data,s*16),r.needsUpdate=!0;let o=this._colorsTexture;return o&&(G1.toArray(o.image.data,s*4),o.needsUpdate=!0),this._visibilityChanged=!0,s}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);let s={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;s.vertexStart=this._nextVertexStart,s.reservedVertexCount=t===-1?e.getAttribute("position").count:t;let o=e.getIndex();if(o!==null&&(s.indexStart=this._nextIndexStart,s.reservedIndexCount=n===-1?o.count:n),s.indexStart!==-1&&s.indexStart+s.reservedIndexCount>this._maxIndexCount||s.vertexStart+s.reservedVertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Cu),l=this._availableGeometryIds.shift(),r[l]=s):(l=this._geometryCount,this._geometryCount++,r.push(s)),this.setGeometryAt(l,e),this._nextIndexStart=s.indexStart+s.reservedIndexCount,this._nextVertexStart=s.vertexStart+s.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let n=this.geometry,s=n.getIndex()!==null,r=n.getIndex(),o=t.getIndex(),a=this._geometryInfo[e];if(s&&o.count>a.reservedIndexCount||t.attributes.position.count>a.reservedVertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");let l=a.vertexStart,c=a.reservedVertexCount;a.vertexCount=t.getAttribute("position").count;for(let h in n.attributes){let u=t.getAttribute(h),d=n.getAttribute(h);X1(u,d,l);let f=u.itemSize;for(let p=u.count,y=c;p<y;p++){let g=l+p;for(let m=0;m<f;m++)d.setComponent(g,m,0)}d.needsUpdate=!0,d.addUpdateRange(l*f,c*f)}if(s){let h=a.indexStart,u=a.reservedIndexCount;a.indexCount=t.getIndex().count;for(let d=0;d<o.count;d++)r.setX(h+d,l+o.getX(d));for(let d=o.count,f=u;d<f;d++)r.setX(h+d,l);r.needsUpdate=!0,r.addUpdateRange(h,a.reservedIndexCount)}return a.start=s?a.indexStart:a.vertexStart,a.count=s?a.indexCount:a.vertexCount,a.boundingBox=null,t.boundingBox!==null&&(a.boundingBox=t.boundingBox.clone()),a.boundingSphere=null,t.boundingSphere!==null&&(a.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){let t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;let n=this._instanceInfo;for(let s=0,r=n.length;s<r;s++)n[s].geometryIndex===e&&this.deleteInstance(s);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){let t=this._instanceInfo;return e>=t.length||t[e].active===!1?this:(t[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this)}optimize(){let e=0,t=0,n=this._geometryInfo,s=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){let l=s[o],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==t){let{indexStart:h,vertexStart:u,reservedIndexCount:d}=c,f=r.index,p=f.array,y=e-u;for(let g=h;g<h+d;g++)p[g]=p[g]+y;f.array.copyWithin(t,h,h+d),f.addUpdateRange(t,d),c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){let{vertexStart:h,reservedVertexCount:u}=c,d=r.attributes;for(let f in d){let p=d[f],{array:y,itemSize:g}=p;y.copyWithin(e*g,h*g,(h+u)*g),p.addUpdateRange(e*g,u*g)}c.vertexStart=e}e+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart,this._nextIndexStart=r.index?c.indexStart+c.reservedIndexCount:0,this._nextVertexStart=c.vertexStart+c.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,s=this._geometryInfo[e];if(s.boundingBox===null){let r=new $e,o=n.index,a=n.attributes.position;for(let l=s.start,c=s.start+s.count;l<c;l++){let h=l;o&&(h=o.getX(h)),r.expandByPoint(ko.fromBufferAttribute(a,h))}s.boundingBox=r}return t.copy(s.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,s=this._geometryInfo[e];if(s.boundingSphere===null){let r=new It;this.getBoundingBoxAt(e,Pl),Pl.getCenter(r.center);let o=n.index,a=n.attributes.position,l=0;for(let c=s.start,h=s.start+s.count;c<h;c++){let u=c;o&&(u=o.getX(u)),ko.fromBufferAttribute(a,u),l=Math.max(l,r.center.distanceToSquared(ko))}r.radius=Math.sqrt(l),s.boundingSphere=r}return t.copy(s.boundingSphere),t}setMatrixAt(e,t){let n=this._instanceInfo,s=this._matricesTexture,r=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?this:(t.toArray(r,e*16),s.needsUpdate=!0,this)}getMatrixAt(e,t){let n=this._instanceInfo,s=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?null:t.fromArray(s,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();let n=this._colorsTexture,s=this._colorsTexture.image.data,r=this._instanceInfo;return e>=r.length||r[e].active===!1?this:(t.toArray(s,e*4),n.needsUpdate=!0,this)}getColorAt(e,t){let n=this._colorsTexture.image.data,s=this._instanceInfo;return e>=s.length||s[e].active===!1?null:t.fromArray(n,e*4)}setVisibleAt(e,t){let n=this._instanceInfo;return e>=n.length||n[e].active===!1||n[e].visible===t?this:(n[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){let t=this._instanceInfo;return e>=t.length||t[e].active===!1?!1:t[e].visible}setGeometryIdAt(e,t){let n=this._instanceInfo,s=this._geometryInfo;return e>=n.length||n[e].active===!1||t>=s.length||s[t].active===!1?null:(n[e].geometryIndex=t,this)}getGeometryIdAt(e){let t=this._instanceInfo;return e>=t.length||t[e].active===!1?-1:t[e].geometryIndex}getGeometryRangeAt(e,t={}){if(e<0||e>=this._geometryCount)return null;let n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){let t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(Cu);t[t.length-1]===n.length;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);let s=new Int32Array(e),r=new Int32Array(e);Hs(this._multiDrawCounts,s),Hs(this._multiDrawStarts,r),this._multiDrawCounts=s,this._multiDrawStarts=r,this._maxInstanceCount=e;let o=this._indirectTexture,a=this._matricesTexture,l=this._colorsTexture;o.dispose(),this._initIndirectTexture(),Hs(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),Hs(a.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),Hs(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){let n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Qe,this._initializeGeometry(r));let o=this.geometry;r.index&&Hs(r.index.array,o.index.array);for(let a in r.attributes)Hs(r.attributes[a].array,o.attributes[a].array)}raycast(e,t){let n=this._instanceInfo,s=this._geometryInfo,r=this.matrixWorld,o=this.geometry;ni.material=this.material,ni.geometry.index=o.index,ni.geometry.attributes=o.attributes,ni.geometry.boundingBox===null&&(ni.geometry.boundingBox=new $e),ni.geometry.boundingSphere===null&&(ni.geometry.boundingSphere=new It);for(let a=0,l=n.length;a<l;a++){if(!n[a].visible||!n[a].active)continue;let c=n[a].geometryIndex,h=s[c];ni.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,ni.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,ni.geometry.boundingBox),this.getBoundingSphereAt(c,ni.geometry.boundingSphere),ni.raycast(e,Il);for(let u=0,d=Il.length;u<d;u++){let f=Il[u];f.object=this,f.batchId=a,t.push(f)}Il.length=0}ni.material=null,ni.geometry.index=null,ni.geometry.attributes={},ni.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,s,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let o=s.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,l=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,u=this._geometryInfo,d=this.perObjectFrustumCulled,f=this._indirectTexture,p=f.image.data;d&&(xi.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Ru.setFromProjectionMatrix(xi,e.coordinateSystem));let y=0;if(this.sortObjects){xi.copy(this.matrixWorld).invert(),ko.setFromMatrixPosition(n.matrixWorld).applyMatrix4(xi),qg.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(xi);for(let v=0,x=l.length;v<x;v++)if(l[v].visible&&l[v].active){let _=l[v].geometryIndex;this.getMatrixAt(v,xi),this.getBoundingSphereAt(_,Vs).applyMatrix4(xi);let T=!1;if(d&&(T=!Ru.intersectsSphere(Vs)),!T){let S=u[_],w=W1.subVectors(Vs.center,ko).dot(qg);Pu.push(S.start,S.count,w,v)}}let g=Pu.list,m=this.customSort;m===null?g.sort(r.transparent?H1:V1):m.call(this,g,n);for(let v=0,x=g.length;v<x;v++){let _=g[v];c[y]=_.start*a,h[y]=_.count,p[y]=_.index,y++}Pu.reset()}else for(let g=0,m=l.length;g<m;g++)if(l[g].visible&&l[g].active){let v=l[g].geometryIndex,x=!1;if(d&&(this.getMatrixAt(g,xi),this.getBoundingSphereAt(v,Vs).applyMatrix4(xi),x=!Ru.intersectsSphere(Vs)),!x){let _=u[v];c[y]=_.start*a,h[y]=_.count,p[y]=g,y++}}f.needsUpdate=!0,this._multiDrawCount=y,this._visibilityChanged=!1}onBeforeShadow(e,t,n,s,r,o){this.onBeforeRender(e,null,s,r,o)}},Xr=class extends Si{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},sc=new C,rc=new C,Yg=new te,Vo=new Mi,Ll=new It,Iu=new C,jg=new C,Dn=class extends Lt{constructor(e=new Qe,t=new Xr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)sc.fromBufferAttribute(t,s-1),rc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=sc.distanceTo(rc);e.setAttribute("lineDistance",new Ke(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ll.copy(n.boundingSphere),Ll.applyMatrix4(s),Ll.radius+=r,e.ray.intersectsSphere(Ll)===!1)return;Yg.copy(s).invert(),Vo.copy(e.ray).applyMatrix4(Yg);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let y=f,g=p-1;y<g;y+=c){let m=h.getX(y),v=h.getX(y+1),x=Dl(this,e,Vo,l,m,v);x&&t.push(x)}if(this.isLineLoop){let y=h.getX(p-1),g=h.getX(f),m=Dl(this,e,Vo,l,y,g);m&&t.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let y=f,g=p-1;y<g;y+=c){let m=Dl(this,e,Vo,l,y,y+1);m&&t.push(m)}if(this.isLineLoop){let y=Dl(this,e,Vo,l,p-1,f);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};Zg=new C,$g=new C,cs=class extends Dn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Zg.fromBufferAttribute(t,s),$g.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Zg.distanceTo($g);e.setAttribute("lineDistance",new Ke(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},js=class extends Dn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Vi=class extends Si{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Kg=new te,Od=new Mi,Ul=new It,Nl=new C,Ti=class extends Lt{constructor(e=new Qe,t=new Vi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ul.copy(n.boundingSphere),Ul.applyMatrix4(s),Ul.radius+=r,e.ray.intersectsSphere(Ul)===!1)return;Kg.copy(s).invert(),Od.copy(e.ray).applyMatrix4(Kg);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,y=f;p<y;p++){let g=c.getX(p);Nl.fromBufferAttribute(u,g),Jg(Nl,g,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,y=f;p<y;p++)Nl.fromBufferAttribute(u,p),Jg(Nl,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};oa=class extends kt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Hi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Q:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new C,s=[],r=[],o=[],a=new C,l=new te;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Nt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Nt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},aa=class extends Hi{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Q){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},zd=class extends aa{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};Bl=new C,Lu=new xf,Du=new xf,Uu=new xf,la=class extends Hi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new C){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Bl.subVectors(s[0],s[1]).add(s[0]),c=Bl);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Bl.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Bl),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),p<1e-4&&(p=y),g<1e-4&&(g=y),Lu.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,y,g),Du.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,y,g),Uu.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,y,g)}else this.curveType==="catmullrom"&&(Lu.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Du.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Uu.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Lu.calc(l),Du.calc(l),Uu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};oc=class extends Hi{constructor(e=new Q,t=new Q,n=new Q,s=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Q){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($o(e,s.x,r.x,o.x,a.x),$o(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},kd=class extends Hi{constructor(e=new C,t=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($o(e,s.x,r.x,o.x,a.x),$o(e,s.y,r.y,o.y,a.y),$o(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ac=class extends Hi{constructor(e=new Q,t=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Q){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vd=class extends Hi{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lc=class extends Hi{constructor(e=new Q,t=new Q,n=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Q){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Zo(e,s.x,r.x,o.x),Zo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cc=class extends Hi{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Zo(e,s.x,r.x,o.x),Zo(e,s.y,r.y,o.y),Zo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hc=class extends Hi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Q){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Qg(a,l.x,c.x,h.x,u.x),Qg(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Q().fromArray(s))}return this}},Hd=Object.freeze({__proto__:null,ArcCurve:zd,CatmullRomCurve3:la,CubicBezierCurve:oc,CubicBezierCurve3:kd,EllipseCurve:aa,LineCurve:ac,LineCurve3:Vd,QuadraticBezierCurve:lc,QuadraticBezierCurve3:cc,SplineCurve:hc}),Gd=class extends Hi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Hd[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Hd[s.type]().fromJSON(s))}return this}},Wd=class extends Gd{constructor(e){super(),this.type="Path",this.currentPoint=new Q,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ac(this.currentPoint.clone(),new Q(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new lc(this.currentPoint.clone(),new Q(e,t),new Q(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new oc(this.currentPoint.clone(),new Q(e,t),new Q(n,s),new Q(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new hc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new aa(e,t,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Xd=class i extends Qe{constructor(e=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Nt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new C,d=new Q,f=new C,p=new C,y=new C,g=0,m=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-g,f.z=m*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:g=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(p)}for(let v=0;v<=t;v++){let x=n+v*h*s,_=Math.sin(x),T=Math.cos(x);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*_,u.y=e[S].y,u.z=e[S].x*T,o.push(u.x,u.y,u.z),d.x=v/t,d.y=S/(e.length-1),a.push(d.x,d.y);let w=l[3*S+0]*_,A=l[3*S+1],M=l[3*S+0]*T;c.push(w,A,M)}}for(let v=0;v<t;v++)for(let x=0;x<e.length-1;x++){let _=x+v*e.length,T=_,S=_+e.length,w=_+e.length+1,A=_+1;r.push(T,S,A),r.push(w,A,S)}this.setIndex(r),this.setAttribute("position",new Ke(o,3)),this.setAttribute("uv",new Ke(a,2)),this.setAttribute("normal",new Ke(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},uc=class i extends Xd{constructor(e=1,t=1,n=4,s=8){let r=new Wd;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},ca=class i extends Qe{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new C,h=new Q;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ke(o,3)),this.setAttribute("normal",new Ke(a,3)),this.setAttribute("uv",new Ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ha=class i extends Qe{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,y=[],g=n/2,m=0;v(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(d,3)),this.setAttribute("uv",new Ke(f,2));function v(){let _=new C,T=new C,S=0,w=(t-e)/n;for(let A=0;A<=r;A++){let M=[],b=A/r,I=b*(t-e)+e;for(let U=0;U<=s;U++){let L=U/s,N=L*l+a,H=Math.sin(N),k=Math.cos(N);T.x=I*H,T.y=-b*n+g,T.z=I*k,u.push(T.x,T.y,T.z),_.set(H,w,k).normalize(),d.push(_.x,_.y,_.z),f.push(L,1-b),M.push(p++)}y.push(M)}for(let A=0;A<s;A++)for(let M=0;M<r;M++){let b=y[M][A],I=y[M+1][A],U=y[M+1][A+1],L=y[M][A+1];(e>0||M!==0)&&(h.push(b,I,L),S+=3),(t>0||M!==r-1)&&(h.push(I,U,L),S+=3)}c.addGroup(m,S,0),m+=S}function x(_){let T=p,S=new Q,w=new C,A=0,M=_===!0?e:t,b=_===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,g*b,0),d.push(0,b,0),f.push(.5,.5),p++;let I=p;for(let U=0;U<=s;U++){let N=U/s*l+a,H=Math.cos(N),k=Math.sin(N);w.x=M*k,w.y=g*b,w.z=M*H,u.push(w.x,w.y,w.z),d.push(0,b,0),S.x=H*.5+.5,S.y=k*.5*b+.5,f.push(S.x,S.y),p++}for(let U=0;U<s;U++){let L=T+U,N=I+U;_===!0?h.push(N,N+1,L):h.push(N+1,N,L),A+=3}c.addGroup(m,A,_===!0?1:2),m+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},dc=class i extends Qe{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new C,p=new Q;for(let y=0;y<=s;y++){for(let g=0;g<=n;g++){let m=r+g/n*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let y=0;y<s;y++){let g=y*(n+1);for(let m=0;m<n;m++){let v=m+g,x=v,_=v+n+1,T=v+n+2,S=v+1;a.push(x,_,S),a.push(_,T,S)}}this.setIndex(a),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(c,3)),this.setAttribute("uv",new Ke(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},qr=class i extends Qe{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new C,d=new C,f=[],p=[],y=[],g=[];for(let m=0;m<=n;m++){let v=[],x=m/n,_=0;m===0&&o===0?_=.5/t:m===n&&l===Math.PI&&(_=-.5/t);for(let T=0;T<=t;T++){let S=T/t;u.x=-e*Math.cos(s+S*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(s+S*r)*Math.sin(o+x*a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),g.push(S+_,1-x),v.push(c++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){let x=h[m][v+1],_=h[m][v],T=h[m+1][v],S=h[m+1][v+1];(m!==0||o>0)&&f.push(x,_,S),(m!==n-1||l<Math.PI)&&f.push(_,T,S)}this.setIndex(f),this.setAttribute("position",new Ke(p,3)),this.setAttribute("normal",new Ke(y,3)),this.setAttribute("uv",new Ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},fc=class i extends Qe{constructor(e=new cc(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new C,l=new C,c=new Q,h=new C,u=[],d=[],f=[],p=[];y(),this.setIndex(p),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(d,3)),this.setAttribute("uv",new Ke(f,2));function y(){for(let x=0;x<t;x++)g(x);g(r===!1?t:0),v(),m()}function g(x){h=e.getPointAt(x/t,h);let _=o.normals[x],T=o.binormals[x];for(let S=0;S<=s;S++){let w=S/s*Math.PI*2,A=Math.sin(w),M=-Math.cos(w);l.x=M*_.x+A*T.x,l.y=M*_.y+A*T.y,l.z=M*_.z+A*T.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let x=1;x<=t;x++)for(let _=1;_<=s;_++){let T=(s+1)*(x-1)+(_-1),S=(s+1)*x+(_-1),w=(s+1)*x+_,A=(s+1)*(x-1)+_;p.push(T,S,A),p.push(S,w,A)}}function v(){for(let x=0;x<=t;x++)for(let _=0;_<=s;_++)c.x=x/t,c.y=_/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Hd[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Zs=class extends Si{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pf,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ni=class extends Zs{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Yr=class extends Si{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pf,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=af,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};hs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];i:{e:{let o;t:{n:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break n;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break i}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},qd=class extends hs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gm,endingEnd:Gm}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Wm:r=e,a=2*t-n;break;case Xm:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Wm:o=e,l=2*n-t;break;case Xm:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),y=p*p,g=y*p,m=-d*g+2*d*y-d*p,v=(1+d)*g+(-1.5-2*d)*y+(-.5+d)*p+1,x=(-1-f)*g+(1.5+f)*y+.5*p,_=f*g-f*y;for(let T=0;T!==a;++T)r[T]=m*o[h+T]+v*o[c+T]+x*o[l+T]+_*o[u+T];return r}},Yd=class extends hs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},jd=class extends hs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Gi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fl(t,this.TimeBufferType),this.values=Fl(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fl(e.times,Array),values:Fl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new jd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qd(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Or:t=this.InterpolantFactoryMethodDiscrete;break;case zr:t=this.InterpolantFactoryMethodLinear;break;case Qh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Or;case this.InterpolantFactoryMethodLinear:return zr;case this.InterpolantFactoryMethodSmooth:return Qh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Q1(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Qh,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let y=t[u+p];if(y!==t[d+p]||y!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Gi.prototype.TimeBufferType=Float32Array;Gi.prototype.ValueBufferType=Float32Array;Gi.prototype.DefaultInterpolation=zr;us=class extends Gi{constructor(e,t,n){super(e,t,n)}};us.prototype.ValueTypeName="bool";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=Or;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;pc=class extends Gi{};pc.prototype.ValueTypeName="color";Un=class extends Gi{};Un.prototype.ValueTypeName="number";Zd=class extends hs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Kt.slerpFlat(r,0,o,c-a,o,c,l);return r}},Nn=class extends Gi{InterpolantFactoryMethodLinear(e){return new Zd(this.times,this.values,this.getValueSize(),e)}};Nn.prototype.ValueTypeName="quaternion";Nn.prototype.InterpolantFactoryMethodSmooth=void 0;ds=class extends Gi{constructor(e,t,n){super(e,t,n)}};ds.prototype.ValueTypeName="string";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=Or;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;Bn=class extends Gi{};Bn.prototype.ValueTypeName="vector";mc=class{constructor(e="",t=-1,n=[],s=ub){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=sn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(iE(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Gi.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=eE(l);l=e0(l,1,h),c=e0(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Un(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,p,y){if(f.length!==0){let g=[],m=[];C0(f,g,m,p),g.length!==0&&y.push(new u(d,g,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let y=0;y<d[p].morphTargets.length;y++)f[d[p].morphTargets[y]]=-1;for(let y in f){let g=[],m=[];for(let v=0;v!==d[p].morphTargets.length;++v){let x=d[p];g.push(x.time),m.push(x.morphTarget===y?1:0)}s.push(new Un(".morphTargetInfluence["+y+"]",g,m))}l=f.length*o}else{let f=".bones["+t[u].name+"]";n(Bn,f+".position",d,"pos",s),n(Nn,f+".quaternion",d,"rot",s),n(Bn,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};rs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},ua=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}},Ks=new ua,rn=class{constructor(e){this.manager=e!==void 0?e:Ks,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};rn.DEFAULT_MATERIAL_NAME="__DEFAULT";Tn={},$d=class extends Error{constructor(e,t){super(e),this.response=t}},fn=class extends rn{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=rs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Tn[e]!==void 0){Tn[e].push({onLoad:t,onProgress:n,onError:s});return}Tn[e]=[],Tn[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Tn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,y=0,g=new ReadableStream({start(m){v();function v(){u.read().then(({done:x,value:_})=>{if(x)m.close();else{y+=_.byteLength;let T=new ProgressEvent("progress",{lengthComputable:p,loaded:y,total:f});for(let S=0,w=h.length;S<w;S++){let A=h[S];A.onProgress&&A.onProgress(T)}m.enqueue(_),v()}},x=>{m.error(x)})}}});return new Response(g)}else throw new $d(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{rs.add(e,c);let h=Tn[e];delete Tn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Tn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Tn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},Kd=class extends rn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=rs.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Qo("img");function l(){h(),rs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}},gc=class extends rn{constructor(e){super(e)}load(e,t,n,s){let r=new kt,o=new Kd(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},jr=class extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},yc=class extends jr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Nu=new te,t0=new C,i0=new C,da=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new In,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;t0.setFromMatrixPosition(e.matrixWorld),t.position.copy(t0),i0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(i0),t.updateMatrixWorld(),Nu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Nu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Jd=class extends da{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=kr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},xc=class extends jr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Jd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},n0=new te,Ho=new C,Bu=new C,Qd=class extends da{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Q(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ho.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ho),Bu.copy(n.position),Bu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Bu),n.updateMatrixWorld(),s.makeTranslation(-Ho.x,-Ho.y,-Ho.z),n0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(n0)}},_c=class extends jr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Qd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ef=class extends da{constructor(){super(new Ln(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zr=class extends jr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new ef}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},fs=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},vc=class extends rn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=rs.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return rs.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),rs.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});rs.add(e,l),r.manager.itemStart(e)}},_f="\\[\\]\\.:\\/",nE=new RegExp("["+_f+"]","g"),vf="[^"+_f+"]",sE="[^"+_f.replace("\\.","")+"]",rE=/((?:WC+[\/:])*)/.source.replace("WC",vf),oE=/(WCOD+)?/.source.replace("WCOD",sE),aE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vf),lE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vf),cE=new RegExp("^"+rE+oE+aE+lE+"$"),hE=["material","materials","bones","map"],tf=class{constructor(e,t,n){let s=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},St=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(nE,"")}static parseTrackName(e){let t=cE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);hE.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=tf;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];jC=new Float32Array(1),s0=new te,$r=class{constructor(e,t,n=0,s=1/0){this.ray=new Mi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ta,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return s0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(s0),this}intersectObject(e,t=!0,n=[]){return nf(e,this,n,t),n.sort(r0),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)nf(e[s],this,n,t);return n.sort(r0),n}};bc=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Mc=class i{constructor(e,t,n,s){i.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}},o0=new Q,Sc=class{constructor(e=new Q(1/0,1/0),t=new Q(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=o0.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,o0).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},a0=new C,Ol=new C,wi=class{constructor(e=new C,t=new C){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){a0.subVectors(e,this.start),Ol.subVectors(this.end,this.start);let n=Ol.dot(Ol),r=Ol.dot(a0)/n;return t&&(r=Nt(r,0,1)),r}closestPointToPoint(e,t,n){let s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170")});function uE(i){try{let e=typeof location<"u"?location.href:void 0;return new URL(i,e).origin}catch{return null}}function R0(i){if(!i)return null;let e=i.length,t=i.indexOf("?"),n=i.indexOf("#");t!==-1&&(e=Math.min(e,t)),n!==-1&&(e=Math.min(e,n));let s=i.lastIndexOf(".",e),r=i.lastIndexOf("/",e),o=i.indexOf("://");return o!==-1&&o+2===r||s===-1||s<r?null:i.substring(s+1,e)||null}function Nc(i){return i===4||i===-1}function Fn(i,e){return Bc(i)&&i.traversal.lastFrameVisited===e&&i.traversal.used}function Bc(i){return!!i.traversal}function ya(i){let{children:e}=i,t=e.length===0||Bc(e[e.length-1]),n=!i.internal.hasUnrenderableContent||Nc(i.internal.loadingState);return t&&n}function Js(i){return i.traversal.unconditionallyRefine}function ga(i,e,t=!0){if(Bc(i)&&(e.ensureChildrenArePreprocessed(i),i.traversal.lastFrameVisited!==e.frameCount&&(i.traversal.wasInFrustum=i.traversal.inFrustum,i.traversal.wasSetActive=i.traversal.active,i.traversal.wasSetVisible=i.traversal.visible,i.traversal.usedLastFrame=i.traversal.used,i.traversal.lastFrameVisited=e.frameCount,i.traversal.used=!1,i.traversal.inFrustum=!1,i.traversal.isLeaf=!1,i.traversal.visible=!1,i.traversal.active=!1,i.traversal.error=1/0,i.traversal.distanceFromCamera=1/0,i.traversal.allChildrenReady=!1,i.traversal.allChildrenLoaded=!1,i.traversal.kicked=!1,i.traversal.allUsedChildrenProcessed=!1,t&&(e.calculateTileViewErrorWithPlugin(i,Ic),i.traversal.inFrustum=Ic.inView,i.traversal.error=Ic.error,i.traversal.distanceFromCamera=Ic.distanceFromCamera),i.traversal.unconditionallyRefine=i.internal.hasUnrenderableContent,!i.traversal.unconditionallyRefine))){let n=i.parent;for(;n&&n.traversal.unconditionallyRefine;)n=n.parent;n&&n.geometricError<=i.geometricError&&(i.traversal.unconditionallyRefine=!0)}}function bf(i,e,t=!1){if(ga(i,e),t?e.markTileUsed(i):Dc(i),Js(i)&&ya(i)){let n=i.children;for(let s=0,r=n.length;s<r;s++)bf(n[s],e,t)}}function N0(i,e){if(ga(i,e),i.traversal.usedLastFrame&&(Dc(i),i.traversal.wasSetActive&&(i.traversal.active=!0),(!i.traversal.active||Js(i))&&ya(i))){let t=i.children;for(let n=0,s=t.length;n<s;n++)N0(t[n],e)}}function Dc(i){i.traversal.used=!0}function pE(i,e){return!(i.traversal.error<=e.errorTarget&&!Js(i)||e.maxDepth>0&&i.internal.depth+1>=e.maxDepth||!ya(i))}function B0(i,e){let{frameCount:t}=e,{children:n}=i;for(let s=0,r=n.length;s<r;s++){let o=n[s];Fn(o,t)&&(o.traversal.active&&(o.traversal.kicked=!0,o.traversal.active=!1),B0(o,e))}}function I0(i){return!Js(i)&&(!i.internal.hasContent||Nc(i.internal.loadingState))}function F0(i,e){if(ga(i,e),!i.traversal.inFrustum)return;let t=i.parent;if(t&&t.refine==="ADD"&&i.geometricError>0&&i.traversal.error*(t.geometricError/i.geometricError)<=e.errorTarget)return;if(!pE(i,e)){Dc(i);return}let n=!1,s=!1,r=i.children;for(let o=0,a=r.length;o<a;o++){let l=r[o];F0(l,e),n||=Fn(l,e.frameCount),s||=l.traversal.inFrustum}if(i.refine==="REPLACE"&&!s&&r.length!==0){i.traversal.inFrustum=!1,e.markTileUsed(i);for(let o=0,a=r.length;o<a;o++)bf(r[o],e,!0);return}if(Dc(i),i.refine==="REPLACE"&&n&&(e.loadSiblings||e.loadAncestors))for(let o=0,a=r.length;o<a;o++)bf(r[o],e)}function O0(i,e){let t=e.frameCount;if(!Fn(i,t))return;let n=i.children,s=!1;for(let o=0,a=n.length;o<a;o++){let l=n[o];s||=Fn(l,t)}if(!s)i.traversal.isLeaf=!0;else{for(let a=0,l=n.length;a<l;a++)O0(n[a],e);let o=!0;for(let a=0,l=n.length;a<l;a++){let c=n[a];if(Fn(c,t)){let h=!Js(c),u=!c.internal.hasContent||Nc(c.internal.loadingState);h&&u||c.traversal.allChildrenLoaded||(o=!1)}}i.traversal.allChildrenLoaded=o}let r=!0;for(let o=0,a=n.length;o<a;o++){let l=n[o];Fn(l,e.frameCount)&&!l.traversal.allUsedChildrenProcessed&&(r=!1)}i.traversal.allUsedChildrenProcessed=r&&ya(i)}function z0(i,e){if(!Fn(i,e.frameCount))return;let t=i.children;if(i.refine==="REPLACE"&&e.loadAncestors&&!i.traversal.allChildrenLoaded&&!Js(i)&&(i.traversal.isLeaf=!0),i.traversal.isLeaf){if(!Js(i)&&(i.traversal.active=!0,ya(i)&&i.internal.hasContent&&!Nc(i.internal.loadingState)))for(let s=0,r=t.length;s<r;s++)N0(t[s],e);return}let n=t.length>0;for(let s=0,r=t.length;s<r;s++){let o=t[s];z0(o,e),Fn(o,e.frameCount)&&!(o.traversal.active&&I0(o))&&!o.traversal.allChildrenReady&&(n=!1)}i.traversal.allChildrenReady=n,i.refine==="REPLACE"&&!n&&i.traversal.wasSetActive&&I0(i)&&(i.traversal.active=!0,B0(i,e))}function k0(i,e){ga(i,e,!1);let t=Fn(i,e.frameCount);if(t&&(i.internal.hasUnrenderableContent&&(e.markTileUsed(i),e.queueTileForDownload(i)),i.internal.hasRenderableContent&&i.refine==="ADD"&&(i.traversal.active=!0),(i.traversal.active||i.traversal.kicked)&&i.internal.hasContent&&(e.markTileUsed(i),i.traversal.allUsedChildrenProcessed&&e.queueTileForDownload(i),i.internal.loadingState!==4&&(i.traversal.active=!1)),e.loadAncestors&&i.internal.hasContent&&(e.markTileUsed(i),e.queueTileForDownload(i)),i.internal.virtualChildCount>0&&i.internal.hasContent&&e.markTileUsed(i),i.traversal.visible=i.internal.hasRenderableContent&&i.traversal.active&&i.traversal.inFrustum&&i.internal.loadingState===4,e.stats.used++,i.traversal.inFrustum&&e.stats.inFrustum++),t||Bc(i)&&i.traversal.usedLastFrame){let n=!1,s=!1;t?(n=i.traversal.active,s=e.displayActiveTiles&&i.traversal.active||i.traversal.visible):ga(i,e,!1),i.internal.hasRenderableContent&&i.internal.loadingState===4?(n&&e.stats.active++,s&&e.stats.visible++,i.traversal.wasSetActive!==n&&e.invokeOnePlugin(o=>o.setTileActive&&o.setTileActive(i,n)),i.traversal.wasSetVisible!==s&&e.invokeOnePlugin(o=>o.setTileVisible&&o.setTileVisible(i,s))):i.internal.hasRenderableContent||(s=i.traversal.isLeaf,i.traversal.wasSetVisible!==s&&e.invokeOnePlugin(o=>o.setEmptyTileVisible&&o.setEmptyTileVisible(i,s))),i.traversal.visible=s,i.traversal.active=n;let r=i.children;for(let o=0,a=r.length;o<a;o++){let l=r[o];k0(l,e)}}}function mE(i,e){F0(i,e),O0(i,e),z0(i,e),k0(i,e)}function gE(i){let e=null;return()=>{e===null&&(e=Lc.requestAnimationFrame(()=>{e=null,i()}))}}function yE(i,e=null,t=null){let n=[];for(n.push(i),n.push(null),n.push(0);n.length>0;){let s=n.pop(),r=n.pop(),o=n.pop();if(e&&e(o,r,s)){t&&t(o,r,s);return}let a=o.children;if(a)for(let l=a.length-1;l>=0;l--)n.push(a[l]),n.push(o),n.push(s+1);t&&t(o,r,s)}}function Qs(i){if(i===null||i.byteLength<4)return"";let e;if(e=i instanceof DataView?i:new DataView(i),String.fromCharCode(e.getUint8(0))==="{")return null;let t="";for(let n=0;n<4;n++)t+=String.fromCharCode(e.getUint8(n));return t}function G0(i){return bE.decode(i)}function Fc(i){return i.replace(/[\\/][^\\/]+$/,"")+"/"}function W0(i,e,t,n,s,r){let o;switch(n){case"SCALAR":o=1;break;case"VEC2":o=2;break;case"VEC3":o=3;break;case"VEC4":o=4;break;default:throw Error(`FeatureTable : Feature type not provided for "${r}".`)}let a,l=t*o;switch(s){case"BYTE":a=new Int8Array(i,e,l);break;case"UNSIGNED_BYTE":a=new Uint8Array(i,e,l);break;case"SHORT":a=new Int16Array(i,e,l);break;case"UNSIGNED_SHORT":a=new Uint16Array(i,e,l);break;case"INT":a=new Int32Array(i,e,l);break;case"UNSIGNED_INT":a=new Uint32Array(i,e,l);break;case"FLOAT":a=new Float32Array(i,e,l);break;case"DOUBLE":a=new Float64Array(i,e,l);break;default:throw Error(`FeatureTable : Feature component type not provided for "${r}".`)}return a}var Lc,P0,D0,dE,Jr,fE,Qr,ZC,U0,Ic,L0,ps,xE,_E,vE,xa,V0,Uc,Mf,Sf,H0,bE,_a,Oc,ME,Tf,X0,q0,Y0,j0,wf=oe(()=>{Lc=class{static pending=new Map;static session=null;static setXRSession(i){i!==this.session&&(this.flushPending(),this.session=i)}static requestAnimationFrame(i){let{session:e,pending:t}=this,n,s=()=>{t.delete(n),i()};return n=e?e.requestAnimationFrame(s):requestAnimationFrame(s),t.set(n,i),n}static cancelAnimationFrame(i){let{pending:e,session:t}=this;e.delete(i),t?t.cancelAnimationFrame(i):cancelAnimationFrame(i)}static flushPending(){this.pending.forEach((i,e)=>{i(),this.cancelAnimationFrame(e)})}},P0=2**30,D0=class{get unloadPriorityCallback(){return this._unloadPriorityCallback}set unloadPriorityCallback(i){i.length===1?(console.warn('LRUCache: "unloadPriorityCallback" function has been changed to take two arguments.'),this._unloadPriorityCallback=(e,t)=>{let n=i(e),s=i(t);return n<s?-1:+(n>s)}):this._unloadPriorityCallback=i}constructor(){this.minSize=6e3,this.maxSize=8e3,this.minBytesSize=.3*P0,this.maxBytesSize=.4*P0,this.unloadPercent=.05,this.autoMarkUnused=!0,this.cachedBytes=0,this.itemSet=new Map,this.itemList=[],this.usedSet=new Set,this.callbacks=new Map,this.unloadingHandle=-1,this.bytesMap=new Map,this.loadedSet=new Set,this._unloadPriorityCallback=null;let i=this.itemSet;this.defaultPriorityCallback=e=>i.get(e)}isFull(){return this.itemSet.size>=this.maxSize||this.cachedBytes>=this.maxBytesSize}getMemoryUsage(i){return this.bytesMap.get(i)||0}setMemoryUsage(i,e){let{bytesMap:t,itemSet:n}=this;n.has(i)&&(e=Math.round(e),this.cachedBytes-=t.get(i)||0,t.set(i,e),this.cachedBytes+=e)}add(i,e){let t=this.itemSet;if(t.has(i)||this.isFull())return!1;let n=this.usedSet,s=this.itemList,r=this.callbacks;return s.push(i),n.add(i),t.set(i,Date.now()),r.set(i,e),!0}has(i){return this.itemSet.has(i)}remove(i){let e=this.usedSet,t=this.itemSet,n=this.itemList,s=this.bytesMap,r=this.callbacks,o=this.loadedSet;if(t.has(i)){this.cachedBytes-=s.get(i)||0,s.delete(i),r.get(i)(i);let a=n.indexOf(i);return n.splice(a,1),e.delete(i),t.delete(i),r.delete(i),o.delete(i),!0}return!1}setLoaded(i,e){let{itemSet:t,loadedSet:n}=this;t.has(i)&&(e===!0?n.add(i):n.delete(i))}markUsed(i){let e=this.itemSet,t=this.usedSet;e.has(i)&&!t.has(i)&&(e.set(i,Date.now()),t.add(i))}markUnused(i){this.usedSet.delete(i)}markAllUnused(){this.usedSet.clear()}isUsed(i){return this.usedSet.has(i)}unloadUnusedContent(){let{unloadPercent:i,minSize:e,maxSize:t,itemList:n,itemSet:s,usedSet:r,loadedSet:o,callbacks:a,bytesMap:l,minBytesSize:c,maxBytesSize:h}=this,u=n.length-r.size,d=n.length-o.size,f=Math.max(Math.min(n.length-e,u),0),p=this.cachedBytes-c,y=this.unloadPriorityCallback||this.defaultPriorityCallback,g=!1,m=f>0&&u>0||d&&n.length>t;if(u&&this.cachedBytes>c||d&&this.cachedBytes>h||m){n.sort((A,M)=>{let b=r.has(A);if(b===r.has(M)){let I=o.has(A);return I===o.has(M)?-y(A,M):I?1:-1}else return b?1:-1});let v=Math.max(e*i,f*i),x=Math.ceil(Math.min(v,u,f)),_=Math.max(i*p,i*c),T=Math.min(_,p),S=0,w=0;for(;S<n.length&&(this.cachedBytes-w>h||n.length-S>t);){let A=n[S],M=l.get(A)||0;if(r.has(A)&&o.has(A)||this.cachedBytes-w-M<h&&n.length-S<=t)break;w+=M,S++}for(;S<n.length&&(w<T||S<x);){let A=n[S],M=l.get(A)||0;if(r.has(A)||this.cachedBytes-w-M<c&&S>=x)break;w+=M,S++}n.splice(0,S).forEach(A=>{this.cachedBytes-=l.get(A)||0,a.get(A)(A),l.delete(A),s.delete(A),a.delete(A),o.delete(A),r.delete(A)}),g=S<f||w<p&&S<u,g&&=S>0}g&&(this.unloadingHandle=Lc.requestAnimationFrame(()=>this.scheduleUnload()))}scheduleUnload(){Lc.cancelAnimationFrame(this.unloadingHandle),this.scheduled||(this.scheduled=!0,queueMicrotask(()=>{this.scheduled=!1,this.unloadUnusedContent()}))}},dE=class extends DOMException{constructor(){super("PriorityQueue: Item removed","AbortError")}},Jr=class{get running(){return this.items.length!==0||this.currJobs!==0}constructor(){this.maxJobs=6,this.items=[],this.callbacks=new Map,this.currJobs=0,this.scheduled=!1,this.autoUpdate=!0,this.priorityCallback=null,this._schedulingCallback=i=>{Lc.requestAnimationFrame(i)},this._runjobs=()=>{this.scheduled=!1,this.tryRunJobs()}}sort(){let i=this.priorityCallback,e=this.items;i!==null&&e.sort(i)}has(i){return this.callbacks.has(i)}add(i,e){let t={callback:e,reject:null,resolve:null,promise:null};return t.promise=new Promise((n,s)=>{let r=this.items,o=this.callbacks;t.resolve=n,t.reject=s,r.unshift(i),o.set(i,t),this.autoUpdate&&this.scheduleJobRun()}),t.promise}remove(i){let e=this.items,t=this.callbacks,n=e.indexOf(i);if(n!==-1){let s=t.get(i);s.promise.catch(r=>{if(r.name!=="AbortError")throw r}),s.reject(new dE),e.splice(n,1),t.delete(i)}}removeByFilter(i){let{items:e}=this;for(let t=0;t<e.length;t++){let n=e[t];i(n)&&(this.remove(n),t--)}}tryRunJobs(){this.sort();let i=this.items,e=this.callbacks,t=this.maxJobs,n=0,s=()=>{this.currJobs--,this.autoUpdate&&this.scheduleJobRun()};for(;t>this.currJobs&&i.length>0&&n<t;){this.currJobs++,n++;let r=i.pop(),{callback:o,resolve:a,reject:l}=e.get(r);e.delete(r);let c;try{c=o(r)}catch(h){l(h),s();continue}c instanceof Promise?c.then(a).catch(l).finally(s):(a(c),s())}}flush(i){let{items:e,callbacks:t}=this,n=e.indexOf(i);if(!t.has(i))return;let{callback:s,resolve:r,reject:o}=t.get(i);t.delete(i),e.splice(n,1);let a;try{a=s(i)}catch(l){o(l);return}return a instanceof Promise?a.then(r).catch(o):r(a),a}scheduleJobRun(){this.scheduled||=(this._schedulingCallback(this._runjobs),!0)}},fE=class{get running(){for(let i of this.originQueues.values())if(i.running)return!0;return!1}get maxJobsPerOrigin(){return this._maxJobsPerOrigin}set maxJobsPerOrigin(i){this._maxJobsPerOrigin=i,this.originQueues.forEach(e=>e.maxJobs=i)}get maxJobs(){return this.maxJobsPerOrigin}set maxJobs(i){console.warn('DownloadPriorityQueue: "maxJobs" is no longer valid and limits jobs per server origin. Use "maxJobsPerOrigin", instead.'),this.maxJobsPerOrigin=i}get priorityCallback(){return this._priorityCallback}set priorityCallback(i){this._priorityCallback=i,this.originQueues.forEach(e=>e.priorityCallback=i)}constructor(){this.originQueues=new Map,this._itemQueues=new WeakMap,this._maxJobsPerOrigin=6,this._priorityCallback=null}add(i,e,t,n=null){this.originQueues.forEach((l,c)=>{l.running||this.originQueues.delete(c)});let s=i===null?null:uE(i),r=this.originQueues.get(s);r||(r=new Jr,r.maxJobs=this._maxJobsPerOrigin,r.priorityCallback=this._priorityCallback,this.originQueues.set(s,r));let o=this._itemQueues.get(e);if(o&&o!==r&&o.has(e))throw Error("DownloadPriorityQueue: Item is already queued with a different url origin.");this._itemQueues.set(e,r);let a=r.add(e,t);return n!==null&&(n.aborted?this.remove(e):n.addEventListener("abort",()=>this.remove(e),{once:!0})),a}remove(i){let e=this._itemQueues.get(i);e&&(e.remove(i),this._itemQueues.delete(i))}has(i){let e=this._itemQueues.get(i);return!!(e&&e.has(i))}},Qr=6378137,ZC=1/298.257223563,U0=6356752314245179e-9,Ic={inView:!1,error:1/0,distanceFromCamera:1/0};L0=Symbol("PLUGIN_REGISTERED"),ps={inView:!0,error:0,distance:1/0},xE=(i,e)=>{let t=i.priority||0,n=e.priority||0;return t===n?!i.traversal||!e.traversal?0:i.traversal.used===e.traversal.used?i.traversal.error===e.traversal.error?i.traversal.distanceFromCamera===e.traversal.distanceFromCamera?i.internal.depthFromRenderedParent===e.internal.depthFromRenderedParent?0:i.internal.depthFromRenderedParent>e.internal.depthFromRenderedParent?-1:1:i.traversal.distanceFromCamera>e.traversal.distanceFromCamera?-1:1:i.traversal.error>e.traversal.error?1:-1:i.traversal.used?1:-1:t>n?1:-1},_E=(i,e)=>i.traversal.used===e.traversal.used?i.traversal.inFrustum===e.traversal.inFrustum?i.internal.hasUnrenderableContent===e.internal.hasUnrenderableContent?i.traversal.distanceFromCamera===e.traversal.distanceFromCamera?i.internal.depthFromRenderedParent===e.internal.depthFromRenderedParent?0:i.internal.depthFromRenderedParent>e.internal.depthFromRenderedParent?-1:1:i.traversal.distanceFromCamera>e.traversal.distanceFromCamera?-1:1:i.internal.hasUnrenderableContent?1:-1:i.traversal.inFrustum?1:-1:i.traversal.used?1:-1,vE=(i,e)=>i.traversal.lastFrameVisited===e.traversal.lastFrameVisited?i.internal.depthFromRenderedParent===e.internal.depthFromRenderedParent?i.internal.loadingState===e.internal.loadingState?i.internal.hasUnrenderableContent===e.internal.hasUnrenderableContent?i.traversal.error===e.traversal.error?0:i.traversal.error>e.traversal.error?-1:1:i.internal.hasUnrenderableContent?-1:1:i.internal.loadingState>e.internal.loadingState?-1:1:i.internal.depthFromRenderedParent>e.internal.depthFromRenderedParent?1:-1:i.traversal.lastFrameVisited>e.traversal.lastFrameVisited?-1:1,xa=(i,e)=>{let t=i.priority??1/0,n=e.priority??1/0;if(t!==n)return t>n?1:-1;if(!i.internal||!e.internal)return 0;let s=i.internal.renderer,r=e.internal.renderer,o=!s.loadAncestors,a=!r.loadAncestors;return o&&a?_E(i,e):xE(i,e)},V0=new D0;V0.unloadPriorityCallback=vE;Uc=new fE;Uc.maxJobsPerOrigin=25,Uc.priorityCallback=xa;Mf=new Jr;Mf.maxJobs=5,Mf.priorityCallback=xa;Sf=new Jr;Sf.maxJobs=25,Sf.priorityCallback=(i,e)=>{let t=i.parent,n=e.parent;return t===n?0:t?n?xa(t,n):-1:1};H0=class{get root(){let i=this.rootTileset;return i?i.root:null}get loadProgress(){let{stats:i,isLoading:e}=this,t=i.queued+i.downloading+i.parsing,n=i.inCacheSinceLoad+ +!!e;return n===0?1:1-t/n}get downloadQueue(){return this._downloadQueue}set downloadQueue(i){if(i instanceof Jr){console.warn('TilesRenderer: "downloadQueue" is no longer valid as a PriorityQueue. Use a DownloadPriorityQueue, instead.');return}this._downloadQueue=i}constructor(i=null){this.rootLoadingState=0,this.rootTileset=null,this.rootURL=i,this.fetchOptions={},this.plugins=[],this.queuedTiles=[],this.queuedTileSet=new Set,this.cachedSinceLoadComplete=new Set,this.isLoading=!1,this.processedTiles=new WeakSet,this.visibleTiles=new Set,this.activeTiles=new Set,this.usedSet=new Set,this.loadingTiles=new Set,this.lruCache=V0,this.downloadQueue=Uc,this.parseQueue=Mf,this.processNodeQueue=Sf,this.stats={inCacheSinceLoad:0,inCache:0,queued:0,downloading:0,parsing:0,loaded:0,failed:0,inFrustum:0,used:0,active:0,visible:0,refused:0,tilesProcessed:0},this.frameCount=0,this._dispatchNeedsUpdateEvent=gE(()=>{this.dispatchEvent({type:"needs-update"})}),this.errorTarget=16,this.errorFalloff=0,this.errorFalloffDensity=2e-4,this.displayActiveTiles=!1,this.maxDepth=1/0,this.loadSiblings=!0,this.loadAncestors=!0,this.maxTilesProcessed=250}registerPlugin(i){if(i[L0]===!0)throw Error("TilesRendererBase: A plugin can only be registered to a single tileset");let e=this.plugins,t=i.priority||0,n=e.length;for(let s=0;s<e.length;s++)if((e[s].priority||0)>t){n=s;break}e.splice(n,0,i),i[L0]=!0,i.init&&i.init(this)}unregisterPlugin(i){let e=this.plugins;if(typeof i=="string"&&(i=this.getPluginByName(i)),e.includes(i)){let t=e.indexOf(i);return e.splice(t,1),i.dispose&&i.dispose(),!0}return!1}getPluginByName(i){return this.plugins.find(e=>e.name===i)||null}invokeOnePlugin(i){let e=[...this.plugins,this];for(let t=0;t<e.length;t++){let n=i(e[t]);if(n)return n}return null}invokeAllPlugins(i){let e=[...this.plugins,this],t=[];for(let n=0;n<e.length;n++){let s=i(e[n]);s&&t.push(s)}return t.length===0?null:Promise.all(t)}traverse(i,e,t=!0){this.root&&yE(this.root,(n,...s)=>(t&&this.ensureChildrenArePreprocessed(n,!0),i?i(n,...s):!1),e)}getAttributions(i=[]){return this.invokeAllPlugins(e=>e!==this&&e.getAttributions&&e.getAttributions(i)),i}update(){let{lruCache:i,usedSet:e,stats:t,root:n,downloadQueue:s,parseQueue:r,processNodeQueue:o,queuedTiles:a,queuedTileSet:l}=this;if(this.rootLoadingState===0&&(this.rootLoadingState=2,this.invokeOnePlugin(d=>d.loadRootTileset&&d.loadRootTileset()).then(d=>{let f=this.rootURL;f!==null&&this.invokeAllPlugins(p=>f=p.preprocessURL?p.preprocessURL(f,null):f),this.rootLoadingState=4,this.rootTileset=d,this.dispatchEvent({type:"needs-update"}),this.dispatchEvent({type:"load-tileset",tileset:d,url:f}),this.dispatchEvent({type:"load-root-tileset",tileset:d,url:f})}).catch(d=>{this.rootLoadingState=-1,console.error(d),this.rootTileset=null,this.dispatchEvent({type:"load-error",tile:null,error:d,url:this.rootURL})})),!n)return;let c=null;if(this.invokeAllPlugins(d=>{if(d.doTilesNeedUpdate){let f=d.doTilesNeedUpdate();c=c===null?f:!!(c||f)}}),c===!1){this.dispatchEvent({type:"update-before"}),this.dispatchEvent({type:"update-after"});return}this.dispatchEvent({type:"update-before"}),t.inFrustum=0,t.used=0,t.active=0,t.visible=0,t.refused=0,t.tilesProcessed=0,this.frameCount++,e.forEach(d=>i.markUnused(d)),e.clear(),this.prepareForTraversal(),mE(n,this),this.removeUnusedPendingTiles(),a.sort(i.unloadPriorityCallback);let h=0,u=a.length;for(;h<u&&!i.isFull();h++)this.requestTileContents(a[h]);t.refused+=a.length-h,a.length=0,l.clear(),i.scheduleUnload(),(s.running||r.running||o.running)===!1&&this.isLoading===!0&&(this.cachedSinceLoadComplete.clear(),t.inCacheSinceLoad=0,this.dispatchEvent({type:"tiles-load-end"}),this.isLoading=!1),this.dispatchEvent({type:"update-after"})}resetFailedTiles(){this.rootLoadingState===-1&&(this.rootLoadingState=0);let i=this.stats;i.failed!==0&&(this.traverse(e=>{e.internal.loadingState===-1&&(e.internal.loadingState=0)},null,!1),i.failed=0)}calculateTileViewErrorWithPlugin(i,e){this.calculateTileViewError(i,e);let{errorFalloff:t,errorFalloffDensity:n}=this;if(t>0&&Number.isFinite(e.distanceFromCamera)){let a=e.distanceFromCamera*n;e.error-=t*(1-Math.exp(-a*a))}let s=null,r=0,o=1/0;this.invokeAllPlugins(a=>{a!==this&&a.calculateTileViewError&&(ps.inView=!0,ps.error=0,ps.distance=1/0,a.calculateTileViewError(i,ps)&&(s===null&&(s=!0),s&&=ps.inView,ps.inView&&(o=Math.min(o,ps.distance),r=Math.max(r,ps.error))))}),e.inView&&s!==!1?(e.error=Math.max(e.error,r),e.distanceFromCamera=Math.min(e.distanceFromCamera,o)):s?(e.inView=!0,e.error=r,e.distanceFromCamera=o):e.inView=!1}dispose(){[...this.plugins].forEach(t=>{this.unregisterPlugin(t)});let i=this.lruCache,e=[];this.traverse(t=>(e.push(t),!1),null,!1);for(let t=0,n=e.length;t<n;t++)i.remove(e[t]);this.stats={queued:0,parsing:0,downloading:0,failed:0,inFrustum:0,traversed:0,used:0,active:0,visible:0},this.frameCount=0,this.loadingTiles.clear()}calculateBytesUsed(i,e){return 0}dispatchEvent(i){}addEventListener(i,e){}removeEventListener(i,e){}parseTile(i,e,t){return null}prepareForTraversal(){}disposeTile(i){i.traversal.visible&&(i.internal.hasRenderableContent?this.invokeOnePlugin(t=>t.setTileVisible&&t.setTileVisible(i,!1)):this.invokeOnePlugin(t=>t.setEmptyTileVisible&&t.setEmptyTileVisible(i,!1)),i.traversal.visible=!1),i.traversal.active&&i.internal.hasRenderableContent&&this.invokeOnePlugin(t=>t.setTileActive&&t.setTileActive(i,!1)),i.traversal.active=!1;let{scene:e}=i.engineData;e&&this.dispatchEvent({type:"dispose-model",scene:e,tile:i})}preprocessNode(i,e,t=null){if(this.processedTiles.add(i),this.stats.tilesProcessed++,i.content&&(!("uri"in i.content)&&"url"in i.content&&(i.content.uri=i.content.url,delete i.content.url),i.content.boundingVolume&&!("box"in i.content.boundingVolume||"sphere"in i.content.boundingVolume||"region"in i.content.boundingVolume)&&delete i.content.boundingVolume),i.parent=t,i.children=i.children||[],i.internal={hasContent:!1,hasRenderableContent:!1,hasUnrenderableContent:!1,loadingState:0,basePath:e,depth:-1,depthFromRenderedParent:-1,isVirtual:!1,virtualChildCount:0,renderer:this,...i.internal},i.content?.uri){let n=R0(i.content.uri),s=!!(n&&/json$/.test(n));i.internal.hasContent=!0,i.internal.hasUnrenderableContent=s,i.internal.hasRenderableContent=!s}else i.internal.hasContent=!1,i.internal.hasUnrenderableContent=!1,i.internal.hasRenderableContent=!1;t?(i.internal.depth=t.internal.depth+1,i.internal.depthFromRenderedParent=t.internal.depthFromRenderedParent+ +!!i.internal.hasRenderableContent):(i.internal.depth=0,i.internal.depthFromRenderedParent=+!!i.internal.hasRenderableContent),i.traversal={distanceFromCamera:1/0,error:1/0,inFrustum:!1,wasInFrustum:!1,isLeaf:!1,used:!1,usedLastFrame:!1,visible:!1,wasSetVisible:!1,active:!1,wasSetActive:!1,allChildrenReady:!1,allChildrenLoaded:!1,kicked:!1,allUsedChildrenProcessed:!1,lastFrameVisited:-1},t===null?i.refine=i.refine||"REPLACE":i.refine=i.refine||t.refine,i.engineData={scene:null,metadata:null,boundingVolume:null},Object.defineProperty(i,"cached",{get(){return console.warn('TilesRenderer: "tile.cached" field has been renamed to "tile.engineData".'),this.engineData},enumerable:!1,configurable:!0}),this.invokeAllPlugins(n=>{n!==this&&n.preprocessNode&&n.preprocessNode(i,e,t)})}setTileActive(i,e){e?this.activeTiles.add(i):this.activeTiles.delete(i)}setTileVisible(i,e){e?this.visibleTiles.add(i):this.visibleTiles.delete(i),this.dispatchEvent({type:"tile-visibility-change",scene:i.engineData.scene,tile:i,visible:e})}calculateTileViewError(i,e){}removeUnusedPendingTiles(){let{lruCache:i,loadingTiles:e}=this,t=[];for(let n of e)!i.isUsed(n)&&n.internal.loadingState===1&&t.push(n);for(let n=0;n<t.length;n++)i.remove(t[n])}queueTileForDownload(i){let{queuedTileSet:e}=this;if(!(i.internal.loadingState!==0||e.has(i))){if(e.add(i),this.lruCache.isFull()){this.stats.refused++;return}this.queuedTiles.push(i)}}markTileUsed(i){this.usedSet.add(i),this.lruCache.markUsed(i)}fetchData(i,e){return fetch(i,e)}ensureChildrenArePreprocessed(i,e=this.stats.tilesProcessed<this.maxTilesProcessed){let t=i.children;if(t.length===0||t[t.length-1].traversal)return;let n=s=>{for(let r=0,o=s.length;r<o;r++){let a=s[r];a&&!a.traversal&&this.preprocessNode(a,i.internal.basePath,i)}};e?(this.processNodeQueue.remove(i),n(t)):this.processNodeQueue.has(i)||this.processNodeQueue.add(i,s=>{n(s.children),this._dispatchNeedsUpdateEvent()})}getBytesUsed(i){let e=0;return this.invokeAllPlugins(t=>{t.calculateBytesUsed&&(e+=t.calculateBytesUsed(i,i.engineData.scene)||0)}),e}recalculateBytesUsed(i=null){let{lruCache:e,processedTiles:t}=this;i===null?e.itemSet.forEach(n=>{t.has(n)&&e.setMemoryUsage(n,this.getBytesUsed(n))}):e.setMemoryUsage(i,this.getBytesUsed(i))}preprocessTileset(i,e,t=null){let[n,s]=i.asset.version.split(".").map(o=>parseInt(o));console.assert(n<=1,"TilesRenderer: asset.version is expected to be a 1.x or a compatible version."),n===1&&s>0&&console.warn("TilesRenderer: tiles versions at 1.1 or higher have limited support. Some new extensions and features may not be supported.");let r=e.replace(/\/[^/]*$/,"");r=new URL(r,window.location.href).toString(),this.preprocessNode(i.root,r,t)}loadRootTileset(){let i=this.rootURL;return this.invokeAllPlugins(e=>i=e.preprocessURL?e.preprocessURL(i,null):i),this.invokeOnePlugin(e=>e.fetchData&&e.fetchData(i,this.fetchOptions)).then(e=>{if(!(e instanceof Response))return e;if(e.ok)return e.json();throw Error(`TilesRenderer: Failed to load tileset "${i}" with status ${e.status} : ${e.statusText}`)}).then(e=>(this.preprocessTileset(e,i),e))}requestTileContents(i){if(i.internal.loadingState!==0)return;let e=!1,t=null,n=new URL(i.content.uri,i.internal.basePath+"/").toString();this.invokeAllPlugins(d=>n=d.preprocessURL?d.preprocessURL(n,i):n);let s=this.stats,r=this.lruCache,o=this.downloadQueue,a=this.parseQueue,l=this.loadingTiles,c=R0(n),h=new AbortController,u=h.signal;if(r.add(i,d=>{h.abort(),e?d.children.length=0:this.invokeAllPlugins(f=>{f.disposeTile&&f.disposeTile(d)}),s.inCache--,this.cachedSinceLoadComplete.has(i)&&(this.cachedSinceLoadComplete.delete(i),s.inCacheSinceLoad--),d.internal.loadingState===1?s.queued--:d.internal.loadingState===2?s.downloading--:d.internal.loadingState===3?s.parsing--:d.internal.loadingState===4&&s.loaded--,d.internal.loadingState=0,a.remove(d),o.remove(d),l.delete(d)}))return this.isLoading||(this.isLoading=!0,this.dispatchEvent({type:"tiles-load-start"})),r.setMemoryUsage(i,this.getBytesUsed(i)),this.cachedSinceLoadComplete.add(i),s.inCacheSinceLoad++,s.inCache++,s.queued++,i.internal.loadingState=1,l.add(i),o.add(n,i,d=>{if(u.aborted)return Promise.resolve();i.internal.loadingState=2,s.downloading++,s.queued--;let f=this.invokeOnePlugin(p=>p.fetchData&&p.fetchData(n,{...this.fetchOptions,signal:u}));return this.dispatchEvent({type:"tile-download-start",tile:i,url:n,get uri(){return console.warn('tile-download-start event: "uri" has been renamed to "url".'),this.url}}),f}).then(d=>{if(!u.aborted){if(!(d instanceof Response))return d;if(d.ok)return c==="json"?d.json():d.arrayBuffer();throw Error(`Failed to load model with error code ${d.status}`)}}).then(d=>{if(!u.aborted)return s.downloading--,s.parsing++,i.internal.loadingState=3,a.add(i,f=>u.aborted?Promise.resolve():c==="json"&&d.root?(this.preprocessTileset(d,n,i),i.children.push(d.root),t=d,e=!0,Promise.resolve()):this.invokeOnePlugin(p=>p.parseTile&&p.parseTile(d,f,c,n,u)))}).then(()=>{if(u.aborted)return;s.parsing--,s.loaded++,i.internal.loadingState=4,l.delete(i),r.setLoaded(i,!0);let d=this.getBytesUsed(i);if(r.getMemoryUsage(i)===0&&d>0&&r.isFull()){r.remove(i);return}r.setMemoryUsage(i,d),this.dispatchEvent({type:"needs-update"}),e&&this.dispatchEvent({type:"load-tileset",tileset:t,url:n}),i.engineData.scene&&this.dispatchEvent({type:"load-model",scene:i.engineData.scene,tile:i,url:n})}).catch(d=>{u.aborted||(d.name==="AbortError"?r.remove(i):(a.remove(i),o.remove(i),i.internal.loadingState===1?s.queued--:i.internal.loadingState===2?s.downloading--:i.internal.loadingState===3?s.parsing--:i.internal.loadingState===4&&s.loaded--,s.failed++,console.error(`TilesRenderer : Failed to load tile at url "${i.content.uri}".`),console.error(d),i.internal.loadingState=-1,l.delete(i),r.setLoaded(i,!0),this.dispatchEvent({type:"load-error",tile:i,error:d,url:n})))})}};bE=new TextDecoder;_a=class{constructor(){this.fetchOptions={},this.workingPath=""}loadAsync(i){return fetch(i,this.fetchOptions).then(e=>{if(!e.ok)throw Error(`Failed to load file "${i}" with status ${e.status} : ${e.statusText}`);return e.arrayBuffer()}).then(e=>(this.workingPath===""&&(this.workingPath=Fc(i)),this.parse(e)))}resolveExternalURL(i){return new URL(i,this.workingPath).href}parse(i){throw Error("LoaderBase: Parse not implemented.")}};Oc=class{constructor(i,e,t,n){this.buffer=i,this.binOffset=e+t,this.binLength=n;let s=null;if(t!==0){let r=new Uint8Array(i,e,t);s=JSON.parse(G0(r))}else s={};this.header=s}getKeys(){return Object.keys(this.header).filter(i=>i!=="extensions")}getData(i,e,t=null,n=null){let s=this.header;if(!(i in s))return null;let r=s[i];if(!(r instanceof Object)||Array.isArray(r))return r;{let{buffer:o,binOffset:a,binLength:l}=this,c=r.byteOffset||0,h=r.type||n,u=r.componentType||t;if("type"in r&&n&&r.type!==n)throw Error("FeatureTable: Specified type does not match expected type.");let d=a+c,f=W0(o,d,e,h,u,i);if(d+f.byteLength>a+l)throw Error("FeatureTable: Feature data read outside binary body length.");return f}}getBuffer(i,e){let{buffer:t,binOffset:n}=this;return t.slice(n+i,n+i+e)}},ME=class{constructor(i){this.batchTable=i;let e=i.header.extensions["3DTILES_batch_table_hierarchy"];this.classes=e.classes;for(let n of this.classes){let s=n.instances;for(let r in s)n.instances[r]=this._parseProperty(s[r],n.length,r)}if(this.instancesLength=e.instancesLength,this.classIds=this._parseProperty(e.classIds,this.instancesLength,"classIds"),e.parentCounts?this.parentCounts=this._parseProperty(e.parentCounts,this.instancesLength,"parentCounts"):this.parentCounts=Array(this.instancesLength).fill(1),e.parentIds){let n=this.parentCounts.reduce((s,r)=>s+r,0);this.parentIds=this._parseProperty(e.parentIds,n,"parentIds")}else this.parentIds=null;this.instancesIds=[];let t={};for(let n of this.classIds)t[n]=t[n]??0,this.instancesIds.push(t[n]),t[n]++}_parseProperty(i,e,t){if(Array.isArray(i))return i;{let{buffer:n,binOffset:s}=this.batchTable,r=i.byteOffset,o=i.componentType||"UNSIGNED_SHORT";return W0(n,s+r,e,"SCALAR",o,t)}}getDataFromId(i,e={}){let t=this.parentCounts[i];if(this.parentIds&&t>0){let a=0;for(let l=0;l<i;l++)a+=this.parentCounts[l];for(let l=0;l<t;l++){let c=this.parentIds[a+l];c!==i&&this.getDataFromId(c,e)}}let n=this.classIds[i],s=this.classes[n].instances,r=this.classes[n].name,o=this.instancesIds[i];for(let a in s)e[r]=e[r]||{},e[r][a]=s[a][o];return e}},Tf=class extends Oc{constructor(i,e,t,n,s){super(i,t,n,s),this.count=e,this.extensions={};let r=this.header.extensions;r&&r["3DTILES_batch_table_hierarchy"]&&(this.extensions["3DTILES_batch_table_hierarchy"]=new ME(this))}getDataFromId(i,e={}){if(i<0||i>=this.count)throw Error(`BatchTable: id value "${i}" out of bounds for "${this.count}" features number.`);for(let t of this.getKeys())e[t]=super.getData(t,this.count)[i];for(let t in this.extensions){let n=this.extensions[t];n.getDataFromId instanceof Function&&(e[t]=e[t]||{},n.getDataFromId(i,e[t]))}return e}getPropertyArray(i){return super.getData(i,this.count)}},X0=class extends _a{parse(i){let e=new DataView(i),t=Qs(e);console.assert(t==="b3dm");let n=e.getUint32(4,!0);console.assert(n===1);let s=e.getUint32(8,!0);console.assert(s===i.byteLength);let r=e.getUint32(12,!0),o=e.getUint32(16,!0),a=e.getUint32(20,!0),l=e.getUint32(24,!0),c=new Oc(i.slice(28,28+r+o),0,r,o),h=28+r+o,u=new Tf(i.slice(h,h+a+l),c.getData("BATCH_LENGTH"),0,a,l),d=h+a+l;return{version:n,featureTable:c,batchTable:u,glbBytes:new Uint8Array(i,d,s-d)}}},q0=class extends _a{parse(i){let e=new DataView(i),t=Qs(e);console.assert(t==="i3dm");let n=e.getUint32(4,!0);console.assert(n===1);let s=e.getUint32(8,!0);console.assert(s===i.byteLength);let r=e.getUint32(12,!0),o=e.getUint32(16,!0),a=e.getUint32(20,!0),l=e.getUint32(24,!0),c=e.getUint32(28,!0),h=new Oc(i.slice(32,32+r+o),0,r,o),u=32+r+o,d=new Tf(i.slice(u,u+a+l),h.getData("INSTANCES_LENGTH"),0,a,l),f=u+a+l,p=new Uint8Array(i,f,s-f),y=null,g=null,m=null;if(c)y=p,g=Promise.resolve();else{let v=this.resolveExternalURL(G0(p));m=Fc(v),g=fetch(v,this.fetchOptions).then(x=>{if(!x.ok)throw Error(`I3DMLoaderBase : Failed to load file "${v}" with status ${x.status} : ${x.statusText}`);return x.arrayBuffer()}).then(x=>{y=new Uint8Array(x)})}return g.then(()=>({version:n,featureTable:h,batchTable:d,glbBytes:y,gltfWorkingPath:m}))}},Y0=class extends _a{parse(i){let e=new DataView(i),t=Qs(e);console.assert(t==="pnts");let n=e.getUint32(4,!0);console.assert(n===1);let s=e.getUint32(8,!0);console.assert(s===i.byteLength);let r=e.getUint32(12,!0),o=e.getUint32(16,!0),a=e.getUint32(20,!0),l=e.getUint32(24,!0),c=new Oc(i.slice(28,28+r+o),0,r,o),h=28+r+o,u=new Tf(i.slice(h,h+a+l),c.getData("BATCH_LENGTH")||c.getData("POINTS_LENGTH"),0,a,l);return Promise.resolve({version:n,featureTable:c,batchTable:u})}},j0=class extends _a{parse(i){let e=new DataView(i),t=Qs(e);console.assert(t==="cmpt",'CMPTLoader: The magic bytes equal "cmpt".');let n=e.getUint32(4,!0);console.assert(n===1,'CMPTLoader: The version listed in the header is "1".');let s=e.getUint32(8,!0);console.assert(s===i.byteLength,"CMPTLoader: The contents buffer length listed in the header matches the file.");let r=e.getUint32(12,!0),o=[],a=16;for(let l=0;l<r;l++){let c=new DataView(i,a,12),h=Qs(c),u=c.getUint32(4,!0),d=c.getUint32(8,!0),f=new Uint8Array(i,a,d);o.push({type:h,buffer:f,version:u}),a+=d}return{version:n,tiles:o}}}});function Z0(i){let e=0;for(let n in i.attributes){let s=i.getAttribute(n);e+=s.count*s.itemSize*s.array.BYTES_PER_ELEMENT}let t=i.getIndex();return e+=t?t.count*t.itemSize*t.array.BYTES_PER_ELEMENT:0,e}function Ef(i,e){if(e===x0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===pa||e===Cc){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===pa)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Af=oe(()=>{pt()});function SE(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function EE(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Zs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Li})),i.DefaultMaterial}function er(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function On(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function AE(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function CE(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function RE(i){let e,t=i.extensions&&i.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Pf(t.attributes):e=i.indices+":"+Pf(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Pf(i.targets[n]);return e}function Pf(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function tp(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function PE(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}function LE(i,e,t){let n=e.attributes,s=new $e;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),a.normalized){let h=tp(eo[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new C,l=new C;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let y=tp(eo[d.componentType]);l.multiplyScalar(y)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new It;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Q0(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=ep[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Ye.workingColorSpace!==qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ye.workingColorSpace}" not supported.`),On(i,e),LE(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?AE(i,e.targets,t):i})}var gs,Ze,If,Lf,Df,Uf,Nf,Bf,Ff,Of,zf,kf,Vf,Hf,Gf,Wf,Xf,qf,Yf,jf,ey,va,$0,Zf,$f,Kf,Jf,zc,TE,Qf,Wi,eo,K0,J0,Cf,ep,ms,wE,Rf,IE,ip,np=oe(()=>{pt();Af();gs=class extends rn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Uf(t)}),this.register(function(t){return new Nf(t)}),this.register(function(t){return new Wf(t)}),this.register(function(t){return new Xf(t)}),this.register(function(t){return new qf(t)}),this.register(function(t){return new Ff(t)}),this.register(function(t){return new Of(t)}),this.register(function(t){return new zf(t)}),this.register(function(t){return new kf(t)}),this.register(function(t){return new Df(t)}),this.register(function(t){return new Vf(t)}),this.register(function(t){return new Bf(t)}),this.register(function(t){return new Gf(t)}),this.register(function(t){return new Hf(t)}),this.register(function(t){return new If(t)}),this.register(function(t){return new Yf(t)}),this.register(function(t){return new jf(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=fs.extractUrlBase(e);o=fs.resolveURL(c,this.path)}else o=fs.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new fn(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ey){try{o[Ze.KHR_BINARY_GLTF]=new Zf(e)}catch(u){s&&s(u);return}r=JSON.parse(o[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new ip(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ze.KHR_MATERIALS_UNLIT:o[u]=new Lf;break;case Ze.KHR_DRACO_MESH_COMPRESSION:o[u]=new $f(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:o[u]=new Kf;break;case Ze.KHR_MESH_QUANTIZATION:o[u]=new Jf;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},If=class{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new ve(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],qt);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Zr(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new _c(h),c.distance=u;break;case"spot":c=new xc(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,On(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Lf=class{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return Ct}extendParams(e,t,n){let s=[];e.color=new ve(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],qt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,At))}return Promise.all(s)}},Df=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Uf=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Q(a,a)}return Promise.all(r)}},Nf=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Bf=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Ff=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new ve(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],qt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,At)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Of=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},zf=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ve().setRGB(a[0],a[1],a[2],qt),Promise.all(r)}},kf=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Vf=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new ve().setRGB(a[0],a[1],a[2],qt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,At)),Promise.all(r)}},Hf=class{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Gf=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Wf=class{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Xf=class{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},qf=class{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Yf=class{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},jf=class{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Wi.TRIANGLES&&c.mode!==Wi.TRIANGLE_STRIP&&c.mode!==Wi.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let p of u){let y=new te,g=new C,m=new Kt,v=new C(1,1,1),x=new Wr(p.geometry,p.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,_),l.SCALE&&v.fromBufferAttribute(l.SCALE,_),x.setMatrixAt(_,y.compose(g,m,v));for(let _ in l)if(_==="_COLOR_0"){let T=l[_];x.instanceColor=new Ys(T.array,T.itemSize,T.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&p.geometry.setAttribute(_,l[_]);Lt.prototype.copy.call(x,p),this.parser.assignFinalMaterial(x),f.push(x)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},ey="glTF",va=12,$0={JSON:1313821514,BIN:5130562},Zf=class{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,va),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ey)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-va,r=new DataView(e,va),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===$0.JSON){let c=new Uint8Array(e,va+o,a);this.content=n.decode(c)}else if(l===$0.BIN){let c=va+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},$f=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=ep[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=ep[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=eo[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let p in f.attributes){let y=f.attributes[p],g=l[p];g!==void 0&&(y.normalized=g)}u(f)},a,c,qt,d)})})}},Kf=class{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Jf=class{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}},zc=class extends hs{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,p=e*c,y=p-c,g=-2*f+3*d,m=f-d,v=1-g,x=m-d+u;for(let _=0;_!==a;_++){let T=o[y+_+a],S=o[y+_+l]*h,w=o[p+_+a],A=o[p+_]*h;r[_]=v*T+x*S+g*w+m*A}return r}},TE=new Kt,Qf=class extends zc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return TE.fromArray(r).normalize().toArray(r),r}},Wi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},eo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},K0={9728:$t,9729:hi,9984:lf,9985:Xo,9986:Ar,9987:un},J0={33071:En,33648:Ko,10497:qs},Cf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ep={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ms={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},wE={CUBICSPLINE:void 0,LINEAR:zr,STEP:Or},Rf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};IE=new te,ip=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new SE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new gc(this.options.manager):this.textureLoader=new vc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new fn(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return er(r,a,s),On(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(fs.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Cf[s.type],a=eo[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new He(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Cf[s.type],c=eo[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,y,g;if(f&&f!==u){let m=Math.floor(d/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,x=t.cache.get(v);x||(y=new c(a,m*f,s.count*f/h),x=new ia(y,f/h),t.cache.add(v,x)),g=new na(x,l,d%f/h,p)}else a===null?y=new c(s.count*l):y=new c(a,d,s.count*l),g=new He(y,l,p);if(s.sparse!==void 0){let m=Cf.SCALAR,v=eo[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,T=new v(o[1],x,s.sparse.count*m),S=new c(o[2],_,s.sparse.count*l);a!==null&&(g=new He(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let w=0,A=T.length;w<A;w++){let M=T[w];if(g.setX(M,S[w*l]),l>=2&&g.setY(M,S[w*l+1]),l>=3&&g.setZ(M,S[w*l+2]),l>=4&&g.setW(M,S[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=K0[d.magFilter]||hi,h.minFilter=K0[d.minFilter]||un,h.wrapS=J0[d.wrapS]||qs,h.wrapT=J0[d.wrapT]||qs,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==$t&&h.minFilter!==hi,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(y){let g=new kt(y);g.needsUpdate=!0,d(g)}),t.load(fs.resolveURL(u,r.path),p,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),On(u,o),u.userData.mimeType=o.mimeType||PE(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Vi,Si.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Xr,Si.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Zs}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[Ze.KHR_MATERIALS_UNLIT]){let u=s[Ze.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new ve(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],qt),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,At)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Zt);let h=r.alphaMode||Rf.OPAQUE;if(h===Rf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Rf.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ct&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Q(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Ct&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ct){let u=r.emissiveFactor;a.emissive=new ve().setRGB(u[0],u[1],u[2],qt)}return r.emissiveTexture!==void 0&&o!==Ct&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,At)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),On(u,r),t.associations.set(u,{materials:e}),r.extensions&&er(s,u,r),u})}createUniqueName(e){let t=St.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Q0(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=RE(c),u=s[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Q0(new Qe,c,t),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?EE(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,p=h.length;f<p;f++){let y=h[f],g=o[f],m,v=c[f];if(g.mode===Wi.TRIANGLES||g.mode===Wi.TRIANGLE_STRIP||g.mode===Wi.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new ic(y,v):new Ve(y,v),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===Wi.TRIANGLE_STRIP?m.geometry=Ef(m.geometry,Cc):g.mode===Wi.TRIANGLE_FAN&&(m.geometry=Ef(m.geometry,pa));else if(g.mode===Wi.LINES)m=new cs(y,v);else if(g.mode===Wi.LINE_STRIP)m=new Dn(y,v);else if(g.mode===Wi.LINE_LOOP)m=new js(y,v);else if(g.mode===Wi.POINTS)m=new Ti(y,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&CE(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),On(m,r),g.extensions&&er(s,m,g),t.assignFinalMaterial(m),u.push(m)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&er(s,u[0],r),u[0];let d=new Xt;r.extensions&&er(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Bt($s.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ln(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),On(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let d=new te;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new nc(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],p=s.samplers[f.sampler],y=f.target,g=y.node,m=s.parameters!==void 0?s.parameters[p.input]:p.input,v=s.parameters!==void 0?s.parameters[p.output]:p.output;y.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",v)),c.push(p),h.push(y))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],p=u[2],y=u[3],g=u[4],m=[];for(let v=0,x=d.length;v<x;v++){let _=d[v],T=f[v],S=p[v],w=y[v],A=g[v];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let M=n._createAnimationTracks(_,T,S,w,A);if(M)for(let b=0;b<M.length;b++)m.push(M[b])}return new mc(r,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,IE)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new sa:c.length>1?h=new Xt:c.length===1?h=c[0]:h=new Lt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),On(h,r),r.extensions&&er(n,h,r),r.matrix!==void 0){let u=new te;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Xt;n.name&&(r.name=s.createUniqueName(n.name)),On(r,n),n.extensions&&er(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Si||d instanceof kt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];ms[r.path]===ms.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(ms[r.path]){case ms.weights:c=Un;break;case ms.rotation:c=Nn;break;case ms.position:case ms.scale:c=Bn;break;default:n.itemSize===1?c=Un:c=Bn;break}let h=s.interpolation!==void 0?wE[s.interpolation]:zr,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let p=new c(l[d]+"."+ms[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=tp(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Nn?Qf:zc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});function DE(i){let e=i>>11,t=i>>5&63,n=i&31;return[Math.round(e/31*255),Math.round(t/63*255),Math.round(n/31*255)]}function UE(i,e,t=new C){ba.set(i,e).divideScalar(256).multiplyScalar(2).subScalar(1),t.set(ba.x,ba.y,1-Math.abs(ba.x)-Math.abs(ba.y));let n=$s.clamp(-t.z,0,1);return t.x>=0?t.setX(t.x-n):t.setX(t.x+n),t.y>=0?t.setY(t.y-n):t.setY(t.y+n),t.normalize(),t}function NE(i){let{x:e,y:t,z:n}=i;i.x=n,i.y=e,i.z=t}function BE(i){return-i+Math.PI/2}function cy(i,e,t,n){if(i=i/t*2-1,e=e/t*2-1,n.x=i,n.y=e,n.z=1-Math.abs(i)-Math.abs(e),n.z<0){let s=n.x;n.x=(1-Math.abs(n.y))*(s>=0?1:-1),n.y=(1-Math.abs(s))*(n.y>=0?1:-1)}return n.normalize(),n}function VE(i,e,t,n){let{scene:s}=i.engineData;t.invokeOnePlugin(r=>r.raycastTile&&r.raycastTile(i,s,e,n))||e.intersectObject(s,!0,n)}function HE(i){return"traversal"in i}function yy(i,e,t,n,s=null){if(!HE(e))return;let{group:r,activeTiles:o}=i,{boundingVolume:a}=e.engineData;if(s===null&&(s=kE,s.copy(t.ray).applyMatrix4(r.matrixWorldInverse)),!e.traversal.used||!a.intersectsRay(s))return;o.has(e)&&VE(e,t,i,n);let l=e.children;for(let c=0,h=l.length;c<h;c++)yy(i,l[c],t,n,s)}function xs(i,e){e.radius=Math.max(e.radius,i.distanceToSquared(e.center))}function uy(i){return i.x!==i.y}function qE(i,e,t,n){let s=XE.set(i.normal.x,i.normal.y,i.normal.z,e.normal.x,e.normal.y,e.normal.z,t.normal.x,t.normal.y,t.normal.z);return n.set(-i.constant,-e.constant,-t.constant),n.applyMatrix3(s.invert()),n}function py(i,e,t,n){try{return yf.getByteLength(i,e,t,n)}catch{return dp}}function jE(i){if(!i)return 0;if(i.isExternalTexture)return i.userData?.byteLength??dp;let{format:e,type:t,image:n,mipmaps:s}=i;if(i.isCompressedTexture&&Array.isArray(s)&&s.length>0){let o=0;for(let a of s)a?.data?.byteLength?o+=a.data.byteLength:o+=py(a.width,a.height,e,t);return o}if(!n)return dp;let r=py(n.width,n.height,e,t);return r*=i.generateMipmaps?4/3:1,r}function ZE(i){let e=new Set,t=0;return i.traverse(n=>{if(n.geometry&&!e.has(n.geometry)&&(t+=Z0(n.geometry),e.add(n.geometry)),n.material){let s=n.material;for(let r in s){let o=s[r];o&&o.isTexture&&!e.has(o)&&(t+=jE(o),e.add(o))}}}),t}function my(i,e){i.traverse(t=>{t.frustumCulled=t[_y]&&e})}var fp,ba,ty,pp,iy,ys,ui,sp,Xi,pn,rp,Ei,ny,sy,ry,Ma,kc,FE,OE,mp,Aa,Vc,to,io,op,Hc,Gc,no,oy,ay,ly,ap,lp,gp,gy,Sa,zE,kE,Wc,Xc,Ai,qc,up,Ea,cp,Ta,tr,on,Ie,di,GE,hy,xy,zn,kn,Vn,dy,fy,WE,XE,YE,dp,_y,Yc,wa,hp,$E,KE,JE,yp,vy=oe(()=>{wf();pt();np();Af();fp=class extends X0{constructor(i=Ks){super(),this.manager=i,this.adjustmentTransform=new te}parse(i){let e=super.parse(i),t=e.glbBytes.slice().buffer;return new Promise((n,s)=>{let r=this.manager,o=this.fetchOptions,a=r.getHandler("path.gltf")||new gs(r);o.credentials==="include"&&o.mode==="cors"&&a.setCrossOrigin("use-credentials"),"credentials"in o&&a.setWithCredentials(o.credentials==="include"),o.headers&&a.setRequestHeader(o.headers);let l=this.workingPath;!/[\\/]$/.test(l)&&l.length&&(l+="/");let c=this.adjustmentTransform;a.parse(t,l,h=>{let{batchTable:u,featureTable:d}=e,{scene:f}=h,p=d.getData("RTC_CENTER",1,"FLOAT","VEC3");p&&(f.position.x+=p[0],f.position.y+=p[1],f.position.z+=p[2]),h.scene.updateMatrix(),h.scene.matrix.multiply(c),h.scene.matrix.decompose(h.scene.position,h.scene.quaternion,h.scene.scale),h.batchTable=u,h.featureTable=d,f.batchTable=u,f.featureTable=d,n(h)},s)})}};ba=new Q;ty={RGB:"color",POSITION:"position"},pp=class extends Y0{constructor(i=Ks){super(),this.manager=i}parse(i){return super.parse(i).then(async e=>{let{featureTable:t,batchTable:n}=e,s=new Vi,r=t.header.extensions,o=new C,a;if(r&&r["3DTILES_draco_point_compression"]){let{byteOffset:h,byteLength:u,properties:d}=r["3DTILES_draco_point_compression"],f=this.manager.getHandler("draco.drc");if(f==null)throw Error("PNTSLoader: dracoLoader not available.");let p={};for(let m in d)if(m in ty&&m in d){let v=ty[m];p[v]=d[m]}let y={attributeIDs:p,attributeTypes:{position:"Float32Array",color:"Uint8Array"},useUniqueIDs:!0},g=t.getBuffer(h,u);a=await f.decodeGeometry(g,y),a.attributes.color&&(s.vertexColors=!0)}else{let h=t.getData("POINTS_LENGTH"),u=t.getData("POSITION",h,"FLOAT","VEC3"),d=t.getData("NORMAL",h,"FLOAT","VEC3"),f=t.getData("NORMAL",h,"UNSIGNED_BYTE","VEC2"),p=t.getData("RGB",h,"UNSIGNED_BYTE","VEC3"),y=t.getData("RGBA",h,"UNSIGNED_BYTE","VEC4"),g=t.getData("RGB565",h,"UNSIGNED_SHORT","SCALAR"),m=t.getData("CONSTANT_RGBA",h,"UNSIGNED_BYTE","VEC4"),v=t.getData("POSITION_QUANTIZED",h,"UNSIGNED_SHORT","VEC3"),x=t.getData("QUANTIZED_VOLUME_SCALE",h,"FLOAT","VEC3"),_=t.getData("QUANTIZED_VOLUME_OFFSET",h,"FLOAT","VEC3");if(a=new Qe,v){let T=new Float32Array(h*3);for(let S=0;S<h;S++)for(let w=0;w<3;w++){let A=3*S+w;T[A]=v[A]/65535*x[w]}o.x=_[0],o.y=_[1],o.z=_[2],a.setAttribute("position",new He(T,3,!1))}else a.setAttribute("position",new He(u,3,!1));if(d!==null)a.setAttribute("normal",new He(d,3,!1));else if(f!==null){let T=new Float32Array(h*3),S=new C;for(let w=0;w<h;w++){let A=f[w*2],M=f[w*2+1],b=UE(A,M,S);T[w*3]=b.x,T[w*3+1]=b.y,T[w*3+2]=b.z}a.setAttribute("normal",new He(T,3,!1))}if(y!==null)a.setAttribute("color",new He(y,4,!0)),s.vertexColors=!0,s.transparent=!0,s.depthWrite=!1;else if(p!==null)a.setAttribute("color",new He(p,3,!0)),s.vertexColors=!0;else if(g!==null){let T=new Uint8Array(h*3);for(let S=0;S<h;S++){let w=DE(g[S]);for(let A=0;A<3;A++){let M=3*S+A;T[M]=w[A]}}a.setAttribute("color",new He(T,3,!0)),s.vertexColors=!0}else if(m!==null){s.color=new ve(m[0],m[1],m[2]);let T=m[3]/255;T<1&&(s.opacity=T,s.transparent=!0,s.depthWrite=!1)}}let l=new Ti(a,s);l.position.copy(o),e.scene=l,e.scene.featureTable=t,e.scene.batchTable=n;let c=t.getData("RTC_CENTER",1,"FLOAT","VEC3");return c&&(e.scene.position.x+=c[0],e.scene.position.y+=c[1],e.scene.position.z+=c[2]),e})}};iy=new bc,ys=new C,ui=new C,sp=new C,Xi=new te,pn=new te,rp=new It,Ei=new Di,ny=new C,sy=new C,ry=new C,Ma=new C,kc=new Mi,FE=1e-12,OE=.1,mp=class{constructor(i=1,e=1,t=1){this.isEllipsoid=!0,this.name="",this.radius=new C(i,e,t)}intersectRay(i,e){return Xi.makeScale(...this.radius).invert(),rp.center.set(0,0,0),rp.radius=1,kc.copy(i).applyMatrix4(Xi),kc.intersectSphere(rp,e)?(Xi.makeScale(...this.radius),e.applyMatrix4(Xi),e):null}getEastNorthUpFrame(i,e,t,n){return t.isMatrix4&&(n=t,t=0,console.warn('Ellipsoid: The signature for "getEastNorthUpFrame" has changed.')),this.getEastNorthUpAxes(i,e,ny,sy,ry),this.getCartographicToPosition(i,e,t,Ma),n.makeBasis(ny,sy,ry).setPosition(Ma)}getOrientedEastNorthUpFrame(i,e,t,n,s,r,o){return this.getObjectFrame(i,e,t,n,s,r,o,0)}getObjectFrame(i,e,t,n,s,r,o,a=2){return this.getEastNorthUpFrame(i,e,t,Xi),Ei.set(s,r,-n,"ZXY"),o.makeRotationFromEuler(Ei).premultiply(Xi),a===1?(Ei.set(Math.PI/2,0,0,"XYZ"),pn.makeRotationFromEuler(Ei),o.multiply(pn)):a===2&&(Ei.set(-Math.PI/2,0,Math.PI,"XYZ"),pn.makeRotationFromEuler(Ei),o.multiply(pn)),o}getCartographicFromObjectFrame(i,e,t=2){return t===1?(Ei.set(-Math.PI/2,0,0,"XYZ"),pn.makeRotationFromEuler(Ei).premultiply(i)):t===2?(Ei.set(-Math.PI/2,0,Math.PI,"XYZ"),pn.makeRotationFromEuler(Ei).premultiply(i)):pn.copy(i),Ma.setFromMatrixPosition(pn),this.getPositionToCartographic(Ma,e),this.getEastNorthUpFrame(e.lat,e.lon,0,Xi).invert(),pn.premultiply(Xi),Ei.setFromRotationMatrix(pn,"ZXY"),e.azimuth=-Ei.z,e.elevation=Ei.x,e.roll=Ei.y,e}getEastNorthUpAxes(i,e,t,n,s,r=Ma){this.getCartographicToPosition(i,e,0,r),this.getCartographicToNormal(i,e,s),t.set(-r.y,r.x,0).normalize(),n.crossVectors(s,t).normalize()}getCartographicToPosition(i,e,t,n){this.getCartographicToNormal(i,e,ys);let s=this.radius;ui.copy(ys),ui.x*=s.x**2,ui.y*=s.y**2,ui.z*=s.z**2;let r=Math.sqrt(ys.dot(ui));return ui.divideScalar(r),n.copy(ui).addScaledVector(ys,t)}getPositionToCartographic(i,e){this.getPositionToSurfacePoint(i,ui),this.getPositionToNormal(ui,ys);let t=sp.subVectors(i,ui);return e.lon=Math.atan2(ys.y,ys.x),e.lat=Math.asin(ys.z),e.height=Math.sign(t.dot(i))*t.length(),e}getCartographicToNormal(i,e,t){return iy.set(1,BE(i),e),t.setFromSpherical(iy).normalize(),NE(t),t}getPositionToNormal(i,e){let t=this.radius;return e.copy(i),e.x/=t.x**2,e.y/=t.y**2,e.z/=t.z**2,e.normalize(),e}getPositionToSurfacePoint(i,e){let t=this.radius,n=1/t.x**2,s=1/t.y**2,r=1/t.z**2,o=i.x*i.x*n,a=i.y*i.y*s,l=i.z*i.z*r,c=o+a+l,h=Math.sqrt(1/c),u=ui.copy(i).multiplyScalar(h);if(c<OE)return isFinite(h)?e.copy(u):null;let d=sp.set(u.x*n*2,u.y*s*2,u.z*r*2),f=(1-h)*i.length()/(.5*d.length()),p=0,y,g,m,v,x,_,T,S,w,A,M;do{f-=p,m=1/(1+f*n),v=1/(1+f*s),x=1/(1+f*r),_=m*m,T=v*v,S=x*x,w=_*m,A=T*v,M=S*x,y=o*_+a*T+l*S-1,g=o*w*n+a*A*s+l*M*r;let b=-2*g;p=y/b}while(Math.abs(y)>FE);return e.set(i.x*m,i.y*v,i.z*x)}calculateHorizonDistance(i,e){let t=this.calculateEffectiveRadius(i);return Math.sqrt(2*t*e+e**2)}calculateEffectiveRadius(i){let e=this.radius.x,t=1-this.radius.z**2/e**2,n=i*$s.DEG2RAD,s=Math.sin(n)**2;return e/Math.sqrt(1-t*s)}getPositionElevation(i){this.getPositionToSurfacePoint(i,ui);let e=sp.subVectors(i,ui);return Math.sign(e.dot(i))*e.length()}closestPointToRayEstimate(i,e){return this.intersectRay(i,e)?e:(Xi.makeScale(...this.radius).invert(),kc.copy(i).applyMatrix4(Xi),ui.set(0,0,0),kc.closestPointToPoint(ui,e).normalize(),Xi.makeScale(...this.radius),e.applyMatrix4(Xi))}copy(i){return this.radius.copy(i.radius),this}clone(){return new this.constructor().copy(this)}},Aa=new mp(Qr,Qr,U0);Aa.name="WGS84 Earth";Vc=new C,to=new C,io=new C,op=new C,Hc=new Kt,Gc=new C,no=new te,oy=new te,ay=new C,ly=new te,ap=new Kt,lp={};gp=class extends q0{constructor(i=Ks){super(),this.manager=i,this.adjustmentTransform=new te,this.ellipsoid=Aa.clone()}resolveExternalURL(i){return this.manager.resolveURL(super.resolveExternalURL(i))}parse(i){return super.parse(i).then(e=>{let{featureTable:t,batchTable:n}=e,s=e.glbBytes.slice().buffer;return new Promise((r,o)=>{let a=this.fetchOptions,l=this.manager,c=l.getHandler("path.gltf")||new gs(l);a.credentials==="include"&&a.mode==="cors"&&c.setCrossOrigin("use-credentials"),"credentials"in a&&c.setWithCredentials(a.credentials==="include"),a.headers&&c.setRequestHeader(a.headers);let h=e.gltfWorkingPath??this.workingPath;/[\\/]$/.test(h)||(h+="/");let u=this.adjustmentTransform;c.parse(s,h,d=>{let f=t.getData("INSTANCES_LENGTH"),p=t.getData("POSITION",f,"FLOAT","VEC3"),y=t.getData("POSITION_QUANTIZED",f,"UNSIGNED_SHORT","VEC3"),g=t.getData("QUANTIZED_VOLUME_OFFSET",1,"FLOAT","VEC3"),m=t.getData("QUANTIZED_VOLUME_SCALE",1,"FLOAT","VEC3"),v=t.getData("NORMAL_UP",f,"FLOAT","VEC3"),x=t.getData("NORMAL_RIGHT",f,"FLOAT","VEC3"),_=t.getData("NORMAL_UP_OCT32P",f,"UNSIGNED_SHORT","VEC2"),T=t.getData("NORMAL_RIGHT_OCT32P",f,"UNSIGNED_SHORT","VEC2"),S=t.getData("SCALE_NON_UNIFORM",f,"FLOAT","VEC3"),w=t.getData("SCALE",f,"FLOAT","SCALAR"),A=t.getData("RTC_CENTER",1,"FLOAT","VEC3"),M=t.getData("EAST_NORTH_UP");if(!p&&y){p=new Float32Array(f*3);for(let L=0;L<f;L++)p[L*3+0]=g[0]+y[L*3+0]/65535*m[0],p[L*3+1]=g[1]+y[L*3+1]/65535*m[1],p[L*3+2]=g[2]+y[L*3+2]/65535*m[2]}let b=new C;for(let L=0;L<f;L++)b.x+=p[L*3+0]/f,b.y+=p[L*3+1]/f,b.z+=p[L*3+2]/f;let I=[],U=[];d.scene.updateMatrixWorld(),d.scene.traverse(L=>{if(L.isMesh){U.push(L);let{geometry:N,material:H}=L,k=new Wr(N,H,f);k.position.copy(b),A&&(k.position.x+=A[0],k.position.y+=A[1],k.position.z+=A[2]),I.push(k)}});for(let L=0;L<f;L++){op.set(p[L*3+0]-b.x,p[L*3+1]-b.y,p[L*3+2]-b.z),Hc.identity(),v&&x?(to.set(v[L*3+0],v[L*3+1],v[L*3+2]),io.set(x[L*3+0],x[L*3+1],x[L*3+2]),Vc.crossVectors(io,to).normalize(),no.makeBasis(io,to,Vc),Hc.setFromRotationMatrix(no)):_&&T&&(cy(_[L*2+0],_[L*2+1],65535,to),cy(T[L*2+0],T[L*2+1],65535,io),Vc.crossVectors(io,to).normalize(),no.makeBasis(io,to,Vc),Hc.setFromRotationMatrix(no)),Gc.set(1,1,1),S&&Gc.set(S[L*3+0],S[L*3+1],S[L*3+2]),w&&Gc.multiplyScalar(w[L]);for(let N=0,H=I.length;N<H;N++){let k=I[N];ap.copy(Hc),M&&(k.updateMatrixWorld(),ay.copy(op).applyMatrix4(k.matrixWorld),this.ellipsoid.getPositionToCartographic(ay,lp),this.ellipsoid.getEastNorthUpFrame(lp.lat,lp.lon,ly),ap.setFromRotationMatrix(ly)),no.compose(op,ap,Gc).multiply(u);let ee=U[N];oy.multiplyMatrices(no,ee.matrixWorld),k.setMatrixAt(L,oy)}}d.scene.clear(),d.scene.add(...I),d.batchTable=n,d.featureTable=t,d.scene.batchTable=n,d.scene.featureTable=t,r(d)},o)})})}},gy=class extends j0{constructor(i=Ks){super(),this.manager=i,this.adjustmentTransform=new te,this.ellipsoid=Aa.clone()}parse(i){let e=super.parse(i),{manager:t,ellipsoid:n,adjustmentTransform:s}=this,r=[];for(let o in e.tiles){let{type:a,buffer:l}=e.tiles[o];switch(a){case"b3dm":{let c=l.slice(),h=new fp(t);h.workingPath=this.workingPath,h.fetchOptions=this.fetchOptions,h.adjustmentTransform.copy(s);let u=h.parse(c.buffer);r.push(u);break}case"pnts":{let c=l.slice(),h=new pp(t);h.workingPath=this.workingPath,h.fetchOptions=this.fetchOptions;let u=h.parse(c.buffer);r.push(u);break}case"i3dm":{let c=l.slice(),h=new gp(t);h.workingPath=this.workingPath,h.fetchOptions=this.fetchOptions,h.ellipsoid.copy(n),h.adjustmentTransform.copy(s);let u=h.parse(c.buffer);r.push(u);break}}}return Promise.all(r).then(o=>{let a=new Xt;return o.forEach(l=>{a.add(l.scene)}),{tiles:o,scene:a}})}},Sa=new te,zE=class extends Xt{constructor(i){super(),this.isTilesGroup=!0,this.name="TilesRenderer.TilesGroup",this.tilesRenderer=i,this.matrixWorldInverse=new te}raycast(i,e){return this.tilesRenderer.raycast(i,e),!1}updateMatrixWorld(i){if(this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldNeedsUpdate||i){this.parent===null?Sa.copy(this.matrix):Sa.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1;let e=Sa.elements,t=this.matrixWorld.elements,n=!1;for(let s=0;s<16;s++){let r=e[s],o=t[s];if(Math.abs(r-o)>2**-52){n=!0;break}}if(n){this.matrixWorld.copy(Sa),this.matrixWorldInverse.copy(Sa).invert();let s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].updateMatrixWorld();let{tilesRenderer:r}=this,{activeTiles:o,visibleTiles:a}=r;o.forEach(l=>{a.has(l)||l.engineData.scene.updateMatrixWorld(!0)})}}}updateWorldMatrix(i,e){this.parent&&i&&this.parent.updateWorldMatrix(i,!1),this.updateMatrixWorld(!0)}},kE=new Mi;Wc=new C,Xc=new C,Ai=new C,qc=new Mi,up=class{constructor(i=new $e,e=new te){this.box=i.clone(),this.transform=e.clone(),this.inverseTransform=new te,this.points=Array(8).fill().map(()=>new C),this.planes=[,,,,,,].fill().map(()=>new ci)}copy(i){return this.box.copy(i.box),this.transform.copy(i.transform),this.update(),this}clone(){return new this.constructor().copy(this)}clampPoint(i,e){return e.copy(i).applyMatrix4(this.inverseTransform).clamp(this.box.min,this.box.max).applyMatrix4(this.transform)}distanceToPoint(i){return this.clampPoint(i,Ai).distanceTo(i)}containsPoint(i){return Ai.copy(i).applyMatrix4(this.inverseTransform),this.box.containsPoint(Ai)}intersectsRay(i){return qc.copy(i).applyMatrix4(this.inverseTransform),qc.intersectsBox(this.box)}intersectRay(i,e){return qc.copy(i).applyMatrix4(this.inverseTransform),qc.intersectBox(this.box,e)?(e.applyMatrix4(this.transform),e):null}update(){let{points:i,inverseTransform:e,transform:t,box:n}=this;e.copy(t).invert();let{min:s,max:r}=n,o=0;for(let a=-1;a<=1;a+=2)for(let l=-1;l<=1;l+=2)for(let c=-1;c<=1;c+=2)i[o].set(a<0?s.x:r.x,l<0?s.y:r.y,c<0?s.z:r.z).applyMatrix4(t),o++;this.updatePlanes()}updatePlanes(){Wc.copy(this.box.min).applyMatrix4(this.transform),Xc.copy(this.box.max).applyMatrix4(this.transform),Ai.set(0,0,1).transformDirection(this.transform),this.planes[0].setFromNormalAndCoplanarPoint(Ai,Wc),this.planes[1].setFromNormalAndCoplanarPoint(Ai,Xc).negate(),Ai.set(0,1,0).transformDirection(this.transform),this.planes[2].setFromNormalAndCoplanarPoint(Ai,Wc),this.planes[3].setFromNormalAndCoplanarPoint(Ai,Xc).negate(),Ai.set(1,0,0).transformDirection(this.transform),this.planes[4].setFromNormalAndCoplanarPoint(Ai,Wc),this.planes[5].setFromNormalAndCoplanarPoint(Ai,Xc).negate()}intersectsSphere(i){return this.clampPoint(i.center,Ai),Ai.distanceToSquared(i.center)<=i.radius*i.radius}intersectsFrustum(i){return this._intersectsPlaneShape(i.planes,i.points)}intersectsOBB(i){return this._intersectsPlaneShape(i.planes,i.points)}_intersectsPlaneShape(i,e){let t=this.points,n=this.planes;for(let s=0;s<6;s++){let r=i[s],o=-1/0;for(let a=0;a<8;a++){let l=t[a],c=r.distanceToPoint(l);o=o<c?c:o}if(o<0)return!1}for(let s=0;s<6;s++){let r=n[s],o=-1/0;for(let a=0;a<8;a++){let l=e[a],c=r.distanceToPoint(l);o=o<c?c:o}if(o<0)return!1}return!0}},Ea=Math.PI,cp=Ea/2,Ta=new C,tr=new C,on=new C,Ie=new C,di=new te,GE=new $e,hy=new te;xy=class extends mp{constructor(i=1,e=1,t=1,n=-cp,s=cp,r=0,o=2*Ea,a=0,l=0){super(i,e,t),this.latStart=n,this.latEnd=s,this.lonStart=r,this.lonEnd=o,this.heightStart=a,this.heightEnd=l}getBoundingBox(i,e){uy(this.radius)&&console.warn("EllipsoidRegion: Triaxial ellipsoids are not supported.");let{latStart:t,latEnd:n,lonStart:s,lonEnd:r,heightStart:o,heightEnd:a}=this,l=(t+n)*.5,c=(s+r)*.5,h=t>0,u=n<0,d;d=h?t:u?n:0;let{min:f,max:p}=i;f.setScalar(1/0),p.setScalar(-1/0),r-s<=Ea?(this.getCartographicToNormal(l,c,on),tr.set(0,0,1),Ta.crossVectors(tr,on).normalize(),tr.crossVectors(on,Ta).normalize(),e.makeBasis(Ta,tr,on),di.copy(e).invert(),this.getCartographicToPosition(d,s,a,Ie).applyMatrix4(di),p.x=Math.abs(Ie.x),f.x=-p.x,this.getCartographicToPosition(n,s,a,Ie).applyMatrix4(di),p.y=Ie.y,this.getCartographicToPosition(n,c,a,Ie).applyMatrix4(di),p.y=Math.max(Ie.y,p.y),this.getCartographicToPosition(t,s,a,Ie).applyMatrix4(di),f.y=Ie.y,this.getCartographicToPosition(t,c,a,Ie).applyMatrix4(di),f.y=Math.min(Ie.y,f.y),this.getCartographicToPosition(l,c,a,Ie).applyMatrix4(di),p.z=Ie.z,this.getCartographicToPosition(t,s,o,Ie).applyMatrix4(di),f.z=Ie.z,this.getCartographicToPosition(n,s,o,Ie).applyMatrix4(di),f.z=Math.min(Ie.z,f.z)):(this.getCartographicToPosition(d,c,a,on),on.z=0,on.length()<1e-10?on.set(1,0,0):on.normalize(),tr.set(0,0,1),Ta.crossVectors(on,tr).normalize(),e.makeBasis(Ta,tr,on),di.copy(e).invert(),this.getCartographicToPosition(d,c+cp,a,Ie).applyMatrix4(di),p.x=Math.abs(Ie.x),f.x=-p.x,this.getCartographicToPosition(n,0,u?o:a,Ie).applyMatrix4(di),p.y=Ie.y,this.getCartographicToPosition(t,0,h?o:a,Ie).applyMatrix4(di),f.y=Ie.y,this.getCartographicToPosition(d,c,a,Ie).applyMatrix4(di),p.z=Ie.z,this.getCartographicToPosition(d,r,a,Ie).applyMatrix4(di),f.z=Ie.z),i.getCenter(Ie),i.min.sub(Ie).multiplyScalar(1.0000000000001),i.max.sub(Ie).multiplyScalar(1.0000000000001),Ie.applyMatrix4(e),e.setPosition(Ie)}getBoundingSphere(i){uy(this.radius)&&console.warn("EllipsoidRegion: Triaxial ellipsoids are not supported."),this.getBoundingBox(GE,hy),i.center.setFromMatrixPosition(hy),i.radius=0;let{latStart:e,latEnd:t,lonStart:n,lonEnd:s,heightStart:r,heightEnd:o}=this,a=(e+t)*.5,l=(n+s)*.5,c=e>0,h=t<0,u;u=c?e:h?t:0,this.getCartographicToPosition(u,n,o,Ie),xs(Ie,i),this.getCartographicToPosition(t,n,o,Ie),xs(Ie,i),this.getCartographicToPosition(t,l,o,Ie),xs(Ie,i),this.getCartographicToPosition(e,n,o,Ie),xs(Ie,i),this.getCartographicToPosition(e,l,o,Ie),xs(Ie,i),this.getCartographicToPosition(a,l,o,Ie),xs(Ie,i),this.getCartographicToPosition(e,n,r,Ie),xs(Ie,i),s-n>Ea&&(this.getCartographicToPosition(u,l+Ea,o,Ie),xs(Ie,i)),i.radius=Math.sqrt(i.radius)*1.0000000000001}},zn=new C,kn=new C,Vn=new C,dy=new C,fy=new C,WE=class{constructor(){this.sphere=null,this.obb=null,this.region=null,this.regionObb=null}intersectsRay(i){let e=this.sphere,t=this.obb||this.regionObb;return!(e&&!i.intersectsSphere(e)||t&&!t.intersectsRay(i))}intersectRay(i,e=null){let t=this.sphere,n=this.obb||this.regionObb,s=-1/0,r=-1/0;t&&i.intersectSphere(t,dy)&&(s=t.containsPoint(i.origin)?0:i.origin.distanceToSquared(dy)),n&&n.intersectRay(i,fy)&&(r=n.containsPoint(i.origin)?0:i.origin.distanceToSquared(fy));let o=Math.max(s,r);return o===-1/0?null:(i.at(Math.sqrt(o),e),e)}distanceToPoint(i){let e=this.sphere,t=this.obb||this.regionObb,n=-1/0,s=-1/0;return e&&(n=Math.max(e.distanceToPoint(i),0)),t&&(s=t.distanceToPoint(i)),n>s?n:s}intersectsFrustum(i){let e=this.obb||this.regionObb,t=this.sphere;return t&&!i.intersectsSphere(t)||e&&!e.intersectsFrustum(i)?!1:!!(t||e)}intersectsSphere(i){let e=this.obb||this.regionObb,t=this.sphere;return t&&!t.intersectsSphere(i)||e&&!e.intersectsSphere(i)?!1:!!(t||e)}intersectsOBB(i){let e=this.obb||this.regionObb,t=this.sphere;return t&&!i.intersectsSphere(t)||e&&!e.intersectsOBB(i)?!1:!!(t||e)}getOBB(i,e){let t=this.obb||this.regionObb;t?(i.copy(t.box),e.copy(t.transform)):(this.getAABB(i),e.identity())}getAABB(i){if(this.sphere)this.sphere.getBoundingBox(i);else{let e=this.obb||this.regionObb;i.copy(e.box).applyMatrix4(e.transform)}}getSphere(i){if(this.sphere)i.copy(this.sphere);else if(this.region)this.region.getBoundingSphere(i);else{let e=this.obb||this.regionObb;e.box.getBoundingSphere(i),i.applyMatrix4(e.transform)}}setObbData(i,e){let t=new up;zn.set(i[3],i[4],i[5]),kn.set(i[6],i[7],i[8]),Vn.set(i[9],i[10],i[11]);let n=zn.length(),s=kn.length(),r=Vn.length();zn.normalize(),kn.normalize(),Vn.normalize(),n===0&&zn.crossVectors(kn,Vn),s===0&&kn.crossVectors(zn,Vn),r===0&&Vn.crossVectors(zn,kn),t.transform.set(zn.x,kn.x,Vn.x,i[0],zn.y,kn.y,Vn.y,i[1],zn.z,kn.z,Vn.z,i[2],0,0,0,1).premultiply(e),t.box.min.set(-n,-s,-r),t.box.max.set(n,s,r),t.update(),this.obb=t}setSphereData(i,e,t,n,s){let r=new It;r.center.set(i,e,t),r.radius=n,r.applyMatrix4(s),this.sphere=r}setRegionData(i,e,t,n,s,r,o){let a=new xy(...i.radius,t,s,e,n,r,o),l=new up;a.getBoundingBox(l.box,l.transform),l.update(),this.region=a,this.regionObb=l}},XE=new Ue;YE=class extends In{constructor(){super(),this.points=Array(8).fill().map(()=>new C)}setFromProjectionMatrix(...i){return super.setFromProjectionMatrix(...i),this.calculateFrustumPoints(),this}calculateFrustumPoints(){let{planes:i,points:e}=this;[[i[0],i[3],i[4]],[i[1],i[3],i[4]],[i[0],i[2],i[4]],[i[1],i[2],i[4]],[i[0],i[3],i[5]],[i[1],i[3],i[5]],[i[0],i[2],i[5]],[i[1],i[2],i[5]]].forEach((t,n)=>{qE(t[0],t[1],t[2],e[n])})}},dp=0;_y=Symbol("INITIAL_FRUSTUM_CULLED"),Yc=new te,wa=new C,hp=new Q,$E=new C(1,0,0),KE=new C(0,1,0),JE=()=>null;yp=class extends H0{get autoDisableRendererCulling(){return this._autoDisableRendererCulling}set autoDisableRendererCulling(i){this._autoDisableRendererCulling!==i&&(super._autoDisableRendererCulling=i,this.forEachLoadedModel(e=>{my(e,!i)}))}constructor(...i){super(...i),this.accelerateRaycast=!0,this.group=new zE(this),this.ellipsoid=Aa.clone(),this.surface=this.ellipsoid,this.cameras=[],this.cameraMap=new Map,this.cameraInfo=[],this._upRotationMatrix=new te,this._bytesUsed=new WeakMap,this._autoDisableRendererCulling=!0,this.manager=new ua,this._listeners={}}addEventListener(i,e){bi.prototype.addEventListener.call(this,i,e)}hasEventListener(i,e){return bi.prototype.hasEventListener.call(this,i,e)}removeEventListener(i,e){bi.prototype.removeEventListener.call(this,i,e)}dispatchEvent(i){bi.prototype.dispatchEvent.call(this,i)}getBoundingBox(i){if(!this.root)return!1;let e=this.root.engineData.boundingVolume;return e?(e.getAABB(i),!0):!1}getOrientedBoundingBox(i,e){if(!this.root)return!1;let t=this.root.engineData.boundingVolume;return t?(t.getOBB(i,e),!0):!1}getBoundingSphere(i){if(!this.root)return!1;let e=this.root.engineData.boundingVolume;return e?(e.getSphere(i),!0):!1}forEachLoadedModel(i){this.traverse(e=>{let t=e.engineData&&e.engineData.scene;t&&i(t,e)},null,!1)}raycast(i,e){if(this.root)if(this.accelerateRaycast)yy(this,this.root,i,e);else{let t=i.firstHitOnly?[]:e;for(let n of this.activeTiles){let{scene:s}=n.engineData;this.invokeOnePlugin(r=>r.raycastTile&&r.raycastTile(n,s,i,t))||i.intersectObject(s,!0,t)}i.firstHitOnly&&t.length>0&&(t.sort((n,s)=>n.distance-s.distance),e.push(t[0]))}}hasCamera(i){return this.cameraMap.has(i)}setCamera(i){let e=this.cameras,t=this.cameraMap;return t.has(i)?!1:(t.set(i,new Q),e.push(i),this.dispatchEvent({type:"add-camera",camera:i}),!0)}setResolution(i,e,t){let n=this.cameraMap;if(!n.has(i))return!1;let s=e.isVector2?e.x:e,r=e.isVector2?e.y:t,o=n.get(i);return(o.width!==s||o.height!==r)&&(o.set(s,r),this.dispatchEvent({type:"camera-resolution-change"})),!0}getResolution(i,e){let t=this.cameraMap.get(i);return t?e.copy(t):null}setResolutionFromRenderer(i,e){return e.getSize(hp),this.setResolution(i,hp.x,hp.y)}deleteCamera(i){let e=this.cameras,t=this.cameraMap;if(t.has(i)){let n=e.indexOf(i);return e.splice(n,1),t.delete(i),this.dispatchEvent({type:"delete-camera",camera:i}),!0}return!1}loadRootTileset(...i){return super.loadRootTileset(...i).then(e=>{let{asset:t,extensions:n={}}=e;switch((t&&t.gltfUpAxis||"y").toLowerCase()){case"x":this._upRotationMatrix.makeRotationAxis(KE,-Math.PI/2);break;case"y":this._upRotationMatrix.makeRotationAxis($E,Math.PI/2);break}if("3DTILES_ellipsoid"in n){let s=n["3DTILES_ellipsoid"],{ellipsoid:r}=this;r.name=s.body,s.radii?r.radius.set(...s.radii):r.radius.set(1,1,1)}return e})}prepareForTraversal(){let i=this.group,e=this.cameras,t=this.cameraMap,n=this.cameraInfo;for(;n.length>e.length;)n.pop();for(;n.length<e.length;)n.push({frustum:new YE,isOrthographic:!1,sseDenominator:-1,position:new C,invScale:-1,pixelSize:0});wa.setFromMatrixScale(i.matrixWorldInverse),Math.abs(Math.max(wa.x-wa.y,wa.x-wa.z))>1e-6&&console.warn("ThreeTilesRenderer : Non uniform scale used for tile which may cause issues when calculating screen space error.");for(let s=0,r=n.length;s<r;s++){let o=e[s],a=n[s],l=a.frustum,c=a.position,h=t.get(o);(h.width===0||h.height===0)&&console.warn("TilesRenderer: resolution for camera error calculation is not set.");let u=o.projectionMatrix.elements;if(a.isOrthographic=u[15]===1,a.isOrthographic){let d=2/u[0],f=2/u[5];a.pixelSize=Math.max(f/h.height,d/h.width)}else a.sseDenominator=2/u[5]/h.height;Yc.copy(i.matrixWorld),Yc.premultiply(o.matrixWorldInverse),Yc.premultiply(o.projectionMatrix),l.setFromProjectionMatrix(Yc,o.coordinateSystem,o.reversedDepth),c.set(0,0,0),c.applyMatrix4(o.matrixWorld),c.applyMatrix4(i.matrixWorldInverse)}}update(){if(super.update(),this.cameras.length===0&&this.root){let i=!1;this.invokeAllPlugins(e=>i||=!!(e!==this&&e.calculateTileViewError)),i===!1&&console.warn("TilesRenderer: no cameras defined. Cannot update 3d tiles.")}}preprocessNode(i,e,t=null){super.preprocessNode(i,e,t);let n=new te;if(i.transform){let o=i.transform;for(let a=0;a<16;a++)n.elements[a]=o[a]}t&&n.premultiply(t.engineData.transform);let s=new te().copy(n).invert(),r=new WE;"sphere"in i.boundingVolume&&r.setSphereData(...i.boundingVolume.sphere,n),"box"in i.boundingVolume&&r.setObbData(i.boundingVolume.box,n),"region"in i.boundingVolume&&r.setRegionData(this.ellipsoid,...i.boundingVolume.region),i.engineData.transform=n,i.engineData.transformInverse=s,i.engineData.boundingVolume=r,i.engineData.geometry=null,i.engineData.materials=null,i.engineData.textures=null,i.toJSON=JE}async parseTile(i,e,t,n,s){let r=e.engineData,o=Fc(n),a=this.fetchOptions,l=this.manager,c=null,h=r.transform,u=this._upRotationMatrix,d=(Qs(i)||t).toLowerCase();switch(d){case"b3dm":{let x=new fp(l);x.workingPath=o,x.fetchOptions=a,x.adjustmentTransform.copy(u),c=x.parse(i);break}case"pnts":{let x=new pp(l);x.workingPath=o,x.fetchOptions=a,c=x.parse(i);break}case"i3dm":{let x=new gp(l);x.workingPath=o,x.fetchOptions=a,x.adjustmentTransform.copy(u),x.ellipsoid.copy(this.ellipsoid),c=x.parse(i);break}case"cmpt":{let x=new gy(l);x.workingPath=o,x.fetchOptions=a,x.adjustmentTransform.copy(u),x.ellipsoid.copy(this.ellipsoid),c=x.parse(i).then(_=>_.scene);break}case"gltf":case"glb":{let x=l.getHandler("path.gltf")||l.getHandler("path.glb")||new gs(l);x.setWithCredentials(a.credentials==="include"),x.setRequestHeader(a.headers||{}),a.credentials==="include"&&a.mode==="cors"&&x.setCrossOrigin("use-credentials");let _=x.resourcePath||x.path||o;!/[\\/]$/.test(_)&&_.length&&(_+="/"),c=x.parseAsync(i,_).then(T=>{T.scene=T.scene||new Xt;let{scene:S}=T;return S.updateMatrix(),S.matrix.multiply(u).decompose(S.position,S.quaternion,S.scale),T});break}default:c=this.invokeOnePlugin(x=>x.parseToMesh&&x.parseToMesh(i,e,t,n,s));break}let f=await c;if(f===null)throw Error(`TilesRenderer: Content type "${d}" not supported.`);let p,y;f.isObject3D?(p=f,y=null):(p=f.scene,y=f),p.updateMatrix(),p.matrix.premultiply(h),p.matrix.decompose(p.position,p.quaternion,p.scale),await this.invokeAllPlugins(x=>x.processTileModel&&x.processTileModel(p,e)),p.traverse(x=>{x[_y]=x.frustumCulled,x.userData.tile=e}),my(p,!this.autoDisableRendererCulling);let g=[],m=[],v=[];if(p.traverse(x=>{if(x.geometry&&m.push(x.geometry),x.material){let _=x.material;g.push(x.material);for(let T in _){let S=_[T];S&&S.isTexture&&v.push(S)}}}),s.aborted){for(let x=0,_=v.length;x<_;x++){let T=v[x];T.image instanceof ImageBitmap&&T.image.close(),T.dispose()}return}r.materials=g,r.geometry=m,r.textures=v,r.scene=p,r.metadata=y}disposeTile(i){super.disposeTile(i);let e=i.engineData;if(e.scene){let t=e.materials,n=e.geometry,s=e.textures,r=e.scene.parent;e.scene.traverse(o=>{o.userData.meshFeatures&&o.userData.meshFeatures.dispose(),o.userData.structuralMetadata&&o.userData.structuralMetadata.dispose()});for(let o=0,a=n.length;o<a;o++)n[o].dispose();for(let o=0,a=t.length;o<a;o++)t[o].dispose();for(let o=0,a=s.length;o<a;o++){let l=s[o];l.image instanceof ImageBitmap&&l.image.close(),l.dispose()}r&&r.remove(e.scene),e.scene=null,e.materials=null,e.textures=null,e.geometry=null,e.metadata=null}}setTileActive(i,e){super.setTileActive(i,e);let t=i.engineData.scene;t&&(e?(t.parent=this.group,t.updateMatrixWorld(!0)):this.visibleTiles.has(i)||(t.parent=null))}setTileVisible(i,e){let t=i.engineData.scene,{activeTiles:n,group:s}=this;t&&(e?s.add(t):(s.remove(t),n.has(i)&&(t.parent=s))),super.setTileVisible(i,e)}calculateBytesUsed(i,e){let t=this._bytesUsed;return!t.has(i)&&e&&t.set(i,ZE(e)),t.get(i)??null}calculateTileViewError(i,e){let t=i.engineData,n=this.cameras,s=this.cameraInfo,r=t.boundingVolume,o=!1,a=0,l=1/0,c=0,h=1/0;for(let u=0,d=n.length;u<d;u++){let f=s[u],p,y;if(f.isOrthographic){let m=f.pixelSize;p=i.geometricError/m,y=1/0}else{let m=f.sseDenominator;y=r.distanceToPoint(f.position),p=y===0?1/0:i.geometricError/(y*m)}let g=s[u].frustum;r.intersectsFrustum(g)&&(o=!0,a=Math.max(a,p),l=Math.min(l,y)),c=Math.max(c,p),h=Math.min(h,y)}o?(e.inView=!0,e.error=a,e.distanceFromCamera=l):(e.inView=!1,e.error=c,e.distanceFromCamera=h)}dispose(){super.dispose(),this.group.removeFromParent()}}});var by=oe(()=>{vy()});var QE,xp,eA,Ca,My=oe(()=>{pt();QE=new Ln(-1,1,1,-1,0,1),xp=class extends Qe{constructor(){super(),this.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ke([0,2,0,0,2,0],2))}},eA=new xp,Ca=class{constructor(e){this._mesh=new Ve(eA,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,QE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}});function Vy(i,e,t){let n=Math.asin(Ay*Math.sin(e)),s=n*n,r=s*s*s;return t[0]=i*Math.cos(n)/(Ay*(Sy+3*Ty*s+r*(7*wy+9*Ey*s))),t[1]=n*(Sy+Ty*s+r*(wy+Ey*s)),t}function Yt(i,e,t){return i&&e in i?i[e]:t}function Hy(i){return i!=="BOOLEAN"&&i!=="STRING"&&i!=="ENUM"}function tA(i){return/^FLOAT/.test(i)}function La(i){return/^VEC/.test(i)}function Da(i){return/^MAT/.test(i)}function Gy(i,e,t,n=null){return Da(t)||La(t)?n.fromArray(i,e):i[e]}function _p(i){let{type:e,componentType:t}=i;switch(e){case"SCALAR":return t==="INT64"?0n:0;case"VEC2":return new Q;case"VEC3":return new C;case"VEC4":return new nt;case"MAT2":return new Mc;case"MAT3":return new Ue;case"MAT4":return new te;case"BOOLEAN":return!1;case"STRING":return"";case"ENUM":return 0}}function Ry(i,e){if(e==null)return!1;switch(i){case"SCALAR":return typeof e=="number"||typeof e=="bigint";case"VEC2":return e.isVector2;case"VEC3":return e.isVector3;case"VEC4":return e.isVector4;case"MAT2":return e.isMatrix2;case"MAT3":return e.isMatrix3;case"MAT4":return e.isMatrix4;case"BOOLEAN":return typeof e=="boolean";case"STRING":return typeof e=="string";case"ENUM":return typeof e=="number"||typeof e=="bigint"}throw Error("ClassProperty: invalid type.")}function Ia(i,e=null){switch(i){case"INT8":return Int8Array;case"INT16":return Int16Array;case"INT32":return Int32Array;case"INT64":return BigInt64Array;case"UINT8":return Uint8Array;case"UINT16":return Uint16Array;case"UINT32":return Uint32Array;case"UINT64":return BigUint64Array;case"FLOAT32":return Float32Array;case"FLOAT64":return Float64Array}switch(e){case"BOOLEAN":return Uint8Array;case"STRING":return Uint8Array}throw Error("ClassProperty: invalid type.")}function iA(i,e=null){if(i.array){e=e&&Array.isArray(e)?e:[],e.length=i.count;for(let t=0,n=e.length;t<n;t++)e[t]=jc(i,e[t])}else e=jc(i,e);return e}function jc(i,e=null){let t=i.default,n=i.type;if(e||=_p(i),t===null){switch(n){case"SCALAR":return 0;case"VEC2":return e.set(0,0);case"VEC3":return e.set(0,0,0);case"VEC4":return e.set(0,0,0,0);case"MAT2":return e.identity();case"MAT3":return e.identity();case"MAT4":return e.identity();case"BOOLEAN":return!1;case"STRING":return"";case"ENUM":return""}throw Error("ClassProperty: invalid type.")}else if(Da(n))e.fromArray(t);else if(La(n))e.fromArray(t);else return t}function nA(i,e){if(i.noData===null)return e;let t=i.noData,n=i.type;if(Array.isArray(e))for(let o=0,a=e.length;o<a;o++)e[o]=s(e[o]);else e=s(e);return e;function s(o){return r(o)&&(o=jc(i,o)),o}function r(o){if(Da(n)){let a=o.elements;for(let l=0,c=t.length;l<c;l++)if(t[l]!==a[l])return!1;return!0}else if(La(n)){for(let a=0,l=t.length;a<l;a++)if(t[a]!==o.getComponent(a))return!1;return!0}else return t===o}}function sA(i,e){switch(i){case"INT8":return Math.max(e/127,-1);case"INT16":return Math.max(e,32767,-1);case"INT32":return Math.max(e/2147483647,-1);case"INT64":return Math.max(Number(e)/9223372036854776e3,-1);case"UINT8":return e/255;case"UINT16":return e/65535;case"UINT32":return e/4294967295;case"UINT64":return Number(e)/18446744073709552e3}}function rA(i,e){let{type:t,componentType:n,scale:s,offset:r,normalized:o}=i;if(Array.isArray(e))for(let u=0,d=e.length;u<d;u++)e[u]=a(e[u]);else e=a(e);return e;function a(u){return u=Da(t)?c(u):La(t)?l(u):h(u),u}function l(u){return u.x=h(u.x),u.y=h(u.y),"z"in u&&(u.z=h(u.z)),"w"in u&&(u.w=h(u.w)),u}function c(u){let d=u.elements;for(let f=0,p=d.length;f<p;f++)d[f]=h(d[f]);return u}function h(u){return o&&(u=sA(n,u)),(o||tA(n))&&(u=u*s+r),u}}function bp(i,e,t=null){if(i.array){Array.isArray(e)||(e=Array(i.count||0)),e.length=t===null?i.count:t;for(let n=0,s=e.length;n<s;n++)Ry(i.type,e[n])||(e[n]=_p(i))}else Ry(i.type,e)||(e=_p(i));return e}function Zc(i,e){for(let t in e)t in i||delete e[t];for(let t in i){let n=i[t];e[t]=bp(n,e[t])}}function oA(i){switch(i){case"ENUM":return 1;case"SCALAR":return 1;case"VEC2":return 2;case"VEC3":return 3;case"VEC4":return 4;case"MAT2":return 4;case"MAT3":return 9;case"MAT4":return 16;case"BOOLEAN":return-1;case"STRING":return-1;default:return-1}}function uA(i,e){return e===0?i.getAttribute("uv"):i.getAttribute(`uv${e}`)}function Wy(i,e,t=[,,,]){let n=3*e,s=3*e+1,r=3*e+2;return i.index&&(n=i.index.getX(n),s=i.index.getX(s),r=i.index.getX(r)),t[0]=n,t[1]=s,t[2]=r,t}function Xy(i,e,t,n,s){let[r,o,a]=n,l=uA(i,e);Iy.fromBufferAttribute(l,r),Ly.fromBufferAttribute(l,o),Dy.fromBufferAttribute(l,a),s.set(0,0,0).addScaledVector(Iy,t.x).addScaledVector(Ly,t.y).addScaledVector(Dy,t.z)}function qy(i,e,t,n){let s=i.x-Math.floor(i.x),r=i.y-Math.floor(i.y),o=Math.floor(s*e%e),a=Math.floor(r*t%t);return n.set(o,a),n}function pA(i,e=[]){let t=i.json.textures?.length||0,n=Array(t).fill(null);return e.forEach(({properties:s})=>{for(let r in s){let{index:o}=s[r];n[o]===null&&(n[o]=i.loadTexture(o))}}),Promise.all(n)}function mA(i,e=[]){let t=i.json.bufferViews?.length||0,n=Array(t).fill(null);return e.forEach(({properties:s})=>{for(let r in s){let{values:o,arrayOffsets:a,stringOffsets:l}=s[r];n[o]===null&&(n[o]=i.getDependency("bufferView",o)),n[a]===null&&(n[a]=i.getDependency("bufferView",a)),n[l]===null&&(n[l]=i.getDependency("bufferView",l))}}),Promise.all(n)}function gA(i){return i.x>i.y&&i.x>i.z?0:i.y>i.z?1:2}function ky(i,e,t){i.traverse(n=>{if(e.associations.has(n)){let{meshes:s,primitives:r}=e.associations.get(n),o=e.json.meshes[s]?.primitives[r];o&&o.extensions&&o.extensions[$c]&&t(n,o.extensions[$c])}})}var Sy,Ty,wy,Ey,Ay,eP,tP,iP,Cy,Kc,Mp,aA,lA,cA,hA,Ra,Py,vs,Iy,Ly,Dy,Uy,Ny,By,dA,fA,vp,Pa,Yy,Fy,Oy,zy,jy,$c,Zy,$y,Sp,nP,sP,yA,xA,_A,vA,bA,MA,SA,TA,wA,EA,AA,CA,RA,rP,oP,aP,_s,lP,cP,hP,uP,dP,Ky=oe(()=>{wf();pt();np();My();Sy=1.340264,Ty=-.081106,wy=893e-6,Ey=.003796,Ay=Math.sqrt(3)/2;eP=Vy(Math.PI,0,[0,0])[0],tP=Vy(0,Math.PI/2,[0,0])[1],iP=Object.freeze({fill:"#cccccc",stroke:"transparent",strokeWidth:1,radius:2,order:0,visible:!0}),Cy=new Jr;Cy.maxJobs=10,Cy.priorityCallback=(i,e)=>{let t=i.tile,n=e.tile,s=t.internal.renderer,r=n.internal.renderer,o=s.visibleTiles.has(t);return o===r.visibleTiles.has(n)?xa(t,n):o?1:-1};Kc=class{constructor(i,e,t=null){this.name=e.name||null,this.description=e.description||null,this.type=e.type,this.componentType=e.componentType||null,this.enumType=e.enumType||null,this.array=e.array||!1,this.count=e.count||0,this.normalized=e.normalized||!1,this.offset=e.offset||0,this.scale=Yt(e,"scale",1),this.max=Yt(e,"max",1/0),this.min=Yt(e,"min",-1/0),this.required=e.required||!1,this.noData=Yt(e,"noData",null),this.default=Yt(e,"default",null),this.semantic=Yt(e,"semantic",null),this.enumSet=null,this.accessorProperty=t,t&&(this.offset=Yt(t,"offset",this.offset),this.scale=Yt(t,"scale",this.scale),this.max=Yt(t,"max",this.max),this.min=Yt(t,"min",this.min)),e.type==="ENUM"&&(this.enumSet=i[this.enumType],this.componentType===null&&(this.componentType=Yt(this.enumSet,"valueType","UINT16")))}shapeToProperty(i,e=null){return bp(this,i,e)}resolveDefaultElement(i){return jc(this,i)}resolveDefault(i){return iA(this,i)}resolveNoData(i){return nA(this,i)}resolveEnumsToStrings(i){let e=this.enumSet;if(this.type==="ENUM")if(Array.isArray(i))for(let n=0,s=i.length;n<s;n++)i[n]=t(i[n]);else i=t(i);return i;function t(n){let s=e.values.find(r=>r.value===n);return s===null?"":s.name}}adjustValueScaleOffset(i){return Hy(this.type)?rA(this,i):i}},Mp=class{constructor(i,e={},t={},n=null){this.definition=i,this.class=e[i.class],this.className=i.class,this.enums=t,this.data=n,this.name="name"in i?i.name:null,this.properties=null}getPropertyNames(){return Object.keys(this.class.properties)}includesData(i){return!!this.definition.properties[i]}dispose(){}_initProperties(i=Kc){let e={};for(let t in this.class.properties)e[t]=new i(this.enums,this.class.properties[t],this.definition.properties[t]);this.properties=e}},aA=class extends Kc{constructor(i,e,t=null){super(i,e,t),this.attribute=t?.attribute??null}},lA=class extends Mp{constructor(...i){super(...i),this.isPropertyAttributeAccessor=!0,this._initProperties(aA)}getData(i,e,t={}){let n=this.properties;Zc(n,t);for(let s in n)t[s]=this.getPropertyValue(s,i,e,t[s]);return t}getPropertyValue(i,e,t,n=null){if(e>=this.count)throw Error("PropertyAttributeAccessor: Requested index is outside the range of the buffer.");let s=this.properties[i],r=s.type;if(!s)throw Error("PropertyAttributeAccessor: Requested class property does not exist.");if(!this.definition.properties[i])return s.resolveDefault(n);n=s.shapeToProperty(n);let o=t.getAttribute(s.attribute.toLowerCase());if(Da(r)){let a=n.elements;for(let l=a.length;0<l;)a[0]=o.getComponent(e,0)}else if(La(r))n.fromBufferAttribute(o,e);else if(r==="SCALAR"||r==="ENUM")n=o.getX(e);else throw Error("StructuredMetadata.PropertyAttributeAccessor: BOOLEAN and STRING types are not supported by property attributes.");return n=s.adjustValueScaleOffset(n),n=s.resolveEnumsToStrings(n),n=s.resolveNoData(n),n}},cA=class extends Kc{constructor(i,e,t=null){super(i,e,t),this.values=t?.values??null,this.valueLength=oA(this.type),this.arrayOffsets=Yt(t,"arrayOffsets",null),this.stringOffsets=Yt(t,"stringOffsets",null),this.arrayOffsetType=Yt(t,"arrayOffsetType","UINT32"),this.stringOffsetType=Yt(t,"stringOffsetType","UINT32")}getArrayLengthFromId(i,e){let t=this.count;if(this.arrayOffsets!==null){let{arrayOffsets:n,arrayOffsetType:s}=this,r=new(Ia(s))(i[n]);t=r[e+1]-r[e]}return t}getIndexOffsetFromId(i,e){let t=e;if(this.arrayOffsets){let{arrayOffsets:n,arrayOffsetType:s}=this;t=new(Ia(s))(i[n])[t]}else this.array&&(t*=this.count);return t}},hA=class extends Mp{constructor(...i){super(...i),this.isPropertyTableAccessor=!0,this.count=this.definition.count,this._initProperties(cA)}getData(i,e={}){let t=this.properties;Zc(t,e);for(let n in t)e[n]=this.getPropertyValue(n,i,e[n]);return e}_readValueAtIndex(i,e,t,n=null){let s=this.properties[i],{componentType:r,type:o}=s,a=this.data,l=a[s.values],c=new(Ia(r,o))(l),h=s.getIndexOffsetFromId(a,e);if(Hy(o)||o==="ENUM")return Gy(c,(h+t)*s.valueLength,o,n);if(o==="STRING"){let u=h+t,d=0;if(s.stringOffsets!==null){let{stringOffsets:p,stringOffsetType:y}=s,g=new(Ia(y))(a[p]);d=g[u+1]-g[u],u=g[u]}let f=new Uint8Array(c.buffer,u,d);n=new TextDecoder().decode(f)}else if(o==="BOOLEAN"){let u=h+t,d=Math.floor(u/8),f=u%8;n=(c[d]>>f&1)==1}return n}getPropertyValue(i,e,t=null){if(e>=this.count)throw Error("PropertyTableAccessor: Requested index is outside the range of the table.");let n=this.properties[i];if(!n)throw Error("PropertyTableAccessor: Requested property does not exist.");if(!this.definition.properties[i])return n.resolveDefault(t);let s=n.array,r=this.data,o=n.getArrayLengthFromId(r,e);if(t=n.shapeToProperty(t,o),s)for(let a=0,l=t.length;a<l;a++)t[a]=this._readValueAtIndex(i,e,a,t[a]);else t=this._readValueAtIndex(i,e,0,t);return t=n.adjustValueScaleOffset(t),t=n.resolveEnumsToStrings(t),t=n.resolveNoData(t),t}},Ra=new Sc,Py=class{constructor(){this._renderer=new Gr,this._target=new ki(1,1),this._texTarget=new ki,this._quad=new Ca(new Ui({blending:sf,blendDst:rf,blendSrc:of,uniforms:{map:{value:null},pixel:{value:new Q}},vertexShader:`
				void main() {

					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D map;
				uniform ivec2 pixel;

				void main() {

					gl_FragColor = texelFetch( map, pixel, 0 );

				}
			`}))}increaseSizeTo(i){this._target.setSize(Math.max(this._target.width,i),1)}readDataAsync(i){let{_renderer:e,_target:t}=this;return e.readRenderTargetPixelsAsync(t,0,0,i.length/4,1,i)}readData(i){let{_renderer:e,_target:t}=this;e.readRenderTargetPixels(t,0,0,i.length/4,1,i)}renderPixelToTarget(i,e,t){let{_renderer:n,_target:s}=this;Ra.min.copy(e),Ra.max.copy(e),Ra.max.x+=1,Ra.max.y+=1,n.initRenderTarget(s),n.copyTextureToTexture(i,s.texture,Ra,t,0)}},vs=new class{constructor(){let i=null;Object.getOwnPropertyNames(Py.prototype).forEach(e=>{e!=="constructor"&&(this[e]=(...t)=>(i||=new Py,i[e](...t)))})}},Iy=new Q,Ly=new Q,Dy=new Q;Uy=new Q,Ny=new Q,By=new Q,dA=class extends Kc{constructor(i,e,t=null){super(i,e,t),this.channels=Yt(t,"channels",[0]),this.index=Yt(t,"index",null),this.texCoord=Yt(t,"texCoord",null),this.valueLength=parseInt(this.type.replace(/[^0-9]/g,""))||1}readDataFromBuffer(i,e,t=null){let n=this.type;if(n==="BOOLEAN"||n==="STRING")throw Error("PropertyTextureAccessor: BOOLEAN and STRING types not supported.");return Gy(i,e*this.valueLength,n,t)}},fA=class extends Mp{constructor(...i){super(...i),this.isPropertyTextureAccessor=!0,this._asyncRead=!1,this._initProperties(dA)}getData(i,e,t,n={}){let s=this.properties;Zc(s,n);let r=Object.keys(s),o=r.map(a=>n[a]);return this.getPropertyValuesAtTexel(r,i,e,t,o),r.forEach((a,l)=>n[a]=o[l]),n}async getDataAsync(i,e,t,n={}){let s=this.properties;Zc(s,n);let r=Object.keys(s),o=r.map(a=>n[a]);return await this.getPropertyValuesAtTexelAsync(r,i,e,t,o),r.forEach((a,l)=>n[a]=o[l]),n}getPropertyValuesAtTexelAsync(...i){this._asyncRead=!0;let e=this.getPropertyValuesAtTexel(...i);return this._asyncRead=!1,e}getPropertyValuesAtTexel(i,e,t,n,s=[]){for(;s.length<i.length;)s.push(null);s.length=i.length,vs.increaseSizeTo(s.length);let r=this.data,o=this.definition.properties,a=this.properties,l=Wy(n,e);for(let u=0,d=i.length;u<d;u++){let f=i[u];if(!o[f])continue;let p=a[f],y=r[p.index];Xy(n,p.texCoord,t,l,Uy),qy(Uy,y.image.width,y.image.height,Ny),By.set(u,0),vs.renderPixelToTarget(y,Ny,By)}let c=new Uint8Array(i.length*4);if(this._asyncRead)return vs.readDataAsync(c).then(()=>(h.call(this),s));return vs.readData(c),h.call(this),s;function h(){for(let u=0,d=i.length;u<d;u++){let f=i[u],p=a[f],y=p.type;if(s[u]=bp(p,s[u]),!p)throw Error("PropertyTextureAccessor: Requested property does not exist.");if(!o[f]){s[u]=p.resolveDefault(s);continue}let g=p.valueLength*(p.count||1),m=p.channels.map(_=>c[4*u+_]),v=p.componentType,x=new(Ia(v,y))(g);if(new Uint8Array(x.buffer).set(m),p.array){let _=s[u];for(let T=0,S=_.length;T<S;T++)_[T]=p.readDataFromBuffer(x,T,_[T])}else s[u]=p.readDataFromBuffer(x,0,s[u]);s[u]=p.adjustValueScaleOffset(s[u]),s[u]=p.resolveEnumsToStrings(s[u]),s[u]=p.resolveNoData(s[u])}}}dispose(){this.data.forEach(i=>{i&&(i.dispose(),i.image instanceof ImageBitmap&&i.image.close())})}},vp=class{constructor(i,e,t,n=null,s=null){let{schema:r,propertyTables:o=[],propertyTextures:a=[],propertyAttributes:l=[]}=i,{enums:c,classes:h}=r,u=o.map(p=>new hA(p,h,c,t)),d=[],f=[];n&&(n.propertyTextures&&(d=n.propertyTextures.map(p=>new fA(a[p],h,c,e))),n.propertyAttributes&&(f=n.propertyAttributes.map(p=>new lA(l[p],h,c)))),this.schema=r,this.tableAccessors=u,this.textureAccessors=d,this.attributeAccessors=f,this.object=s,this.textures=e,this.nodeMetadata=n}getPropertyTableData(i,e,t=null){if(!Array.isArray(i))t||={},t=this.tableAccessors[i].getData(e,t);else{t||=[];let n=Math.min(i.length,e.length);t.length=n;for(let s=0;s<n;s++){let r=this.tableAccessors[i[s]];t[s]=r.getData(e[s],t[s])}}if(Array.isArray(i)!==Array.isArray(t)||Array.isArray(i)!==Array.isArray(e))throw Error("StructuralMetadata: Scalar and array inputs cannot be mixed.");return t}getPropertyTableInfo(i=null){if(i===null&&(i=this.tableAccessors.map((e,t)=>t)),Array.isArray(i))return i.map(e=>{let t=this.tableAccessors[e];return{name:t.name,className:t.definition.class}});{let e=this.tableAccessors[i];return{name:e.name,className:e.definition.class}}}getPropertyTextureData(i,e,t=[]){let n=this.textureAccessors;t.length=n.length;for(let s=0;s<n.length;s++)t[s]=n[s].getData(i,e,this.object.geometry,t[s]);return t}async getPropertyTextureDataAsync(i,e,t=[]){let n=this.textureAccessors;t.length=n.length;let s=[];for(let r=0;r<n.length;r++){let o=n[r].getDataAsync(i,e,this.object.geometry,t[r]).then(a=>{t[r]=a});s.push(o)}return await Promise.all(s),t}getPropertyTextureInfo(){return this.textureAccessors}getPropertyAttributeData(i,e=[]){let t=this.attributeAccessors;e.length=t.length;for(let n=0;n<t.length;n++)e[n]=t[n].getData(i,this.object.geometry,e[n]);return e}getPropertyAttributeInfo(){return this.attributeAccessors.map(i=>({name:i.name,className:i.definition.class}))}dispose(){this.textureAccessors.forEach(i=>i.dispose()),this.tableAccessors.forEach(i=>i.dispose()),this.attributeAccessors.forEach(i=>i.dispose())}},Pa="EXT_structural_metadata";Yy=class{constructor(i){this.parser=i,this.name=Pa}async afterRoot({scene:i,parser:e}){let t=e.json.extensionsUsed;if(!t||!t.includes(Pa))return;let n=null,s=e.json.extensions[Pa];if(s.schemaUri){let{manager:l,path:c,requestHeader:h,crossOrigin:u}=e.options,d=new URL(s.schemaUri,c).toString(),f=new fn(l);f.setCrossOrigin(u),f.setResponseType("json"),f.setRequestHeader(h),n=f.loadAsync(d).then(p=>{s={...s,schema:p}})}let[r,o]=await Promise.all([pA(e,s.propertyTextures),mA(e,s.propertyTables),n]),a=new vp(s,r,o);i.userData.structuralMetadata=a,i.traverse(l=>{if(e.associations.has(l)){let{meshes:c,primitives:h}=e.associations.get(l),u=e.json.meshes[c]?.primitives[h];if(u&&u.extensions&&u.extensions[Pa]){let d=u.extensions[Pa];l.userData.structuralMetadata=new vp(s,r,o,d,l)}else l.userData.structuralMetadata=a}})}},Fy=new Q,Oy=new Q,zy=new Q;jy=class{constructor(i,e,t){this.geometry=i,this.textures=e,this.data=t,this._asyncRead=!1,this.featureIds=t.featureIds.map(n=>{let{texture:s,...r}=n,o={label:null,propertyTable:null,nullFeatureId:null,...r};return s&&(o.texture={texCoord:0,channels:[0],...s}),o})}getTextures(){return this.textures}getFeatureInfo(){return this.featureIds}getFeaturesAsync(...i){this._asyncRead=!0;let e=this.getFeatures(...i);return this._asyncRead=!1,e}getFeatures(i,e){let{geometry:t,textures:n,featureIds:s}=this,r=Array(s.length).fill(null),o=s.length;vs.increaseSizeTo(o);let a=Wy(t,i),l=a[gA(e)];for(let u=0,d=s.length;u<d;u++){let f=s[u],p="nullFeatureId"in f?f.nullFeatureId:null;if("texture"in f){let y=n[f.texture.index];Xy(t,f.texture.texCoord,e,a,Fy),qy(Fy,y.image.width,y.image.height,Oy),zy.set(u,0),vs.renderPixelToTarget(n[f.texture.index],Oy,zy)}else if("attribute"in f){let y=t.getAttribute(`_feature_id_${f.attribute}`).getX(l);y!==p&&(r[u]=y)}else{let y=l;y!==p&&(r[u]=y)}}let c=new Uint8Array(o*4);if(this._asyncRead)return vs.readDataAsync(c).then(()=>(h(),r));return vs.readData(c),h(),r;function h(){let u=new Uint32Array(1);for(let d=0,f=s.length;d<f;d++){let p=s[d],y="nullFeatureId"in p?p.nullFeatureId:null;if("texture"in p){let{channels:g}=p.texture,m=g.map(x=>c[4*d+x]);new Uint8Array(u.buffer).set(m);let v=u[0];v!==y&&(r[d]=v)}}}}dispose(){this.textures.forEach(i=>{i&&(i.dispose(),i.image instanceof ImageBitmap&&i.image.close())})}},$c="EXT_mesh_features";Zy=class{constructor(i){this.parser=i,this.name=$c}async afterRoot({scene:i,parser:e}){let t=e.json.extensionsUsed;if(!t||!t.includes($c))return;let n=e.json.textures?.length||0,s=Array(n).fill(null);ky(i,e,(o,{featureIds:a})=>{a.forEach(l=>{if(l.texture&&s[l.texture.index]===null){let c=l.texture.index;s[c]=e.loadTexture(c)}})});let r=await Promise.all(s);ky(i,e,(o,a)=>{o.userData.meshFeatures=new jy(o.geometry,r,a)})}},$y=class{constructor(){this.name="CESIUM_RTC"}afterRoot(i){if(i.parser.json.extensions&&i.parser.json.extensions.CESIUM_RTC){let{center:e}=i.parser.json.extensions.CESIUM_RTC;e&&(i.scene.position.x+=e[0],i.scene.position.y+=e[1],i.scene.position.z+=e[2])}}},Sp=class{constructor(i){i={metadata:!0,rtc:!0,plugins:[],dracoLoader:null,ktxLoader:null,meshoptDecoder:null,autoDispose:!0,...i},this.tiles=null,this.metadata=i.metadata,this.rtc=i.rtc,this.plugins=i.plugins,this.dracoLoader=i.dracoLoader,this.ktxLoader=i.ktxLoader,this.meshoptDecoder=i.meshoptDecoder,this._gltfRegex=/\.(gltf|glb)$/g,this._dracoRegex=/\.drc$/g,this._loader=null}init(i){let e=new gs(i.manager);this.dracoLoader&&(e.setDRACOLoader(this.dracoLoader),i.manager.addHandler(this._dracoRegex,this.dracoLoader)),this.ktxLoader&&e.setKTX2Loader(this.ktxLoader),this.meshoptDecoder&&e.setMeshoptDecoder(this.meshoptDecoder),this.rtc&&e.register(()=>new $y),this.metadata&&(e.register(()=>new Yy),e.register(()=>new Zy)),this.plugins.forEach(t=>e.register(t)),i.manager.addHandler(this._gltfRegex,e),this.tiles=i,this._loader=e}dispose(){this.tiles.manager.removeHandler(this._gltfRegex),this.tiles.manager.removeHandler(this._dracoRegex),this.autoDispose&&(this.ktxLoader.dispose(),this.dracoLoader.dispose())}},{clamp:nP}=$s,sP=new Ca(new Ct),yA=new Rn(new Uint8Array([255,255,255,255]),1,1);yA.needsUpdate=!0;xA=0,_A=1,vA=2,bA=3,MA=4,SA=5,TA=6,wA=7,EA=8,AA=9,CA=10,RA=11,rP=Object.freeze({NONE:xA,SCREEN_ERROR:_A,GEOMETRIC_ERROR:vA,DISTANCE:bA,DEPTH:MA,RELATIVE_DEPTH:SA,IS_LEAF:TA,RANDOM_COLOR:wA,RANDOM_NODE_COLOR:EA,CUSTOM_COLOR:AA,LOAD_ORDER:CA,INDEXED_COLOR:RA}),oP=Math.PI/4,aP=3/5,_s={NONE:0,NOT_READY:1,NO_FIT:2,DEPTH:3,OCCUPANCY:4,SPACING:5,ANGLE:6,FACING:7},lP=new class{constructor(){this._cache={}}getColor(...i){let e=i.pop(),t=i.join("_"),{_cache:n}=this;return t in n||(e.setHSL(Math.random(),1,.5),n[t]=e.getHex()),e.set(n[t])}},cP={[_s.NONE]:16777215,[_s.NOT_READY]:7829367,[_s.NO_FIT]:2250239,[_s.DEPTH]:4473924,[_s.OCCUPANCY]:65535,[_s.SPACING]:16776960,[_s.ANGLE]:16711680,[_s.FACING]:16711935},hP=Math.PI/180,uP=Qr*Math.PI*2,dP=Qr*Math.PI*2});var Jy=oe(()=>{Ky()});function PA(){let i,e;onmessage=function(o){let a=o.data;switch(a.type){case"init":i=a.decoderConfig,e=new Promise(function(h){i.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(i)});break;case"decode":let l=a.buffer,c=a.taskConfig;e.then(h=>{let u=h.draco,d=new u.Decoder;try{let f=t(u,d,new Int8Array(l),c),p=f.attributes.map(y=>y.array.buffer);f.index&&p.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},p)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{u.destroy(d)}});break}};function t(o,a,l,c){let h=c.attributeIDs,u=c.attributeTypes,d,f,p=a.GetEncodedGeometryType(l);if(p===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(l,l.byteLength,d);else if(p===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());let y={index:null,attributes:[]};for(let g in h){let m=self[u[g]],v,x;if(c.useUniqueIDs)x=h[g],v=a.GetAttributeByUniqueId(d,x);else{if(x=a.GetAttributeId(d,o[h[g]]),x===-1)continue;v=a.GetAttribute(d,x)}let _=s(o,a,d,g,m,v);g==="color"&&(_.vertexColorSpace=c.vertexColorSpace),y.attributes.push(_)}return p===o.TRIANGULAR_MESH&&(y.index=n(o,a,d)),o.destroy(d),y}function n(o,a,l){let h=l.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(l,u,d);let f=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:f,itemSize:1}}function s(o,a,l,c,h,u){let d=u.num_components(),p=l.num_points()*d,y=p*h.BYTES_PER_ELEMENT,g=r(o,h),m=o._malloc(y);a.GetAttributeDataArrayForAllPoints(l,u,g,y,m);let v=new h(o.HEAPF32.buffer,m,p).slice();return o._free(m),{name:c,array:v,itemSize:d}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}var Tp,Jc,Qy=oe(()=>{pt();Tp=new WeakMap,Jc=class extends rn{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,s){let r=new fn(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,s)},n,s)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,At,n).catch(n)}decodeDracoFile(e,t,n,s,r=qt,o=()=>{}){let a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){let n=JSON.stringify(t);if(Tp.has(e)){let l=Tp.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s,r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(l=>(s=l,new Promise((c,h)=>{s._callbacks[r]={resolve:c,reject:h},s.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{s&&r&&this._releaseTask(s,r)}),Tp.set(e,{key:n,promise:a}),a}_createGeometry(e){let t=new Qe;e.index&&t.setIndex(new He(e.index.array,1));for(let n=0;n<e.attributes.length;n++){let s=e.attributes[n],r=s.name,o=s.array,a=s.itemSize,l=new He(o,a);r==="color"&&(this._assignVertexColorSpace(l,s.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==At)return;let n=new ve;for(let s=0,r=e.count;s<r;s++)n.fromBufferAttribute(e,s),Ye.toWorkingColorSpace(n,At),e.setXYZ(s,n.r,n.g,n.b)}_loadLibrary(e,t){let n=new fn(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((s,r)=>{n.load(e,s,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{let s=n[0];e||(this.decoderConfig.wasmBinary=n[1]);let r=PA.toString(),o=["/* draco decoder */",s,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(r){let o=r.data;switch(o.type){case"decode":s._callbacks[o.id].resolve(o);break;case"error":s._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,r){return s._taskLoad>r._taskLoad?-1:1});let n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}});var so,Ua,Qc,eh=oe(()=>{so=Math.pow(2,-24),Ua=Symbol("SKIP_GENERATION"),Qc={strategy:0,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[Ua]:!1}});function xt(i,e,t){return t.min.x=e[i],t.min.y=e[i+1],t.min.z=e[i+2],t.max.x=e[i+3],t.max.y=e[i+4],t.max.z=e[i+5],t}function Na(i){let e=-1,t=-1/0;for(let n=0;n<3;n++){let s=i[n+3]-i[n];s>t&&(t=s,e=n)}return e}function wp(i,e){e.set(i)}function Ep(i,e,t){let n,s;for(let r=0;r<3;r++){let o=r+3;n=i[r],s=e[r],t[r]=n<s?n:s,n=i[o],s=e[o],t[o]=n>s?n:s}}function Ba(i,e,t){for(let n=0;n<3;n++){let s=e[i+2*n],r=e[i+2*n+1],o=s-r,a=s+r;o<t[n]&&(t[n]=o),a>t[n+3]&&(t[n+3]=a)}}function ro(i){let e=i[3]-i[0],t=i[4]-i[1],n=i[5]-i[2];return 2*(e*t+t*n+n*e)}var bs=oe(()=>{});function tt(i,e){return e[i+15]===65535}function ht(i,e){return e[i+6]}function gt(i,e){return e[i+14]}function ot(i){return i+8}function at(i,e){let t=e[i+6];return i+t*8}function oo(i,e){return e[i+7]}var Ci=oe(()=>{});function th(i,e,t,n,s){let r=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,h=-1/0,u=1/0,d=1/0,f=1/0,p=-1/0,y=-1/0,g=-1/0,m=i.offset||0;for(let v=(e-m)*6,x=(e+t-m)*6;v<x;v+=6){let _=i[v+0],T=i[v+1],S=_-T,w=_+T;S<r&&(r=S),w>l&&(l=w),_<u&&(u=_),_>p&&(p=_);let A=i[v+2],M=i[v+3],b=A-M,I=A+M;b<o&&(o=b),I>c&&(c=I),A<d&&(d=A),A>y&&(y=A);let U=i[v+4],L=i[v+5],N=U-L,H=U+L;N<a&&(a=N),H>h&&(h=H),U<f&&(f=U),U>g&&(g=U)}n[0]=r,n[1]=o,n[2]=a,n[3]=l,n[4]=c,n[5]=h,s[0]=u,s[1]=d,s[2]=f,s[3]=p,s[4]=y,s[5]=g}var ex=oe(()=>{});function ix(i,e,t,n,s,r){let o=-1,a=0;if(r===0)o=Na(e),o!==-1&&(a=(e[o]+e[o+3])/2);else if(r===1)o=Na(i),o!==-1&&(a=UA(t,n,s,o));else if(r===2){let l=ro(i),c=1.25*s,h=t.offset||0,u=(n-h)*6,d=(n+s-h)*6;for(let f=0;f<3;f++){let p=e[f],m=(e[f+3]-p)/Hn;if(s<Hn/4){let v=[...Ms];v.length=s;let x=0;for(let T=u;T<d;T+=6,x++){let S=v[x];S.candidate=t[T+2*f],S.count=0;let{bounds:w,leftCacheBounds:A,rightCacheBounds:M}=S;for(let b=0;b<3;b++)M[b]=1/0,M[b+3]=-1/0,A[b]=1/0,A[b+3]=-1/0,w[b]=1/0,w[b+3]=-1/0;Ba(T,t,w)}v.sort(DA);let _=s;for(let T=0;T<_;T++){let S=v[T];for(;T+1<_&&v[T+1].candidate===S.candidate;)v.splice(T+1,1),_--}for(let T=u;T<d;T+=6){let S=t[T+2*f];for(let w=0;w<_;w++){let A=v[w];S>=A.candidate?Ba(T,t,A.rightCacheBounds):(Ba(T,t,A.leftCacheBounds),A.count++)}}for(let T=0;T<_;T++){let S=v[T],w=S.count,A=s-S.count,M=S.leftCacheBounds,b=S.rightCacheBounds,I=0;w!==0&&(I=ro(M)/l);let U=0;A!==0&&(U=ro(b)/l);let L=1+1.25*(I*w+U*A);L<c&&(o=f,c=L,a=S.candidate)}}else{for(let _=0;_<Hn;_++){let T=Ms[_];T.count=0,T.candidate=p+m+_*m;let S=T.bounds;for(let w=0;w<3;w++)S[w]=1/0,S[w+3]=-1/0}for(let _=u;_<d;_+=6){let w=~~((t[_+2*f]-p)/m);w>=Hn&&(w=Hn-1);let A=Ms[w];A.count++,Ba(_,t,A.bounds)}let v=Ms[Hn-1];wp(v.bounds,v.rightCacheBounds);for(let _=Hn-2;_>=0;_--){let T=Ms[_],S=Ms[_+1];Ep(T.bounds,S.rightCacheBounds,T.rightCacheBounds)}let x=0;for(let _=0;_<Hn-1;_++){let T=Ms[_],S=T.count,w=T.bounds,M=Ms[_+1].rightCacheBounds;S!==0&&(x===0?wp(w,ih):Ep(w,ih,ih)),x+=S;let b=0,I=0;x!==0&&(b=ro(ih)/l);let U=s-x;U!==0&&(I=ro(M)/l);let L=1+1.25*(b*x+I*U);L<c&&(o=f,c=L,a=T.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function UA(i,e,t,n){let s=0,r=i.offset;for(let o=e,a=e+t;o<a;o++)s+=i[(o-r)*6+n*2];return s/t}var Hn,DA,Ms,ih,nx=oe(()=>{bs();Hn=32,DA=(i,e)=>i.candidate-e.candidate,Ms=new Array(Hn).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),ih=new Float32Array(6)});var ao,sx=oe(()=>{ao=class{constructor(){this.boundingData=new Float32Array(6)}}});function rx(i,e,t,n,s,r){let o=n,a=n+s-1,l=r.pos,c=r.axis*2,h=t.offset||0;for(;;){for(;o<=a&&t[(o-h)*6+c]<l;)o++;for(;o<=a&&t[(a-h)*6+c]>=l;)a--;if(o<a){for(let u=0;u<e;u++){let d=i[o*e+u];i[o*e+u]=i[a*e+u],i[a*e+u]=d}for(let u=0;u<6;u++){let d=o-h,f=a-h,p=t[d*6+u];t[d*6+u]=t[f*6+u],t[f*6+u]=p}o++,a--}else return o}}var ox=oe(()=>{});function sh(i){return"count"in i?1:1+sh(i.left)+sh(i.right)}function cx(i,e,t){return ax=new Float32Array(t),nh=new Uint32Array(t),Ap=new Uint16Array(t),lx=new Uint8Array(t),Cp(i,e)}function Cp(i,e){let t=i/4,n=i/2,s="count"in e,r=e.boundingData;for(let o=0;o<6;o++)ax[t+o]=r[o];if(s)return e.buffer?(lx.set(new Uint8Array(e.buffer),i),i+e.buffer.byteLength):(nh[t+6]=e.offset,Ap[n+14]=e.count,Ap[n+15]=65535,i+32);{let{left:o,right:a,splitAxis:l}=e,c=i+32,h=Cp(c,o),u=i/32,f=h/32-u;if(f>NA)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return nh[t+6]=f,nh[t+7]=l,Cp(h,a)}}var ax,nh,Ap,lx,NA,hx=oe(()=>{NA=Math.pow(2,32)});function BA(i,e,t,n,s,r){let{maxDepth:o,verbose:a,targetLeafSize:l,_strictLeafSize:c=1/0,strategy:h,onProgress:u}=s,d=i.primitiveBuffer,f=i.primitiveBufferStride,p=new Float32Array(6),y=!1,g=new ao;return th(e,t,n,g.boundingData,p),v(g,t,n,p),g;function m(x){u&&u((x-r.offset)/r.count)}function v(x,_,T,S=null,w=0){!y&&w>=o&&(y=!0,a&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`));let A=T>c;if(T<=l&&!A||w>=o)return m(_+T),x.offset=_,x.count=T,x;let M=ix(x.boundingData,S,e,_,T,h),b=M.axis===-1?-1:rx(d,f,e,_,T,M);if(M.axis===-1||b===_||b===_+T){if(!A)return m(_+T),x.offset=_,x.count=T,x;M.axis=Math.max(0,Na(x.boundingData)),b=_+Math.max(1,Math.floor(T/2))}x.splitAxis=M.axis;let I=new ao,U=_,L=b-_;x.left=I,th(e,U,L,I.boundingData,p),v(I,U,L,p,w+1);let N=new ao,H=b,k=T-L;return x.right=N,th(e,H,k,N.boundingData,p),v(N,H,k,p,w+1),x}}function ux(i,e){let t=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=i.getRootRanges(e.range),s=n[0],r=n[n.length-1],o={offset:s.offset,count:r.offset+r.count-s.offset},a=new Float32Array(6*o.count);a.offset=o.offset,i.computePrimitiveBounds(o.offset,o.count,a),i._roots=n.map(l=>{let c=BA(i,a,l.offset,l.count,e,o),h=sh(c),u=new t(32*h);return cx(0,c,u),u})}var dx=oe(()=>{ex();nx();bs();sx();ox();hx()});var Ss,rh=oe(()=>{Ss=class{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){let e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}});var Rp,st,Gn=oe(()=>{Rp=class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let e=[],t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}},st=new Rp});function fx(i,e,t,n,s,r){Ts=oh.getPrimitive(),co=oh.getPrimitive(),lo.push(Ts,co),st.setBuffer(i._roots[e]);let o=Pp(0,i.geometry,t,n,s,r);st.clearBuffer(),oh.releasePrimitive(Ts),oh.releasePrimitive(co),lo.pop(),lo.pop();let a=lo.length;return a>0&&(co=lo[a-1],Ts=lo[a-2]),o}function Pp(i,e,t,n,s=null,r=0,o=0){let{float32Array:a,uint16Array:l,uint32Array:c}=st,h=i*2;if(tt(h,l)){let d=ht(i,c),f=gt(h,l);return xt(i,a,Ts),n(d,f,!1,o,r+i/8,Ts)}else{let b=function(U){let{uint16Array:L,uint32Array:N}=st,H=U*2;for(;!tt(H,L);)U=ot(U),H=U*2;return ht(U,N)},I=function(U){let{uint16Array:L,uint32Array:N}=st,H=U*2;for(;!tt(H,L);)U=at(U,N),H=U*2;return ht(U,N)+gt(H,L)},d=ot(i),f=at(i,c),p=d,y=f,g,m,v,x;if(s&&(v=Ts,x=co,xt(p,a,v),xt(y,a,x),g=s(v),m=s(x),m<g)){p=f,y=d;let U=g;g=m,m=U,v=x}v||(v=Ts,xt(p,a,v));let _=tt(p*2,l),T=t(v,_,g,o+1,r+p/8),S;if(T===2){let U=b(p),N=I(p)-U;S=n(U,N,!0,o+1,r+p/8,v)}else S=T&&Pp(p,e,t,n,s,r,o+1);if(S)return!0;x=co,xt(y,a,x);let w=tt(y*2,l),A=t(x,w,m,o+1,r+y/8),M;if(A===2){let U=b(y),N=I(y)-U;M=n(U,N,!0,o+1,r+y/8,x)}else M=A&&Pp(y,e,t,n,s,r,o+1);return!!M}}var Ts,co,lo,oh,px=oe(()=>{pt();bs();rh();Ci();Gn();lo=[],oh=new Ss(()=>new $e)});function mx(i,e,t,n){if(Up)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Up=!0;let s=i._roots,r=e._roots,o,a=0,l=0,c=new te().copy(t).invert();for(let h=0,u=s.length;h<u;h++){Fa.setBuffer(s[h]),l=0;let d=ws.getPrimitive();xt(0,Fa.float32Array,d),d.applyMatrix4(c);for(let f=0,p=r.length;f<p&&(ah.setBuffer(r[f]),o=an(0,0,t,c,n,a,l,0,0,d),ah.clearBuffer(),l+=r[f].byteLength/32,!o);f++);if(ws.releasePrimitive(d),Fa.clearBuffer(),a+=s[h].byteLength/32,o)break}return Up=!1,o}function an(i,e,t,n,s,r=0,o=0,a=0,l=0,c=null,h=!1){let u,d;h?(u=ah,d=Fa):(u=Fa,d=ah);let f=u.float32Array,p=u.uint32Array,y=u.uint16Array,g=d.float32Array,m=d.uint32Array,v=d.uint16Array,x=i*2,_=e*2,T=tt(x,y),S=tt(_,v),w=!1;if(S&&T)h?w=s(ht(e,m),gt(e*2,v),ht(i,p),gt(i*2,y),l,o+e/8,a,r+i/8):w=s(ht(i,p),gt(i*2,y),ht(e,m),gt(e*2,v),a,r+i/8,l,o+e/8);else if(S){let A=ws.getPrimitive();xt(e,g,A),A.applyMatrix4(t);let M=ot(i),b=at(i,p);xt(M,f,ho),xt(b,f,uo);let I=A.intersectsBox(ho),U=A.intersectsBox(uo);w=I&&an(e,M,n,t,s,o,r,l,a+1,A,!h)||U&&an(e,b,n,t,s,o,r,l,a+1,A,!h),ws.releasePrimitive(A)}else{let A=ot(e),M=at(e,m);xt(A,g,Lp),xt(M,g,Dp);let b=c.intersectsBox(Lp),I=c.intersectsBox(Dp);if(b&&I)w=an(i,A,t,n,s,r,o,a,l+1,c,h)||an(i,M,t,n,s,r,o,a,l+1,c,h);else if(b)if(T)w=an(i,A,t,n,s,r,o,a,l+1,c,h);else{let U=ws.getPrimitive();U.copy(Lp).applyMatrix4(t);let L=ot(i),N=at(i,p);xt(L,f,ho),xt(N,f,uo);let H=U.intersectsBox(ho),k=U.intersectsBox(uo);w=H&&an(A,L,n,t,s,o,r,l,a+1,U,!h)||k&&an(A,N,n,t,s,o,r,l,a+1,U,!h),ws.releasePrimitive(U)}else if(I)if(T)w=an(i,M,t,n,s,r,o,a,l+1,c,h);else{let U=ws.getPrimitive();U.copy(Dp).applyMatrix4(t);let L=ot(i),N=at(i,p);xt(L,f,ho),xt(N,f,uo);let H=U.intersectsBox(ho),k=U.intersectsBox(uo);w=H&&an(M,L,n,t,s,o,r,l,a+1,U,!h)||k&&an(M,N,n,t,s,o,r,l,a+1,U,!h),ws.releasePrimitive(U)}}return w}var Fa,ah,ws,ho,uo,Lp,Dp,Up,gx=oe(()=>{pt();Gn();Ci();bs();rh();Fa=new st.constructor,ah=new st.constructor,ws=new Ss(()=>new $e),ho=new $e,uo=new $e,Lp=new $e,Dp=new $e,Up=!1});var lh,yx=oe(()=>{Ci();lh=new class{constructor(){let i=null,e=null,t=null,n=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(r,o)=>{if(n)throw new Error("BVHTraversalHelper: cannot call setBVH during an active traversal.");this.root=o,this.buffer=i=r._roots[o],this.uint16Array=t=new Uint16Array(i),this.uint32Array=e=new Uint32Array(i)},this.reset=()=>{this.root=null,this.buffer=i=null,this.uint16Array=t=null,this.uint32Array=e=null},this.getRangeStart=r=>{let o=r*2;for(;!tt(o,t);)r=ot(r),o=r*2;return ht(r,e)},this.getRangeEnd=r=>{let o=r*2;for(;!tt(o,t);)r=at(r,e),o=r*2;return ht(r,e)+gt(o,t)};let s=(r,o,a)=>{let l=o*2,c=tt(l,t);if(!r(a,c,o)&&!c){let u=ot(o),d=at(o,e);s(r,u,a+1),s(r,d,a+1)}};this.traverseBuffer=r=>{if(n)throw new Error("BVHTraversalHelper: cannot start a traversal during an active traversal.");n=!0;try{s(r,0,0)}finally{n=!1}},this.traverse=r=>{this.traverseBuffer((o,a,l)=>{if(a){let c=l*2,h=e[l+6],u=t[c+14];return r(o,a,new Float32Array(i,l*4,6),h,u)}else{let c=oo(l,e);return r(o,a,new Float32Array(i,l*4,6),c)}})}}}});var xx,fo,ch,Np=oe(()=>{pt();eh();bs();Ci();dx();px();gx();yx();xx=new $e,fo=new Float32Array(6),ch=class{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(e){e={...Qc,...e},"maxLeafSize"in e&&(console.warn('BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.'),e={...e,targetLeafSize:e.maxLeafSize}),ux(this,e)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(e,t,n,s){let r=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,h=-1/0;for(let u=e,d=e+t;u<d;u++){this.writePrimitiveBounds(u,fo,0);let[f,p,y,g,m,v]=fo;f<r&&(r=f),g>l&&(l=g),p<o&&(o=p),m>c&&(c=m),y<a&&(a=y),v>h&&(h=v)}return n[s+0]=r,n[s+1]=o,n[s+2]=a,n[s+3]=l,n[s+4]=c,n[s+5]=h,n}computePrimitiveBounds(e,t,n){let s=n.offset||0;for(let r=e,o=e+t;r<o;r++){this.writePrimitiveBounds(r,fo,0);let[a,l,c,h,u,d]=fo,f=(a+h)/2,p=(l+u)/2,y=(c+d)/2,g=(h-a)/2,m=(u-l)/2,v=(d-c)/2,x=(r-s)*6;n[x+0]=f,n[x+1]=g+(Math.abs(f)+g)*so,n[x+2]=p,n[x+3]=m+(Math.abs(p)+m)*so,n[x+4]=y,n[x+5]=v+(Math.abs(y)+v)*so}return n}shiftPrimitiveOffsets(e){let t=this._indirectBuffer;if(t)for(let n=0,s=t.length;n<s;n++)t[n]+=e;else{let n=this._roots;for(let s=0;s<n.length;s++){let r=n[s],o=new Uint32Array(r),a=new Uint16Array(r),l=r.byteLength/32;for(let c=0;c<l;c++){let h=8*c,u=2*h;tt(u,a)&&(o[h+6]+=e)}}}}traverse(e,t=0){lh.setBVH(this,t),lh.traverse(e),lh.reset()}refit(){let e=this._roots;for(let t=0,n=e.length;t<n;t++){let s=e[t],r=new Uint32Array(s),o=new Uint16Array(s),a=new Float32Array(s),l=s.byteLength/32;for(let c=l-1;c>=0;c--){let h=c*8,u=h*2;if(tt(u,o)){let f=ht(h,r),p=gt(u,o);this.writePrimitiveRangeBounds(f,p,fo,0),a.set(fo,h)}else{let f=ot(h),p=at(h,r);for(let y=0;y<3;y++){let g=a[f+y],m=a[f+y+3],v=a[p+y],x=a[p+y+3];a[h+y]=g<v?g:v,a[h+y+3]=m>x?m:x}}}}}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{xt(0,new Float32Array(n),xx),e.union(xx)}),e}shapecast(e){let{boundsTraverseOrder:t,intersectsBounds:n,intersectsRange:s,intersectsPrimitive:r,scratchPrimitive:o,iterate:a}=e;if(s&&r){let u=s;s=(d,f,p,y,g)=>u(d,f,p,y,g)?!0:a(d,f,this,r,p,y,o)}else s||(r?s=(u,d,f,p)=>a(u,d,this,r,f,p,o):s=(u,d,f)=>f);let l=!1,c=0,h=this._roots;for(let u=0,d=h.length;u<d;u++){let f=h[u];if(l=fx(this,u,n,s,t,c),l)break;c+=f.byteLength/32}return l}bvhcast(e,t,n){let{intersectsRanges:s}=n;return mx(this,e,t,s)}}});function _x(){return typeof SharedArrayBuffer<"u"}var vx=oe(()=>{});function Bp(i){return i.index?i.index.count:i.attributes.position.count}function Es(i){return Bp(i)/3}function OA(i,e=ArrayBuffer){return i>65535?new Uint32Array(new e(4*i)):new Uint16Array(new e(2*i))}function bx(i,e){if(!i.index){let t=i.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=OA(t,n);i.setIndex(new He(s,1));for(let r=0;r<t;r++)s[r]=r}}function zA(i,e,t){let n=Bp(i)/t,s=e||i.drawRange,r=s.start/t,o=(s.start+s.count)/t,a=Math.max(0,r),l=Math.min(n,o)-a;return{offset:Math.floor(a),count:Math.floor(l)}}function kA(i,e){return i.groups.map(t=>({offset:t.start/e,count:t.count/e}))}function Fp(i,e,t){let n=zA(i,e,t),s=kA(i,t);if(!s.length)return[n];let r=[],o=n.offset,a=n.offset+n.count,l=Bp(i)/t,c=[];for(let d of s){let{offset:f,count:p}=d,y=f,g=isFinite(p)?p:l-f,m=f+g;y<a&&m>o&&(c.push({pos:Math.max(o,y),isStart:!0}),c.push({pos:Math.min(a,m),isStart:!1}))}c.sort((d,f)=>d.pos!==f.pos?d.pos-f.pos:d.type==="end"?-1:1);let h=0,u=null;for(let d of c){let f=d.pos;h!==0&&f!==u&&r.push({offset:u,count:f-u}),h+=d.isStart?1:-1,u=f}return r}var po=oe(()=>{pt()});function VA(i,e){let t=i[i.length-1],n=t.offset+t.count>2**16,s=i.reduce((c,h)=>c+h.count,0),r=n?4:2,o=e?new SharedArrayBuffer(s*r):new ArrayBuffer(s*r),a=n?new Uint32Array(o):new Uint16Array(o),l=0;for(let c=0;c<i.length;c++){let{offset:h,count:u}=i[c];for(let d=0;d<u;d++)a[l+d]=h+d;l+=u}return a}var hh,Op=oe(()=>{pt();eh();vx();po();Np();hh=class extends ch{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(e){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(e){}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(t.useSharedArrayBuffer&&!_x())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=e,this.resolvePrimitiveIndex=t.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,t={...Qc,...t},t[Ua]||this.init(t)}init(e){let{geometry:t,primitiveStride:n}=this;if(e.indirect){let s=Fp(t,e.range,n),r=VA(s,e.useSharedArrayBuffer);this._indirectBuffer=r}else bx(t,e);super.init(e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new $e))}getRootRanges(e){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:Fp(this.geometry,e,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}}});var Bi,zp=oe(()=>{pt();Bi=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,s=-1/0;for(let r=0,o=e.length;r<o;r++){let l=e[r][t];n=l<n?l:n,s=l>s?l:s}this.min=n,this.max=s}setFromPoints(e,t){let n=1/0,s=-1/0;for(let r=0,o=t.length;r<o;r++){let a=t[r],l=e.dot(a);n=l<n?l:n,s=l>s?l:s}this.min=n,this.max=s}isSeparated(e){return this.min>e.max||e.min>this.max}};Bi.prototype.setFromBox=(function(){let i=new C;return function(t,n){let s=n.min,r=n.max,o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let h=0;h<=1;h++){i.x=s.x*l+r.x*(1-l),i.y=s.y*c+r.y*(1-c),i.z=s.z*h+r.z*(1-h);let u=t.dot(i);o=Math.min(u,o),a=Math.max(u,a)}this.min=o,this.max=a}})()});var HA,Oa,Mx,kp=oe(()=>{pt();HA=(function(){let i=new C,e=new C,t=new C;return function(s,r,o){let a=s.start,l=i,c=r.start,h=e;t.subVectors(a,c),i.subVectors(s.end,s.start),e.subVectors(r.end,r.start);let u=t.dot(h),d=h.dot(l),f=h.dot(h),p=t.dot(l),g=l.dot(l)*f-d*d,m,v;g!==0?m=(u*d-p*f)/g:m=0,v=(u+m*d)/f,o.x=m,o.y=v}})(),Oa=(function(){let i=new Q,e=new C,t=new C;return function(s,r,o,a){HA(s,r,i);let l=i.x,c=i.y;if(l>=0&&l<=1&&c>=0&&c<=1){s.at(l,o),r.at(c,a);return}else if(l>=0&&l<=1){c<0?r.at(0,a):r.at(1,a),s.closestPointToPoint(a,!0,o);return}else if(c>=0&&c<=1){l<0?s.at(0,o):s.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let h;l<0?h=s.start:h=s.end;let u;c<0?u=r.start:u=r.end;let d=e,f=t;if(s.closestPointToPoint(u,!0,e),r.closestPointToPoint(h,!0,t),d.distanceToSquared(u)<=f.distanceToSquared(h)){o.copy(d),a.copy(u);return}else{o.copy(h),a.copy(f);return}}}})(),Mx=(function(){let i=new C,e=new C,t=new ci,n=new wi;return function(r,o){let{radius:a,center:l}=r,{a:c,b:h,c:u}=o;if(n.start=c,n.end=h,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a||(n.start=c,n.end=u,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a)||(n.start=h,n.end=u,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a))return!0;let y=o.getPlane(t);if(Math.abs(y.distanceToPoint(l))<=a){let m=y.projectPoint(l,e);if(o.containsPoint(m))return!0}return!1}})()});function qi(i){return Math.abs(i)<Wn}var GA,Wn,Sx,Jt,mo=oe(()=>{pt();zp();kp();GA=["x","y","z"],Wn=1e-15,Sx=Wn*Wn;Jt=class extends si{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new C),this.satBounds=new Array(4).fill().map(()=>new Bi),this.points=[this.a,this.b,this.c],this.plane=new ci,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new wi,this.needsUpdate=!0}intersectsSphere(e){return Mx(e,this)}update(){let e=this.a,t=this.b,n=this.c,s=this.points,r=this.satAxes,o=this.satBounds,a=r[0],l=o[0];this.getNormal(a),l.setFromPoints(a,s);let c=r[1],h=o[1];c.subVectors(e,t),h.setFromPoints(c,s);let u=r[2],d=o[2];u.subVectors(t,n),d.setFromPoints(u,s);let f=r[3],p=o[3];f.subVectors(n,e),p.setFromPoints(f,s);let y=c.length(),g=u.length(),m=f.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,y<Wn?g<Wn||m<Wn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(n)):g<Wn?m<Wn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(e)):m<Wn&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(t)),this.plane.setFromNormalAndCoplanarPoint(a,e),this.needsUpdate=!1}};Jt.prototype.closestPointToSegment=(function(){let i=new C,e=new C,t=new wi;return function(s,r=null,o=null){let{start:a,end:l}=s,c=this.points,h,u=1/0;for(let d=0;d<3;d++){let f=(d+1)%3;t.start.copy(c[d]),t.end.copy(c[f]),Oa(t,s,i,e),h=i.distanceToSquared(e),h<u&&(u=h,r&&r.copy(i),o&&o.copy(e))}return this.closestPointToPoint(a,i),h=a.distanceToSquared(i),h<u&&(u=h,r&&r.copy(i),o&&o.copy(a)),this.closestPointToPoint(l,i),h=l.distanceToSquared(i),h<u&&(u=h,r&&r.copy(i),o&&o.copy(l)),Math.sqrt(u)}})();Jt.prototype.intersectsTriangle=(function(){let i=new Jt,e=new Bi,t=new Bi,n=new C,s=new C,r=new C,o=new C,a=new wi,l=new wi,c=new C,h=new Q,u=new Q;function d(x,_,T,S){let w=n;!x.isDegenerateIntoPoint&&!x.isDegenerateIntoSegment?w.copy(x.plane.normal):w.copy(_.plane.normal);let A=x.satBounds,M=x.satAxes;for(let U=1;U<4;U++){let L=A[U],N=M[U];if(e.setFromPoints(N,_.points),L.isSeparated(e)||(o.copy(w).cross(N),e.setFromPoints(o,x.points),t.setFromPoints(o,_.points),e.isSeparated(t)))return!1}let b=_.satBounds,I=_.satAxes;for(let U=1;U<4;U++){let L=b[U],N=I[U];if(e.setFromPoints(N,x.points),L.isSeparated(e)||(o.crossVectors(w,N),e.setFromPoints(o,x.points),t.setFromPoints(o,_.points),e.isSeparated(t)))return!1}return T&&(S||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),T.start.set(0,0,0),T.end.set(0,0,0)),!0}function f(x,_,T,S,w,A,M,b,I,U,L){let N=M/(M-b);U.x=S+(w-S)*N,L.start.subVectors(_,x).multiplyScalar(N).add(x),N=M/(M-I),U.y=S+(A-S)*N,L.end.subVectors(T,x).multiplyScalar(N).add(x)}function p(x,_,T,S,w,A,M,b,I,U,L){if(w>0)f(x.c,x.a,x.b,S,_,T,I,M,b,U,L);else if(A>0)f(x.b,x.a,x.c,T,_,S,b,M,I,U,L);else if(b*I>0||M!=0)f(x.a,x.b,x.c,_,T,S,M,b,I,U,L);else if(b!=0)f(x.b,x.a,x.c,T,_,S,b,M,I,U,L);else if(I!=0)f(x.c,x.a,x.b,S,_,T,I,M,b,U,L);else return!0;return!1}function y(x,_,T,S){let w=_.degenerateSegment,A=x.plane.distanceToPoint(w.start),M=x.plane.distanceToPoint(w.end);return qi(A)?qi(M)?d(x,_,T,S):(T&&(T.start.copy(w.start),T.end.copy(w.start)),x.containsPoint(w.start)):qi(M)?(T&&(T.start.copy(w.end),T.end.copy(w.end)),x.containsPoint(w.end)):x.plane.intersectLine(w,n)!=null?(T&&(T.start.copy(n),T.end.copy(n)),x.containsPoint(n)):!1}function g(x,_,T){let S=_.a;return qi(x.plane.distanceToPoint(S))&&x.containsPoint(S)?(T&&(T.start.copy(S),T.end.copy(S)),!0):!1}function m(x,_,T){let S=x.degenerateSegment,w=_.a;return S.closestPointToPoint(w,!0,n),w.distanceToSquared(n)<Sx?(T&&(T.start.copy(w),T.end.copy(w)),!0):!1}function v(x,_,T,S){if(x.isDegenerateIntoSegment)if(_.isDegenerateIntoSegment){let w=x.degenerateSegment,A=_.degenerateSegment,M=s,b=r;w.delta(M),A.delta(b);let I=n.subVectors(A.start,w.start),U=M.x*b.y-M.y*b.x;if(qi(U))return!1;let L=(I.x*b.y-I.y*b.x)/U,N=-(M.x*I.y-M.y*I.x)/U;if(L<0||L>1||N<0||N>1)return!1;let H=w.start.z+M.z*L,k=A.start.z+b.z*N;return qi(H-k)?(T&&(T.start.copy(w.start).addScaledVector(M,L),T.end.copy(w.start).addScaledVector(M,L)),!0):!1}else return _.isDegenerateIntoPoint?m(x,_,T):y(_,x,T,S);else{if(x.isDegenerateIntoPoint)return _.isDegenerateIntoPoint?_.a.distanceToSquared(x.a)<Sx?(T&&(T.start.copy(x.a),T.end.copy(x.a)),!0):!1:_.isDegenerateIntoSegment?m(_,x,T):g(_,x,T);if(_.isDegenerateIntoPoint)return g(x,_,T);if(_.isDegenerateIntoSegment)return y(x,_,T,S)}}return function(_,T=null,S=!1){this.needsUpdate&&this.update(),_.isExtendedTriangle?_.needsUpdate&&_.update():(i.copy(_),i.update(),_=i);let w=v(this,_,T,S);if(w!==void 0)return w;let A=this.plane,M=_.plane,b=M.distanceToPoint(this.a),I=M.distanceToPoint(this.b),U=M.distanceToPoint(this.c);qi(b)&&(b=0),qi(I)&&(I=0),qi(U)&&(U=0);let L=b*I,N=b*U;if(L>0&&N>0)return!1;let H=A.distanceToPoint(_.a),k=A.distanceToPoint(_.b),ee=A.distanceToPoint(_.c);qi(H)&&(H=0),qi(k)&&(k=0),qi(ee)&&(ee=0);let q=H*k,re=H*ee;if(q>0&&re>0)return!1;s.copy(A.normal),r.copy(M.normal);let ce=s.cross(r),_e=0,Be=Math.abs(ce.x),xe=Math.abs(ce.y);xe>Be&&(Be=xe,_e=1),Math.abs(ce.z)>Be&&(_e=2);let K=GA[_e],he=this.a[K],se=this.b[K],Ee=this.c[K],Ce=_.a[K],Le=_.b[K],yt=_.c[K];if(p(this,he,se,Ee,L,N,b,I,U,h,a))return d(this,_,T,S);if(p(_,Ce,Le,yt,q,re,H,k,ee,u,l))return d(this,_,T,S);if(h.y<h.x){let qe=h.y;h.y=h.x,h.x=qe,c.copy(a.start),a.start.copy(a.end),a.end.copy(c)}if(u.y<u.x){let qe=u.y;u.y=u.x,u.x=qe,c.copy(l.start),l.start.copy(l.end),l.end.copy(c)}return h.y<u.x||u.y<h.x?!1:(T&&(u.x>h.x?T.start.copy(l.start):T.start.copy(a.start),u.y<h.y?T.end.copy(l.end):T.end.copy(a.end)),!0)}})();Jt.prototype.distanceToPoint=(function(){let i=new C;return function(t){return this.closestPointToPoint(t,i),t.distanceTo(i)}})();Jt.prototype.distanceToTriangle=(function(){let i=new C,e=new C,t=["a","b","c"],n=new wi,s=new wi;return function(o,a=null,l=null){let c=a||l?n:null;if(this.intersectsTriangle(o,c,!0))return(a||l)&&(a&&c.getCenter(a),l&&c.getCenter(l)),0;let h=1/0;for(let u=0;u<3;u++){let d,f=t[u],p=o[f];this.closestPointToPoint(p,i),d=p.distanceToSquared(i),d<h&&(h=d,a&&a.copy(i),l&&l.copy(p));let y=this[f];o.closestPointToPoint(y,i),d=y.distanceToSquared(i),d<h&&(h=d,a&&a.copy(y),l&&l.copy(i))}for(let u=0;u<3;u++){let d=t[u],f=t[(u+1)%3];n.set(this[d],this[f]);for(let p=0;p<3;p++){let y=t[p],g=t[(p+1)%3];s.set(o[y],o[g]),Oa(n,s,i,e);let m=i.distanceToSquared(e);m<h&&(h=m,a&&a.copy(i),l&&l.copy(e))}}return Math.sqrt(h)}})()});var Ut,nr=oe(()=>{pt();zp();mo();kp();Ut=class{constructor(e,t,n){this.isOrientedBox=!0,this.min=new C,this.max=new C,this.matrix=new te,this.invMatrix=new te,this.points=new Array(8).fill().map(()=>new C),this.satAxes=new Array(3).fill().map(()=>new C),this.satBounds=new Array(3).fill().map(()=>new Bi),this.alignedSatBounds=new Array(3).fill().map(()=>new Bi),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}};Ut.prototype.update=(function(){return function(){let e=this.matrix,t=this.min,n=this.max,s=this.points;for(let c=0;c<=1;c++)for(let h=0;h<=1;h++)for(let u=0;u<=1;u++){let d=1*c|2*h|4*u,f=s[d];f.x=c?n.x:t.x,f.y=h?n.y:t.y,f.z=u?n.z:t.z,f.applyMatrix4(e)}let r=this.satBounds,o=this.satAxes,a=s[0];for(let c=0;c<3;c++){let h=o[c],u=r[c],d=1<<c,f=s[d];h.subVectors(a,f),u.setFromPoints(h,s)}let l=this.alignedSatBounds;l[0].setFromPointsField(s,"x"),l[1].setFromPointsField(s,"y"),l[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();Ut.prototype.intersectsBox=(function(){let i=new Bi;return function(t){this.needsUpdate&&this.update();let n=t.min,s=t.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(i.min=n.x,i.max=s.x,a[0].isSeparated(i)||(i.min=n.y,i.max=s.y,a[1].isSeparated(i))||(i.min=n.z,i.max=s.z,a[2].isSeparated(i)))return!1;for(let l=0;l<3;l++){let c=o[l],h=r[l];if(i.setFromBox(c,t),h.isSeparated(i))return!1}return!0}})();Ut.prototype.intersectsTriangle=(function(){let i=new Jt,e=new Array(3),t=new Bi,n=new Bi,s=new C;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);let a=this.satBounds,l=this.satAxes;e[0]=o.a,e[1]=o.b,e[2]=o.c;for(let d=0;d<3;d++){let f=a[d],p=l[d];if(t.setFromPoints(p,e),f.isSeparated(t))return!1}let c=o.satBounds,h=o.satAxes,u=this.points;for(let d=0;d<3;d++){let f=c[d],p=h[d];if(t.setFromPoints(p,u),f.isSeparated(t))return!1}for(let d=0;d<3;d++){let f=l[d];for(let p=0;p<4;p++){let y=h[p];if(s.crossVectors(f,y),t.setFromPoints(s,e),n.setFromPoints(s,u),t.isSeparated(n))return!1}}return!0}})();Ut.prototype.closestPointToPoint=(function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}})();Ut.prototype.distanceToPoint=(function(){let i=new C;return function(t){return this.closestPointToPoint(t,i),t.distanceTo(i)}})();Ut.prototype.distanceToBox=(function(){let i=["x","y","z"],e=new Array(12).fill().map(()=>new wi),t=new Array(12).fill().map(()=>new wi),n=new C,s=new C;return function(o,a=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||c)&&(o.getCenter(s),this.closestPointToPoint(s,n),o.closestPointToPoint(n,s),l&&l.copy(n),c&&c.copy(s)),0;let h=a*a,u=o.min,d=o.max,f=this.points,p=1/0;for(let g=0;g<8;g++){let m=f[g];s.copy(m).clamp(u,d);let v=m.distanceToSquared(s);if(v<p&&(p=v,l&&l.copy(m),c&&c.copy(s),v<h))return Math.sqrt(v)}let y=0;for(let g=0;g<3;g++)for(let m=0;m<=1;m++)for(let v=0;v<=1;v++){let x=(g+1)%3,_=(g+2)%3,T=m<<x|v<<_,S=1<<g|m<<x|v<<_,w=f[T],A=f[S];e[y].set(w,A);let b=i[g],I=i[x],U=i[_],L=t[y],N=L.start,H=L.end;N[b]=u[b],N[I]=m?u[I]:d[I],N[U]=v?u[U]:d[I],H[b]=d[b],H[I]=m?u[I]:d[I],H[U]=v?u[U]:d[I],y++}for(let g=0;g<=1;g++)for(let m=0;m<=1;m++)for(let v=0;v<=1;v++){s.x=g?d.x:u.x,s.y=m?d.y:u.y,s.z=v?d.z:u.z,this.closestPointToPoint(s,n);let x=s.distanceToSquared(n);if(x<p&&(p=x,l&&l.copy(n),c&&c.copy(s),x<h))return Math.sqrt(x)}for(let g=0;g<12;g++){let m=e[g];for(let v=0;v<12;v++){let x=t[v];Oa(m,x,n,s);let _=n.distanceToSquared(s);if(_<p&&(p=_,l&&l.copy(n),c&&c.copy(s),_<h))return Math.sqrt(_)}}return Math.sqrt(p)}})()});var Vp,fi,uh=oe(()=>{mo();rh();Vp=class extends Ss{constructor(){super(()=>new Jt)}},fi=new Vp});function Tx(i,e,t={},n=0,s=1/0){let r=n*n,o=s*s,a=1/0,l=null;if(i.shapecast({boundsTraverseOrder:h=>(za.copy(e).clamp(h.min,h.max),za.distanceToSquared(e)),intersectsBounds:(h,u,d)=>d<a&&d<o,intersectsTriangle:(h,u)=>{h.closestPointToPoint(e,za);let d=e.distanceToSquared(za);return d<a&&(Hp.copy(za),a=d,l=u),d<r}}),a===1/0)return null;let c=Math.sqrt(a);return t.point?t.point.copy(Hp):t.point=Hp.clone(),t.distance=c,t.faceIndex=l,t}var za,Hp,wx=oe(()=>{pt();za=new C,Hp=new C});function XA(i,e,t,n,s,r,o,a){let l;if(r===ri?l=i.intersectTriangle(n,t,e,!0,s):l=i.intersectTriangle(e,t,n,r!==Zt,s),l===null)return null;let c=i.origin.distanceTo(s);return c<o||c>a?null:{distance:c,point:s.clone()}}function Rx(i,e,t,n,s,r,o,a,l,c,h){sr.fromBufferAttribute(e,r),rr.fromBufferAttribute(e,o),or.fromBufferAttribute(e,a);let u=XA(i,sr,rr,or,ka,l,c,h);if(u){if(n){fh.fromBufferAttribute(n,r),ph.fromBufferAttribute(n,o),mh.fromBufferAttribute(n,a),u.uv=new Q;let f=si.getInterpolation(ka,sr,rr,or,fh,ph,mh,u.uv);dh||(u.uv=f)}if(s){fh.fromBufferAttribute(s,r),ph.fromBufferAttribute(s,o),mh.fromBufferAttribute(s,a),u.uv1=new Q;let f=si.getInterpolation(ka,sr,rr,or,fh,ph,mh,u.uv1);dh||(u.uv1=f),WA&&(u.uv2=u.uv1)}if(t){Ex.fromBufferAttribute(t,r),Ax.fromBufferAttribute(t,o),Cx.fromBufferAttribute(t,a),u.normal=new C;let f=si.getInterpolation(ka,sr,rr,or,Ex,Ax,Cx,u.normal);u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1),dh||(u.normal=f)}let d={a:r,b:o,c:a,normal:new C,materialIndex:0};if(si.getNormal(sr,rr,or,d.normal),u.face=d,u.faceIndex=r,dh){let f=new C;si.getBarycoord(ka,sr,rr,or,f),u.barycoord=f}}return u}function Px(i){return i&&i.isMaterial?i.side:i}function go(i,e,t,n,s,r,o){let a=n*3,l=a+0,c=a+1,h=a+2,{index:u,groups:d}=i;i.index&&(l=u.getX(l),c=u.getX(c),h=u.getX(h));let{position:f,normal:p,uv:y,uv1:g}=i.attributes;if(Array.isArray(e)){let m=n*3;for(let v=0,x=d.length;v<x;v++){let{start:_,count:T,materialIndex:S}=d[v];if(m>=_&&m<_+T){let w=Px(e[S]),A=Rx(t,f,p,y,g,l,c,h,w,r,o);if(A)if(A.faceIndex=n,A.face.materialIndex=S,s)s.push(A);else return A}}}else{let m=Px(e),v=Rx(t,f,p,y,g,l,c,h,m,r,o);if(v)if(v.faceIndex=n,v.face.materialIndex=0,s)s.push(v);else return v}return null}var dh,WA,sr,rr,or,fh,ph,mh,Ex,Ax,Cx,ka,Gp=oe(()=>{pt();dh=parseInt("170")>=169,WA=parseInt("170")<=161,sr=new C,rr=new C,or=new C,fh=new Q,ph=new Q,mh=new Q,Ex=new C,Ax=new C,Cx=new C,ka=new C});function _t(i,e,t,n){let s=i.a,r=i.b,o=i.c,a=e,l=e+1,c=e+2;t&&(a=t.getX(a),l=t.getX(l),c=t.getX(c)),s.x=n.getX(a),s.y=n.getY(a),s.z=n.getZ(a),r.x=n.getX(l),r.y=n.getY(l),r.z=n.getZ(l),o.x=n.getX(c),o.y=n.getY(c),o.z=n.getZ(c)}var As=oe(()=>{});function Ix(i,e,t,n,s,r,o,a){let{geometry:l,_indirectBuffer:c}=i;for(let h=n,u=n+s;h<u;h++)go(l,e,t,h,r,o,a)}function Lx(i,e,t,n,s,r,o){let{geometry:a,_indirectBuffer:l}=i,c=1/0,h=null;for(let u=n,d=n+s;u<d;u++){let f;f=go(a,e,t,u,null,r,o),f&&f.distance<c&&(h=f,c=f.distance)}return h}function Dx(i,e,t,n,s,r,o){let{geometry:a}=t,{index:l}=a,c=a.attributes.position;for(let h=i,u=e+i;h<u;h++){let d;if(d=h,_t(o,d*3,l,c),o.needsUpdate=!0,n(o,d,s,r))return!0}return!1}var gh=oe(()=>{Gp();As()});function Ux(i,e=null){e&&Array.isArray(e)&&(e=new Set(e));let t=i.geometry,n=t.index?t.index.array:null,s=t.attributes.position,r,o,a,l,c=0,h=i._roots;for(let d=0,f=h.length;d<f;d++)r=h[d],o=new Uint32Array(r),a=new Uint16Array(r),l=new Float32Array(r),u(0,c),c+=r.byteLength;function u(d,f,p=!1){let y=d*2;if(tt(y,a)){let g=ht(d,o),m=gt(y,a),v=1/0,x=1/0,_=1/0,T=-1/0,S=-1/0,w=-1/0;for(let A=3*g,M=3*(g+m);A<M;A++){let b=n[A],I=s.getX(b),U=s.getY(b),L=s.getZ(b);I<v&&(v=I),I>T&&(T=I),U<x&&(x=U),U>S&&(S=U),L<_&&(_=L),L>w&&(w=L)}return l[d+0]!==v||l[d+1]!==x||l[d+2]!==_||l[d+3]!==T||l[d+4]!==S||l[d+5]!==w?(l[d+0]=v,l[d+1]=x,l[d+2]=_,l[d+3]=T,l[d+4]=S,l[d+5]=w,!0):!1}else{let g=ot(d),m=at(d,o),v=p,x=!1,_=!1;if(e){if(!v){let b=g/8+f/32,I=m/8+f/32;x=e.has(b),_=e.has(I),v=!x&&!_}}else x=!0,_=!0;let T=v||x,S=v||_,w=!1;T&&(w=u(g,f,v));let A=!1;S&&(A=u(m,f,v));let M=w||A;if(M)for(let b=0;b<3;b++){let I=g+b,U=m+b,L=l[I],N=l[I+3],H=l[U],k=l[U+3];l[d+b]=L<H?L:H,l[d+b+3]=N>k?N:k}return M}}}var Nx=oe(()=>{Ci()});function Yi(i,e,t,n,s){let r,o,a,l,c,h,u=1/t.direction.x,d=1/t.direction.y,f=1/t.direction.z,p=t.origin.x,y=t.origin.y,g=t.origin.z,m=e[i],v=e[i+3],x=e[i+1],_=e[i+3+1],T=e[i+2],S=e[i+3+2];return u>=0?(r=(m-p)*u,o=(v-p)*u):(r=(v-p)*u,o=(m-p)*u),d>=0?(a=(x-y)*d,l=(_-y)*d):(a=(_-y)*d,l=(x-y)*d),r>l||a>o||((a>r||isNaN(r))&&(r=a),(l<o||isNaN(o))&&(o=l),f>=0?(c=(T-g)*f,h=(S-g)*f):(c=(S-g)*f,h=(T-g)*f),r>h||c>o)?!1:((c>r||r!==r)&&(r=c),(h<o||o!==o)&&(o=h),r<=s&&o>=n)}var Va=oe(()=>{});function Bx(i,e,t,n,s,r,o,a){let{geometry:l,_indirectBuffer:c}=i;for(let h=n,u=n+s;h<u;h++){let d=c?c[h]:h;go(l,e,t,d,r,o,a)}}function Fx(i,e,t,n,s,r,o){let{geometry:a,_indirectBuffer:l}=i,c=1/0,h=null;for(let u=n,d=n+s;u<d;u++){let f;f=go(a,e,t,l?l[u]:u,null,r,o),f&&f.distance<c&&(h=f,c=f.distance)}return h}function Ox(i,e,t,n,s,r,o){let{geometry:a}=t,{index:l}=a,c=a.attributes.position;for(let h=i,u=e+i;h<u;h++){let d;if(d=t.resolveTriangleIndex(h),_t(o,d*3,l,c),o.needsUpdate=!0,n(o,d,s,r))return!0}return!1}var yh=oe(()=>{Gp();As()});function zx(i,e,t,n,s,r,o){st.setBuffer(i._roots[e]),Wp(0,i,t,n,s,r,o),st.clearBuffer()}function Wp(i,e,t,n,s,r,o){let{float32Array:a,uint16Array:l,uint32Array:c}=st,h=i*2;if(tt(h,l)){let d=ht(i,c),f=gt(h,l);Ix(e,t,n,d,f,s,r,o)}else{let d=ot(i);Yi(d,a,n,r,o)&&Wp(d,e,t,n,s,r,o);let f=at(i,c);Yi(f,a,n,r,o)&&Wp(f,e,t,n,s,r,o)}}var kx=oe(()=>{Va();Ci();Gn();gh()});function Vx(i,e,t,n,s,r){st.setBuffer(i._roots[e]);let o=Xp(0,i,t,n,s,r);return st.clearBuffer(),o}function Xp(i,e,t,n,s,r){let{float32Array:o,uint16Array:a,uint32Array:l}=st,c=i*2;if(tt(c,a)){let u=ht(i,l),d=gt(c,a);return Lx(e,t,n,u,d,s,r)}else{let u=oo(i,l),d=qA[u],p=n.direction[d]>=0,y,g;p?(y=ot(i),g=at(i,l)):(y=at(i,l),g=ot(i));let v=Yi(y,o,n,s,r)?Xp(y,e,t,n,s,r):null;if(v){let T=v.point[d];if(p?T<=o[g+u]:T>=o[g+u+3])return v}let _=Yi(g,o,n,s,r)?Xp(g,e,t,n,s,r):null;return v&&_?v.distance<=_.distance?v:_:v||_||null}}var qA,Hx=oe(()=>{Ci();Gn();Va();gh();qA=["x","y","z"]});function Wx(i,e,t,n){st.setBuffer(i._roots[e]);let s=qp(0,i,t,n);return st.clearBuffer(),s}function qp(i,e,t,n,s=null){let{float32Array:r,uint16Array:o,uint32Array:a}=st,l=i*2;if(s===null&&(t.boundingBox||t.computeBoundingBox(),Gx.set(t.boundingBox.min,t.boundingBox.max,n),s=Gx),tt(l,o)){let h=e.geometry,u=h.index,d=h.attributes.position,f=t.index,p=t.attributes.position,y=ht(i,a),g=gt(l,o);if(Ha.copy(n).invert(),t.boundsTree)return xt(i,r,_h),_h.matrix.copy(Ha),_h.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:v=>_h.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(n),v.b.applyMatrix4(n),v.c.applyMatrix4(n),v.needsUpdate=!0;for(let x=y*3,_=(g+y)*3;x<_;x+=3)if(_t(xo,x,u,d),xo.needsUpdate=!0,v.intersectsTriangle(xo))return!0;return!1}});{let m=Es(t);for(let v=y*3,x=(g+y)*3;v<x;v+=3){_t(yo,v,u,d),yo.a.applyMatrix4(Ha),yo.b.applyMatrix4(Ha),yo.c.applyMatrix4(Ha),yo.needsUpdate=!0;for(let _=0,T=m*3;_<T;_+=3)if(_t(xo,_,f,p),xo.needsUpdate=!0,yo.intersectsTriangle(xo))return!0}}}else{let h=ot(i),u=at(i,a);return xt(h,r,xh),!!(s.intersectsBox(xh)&&qp(h,e,t,n,s)||(xt(u,r,xh),s.intersectsBox(xh)&&qp(u,e,t,n,s)))}}var xh,yo,xo,Ha,Gx,_h,Xx=oe(()=>{pt();nr();mo();As();bs();Ci();Gn();po();xh=new $e,yo=new Jt,xo=new Jt,Ha=new te,Gx=new Ut,_h=new Ut});function qx(i,e,t,n={},s={},r=0,o=1/0){e.boundingBox||e.computeBoundingBox(),Yp.set(e.boundingBox.min,e.boundingBox.max,t),Yp.needsUpdate=!0;let a=i.geometry,l=a.attributes.position,c=a.index,h=e.attributes.position,u=e.index,d=fi.getPrimitive(),f=fi.getPrimitive(),p=YA,y=jA,g=null,m=null;s&&(g=ZA,m=$A);let v=1/0,x=null,_=null;return vh.copy(t).invert(),Ga.matrix.copy(vh),i.shapecast({boundsTraverseOrder:T=>Yp.distanceToBox(T),intersectsBounds:(T,S,w)=>w<v&&w<o?(S&&(Ga.min.copy(T.min),Ga.max.copy(T.max),Ga.needsUpdate=!0),!0):!1,intersectsRange:(T,S)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:A=>Ga.distanceToBox(A),intersectsBounds:(A,M,b)=>b<v&&b<o,intersectsRange:(A,M)=>{for(let b=A,I=A+M;b<I;b++){_t(f,3*b,u,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let U=T,L=T+S;U<L;U++){_t(d,3*U,c,l),d.needsUpdate=!0;let N=d.distanceToTriangle(f,p,g);if(N<v&&(y.copy(p),m&&m.copy(g),v=N,x=U,_=b),N<r)return!0}}}});{let w=Es(e);for(let A=0,M=w;A<M;A++){_t(f,3*A,u,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let b=T,I=T+S;b<I;b++){_t(d,3*b,c,l),d.needsUpdate=!0;let U=d.distanceToTriangle(f,p,g);if(U<v&&(y.copy(p),m&&m.copy(g),v=U,x=b,_=A),U<r)return!0}}}}}),fi.releasePrimitive(d),fi.releasePrimitive(f),v===1/0?null:(n.point?n.point.copy(y):n.point=y.clone(),n.distance=v,n.faceIndex=x,s&&(s.point?s.point.copy(m):s.point=m.clone(),s.point.applyMatrix4(vh),y.applyMatrix4(vh),s.distance=y.sub(s.point).length(),s.faceIndex=_),n)}var vh,Yp,Ga,YA,jA,ZA,$A,Yx=oe(()=>{pt();nr();As();po();uh();vh=new te,Yp=new Ut,Ga=new Ut,YA=new C,jA=new C,ZA=new C,$A=new C});function jx(i,e=null){e&&Array.isArray(e)&&(e=new Set(e));let t=i.geometry,n=t.index?t.index.array:null,s=t.attributes.position,r,o,a,l,c=0,h=i._roots;for(let d=0,f=h.length;d<f;d++)r=h[d],o=new Uint32Array(r),a=new Uint16Array(r),l=new Float32Array(r),u(0,c),c+=r.byteLength;function u(d,f,p=!1){let y=d*2;if(tt(y,a)){let g=ht(d,o),m=gt(y,a),v=1/0,x=1/0,_=1/0,T=-1/0,S=-1/0,w=-1/0;for(let A=g,M=g+m;A<M;A++){let b=3*i.resolveTriangleIndex(A);for(let I=0;I<3;I++){let U=b+I;U=n?n[U]:U;let L=s.getX(U),N=s.getY(U),H=s.getZ(U);L<v&&(v=L),L>T&&(T=L),N<x&&(x=N),N>S&&(S=N),H<_&&(_=H),H>w&&(w=H)}}return l[d+0]!==v||l[d+1]!==x||l[d+2]!==_||l[d+3]!==T||l[d+4]!==S||l[d+5]!==w?(l[d+0]=v,l[d+1]=x,l[d+2]=_,l[d+3]=T,l[d+4]=S,l[d+5]=w,!0):!1}else{let g=ot(d),m=at(d,o),v=p,x=!1,_=!1;if(e){if(!v){let b=g/8+f/32,I=m/8+f/32;x=e.has(b),_=e.has(I),v=!x&&!_}}else x=!0,_=!0;let T=v||x,S=v||_,w=!1;T&&(w=u(g,f,v));let A=!1;S&&(A=u(m,f,v));let M=w||A;if(M)for(let b=0;b<3;b++){let I=g+b,U=m+b,L=l[I],N=l[I+3],H=l[U],k=l[U+3];l[d+b]=L<H?L:H,l[d+b+3]=N>k?N:k}return M}}}var Zx=oe(()=>{Ci()});function $x(i,e,t,n,s,r,o){st.setBuffer(i._roots[e]),jp(0,i,t,n,s,r,o),st.clearBuffer()}function jp(i,e,t,n,s,r,o){let{float32Array:a,uint16Array:l,uint32Array:c}=st,h=i*2;if(tt(h,l)){let d=ht(i,c),f=gt(h,l);Bx(e,t,n,d,f,s,r,o)}else{let d=ot(i);Yi(d,a,n,r,o)&&jp(d,e,t,n,s,r,o);let f=at(i,c);Yi(f,a,n,r,o)&&jp(f,e,t,n,s,r,o)}}var Kx=oe(()=>{Va();Ci();Gn();yh()});function Jx(i,e,t,n,s,r){st.setBuffer(i._roots[e]);let o=Zp(0,i,t,n,s,r);return st.clearBuffer(),o}function Zp(i,e,t,n,s,r){let{float32Array:o,uint16Array:a,uint32Array:l}=st,c=i*2;if(tt(c,a)){let u=ht(i,l),d=gt(c,a);return Fx(e,t,n,u,d,s,r)}else{let u=oo(i,l),d=KA[u],p=n.direction[d]>=0,y,g;p?(y=ot(i),g=at(i,l)):(y=at(i,l),g=ot(i));let v=Yi(y,o,n,s,r)?Zp(y,e,t,n,s,r):null;if(v){let T=v.point[d];if(p?T<=o[g+u]:T>=o[g+u+3])return v}let _=Yi(g,o,n,s,r)?Zp(g,e,t,n,s,r):null;return v&&_?v.distance<=_.distance?v:_:v||_||null}}var KA,Qx=oe(()=>{Ci();Gn();Va();yh();KA=["x","y","z"]});function t_(i,e,t,n){st.setBuffer(i._roots[e]);let s=$p(0,i,t,n);return st.clearBuffer(),s}function $p(i,e,t,n,s=null){let{float32Array:r,uint16Array:o,uint32Array:a}=st,l=i*2;if(s===null&&(t.boundingBox||t.computeBoundingBox(),e_.set(t.boundingBox.min,t.boundingBox.max,n),s=e_),tt(l,o)){let h=e.geometry,u=h.index,d=h.attributes.position,f=t.index,p=t.attributes.position,y=ht(i,a),g=gt(l,o);if(Wa.copy(n).invert(),t.boundsTree)return xt(i,r,Mh),Mh.matrix.copy(Wa),Mh.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:v=>Mh.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(n),v.b.applyMatrix4(n),v.c.applyMatrix4(n),v.needsUpdate=!0;for(let x=y,_=g+y;x<_;x++)if(_t(vo,3*e.resolveTriangleIndex(x),u,d),vo.needsUpdate=!0,v.intersectsTriangle(vo))return!0;return!1}});{let m=Es(t);for(let v=y,x=g+y;v<x;v++){let _=e.resolveTriangleIndex(v);_t(_o,3*_,u,d),_o.a.applyMatrix4(Wa),_o.b.applyMatrix4(Wa),_o.c.applyMatrix4(Wa),_o.needsUpdate=!0;for(let T=0,S=m*3;T<S;T+=3)if(_t(vo,T,f,p),vo.needsUpdate=!0,_o.intersectsTriangle(vo))return!0}}}else{let h=ot(i),u=at(i,a);return xt(h,r,bh),!!(s.intersectsBox(bh)&&$p(h,e,t,n,s)||(xt(u,r,bh),s.intersectsBox(bh)&&$p(u,e,t,n,s)))}}var bh,_o,vo,Wa,e_,Mh,i_=oe(()=>{pt();nr();mo();As();bs();Ci();Gn();po();bh=new $e,_o=new Jt,vo=new Jt,Wa=new te,e_=new Ut,Mh=new Ut});function n_(i,e,t,n={},s={},r=0,o=1/0){e.boundingBox||e.computeBoundingBox(),Kp.set(e.boundingBox.min,e.boundingBox.max,t),Kp.needsUpdate=!0;let a=i.geometry,l=a.attributes.position,c=a.index,h=e.attributes.position,u=e.index,d=fi.getPrimitive(),f=fi.getPrimitive(),p=JA,y=QA,g=null,m=null;s&&(g=eC,m=tC);let v=1/0,x=null,_=null;return Sh.copy(t).invert(),Xa.matrix.copy(Sh),i.shapecast({boundsTraverseOrder:T=>Kp.distanceToBox(T),intersectsBounds:(T,S,w)=>w<v&&w<o?(S&&(Xa.min.copy(T.min),Xa.max.copy(T.max),Xa.needsUpdate=!0),!0):!1,intersectsRange:(T,S)=>{if(e.boundsTree){let w=e.boundsTree;return w.shapecast({boundsTraverseOrder:A=>Xa.distanceToBox(A),intersectsBounds:(A,M,b)=>b<v&&b<o,intersectsRange:(A,M)=>{for(let b=A,I=A+M;b<I;b++){let U=w.resolveTriangleIndex(b);_t(f,3*U,u,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let L=T,N=T+S;L<N;L++){let H=i.resolveTriangleIndex(L);_t(d,3*H,c,l),d.needsUpdate=!0;let k=d.distanceToTriangle(f,p,g);if(k<v&&(y.copy(p),m&&m.copy(g),v=k,x=L,_=b),k<r)return!0}}}})}else{let w=Es(e);for(let A=0,M=w;A<M;A++){_t(f,3*A,u,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let b=T,I=T+S;b<I;b++){let U=i.resolveTriangleIndex(b);_t(d,3*U,c,l),d.needsUpdate=!0;let L=d.distanceToTriangle(f,p,g);if(L<v&&(y.copy(p),m&&m.copy(g),v=L,x=b,_=A),L<r)return!0}}}}}),fi.releasePrimitive(d),fi.releasePrimitive(f),v===1/0?null:(n.point?n.point.copy(y):n.point=y.clone(),n.distance=v,n.faceIndex=x,s&&(s.point?s.point.copy(m):s.point=m.clone(),s.point.applyMatrix4(Sh),y.applyMatrix4(Sh),s.distance=y.sub(s.point).length(),s.faceIndex=_),n)}var Sh,Kp,Xa,JA,QA,eC,tC,s_=oe(()=>{pt();nr();As();po();uh();Sh=new te,Kp=new Ut,Xa=new Ut,JA=new C,QA=new C,eC=new C,tC=new C});function Jp(i,e,t){return i===null?null:(i.point.applyMatrix4(e.matrixWorld),i.distance=i.point.distanceTo(t.ray.origin),i.object=e,i)}var r_=oe(()=>{});var Th,wh,o_,a_,l_,Qp,Eh,em=oe(()=>{pt();eh();nr();uh();wx();Ci();gh();Nx();kx();Hx();Xx();Yx();yh();Zx();Kx();Qx();i_();s_();As();r_();Op();Th=new Ut,wh=new Mi,o_=new C,a_=new te,l_=new C,Qp=["getX","getY","getZ"],Eh=class i extends hh{static serialize(e,t={}){t={cloneBuffers:!0,...t};let n=e.geometry,s=e._roots,r=e._indirectBuffer,o=n.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return t.cloneBuffers?(a.roots=s.map(l=>l.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=r?r.slice():null):(a.roots=s,a.index=o?o.array:null,a.indirectBuffer=r),a}static deserialize(e,t,n={}){n={setIndex:!0,indirect:!!e.indirectBuffer,...n};let{index:s,roots:r,indirectBuffer:o}=e;e.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),l(r));let a=new i(t,{...n,[Ua]:!0});if(a._roots=r,a._indirectBuffer=o||null,n.setIndex){let c=t.getIndex();if(c===null){let h=new He(e.index,1,!1);t.setIndex(h)}else c.array!==s&&(c.array.set(s),c.needsUpdate=!0)}return a;function l(c){for(let h=0;h<c.length;h++){let u=c[h],d=new Uint32Array(u),f=new Uint16Array(u);for(let p=0,y=u.byteLength/32;p<y;p++){let g=8*p,m=2*g;tt(m,f)||(d[g+6]=d[g+6]/8-p)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(e,t={}){t.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.'),t={...t,targetLeafSize:t.maxLeafTris}),super(e,t)}shiftTriangleOffsets(e){return super.shiftPrimitiveOffsets(e)}writePrimitiveBounds(e,t,n){let s=this.geometry,r=this._indirectBuffer,o=s.attributes.position,a=s.index?s.index.array:null,c=(r?r[e]:e)*3,h=c+0,u=c+1,d=c+2;a&&(h=a[h],u=a[u],d=a[d]);for(let f=0;f<3;f++){let p=o[Qp[f]](h),y=o[Qp[f]](u),g=o[Qp[f]](d),m=p;y<m&&(m=y),g<m&&(m=g);let v=p;y>v&&(v=y),g>v&&(v=g),t[n+f]=m,t[n+f+3]=v}return t}computePrimitiveBounds(e,t,n){let s=this.geometry,r=this._indirectBuffer,o=s.attributes.position,a=s.index?s.index.array:null,l=o.normalized;if(e<0||t+e-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");let c=o.array,h=o.offset||0,u=3;o.isInterleavedBufferAttribute&&(u=o.data.stride);let d=["getX","getY","getZ"],f=n.offset;for(let p=e,y=e+t;p<y;p++){let m=(r?r[p]:p)*3,v=(p-f)*6,x=m+0,_=m+1,T=m+2;a&&(x=a[x],_=a[_],T=a[T]),l||(x=x*u+h,_=_*u+h,T=T*u+h);for(let S=0;S<3;S++){let w,A,M;l?(w=o[d[S]](x),A=o[d[S]](_),M=o[d[S]](T)):(w=c[x+S],A=c[_+S],M=c[T+S]);let b=w;A<b&&(b=A),M<b&&(b=M);let I=w;A>I&&(I=A),M>I&&(I=M);let U=(I-b)/2,L=S*2;n[v+L+0]=b+U,n[v+L+1]=U+(Math.abs(b)+U)*so}}return n}raycastObject3D(e,t,n=[]){let{material:s}=e;if(s===void 0)return;a_.copy(e.matrixWorld).invert(),wh.copy(t.ray).applyMatrix4(a_),l_.setFromMatrixScale(e.matrixWorld),o_.copy(wh.direction).multiply(l_);let r=o_.length(),o=t.near/r,a=t.far/r;if(t.firstHitOnly===!0){let l=this.raycastFirst(wh,s,o,a);l=Jp(l,e,t),l&&n.push(l)}else{let l=this.raycast(wh,s,o,a);for(let c=0,h=l.length;c<h;c++){let u=Jp(l[c],e,t);u&&n.push(u)}}return n}refit(e=null){return(this.indirect?jx:Ux)(this,e)}raycast(e,t=Li,n=0,s=1/0){let r=this._roots,o=[],a=this.indirect?$x:zx;for(let l=0,c=r.length;l<c;l++)a(this,l,t,e,o,n,s);return o}raycastFirst(e,t=Li,n=0,s=1/0){let r=this._roots,o=null,a=this.indirect?Jx:Vx;for(let l=0,c=r.length;l<c;l++){let h=a(this,l,t,e,n,s);h!=null&&(o==null||h.distance<o.distance)&&(o=h)}return o}intersectsGeometry(e,t){let n=!1,s=this._roots,r=this.indirect?t_:Wx;for(let o=0,a=s.length;o<a&&(n=r(this,o,e,t),!n);o++);return n}shapecast(e){let t=fi.getPrimitive(),n=super.shapecast({...e,intersectsPrimitive:e.intersectsTriangle,scratchPrimitive:t,iterate:this.indirect?Ox:Dx});return fi.releasePrimitive(t),n}bvhcast(e,t,n){let{intersectsRanges:s,intersectsTriangles:r}=n,o=fi.getPrimitive(),a=this.geometry.index,l=this.geometry.attributes.position,c=this.indirect?p=>{let y=this.resolveTriangleIndex(p);_t(o,y*3,a,l)}:p=>{_t(o,p*3,a,l)},h=fi.getPrimitive(),u=e.geometry.index,d=e.geometry.attributes.position,f=e.indirect?p=>{let y=e.resolveTriangleIndex(p);_t(h,y*3,u,d)}:p=>{_t(h,p*3,u,d)};if(r){if(!(e instanceof i))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');let p=(y,g,m,v,x,_,T,S)=>{for(let w=m,A=m+v;w<A;w++){f(w),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let M=y,b=y+g;M<b;M++)if(c(M),o.needsUpdate=!0,r(o,h,M,w,x,_,T,S))return!0}return!1};if(s){let y=s;s=function(g,m,v,x,_,T,S,w){return y(g,m,v,x,_,T,S,w)?!0:p(g,m,v,x,_,T,S,w)}}else s=p}return super.bvhcast(e,t,{intersectsRanges:s})}intersectsBox(e,t){return Th.set(e.min,e.max,t),Th.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Th.intersectsBox(n),intersectsTriangle:n=>Th.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},s={},r=0,o=1/0){return(this.indirect?n_:qx)(this,e,t,n,s,r,o)}closestPointToPoint(e,t={},n=0,s=1/0){return Tx(this,e,t,n,s)}}});var c_=oe(()=>{});var h_=oe(()=>{});var u_=oe(()=>{});var AD,CD,d_=oe(()=>{AD=parseInt("170")>=169,CD=parseInt("170")<=161});var f_=oe(()=>{});function p_(i,e){if(this.isBatchedMesh)iC.call(this,i,e);else{let{geometry:t}=this;if(t.boundsTree)t.boundsTree.raycastObject3D(this,i,e);else{let n;if(this instanceof Ve)n=bo.Mesh;else if(this instanceof cs)n=bo.LineSegments;else if(this instanceof js)n=bo.LineLoop;else if(this instanceof Dn)n=bo.Line;else if(this instanceof Ti)n=bo.Points;else throw new Error("BVH: Fallback raycast function not found.");n.call(this,i,e)}}}function iC(i,e){if(this.boundsTrees){let t=this.boundsTrees,n=this._drawInfo||this._instanceInfo,s=this._drawRanges||this._geometryInfo,r=this.matrixWorld;Qt.material=this.material,Qt.geometry=this.geometry;let o=Qt.geometry.boundsTree,a=Qt.geometry.drawRange;Qt.geometry.boundingSphere===null&&(Qt.geometry.boundingSphere=new It);for(let l=0,c=n.length;l<c;l++){if(!this.getVisibleAt(l))continue;let h=n[l].geometryIndex;if(Qt.geometry.boundsTree=t[h],this.getMatrixAt(l,Qt.matrixWorld).premultiply(r),!Qt.geometry.boundsTree){this.getBoundingBoxAt(h,Qt.geometry.boundingBox),this.getBoundingSphereAt(h,Qt.geometry.boundingSphere);let u=s[h];Qt.geometry.setDrawRange(u.start,u.count)}Qt.raycast(i,Ah);for(let u=0,d=Ah.length;u<d;u++){let f=Ah[u];f.object=this,f.batchId=l,e.push(f)}Ah.length=0}Qt.geometry.boundsTree=o,Qt.geometry.drawRange=a,Qt.material=null,Qt.geometry=null}else bo.BatchedMesh.call(this,i,e)}function m_(i={}){let{type:e=Eh}=i;return this.boundsTree=new e(this,i),this.boundsTree}function g_(){this.boundsTree=null}var DD,bo,Qt,Ah,y_=oe(()=>{pt();em();DD=parseInt("170")>=166,bo={Mesh:Ve.prototype.raycast,Line:Dn.prototype.raycast,LineSegments:cs.prototype.raycast,LineLoop:js.prototype.raycast,Points:Ti.prototype.raycast,BatchedMesh:ra.prototype.raycast},Qt=new Ve,Ah=[]});var x_=oe(()=>{});var __=oe(()=>{});var v_=oe(()=>{});var b_,M_=oe(()=>{b_=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`});var S_=oe(()=>{});var T_,w_=oe(()=>{T_=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int pointer = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( pointer > - 1 && pointer < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ pointer ];
		pointer --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = currNodeIndex + boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			pointer ++;
			stack[ pointer ] = c2;

			pointer ++;
			stack[ pointer ] = c1;

		}

	}

	return found;

}
`});var E_=oe(()=>{});var tm=oe(()=>{M_();S_();w_();E_()});var jD,C_=oe(()=>{Np();Op();em();c_();h_();u_();d_();f_();y_();mo();nr();__();x_();v_();tm();tm();jD=`
	${b_}
	${T_}
`});var ar,R_,qa,P_,Ya,Cs,im=oe(()=>{ar={lat:34.98753,lon:135.75926,h:65},R_={a:.003,b:-.0045,c:.2},qa="https://assets.cms.plateau.reearth.io/assets/",P_=[{ward:"\u4E0B\u4EAC\u533A",url:qa+"d3/4c620c-1c8b-44fa-9168-b50ed86f27f1/26100_kyoto-shi_city_2025_citygml_1_op_bldg_3dtiles_26106_shimogyo-ku_lod3/tileset.json"},{ward:"\u6771\u5C71\u533A",url:qa+"25/dd4c50-5342-4a0b-ac51-05ffb138b8b5/26100_kyoto-shi_city_2025_citygml_1_op_bldg_3dtiles_26105_higashiyama-ku_lod2/tileset.json"},{ward:"\u5357\u533A",url:qa+"1c/596e87-af58-4394-a4e7-ef429ba5732c/26100_kyoto-shi_city_2025_citygml_1_op_bldg_3dtiles_26107_minami-ku_lod2/tileset.json"}],Ya=[{name:"\u4E03\u6761\u901A\u30FB\u30B9\u30BF\u30FC\u30C8",lat:34.98925,lon:135.7706},{name:"\u9D28\u5DDD\u30FB\u4E03\u6761\u5927\u6A4B \u6771\u8A70",lat:34.98935,lon:135.7679,tip:"\u3053\u306E\u5148\u306F<b>\u9D28\u5DDD</b>\u3002\u4E03\u6761\u5927\u6A4B\u3092\u307E\u3063\u3059\u3050\u8D70\u3063\u3066\u6E21\u308D\u3046\uFF08\u5DDD\u306B\u843D\u3061\u308B\u3068\u6D41\u308C\u304C\u91CD\u3044\uFF09"},{name:"\u4E03\u6761\u5927\u6A4B \u897F\u8A70",lat:34.98935,lon:135.7664,tip:"\u5DDD\u3092\u8D8A\u3048\u305F\u3002\u3053\u3053\u304B\u3089\u5357\u897F\u3078\u3002\u5EFA\u7269\u306E\u9AD8\u3055\u3092\u4F7F\u3063\u3066\u52A0\u901F\u3057\u3088\u3046"},{name:"\u6CB3\u539F\u753A\u5869\u5C0F\u8DEF",lat:34.9857,lon:135.764},{name:"\u4EAC\u90FD\u99C5 \u516B\u6761\u53E3",lat:34.9838,lon:135.7585},{name:"\u6771\u5BFA \u4E94\u91CD\u5854",lat:34.9799,lon:135.74872,tip:"\u4E94\u91CD\u5854\u3092\u901A\u904E\u3002\u5317\u6771\u306B\u898B\u3048\u308B<b>\u4EAC\u90FD\u30BF\u30EF\u30FC</b>\u3078\uFF01"},{name:"\u4EAC\u90FD\u30BF\u30EF\u30FC",lat:34.98753,lon:135.75926,goal:!0}],Cs={zoom:16,west:-1700,east:1750,south:-1400,north:800,luse:(i,e,t)=>`${qa}70/f8f889-8540-48df-a15c-2946ce0afc16/26100_kyoto-shi_city_2025_citygml_1_op_luse_mvt/${i}/${e}/${t}.mvt`,tran:(i,e,t)=>`${qa}89/762da6-8d40-490a-b9a9-20decdab2486/26100_kyoto-shi_city_2025_citygml_1_op_tran_mvt_lod1/${i}/${e}/${t}.mvt`}});function D_(i,e,t,n=new C){let s=i*Mo,r=e*Mo,o=nC/Math.sqrt(1-L_*Math.sin(s)**2);return n.set((o+t)*Math.cos(s)*Math.cos(r),(o+t)*Math.cos(s)*Math.sin(r),(o*(1-L_)+t)*Math.sin(s))}function U_(i){let e=i.lat*Mo,t=i.lon*Mo,n=D_(i.lat,i.lon,i.h),s=new C(-Math.sin(t),Math.cos(t),0),r=new C(-Math.sin(e)*Math.cos(t),-Math.sin(e)*Math.sin(t),Math.cos(e)),o=new C(Math.cos(e)*Math.cos(t),Math.cos(e)*Math.sin(t),Math.sin(e)),l=new te().set(s.x,s.y,s.z,0,o.x,o.y,o.z,0,-r.x,-r.y,-r.z,0,0,0,0,1).clone().multiply(new te().makeTranslation(-n.x,-n.y,-n.z)),c=new C;return{ecefToLocal:l,toLocal(h,u,d=i.h,f=new C){return f.copy(D_(h,u,d,c)).applyMatrix4(l)}}}var nC,I_,L_,Mo,Ch,Rh,nm,sm,rm=oe(()=>{pt();nC=6378137,I_=1/298.257223563,L_=I_*(2-I_),Mo=Math.PI/180;Ch=(i,e)=>Math.floor((i+180)/360*2**e),Rh=(i,e)=>Math.floor((1-Math.asinh(Math.tan(i*Mo))/Math.PI)/2*2**e),nm=(i,e)=>i/2**e*360-180,sm=(i,e)=>Math.atan(Math.sinh(Math.PI*(1-2*i/2**e)))/Mo});function ln(i,e){this.x=i,this.y=e}var N_=oe(()=>{ln.prototype={clone(){return new ln(this.x,this.y)},add(i){return this.clone()._add(i)},sub(i){return this.clone()._sub(i)},multByPoint(i){return this.clone()._multByPoint(i)},divByPoint(i){return this.clone()._divByPoint(i)},mult(i){return this.clone()._mult(i)},div(i){return this.clone()._div(i)},rotate(i){return this.clone()._rotate(i)},rotateAround(i,e){return this.clone()._rotateAround(i,e)},matMult(i){return this.clone()._matMult(i)},unit(){return this.clone()._unit()},perp(){return this.clone()._perp()},round(){return this.clone()._round()},mag(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals(i){return this.x===i.x&&this.y===i.y},dist(i){return Math.sqrt(this.distSqr(i))},distSqr(i){let e=i.x-this.x,t=i.y-this.y;return e*e+t*t},angle(){return Math.atan2(this.y,this.x)},angleTo(i){return Math.atan2(this.y-i.y,this.x-i.x)},angleWith(i){return this.angleWithSep(i.x,i.y)},angleWithSep(i,e){return Math.atan2(this.x*e-this.y*i,this.x*i+this.y*e)},_matMult(i){let e=i[0]*this.x+i[1]*this.y,t=i[2]*this.x+i[3]*this.y;return this.x=e,this.y=t,this},_add(i){return this.x+=i.x,this.y+=i.y,this},_sub(i){return this.x-=i.x,this.y-=i.y,this},_mult(i){return this.x*=i,this.y*=i,this},_div(i){return this.x/=i,this.y/=i,this},_multByPoint(i){return this.x*=i.x,this.y*=i.y,this},_divByPoint(i){return this.x/=i.x,this.y/=i.y,this},_unit(){return this._div(this.mag()),this},_perp(){let i=this.y;return this.y=this.x,this.x=-i,this},_rotate(i){let e=Math.cos(i),t=Math.sin(i),n=e*this.x-t*this.y,s=t*this.x+e*this.y;return this.x=n,this.y=s,this},_rotateAround(i,e){let t=Math.cos(i),n=Math.sin(i),s=e.x+t*(this.x-e.x)-n*(this.y-e.y),r=e.y+n*(this.x-e.x)+t*(this.y-e.y);return this.x=s,this.y=r,this},_round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},constructor:ln};ln.convert=function(i){if(i instanceof ln)return i;if(Array.isArray(i))return new ln(+i[0],+i[1]);if(i.x!==void 0&&i.y!==void 0)return new ln(+i.x,+i.y);throw new Error("Expected [x, y] or {x, y} point format")}});function sC(i){let e=i.length;if(e<=1)return[i];let t=[],n,s;for(let r=0;r<e;r++){let o=rC(i[r]);o!==0&&(s===void 0&&(s=o<0),s===o<0?(n&&t.push(n),n=[i[r]]):n&&n.push(i[r]))}return n&&t.push(n),t}function rC(i){let e=0;for(let t=0,n=i.length,s=n-1,r,o;t<n;s=t++)r=i[t],o=i[s],e+=(o.x-r.x)*(r.y+o.y);return e}function oC(i){let e=null,t=i.readVarint()+i.pos;for(;i.pos<t;){let n=i.readVarint();e=n===10?i.readString():n===21?i.readFloat():n===25?i.readDouble():n===32?i.readVarint(!0):n===40?i.readVarint():n===48?i.readSVarint():n===56?i.readBoolean():(i.skip(n),null)}if(e==null)throw new Error("unknown feature value");return e}var Ph,om,Ih,B_=oe(()=>{N_();Ph=class{constructor(e,t,n,s,r){for(this.properties=Object.create(null),this.extent=n,this.type=0,this.id=void 0,this._pbf=e,this._geometry=-1,this._keys=s,this._values=r;e.pos<t;){let o=e.readVarint();if(o===8)this.id=e.readVarint();else if(o===18){let a=e.readVarint()+e.pos;for(;e.pos<a;){let l=s[e.readVarint()],c=r[e.readVarint()];this.properties[l]=c}}else o===24?this.type=e.readVarint():(o===34&&(this._geometry=e.pos),e.skip(o))}}loadGeometry(){if(this._geometry<0)throw new Error("feature has no geometry");let e=this._pbf;e.pos=this._geometry;let t=e.readVarint()+e.pos,n=[],s,r=1,o=0,a=0,l=0;for(;e.pos<t;){if(o<=0){let c=e.readVarint();if(r=c&7,o=c>>3,o===0)continue}if(o--,r===1)a+=e.readSVarint(),l+=e.readSVarint(),s&&n.push(s),s=[new ln(a,l)];else if(r===2)a+=e.readSVarint(),l+=e.readSVarint(),s&&s.push(new ln(a,l));else if(r===7)s&&s.push(s[0].clone());else throw new Error(`unknown command ${r}`)}return s&&n.push(s),n}bbox(){if(this._geometry<0)throw new Error("feature has no geometry");let e=this._pbf;e.pos=this._geometry;let t=e.readVarint()+e.pos,n=1,s=0,r=0,o=0,a=1/0,l=-1/0,c=1/0,h=-1/0;for(;e.pos<t;){if(s<=0){let u=e.readVarint();if(n=u&7,s=u>>3,s===0)continue}if(s--,n===1||n===2)r+=e.readSVarint(),o+=e.readSVarint(),r<a&&(a=r),r>l&&(l=r),o<c&&(c=o),o>h&&(h=o);else if(n!==7)throw new Error(`unknown command ${n}`)}return[a,c,l,h]}toGeoJSON(e,t,n){let s=this.extent*Math.pow(2,n),r=this.extent*e,o=this.extent*t,a=this.loadGeometry();function l(d){return[(d.x+r)*360/s-180,360/Math.PI*Math.atan(Math.exp((1-(d.y+o)*2/s)*Math.PI))-90]}function c(d){return d.map(l)}let h;if(this.type===1){let d=[];for(let p of a)d.push(p[0]);let f=c(d);h=d.length===1?{type:"Point",coordinates:f[0]}:{type:"MultiPoint",coordinates:f}}else if(this.type===2){let d=a.map(c);h=d.length===1?{type:"LineString",coordinates:d[0]}:{type:"MultiLineString",coordinates:d}}else if(this.type===3){let d=sC(a),f=[];for(let p of d)f.push(p.map(c));h=f.length===1?{type:"Polygon",coordinates:f[0]}:{type:"MultiPolygon",coordinates:f}}else throw new Error("unknown feature type");let u={type:"Feature",geometry:h,properties:this.properties};return this.id!=null&&(u.id=this.id),u}};Ph.types=["Unknown","Point","LineString","Polygon"];om=class{constructor(e,t){for(this.version=1,this.name="",this.extent=4096,this.length=0,this._pbf=e,this._keys=[],this._values=[],this._features=[],t===void 0&&(t=e.length);e.pos<t;){let n=e.readVarint();n===10?this.name=e.readString():n===18?(this._features.push(e.pos),e.skip(n)):n===26?this._keys.push(e.readString()):n===34?this._values.push(oC(e)):n===40?this.extent=e.readVarint():n===120?this.version=e.readVarint():e.skip(n)}this.length=this._features.length}feature(e){if(e<0||e>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[e];let t=this._pbf.readVarint()+this._pbf.pos;return new Ph(this._pbf,t,this.extent,this._keys,this._values)}};Ih=class{constructor(e,t=e.length){let n=Object.create(null);for(;e.pos<t;){let s=e.readVarint();if(s===26){let r=new om(e,e.readVarint()+e.pos);r.length&&(n[r.name]=r)}else e.skip(s)}this.layers=n}}});function uC(i,e,t){let n=t.buf,s,r;if(r=n[t.pos++],s=(r&112)>>4,r<128||(r=n[t.pos++],s|=(r&127)<<3,r<128)||(r=n[t.pos++],s|=(r&127)<<10,r<128)||(r=n[t.pos++],s|=(r&127)<<17,r<128)||(r=n[t.pos++],s|=(r&127)<<24,r<128)||(r=n[t.pos++],s|=(r&1)<<31,r<128))return So(i,s,e);throw new Error("Expected varint not more than 10 bytes")}function So(i,e,t){return t?e*4294967296+(i>>>0):(e>>>0)*4294967296+(i>>>0)}function dC(i,e,t){let n="",s=e;for(;s<t;){let r=i[s],o=null,a=r>239?4:r>223?3:r>191?2:1;if(s+a>t)break;let l,c,h;a===1?r<128&&(o=r):a===2?(l=i[s+1],(l&192)===128&&(o=(r&31)<<6|l&63,o<=127&&(o=null))):a===3?(l=i[s+1],c=i[s+2],(l&192)===128&&(c&192)===128&&(o=(r&15)<<12|(l&63)<<6|c&63,(o<=2047||o>=55296&&o<=57343)&&(o=null))):a===4&&(l=i[s+1],c=i[s+2],h=i[s+3],(l&192)===128&&(c&192)===128&&(h&192)===128&&(o=(r&15)<<18|(l&63)<<12|(c&63)<<6|h&63,(o<=65535||o>=1114112)&&(o=null))),o===null?(o=65533,a=1):o>65535&&(o-=65536,n+=String.fromCharCode(o>>>10&1023|55296),o=56320|o&1023),n+=String.fromCharCode(o),s+=a}return n}var aC,F_,lC,cC,O_,hC,Lh,z_=oe(()=>{aC=12,F_=typeof TextDecoder>"u"?null:new TextDecoder("utf-8"),lC=0,cC=1,O_=2,hC=5,Lh=class{constructor(e){this.buf=ArrayBuffer.isView(e)?e:new Uint8Array(e),this.dataView=new DataView(this.buf.buffer,this.buf.byteOffset,this.buf.byteLength),this.pos=0,this.type=0,this._valueStart=-1,this.length=this.buf.length}readFields(e,t,n=this.length){let s;for(;s=this.nextField(n);)e(s,t,this);return t}readMessage(e,t){return this.readFields(e,t,this.readVarint()+this.pos)}readFixed32(){let e=this.dataView.getUint32(this.pos,!0);return this.pos+=4,e}readSFixed32(){let e=this.dataView.getInt32(this.pos,!0);return this.pos+=4,e}readFixed64(){let e=this.dataView.getUint32(this.pos,!0)+this.dataView.getUint32(this.pos+4,!0)*4294967296;return this.pos+=8,e}readSFixed64(){let e=this.dataView.getUint32(this.pos,!0)+this.dataView.getInt32(this.pos+4,!0)*4294967296;return this.pos+=8,e}readFloat(){let e=this.dataView.getFloat32(this.pos,!0);return this.pos+=4,e}readDouble(){let e=this.dataView.getFloat64(this.pos,!0);return this.pos+=8,e}readVarint(e){let t=this.buf,n=t[this.pos++];if(n<128)return n;let s=n&127,r;return r=t[this.pos++],s|=(r&127)<<7,r<128||(r=t[this.pos++],s|=(r&127)<<14,r<128)||(r=t[this.pos++],s|=(r&127)<<21,r<128)?s:(r=t[this.pos],s|=(r&15)<<28,uC(s,e,this))}readSVarint(){let e=this.readVarint();return e%2===1?(e+1)/-2:e/2}readBoolean(){return!!this.readVarint()}readString(){let e=this.readVarint()+this.pos,t=this.pos;return this.pos=e,e-t>=aC&&F_?F_.decode(this.buf.subarray(t,e)):dC(this.buf,t,e)}readBytes(){let e=this.readVarint()+this.pos,t=this.buf.subarray(this.pos,e);return this.pos=e,t}readPackedVarint(e=[],t){let n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readVarint(t));return e}readPackedSVarint(e=[]){let t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readSVarint());return e}readPackedBoolean(e=[]){let t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readBoolean());return e}readPackedFloat(e=[]){let t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readFloat());return e}readPackedDouble(e=[]){let t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readDouble());return e}readPackedFixed32(e=[]){let t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readFixed32());return e}readPackedSFixed32(e=[]){let t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readSFixed32());return e}readPackedFixed64(e=[]){let t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readFixed64());return e}readPackedSFixed64(e=[]){let t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readSFixed64());return e}readPackedEnd(){return this.type===O_?this.readVarint()+this.pos:this.pos+1}nextField(e=this.length){if(this.pos===this._valueStart&&this.skip(this.type),this.pos>=e)return 0;let t=this.readVarint();return this.type=t&7,this._valueStart=this.pos,t>>>3}skip(e){let t=e&7;if(t===lC)for(;this.buf[this.pos++]>127;);else if(t===O_)this.pos=this.readVarint()+this.pos;else if(t===hC)this.pos+=4;else if(t===cC)this.pos+=8;else throw new Error(`Unimplemented type: ${t}`)}}});function Dh(i,e,t){i.beginPath();for(let n of e.loadGeometry()){for(let s=0;s<n.length;s++)s?i.lineTo(n[s].x*t,n[s].y*t):i.moveTo(n[s].x*t,n[s].y*t);i.closePath()}}function k_({scene:i,renderer:e,frame:t,groundY:n}){let s=Cs.zoom,r=1/110940,o=1/91290,a=Ch(ar.lon+Cs.west*o,s),l=Ch(ar.lon+Cs.east*o,s),c=Rh(ar.lat+Cs.north*r,s),h=Rh(ar.lat+Cs.south*r,s),u=l-a+1,d=h-c+1,f=document.createElement("canvas");f.width=u*Rs,f.height=d*Rs;let p=f.getContext("2d");p.fillStyle="#10152a",p.fillRect(0,0,f.width,f.height);let y=document.createElement("canvas");y.width=pi,y.height=pi;let g=y.getContext("2d",{willReadFrequently:!0}),m=t.toLocal(sm(c,s),nm(a,s)),v=t.toLocal(sm(h+1,s),nm(l+1,s)),x=u*pi,_=d*pi,T=new Uint8Array(x*_),S=50,w=Math.ceil((v.x-m.x)/S),A=Math.ceil((v.z-m.z)/S),M=[],b=[],I=[];for(let xe=0;xe<=A;xe++)for(let G=0;G<=w;G++){let K=G/w,he=xe/A;M.push(m.x+(v.x-m.x)*K,0,m.z+(v.z-m.z)*he),b.push(K,1-he)}for(let xe=0;xe<A;xe++)for(let G=0;G<w;G++){let K=xe*(w+1)+G,he=K+1,se=K+w+1,Ee=se+1;I.push(K,se,he,he,se,Ee)}let U=new Qe;U.setAttribute("position",new Ke(M,3)),U.setAttribute("uv",new Ke(b,2)),U.setIndex(I);let L=()=>{let xe=U.attributes.position;for(let G=0;G<xe.count;G++)xe.setY(G,n(xe.getX(G),xe.getZ(G))-.05);xe.needsUpdate=!0,U.computeBoundingSphere()};L();let N=new oa(f);N.colorSpace=At,N.anisotropy=e.capabilities.getMaxAnisotropy();let H=new Ct({map:N});i.add(new Ve(U,H));let k={mat:H,refreshHeights:L,ready:!1,tilesDone:0,tilesTotal:u*d,isWater(xe,G){let K=(xe-m.x)/(v.x-m.x),he=(G-m.z)/(v.z-m.z);return K<0||K>=1||he<0||he>=1?!1:T[Math.floor(he*_)*x+Math.floor(K*x)]===1}};async function ee(xe,G){let[K,he]=await Promise.all([Cs.luse(s,xe,G),Cs.tran(s,xe,G)].map(B=>am(B).catch(()=>null))),se=(xe-a)*Rs,Ee=(G-c)*Rs;p.save(),p.beginPath(),p.rect(se,Ee,Rs,Rs),p.clip(),p.translate(se,Ee),g.fillStyle="#000",g.fillRect(0,0,pi,pi);let Ce=K?.layers.luse;for(let B=0;Ce&&B<Ce.length;B++){let vt=Ce.feature(B);if(vt.type!==3)continue;let Fe=vt.properties.luse_class||"",Oe=fC.find(([Ae])=>Fe.startsWith(Ae));Oe&&(Dh(p,vt,Rs/Ce.extent),p.fillStyle=Oe[1],p.fill("evenodd"),Oe[0]==="\u6C34\u9762"&&(Dh(g,vt,pi/Ce.extent),g.fillStyle="#fff",g.fill("evenodd")))}let Le=he?.layers.Road;for(let B=0;B<2;B++)for(let vt=0;Le&&vt<Le.length;vt++){let Fe=Le.feature(vt);if(Fe.type!==3)continue;let Oe=(Fe.properties.uro_RoadStructureAttribute_uro_sectionType||"").includes("\u6A4B\u6881");Oe===(B===1)&&(Dh(p,Fe,Rs/Le.extent),p.fillStyle=Oe?mC:pC,p.fill("evenodd"),Dh(g,Fe,pi/Le.extent),g.fillStyle="#000",g.fill("evenodd"))}p.restore();let yt=g.getImageData(0,0,pi,pi).data,qe=(xe-a)*pi,Pt=(G-c)*pi;for(let B=0;B<pi;B++)for(let vt=0;vt<pi;vt++)T[(Pt+B)*x+qe+vt]=yt[(B*pi+vt)*4]>127?1:0;N.needsUpdate=!0,k.tilesDone++}let q=[],re=Ch(Ya[0].lon,s),ce=Rh(Ya[0].lat,s);for(let xe=c;xe<=h;xe++)for(let G=a;G<=l;G++)q.push([G,xe]);q.sort((xe,G)=>Math.hypot(xe[0]-re,xe[1]-ce)-Math.hypot(G[0]-re,G[1]-ce));let _e=0,Be=async()=>{for(;_e<q.length;){let xe=q[_e++];await ee(xe[0],xe[1]).catch(G=>console.warn("ground tile failed",xe,G))}};return Promise.all(Array.from({length:4},Be)).then(()=>{k.ready=!0}),k}var fC,pC,mC,Rs,pi,am,V_=oe(()=>{pt();B_();z_();im();rm();fC=[["\u6C34\u9762","#124e78"],["\u305D\u306E\u4ED6\u81EA\u7136\u5730","#16262a"],["\u516C\u5171\u7A7A\u5730","#12281f"],["\u7530","#14261c"],["\u7551","#14261c"],["\u5C71\u6797","#10221a"],["\u9053\u8DEF\u7528\u5730","#2c344e"],["\u5546\u696D\u7528\u5730","#222440"],["\u4F4F\u5B85\u7528\u5730","#181d30"],["\u516C\u76CA\u65BD\u8A2D\u7528\u5730","#1e2438"],["\u5DE5\u696D\u7528\u5730","#1c1e2c"],["\u4EA4\u901A\u65BD\u8A2D\u7528\u5730","#1e2030"]],pC="#3a4464",mC="#8a7c58",Rs=512,pi=256,am=async i=>{let e=await fetch(i);return e.ok?new Ih(new Lh(new Uint8Array(await e.arrayBuffer()))):null}});function H_(i){let e=new Map,t=(l,c)=>i.c+i.a*l+i.b*c,n=(l,c)=>(l+5e3)*1e4+(c+5e3),s={version:0,cell:lr};function r(l,c){let h=e.get(n(l,c));if(!h||h.s.length<3)return t((l+.5)*lr,(c+.5)*lr);if(h.dirty){let u=h.s.slice().sort((d,f)=>d-f);h.h=u[Math.floor(u.length*yC)],h.dirty=!1}return h.h}s.height=(l,c)=>{let h=l/lr-.5,u=c/lr-.5,d=Math.floor(h),f=Math.floor(u),p=h-d,y=u-f,g=r(d,f),m=r(d+1,f),v=r(d,f+1),x=r(d+1,f+1);return(g*(1-p)+m*p)*(1-y)+(v*(1-p)+x*p)*y};let o=new C,a=new te;return s.addModel=(l,c)=>{l.traverse(h=>{if(!h.isMesh)return;let u=h.geometry.attributes.position,d=h.geometry.attributes._batchid;if(!u||!d||!u.count)return;h.updateWorldMatrix(!0,!1),a.copy(h.matrixWorld),Math.abs(o.fromBufferAttribute(u,0).applyMatrix4(a).x)>1e5&&a.premultiply(c);let f=new Map;for(let p=0;p<u.count;p++){o.fromBufferAttribute(u,p).applyMatrix4(a);let y=d.getX(p),g=f.get(y);g?(o.y<g.y&&(g.y=o.y),g.x+=o.x,g.z+=o.z,g.n++):f.set(y,{y:o.y,x:o.x,z:o.z,n:1})}for(let p of f.values()){let y=p.x/p.n,g=p.z/p.n;if(!(Math.abs(y)<2e4&&Math.abs(g)<2e4&&Math.abs(p.y)<2e3))continue;let m=n(Math.floor(y/lr),Math.floor(g/lr)),v=e.get(m);v||e.set(m,v={s:[],h:0,dirty:!0}),v.s.length<gC&&(v.s.push(p.y),v.dirty=!0,s.version++)}})},s}var lr,gC,yC,G_=oe(()=>{pt();lr=50,gC=240,yC=.65});function Xn(i){return i==null?"--:--.-":`${Math.floor(i/60)}:${(i%60).toFixed(1).padStart(4,"0")}`}async function cm(i,e){let t=await fetch("/api/"+i,{method:e?"POST":"GET",headers:{"Content-Type":"application/json"},body:e?JSON.stringify(e):void 0}),n=await t.json().catch(()=>({error:"\u30B5\u30FC\u30D0\u30FC\u306E\u5FDC\u7B54\u304C\u8AAD\u3081\u307E\u305B\u3093"}));if(!t.ok)throw new Error(n.error||"\u30B5\u30FC\u30D0\u30FC\u30A8\u30E9\u30FC");return n}async function W_(){try{Xe.online=!!(await cm("ping")).ok}catch{Xe.online=!1}return Xe.online}async function X_(i,e,t){let n=await cm("join",{name:i,pass:e,teamName:t});return Xe.name=i,Xe.pass=e,Xe.team=n.team,Xe.ranking=n.ranking,To(mn.name,i),To(mn.pass,e),n}function q_(i){Xe.name=i,Xe.pass="",Xe.team=null,To(mn.name,i),To(mn.pass,"")}function Y_(i,e){let t=Xe.best==null||i<Xe.best,n=Xe.best;return t&&(Xe.best=i,Xe.bestSplits=e.slice(),To(mn.best,String(i)),To(mn.splits,JSON.stringify(e))),{improved:t,prev:n}}async function j_(i){if(!Xe.online||!Xe.pass)return null;let e=await cm("result",{name:Xe.name,pass:Xe.pass,...i});return Xe.team=e.team,Xe.ranking=e.ranking,e}function Z_(){if(!Xe.team)return"";let i=Xe.team.members.map((t,n)=>`<tr class="${t.name===Xe.name?"me":""}"><td>${n+1}</td><td>${lm(t.name)}</td><td>${Xn(t.best)}</td></tr>`).join(""),e=Xe.ranking.map((t,n)=>`<tr class="${t.mine?"me":""}"><td>${n+1}</td><td>${lm(t.name)}\uFF08${t.size}\u4EBA\uFF09</td><td>${Xn(t.best)}</td></tr>`).join("");return`<h3>\u30C1\u30FC\u30E0\u300C${lm(Xe.team.name)}\u300D</h3><table class="board">${i}</table><h3>\u30C1\u30FC\u30E0\u30E9\u30F3\u30AD\u30F3\u30B0\uFF08\u30C1\u30FC\u30E0\u5185\u306E\u6700\u901F\u30BF\u30A4\u30E0\uFF09</h3><table class="board">${e||'<tr><td colspan="3">\u307E\u3060\u8A18\u9332\u304C\u3042\u308A\u307E\u305B\u3093</td></tr>'}</table>`}var mn,Uh,To,Xe,Nh,lm,$_=oe(()=>{mn={name:"kn_name",pass:"kn_pass",best:"kn_best",splits:"kn_splits"},Uh=i=>{try{return localStorage.getItem(i)}catch{return null}},To=(i,e)=>{try{localStorage.setItem(i,e)}catch{}},Xe={online:!1,name:Uh(mn.name)||"",pass:Uh(mn.pass)||"",team:null,ranking:[],best:Number(Uh(mn.best))||null,bestSplits:JSON.parse(Uh(mn.splits)||"null")};Nh=i=>(i>=0?"+":"\u2212")+Math.abs(i).toFixed(1);lm=i=>String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])});function Bh(i,e){let t=K_.get(i);if(t||K_.set(i,t={}),!(e in t))try{t[e]=i.getPropertyArray(e)||null}catch{t[e]=null}return t[e]}function vC(i){let e=i;for(;e&&!e.batchTable;)e=e.parent;return e?e.batchTable:null}function Fh(i){let e=i.object,t=e.geometry.attributes._batchid,n=vC(e);if(!t||!n||!i.face)return null;let s=t.getX(i.face.a),r=Bh(n,xC)?.[s],o=Bh(n,pm)?.[s],a=r>=1e3?r:null;return{mesh:e,bid:s,id:o,year:a,fragile:a!==null&&a<=fm,gone:!!e.userData.gone?.has(s)}}function dm(i,e,t){let n=i.geometry,s=n.attributes._batchid,r=n.attributes.position;if(!s||(i.userData.gone||=new Set).has(e))return;let o=[];for(let d=0;d<s.count;d++)s.getX(d)===e&&o.push(d);if(!o.length)return;i.userData.gone.add(e),i.updateWorldMatrix(!0,!1),hm.set(0,1,0).transformDirection(_C.copy(i.matrixWorld).invert());let a=Uint32Array.from(o),l=new Float32Array(a.length*3),c=new Float32Array(a.length),h=1/0;for(let d=0;d<a.length;d++)ja.fromBufferAttribute(r,a[d]),l.set([ja.x,ja.y,ja.z],d*3),c[d]=ja.dot(hm),h=Math.min(h,c[d]);for(let d=0;d<c.length;d++)c[d]-=h;let u={mesh:i,idx:a,orig:l,h:c,up:hm.clone(),t:0,dur:1.1};um.push(u),t?ev(u):Za.push(u)}function Q_(i,e){let t=i.mesh.geometry.attributes.position,{idx:n,orig:s,h:r,up:o}=i;for(let a=0;a<n.length;a++){let l=r[a]*e+(e>=1?3:0);t.setXYZ(n[a],s[a*3]-o.x*l,s[a*3+1]-o.y*l,s[a*3+2]-o.z*l)}t.needsUpdate=!0}function ev(i){Q_(i,1),i.mesh.geometry.boundsTree?.refit()}function mm(i,e){if(!i||!i.id||wo.has(i.id))return!1;wo.set(i.id,i.year),dm(i.mesh,i.bid,!1);for(let t of e)t.forEachLoadedModel(n=>{let s=n.batchTable&&Bh(n.batchTable,pm),r=s?s.indexOf(i.id):-1;r>=0&&n.traverse(o=>o.isMesh&&o!==i.mesh&&dm(o,r,!0))});return!0}function tv(i){if(!wo.size||!i.batchTable)return;let e=Bh(i.batchTable,pm);if(e)for(let t=0;t<e.length;t++)wo.has(e[t])&&i.traverse(n=>n.isMesh&&dm(n,t,!0))}function iv(i){for(let e=Za.length-1;e>=0;e--){let t=Za[e];t.t+=i;let n=Math.min(1,t.t/t.dur);n>=1?(ev(t),Za.splice(e,1)):Q_(t,n*n)}}function nv(){for(let i of um){let e=i.mesh.geometry,t=e.attributes.position;if(t){for(let n=0;n<i.idx.length;n++)t.setXYZ(i.idx[n],i.orig[n*3],i.orig[n*3+1],i.orig[n*3+2]);t.needsUpdate=!0,i.mesh.userData.gone?.clear(),e.boundsTree?.refit()}}um.length=Za.length=0,wo.clear()}function sv(i,e=900){let t=new Float32Array(e*3),n=new Float32Array(e*3),s=new Float32Array(e),r=new Qe;r.setAttribute("position",new He(t,3));let o=new Ti(r,new Vi({color:13616302,size:.4,transparent:!0,opacity:.55,depthWrite:!1}));o.frustumCulled=!1,i.add(o);let a=0;for(let l=0;l<e;l++)t[l*3+1]=-9999;return{burst(l,c=140,h=7){for(let u=0;u<c;u++){let d=a=(a+1)%e;t.set([l.x+(Math.random()-.5)*h,l.y+(Math.random()-.3)*h,l.z+(Math.random()-.5)*h],d*3),n.set([(Math.random()-.5)*14,Math.random()*9,(Math.random()-.5)*14],d*3),s[d]=1.2+Math.random()*1.2}},update(l){for(let c=0;c<e;c++)if(!(s[c]<=0)){if(s[c]-=l,s[c]<=0){t[c*3+1]=-9999;continue}n[c*3+1]-=9*l;for(let h=0;h<3;h++)n[c*3+h]*=1-1.2*l,t[c*3+h]+=n[c*3+h]*l}r.attributes.position.needsUpdate=!0}}}var fm,xC,pm,wo,um,Za,K_,_C,hm,ja,J_,gm,rv=oe(()=>{pt();fm=1980,xC="bldg:yearOfConstruction",pm="gml_id",wo=new Map,um=[],Za=[],K_=new WeakMap,_C=new te,hm=new C,ja=new C;J_=i=>{let e=i.object.userData.gone,t=i.object.geometry.attributes._batchid;return!!(e&&t&&i.face&&e.has(t.getX(i.face.a)))};gm=()=>wo.size});var qC=Bv(()=>{pt();by();Jy();Qy();C_();im();rm();V_();G_();$_();rv();Qe.prototype.computeBoundsTree=m_;Qe.prototype.disposeBoundsTree=g_;Ve.prototype.raycast=p_;var Rt=C,je=i=>document.getElementById(i),Fi=(i,e,t)=>Math.max(e,Math.min(t,i)),cr=(i,e,t)=>i+(e-i)*t,Yn=.9,ov=28,bC=13,av=20,lv=17,MC=2,cv=140,SC=52,ym=14,hv=75,Mm=9,TC=16,wC=55,il=je("view"),Po=new Gr({canvas:il,antialias:!0});Po.setPixelRatio(Math.min(devicePixelRatio,1.5));var Gt=new tc;Gt.background=new ve(4018054);Gt.fog=new ec(4478346,.0012);var ut=new Bt(70,1,.3,1500);Gt.add(new yc(12899071,3814980,2.3));var vv=new Zr(16767156,1.7);vv.position.set(-.8,.55,.25);Gt.add(vv);var $h=U_(ar),nl=H_(R_),$i=nl.height,Je=Ya.map(i=>{let e=$h.toLocal(i.lat,i.lon);return{...i,x:e.x,z:e.z}}),Gh=new Xt;{let e=new Float32Array(4200);for(let s=0;s<1400;s++){let r=Math.random()*Math.PI*2,o=Math.asin(Math.random()*.97+.03);e.set([Math.cos(r)*Math.cos(o)*9e3,Math.sin(o)*9e3,Math.sin(r)*Math.cos(o)*9e3],s*3)}let t=new Qe;t.setAttribute("position",new He(e,3)),Gh.add(new Ti(t,new Vi({color:13621503,size:1.6,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.8})));let n=new Ve(new ca(260,32),new Ct({color:16774358,fog:!1}));n.position.set(-4500,5200,3200),n.lookAt(0,0,0),Gh.add(n),Gt.add(Gh)}var EC=new ve().setRGB(1.6,1.6,1.72),Sm=new URLSearchParams(location.search).has("hq"),Oh=Sm?4096:2048,bv=new Yr({color:9277340});bv.dispose=()=>{};var AC=Math.min(4,Po.capabilities.getMaxAnisotropy());async function CC(i){let e=i.image,t=e?.width||0,n=e?.height||0;if(i.userData.size=[Math.min(t,Oh),Math.min(n,Oh)],i.userData.orig=[t,n],Math.max(t,n)>Oh){let s=Oh/Math.max(t,n),r=await createImageBitmap(e,{resizeWidth:Math.round(t*s),resizeHeight:Math.round(n*s),resizeQuality:"high"});e.close?.(),i.image=e=r,i.needsUpdate=!0}return i.anisotropy=AC,i.onUpdate=()=>{i.image?.close?.(),i.onUpdate=null},i}var RC=()=>({name:"KYOTO_BUILDING_STYLE",async processTileModel(i){tv(i);let e=[];i.traverse(t=>t.isMesh&&e.push(t));for(let t of e){let n=t.material,s=n.map;t.material=s?new Ct({map:await CC(s),color:EC}):bv,n.dispose?.(),t.geometry.boundsTree||t.geometry.computeBoundsTree()}}}),sl=new Bt(80,1,1,1200);sl.rotation.x=-Math.PI/2;var PC=new Jc().setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.7/"),jn=P_.map((i,e,t)=>{let n=new yp(i.url);return n.registerPlugin(new Sp({dracoLoader:PC})),n.lruCache.minBytesSize=Sm?45e8:16e8,n.lruCache.maxBytesSize=Sm?6e9:22e8,n.loadSiblings=!1,n.errorTarget=110,e>0&&(n.lruCache=t[0].tiles.lruCache,n.downloadQueue=t[0].tiles.downloadQueue,n.parseQueue=t[0].tiles.parseQueue),n.registerPlugin(RC()),n.addEventListener("load-model",({scene:s})=>nl.addModel(s,n.group.matrixWorld)),n.addEventListener("dispose-model",({scene:s})=>{s.traverse(r=>r.isMesh&&r.geometry.disposeBoundsTree?.())}),n.addEventListener("load-error",s=>console.warn("tile load error",s)),$h.ecefToLocal.decompose(n.group.position,n.group.quaternion,n.group.scale),n.setCamera(ut),n.setCamera(sl),n.setResolution(sl,3e3,3e3),Gt.add(n.group),i.tiles=n,n}),Ja=new $r;Ja.firstHitOnly=!0;var IC=new Rt,Tm=[],xm=[];function LC(){Tm.length=0;for(let i of jn)for(let e of i.group.children)e.visible&&e.traverse(t=>{t.isMesh&&t.visible&&Tm.push(t)})}var DC=[[Je[Je.length-1],70],[Je.find(i=>i.name.includes("\u4E94\u91CD\u5854")),45]],Mv=i=>DC.some(([e,t])=>e&&Math.hypot(i.x-e.x,i.z-e.z)<t),_m=new Rt;function Zn(i,e,t){let n=null,s=0;_m.copy(i);for(let r=0;r<6;r++){Ja.set(_m,e),Ja.near=0,Ja.far=t-s,n=null;for(let o of Tm){xm.length=0,o.raycast(Ja,xm);let a=xm[0];a&&(!n||a.distance<n.distance)&&(n=a)}if(!n||!J_(n))break;s+=n.distance+.05,_m.copy(i).addScaledVector(e,s),n=null}return n&&(n.distance+=s,n.normal=n.face?IC.copy(n.face.normal).transformDirection(n.object.matrixWorld).clone():new Rt(0,1,0),n.normal.dot(e)>0&&n.normal.negate()),n}var Cm=new Rt(0,-1,0);function Sv(i,e){let t=Zn(new Rt(i,600,e),Cm,900);return Math.max($i(i,e),t?t.point.y:-1e9)}{let i=new Ve(new ca(3e4,48),new Ct({color:724765}));i.rotation.x=-Math.PI/2,i.position.y=-40,Gt.add(i)}var Ds=k_({scene:Gt,renderer:Po,frame:$h,groundY:$i}),Rm=1.7;Ds.mat.color.setScalar(Rm);var Tv=(i,e)=>Ds.isWater(i,e),Ps=new Xt;{let i=new Yr({color:2831704,emissive:1317427}),e=new Ve(new uc(.34,.75,4,10),i);e.position.y=.05;let t=new Ve(new qr(.27,12,10),i);t.position.y=.85;let n=new Ve(new Pn(.5,.09,.3),new Ct({color:16769712}));n.position.set(0,.88,-.14);let s=new Ve(new Pn(.22,.05,1),new Ct({color:16726843}));s.geometry.translate(0,0,.5),s.position.set(0,.62,.2),Ps.add(e,t,n,s),Ps.userData.scarf=s,Gt.add(Ps)}var Wh=sv(Gt),Ao=new Ve(new ha(.06,.06,1,6),new Ct({color:16771496,fog:!1}));Ao.visible=!1;Gt.add(Ao);var Qa=new Ve(new qr(.5,12,8),new Ct({color:16765024,fog:!1}));Qa.visible=!1;Gt.add(Qa);var Is=new Ve(new dc(.32,.45,24),new Ct({color:8257456,fog:!1,depthTest:!1,transparent:!0,opacity:.9,side:Zt}));Is.visible=!1;Is.renderOrder=5;Gt.add(Is);var Xh=new Ve(new ha(7,7,900,20,1,!0),new Ct({color:16767370,transparent:!0,opacity:.28,blending:Wl,depthWrite:!1,side:Zt,fog:!1}));Gt.add(Xh);var hr=null,P={mode:"loading",pos:new Rt,vel:new Rt,grounded:!1,inWater:!1,yaw:Math.PI/2,pitch:.12,rope:null,aim:null,wi:1,cp:0,time:0,started:!1,swings:0,maxSpeed:0,dist:0,towerTop:131,towerMeasured:!1,tut:0,trail:[],trailT:0,goalT:0,camDist:Mm,fp:!1,aimInfo:null,broken:0,airJumps:0,countT:0,splits:[],face:Math.PI/2,stuckT:0,blockT:0,tip:"",tipT:0},Ft={},Io=!1,qh=!1,rl=!1,Co=!1;function Pm(){try{il.requestPointerLock?.()?.catch?.(()=>{Co=!0}),il.requestPointerLock||(Co=!0)}catch{Co=!0}}function Kh(i){let e=Je[i];P.pos.set(e.x,Sv(e.x,e.z)+Yn+.2,e.z),P.vel.set(0,0,0),P.rope=null,P.grounded=!1;let t=Je[Math.min(i+1,Je.length-1)];P.yaw=P.face=Math.atan2(-(t.x-e.x),-(t.z-e.z)),P.pitch=.12}function Zh(){nv(),P.broken=0,Object.assign(P,{countT:3,splits:[],wi:1,cp:0,time:0,started:!1,swings:0,maxSpeed:0,dist:0,tut:0,trail:[],goalT:0,mode:"play"}),hr&&(Gt.remove(hr),hr.geometry.dispose(),hr=null),je("goal").style.display="none";for(let i in Ft)Ft[i]=!1;Ls("3"),gi(440,440,.12,"square",.06);for(let i of document.querySelectorAll(".lm"))i.style.display="none";Gt.fog.density=.0012,ut.far=1500,Ds.mat&&Ds.mat.color.setScalar(Rm),Kh(0)}var mi=null,el=null;function UC(){if(!mi)try{mi=new AudioContext;let i=mi.createBuffer(1,mi.sampleRate*2,mi.sampleRate),e=i.getChannelData(0);for(let s=0;s<e.length;s++)e[s]=Math.random()*2-1;let t=mi.createBufferSource();t.buffer=i,t.loop=!0;let n=mi.createBiquadFilter();n.type="bandpass",n.frequency.value=500,n.Q.value=.6,el=mi.createGain(),el.gain.value=0,t.connect(n).connect(el).connect(mi.destination),t.start()}catch{mi=null}}function gi(i,e,t,n="triangle",s=.12){if(!mi)return;let r=mi.createOscillator(),o=mi.createGain(),a=mi.currentTime;r.type=n,r.frequency.setValueAtTime(i,a),r.frequency.exponentialRampToValueAtTime(e,a+t),o.gain.setValueAtTime(s,a),o.gain.exponentialRampToValueAtTime(.001,a+t),r.connect(o).connect(mi.destination),r.start(a),r.stop(a+t)}addEventListener("keydown",i=>{if(!(i.target&&i.target.tagName==="INPUT")&&!i.repeat){if(i.code==="Enter"&&P.mode==="play"){Zh();return}Ft[i.code]=!0,i.code==="Space"&&(qh=!0,i.preventDefault()),i.code==="KeyV"&&P.mode==="play"&&(P.fp=!P.fp,Ls(P.fp?"\u4E00\u4EBA\u79F0\u8996\u70B9":"\u4E09\u4EBA\u79F0\u8996\u70B9")),i.code==="KeyR"&&(P.mode==="play"||P.mode==="goal")&&(P.mode==="goal"?Zh():(Kh(P.cp),Ls("\u3084\u308A\u76F4\u3057\uFF1A"+Je[P.cp].name))),i.code.startsWith("Arrow")&&i.preventDefault()}});addEventListener("keyup",i=>{Ft[i.code]=!1});addEventListener("blur",()=>{for(let i in Ft)Ft[i]=!1;Io=!1});il.addEventListener("mousedown",i=>{if(!(P.mode!=="play"&&P.mode!=="goal")){if(!rl&&!Co){Pm();return}i.button===0&&(Io=!0)}});addEventListener("mouseup",i=>{i.button===0&&(Io=!1)});addEventListener("contextmenu",i=>i.preventDefault());document.addEventListener("pointerlockchange",()=>{rl=document.pointerLockElement===il,rl||(Io=!1)});addEventListener("mousemove",i=>{!rl&&!Co||(P.yaw-=i.movementX*.0024,P.pitch=Fi(P.pitch+i.movementY*-.0024,-1.25,1.35))});je("pname").value=Xe.name;je("ppass").value=Xe.pass;var wm=(i,e)=>{let t=je("teamstatus");t.textContent=i,t.className=e?"bad":""};W_().then(i=>{i?wm("\u540C\u3058\u5408\u8A00\u8449\u3092\u5165\u308C\u305F\u4EBA\u304C\u540C\u3058\u30C1\u30FC\u30E0\u306B\u306A\u308A\u307E\u3059\u3002\u7A7A\u6B04\u306A\u3089\u30BD\u30ED\u3002"):(je("ppass").disabled=je("pteam").disabled=!0,wm("\u30C1\u30FC\u30E0\u6A5F\u80FD\u306F server.js \u3067\u8D77\u52D5\u3057\u305F\u3068\u304D\u3060\u3051\u4F7F\u3048\u307E\u3059\uFF08npm run serve\uFF09\u3002\u3044\u307E\u306F\u30BD\u30ED\u3067\u8A18\u9332\u3057\u307E\u3059\u3002"))});je("go").addEventListener("click",async()=>{UC();let i=je("pname").value.trim()||"\u540D\u7121\u3057\u306E\u5FCD\u8005",e=je("ppass").value.trim();if(e&&Xe.online){try{je("go").disabled=!0;let t=await X_(i,e,je("pteam").value.trim());Yh=t.created?`\u30C1\u30FC\u30E0\u300C${t.team.name}\u300D\u3092\u4F5C\u308A\u307E\u3057\u305F`:`\u30C1\u30FC\u30E0\u300C${t.team.name}\u300D\u306B\u53C2\u52A0\uFF08${t.team.members.length}\u4EBA\uFF09`}catch(t){wm(t.message,!0),je("go").disabled=!1;return}je("go").disabled=!1}else q_(i);je("start").style.display="none",Zh(),Pm()});var Yh="";je("again").addEventListener("click",()=>{Zh(),Pm()});var Em=0;function Ls(i){let e=je("toast");e.textContent=i,e.style.opacity=1,Em=2.2}var NC=["<kbd>W</kbd> \u3067\u524D\u3078\u8D70\u308B\u3002\u30DE\u30A6\u30B9\u3067\u898B\u56DE\u3059","\u5EFA\u7269\u306E<b>\u9AD8\u3044\u3068\u3053\u308D</b>\u3092\u753B\u9762\u4E2D\u592E\u306E\u5186\u3067\u72D9\u3044\u3001<b>\u5DE6\u30AF\u30EA\u30C3\u30AF\u9577\u62BC\u3057</b>\uFF08\u307E\u305F\u306F <kbd>F</kbd>\uFF09\u3067\u9264\u7E04","\u632F\u308A\u5B50\u306E\u3088\u3046\u306B\u632F\u3089\u308C\u308B\u3002<kbd>W</kbd> \u3067\u52A0\u901F\u3001\u524D\u306B\u632F\u308C\u305F\u3089<b>\u30AF\u30EA\u30C3\u30AF\u3092\u96E2\u3057\u3066</b>\u98DB\u3076","\u7A7A\u4E2D\u3067\u6B21\u306E\u5EFA\u7269\u3092\u72D9\u3063\u3066<b>\u639B\u3051\u66FF\u3048</b>\u3002<kbd>Space</kbd> \u3067\u7E04\u3092\u5DFB\u304D\u53D6\u308B\u3068\u4E00\u6C17\u306B\u8FD1\u3065\u3051\u308B",""],zh=new Rt;function wv(i,e,t){zh.set(i,e,t).project(ut);let n=zh.z>1,s=(zh.x*.5+.5)*innerWidth,r=(-zh.y*.5+.5)*innerHeight;return n&&(s=innerWidth-s,r=innerHeight*2),{sx:s,sy:r,behind:n}}function BC(i){let e=P.vel.length();je("spd").textContent=Math.round(e*3.6),je("speedbar").firstElementChild.style.width=Fi(e/60,0,1)*100+"%",je("topright").innerHTML=`<b>${Xn(P.time)}</b><br>\u81EA\u5DF1\u30D9\u30B9\u30C8 ${Xn(Xe.best)}`+(Xe.team?`<br>\u30C1\u30FC\u30E0\u300C${Xe.team.name}\u300D ${Xn(Xe.team.best)}`:"");let t=Je[P.wi],n=P.mode==="play";for(let u of["topleft","speed","reticle","aiminfo","wp","hint","topright"])je(u).style.visibility=n?"visible":"hidden";if(!n)return;let s=Math.hypot(t.x-P.pos.x,t.z-P.pos.z);je("topleft").innerHTML=`\u6B21\u306E\u76EE\u7684\u5730 ${P.wi}/${Je.length-1}<br><b>${t.name}</b><br>\u3042\u3068 ${Math.round(s)} m`;let r=wv(t.x,P.pos.y+25+s*.06,t.z),o=je("wp");o.style.left=Fi(r.sx,70,innerWidth-70)+"px",o.style.top=Fi(r.sy,90,innerHeight-120)+"px",o.textContent=`${t.name}  ${Math.round(s)}m`,je("reticle").className="hud "+(P.rope?"on":P.aim?"ok":"");let a=!P.rope&&P.aim?P.aimInfo:null,l=je("aiminfo");a&&a.fragile&&Mv(P.aim)&&(a.fragile=!1);let c=!a||!a.year?"":a.fragile?`\u7BC9${a.year}\u5E74\u30FB\u3082\u308D\u3044\uFF08\u52E2\u3044\u3088\u304F\u7A81\u3063\u8FBC\u3080\u3068\u5D29\u308C\u308B\uFF09`:`\u7BC9${a.year}\u5E74`;l.textContent!==c&&(l.textContent=c,l.className="hud"+(a&&a.fragile?" old":""));let h=NC[P.tut];P.blockT=(Ft.KeyW||Ft.KeyA||Ft.KeyS||Ft.KeyD)&&!P.rope&&e<2?P.blockT+i:0,P.inWater?h="\u5DDD\u306E\u4E2D\u306F\u6D41\u308C\u304C\u91CD\u3044\u3002\u5CB8\u3078\u4E0A\u304C\u308B\u304B\u3001\u5EFA\u7269\u306B\u9264\u7E04\u3092\u639B\u3051\u3066\u629C\u3051\u51FA\u305D\u3046":P.blockT>1.2?h="\u884C\u304D\u6B62\u307E\u308A\uFF1F \u58C1\u306E<b>\u4E0A\u306E\u307B\u3046</b>\u3092\u72D9\u3063\u3066\u9264\u7E04\u3092\u639B\u3051\u3001<kbd>Space</kbd> \u3067\u5DFB\u304D\u53D6\u3063\u3066\u4E57\u308A\u8D8A\u3048\u3088\u3046\uFF08<kbd>R</kbd> \u3067\u901A\u904E\u5730\u70B9\u306B\u623B\u308B\uFF09":t.goal&&s<260?h=P.pos.y<P.towerTop?"\u5854\u306E<b>\u4E0A\u306E\u307B\u3046</b>\u306B\u9264\u7E04\u3092\u639B\u3051\u3001<kbd>Space</kbd> \u3067\u5DFB\u304D\u53D6\u3063\u3066<b>\u9802\u70B9\u3088\u308A\u9AD8\u304F</b>\u8DF3\u3073\u4E0A\u304C\u308C\uFF01":"":P.tipT>0&&P.tip?(h=P.tip,P.tipT-=i):!rl&&!Co&&P.tut>0&&(h="\u753B\u9762\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u30DE\u30A6\u30B9\u3067\u72D9\u3048\u307E\u3059"),je("hint").innerHTML!==h&&(je("hint").innerHTML=h),Em>0&&(Em-=i)<=0&&(je("toast").style.opacity=0)}var ji=new Rt,Zi=new Rt,tl=new Rt,uv=new Rt,Ev=[];for(let[i,e]of[[2.2,6],[4.5,8],[7.5,10]])for(let t=0;t<e;t++){let n=t/e*Math.PI*2;Ev.push([Math.cos(n)*i*Math.PI/180,Math.sin(n)*i*Math.PI/180])}function dv(i){let e=Zn(ut.position,i,cv+P.camDist+5);return!e||e.distance<P.camDist*.6||e.point.distanceTo(P.pos)>cv||e.point.distanceTo(P.pos)<4?null:(jh=e,e.point.clone())}var FC=0,jh=null;function OC(){jh=null,ut.getWorldDirection(ji);let i=dv(ji);if(!i&&FC++%2===0){tl.crossVectors(ji,ut.up).normalize(),uv.crossVectors(tl,ji);for(let[e,t]of Ev)if(Zi.copy(ji).addScaledVector(tl,e).addScaledVector(uv,t).normalize(),i=dv(Zi))break}else i||(i=P.aim);jh?P.aimInfo=Fh(jh):i||(P.aimInfo=null),P.aim=i}function zC(){return P.aim?(P.rope={anchor:P.aim.clone(),len:P.aim.distanceTo(P.pos),minD:1e9,gid:P.aimInfo?.id},P.stuckT=0,P.airJumps=0,P.grounded&&(P.vel.y=Math.max(P.vel.y,9),P.grounded=!1),P.swings++,gi(900,300,.12,"sawtooth",.06),setTimeout(()=>gi(220,180,.08,"square",.07),90),P.tut===1&&(P.tut=2),P.tut===3&&P.swings>=4&&(P.tut=4),!0):(je("reticle").className="hud ng",gi(160,90,.12,"square",.05),!1)}function kh(i=!0){if(P.rope){if(P.rope=null,i&&!P.grounded){let e=Math.hypot(P.vel.x,P.vel.z);e>4&&(P.vel.x+=P.vel.x/e*3,P.vel.z+=P.vel.z/e*3),P.vel.y>-6&&(P.vel.y+=10)}gi(500,900,.1,"sine",.05),P.tut===2&&(P.tut=3)}}var gn=new Rt,vm=new Rt,$a=new Rt,jt=new Rt,fv=!1;function Av(i){let e=(Ft.KeyD?1:0)-(Ft.KeyA?1:0),t=(Ft.KeyW?1:0)-(Ft.KeyS?1:0);vm.set(-Math.sin(P.yaw),0,-Math.cos(P.yaw)),gn.set(vm.x*t+Math.cos(P.yaw)*e,0,vm.z*t-Math.sin(P.yaw)*e);let n=gn.lengthSq()>0;n&&(gn.normalize(),P.started||(P.started=!0),P.tut===0&&(P.tut=1));let s=Io||!!Ft.KeyF;s&&!fv&&zC(),!s&&P.rope&&kh(),fv=s;let r=P.vel;if(P.grounded){let p=P.inWater?6:bC;if(Math.hypot(r.x,r.z)>p+.5){let g=Math.max(0,1-(P.inWater?6:1.6)*i);r.x*=g,r.z*=g,n&&(r.x+=gn.x*20*i,r.z+=gn.z*20*i)}else if(n){let g=gn.x*p-r.x,m=gn.z*p-r.z,v=Math.hypot(g,m),x=Math.min(v,80*i);v>0&&(r.x+=g/v*x,r.z+=m/v*x)}else{let g=Math.max(0,1-10*i);r.x*=g,r.z*=g}r.y<0&&(r.y=0),P.airJumps=0,qh&&!P.rope&&(r.y=P.inWater?av*.6:av,P.grounded=!1,gi(300,520,.08,"sine",.05))}else{if(n){let p=P.rope?15:9;r.x+=gn.x*p*i,r.z+=gn.z*p*i}r.y-=ov*i,qh&&!P.rope&&P.airJumps<MC&&(P.airJumps++,r.y=Math.max(r.y+lv*.5,lv),Wh.burst(P.pos,14,1.5),gi(420,760,.1,"sine",.05))}if(qh=!1,P.rope){jt.subVectors(P.rope.anchor,P.pos);let p=jt.length();if(jt.multiplyScalar(1/p),Ft.Space){let y=r.dot(jt);r.addScaledVector(jt,-y).multiplyScalar(Math.max(0,1-5*i)).addScaledVector(jt,y+SC*i),r.y+=ov*.5*i,P.rope.len=Math.min(P.rope.len,p),p<P.rope.minD-.02?(P.rope.minD=p,P.stuckT=0):P.stuckT+=i,p<4?(kh(!1),r.y=Math.max(r.y,0)+15):P.stuckT>.45&&kh(!1)}else{let y=Math.max(6,P.rope.anchor.y-$i(P.pos.x,P.pos.z)-4);if(P.rope.len>y&&(P.rope.len=Math.max(y,P.rope.len-ym*i),p>=P.rope.len)){let m=r.dot(jt);m<ym&&r.addScaledVector(jt,Math.min(ym-m,60*i))}let g=r.length();g>3&&g<42&&r.multiplyScalar(1+5*i/g)}}let o=r.length();o>hv&&r.multiplyScalar(hv/o);let a=!1;$a.copy(r).multiplyScalar(i);let l=$a.length();if(l>1e-6){ji.copy($a).multiplyScalar(1/l);let p=Zn(P.pos,ji,l+Yn),y=p&&Math.abs(p.normal.y)<.5&&-r.dot(p.normal)>=TC?Fh(p):null;if(y&&y.fragile&&!Mv(p.point)&&mm(y,jn))P.pos.add($a),r.multiplyScalar(.8),P.broken=gm(),Wh.burst(p.point),Wh.burst(Zi.copy(p.point).addScaledVector(ji,6)),Ls(`\u7BC9${y.year}\u5E74\u306E\u5EFA\u7269\u304C\u5D29\u308C\u305F`),gi(110,40,.5,"sawtooth",.12),gi(70,30,.7,"square",.08),P.rope&&P.rope.gid===y.id&&kh(!1);else if(p){P.pos.copy(p.point).addScaledVector(p.normal,Yn+.01);let g=r.dot(p.normal);g<0&&r.addScaledVector(p.normal,-g),p.normal.y>.6?a=!0:P.grounded&&n&&!P.rope&&Math.abs(p.normal.y)<.4&&!Zn(Zi.copy(P.pos).addScaledVector(Ro,1.9),gn,2.4)&&(r.y=13)}else P.pos.add($a)}if(P.rope){jt.subVectors(P.rope.anchor,P.pos);let p=jt.length();if(p>P.rope.len){jt.multiplyScalar(1/p),P.pos.addScaledVector(jt,p-P.rope.len);let y=r.dot(jt);y<0&&r.addScaledVector(jt,-y)}}let c=$i(P.pos.x,P.pos.z),h=!1;if(P.pos.y<=c+Yn)P.pos.y=c+Yn,r.y<0&&(r.y=0),a=h=!0;else if(!a&&r.y<=.5){let p=Zn(P.pos,Cm,Yn+.25);p&&p.normal.y>.5&&(P.pos.y=p.point.y+Yn,a=!0)}P.grounded=a;let u=P.inWater;P.inWater=h&&Tv(P.pos.x,P.pos.z),P.inWater&&!u&&(gi(700,120,.3,"sawtooth",.05),Ls("\u3056\u3076\u3093\uFF01 \u5DDD\u306B\u843D\u3061\u305F")),P.started&&(P.time+=i),P.maxSpeed=Math.max(P.maxSpeed,r.length()),P.dist+=l;let d=Je[P.wi],f=Math.hypot(d.x-P.pos.x,d.z-P.pos.z);if(!d.goal&&f<wC){P.cp=P.wi,P.wi++,P.splits.push(P.time);let p=Xe.bestSplits&&Xe.bestSplits[P.splits.length-1];Ls(`${d.name}  ${Xn(P.time)}`+(p!=null?`\uFF08\u30D9\u30B9\u30C8\u6BD4 ${Nh(P.time-p)}\uFF09`:"")),P.tip=d.tip||"",P.tipT=9,gi(660,660,.12,"sine",.08),setTimeout(()=>gi(990,990,.2,"sine",.08),110)}else d.goal&&f<90&&P.pos.y>P.towerTop+.3&&kC()}function Cv(){let i=Je[Je.length-1],e=new Rt,t=new Rt,n=new Set,s=-1e9;for(let r=-5;r<=5;r++)for(let o=-5;o<=5;o++){let a=Zn(e.set(i.x+r*5,600,i.z+o*5),Cm,900);a&&(n.add(a.object),s=Math.max(s,a.point.y))}for(let r of n){let o=r.geometry.attributes.position;for(let a=0;a<o.count;a++)t.fromBufferAttribute(o,a).applyMatrix4(r.matrixWorld),t.y>s&&Math.hypot(t.x-i.x,t.z-i.z)<30&&(s=t.y)}s>$i(i.x,i.z)+60&&(P.towerTop=s,P.towerMeasured=!0)}function kC(){P.mode="goal",P.goalT=0,P.rope=null,document.exitPointerLock?.(),[523,659,784,1047].forEach((s,r)=>setTimeout(()=>gi(s,s,.35,"triangle",.1),r*130));let i=Math.round(P.time*10)/10,e=Y_(i,P.splits),t=e.improved?e.prev==null?"\u521D\u8A18\u9332\uFF01":`\u81EA\u5DF1\u30D9\u30B9\u30C8\u66F4\u65B0\uFF01\uFF08${Nh(i-e.prev)}\uFF09`:`\u81EA\u5DF1\u30D9\u30B9\u30C8 ${Xn(Xe.best)}\uFF08${Nh(i-Xe.best)}\uFF09`;je("boards").innerHTML=Xe.pass&&Xe.online?"<p>\u30C1\u30FC\u30E0\u306B\u8A18\u9332\u3092\u9001\u4FE1\u4E2D\u2026</p>":"",j_({time:i,broken:P.broken,swings:P.swings}).then(s=>{s&&(je("boards").innerHTML=Z_())}).catch(s=>{je("boards").innerHTML=`<p class="bad">\u30C1\u30FC\u30E0\u3078\u306E\u9001\u4FE1\u306B\u5931\u6557\uFF1A${s.message}</p>`}),je("result").innerHTML=`<tr><td>\u30BF\u30A4\u30E0</td><td><b class="big">${Xn(i)}</b><br>${t}</td></tr><tr><td>\u99C6\u3051\u629C\u3051\u305F\u8DDD\u96E2</td><td>${(P.dist/1e3).toFixed(2)} km</td></tr><tr><td>\u9264\u7E04\u306E\u639B\u3051\u66FF\u3048</td><td>${P.swings} \u56DE</td></tr><tr><td>\u5D29\u3057\u305F\u53E4\u3044\u5EFA\u7269</td><td>${P.broken} \u68DF\uFF08${fm}\u5E74\u4EE5\u524D\u306E\u7BC9\uFF09</td></tr><tr><td>\u6700\u9AD8\u901F\u5EA6</td><td>${Math.round(P.maxSpeed*3.6)} km/h</td></tr><tr><td>\u4EAC\u90FD\u30BF\u30EF\u30FC\u306E\u9AD8\u3055</td><td>\u5730\u4E0A \u7D04${Math.round(P.towerTop-$i(0,0))} m\uFF08PLATEAU \u306E\u5EFA\u7269\u30C7\u30FC\u30BF\u3088\u308A\uFF09</td></tr>`,je("goal").style.display="block";let n=P.trail.slice();if((!n.length||n[n.length-1].distanceTo(P.pos)>.5)&&n.push(P.pos.clone()),n.length>3){let s=new la(n);hr=new Ve(new fc(s,Math.min(1500,n.length*3),4,6),new Ct({color:16730955,fog:!1,depthTest:!1,transparent:!0,opacity:.85})),hr.renderOrder=8,Gt.add(hr)}}var Eo=new Rt,qn=new Rt,pv=new Rt,VC=new Kt,Ro=new Rt(0,1,0),Vh=new Rt((Math.min(...Je.map(i=>i.x))+Math.max(...Je.map(i=>i.x)))/2,0,(Math.min(...Je.map(i=>i.z))+Math.max(...Je.map(i=>i.z)))/2),HC=Je.map(i=>{let e=document.createElement("div");return e.className="hud lm",e.textContent=i.name,je("labels").appendChild(e),e});function GC(i){let e=Math.cos(P.pitch);if(ji.set(-Math.sin(P.yaw)*e,Math.sin(P.pitch),-Math.cos(P.yaw)*e),P.fp)Eo.copy(P.pos).addScaledVector(Ro,.7),P.camDist=0,qn.copy(Eo);else{Eo.copy(P.pos).addScaledVector(Ro,1.5).add(tl.set(Math.cos(P.yaw),0,-Math.sin(P.yaw)).multiplyScalar(.9)),Zi.copy(ji).negate();let n=P.mode==="loading"?null:Zn(Eo,Zi,Mm+.5),s=n?Math.max(1.2,n.distance-.5):Mm;P.camDist=s<P.camDist?s:cr(P.camDist,s,1-Math.exp(-6*i)),qn.copy(Eo).addScaledVector(ji,-P.camDist),qn.y=Math.max(qn.y,$i(qn.x,qn.z)+.4)}if(P.mode==="goal"){P.goalT+=i;let n=Fi(P.goalT/6,0,1),s=n*n*(3-2*n),r=P.yaw+P.goalT*.04,o=P.towerTop,a=cr(60,1500,s),l=cr(o+25,o+1150,s);Zi.set(Vh.x*s-Math.sin(r)*-a,l,Vh.z*s-Math.cos(r)*-a),pv.set(Vh.x*s,cr(o*.6,0,s),Vh.z*s);let c=Fi(P.goalT/1.5,0,1);ut.position.lerpVectors(qn,Zi,c),ut.lookAt(Eo.lerp(pv,c)),ut.fov=cr(ut.fov,55,.05),ut.far=14e3,Gt.fog.density=cr(.0012,16e-5,s),Ds.mat&&Ds.mat.color.setScalar(Rm+s*1.1),Je.forEach((h,u)=>{let d=wv(h.x,u===Je.length-1?o:$i(h.x,h.z)+60,h.z),f=HC[u];f.style.display=!d.behind&&n>.3?"block":"none",f.style.left=d.sx+"px",f.style.top=d.sy+"px"})}else ut.position.copy(qn),ut.lookAt(qn.add(ji)),ut.fov=cr(ut.fov,70+Fi(P.vel.length()/60,0,1)*18,1-Math.exp(-4*i));let t=window.__game.debugCam;t&&(ut.position.set(t.x,t.y,t.z),ut.up.set(0,0,-1),ut.lookAt(t.x,0,t.z),ut.up.set(0,1,0),ut.far=14e3),ut.updateProjectionMatrix(),ut.updateMatrixWorld(),Gh.position.copy(ut.position)}function WC(i,e){Ps.position.copy(P.pos).y-=Yn-.55,Ps.visible=!(P.fp&&P.mode!=="goal");let t=Math.hypot(P.vel.x,P.vel.z);if(t>1.5){let o=Math.atan2(-P.vel.x,-P.vel.z)-P.face;o=Math.atan2(Math.sin(o),Math.cos(o)),P.face+=o*(1-Math.exp(-10*i))}Ps.rotation.set(0,P.face,0),Ps.rotateX(P.grounded?-Fi(t/40,0,.35):Fi(-P.vel.y/60,-.6,.6)-.25);let n=Ps.userData.scarf;if(n.scale.z=.5+Fi(P.vel.length()/18,0,2.6),n.rotation.x=Math.sin(e*14)*.12,n.rotation.y=Math.sin(e*9)*.15,P.rope){Zi.copy(P.pos).addScaledVector(Ro,.5),P.fp&&Zi.addScaledVector(tl.set(Math.cos(P.yaw),0,-Math.sin(P.yaw)),.35).addScaledVector(Ro,-.1),jt.subVectors(P.rope.anchor,Zi);let r=jt.length();Ao.position.copy(Zi).addScaledVector(jt,.5),Ao.quaternion.copy(VC.setFromUnitVectors(Ro,jt.multiplyScalar(1/r))),Ao.scale.set(1,r,1),Qa.position.copy(P.rope.anchor),Qa.scale.setScalar(1+Math.sin(e*12)*.15)}Ao.visible=Qa.visible=!!P.rope,Is.visible=P.mode==="play"&&!P.rope&&!!P.aim,Is.visible&&(Is.position.copy(P.aim),Is.quaternion.copy(ut.quaternion),Is.scale.setScalar(Fi(P.aim.distanceTo(ut.position)/18,.8,8)));let s=Je[P.wi];Xh.visible=P.mode==="play",Xh.position.set(s.x,$i(s.x,s.z)+450,s.z),Xh.material.opacity=.22+Math.sin(e*3)*.06,el&&(el.gain.value=P.mode==="play"?Fi((P.vel.length()-8)/60,0,1)*.16:0)}function mv(){let i=0,e=new Rt(Je[0].x,$i(Je[0].x,Je[0].z)+2,Je[0].z),t=new Rt;for(let n=0;n<12;n++){let s=n/12*Math.PI*2;Zn(e,t.set(Math.cos(s)*.95,.3,Math.sin(s)*.95).normalize(),120)&&i++}return i}function XC(){let i=Je[P.mode==="goal"?Je.length-1:P.wi],e=i.x-P.pos.x,t=i.z-P.pos.z,n=Math.hypot(e,t)||1,s=Math.min(n,320);sl.position.set(P.pos.x+e/n*s,330,P.pos.z+t/n*s),sl.updateMatrixWorld()}function Rv(){if(!(!innerWidth||!innerHeight)){Po.setSize(innerWidth,innerHeight,!1),ut.aspect=innerWidth/innerHeight,ut.updateProjectionMatrix();for(let i of jn)i.setResolutionFromRenderer(ut,Po)}}addEventListener("resize",Rv);Rv();var Pv=performance.now(),gv=0,yv=0,xv=Pv,Ka=0,Hh=0,bm=0,_v=0,Am=0;for(let i of jn)i.addEventListener("load-root-tileset",function e(){Am++,i.removeEventListener("load-root-tileset",e)});function Iv(i){requestAnimationFrame(Iv),Lv(i)}function Lv(i){let e=Math.min(.1,(i-xv)/1e3);xv=i;let t=i/1e3;if(P.mode==="loading"){Hh=(i-Pv)/1e3;let n=0,s=0;for(let l of jn)n+=l.stats.downloading+l.stats.parsing+l.stats.queued,s+=l.stats.loaded;let r=Am>=jn.length,o=r?s/Math.max(1,s+n):0;je("bar").firstElementChild.style.width=Math.round(o*100)+"%",bm=r&&n===0?bm+e:0,(r?bm>.6||Hh>12&&mv()>=5||Hh>90:Hh>45)&&(P.mode="ready",Kh(0),je("go").disabled=!1,je("go").textContent="\u51FA\u767A\u3059\u308B",je("loadmsg").textContent=Am>=jn.length&&mv()>=5?"\u6E96\u5099\u5B8C\u4E86\u3002":"\u5EFA\u7269\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u304C\u9045\u308C\u3066\u3044\u307E\u3059\uFF08\u901A\u4FE1\u74B0\u5883\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\uFF09\u3002\u51FA\u767A\u306F\u3067\u304D\u307E\u3059\u3002")}if(P.mode==="play"){let n=(Ft.ArrowLeft?1:0)-(Ft.ArrowRight?1:0),s=(Ft.ArrowUp?1:0)-(Ft.ArrowDown?1:0);if(P.yaw+=n*2.2*e,P.pitch=Fi(P.pitch+s*1.6*e,-1.25,1.35),P.countT>0){let o=Math.ceil(P.countT);P.countT-=e;let a=Math.ceil(P.countT);a!==o&&(a>0?(Ls(String(a)),gi(440,440,.12,"square",.06)):(Ls(Yh?"GO!  "+Yh:"GO!"),Yh="",gi(880,880,.35,"square",.07),P.started=!0,Ka=0))}else for(Ka=Math.min(Ka+e,.1);Ka>=1/120&&(Av(1/120),Ka-=1/120,P.mode==="play"););P.trailT+=e;let r=P.trail[P.trail.length-1];P.trailT>.25&&P.started&&(!r||r.distanceTo(P.pos)>3)&&(P.trailT=0,P.trail.push(P.pos.clone())),Je[P.wi].goal&&(_v+=e)>1&&Math.hypot(P.pos.x,P.pos.z)<700&&(_v=0,Cv())}else P.mode==="goal"&&(P.vel.multiplyScalar(Math.max(0,1-2*e)),P.pos.addScaledVector(P.vel,e));GC(e),XC();for(let n of jn)n.update();LC(),P.mode==="play"?OC():P.aim=null,iv(e),Wh.update(e),nl.version!==gv&&i-yv>700&&(gv=nl.version,yv=i,Ds.refreshHeights()),WC(e,t),BC(e),Po.render(Gt,ut)}P.pos.set(Je[0].x,$i(Je[0].x,Je[0].z)+Yn,Je[0].z);P.yaw=P.face=Math.atan2(-(Je[1].x-Je[0].x),-(Je[1].z-Je[0].z));requestAnimationFrame(Iv);window.__game={terrain:nl,fetchMvt:am,infoAt:Fh,breakBuilding:mm,brokenCount:gm,S:P,route:Je,frame:$h,castCity:Zn,surfaceY:Sv,groundY:$i,isWater:Tv,tilesets:jn,keys:Ft,camera:ut,ground:Ds,measureTower:Cv,spawnAt:Kh,setFire:i=>{Io=i},step:Av,runFrame:Lv}});qC();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
