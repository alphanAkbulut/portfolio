/*! Alphan Akbulut, İstanbul 2026. © 2026 Alphan Akbulut. Tüm hakları saklıdır. Design and code by Alphan Akbulut. All rights reserved. */
"use strict";const RM=matchMedia("(prefers-reduced-motion: reduce)").matches;for(const e of["gesturestart","gesturechange","gestureend"])document.addEventListener(e,t=>t.preventDefault(),{passive:!1});document.addEventListener("touchmove",e=>{e.touches&&e.touches.length>1&&e.preventDefault()},{passive:!1});let lastTap=0;document.addEventListener("touchend",e=>{const t=Date.now();t-lastTap<320&&!e.target.closest("a")&&e.preventDefault(),lastTap=t},{passive:!1});const PUFV=+(window.__puf||12),RENDER_BODY=`float h21(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
vec2 h22(vec2 p){float n=h21(p);return vec2(n,h21(p+n+17.31));}
float vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h21(i),h21(i+vec2(1.,0.)),f.x),mix(h21(i+vec2(0.,1.)),h21(i+vec2(1.,1.)),f.x),f.y);}
vec2 gh(vec2 p){float a=h21(p)*6.2831853;return vec2(cos(a),sin(a));}
float gn(vec2 p){vec2 i=floor(p),f=fract(p);vec2 u=f*f*f*(f*(f*6.-15.)+10.);
 return mix(mix(dot(gh(i),f),dot(gh(i+vec2(1.,0.)),f-vec2(1.,0.)),u.x),mix(dot(gh(i+vec2(0.,1.)),f-vec2(0.,1.)),dot(gh(i+vec2(1.,1.)),f-vec2(1.,1.)),u.x),u.y);}
float fbm(vec2 p){float s=0.,a=.55;mat2 R=mat2(.8,-.6,.6,.8);for(int i=0;i<4;i++){s+=a*gn(p);p=R*p*2.03+11.7;a*=.5;}return s;}
void vor2(vec2 p,out float f1,out float f2,out vec2 rv,out float rnd){vec2 i=floor(p),f=fract(p);f1=9.;f2=9.;rv=vec2(0.);rnd=0.;
 for(int y=-1;y<=1;y++)for(int x=-1;x<=1;x++){vec2 g=vec2(float(x),float(y));vec2 o=.5+.42*sin(6.2831*h22(i+g)+vec2(0.,1.7));vec2 r=g+o-f;float d=dot(r,r);
  if(d<f1){f2=f1;f1=d;rv=r;rnd=h21(i+g+3.7);}else if(d<f2)f2=d;}f1=sqrt(f1);f2=sqrt(f2);}
vec4 cub(float v){vec4 n=vec4(1.,2.,3.,4.)-v;vec4 s=n*n*n;float x=s.x;float y=s.y-4.*s.x;float z=s.z-4.*s.y+6.*s.x;float w=6.-x-y-z;return vec4(x,y,z,w)*(1./6.);}
vec4 texBic(sampler2D t,vec2 uv,vec2 sz){uv=uv*sz-.5;vec2 fxy=fract(uv);uv-=fxy;vec4 xc=cub(fxy.x),yc=cub(fxy.y);vec4 c=uv.xxyy+vec2(-.5,1.5).xyxy;vec4 s=vec4(xc.xz+xc.yw,yc.xz+yc.yw);vec4 off=c+vec4(xc.yw,yc.yw)/s;off/=sz.xxyy;
 vec4 s0=texture(t,off.xz),s1=texture(t,off.yz),s2=texture(t,off.xw),s3=texture(t,off.yw);float sx=s.x/(s.x+s.y),sy=s.z/(s.z+s.w);return mix(mix(s3,s2,sx),mix(s1,s0,sx),sy);}
/* karanl\u0131k oda ortam\u0131: lamban\u0131n yans\u0131mas\u0131 ayr\u0131 hesaplan\u0131r, burada sadece s\xF6n\xFCk bir tavan ve zemin */
vec3 env(vec3 r){float u=r.y*.5+.5;vec3 c=mix(vec3(.02,.02,.022),vec3(.30,.29,.27),smoothstep(.25,1.,u));
 c+=vec3(.55,.52,.46)*smoothstep(.45,.0,length((r.xy-vec2(.62,.10))*vec2(2.2,.8)))*.5;return c;}
vec3 refl(vec3 n){return vec3(2.*n.z*n.x,2.*n.z*n.y,2.*n.z*n.z-1.);}
float t_h21(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
vec2 t_h22(vec2 p){float n=t_h21(p);return vec2(n,t_h21(p+n+17.31));}
float t_vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(t_h21(i),t_h21(i+vec2(1.,0.)),f.x),mix(t_h21(i+vec2(0.,1.)),t_h21(i+vec2(1.,1.)),f.x),f.y);}
/* bekleme efekti: rev=g\xF6r\xFCn\xFCrl\xFCk, hm=\u015Fi\u015Fkinlik \xE7arpan\u0131, ha=ek y\xFCkseklik (px), film=k\xF6p\xFCk filmi, fb=kabarc\u0131k i\xE7 koordinat\u0131 */
void tease(vec2 xy,vec2 o,float t,float mode,out float rev,out float hm,out float ha,out float film,out vec3 fb){
 float dT=length(xy-o);rev=0.;hm=0.;ha=0.;film=0.;fb=vec3(0.);
 float df=smoothstep(5.5,7.7,t+(t_vn(xy/230.)-.5)*1.3);                 /* yumu\u015Fak, d\xFCzensiz s\xF6n\xFCm */
 if(mode<.5){
  float ang=atan(xy.y-o.y,xy.x-o.x);float fr=dT+sin(ang*3.+t*1.2)*15.-t*520.;
  rev=1.-smoothstep(-90.,90.,fr);hm=smoothstep(0.,320.,-fr);
  float env=exp(-max(-fr,0.)/300.)*smoothstep(160.,-20.,fr)*(1.-smoothstep(3.4,4.8,t));
  ha=sin(fr*.075-t*5.)*env*9.;
 }else if(mode<1.5){
  /* m\u0131s\u0131r: yuvarlak tanecikler \u015Fi\u015Fer, ta\u015Far, geri oturur, birle\u015Fir */
  vec2 g=xy/58.;vec2 i=floor(g);float cov=0.,bump=0.;
  for(int y=-1;y<=1;y++)for(int x=-1;x<=1;x++){vec2 c=i+vec2(float(x),float(y));vec2 cc=c+.5+(t_h22(c)-.5)*.55;float id=t_h21(c+9.1);
   float tp=.15+id*2.3+dT/1600.*.6;float e=clamp((t-tp)/.6,0.,1.);if(e<=0.)continue;
   float r=(1.-pow(1.-e,3.))*1.05+.28*sin(e*3.1416)*(1.-e*.4);float d=length(g-cc);
   cov=max(cov,1.-smoothstep(r-.22,r,d));
   float dm=max(0.,1.-d*d/(r*r+1e-4));bump=max(bump,dm*(.30+.70*sin(e*3.1416))*(1.-.6*e));}
  rev=cov;hm=cov;ha=bump*20.;
 }else if(mode<2.5){
  /* k\xF6p\xFCk: kabarc\u0131k kubbeleri belirir, kabar\u0131r, patlar; geride cam kal\u0131r */
  vec2 g=xy/24.+vec2(0.,-t*.12);vec2 i=floor(g);float cov=0.,dome=0.,glass=0.;
  for(int y=-1;y<=1;y++)for(int x=-1;x<=1;x++){vec2 c=i+vec2(float(x),float(y));vec2 cc=c+.5+(t_h22(c)-.5)*.6;float id=t_h21(c+3.3);
   float tb=.1+id*.9+dT/1500.*1.5;float e=clamp((t-tb)/.5,0.,1.);if(e<=0.)continue;
   float pe=smoothstep(tb+1.1,tb+1.9,t);float r=e*(.58+.18*id);float d=length(g-cc);
   float inn=1.-smoothstep(r-.07,r,d);cov=max(cov,inn);glass=max(glass,pe*smoothstep(1.2,.2,d));
   float dm=sqrt(max(0.,1.-d*d/(r*r+1e-4)));if(dm*(1.-pe)>dome){dome=dm*(1.-pe);fb=vec3(g-cc,id);}}
  rev=max(cov*(1.-.0),glass);rev=max(rev,smoothstep(2.6,3.6,t-dT/1500.*1.5));
  hm=max(glass,smoothstep(2.4,3.6,t-dT/1500.*1.5))*.9+cov*.1;ha=dome*13.;film=dome;
 }else if(mode<3.5){
  /* veri paketi: \u0131\u015F\u0131k nabz\u0131 A'dan N'ye ge\xE7er, ge\xE7ti\u011Fi harf \u015Fi\u015Fer ve cama d\xF6ner, arkas\u0131nda titre\u015Fim s\xF6ner */
  float ps=70.+(t-.3)*520.;float dx=xy.x-ps;
  float pulse=exp(-dx*dx/(70.*70.))*step(.3,t)*(1.-smoothstep(3.0,3.8,t));
  float lit=smoothstep(40.,-40.,dx)*step(.3,t);
  float wob=sin(dx*.05-t*9.)*exp(-max(-dx,0.)/220.)*lit;
  rev=max(lit,pulse);hm=lit*.85+pulse*.35;ha=pulse*24.+wob*4.;
 }else{
  /* kristalle\u015Fme: cephe yay\u0131ld\u0131k\xE7a y\xFCzey d\xFCz kesilmi\u015F fasetlere b\xF6l\xFCn\xFCr, \u0131\u015F\u0131\u011F\u0131 keskin k\u0131rar */
  float grow=smoothstep(.2,2.6,t+t_vn(xy/400.)*.6-dT/1600.*1.2);
  vec2 g=xy/30.;vec2 i=floor(g),f=fract(g);float bd=9.;vec2 bc=vec2(0.),bid=vec2(0.);
  for(int y=-1;y<=1;y++)for(int x=-1;x<=1;x++){vec2 c=vec2(float(x),float(y));vec2 o2=c+.5+(t_h22(i+c)-.5)*.8;float d=dot(o2-f,o2-f);if(d<bd){bd=d;bc=o2;bid=i+c;}}
  vec2 nF=(t_h22(bid+5.1)-.5)*2.;
  float plane=dot(nF,(f-bc)*30.)*.55+(t_h21(bid+2.2)-.5)*6.;
  rev=grow;hm=grow*.95;ha=plane*grow;
 }
 rev*=1.-df;hm*=1.-df*.95;ha*=1.-df;film*=1.-df;}
float sdfAt(vec2 q){return (texture(uSdf,q).r-.5)*96.;}
float sdfBAt(vec2 q){return (texture(uSdf,q).g-.5)*96.;}
const float PUF=${PUFV.toFixed(1)};
/* sekiz k\xF6\u015Feli Sel\xE7uklu y\u0131ld\u0131z\u0131 (iki kare) */
float star8(vec2 p){float d1=max(abs(p.x),abs(p.y));float d2=max(abs(p.x+p.y),abs(p.x-p.y))*.70710678;return min(d1,d2);}
/* balbal: yukar\u0131 do\u011Fru hafif daralan, tepesi yuvarlak dikili ta\u015F (yerel koordinat, y a\u015Fa\u011F\u0131, taban y=0) */
float balbalSD(vec2 p,float H){float t=clamp(-p.y/H,0.,1.);float hw=mix(H*.20,H*.155,t)+sin(t*9.+1.)*H*.006;
 float d=max(abs(p.x)-hw,p.y);float yt=-H+hw;if(p.y<yt)d=length(vec2(p.x,(p.y-yt)*1.15))-hw;return d;}
/* Sel\xE7uklu oyma deseni: sekiz k\xF6\u015Feli y\u0131ld\u0131z a\u011F\u0131 (oyuk derinli\u011Fi 0..1) */
/* Sel\xE7uklu mozaik ge\xE7mesi: bant (0..1) ve derz (0..1) */
float strapD(vec2 xy){vec2 tl=fract(xy/150.)-.5;float sd=star8(tl);
 float a=abs(sd-.34),b=abs(sd-.20);
 float c=sd>.36?min(abs(tl.x),abs(tl.y)):9.;
 float d=sd>.36?abs(abs(tl.x)-abs(tl.y))*.7071:9.;
 float r=length(tl);float ang=atan(tl.y,tl.x);float ray=sd<.20?abs(fract(ang*16./6.2831853)-.5)*r*.40:9.;
 return min(min(min(a,b),min(c,d)),ray)*150.;}
float selg(vec2 xy){return 1.-smoothstep(3.4,4.6,strapD(xy));}
/* ---------- C modeli: zemin desenleri (d\xFCz renk, ilmek/s\u0131r y\xFCzeyi ile) ---------- */
vec3 gCarpet(vec2 xy,out float knot){vec2 kc=floor(xy/3.4);vec2 kl=fract(xy/3.4)-.5;knot=1.-dot(kl,kl)*2.2;
 vec3 krem=vec3(.89,.82,.69),kir=vec3(.68,.08,.09),lac=vec3(.11,.13,.26);
 float lx=mod(kc.x,38.)-19.,ly=mod(kc.y,26.)-13.;float dm=abs(lx)/19.+abs(ly)/13.;vec3 b=kir;
 float ring=step(.62,dm)*step(dm,.70),fill=step(dm,.62);b=mix(b,lac,fill);b=mix(b,krem,ring);
 float ros=step(length(vec2(lx,ly*1.4)),3.2);float rd=step(length(vec2(lx,ly*1.4)),1.3);
 float rays=(step(abs(lx),.6)+step(abs(ly),.6))*step(dm,.48)*step(.20,dm)*step(.5,mod(abs(lx)+abs(ly),2.));
 b=mix(b,krem,clamp(ros+rays,0.,1.)*fill);b=mix(b,kir,rd);
 float lx2=mod(kc.x+19.,38.)-19.,ly2=mod(kc.y+13.,26.)-13.;float d2=abs(lx2)/7.+abs(ly2)/5.;
 b=mix(b,krem,step(.70,d2)*step(d2,1.)*step(.85,dm));b=mix(b,lac,step(d2,.42)*step(.85,dm));
 return b*(.92+h21(kc)*.12);}
vec3 gPz(vec2 xy,out float knot){vec2 kc=floor(xy/2.3);vec2 kl=fract(xy/2.3)-.5;knot=1.-dot(kl,kl)*2.2;
 vec2 uv=fract(kc*2.3/vec2(700.,661.));vec3 c=pow(texture(uPz,uv).rgb,vec3(1.08))*(.93+h21(kc)*.1);
 /* Paz\u0131r\u0131k: daha ayd\u0131nl\u0131k; kenar frizlerindeki at ve geyik fig\xFCrleri alt\u0131n iplik gibi ara ara parlar */
 float e=min(min(uv.x,1.-uv.x),min(uv.y,1.-uv.y));float ring=smoothstep(.03,.06,e)*(1.-smoothstep(.20,.25,e));
 float fig=smoothstep(.10,.30,c.r-c.g)*ring;float sw=fract(uT*.045+(uv.x+uv.y)*.5);float bd=exp(-pow((sw-.5)/.07,2.));
 return c*1.38+c*fig*(.25+1.1*bd);}
vec3 gCini(vec2 xy,out float knot){knot=1.;vec3 c=texture(uCini,fract(xy/vec2(564.,903.))).rgb;return pow(c,vec3(1.05));}
vec3 gMos(vec2 xy,out float knot){knot=1.;float sdd=strapD(xy);float band=1.-smoothstep(3.6,4.6,sdd);float joint=1.-smoothstep(.6,1.3,abs(sdd-5.2));
 float p1,p2,pr;vec2 pv;vor2(xy/24.,p1,p2,pv,pr);vec3 dark=mix(vec3(.12,.05,.09),vec3(.05,.04,.05),h21(vec2(pr*9.,1.)));
 vec3 tq=mix(vec3(.16,.66,.70),vec3(.30,.80,.80),gn(xy/40.)*.5+.5);vec3 b=mix(dark,tq,band);return mix(b,vec3(.90,.88,.82),joint*(1.-band));}
vec3 groundP(vec2 xy,float gi,out float knot){
 if(gi<.5)return gCarpet(xy,knot);if(gi<1.5)return gPz(xy,knot);if(gi<2.5)return gCini(xy,knot);return gMos(xy,knot);}
/* \xE7al\u0131\u015Fma an\u0131: hal\u0131 ve mozaik a\xE7\u0131l\u0131\u015Fta dokuya pi\u015Firildi, burada sadece okunur */
vec3 ground(vec2 xy,float gi,out float knot){
 if(gi<.5||gi>2.5){vec2 uv=clamp((xy+60.)/vec2(1720.,1020.),0.,1.);vec4 t=gi<.5?texture(uG0,uv):texture(uG3,uv);knot=t.a;
  if(gi<.5){/* hal\u0131: biraz ayd\u0131nl\u0131k; a\xE7\u0131k renkli ilmeklerde ara ara ge\xE7en alt\u0131n iplik par\u0131lt\u0131s\u0131 */
   vec3 c=t.rgb*1.25;float lu=dot(t.rgb,vec3(.3,.5,.2));float th=smoothstep(.42,.66,lu);
   float sw=fract(uT*.04+(xy.x*.6+xy.y)/1500.);float bd=exp(-pow((sw-.5)/.06,2.));
   return c+vec3(1.,.80,.38)*th*bd*.55*knot;}
  return t.rgb;}
 if(gi<1.5)return gPz(xy,knot);return gCini(xy,knot);}
void main(){
 vec2 p=vec2(gl_FragCoord.x,uRes.y-gl_FragCoord.y);vec2 q=(p-uRect.xy)/uRect.zw;
 float tpd=1600./uRect.z;
 vec2 xy=q*vec2(1600.,900.);
 float dflat=sdfAt(q);vec2 qB=q-uSw/vec2(1600.,900.);float dback=sdfBAt(qB);
 float ge=uGoo;float bl=0.;if(ge<.999)bl=16.*(1.-ge)*(1.-ge)*(.6+.8*vn(xy*.011+2.));
 float aFlat=clamp(.5-(dflat-bl)/tpd,0.,1.)*clamp(ge*22.,0.,1.);
 vec3 paper=vec3(.984,.984,.976),blk=vec3(.039);
 /* g\xFCne\u015F: uzak, al\xE7ak, yava\u015F kayan y\xF6nl\xFC \u0131\u015F\u0131k */
 vec3 LP=uLamp;vec3 Ls=normalize(vec3(LP.x-800.,-(LP.y-450.),LP.z));
 vec2 sdir=normalize(vec2(-Ls.x,Ls.y));                          /* g\xF6lgenin k\xE2\u011F\u0131tta gitti\u011Fi y\xF6n (y a\u015Fa\u011F\u0131) */
 /* ufuk \xE7izgisi: harflerin oturdu\u011Fu yer */
 /* k\xE2\u011F\u0131da d\xFC\u015Fen g\xF6lgeler: harfler ve balbal k\xE2\u011F\u0131ttan kalk\u0131k */
 {const float HL=15.;float k=HL*.9/max(Ls.z,.2);vec2 occ=xy-sdir*k;
  float ds=sdfAt(occ/vec2(1600.,900.));float shd=(1.-smoothstep(-5.,5.,ds))*.20;
  paper*=1.-shd*0.;}
 vec3 col=mix(paper,blk,aFlat);
 if(uCabOn>.5){vec4 cb=texture(uCab,vec2(q.x,1.-q.y));cb*=step(0.,q.x)*step(q.x,1.)*step(0.,q.y)*step(q.y,1.);vec3 bse=mix(paper,blk,aFlat*uCabBase);float sw=smoothstep(.45,.75,cb.a);float ca=mix(cb.a*.55*uShF,cb.a,sw);col=bse*(1.-ca)+pow(max(cb.rgb,0.),vec3(1./2.2));}
 float tzm=0.;
 if(uTz.w>.5){float t=uTz.z;float rev,hm,ha,film;vec3 fbv;tease(xy,uTz.xy,t,uTzMode,rev,hm,ha,film,fbv);
  float aS=mix(aFlat,clamp(.5-(mix(dflat,dback,hm)-PUF*hm-ha*.6)/tpd,0.,1.),uThree);
  if(rev*aS>.002){float kn;vec3 Gt=ground(xy,uGC,kn);
   vec4 nr=texture(uNrm,qB);vec3 Nn=vec3(nr.x*2.-1.,-(nr.y*2.-1.),0.);Nn.z=sqrt(max(.05,1.-min(dot(Nn.xy,Nn.xy),.95)));
   float dif=.55+.45*max(dot(Nn,vec3(-.45,.55,.70)),0.);
   Gt*=dif*(.82+.18*kn)*mix(.95,.46,uThree);
   if(film>.01){float ct=film;float d=360.+380.*fbm(fbv.xy*1.25+vec2(fbv.z*9.,t*.2))+340.*(1.-ct);vec3 fl=.5+.5*cos(12.566*1.33*d*ct/vec3(650.,532.,450.));
    Gt=mix(Gt,Gt*.55+fl*(.25+.45*pow(1.-ct,2.)),smoothstep(0.,.25,film)*.8);}
   col=mix(col,Gt,aS*rev);tzm=rev*aS;}}
 vec4 fs=texBic(uInk,gl_FragCoord.xy/uRes,uInkSz);float L=fs.r;
 float g=length(vec2(dFdx(L),dFdy(L)));
 float aInk=clamp((L-uThr)/max(g,.0004)+.5,0.,1.);
 if(uMode>.5&&aInk>0.){
  /* C modeli: m\xFCrekkep lo\u015F bir zanaat zemini a\xE7ar; harfler \xFCst\xFCnde duran s\u0131v\u0131 cam nesneler */
  vec2 par=vec2(uMs.x,uMs.y)*-22.;vec2 xyG=xy+par;
  /* tek kural: her yeni hamle s\u0131radaki zemini imlecin oldu\u011Fu yerden yayarak a\xE7ar */
  float wt=uWipe.z;float dW=length(xy-uWipe.xy);float live=1.-smoothstep(3.6,4.6,wt);
  float g0=uGP,g1=uGC;float gf,envR=0.,wv=0.,wSeam=0.,roll=0.,rollU=0.,rollSh=0.,cSl=0.;
  /* v28 dalgas\u0131 (t\xFCm zeminler): yumu\u015Fak ak\u0131\u015Fkan cephe, arkada zemini b\xFCken i\xE7 i\xE7e su halkalar\u0131 */
  {float ang=atan(xy.y-uWipe.y,xy.x-uWipe.x);float nW=(sin(ang*3.+wt*1.3)*.5+sin(ang*5.-wt*.9)*.3+gn(xy/260.+wt*.2)*.6)*34.;
   float cw=dot(normalize(xy-uWipe.xy+1e-3),uWd.xy);float vW=mix(480.,mix(320.,650.,cw*.5+.5),uWd.z);
   float fW=dW*480./vW+nW-wt*480.;float l28=1.-smoothstep(3.2,4.4,wt);
   envR=exp(-max(-fW,0.)/320.)*smoothstep(140.,-20.,fW)*l28;wv=sin(fW*.075-wt*5.);
   xyG+=normalize(xy-uWipe.xy+1e-3)*wv*envR*14.;gf=1.-smoothstep(-120.,120.,fW);wSeam=exp(-fW*fW/(16.*16.))*l28;}
  if(uLock>-.5){g1=min(uLock,3.);gf=1.;roll=0.;rollSh=0.;}
  float kn,kp;vec3 G=ground(xyG,g1,kn);if(gf<.998){vec3 Gp=ground(xyG,g0,kp);G=mix(Gp,G,gf);kn=mix(kp,kn,gf);}
  if(roll>.5){float cy=sin(rollU*3.1416);float kp2;vec3 face=ground(xyG*vec2(1.)+uRoll.xy*(rollU-.5)*40.,g1,kp2);vec3 back=vec3(.80,.70,.55)*(.9+.2*t_h21(floor(xy/3.4)));
   float lay=.5+.5*sin(rollU*3.1416*7.);G=mix(back,face,smoothstep(.35,.65,lay))*(.22+.85*cy)+vec3(.20)*pow(cy,16.);kn=.85;}
  G*=1.+cSl*.32;
  G*=1.-rollSh*.5;
  float seam=0.,crest=0.;
  /* zemin \u0131\u015F\u0131\u011F\u0131: g\xFCne\u015F + ilmek/s\u0131r, lo\u015F oda; m\xFCrekkep kenar\u0131na do\u011Fru karar\u0131r */
  float gl2=.36+.20*clamp(Ls.y*.5+.5,0.,1.);G*=gl2*(.82+.18*kn)*(.35+.65*uLi);
  {float lu=dot(G,vec3(.3,.5,.2));G=mix(vec3(lu),G,.80)*.77;}
  G*=smoothstep(uThr,uThr+.30,L)*.75+.25;
  {/* cam dalgas\u0131: kendi rengi yok; zeminin rengini parlat\u0131r, tepelerde ince \u0131\u015F\u0131k kenar\u0131 */
   float lum=dot(G,vec3(.3,.5,.2));
   G*=1.+.10*wv*envR;G+=vec3(1.,.98,.94)*wSeam*.16*uLi;}
  {vec2 cssp=vec2(gl_FragCoord.x,uRes.y-gl_FragCoord.y)/uDpr;float um=0.;for(int i=0;i<8;i++){vec4 rc=uUi[i];vec2 dd=max(rc.xy-cssp,cssp-rc.zw);float d=max(dd.x,dd.y);um=max(um,1.-smoothstep(-2.,26.,d));}
   G*=1.-um;}
  float vg=exp(-dot(xy-vec2(800.,450.),xy-vec2(800.,450.))/(950.*950.));G*=.75+.25*vg;
  /* harfin zemine d\xFC\u015Fen g\xF6lgesi */
  float dpu=dback-PUF;
  vec2 occ=xy-sdir*26.;float dso=sdfBAt(occ/vec2(1600.,900.))-PUF;float shG=(1.-smoothstep(-10.,14.,dso))*.62*uLi;
  vec3 C=G*(1.-shG*step(0.,dpu));C*=1.-.10*(1.-smoothstep(0.,24.,dpu))*step(0.,dpu);C*=1.-.42*exp(-max(dpu,0.)/4.5)*step(0.,dpu)*uLi;
  {float cau=(1.-smoothstep(-26.,-6.,dso))*step(0.,dpu)*uLi;C+=G*cau*.55+vec3(1.,.97,.9)*cau*.04;}
  float a3=clamp(.5-dpu/tpd,0.,1.)*(1.-uThree);
  if(a3>0.){
   vec4 nr=texture(uNrm,qB);float hgt=nr.b;
   float brth=1.+.07*sin(uT*1.55);
   vec3 N=vec3(nr.x*2.-1.,-(nr.y*2.-1.),0.);N.xy*=1.45*brth;N.xy+=vec2(uSw.x,-uSw.y)*.022*hgt;
   {vec2 dv=xy-uMx;float gm=exp(-dot(dv,dv)/(85.*85.))*uMxOn;N.x-=dv.x*2.*gm*30./(85.*85.);N.y+=dv.y*2.*gm*30./(85.*85.);}
   {float ed=-dpu;float zone=(1.-smoothstep(2.,15.,ed))*smoothstep(.15,.40,length(N.xy));
    vec2 nn=normalize(vec2(N.x,-N.y)+1e-4);vec2 tg=vec2(-nn.y,nn.x);
    float w=sin(dot(xy,tg)*.30+gn(xy/18.)*3.4)*(.45+.55*gn(xy/9.+4.));
    vec2 tw=tg*w*zone*.32;N.x+=tw.x;N.y-=tw.y;}
   N.z=sqrt(max(.04,1.-min(dot(N.xy,N.xy),.96)));N=normalize(N);
   vec3 hv=normalize(Ls+vec3(0.,0.,1.));float Fr=.04+.96*pow(1.-N.z,5.);vec3 R=refl(N);
   float sideL=clamp(dot(normalize(N.xy+1e-4),normalize(vec2(Ls.x,Ls.y)+1e-4))*.5+.5,0.,1.)*(1.-N.z);
   vec3 cg;
   if(uChrome<.5){
    /* s\u0131v\u0131 cam: zemini b\xFCker ve b\xFCy\xFCt\xFCr, kenarda renk sa\xE7\u0131l\u0131r */
    vec2 off=vec2(N.x,-N.y)*(7.5+34.5*(1.-N.z))-(xyG-vec2(800.,450.))*.045*hgt;
    float k1,k2,k3;
    vec3 Rc=vec3(mix(ground(xyG+off*1.00,g0,k1),ground(xyG+off*1.00,g1,k1),gf).r,
                 mix(ground(xyG+off*1.05,g0,k2),ground(xyG+off*1.05,g1,k2),gf).g,
                 mix(ground(xyG+off*1.10,g0,k3),ground(xyG+off*1.10,g1,k3),gf).b);
    Rc*=gl2*(.35+.65*uLi);{float lu=dot(Rc,vec3(.3,.5,.2));Rc=mix(vec3(lu),Rc,.80)*.77;}Rc*=1.65;
    float caus=pow(N.z,6.)*.12*uLi;
    float rim=pow(1.-N.z,2.5)*clamp(dot(normalize(N.xy+1e-4),normalize(Ls.xy+1e-4))*.5+.5,0.,1.);
    float rimD=pow(1.-N.z,2.5)*(1.-clamp(dot(normalize(N.xy+1e-4),normalize(Ls.xy+1e-4))*.5+.5,0.,1.));
    float edge=1.-smoothstep(0.,2.2,-dpu);
    cg=Rc*vec3(.95,.98,1.)+caus+env(R)*Fr*.605+vec3(1.)*pow(max(dot(N,hv),0.),140.)*2.42*uLi+vec3(.95,.97,1.)*rim*1.03*uLi+vec3(.90,.92,.95)*rimD*.07*uLi+vec3(.85)*exp(-pow((-dpu-7.)/3.,2.))*.22*uLi;cg*=.55+.45*smoothstep(0.,5.,-dpu);
   }else{
    /* krom: zemini yans\u0131t\u0131r */
    vec2 off=vec2(R.x,-R.y)*140.;float k1;vec3 Rg=mix(ground(xyG+off,g0,k1),ground(xyG+off,g1,k1),gf)*gl2*1.5;
    float up=smoothstep(-.1,.8,R.y);
    cg=mix(Rg*(.55+.45*uLi),vec3(.85,.86,.9)*uLi,up*.55)*vec3(.96,.97,1.)+vec3(1.)*pow(max(dot(N,hv),0.),160.)*2.4*uLi;
   }
   cg*=.78+.40*sideL+.10*(1.-N.z);cg*=1.-.28*pow(1.-N.z,3.)*(1.-sideL);
   cg=cg/(1.+.10*cg);
   /* imle\xE7 \u0131\u015F\u0131\u011F\u0131: balonda keskin parlama + ara s\u0131ra elmas p\u0131r\u0131lt\u0131s\u0131 */
   {vec2 dv=xy-uMx;float near=exp(-dot(dv,dv)/(170.*170.))*uMxOn;
    if(near>.003){vec3 Lc=normalize(vec3(-dv.x,dv.y,220.));vec3 hc=normalize(Lc+vec3(0.,0.,1.));float nh=max(dot(N,hc),0.);
     float sp=pow(nh,420.)*2.6+pow(nh,70.)*.22;
     vec2 cel=floor(xy/18.);float hs=h21(cel+7.7);vec2 lc=fract(xy/18.)-.5;
     float tw=pow(max(0.,sin(uT*2.3+hs*61.)),24.)*step(.70,hs);
     float star=(exp(-abs(lc.x)*28.)*exp(-abs(lc.y)*5.)+exp(-abs(lc.y)*28.)*exp(-abs(lc.x)*5.))*smoothstep(.5,.1,length(lc));
     float glint=star*tw*pow(nh,14.);
     cg+=(vec3(1.,.98,.95)*sp+vec3(.92,.96,1.)*glint*3.2)*near*uLi;}}
   C=mix(C,cg,a3);}
  {/* imle\xE7 ucunda s\u0131v\u0131 cam: a\xE7\u0131lan deseni mercek gibi b\xFCker, b\xFCy\xFCt\xFCr, kenar\u0131 parlar */
   float frs=clamp(fs.b,0.,1.);float gw=smoothstep(.06,.45,frs);
   if(gw>.002&&a3<.5){float hF=sqrt(frs);vec2 dF=vec2(dFdx(hF),-dFdy(hF))*34.*uDpr;
    vec2 dL=vec2(dFdx(L),-dFdy(L))*10.*uDpr;float edge=1.-smoothstep(uThr,uThr+.35,L);
    vec2 nxy=-(dF+dL*edge*frs);nxy*=min(1.,.92/max(length(nxy),1e-4));
    float nz=sqrt(max(.05,1.-dot(nxy,nxy)));
    vec2 offg=vec2(nxy.x,-nxy.y)*(10.+30.*(1.-nz));
    float k1,k2;vec3 Gr=ground(xyG+offg,g1,k1);if(gf<.998){vec3 Gq=ground(xyG+offg,g0,k2);Gr=mix(Gq,Gr,gf);}
    Gr*=gl2*(.82+.18*k1)*(.35+.65*uLi);
    vec3 Ng=vec3(nxy,nz);vec3 hv2=normalize(Ls+vec3(0.,0.,1.));float Fr=.04+.96*pow(1.-nz,5.);
    vec3 gc=Gr*1.04+env(refl(Ng))*Fr*.40+vec3(1.)*pow(max(dot(Ng,hv2),0.),90.)*1.4*uLi+vec3(.9,.95,1.)*pow(1.-nz,2.5)*.25*uLi;
    C=mix(C,gc,gw*aInk);}}
  col=mix(col,C,aInk);o=vec4(col,tzm);return;}
 if(aInk>0.){
  float cf=fs.g;
  float ph=max(fs.a-1.,0.)*1.6+uT*.05+q.x*.6+q.y*.25+vn(xy*.006+3.)*.5+cf*.8;
  float m=mod(ph,4.5),k,u,ln;
  if(m<1.5){k=0.;u=m;ln=1.5;}else if(m<2.5){k=1.;u=m-1.5;ln=1.;}else if(m<3.7){k=2.;u=m-2.5;ln=1.2;}else{k=3.;u=m-3.7;ln=.8;}
  float f0=smoothstep(ln-.62,ln-.02,u);
  float fr=fbm(xy/48.)*.42;
  float f=smoothstep(-.05,.05,f0-.5+fr);
  float foam=1.-smoothstep(.0,.30,abs(f0-.5+fr));                    /* k\xF6p\xFCk band\u0131: cephenin iki yan\u0131 */
  float i0=k,i1=mod(k+1.,4.);
  if(uLock>-.5){i0=uLock;i1=uLock;f=0.;foam=0.;}
  if(uFoam>-.5)foam=uFoam;
#define WK(k) ((abs(i0-k)<.5?1.-f:0.)+(abs(i1-k)<.5?f:0.))
  /* 0 balbal granit \xB7 1 \xE7ini \xB7 2 hal\u0131 \xB7 3 Sel\xE7uklu oymal\u0131 turkuaz */
  float W0=WK(0.),W1=WK(1.),W2=WK(2.),W3=WK(3.);float WB=uLock>3.5?1.:0.;
  float fb1=1.,fb2=1.,fbr=0.;vec2 fbv=vec2(0.);
  if(foam>.01)vor2(xy/(22.+12.*foam)+vec2(0.,uT*.35),fb1,fb2,fbv,fbr);
  float bR=.30+.32*foam;                                               /* kabarc\u0131k yar\u0131\xE7ap\u0131 b\xFCy\xFCr */
  float lump=0.;
  if(W0>.001)lump+=W0*(fbm(xy/22.)*7.-1.5);
  if(foam>.01)lump+=foam*(bR-fb1)*20.*(1.-smoothstep(0.,12.,dback));                                 /* k\xF6p\xFCk siluetten ta\u015Far */
  float dpuf=dback-PUF-lump;
  float a3=clamp(.5-dpuf/tpd,0.,1.);
  vec3 sideB=vec3(.36,.34,.31)*W0+vec3(.20,.26,.55)*W1+vec3(.55,.08,.08)*W2+vec3(.05,.36,.35)*W3;
  vec3 inkc=blk;
  vec2 EX=normalize(sdir*.8+vec2(0.,.45));
  if(a3<1.){const float DEP=20.;float sMin=1e3,kf=13.,dp=1e3;
   for(int kk=1;kk<=12;kk++){vec2 qo=q-EX*(float(kk)*DEP/12.)/vec2(1600.,900.);float dk=sdfBAt(qo)-PUF;
    sMin=min(sMin,dk);if(dk<0.&&kf>12.)kf=float(kk)-1.+clamp(dp/max(dp-dk,1e-3),0.,1.);dp=dk;}
   float aS=clamp(.5-sMin/tpd,0.,1.);
   if(aS>0.){float dep=clamp(kf/12.,0.,1.);float sl=mix(.55,.06,pow(dep,.6))*(.15+.85*uLi);
    inkc=mix(blk,sideB*sl+vec3(.08)*smoothstep(.12,.0,dep)*uLi,aS);}}
  /* hal\u0131 sa\xE7a\u011F\u0131: alt kenardan sarkan ince y\xFCn iplikler */
  if(W2>.001&&a3<1.){float sx2=floor(xy.x/2.6);float Lf=7.+7.*h21(vec2(sx2,5.));float sw2=sin(uT*1.1+sx2*.7)*.8;
   float up=sdfBAt(q-vec2(sw2*.0,Lf)/vec2(1600.,900.))-PUF;float here=dpuf;
   float fx=abs(fract(xy.x/2.6)-.5)*2.6;float th=1.-smoothstep(.45,.95,fx);
   float fr2=step(up,0.)*step(0.,here)*th;
   float tip=smoothstep(Lf,Lf*.6,here);
   vec3 fc=vec3(.86,.79,.66)*(.35+.65*clamp(Ls.y*.5+.6,0.,1.))*uLi*(.75+.25*h21(vec2(sx2,9.)));
   inkc=mix(inkc,fc,fr2*tip*W2);}
  if(a3>0.){
   vec4 nr=texture(uNrm,qB);float hgt=nr.b;
   vec3 N=vec3(nr.x*2.-1.,-(nr.y*2.-1.),0.);N.xy*=1.3;N.z=sqrt(max(.04,1.-min(dot(N.xy,N.xy),.96)));N=normalize(N);
   vec3 Lg=Ls;float att=uLi*1.25;
   /* diki\u015F: \u015Fi\u015Fkin yast\u0131k/balon kenar\u0131nda b\xFCzg\xFC ve diki\u015Ften yay\u0131lan k\u0131r\u0131\u015F\u0131klar */
   float seamA=W2+WB;
   if(seamA>.001){float dE=-dpuf;vec2 nxy=normalize(vec2(N.x,-N.y)+1e-4);vec2 txy=vec2(-nxy.y,nxy.x);float sAl=dot(xy,txy);
    float zone=(1.-smoothstep(3.,mix(22.,13.,WB),dE))*smoothstep(.12,.35,length(N.xy));
    float wr=sin(sAl*mix(.42,.17,WB)+gn(xy/mix(13.,30.,WB))*3.2)*(.55+.45*gn(xy/8.+4.));
    vec2 tN=vec2(txy.x,-txy.y);
    vec2 sb=tN*wr*zone*mix(.55,.40,WB)+vec2(nxy.x,-nxy.y)*(1.-smoothstep(1.,5.,dE))*.5;
    N=normalize(vec3(N.xy+sb*seamA,N.z));}
   vec3 hv=normalize(Lg+vec3(0.,0.,1.));
   float ao=.45+.55*smoothstep(0.,.55,hgt);
   vec3 amb=vec3(.035,.035,.04);
   vec3 sh=vec3(0.);
   if(W0>.001){float c1,c2,cr;vec2 crv;vor2(xy/58.,c1,c2,crv,cr);
    vec2 bm=(h22(vec2(cr*71.,cr*13.))-.5)*.55+vec2(gn(xy/9.),gn(xy/9.+5.))*.22+vec2(gn(xy/2.6),gn(xy/2.6+3.))*.10;
    vec3 Ns=normalize(vec3(N.xy+bm,N.z));
    float gr=h21(floor(xy/2.3));vec3 base=vec3(.56,.54,.50)*(.86+.22*fbm(xy/140.));
    base=mix(base,vec3(.16,.15,.15),step(.86,gr)*.8);base=mix(base,vec3(.80,.76,.70),step(gr,.07)*.7);base=mix(base,vec3(.66,.52,.46),step(.47,gr)*step(gr,.52)*.6);
    float cav=smoothstep(.0,.10,c2-c1);float dif=max(dot(Ns,Lg),0.);
    sh+=W0*(base*(amb*3.+dif*att)*ao*(.55+.45*cav)+vec3(.9,.85,.8)*pow(max(dot(Ns,hv),0.),24.)*.08*att);}
   /* 1 \u0130znik \xE7inisi: kobalt bord\xFCr + beyaz rozetler, ince turkuaz \u015Feritler, beyaz zeminde kobalt rozet, k\u0131rm\u0131z\u0131 karanfil, ye\u015Fil saz yapra\u011F\u0131 */
   if(W1>.001){float aa=max(tpd,.6);
    float dq=dback;
    float bord=smoothstep(-6.5,-5.5,dq);
    float gt=smoothstep(-9.,-8.2,dq)*(1.-smoothstep(-6.5,-5.5,dq));
    vec3 wh=vec3(.95,.95,.93),cob=vec3(.11,.20,.60),tur=vec3(.13,.62,.70),red=vec3(.76,.12,.12),grn=vec3(.10,.50,.36),dk=vec3(.07,.10,.30);
    vec3 base=wh;float redM=0.;vec2 rc=vec2(0.);
    /* zemin motifleri */
    vec2 cid=floor(xy/34.);vec2 cc=(cid+.5+(h22(cid)-.5)*.30)*34.;vec2 pp=(xy-cc)*1.45;float ty=h21(cid+7.);float an=h21(cid+3.)*6.2831;
    float ra=atan(pp.y,pp.x),rl=length(pp);
    if(ty<.45){float d1=rl-17.*(.62+.38*abs(cos(ra*4.+an)));float d2=rl-9.*(.65+.35*abs(cos(ra*4.+an+.4)));float d3=rl-3.6;
     base=mix(base,dk,1.-smoothstep(-aa,aa,abs(d1)-.9));base=mix(base,cob,1.-smoothstep(-aa,aa,d1+.9));
     base=mix(base,wh,1.-smoothstep(-aa,aa,d2));float rm=1.-smoothstep(-aa,aa,d3);base=mix(base,red,rm);redM=rm;rc=pp;}
    else if(ty<.72){vec2 rp=mat2(cos(an),-sin(an),sin(an),cos(an))*pp;float fa=atan(rp.x,-rp.y);
     float d1=max(length(rp)-13.*(.78+.22*abs(cos(fa*5.))),rp.y-3.);float d2=length((rp-vec2(0.,7.))*vec2(2.2,1.))-4.;
     float rm=1.-smoothstep(-aa,aa,d1);base=mix(base,dk,1.-smoothstep(-aa,aa,abs(d1)-.8));base=mix(base,red,rm);redM=rm;rc=rp;
     base=mix(base,grn,1.-smoothstep(-aa,aa,d2));}
    else{vec2 rp=mat2(cos(an),-sin(an),sin(an),cos(an))*pp;float d1=length(rp*vec2(1.,3.2))-17.;float vein=1.-smoothstep(.4,1.1,abs(rp.y))*step(abs(rp.x),13.);
     base=mix(base,dk,1.-smoothstep(-aa,aa,abs(d1)-.9));base=mix(base,grn,1.-smoothstep(-aa,aa,d1+.9));base=mix(base,wh*.9,vein*(1.-smoothstep(-aa,aa,d1+2.)));}
    /* ince k\u0131vr\u0131k dal */
    float stem=1.-smoothstep(.5,1.2,abs(sin(xy.x/31.+sin(xy.y/23.)*1.6)*14.-fract(xy.y/28.)*0.)-.0);stem=0.;
    /* bord\xFCr */
    vec2 bc=floor(xy/15.);vec2 bpp=(xy-(bc+.5)*15.)*1.15;float bl2=length(bpp),ba=atan(bpp.y,bpp.x);
    float bros=1.-smoothstep(-aa,aa,bl2-6.5*(.6+.4*abs(cos(ba*3.))));float bcen=1.-smoothstep(-aa,aa,bl2-2.2);
    vec3 bcol=mix(cob,wh,bros);bcol=mix(bcol,red,bcen);
    base=mix(base,bcol,bord);redM=mix(redM,bcen,bord);if(bord>.5)rc=bpp;
    base=mix(base,tur,clamp(gt,0.,1.));
    /* s\u0131r: hafif dalgal\u0131 cam y\xFCzey; k\u0131rm\u0131z\u0131 kabar\u0131k */
    vec2 bm=vec2(gn(xy/60.),gn(xy/60.+3.))*.05;bm+=-normalize(rc+1e-3)*redM*.45;
    vec3 Nc=normalize(vec3(N.xy+bm,N.z));float dif=max(dot(Nc,Lg),0.);float Fr=.04+.96*pow(1.-Nc.z,5.);
    sh+=W1*(base*(amb*3.+dif*att*.95)*ao+vec3(1.,.97,.92)*pow(max(dot(Nc,hv),0.),220.)*2.6*att+env(refl(Nc))*Fr*.45);}
   /* 2 hal\u0131: iki desen (A: madalyonlu k\u0131rm\u0131z\u0131 zemin \xB7 B: Paz\u0131r\u0131k atl\u0131 frizi), yeni desen sat\u0131r sat\u0131r dokunarak gelir */
   if(W2>.001){float cyc=uT*.055+uWv;float lay=floor(cyc);float prog=fract(cyc)*1.3-.15;
    float ks0=3.4;float rr=floor(xy.y/ks0)*ks0/900.;
    float sw=step(rr,prog);float des=mod(lay+sw,2.);if(uHali>-.5)des=uHali;
    float ks=des<.5?3.4:2.3;vec2 kc=floor(xy/ks);vec2 kl=fract(xy/ks)-.5;vec2 kq=kc*ks;
    float dq=sdfBAt(kq/vec2(1600.,900.));float guard=step(-7.,dq)*step(dq,-4.5);float bandE=step(-4.5,dq)*step(dq,-2.);
    float shut=(1.-smoothstep(0.,4.,abs(xy.y-prog*900.)))*step(-.1,prog)*step(prog,1.05);
    vec3 krem=vec3(.89,.82,.69),kir=vec3(.68,.08,.09),lac=vec3(.11,.13,.26);
    vec3 base;
    if(des<.5){
     float lx=mod(kc.x,38.)-19.,ly=mod(kc.y,26.)-13.;float dm=abs(lx)/19.+abs(ly)/13.;
     base=kir;
     float ring=step(.62,dm)*step(dm,.70),fill=step(dm,.62);
     base=mix(base,lac,fill);base=mix(base,krem,ring);
     float ros=step(length(vec2(lx,ly*1.4)),3.2);float rd=step(length(vec2(lx,ly*1.4)),1.3);
     float rays=(step(abs(lx),.6)+step(abs(ly),.6))*step(dm,.48)*step(.20,dm)*step(.5,mod(abs(lx)+abs(ly),2.));
     base=mix(base,krem,clamp(ros+rays,0.,1.)*fill);base=mix(base,kir,rd);
     float lx2=mod(kc.x+19.,38.)-19.,ly2=mod(kc.y+13.,26.)-13.;float d2=abs(lx2)/7.+abs(ly2)/5.;
     base=mix(base,krem,step(.70,d2)*step(d2,1.)*step(.85,dm));base=mix(base,lac,step(d2,.42)*step(.85,dm));
     float arw=step(abs(lx),.6)*step(abs(abs(ly)-8.5),2.5)*step(.7,dm)*step(dm,.85);base=mix(base,krem,arw);
    }else{
     vec2 pu=kq/vec2(700.,661.)+vec2(uT*.004,0.);vec3 pc=texture(uPz,fract(pu)).rgb;
     base=pow(pc,vec3(1.08))*vec3(1.,.96,.92);
    }
    base=mix(base,krem*.94,bandE*(1.-guard));base=mix(base,lac,guard);
    base*=.92+h21(kc)*.12+gn(xy/90.)*.06;
    base=mix(base,krem*1.08,shut*.8);
    float knot=1.-dot(kl,kl)*2.2;
    vec2 bm=-kl*.35+vec2(gn(xy/1.3),gn(xy/1.3+4.))*.30+vec2(gn(xy/7.),gn(xy/7.+2.))*.12;
    vec3 Nk=normalize(vec3(N.xy+bm,N.z));float dif=max(dot(Nk,Lg),0.);
    float sheen=.70+.45*clamp(Lg.y*.8+.3,0.,1.);
    sh+=W2*(base*(amb*3.+dif*att*sheen)*(.82+.18*knot)*ao+base*pow(1.-Nk.z,2.)*.25*att);}
   /* 3 Sel\xE7uklu oymal\u0131 turkuaz: s\u0131r oyuklarda birikir (koyu), \xE7\u0131k\u0131nt\u0131lar parlak */
   if(W3>.001){float sdd=strapD(xy);float band=1.-smoothstep(3.6,4.6,sdd);float joint=(1.-smoothstep(.6,1.3,abs(sdd-5.2)));
    float g1=1.-smoothstep(3.6,4.6,strapD(xy+vec2(1.3,0.))),g2=1.-smoothstep(3.6,4.6,strapD(xy+vec2(0.,1.3)));
    float p1,p2,pr;vec2 pv;vor2(xy/24.,p1,p2,pv,pr);
    vec2 tilt=(h22(vec2(pr*53.,pr*17.))-.5)*.32*(1.-band);
    vec2 bm=vec2(-(g1-band),(g2-band))*1.6+tilt+vec2(gn(xy/70.),gn(xy/70.+2.))*.04;
    vec3 Nt=normalize(vec3(N.xy+bm,N.z));
    vec3 dark=mix(vec3(.12,.05,.09),vec3(.05,.04,.05),h21(vec2(pr*9.,1.)));
    float crack=(1.-smoothstep(.0,.035,p2-p1))*(1.-band)*.8;
    vec3 tq=mix(vec3(.16,.66,.70),vec3(.30,.80,.80),gn(xy/40.)*.5+.5);
    vec3 base=mix(dark,tq,band);base=mix(base,vec3(.90,.88,.82),joint*(1.-band));base*=1.-crack*.5;
    float dif=max(dot(Nt,Lg),0.);float Fr=.04+.96*pow(1.-Nt.z,5.);
    sh+=W3*(base*(amb*3.+dif*att)*ao*(1.-joint*.15)+vec3(1.,.98,.94)*pow(max(dot(Nt,hv),0.),150.)*2.6*att*(1.-joint)+env(refl(Nt))*Fr*.7);}
   /* 5 (gizli test): g\xFCm\xFC\u015F folyo do\u011Fum g\xFCn\xFC balonu */
   if(WB>.001){vec2 bm=vec2(gn(xy/60.),gn(xy/60.+5.))*.18;vec3 Nf=normalize(vec3(N.xy+bm,N.z));vec3 Rf=refl(Nf);
    vec3 sky=mix(vec3(.05,.05,.06),vec3(.92,.93,.97),smoothstep(-.25,.75,Rf.y));sky+=vec3(1.4)*smoothstep(.20,.0,length(Rf.xy-vec2(-.35,.55)));
    sky=mix(sky,vec3(.02),smoothstep(.05,-.15,Rf.y)*.8);
    float dE2=-dpuf;float crease=1.-smoothstep(0.,1.4,abs(dE2-4.));
    sh+=WB*(sky*vec3(.93,.94,.97)*(1.-crease*.6)+vec3(1.)*pow(max(dot(Nf,hv),0.),200.)*2.*att);}
   /* k\xF6p\xFCk: cephede kabarc\u0131klar kabar\u0131r, g\xF6kku\u015Fa\u011F\u0131 film, alt\u0131ndan yeni malzeme \xE7\u0131kar */
   if(foam>.01){float rr=clamp(fb1/bR,0.,1.);float inB=1.-smoothstep(.82,1.,rr);
    vec3 Nb=normalize(vec3(-fbv/bR*.95+N.xy*.3,sqrt(max(.03,1.-rr*rr))));float ct=Nb.z;
    float d=360.+380.*fbm(fbv*1.25+vec2(fbr*9.,uT*.2))+340.*(1.-ct);
    vec3 film=.5+.5*cos(12.566*1.33*d*ct/vec3(650.,532.,450.));
    float Fb=.06+.94*pow(1.-ct,2.2);float wall=1.-smoothstep(.0,.06,fb2-fb1);
    vec3 cb=film*(.35+1.1*Fb+wall*.7)*(.5+.6*att)+vec3(1.)*pow(max(dot(Nb,hv),0.),60.)*1.5*att+env(refl(Nb))*Fb*.3;
    vec3 under=sh*(.35+.65*ct);
    sh=mix(sh,under+cb*.9,foam*max(inB,wall));}
   sh=sh/(1.+.10*sh);sh=pow(clamp(sh,0.,1.),vec3(.92));
   inkc=mix(inkc,sh,a3);
  }
  col=mix(col,inkc,aInk);
 }
 o=vec4(col,tzm);}
`,TW=1600,TH=900,INF=1e20;function edt1(e,t,a,n,o,r,i){r[0]=0,i[0]=-INF,i[1]=INF,o[0]=e[t];for(let s=1,l=0,f=0;s<n;s++){o[s]=e[t+s*a];const p=s*s;do{const m=r[l];f=(o[s]-o[m]+p-m*m)/(s-m)/2}while(f<=i[l]&&--l>-1);l++,r[l]=s,i[l]=f,i[l+1]=INF}for(let s=0,l=0;s<n;s++){for(;i[l+1]<s;)l++;const f=r[l],p=s-f;e[t+s*a]=o[f]+p*p}}function edt(e,t,a){const n=Math.max(t,a),o=new Float64Array(n),r=new Uint16Array(n),i=new Float64Array(n+1);for(let s=0;s<t;s++)edt1(e,s,t,a,o,r,i);for(let s=0;s<a;s++)edt1(e,s*t,1,t,o,r,i)}function blur(e,t,a,n){const o=new Float32Array(e.length);for(let r=0;r<3;r++){for(let i=0;i<a;i++){let s=0;const l=i*t;for(let f=-n;f<=n;f++)s+=e[l+Math.min(t-1,Math.max(0,f))];for(let f=0;f<t;f++)o[l+f]=s/(2*n+1),s+=e[l+Math.min(t-1,f+n+1)]-e[l+Math.max(0,f-n)]}for(let i=0;i<t;i++){let s=0;for(let l=-n;l<=n;l++)s+=o[Math.min(a-1,Math.max(0,l))*t+i];for(let l=0;l<a;l++)e[l*t+i]=s/(2*n+1),s+=o[Math.min(a-1,l+n+1)*t+i]-o[Math.max(0,l-n)*t+i]}}}async function bakeText(e){const t=()=>new Promise(v=>setTimeout(v,0)),a=document.createElement("canvas");a.width=TW,a.height=TH;const n=a.getContext("2d",{willReadFrequently:!0}),o="600 {s}px Back, Arial, sans-serif",r="900 {s}px Front, Arial, sans-serif",i=2*PUFV+26,s=v=>(n.font=v.replace("{s}",200),200/n.measureText("H").actualBoundingBoxAscent),l=s(o),f=s(r),p=!!window.__portrait,m=p?[e.slice(0,3),e.slice(3)]:[e],g=(v,k,M)=>{const _=k*l,d=k*f;n.font=o.replace("{s}",_);const N=[];for(let z=0;z<v.length;z++){const Y=n.measureText(v.slice(0,z)).width+z*M,I=n.measureText(v[z]);N.push({ch:v[z],xb:Y,l:I.actualBoundingBoxLeft,r:I.actualBoundingBoxRight,cx:Y+(I.actualBoundingBoxRight-I.actualBoundingBoxLeft)/2})}n.font=r.replace("{s}",d);for(const z of N){const Y=n.measureText(z.ch);z.xf=z.cx-(Y.actualBoundingBoxRight-Y.actualBoundingBoxLeft)/2,z.lf=Y.actualBoundingBoxLeft,z.rf=Y.actualBoundingBoxRight}const G=Math.min(...N.map(z=>Math.min(z.xb-z.l,z.xf-z.lf))),K=Math.max(...N.map(z=>Math.max(z.xb+z.r,z.xf+z.rf)));return{sB:_,sF:d,L:N,w:K-G,x0:G}},u=(v,k)=>{const M=m.map(I=>g(I,v,k)),_=v*.42,d=m.length*v+(m.length-1)*_,N=(TH-d)/2;let G=N+v,K=1e9,z=-1e9;const Y=[];return M.forEach((I,te)=>{const ee=(TW-I.w)/2-I.x0;for(const oe of I.L)oe.xbA=ee+oe.xb,oe.xfA=ee+oe.xf,oe.by=G,oe.li=te,Y.push(oe);K=Math.min(K,(TW-I.w)/2),z=Math.max(z,(TW+I.w)/2),G+=v+_}),{sB:M[0].sB,sF:M[0].sF,L:Y,w:z-K,x0:K,capH:v,top:N,h:d,maxW:Math.max(...M.map(I=>I.w))}},h=(v,k,M,_)=>{n.clearRect(0,0,TW,TH),n.fillStyle="#fff",n.textBaseline="alphabetic",n.font=(_?r:o).replace("{s}",_?v.sF:v.sB);for(const d of v.L)n.fillText(d.ch,_?d.xfA:d.xbA,d.by)},R=v=>{const k=[.05,.25,.5,.75,.96];n.font=o.replace("{s}",v.sB),n.fillStyle="#fff",n.textBaseline="alphabetic";const M=v.L.map(d=>(n.clearRect(0,0,TW,TH),n.fillText(d.ch,d.xbA,d.by),k.map(N=>{const G=Math.round(d.by-v.capH*(1-N)),K=n.getImageData(0,G,TW,1).data;let z=-1,Y=-1;for(let I=0;I<TW;I++)K[I*4+3]>127&&(z<0&&(z=I),Y=I);return[z,Y]})));let _=1e9;for(let d=0;d+1<M.length;d++)if(v.L[d].li===v.L[d+1].li)for(let N=0;N<k.length;N++){const G=M[d][N],K=M[d+1][N];G[1]>=0&&K[0]>=0&&(_=Math.min(_,K[0]-G[1]))}return _},T=p?Math.min(380,820/2.42):520,c=p?1250:1290;let y=0,b,U=0;for(let v=0;v<6;v++){let k=T;b=u(k,y);for(let _=0;_<4;_++)k=Math.min(T,k*c/b.maxW),b=u(k,y);const M=R(b);if(M>=i)break;y+=i-M+1}window.__lay={T:y,capH:b.capH,w:b.w,h:b.h,port:p};const E=b.x0,D=b.top,J=0,Z=b.w,$=b.h,q=0,O=v=>{h(b,U,0,v);const k=n.getImageData(0,0,TW,TH).data,M=TW*TH,_=new Float64Array(M),d=new Float64Array(M);for(let G=0;G<M;G++){const K=k[G*4+3]/255;if(K>=1)_[G]=0,d[G]=INF;else if(K<=0)_[G]=INF,d[G]=0;else{const z=Math.max(0,.5-K),Y=Math.max(0,K-.5);_[G]=z*z,d[G]=Y*Y}}edt(_,TW,TH),edt(d,TW,TH);const N=new Float32Array(M);for(let G=0;G<M;G++)N[G]=Math.sqrt(_[G])-Math.sqrt(d[G]);return N};await t();const B=O(!0),w=TW*TH;await t();let L=O(!1);await t();const X=v=>{const k=new Float64Array(w),M=new Float64Array(w);for(let d=0;d<w;d++)v[d]?(k[d]=0,M[d]=INF):(k[d]=INF,M[d]=0);edt(k,TW,TH),edt(M,TW,TH);const _=new Float32Array(w);for(let d=0;d<w;d++)_[d]=Math.sqrt(k[d])-Math.sqrt(M[d]);return _};{const v=+(window.__rc??0),k=+(window.__ro||14),M=new Uint8Array(w);let _=L;if(await t(),v>0){for(let d=0;d<w;d++)M[d]=L[d]<v?1:0;_=X(M);for(let d=0;d<w;d++)_[d]+=v}for(let d=0;d<w;d++)M[d]=_[d]<-k?1:0;await t(),L=X(M),await t();for(let d=0;d<w;d++)L[d]-=k;blur(L,TW,TH,1)}const C=new Uint8Array(w*4),j=new Float32Array(w),P=48,A=PUFV,x=64,F=v=>Math.round(Math.min(1,Math.max(0,v/P*.5+.5))*255);for(let v=0;v<w;v++){const k=F(B[v]),M=F(L[v]);C[v*4]=k,C[v*4+1]=M,C[v*4+2]=k,C[v*4+3]=255,j[v]=Math.min(1,Math.max(0,A-L[v]+.5))}const S=new Float32Array(j);blur(j,TW,TH,18);for(let v=0;v<w;v++){const k=Math.max(0,(j[v]-.5)*2);j[v]=S[v]>0?Math.pow(Math.min(1,k),.36)*Math.min(1,S[v]):0}blur(j,TW,TH,1);const V=new Uint8Array(w*4);for(let v=0;v<TH;v++)for(let k=0;k<TW;k++){const M=v*TW+k,_=(j[v*TW+Math.min(TW-1,k+1)]-j[v*TW+Math.max(0,k-1)])*.5*46,d=(j[Math.min(TH-1,v+1)*TW+k]-j[Math.max(0,v-1)*TW+k])*.5*46,N=Math.sqrt(_*_+d*d+1);V[M*4]=Math.round((-_/N*.5+.5)*255),V[M*4+1]=Math.round((-d/N*.5+.5)*255),V[M*4+2]=Math.round(Math.min(1,j[M])*255),V[M*4+3]=255}return{sdf:C,nrm:V,hh:j,box:[E,D,E+J+Z,D+$+q]}}const cv=document.getElementById("c"),clamp=(e,t,a)=>Math.max(t,Math.min(a,e)),QS=new URLSearchParams(location.search),VORT=QS.has("vort")?+QS.get("vort"):0;let LOCK=QS.has("m")?Math.max(-1,Math.min(4,+QS.get("m")-1)):-1,MODE=QS.get("mode")==="a"?0:1,CHROME=0;addEventListener("keydown",e=>{(e.key==="c"||e.key==="C")&&(CHROME=1-CHROME,dirty=!0),(e.key==="m"||e.key==="M")&&(MODE=1-MODE,dirty=!0),e.key>="0"&&e.key<="5"&&(LOCK=+e.key-1,dirty=!0)});const SL=3,THR=.5,ITER=18,EVEXP=.9828,DEBUG=/[?&]perf/.test(location.search);let W,H,DPR,mw,mh,sc,oxs,oys,gl=null,ready=!1,dirty=!0,rCap=1.5,slowN=0,ema=16.7;const COARSE=matchMedia("(pointer: coarse)").matches,isPort=()=>innerHeight>innerWidth*1.15&&(COARSE||innerWidth<600);window.__portrait=isPort(),COARSE&&window.__cabSS===void 0&&(window.__cabSS=1);let BK=null;const PZ=new Image;PZ.src="assets/img/pazirik.09d1ffb529.webp";const CI=new Image;CI.src="assets/img/iznik-cini.e9478c5979.webp";const WORD=(cv.dataset.word||"AC\u0130L").trim();function layout(){if(W=innerWidth,H=innerHeight,DPR=Math.min(devicePixelRatio||1,2,rCap),cv.width=Math.round(W*DPR),cv.height=Math.round(H*DPR),window.__portrait&&BK&&BK.box){const e=BK.box,t=e[2]-e[0],a=e[3]-e[1];sc=Math.min(W*.86/t,H*.52/a),oxs=W/2-(e[0]+t/2)*sc,oys=H*.4-(e[1]+a/2)*sc}else sc=Math.min(W/1600,H/900*1.5),sc=Math.max(sc,W/1600*.92),oxs=(W-1600*sc)/2,oys=(H-900*sc)/2-H*.035;dirty=!0,placeSl()}function placeSl(){const e=document.querySelector(".sl"),t=document.querySelector(".sl2");e&&window.__portrait&&!e.__p3&&(e.__p3=1,document.documentElement.classList.add("port"),e.innerHTML="Old craft.<br>New tools.<br>Same curiosity.",t&&(t.innerHTML=e.innerHTML)),e&&typeof BK<"u"&&BK&&BK.box&&(e.style.top=Math.round(BK.box[3]*sc+oys+70*sc+14)+"px",t&&(t.style.top=e.style.top));const a=document.querySelector(".hl");if(e&&a){const n=e.getBoundingClientRect(),o=parseFloat(getComputedStyle(e).fontSize)||18,r=window.__portrait,i=r?n.width*.92:n.width,s=r?n.left+n.width*.04:n.left,l=r?n.bottom-o*.45:n.top+o*.82,f=Math.round(i+o*2.2),p=Math.round(o*1.7);a.style.left=s-o*.9+"px",a.style.top=l+"px",a.style.width=f+"px",a.style.height=p+"px";const m=f+"x"+p;if(a.__key===m)return;a.__key=m,paintStroke(a,f,p)}}function paintStroke(e,t,a){const o=t*2,r=a*2;e.width=o,e.height=r;const i=e.getContext("2d");let s=2027;const l=()=>(s=s*16807%2147483647,s/2147483647),f=(P,A)=>{const x=P*7.3+A*13.1,F=Math.floor(x),S=x-F,V=k=>{const M=Math.sin(k*127.1+A*311.7)*43758.5453;return M-Math.floor(M)},v=S*S*(3-2*S);return V(F)*(1-v)+V(F+1)*v},p=(P,A)=>(f(P,A)+.5*f(P*2.1,A+3)+.25*f(P*4.3,A+7))/1.75,m=o*r,g=new Float32Array(m),u=new Float32Array(m),h=o*.03,R=o*.97,T=r*.5,c=r*.2;for(let P=Math.floor(h);P<R;P++){const A=(P-h)/(R-h),x=1-A,F=Math.min(1,x/.06),S=Math.pow(F,.6)*(1-Math.pow(Math.max(0,(x-.8)/.2),1.25)),V=T+(A-.5)*-r*.1-Math.sin(A*3.1416)*r*.13+(p(x*.8,1)-.5)*r*.04,v=.38+.62*Math.pow(Math.min(1,x/.09),.45),k=c*v*(.7+.3*S)*(1+.12*(p(x*2,2)-.5))*(1+x*.2),M=1+.9*Math.exp(-Math.pow((x-.12)/.08,2));for(let _=Math.max(0,Math.floor(V-k*1.6));_<Math.min(r,Math.ceil(V+k*1.6));_++){const d=(_-V)/k,N=Math.abs(d),G=(p(x*2.2+d*.3,5)-.5)*.3+(p(x*5,9+Math.round(d*10))-.5)*.3*x;if(N>1+G)continue;const K=Math.sin(d*9+p(x*1.2,d*2)*5)*.5+.5,z=Math.sin(d*3.2+x*1.6+p(x*.6,4)*3)*.5+.5,Y=x>.68?Math.max(0,(x-.68)/.32):0;if(Y>0&&p(x*3,Math.round(d*26)+40)<Y*.9)continue;const I=Math.sqrt(Math.max(0,1-N*N))*S*M,te=Math.exp(-Math.pow((N-.88)/.1,2))*.45*S,ee=_*o+P;g[ee]=I*(.62+.22*K+.28*z)+te+(p(x*1.4,d*7+11)-.5)*.22*I,u[ee]=Math.min(1,.4+I*1.5+te)}}for(let P=0;P<26;P++){const A=.66+l()*.34,x=1-A,F=h+(R-h)*x,S=T+(x-.5)*-r*.1-Math.sin(x*3.1416)*r*.13+(l()-.5)*c*3.2,V=.8+l()*2.4*(1-A*.4);for(let v=-V;v<=V;v++)for(let k=-V;k<=V;k++){const M=k*k+v*v;if(M>V*V)continue;const _=Math.round(F+k),d=Math.round(S+v);if(_<1||d<1||_>=o-1||d>=r-1)continue;const N=d*o+_;g[N]=Math.max(g[N],.5*(1-M/(V*V+.001))),u[N]=1}}const y=new Float32Array(g);for(let P=0;P<5;P++){const A=new Float32Array(y);for(let x=1;x<r-1;x++)for(let F=1;F<o-1;F++){const S=x*o+F;y[S]=(A[S]*4+A[S-1]+A[S+1]+A[S-o]+A[S+o])/8}}const b=new Float32Array(y);{const A=new Float32Array(m);for(let x=0;x<r;x++){let F=0;for(let S=-4;S<=4;S++)F+=y[x*o+Math.min(o-1,Math.max(0,S))];for(let S=0;S<o;S++)A[x*o+S]=F/9,F+=y[x*o+Math.min(o-1,S+4+1)]-y[x*o+Math.max(0,S-4)]}for(let x=0;x<o;x++){let F=0;for(let S=-4;S<=4;S++)F+=A[Math.min(r-1,Math.max(0,S))*o+x];for(let S=0;S<r;S++)b[S*o+x]=F/9,F+=A[Math.min(r-1,S+4+1)*o+x]-A[Math.max(0,S-4)*o+x]}}const U=i.createImageData(o,r),E=U.data,D=[200,16,46],J=[120,6,24],Z=[232,52,70],$=[-.45,-.7,.55],q=Math.hypot(...$),O=$[0]/q,B=$[1]/q,w=$[2]/q,L=O,X=B,C=w+1,j=Math.hypot(L,X,C);for(let P=5;P<r;P++)for(let A=4;A<o;A++){const x=P*o+A;if(u[x]>0)continue;const F=y[x-4*o-3];F>.03&&(E[x*4]=30,E[x*4+1]=10,E[x*4+2]=12,E[x*4+3]=Math.min(80,F*90))}for(let P=1;P<r-1;P++)for(let A=1;A<o-1;A++){const x=P*o+A;if(u[x]<=0)continue;const F=(y[x+1]-y[x-1])*14,S=(y[x+o]-y[x-o])*14,V=Math.hypot(F,S,1),v=-F/V,k=-S/V,M=1/V,_=Math.max(0,v*O+k*B+M*w),d=Math.max(0,(v*L+k*X+M*C)/j),N=Math.pow(d,70)*1.05+Math.pow(d,14)*.1,G=Math.max(-1,Math.min(1,(y[x]-b[x])*5)),K=G<0?J:Z,z=Math.abs(G)*.55;let Y=D[0]+(K[0]-D[0])*z,I=D[1]+(K[1]-D[1])*z,te=D[2]+(K[2]-D[2])*z;const ee=.55+.62*_;Y=Y*ee+255*N,I=I*ee+240*N,te=te*ee+235*N,E[x*4]=Math.min(255,Y),E[x*4+1]=Math.min(255,I),E[x*4+2]=Math.min(255,te),E[x*4+3]=Math.round(255*Math.min(1,u[x]))}i.putImageData(U,0,0)}let hlOn=!1,hlFirst=!0;function hlStep(){const e=document.querySelector(".hl");if(!e)return;const t=hlFirst?tt>4.5:tt-lastSeg>12.5;t&&!hlOn?(hlOn=!0,hlFirst=!1,placeSl(),e.classList.add("on"),scratch()):!t&&hlOn&&tt-lastSeg<.3&&(hlOn=!1,e.classList.remove("on"))}function scratch(){try{if(!AC||AC.state!=="running")return;const e=AC.currentTime,t=AC.sampleRate*.55|0,a=AC.createBuffer(1,t,AC.sampleRate),n=a.getChannelData(0);for(let s=0;s<t;s++){const l=s/t;n[s]=(Math.random()*2-1)*Math.pow(1-l,.6)*(.55+.45*Math.sin(l*60))}const o=AC.createBufferSource();o.buffer=a;const r=AC.createBiquadFilter();r.type="bandpass",r.frequency.value=3200,r.Q.value=1.4;const i=AC.createGain();i.gain.value=.05,o.connect(r),r.connect(i),i.connect(AC.destination),o.start(e)}catch{}}const VS=`#version 300 es
out vec2 vUv;void main(){vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));vUv=p;gl_Position=vec4(p*2.-1.,0.,1.);}`,HD=`#version 300 es
precision highp float;precision highp sampler2D;in vec2 vUv;out vec4 o;
`,SH={lens:`uniform sampler2D uS;uniform vec2 uRes;uniform vec4 uL;uniform vec3 uLv;uniform float uDpr;
void main(){vec2 p=vUv*uRes;vec2 c=uL.xy;float R=uL.z,A=uL.w;vec2 off=vec2(0.);float ab=0.,gl=0.;
 if(A>.002){vec2 d=p-c;vec2 u=uLv.xy;float al=dot(d,u);vec2 dd=d;if(al<0.)dd=d-u*al*(1.-1./uLv.z);
  float r=length(dd)/R;if(r<1.){float h=(1.-r*r);h*=h;float k=.20*A;off=-d*k*h;ab=A*smoothstep(.15,.85,r)*h*6.;
   gl=A*.035*smoothstep(.0,.7,r)*(1.-r)*max(0.,dot(normalize(d+1e-3),normalize(vec2(-.6,.75))));}}
 vec2 uv=(p+off)/uRes;vec2 e=normalize(off+1e-5)*ab*uDpr/uRes;
 vec3 col=vec3(texture(uS,uv+e).r,texture(uS,uv).g,texture(uS,uv-e).b);
 col+=gl;
 o=vec4(col,1.);}`,copy:`uniform sampler2D uS;
void main(){o=texture(uS,vUv);}`,curl:`uniform sampler2D uV;uniform vec2 uT;
void main(){float l=texture(uV,vUv-vec2(uT.x,0.)).y,r=texture(uV,vUv+vec2(uT.x,0.)).y,t=texture(uV,vUv+vec2(0.,uT.y)).x,b=texture(uV,vUv-vec2(0.,uT.y)).x;o=vec4(.5*((r-l)-(t-b)),0.,0.,1.);}`,vort:`uniform sampler2D uV,uC;uniform vec2 uT;uniform float uK;
void main(){float l=texture(uC,vUv-vec2(uT.x,0.)).x,r=texture(uC,vUv+vec2(uT.x,0.)).x,t=texture(uC,vUv+vec2(0.,uT.y)).x,b=texture(uC,vUv-vec2(0.,uT.y)).x,c=texture(uC,vUv).x;
 vec2 F=.5*vec2(abs(t)-abs(b),abs(r)-abs(l));F/=length(F)+1e-5;F*=uK*c*vec2(1.,-1.);o=vec4(texture(uV,vUv).xy+F,0.,1.);}`,injV:`uniform sampler2D uV;uniform vec2 uSize;uniform int uN;uniform vec4 uSeg[16];uniform vec4 uLd[16];uniform float uR;
void main(){vec2 c=vUv*uSize-.5;vec2 v=texture(uV,vUv).xy;float r2=uR*uR,rr=uR*1.1,rr2=rr*rr;
 for(int i=0;i<16;i++){if(i>=uN)break;vec4 s=uSeg[i];vec2 d=c-s.xy;float g=exp(-dot(d,d)/r2);v+=s.zw*g*.08;
  if(uLd[i].z>.5){vec2 e2=c-uLd[i].xy;float rq=uR*(1.1+uLd[i].w);float g2=exp(-dot(e2,e2)/(rq*rq));v+=s.zw*g2*.05;float el=max(length(d),1e-3);v+=d/el*g2*.05;}}
 o=vec4(v,0.,1.);}`,injS:`uniform sampler2D uS;uniform vec2 uSize;uniform int uN;uniform vec4 uSeg[16];uniform vec4 uLd[16];uniform float uSp[16];uniform float uR;
void main(){vec2 c=vUv*uSize-.5;vec4 m=texture(uS,vUv);float r2=uR*uR,rr=uR*1.1,rr2=rr*rr;
 for(int i=0;i<16;i++){if(i>=uN)break;vec4 s=uSeg[i];float sp=uSp[i];vec2 d=c-s.xy;float g=exp(-dot(d,d)/r2);
  m.x=min(1.,m.x+g*(.55*sp+.08));m.y=min(1.,m.y+g*.07*sp);m.z=max(m.z,min(1.,g*1.9));m.w+=g*.022*(sp+.3);
  if(uLd[i].z>.5){vec2 e2=c-uLd[i].xy;float rq=uR*(1.1+uLd[i].w);float g2=exp(-dot(e2,e2)/(rq*rq));m.x=min(1.,m.x+g2*.14*sp);m.y=min(1.,m.y+g2*.03*sp);}}
 o=m;}`,div:`uniform sampler2D uV;uniform vec2 uT;
void main(){o=vec4(-.5*(texture(uV,vUv+vec2(uT.x,0.)).x-texture(uV,vUv-vec2(uT.x,0.)).x+texture(uV,vUv+vec2(0.,uT.y)).y-texture(uV,vUv-vec2(0.,uT.y)).y),0.,0.,1.);}`,jac0:`uniform sampler2D uD;
void main(){o=vec4(texture(uD,vUv).x*.25,0.,0.,1.);}`,jac:`uniform sampler2D uP,uD;uniform vec2 uT;
void main(){float l=texture(uP,vUv-vec2(uT.x,0.)).x,r=texture(uP,vUv+vec2(uT.x,0.)).x,t=texture(uP,vUv+vec2(0.,uT.y)).x,b=texture(uP,vUv-vec2(0.,uT.y)).x;
 o=vec4((texture(uD,vUv).x+l+r+t+b)*.25,0.,0.,1.);}`,grad:`uniform sampler2D uP,uV;uniform vec2 uT;
void main(){float l=texture(uP,vUv-vec2(uT.x,0.)).x,r=texture(uP,vUv+vec2(uT.x,0.)).x,t=texture(uP,vUv+vec2(0.,uT.y)).x,b=texture(uP,vUv-vec2(0.,uT.y)).x;
 o=vec4(texture(uV,vUv).xy-.5*vec2(r-l,t-b),0.,1.);}`,advV:`uniform sampler2D uV;uniform vec2 uSize;uniform float uSx,uDamp;
void main(){vec2 c=vUv*uSize-.5;vec2 v=texture(uV,vUv).xy;o=vec4(texture(uV,(c-v*uSx+.5)/uSize).xy*uDamp,0.,1.);}`,advS:`uniform sampler2D uV,uS;uniform vec2 uSize;uniform float uSx,uCfd,uFd;
void main(){vec2 c=vUv*uSize-.5;vec2 v=texture(uV,vUv).xy;vec3 s=texture(uS,(c-v*uSx+.5)/uSize).xyz;o=vec4(s.x,s.y*uCfd,s.z*uFd,texture(uS,vUv).w);}`,rec:`uniform sampler2D uS;uniform vec2 uT;uniform float uVc,uDf,uTiny,uEx;
void main(){vec4 s0=texture(uS,vUv);float a=s0.x;float l=texture(uS,vUv-vec2(uT.x,0.)).x,r=texture(uS,vUv+vec2(uT.x,0.)).x,t=texture(uS,vUv+vec2(0.,uT.y)).x,b=texture(uS,vUv-vec2(0.,uT.y)).x;
 float gx=(r-l)*.5,gy=(t-b)*.5;a+=uDf*((l+r+t+b)*.25-a);a=a*uEx-uVc*sqrt(gx*gx+gy*gy)-uTiny;a=a<.004?0.:min(a,1.);o=vec4(a,s0.y,a>0.?s0.z:0.,s0.w);}`},FS_RENDER=`#version 300 es
precision highp float;precision highp sampler2D;out vec4 o;
uniform sampler2D uSdf,uNrm,uInk;uniform vec2 uRes,uInkSz,uMs,uSw;uniform vec3 uWd;uniform vec4 uSl;uniform float uDpr,uLock,uLi,uFoam,uWv,uHali,uMode,uChrome,uThree;uniform vec4 uUi[8];uniform sampler2D uSpr,uPz,uCini,uG0,uG3;uniform float uBakeGi;uniform vec3 uWipe;uniform vec4 uRoll;uniform float uGP,uGC;uniform vec2 uMx;uniform float uMxOn;uniform vec4 uTz;uniform float uTzMode;uniform sampler2D uCab;uniform float uCabOn,uCabBase,uShF;uniform vec3 uLamp;uniform vec4 uBox;uniform vec4 uRect;uniform float uT,uThr,uGoo;
__BODY__`;let PR={},TX={},FB={},F32=!1;function mkProg(e,t,a){const n=(f,p)=>{const m=gl.createShader(f);return gl.shaderSource(m,p),gl.compileShader(m),gl.getShaderParameter(m,gl.COMPILE_STATUS)?m:(console.error(a,gl.getShaderInfoLog(m)),null)},o=gl.createProgram(),r=n(gl.VERTEX_SHADER,e),i=n(gl.FRAGMENT_SHADER,t);if(!r||!i)return null;if(gl.attachShader(o,r),gl.attachShader(o,i),gl.linkProgram(o),!gl.getProgramParameter(o,gl.LINK_STATUS))return console.error(a,gl.getProgramInfoLog(o)),null;const s={},l=gl.getProgramParameter(o,gl.ACTIVE_UNIFORMS);for(let f=0;f<l;f++){const p=gl.getActiveUniform(o,f),m=p.name.replace(/\[0\]$/,"");s[m]=gl.getUniformLocation(o,p.name)}return{p:o,u:s}}function mkTex(e,t,a){const n=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,n),gl.texStorage2D(gl.TEXTURE_2D,1,F32?gl.RGBA32F:gl.RGBA16F,e,t),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,a),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,a),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);const o=gl.createFramebuffer();gl.bindFramebuffer(gl.FRAMEBUFFER,o),gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,n,0);const r=gl.checkFramebufferStatus(gl.FRAMEBUFFER)===gl.FRAMEBUFFER_COMPLETE;return gl.clearColor(0,0,0,1),gl.clear(gl.COLOR_BUFFER_BIT),{t:n,f:o,ok:r}}function dbl(e,t){const a=mkTex(e,t,gl.LINEAR),n=mkTex(e,t,gl.LINEAR);return{r:a,w:n,sw(){const o=this.r;this.r=this.w,this.w=o}}}function mkBg(){const e=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,e),gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA8,cv.width,cv.height,0,gl.RGBA,gl.UNSIGNED_BYTE,null);for(const[a,n]of[[gl.TEXTURE_MIN_FILTER,gl.LINEAR],[gl.TEXTURE_MAG_FILTER,gl.LINEAR],[gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE],[gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE]])gl.texParameteri(gl.TEXTURE_2D,a,n);const t=gl.createFramebuffer();gl.bindFramebuffer(gl.FRAMEBUFFER,t),gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,e,0),gl.bindFramebuffer(gl.FRAMEBUFFER,null),FB.bg&&(gl.deleteTexture(FB.bg.t),gl.deleteFramebuffer(FB.bg.f)),FB.bg={t:e,f:t,w:cv.width,h:cv.height}}function initSim(){return simW=innerWidth,simH=innerHeight,mw=Math.ceil(W/SL),mh=Math.ceil(H/SL),FB.vel=dbl(mw,mh),FB.st=dbl(mw,mh),FB.prs=dbl(mw,mh),FB.div=mkTex(mw,mh,gl.NEAREST),FB.curl=mkTex(mw,mh,gl.NEAREST),mkBg(),FB.vel.r.ok&&FB.st.r.ok&&FB.prs.r.ok&&FB.div.ok&&FB.curl.ok}function boot(){if(ready||!BK)return;if(gl=cv.getContext("webgl2",{antialias:!1,alpha:!1}),!gl||!(gl.getExtension("EXT_color_buffer_float")||gl.getExtension("EXT_color_buffer_half_float"))){document.documentElement.classList.add("nogl");return}F32=!!(gl.getExtension("OES_texture_float_linear")&&gl.getExtension("EXT_color_buffer_float")),layout();for(const a in SH)PR[a]=mkProg(VS,HD+SH[a],a);PR.render=mkProg(VS,FS_RENDER.replace("__BODY__",RENDER_BODY),"render");{const a=RENDER_BODY,n=a.indexOf(` if(aInk>0.){
  float cf=fs.g;`),o=a.lastIndexOf("o=vec4(col,tzm);}");PR.renderC=n>0&&o>n?mkProg(VS,FS_RENDER.replace("__BODY__",a.slice(0,n)+` col=mix(col,blk,aInk);
 `+a.slice(o)),"renderC"):PR.render}PR.bakeG=mkProg(VS,FS_RENDER.replace("__BODY__",RENDER_BODY.slice(0,RENDER_BODY.indexOf("void main(){"))+"void main(){vec2 xy=gl_FragCoord.xy-vec2(60.);float kn;vec3 c=groundP(xy,uBakeGi,kn);o=vec4(c,kn);}"),"bakeG");for(const a in PR)if(!PR[a]){document.documentElement.classList.add("nogl");return}gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL,gl.NONE),gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1);const e=a=>{const n=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,n),gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,a);for(const[o,r]of[[gl.TEXTURE_MIN_FILTER,gl.LINEAR],[gl.TEXTURE_MAG_FILTER,gl.LINEAR],[gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE],[gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE]])gl.texParameteri(gl.TEXTURE_2D,o,r);return n},t=a=>{const n=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,n),gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,TW,TH,0,gl.RGBA,gl.UNSIGNED_BYTE,a);for(const[o,r]of[[gl.TEXTURE_MIN_FILTER,gl.LINEAR],[gl.TEXTURE_MAG_FILTER,gl.LINEAR],[gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE],[gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE]])gl.texParameteri(gl.TEXTURE_2D,o,r);return n};TX.sdf=t(BK.sdf),TX.nrm=t(BK.nrm);{const a="00000001100000000000000000000000001221000000000000000000000000122100000000000000000000000001100000000000000000000000001331000000000000001100000000133100000000000001551000000013310000000000001533100001111331111111111111333331001333344444444333333333333101333334455554433333333311100133333444444443333333331000113333333333333333333331000010133333333333333333333100000001331013310000013310133100000133101331000001331013310000013100131000000131001310000001310013100000013100131000000110001100000001100011000000000000000000000000000000000000000000000000000000000000",n=new Uint8Array(2240);for(let r=0;r<560;r++)n[r*4]=+a[r]*40,n[r*4+3]=255;const o=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,o),gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,28,20,0,gl.RGBA,gl.UNSIGNED_BYTE,n),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE),TX.spr=o}{const a=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,a),gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,1,1,0,gl.RGBA,gl.UNSIGNED_BYTE,new Uint8Array([160,40,30,255]));for(const[o,r]of[[gl.TEXTURE_MIN_FILTER,gl.LINEAR],[gl.TEXTURE_MAG_FILTER,gl.LINEAR],[gl.TEXTURE_WRAP_S,gl.REPEAT],[gl.TEXTURE_WRAP_T,gl.REPEAT]])gl.texParameteri(gl.TEXTURE_2D,o,r);TX.pz=a;{const o=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,o),gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,1,1,0,gl.RGBA,gl.UNSIGNED_BYTE,new Uint8Array([230,230,240,255]));for(const[i,s]of[[gl.TEXTURE_MIN_FILTER,gl.LINEAR],[gl.TEXTURE_MAG_FILTER,gl.LINEAR],[gl.TEXTURE_WRAP_S,gl.REPEAT],[gl.TEXTURE_WRAP_T,gl.REPEAT]])gl.texParameteri(gl.TEXTURE_2D,i,s);TX.cini=o;const r=()=>{gl.bindTexture(gl.TEXTURE_2D,TX.cini),gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,!1),gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,CI),dirty=!0};CI.complete&&CI.naturalWidth?r():CI.onload=r}const n=()=>{gl.bindTexture(gl.TEXTURE_2D,TX.pz),gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,PZ),dirty=!0};PZ.complete&&PZ.naturalWidth?n():PZ.onload=n}{const a=n=>{const o=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,o),gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA8,1720,1020,0,gl.RGBA,gl.UNSIGNED_BYTE,null);for(const[i,s]of[[gl.TEXTURE_MIN_FILTER,gl.LINEAR],[gl.TEXTURE_MAG_FILTER,gl.LINEAR],[gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE],[gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE]])gl.texParameteri(gl.TEXTURE_2D,i,s);const r=gl.createFramebuffer();gl.bindFramebuffer(gl.FRAMEBUFFER,r),gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,o,0);for(let i=0;i<8;i++)gl.activeTexture(gl.TEXTURE0+i),gl.bindTexture(gl.TEXTURE_2D,i===1?TX.nrm:i===0?TX.sdf:null);return gl.activeTexture(gl.TEXTURE0),gl.useProgram(PR.bakeG.p),gl.uniform1f(PR.bakeG.u.uBakeGi,n),gl.viewport(0,0,1720,1020),gl.drawArrays(gl.TRIANGLES,0,3),gl.bindFramebuffer(gl.FRAMEBUFFER,null),gl.deleteFramebuffer(r),o};TX.g0=a(0),TX.g3=a(3)}if(!initSim())if(F32){if(F32=!1,FB={},!initSim()){document.documentElement.classList.add("nogl");return}}else{document.documentElement.classList.add("nogl");return}gl.disable(gl.DEPTH_TEST),gl.disable(gl.BLEND),tq=gl.getExtension("EXT_disjoint_timer_query_webgl2"),ready=!0,dirty=!0,window.THREE&&MODE&&(initThree(),T3&&!window.__noCab&&buildCables()&&(CAB.start=.35))}function bind(e,t){gl.activeTexture(gl.TEXTURE0+e),gl.bindTexture(gl.TEXTURE_2D,t)}function pass(e,t,a,n){gl.useProgram(e.p),t?(gl.bindFramebuffer(gl.FRAMEBUFFER,t.f),gl.viewport(0,0,a,n)):(gl.bindFramebuffer(gl.FRAMEBUFFER,null),gl.viewport(0,0,cv.width,cv.height)),gl.drawArrays(gl.TRIANGLES,0,3)}cv.addEventListener("webglcontextlost",e=>{e.preventDefault(),ready=!1}),cv.addEventListener("webglcontextrestored",()=>{PR={},TX={},FB={},T3=null,qPend=null,boot()});let px=null,py=null,pt=0,carry=0,spS=0,paint=0,stress=0,inkAmt=0,auto=!0,at=0,lastSeg=-99;const Q=[];let wipeDX=1,wipeDY=0,wipeK=0,mvDX=0,mvDY=0,G_CUR=0,G_PREV=0,wipeX=800,wipeY=450,wipeT0=-99,travel=0,lastStk=-1e9;const WAVE_T=6.3;let TZM=1,tzDone=!1,tzW=!1,tzT0=-99,tzX=800,tzY=450,tzOn=!1,TF=0,tfL=0,SWX=0,SWY=0,tzI=0;function teaser(){{const t=tzOn&&tt-tzT0<8?1:0,a=Math.min(Math.max(tt-tfL,0),.05);tfL=tt,TF+=(t-TF)*(1-Math.exp(-a*7)),TF<.002&&!t&&(TF=0)}const e=tt-lastSeg>5&&!auto&&tt>4;if(tzOn)!tzW&&tt-tzT0>6&&(tzW=!0,cabWind()),tt-tzT0>8.6&&(tzOn=!1,tzT0=tt);else if(e&&!RM&&tt>6&&(!tzDone||tt-tzT0>25)){tzDone=!0;const t=BK.box;tzOn=!0,tzW=!1,tzT0=tt,TZM=QS.has("tz")?+QS.get("tz"):[1,3,2,4][tzI++%4],tzX=t[0]+(t[2]-t[0])*Math.random(),tzY=t[1]-120+(t[3]-t[1]+240)*Math.random()}}let lastMx=-1,lastMy=-1,hintT=-99,clicks=0,rollD=[1,0,-2e3,2e3];function newWave(e,t,a){if(tt-wipeT0<WAVE_T)return!1;{const s=Math.hypot(mvDX,mvDY);s>.001?(wipeDX=mvDX/s,wipeDY=mvDY/s,wipeK=Math.min(1,s/40)):wipeK=0}G_PREV=G_CUR,G_CUR=[2,3,1,0][G_CUR],wipeX=(e-oxs)/sc,wipeY=(t-oys)/sc,wipeT0=a?tt-99:tt;const n=Math.random()*6.2832,o=Math.cos(n),r=Math.sin(n),i=[[-oxs/sc,-oys/sc],[(W-oxs)/sc,-oys/sc],[-oxs/sc,(H-oys)/sc],[(W-oxs)/sc,(H-oys)/sc]].map(s=>(s[0]-wipeX)*o+(s[1]-wipeY)*r);return rollD=[o,r,Math.min(...i)-60,Math.max(...i)+60],!0}function newStroke(e,t){}function stroke(e,t,a){if((px===null||a-lastStk>450)&&void 0,lastStk=a,px===null){px=e,py=t,pt=a,carry=0;return}lastMx=e,lastMy=t,mvDX=mvDX*.85+(e-px)*.15,mvDY=mvDY*.85+(t-py)*.15,travel+=Math.hypot(e-px,t-py),travel>W*1.7&&!tzOn&&newWave(e,t,!1)&&(travel=0);const n=e-px,o=t-py,r=Math.hypot(n,o);if(r<.01)return;const i=Math.max(4,a-pt),s=Math.min(1,r/i*16.7/(W*.05));spS+=(s-spS)*.6;let l=W*.012;r/l>12&&(l=r/12);const f=n/r,p=o/r;let m=l-carry;for(;m<=r;)Q.push([px+f*m,py+p*m,f*l,p*l,spS]),m+=l;if(carry=r-(m-l),paint+=r*2e-4,px=e,py=t,pt=a,Q.length>128){const g=[];for(let u=0;u+1<Q.length;u+=2){const h=Q[u],R=Q[u+1];g.push([R[0],R[1],h[2]+R[2],h[3]+R[3],Math.max(h[4],R[4])])}Q.length%2&&g.push(Q[Q.length-1]),Q.length=0,Q.push(...g)}}let mxT=0,myT=0,msx=0,msy=0;const LAMP={th:.28,w:0,on:-1,fl:0,lx:-1,lt:0};function lampStep(e){LAMP.w+=(-(9.8/2.4)*Math.sin(LAMP.th)-.1*LAMP.w)*e,Math.abs(LAMP.th)<.16&&Math.abs(LAMP.w)<.5&&(LAMP.w+=Math.sign(LAMP.w||1)*.1*e),LAMP.w=Math.max(-3,Math.min(3,LAMP.w)),LAMP.th+=LAMP.w*e}function lampBump(e,t){if(LAMP.lx>=0){const a=Math.max(8,t-LAMP.lt),n=(e-LAMP.lx)/a*16.7/W;Math.abs(n)>.012&&(LAMP.w+=n*1.1)}LAMP.lx=e,LAMP.lt=t}function lampLi(e){if(LAMP.on<0)return 0;const t=e-LAMP.on;if(t<0)return 0;const a=[[0,.07,.9],[.07,.17,.08],[.17,.22,.75],[.22,.4,.15],[.4,.47,1],[.47,.52,.35]];for(const[n,o,r]of a)if(t>=n&&t<o)return r;return 1}let AC=null;function klak(){try{AC=AC||new(window.AudioContext||window.webkitAudioContext);const e=AC.currentTime,t=AC.sampleRate*.09|0,a=AC.createBuffer(1,t,AC.sampleRate),n=a.getChannelData(0);for(let s=0;s<t;s++){const l=Math.exp(-s/(AC.sampleRate*.006));n[s]=(Math.random()*2-1)*l*(s<AC.sampleRate*.012?1:.25)}const o=AC.createBufferSource();o.buffer=a;const r=AC.createBiquadFilter();r.type="bandpass",r.frequency.value=2400,r.Q.value=.9;const i=AC.createGain();i.gain.value=.35,o.connect(r),r.connect(i),i.connect(AC.destination),o.start(e)}catch{}}function onMove(e){mpx=e.clientX,mpy=e.clientY,mxT=e.clientX/W*2-1,myT=e.clientY/H*2-1,lampBump(e.clientX,e.timeStamp),auto&&(auto=!1,px=null);const t=e.getCoalescedEvents?e.getCoalescedEvents():null;if(t&&t.length)for(const a of t)stroke(a.clientX,a.clientY,a.timeStamp);else stroke(e.clientX,e.clientY,e.timeStamp)}addEventListener("pointermove",onMove,{passive:!0});let swS=null;addEventListener("pointerdown",e=>{px=null,stroke(e.clientX,e.clientY,e.timeStamp),swS={x:e.clientX,y:e.clientY,t:e.timeStamp},e.pointerType!=="touch"&&!e.target.closest("a")&&newWave(e.clientX,e.clientY,!1)&&clicks++},{passive:!0}),addEventListener("pointerup",e=>{if(e.pointerType!=="touch"||!swS)return;const t=e.clientX-swS.x,a=e.clientY-swS.y,n=e.timeStamp-swS.t,o=Math.hypot(t,a);swS=null,n<320&&o>Math.min(W,H)*.18&&o/n>.55&&(mvDX=t/o*40,mvDY=a/o*40,newWave(e.clientX,e.clientY,!1)&&clicks++)},{passive:!0});for(const e of["pointerup","pointercancel"])addEventListener(e,t=>{t.pointerType!=="mouse"&&(px=null)},{passive:!0});document.documentElement.addEventListener("mouseleave",()=>{px=null}),addEventListener("blur",()=>{px=null});function autoStroke(e){if(!auto||RM)return;if(at+=e,at>3){auto=!1,px=null;return}const t=at/3;stroke(W*(.18+.64*t),H*(.5+.12*Math.sin(t*6)),performance.now())}const SAY=[[0,"\u0130mleci gezdir."],[.14,"Hmm."],[.34,"Bir talep daha."],[.56,"Bu bir e-posta olabilirdi."],[.8,"AC\u0130L!!!"]],segA=new Float32Array(64),ldA=new Float32Array(64),spA=new Float32Array(16);let SIMT=0,tt=0,nSeg=0;function project(){gl.useProgram(PR.div.p),bind(0,FB.vel.r.t),gl.uniform1i(PR.div.u.uV,0),gl.uniform2f(PR.div.u.uT,1/mw,1/mh),pass(PR.div,FB.div,mw,mh),gl.useProgram(PR.jac0.p),bind(0,FB.div.t),gl.uniform1i(PR.jac0.u.uD,0),pass(PR.jac0,FB.prs.w,mw,mh),FB.prs.sw(),gl.useProgram(PR.jac.p),gl.uniform1i(PR.jac.u.uD,1),gl.uniform1i(PR.jac.u.uP,0),gl.uniform2f(PR.jac.u.uT,1/mw,1/mh),bind(1,FB.div.t);for(let e=1;e<ITER;e++)bind(0,FB.prs.r.t),pass(PR.jac,FB.prs.w,mw,mh),FB.prs.sw();gl.useProgram(PR.grad.p),gl.uniform1i(PR.grad.u.uP,0),gl.uniform1i(PR.grad.u.uV,1),gl.uniform2f(PR.grad.u.uT,1/mw,1/mh),bind(0,FB.prs.r.t),bind(1,FB.vel.r.t),pass(PR.grad,FB.vel.w,mw,mh),FB.vel.sw()}function packSegs(){nSeg=Math.min(16,Q.length);const e=mw/W,t=mh/H;for(let a=0;a<nSeg;a++){const n=Q.shift(),o=n[0]*e,r=(H-n[1])*t,i=n[2]*e,s=-n[3]*t;segA[a*4]=o,segA[a*4+1]=r,segA[a*4+2]=i,segA[a*4+3]=s;const l=Math.hypot(n[2],n[3])||1,f=n[4],p=Math.min(W*(.07+.08*f),l*SL*(2.4+2.2*f))/SL,m=i/(Math.hypot(i,s)||1),g=s/(Math.hypot(i,s)||1),u=(Math.random()-.5)*2*p*.55*f*f;ldA[a*4]=o+m*p-g*u,ldA[a*4+1]=r+g*p+m*u,ldA[a*4+2]=p>1?1:0,ldA[a*4+3]=.45*f*(.6+.8*Math.random()),spA[a]=n[4],inkAmt=Math.min(1,inkAmt+.0047*Math.min(1,n[4]*1.5+.3))}nSeg&&(lastSeg=tt)}function inject(){if(!nSeg)return;const e=W*.032/SL;gl.useProgram(PR.injV.p),bind(0,FB.vel.r.t),gl.uniform1i(PR.injV.u.uV,0),gl.uniform2f(PR.injV.u.uSize,mw,mh),gl.uniform1i(PR.injV.u.uN,nSeg),gl.uniform4fv(PR.injV.u.uSeg,segA),gl.uniform4fv(PR.injV.u.uLd,ldA),gl.uniform1f(PR.injV.u.uR,e),pass(PR.injV,FB.vel.w,mw,mh),FB.vel.sw(),gl.useProgram(PR.injS.p),bind(0,FB.st.r.t),gl.uniform1i(PR.injS.u.uS,0),gl.uniform2f(PR.injS.u.uSize,mw,mh),gl.uniform1i(PR.injS.u.uN,nSeg),gl.uniform4fv(PR.injS.u.uSeg,segA),gl.uniform4fv(PR.injS.u.uLd,ldA),gl.uniform1fv(PR.injS.u.uSp,spA),gl.uniform1f(PR.injS.u.uR,e),pass(PR.injS,FB.st.w,mw,mh),FB.st.sw()}let idleS=0;function sim(e){idleS=nSeg>0?0:idleS+e;const t=window.__noAcc?1:(()=>{const o=(r,i,s)=>(s=Math.max(0,Math.min(1,(s-r)/(i-r))),s*s*(3-2*s));return Math.min(2.5,(.45+.06*Math.exp(idleS*.55))*(1+.17*o(4.4,6,idleS)))})();T3&&ourState();const a=e*60,n=W*.032/SL;inject();for(let o=1;o<8&&Q.length;o++)packSegs(),inject();VORT>0&&(gl.useProgram(PR.curl.p),bind(0,FB.vel.r.t),gl.uniform1i(PR.curl.u.uV,0),gl.uniform2f(PR.curl.u.uT,1/mw,1/mh),pass(PR.curl,FB.curl,mw,mh),gl.useProgram(PR.vort.p),bind(0,FB.vel.r.t),bind(1,FB.curl.t),gl.uniform1i(PR.vort.u.uV,0),gl.uniform1i(PR.vort.u.uC,1),gl.uniform2f(PR.vort.u.uT,1/mw,1/mh),gl.uniform1f(PR.vort.u.uK,VORT*e),pass(PR.vort,FB.vel.w,mw,mh),FB.vel.sw()),project(),gl.useProgram(PR.advV.p),bind(0,FB.vel.r.t),gl.uniform1i(PR.advV.u.uV,0),gl.uniform2f(PR.advV.u.uSize,mw,mh),gl.uniform1f(PR.advV.u.uSx,a),gl.uniform1f(PR.advV.u.uDamp,Math.pow(.982,a)),pass(PR.advV,FB.vel.w,mw,mh),FB.vel.sw(),project(),gl.useProgram(PR.advS.p),bind(0,FB.vel.r.t),bind(1,FB.st.r.t),gl.uniform1i(PR.advS.u.uV,0),gl.uniform1i(PR.advS.u.uS,1),gl.uniform2f(PR.advS.u.uSize,mw,mh),gl.uniform1f(PR.advS.u.uSx,a),gl.uniform1f(PR.advS.u.uCfd,Math.pow(.88,e)),gl.uniform1f(PR.advS.u.uFd,Math.pow(.05,e/1.15)),pass(PR.advS,FB.st.w,mw,mh),FB.st.sw(),gl.useProgram(PR.rec.p),bind(0,FB.st.r.t),gl.uniform1i(PR.rec.u.uS,0),gl.uniform2f(PR.rec.u.uT,1/mw,1/mh),gl.uniform1f(PR.rec.u.uVc,W*.0076/SL*e*t),gl.uniform1f(PR.rec.u.uDf,.07*Math.min(1,a)),gl.uniform1f(PR.rec.u.uTiny,.0115*e*t),gl.uniform1f(PR.rec.u.uEx,Math.pow(EVEXP,e*t)),pass(PR.rec,FB.st.w,mw,mh),FB.st.sw(),SIMT+=e}const LZ={x:-1,y:-1,vx:0,vy:0,A:0,act:!1,last:-9};function lensStep(e){if(COARSE){LZ.A=0,LZ.act=!1;return}if(mpx<-999){LZ.A=Math.max(0,LZ.A-e*2),LZ.act=LZ.A>0;return}LZ.x<0&&(LZ.x=mpx,LZ.y=mpy);const t=230,a=2*Math.sqrt(t)*.62,n=4,o=Math.min(e,.05)/n;for(let s=0;s<n;s++){const l=(mpx-LZ.x)*t-LZ.vx*a,f=(mpy-LZ.y)*t-LZ.vy*a;LZ.vx+=l*o,LZ.vy+=f*o,LZ.x+=LZ.vx*o,LZ.y+=LZ.vy*o}Math.hypot(LZ.vx,LZ.vy)>25&&(LZ.last=tt);const i=tt-LZ.last<.25?1:0;LZ.A+=(i-LZ.A)*(1-Math.exp(-e*(i?3.2:1.6))),LZ.act=LZ.A>.003}function lensPass(){const e=PR.lens;gl.useProgram(e.p),bind(0,FB.bg.t),gl.uniform1i(e.u.uS,0),gl.uniform2f(e.u.uRes,cv.width,cv.height),gl.uniform1f(e.u.uDpr,DPR);const t=Math.hypot(LZ.vx,LZ.vy),a=t>1?LZ.vx/t:0,n=t>1?-LZ.vy/t:0,o=mpx>-999?mpx:LZ.x,r=mpx>-999?mpy:LZ.y;gl.uniform4f(e.u.uL,o*DPR,(H-r)*DPR,44*DPR*(1+Math.min(.25,t/3e3)),LZ.A),gl.uniform3f(e.u.uLv,a,n,1+Math.min(1.3,t/700)),pass(e,null)}let nDraw=0,idleN=0,curLi=1,mpx=-9999,mpy=-9999;const UIR=new Float32Array(32).fill(-9999);function uiRects(){const e=[".tr",".br"].map(a=>document.querySelector(a)).filter(Boolean);let t=0;for(const a of e){if(t>=8)break;const n=a.getBoundingClientRect();n.width<1||(UIR[t*4]=n.left-4,UIR[t*4+1]=n.top-3,UIR[t*4+2]=n.right+4,UIR[t*4+3]=n.bottom+3,t++)}{const a=document.querySelector(".sl");if(a){const n=a.getBoundingClientRect();SLR[0]=n.left,SLR[1]=n.top,SLR[2]=n.right,SLR[3]=n.bottom}}}const SLR=new Float32Array([-9999,-9999,-9999,-9999]);let slLt=!1,slBuf=null,slTO=0,slPB=null,slFence=null,slW=0,slRows=0;window.__slc=[0,0,0,0];function slSample(){if(window.__slc[0]++,!document.querySelector(".sl")||SLR[0]<-999)return;if(slFence){if(gl.clientWaitSync(slFence,0,0)===gl.TIMEOUT_EXPIRED&&(window.__slc[1]++,++slTO<8))return;slTO=0,window.__slc[2]++,gl.deleteSync(slFence),slFence=null,(!slBuf||slBuf.length<slW*4*slRows)&&(slBuf=new Uint8Array(slW*4*slRows)),gl.bindBuffer(gl.PIXEL_PACK_BUFFER,slPB),gl.getBufferSubData(gl.PIXEL_PACK_BUFFER,0,slBuf,0,slW*4*slRows),gl.bindBuffer(gl.PIXEL_PACK_BUFFER,null);let i=0,s=0,l=0;for(let g=0;g<slW*slRows;g+=3){const u=(.3*slBuf[g*4]+.55*slBuf[g*4+1]+.15*slBuf[g*4+2])/255;i+=u,s+=u*u,l++}if(!l)return;const f=i/l,p=Math.sqrt(Math.max(0,s/l-f*f));window.__slL=[f,p];const m=G_CUR===2&&f<(slLt?.94:.9);m!==slLt?(slPend=(slPend||0)+1,slPend>=3&&(slPend=0,slLt=m,document.documentElement.classList.toggle("slsolid",slLt))):slPend=0;return}const t=Math.max(0,Math.round(SLR[0]*DPR)),a=Math.min(cv.width,Math.round(SLR[2]*DPR)),n=a-t;if(n<8)return;slPB||(slPB=gl.createBuffer()),gl.bindBuffer(gl.PIXEL_PACK_BUFFER,slPB),gl.bufferData(gl.PIXEL_PACK_BUFFER,n*4*3,gl.STREAM_READ);let o=0;for(const r of[.3,.55,.8]){const i=Math.round(cv.height-(SLR[1]+(SLR[3]-SLR[1])*r)*DPR);i<0||i>=cv.height||(gl.readPixels(t,i,n,1,gl.RGBA,gl.UNSIGNED_BYTE,o*n*4),o++)}gl.bindBuffer(gl.PIXEL_PACK_BUFFER,null),o&&(slW=n,slRows=o,slFence=gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE,0),gl.flush())}let slPend=0;setInterval(uiRects,500),addEventListener("resize",uiRects);function draw(){nDraw++,T3&&ourState(),CAB&&renderCables(),(!FB.bg||FB.bg.w!==cv.width||FB.bg.h!==cv.height)&&(gl.activeTexture(gl.TEXTURE0),mkBg());const e=MODE&&PR.renderC?PR.renderC:PR.render;gl.useProgram(e.p),bind(0,TX.sdf),bind(1,TX.nrm),bind(2,FB.st.r.t),bind(3,TX.spr),gl.uniform1i(e.u.uSpr,3),bind(4,TX.pz),gl.uniform1i(e.u.uPz,4),bind(5,TX.cini),gl.uniform1i(e.u.uCini,5),bind(6,TX.g0),gl.uniform1i(e.u.uG0,6),bind(7,TX.g3),gl.uniform1i(e.u.uG3,7),gl.uniform1f(e.u.uWv,window.__Wv||0),gl.uniform1f(e.u.uHali,window.__Hali!==void 0?window.__Hali:-1),gl.uniform2f(e.u.uMs,msx,msy),gl.uniform4f(e.u.uSl,SLR[0],SLR[1],SLR[2],SLR[3]),SWX=window.__noSw?0:msx*7+1.2*Math.sin(tt*.23),SWY=window.__noSw?0:msy*5+.9*Math.sin(tt*.31),gl.uniform2f(e.u.uSw,SWX,SWY),gl.uniform1f(e.u.uDpr,DPR),gl.uniform1f(e.u.uLock,LOCK),gl.uniform1f(e.u.uMode,MODE),gl.uniform1f(e.u.uThree,T3?TF:0),gl.uniform3f(e.u.uWd,wipeDX,wipeDY,wipeK),gl.uniform3f(e.u.uWipe,wipeX,wipeY,Math.max(0,tt-wipeT0)),gl.uniform4f(e.u.uRoll,rollD[0],rollD[1],rollD[2],rollD[3]),gl.uniform1f(e.u.uGP,G_PREV),gl.uniform1f(e.u.uGC,G_CUR);{const t=cabTex();bind(8,t),gl.uniform1i(e.u.uCab,8),gl.uniform1f(e.u.uCabOn,t?1:0);{const a=tt-tzT0,n=(o,r,i)=>(i=Math.max(0,Math.min(1,(i-o)/(r-o))),i*i*(3-2*i));gl.uniform1f(e.u.uShF,tzOn?1-n(.1,1.1,a)+n(6.2,7.8,a):1)}gl.uniform1f(e.u.uCabBase,CAB?Math.max(0,Math.min(1,1-(tt-CAB.start-.35)/(CAB.dur+.7))):0)}gl.uniform1f(e.u.uTzMode,TZM),gl.uniform2f(e.u.uMx,(mpx-oxs)/sc,(mpy-oys)/sc),gl.uniform1f(e.u.uMxOn,mpx>-999?1:0),gl.uniform4f(e.u.uTz,tzX,tzY,Math.max(0,tt-tzT0),tzOn?1:0),gl.uniform4fv(e.u.uUi,UIR),gl.uniform1f(e.u.uChrome,CHROME);{const t=-.62+.16*Math.sin(tt*.07)+.28*msx;gl.uniform3f(e.u.uLamp,800+t*3e3,-1700-120*msy,2300);const a=.22+.78*Math.min(1,Math.max(0,(tt-.4)/1.6));curLi=a*a*(3-2*a),gl.uniform1f(e.u.uLi,window.__Li!==void 0?window.__Li:curLi),gl.uniform1f(e.u.uFoam,window.__Foam!==void 0?window.__Foam:-1),gl.uniform4f(e.u.uBox,BK.box[0],BK.box[1],BK.box[2],BK.box[3])}gl.uniform1i(e.u.uSdf,0),gl.uniform1i(e.u.uNrm,1),gl.uniform1i(e.u.uInk,2),gl.uniform2f(e.u.uRes,cv.width,cv.height),gl.uniform2f(e.u.uInkSz,mw,mh),gl.uniform4f(e.u.uRect,oxs*DPR,oys*DPR,1600*sc*DPR,900*sc*DPR),gl.uniform1f(e.u.uT,tt+(window.__T0||0)),gl.uniform1f(e.u.uThr,THR);{const t=clamp((tt-.2)/1.5,0,1);gl.uniform1f(e.u.uGoo,window.__gooF!==void 0?window.__gooF:1-Math.pow(1-t,3))}if(pass(e,FB.bg,cv.width,cv.height),lensPass(),(nDraw%10===0||slFence)&&slSample(),T3&&MODE&&tzOn){const t=-.62+.16*Math.sin(tt*.07)+.28*msx,a=800+t*3e3,n=-1700-120*msy,o=2300,r=a-800,i=-(n-450),s=o,l=Math.hypot(r,i,s);!window.__no3&&(nSeg>0||tzOn||tt-lastSeg<45||tt<3.2)&&drawThree([r/l,i/l,s/l])}}let T3=null;const TEASE=`float t_h21(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
vec2 t_h22(vec2 p){float n=t_h21(p);return vec2(n,t_h21(p+n+17.31));}
float t_vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(t_h21(i),t_h21(i+vec2(1.,0.)),f.x),mix(t_h21(i+vec2(0.,1.)),t_h21(i+vec2(1.,1.)),f.x),f.y);}
/* bekleme efekti: rev=g\xF6r\xFCn\xFCrl\xFCk, hm=\u015Fi\u015Fkinlik \xE7arpan\u0131, ha=ek y\xFCkseklik (px), film=k\xF6p\xFCk filmi, fb=kabarc\u0131k i\xE7 koordinat\u0131 */
void tease(vec2 xy,vec2 o,float t,float mode,out float rev,out float hm,out float ha,out float film,out vec3 fb){
 float dT=length(xy-o);rev=0.;hm=0.;ha=0.;film=0.;fb=vec3(0.);
 float df=smoothstep(5.5,7.7,t+(t_vn(xy/230.)-.5)*1.3);                 /* yumu\u015Fak, d\xFCzensiz s\xF6n\xFCm */
 if(mode<.5){
  float ang=atan(xy.y-o.y,xy.x-o.x);float fr=dT+sin(ang*3.+t*1.2)*15.-t*520.;
  rev=1.-smoothstep(-90.,90.,fr);hm=smoothstep(0.,320.,-fr);
  float env=exp(-max(-fr,0.)/300.)*smoothstep(160.,-20.,fr)*(1.-smoothstep(3.4,4.8,t));
  ha=sin(fr*.075-t*5.)*env*9.;
 }else if(mode<1.5){
  /* m\u0131s\u0131r: yuvarlak tanecikler \u015Fi\u015Fer, ta\u015Far, geri oturur, birle\u015Fir */
  vec2 g=xy/58.;vec2 i=floor(g);float cov=0.,bump=0.;
  for(int y=-1;y<=1;y++)for(int x=-1;x<=1;x++){vec2 c=i+vec2(float(x),float(y));vec2 cc=c+.5+(t_h22(c)-.5)*.55;float id=t_h21(c+9.1);
   float tp=.15+id*2.3+dT/1600.*.6;float e=clamp((t-tp)/.6,0.,1.);if(e<=0.)continue;
   float r=(1.-pow(1.-e,3.))*1.05+.28*sin(e*3.1416)*(1.-e*.4);float d=length(g-cc);
   cov=max(cov,1.-smoothstep(r-.22,r,d));
   float dm=max(0.,1.-d*d/(r*r+1e-4));bump=max(bump,dm*(.30+.70*sin(e*3.1416))*(1.-.6*e));}
  rev=cov;hm=cov;ha=bump*20.;
 }else if(mode<2.5){
  /* k\xF6p\xFCk: kabarc\u0131k kubbeleri belirir, kabar\u0131r, patlar; geride cam kal\u0131r */
  vec2 g=xy/24.+vec2(0.,-t*.12);vec2 i=floor(g);float cov=0.,dome=0.,glass=0.;
  for(int y=-1;y<=1;y++)for(int x=-1;x<=1;x++){vec2 c=i+vec2(float(x),float(y));vec2 cc=c+.5+(t_h22(c)-.5)*.6;float id=t_h21(c+3.3);
   float tb=.1+id*.9+dT/1500.*1.5;float e=clamp((t-tb)/.5,0.,1.);if(e<=0.)continue;
   float pe=smoothstep(tb+1.1,tb+1.9,t);float r=e*(.58+.18*id);float d=length(g-cc);
   float inn=1.-smoothstep(r-.07,r,d);cov=max(cov,inn);glass=max(glass,pe*smoothstep(1.2,.2,d));
   float dm=sqrt(max(0.,1.-d*d/(r*r+1e-4)));if(dm*(1.-pe)>dome){dome=dm*(1.-pe);fb=vec3(g-cc,id);}}
  rev=max(cov*(1.-.0),glass);rev=max(rev,smoothstep(2.6,3.6,t-dT/1500.*1.5));
  hm=max(glass,smoothstep(2.4,3.6,t-dT/1500.*1.5))*.9+cov*.1;ha=dome*13.;film=dome;
 }else if(mode<3.5){
  /* veri paketi: \u0131\u015F\u0131k nabz\u0131 A'dan N'ye ge\xE7er, ge\xE7ti\u011Fi harf \u015Fi\u015Fer ve cama d\xF6ner, arkas\u0131nda titre\u015Fim s\xF6ner */
  float ps=70.+(t-.3)*520.;float dx=xy.x-ps;
  float pulse=exp(-dx*dx/(70.*70.))*step(.3,t)*(1.-smoothstep(3.0,3.8,t));
  float lit=smoothstep(40.,-40.,dx)*step(.3,t);
  float wob=sin(dx*.05-t*9.)*exp(-max(-dx,0.)/220.)*lit;
  rev=max(lit,pulse);hm=lit*.85+pulse*.35;ha=pulse*24.+wob*4.;
 }else{
  /* kristalle\u015Fme: cephe yay\u0131ld\u0131k\xE7a y\xFCzey d\xFCz kesilmi\u015F fasetlere b\xF6l\xFCn\xFCr, \u0131\u015F\u0131\u011F\u0131 keskin k\u0131rar */
  float grow=smoothstep(.2,2.6,t+t_vn(xy/400.)*.6-dT/1600.*1.2);
  vec2 g=xy/30.;vec2 i=floor(g),f=fract(g);float bd=9.;vec2 bc=vec2(0.),bid=vec2(0.);
  for(int y=-1;y<=1;y++)for(int x=-1;x<=1;x++){vec2 c=vec2(float(x),float(y));vec2 o2=c+.5+(t_h22(i+c)-.5)*.8;float d=dot(o2-f,o2-f);if(d<bd){bd=d;bc=o2;bid=i+c;}}
  vec2 nF=(t_h22(bid+5.1)-.5)*2.;
  float plane=dot(nF,(f-bc)*30.)*.55+(t_h21(bid+2.2)-.5)*6.;
  rev=grow;hm=grow*.95;ha=plane*grow;
 }
 rev*=1.-df;hm*=1.-df*.95;ha*=1.-df;film*=1.-df;}
`,GLASS_PRE=`float h21(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
vec2 h22(vec2 p){float n=h21(p);return vec2(n,h21(p+n+17.31));}
void vor1(vec2 p,out float f1,out float rnd){vec2 i=floor(p),f=fract(p);f1=9.;rnd=0.;for(int y=-1;y<=1;y++)for(int x=-1;x<=1;x++){vec2 g=vec2(float(x),float(y));vec2 o=.5+.42*sin(6.2831*h22(i+g)+vec2(0.,1.7));vec2 r=g+o-f;float d=dot(r,r);if(d<f1){f1=d;rnd=h21(i+g+3.7);}}f1=sqrt(f1);}
`,GLASS_EARLY=`
vec2 suv=gl_FragCoord.xy/uRes;
vec4 ik=texture2D(uInk,suv);float Lk=ik.r;
float gL=fwidth(Lk);float aInk=clamp((Lk-uThr)/max(gL,.0004)+.5,0.,1.);
float dS=(texture2D(uSdf,vL/vec2(1600.,900.)).g-.5)*96.-uPuf;float aa=max(length(fwidth(vL)),.25);float cover=clamp(.5-dS/aa,0.,1.);
float tzA=texture2D(uBg,suv).a;gA=max(aInk*cover,tzA);if(gA<.004)discard;
`,GLASS_FRAG=`
float A=gA;
vec3 nv=normalize(normal);float ndv=clamp(nv.z,0.,1.);
vec2 off=nv.xy*(.004+.020*(1.-ndv));
/* imlecin alt\u0131nda temiz b\xFCy\xFCte\xE7: deseni 1,35 kat b\xFCy\xFCt\xFCr */
float rad0=length(gl_FragCoord.xy-uMp)/uDpr;float mag=(1.-smoothstep(uLensR*.6,uLensR,rad0))*uLensOn;off+=(suv-uMp/uRes)*.26*mag;
vec3 rf=vec3(texture2D(uBg,suv-off).r,texture2D(uBg,suv-off*1.035).g,texture2D(uBg,suv-off*1.07).b);
/* mercek: imlecin alt\u0131nda cam, deseni veri gibi okur (LED \u0131zgaras\u0131 + tarama) */
float px=7.*uDpr;vec2 cell=floor(gl_FragCoord.xy/px);vec2 cc=(cell+.5)*px;
vec3 led=texture2D(uBg,cc/uRes-off*.5).rgb;float dd=length(gl_FragCoord.xy-cc)/px;float dotm=1.-smoothstep(.26,.42,dd);
float sp=(gl_FragCoord.x+gl_FragCoord.y*.55)/(uRes.x*1.55);float sweep=1.-smoothstep(0.,.025,abs(sp-fract(uT*.07)));
float lum=dot(led,vec3(.3,.5,.2));
led=led*dotm*(1.25+1.6*sweep)+led*.06+vec3(lum)*dotm*sweep*.25;
float rad=length(gl_FragCoord.xy-uMp)/uDpr;float lens=(1.-smoothstep(uLensR*.55,uLensR,rad))*uLensOn;
float flatZ=smoothstep(.55,.92,ndv);
rf=mix(rf,led,lens*flatZ*uLed);
rf=clamp((rf-.35)*1.35+.35,0.,1.)*2.05+.035;rf=pow(max(rf,0.),vec3(2.2))*(.35+.65*uLi);
float fr=pow(1.-ndv,3.);
outgoingLight+=rf*(1.-fr*.65)*1.2;
float cE=smoothstep(0.,8.,-dS);
outgoingLight+=vec3(.9,.95,1.)*pow(1.-ndv,2.)*.16*uLi*cE;
outgoingLight*=.42+.58*cE;
gl_FragColor=vec4(outgoingLight,A);
`;function wrapTex(e,t){const a=new THREE.Texture,n=e.properties.get(a);return n.__webglTexture=t,n.__webglInit=!0,a}function ourState(){gl.bindVertexArray(null),gl.disable(gl.BLEND),gl.disable(gl.DEPTH_TEST),gl.disable(gl.CULL_FACE),gl.disable(gl.SCISSOR_TEST),gl.disable(gl.STENCIL_TEST),gl.colorMask(!0,!0,!0,!0),gl.depthMask(!0),gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,!1),gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),gl.pixelStorei(gl.UNPACK_ALIGNMENT,4),gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL,gl.NONE)}function initThree(){if(!window.THREE||!window.RoomEnvironment||!BK)return!1;try{const e=new THREE.WebGLRenderer({canvas:cv,context:gl,antialias:!1,alpha:!1});e.autoClear=!1,e.setPixelRatio(1),e.setSize(cv.width,cv.height,!1),e.toneMapping=THREE.NoToneMapping;const t=new THREE.Scene,a=new THREE.PMREMGenerator(e);t.environment=a.fromScene(new RoomEnvironment,.04).texture,a.dispose();const n=new THREE.PerspectiveCamera(20,1,10,2e4),o=BK.box,r=40,i=5,s=o[0]-r,l=o[2]+r,f=o[1]-r,p=o[3]+r,m=Math.ceil((l-s)/i)+1,g=Math.ceil((p-f)/i)+1,u=(o[0]+o[2])/2,h=(o[1]+o[3])/2,R=58,T=new Float32Array(m*g*3),c=new Float32Array(m*g*2);for(let B=0;B<g;B++)for(let w=0;w<m;w++){const L=Math.min(l,s+w*i),X=Math.min(p,f+B*i),C=B*m+w,j=Math.max(0,Math.min(TW-1,Math.round(L))),P=Math.max(0,Math.min(TH-1,Math.round(X))),A=BK.hh[P*TW+j];T[C*3]=L-u,T[C*3+1]=-(X-h),T[C*3+2]=A*R,c[C*2]=L,c[C*2+1]=X}const y=new Uint32Array((m-1)*(g-1)*6);let b=0;for(let B=0;B<g-1;B++)for(let w=0;w<m-1;w++){const L=B*m+w,X=L+1,C=L+m,j=C+1;y[b++]=L,y[b++]=C,y[b++]=X,y[b++]=X,y[b++]=C,y[b++]=j}const U=new THREE.BufferGeometry;U.setAttribute("position",new THREE.BufferAttribute(T,3)),U.setAttribute("aL",new THREE.BufferAttribute(c,2)),U.setIndex(new THREE.BufferAttribute(y,1)),U.computeVertexNormals();const E=new THREE.DataTexture(BK.sdf,TW,TH,THREE.RGBAFormat);E.flipY=!1,E.magFilter=THREE.LinearFilter,E.minFilter=THREE.LinearFilter,E.needsUpdate=!0;const D=new THREE.DataTexture(BK.nrm,TW,TH,THREE.RGBAFormat);D.flipY=!1,D.magFilter=THREE.LinearFilter,D.minFilter=THREE.LinearFilter,D.needsUpdate=!0;const J={uTz:{value:new THREE.Vector4},uTzMode:{value:0},uHgt:{value:D},uBg:{value:null},uInk:{value:null},uSdf:{value:E},uRes:{value:new THREE.Vector2},uMp:{value:new THREE.Vector2(-9999,-9999)},uThr:{value:THR},uPuf:{value:PUFV},uT:{value:0},uLi:{value:1},uDpr:{value:1},uLensR:{value:150},uLensOn:{value:1},uLed:{value:0}},Z=new THREE.MeshStandardMaterial({color:0,metalness:0,roughness:.05,envMapIntensity:1.35,transparent:!0});Z.onBeforeCompile=B=>{Object.assign(B.uniforms,J),B.vertexShader=`attribute vec2 aL;
varying vec2 vL;
uniform vec4 uTz;uniform float uTzMode;uniform sampler2D uHgt;uniform float uT;
`+TEASE+`float Zf(vec2 p){float r,h,a,f;vec3 b;tease(p,uTz.xy,uTz.z,uTzMode,r,h,a,f,b);return texture2D(uHgt,p/vec2(1600.,900.)).b*72.*(1.+.06*sin(uT*1.55))*h+a;}
`+B.vertexShader.replace("#include <beginnormal_vertex>","float z0=Zf(aL);float zx=Zf(aL+vec2(2.,0.))-Zf(aL-vec2(2.,0.));float zy=Zf(aL+vec2(0.,2.))-Zf(aL-vec2(0.,2.));vec3 objectNormal=normalize(vec3(-zx*.25,zy*.25,1.));").replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed.z=z0;vL=aL;`),B.fragmentShader=`uniform sampler2D uBg,uInk,uSdf;uniform vec2 uRes,uMp;uniform float uThr,uPuf,uT,uLi,uDpr,uLensR,uLensOn,uLed;varying vec2 vL;float gA;
`+GLASS_PRE+B.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
`+GLASS_EARLY).replace("#include <opaque_fragment>",GLASS_FRAG)};const $=new THREE.Mesh(U,Z),q=new THREE.Group;q.add($),t.add(q);const O=new THREE.DirectionalLight(16777215,2.4);return t.add(O),T3={R:e,scene:t,cam:n,mesh:$,pivot:q,sun:O,U:J,wcx:u,wcy:h,inkT:wrapTex(e,FB.st.r.t),bgT:wrapTex(e,FB.bg.t)},ourState(),!0}catch(e){return console.error("three",e),T3=null,ourState(),!1}}function drawThree(e){if(!T3)return;const{R:t,cam:a,pivot:n,sun:o,U:r}=T3;t.properties.get(T3.inkT).__webglTexture=FB.st.r.t,t.properties.get(T3.bgT).__webglTexture=FB.bg.t,r.uInk.value=T3.inkT,r.uBg.value=T3.bgT;const i=2600,s=(W/2-oxs)/sc,l=(H/2-oys)/sc,f=H/sc;a.fov=2*Math.atan(f/2/i)*180/Math.PI,a.aspect=W/H,a.position.set(0,0,i),a.lookAt(0,0,0),a.updateProjectionMatrix(),n.position.set(T3.wcx-s+SWX,-(T3.wcy-l)-SWY,0),n.rotation.set(msy*.05+.01*Math.sin(tt*.31),msx*.07+.014*Math.sin(tt*.23),0),o.position.set(e[0]*1e3,e[1]*1e3,e[2]*1e3),r.uRes.value.set(cv.width,cv.height),r.uTz.value.set(tzX,tzY,Math.max(0,tt-tzT0),tzOn?1:0),r.uTzMode.value=TZM,r.uT.value=tt,r.uDpr.value=DPR,r.uLi.value=window.__Li!==void 0?window.__Li:curLi,r.uMp.value.set(mpx*DPR,(H-mpy)*DPR),t.resetState(),(T3.w!==cv.width||T3.h!==cv.height)&&(t.setSize(cv.width,cv.height,!1),T3.w=cv.width,T3.h=cv.height),t.setViewport(0,0,cv.width,cv.height),t.clearDepth(),t.render(T3.scene,a),ourState()}let CAB=null;const CAB_DUR=1.25;function skeletonChains(){const t=TW/2|0,a=TH/2|0,n=new Uint8Array(t*a);for(let u=1;u<a-1;u++)for(let h=1;h<t-1;h++)BK.sdf[(u*2*TW+h*2)*4]<118&&(n[u*t+h]=1);const o=u=>[u-t,u-t+1,u+1,u+t+1,u+t,u+t-1,u-1,u-t-1];let r=!0,i=0;const s=[];for(;r&&i<80;){r=!1,i++;for(let u=0;u<2;u++){s.length=0;for(let h=1;h<a-1;h++)for(let R=1;R<t-1;R++){const T=h*t+R;if(!n[T])continue;const c=o(T).map(U=>n[U]),y=c.reduce((U,E)=>U+E,0);if(y<2||y>6)continue;let b=0;for(let U=0;U<8;U++)!c[U]&&c[(U+1)%8]&&b++;if(b===1){if(u===0){if(c[0]*c[2]*c[4]||c[2]*c[4]*c[6])continue}else if(c[0]*c[2]*c[6]||c[0]*c[4]*c[6])continue;s.push(T)}}if(s.length){r=!0;for(const h of s)n[h]=0}}}const l=u=>o(u).reduce((h,R)=>h+n[R],0),f=new Uint8Array(t*a),p=[],m=(u,h)=>{const R=[u,h];l(h)===2&&(f[h]=1);let T=u,c=h;for(;l(c)===2;){let y=-1;for(const b of o(c))if(n[b]&&b!==T&&b!==u&&(!f[b]||l(b)!==2)&&R.indexOf(b)<0){y=b;break}if(y<0||(R.push(y),l(y)===2&&(f[y]=1),T=c,c=y,R.length>4e3))break}return R};for(let u=0;u<t*a;u++)if(!(!n[u]||l(u)===2))for(const h of o(u))n[h]&&(l(h)===2&&f[h]||l(h)!==2&&h<u||p.push(m(u,h)));for(let u=0;u<t*a;u++)if(n[u]&&l(u)===2&&!f[u]){f[u]=1;let h=o(u).find(R=>n[R]);h!==void 0&&p.push(m(u,h))}const g=[];for(const u of p){let h=u.map(c=>[c%t*2+1,(c/t|0)*2+1]);if(h.length<6)continue;for(let c=0;c<4;c++){const y=h.map(b=>b.slice());for(let b=1;b<h.length-1;b++)y[b][0]=(h[b-1][0]+h[b][0]*2+h[b+1][0])/4,y[b][1]=(h[b-1][1]+h[b][1]*2+h[b+1][1])/4;h=y}const R=l(u[0])===1,T=l(u[u.length-1])===1;g.push({pts:h,e0:R,e1:T})}return g}let SDFS=null;function sdfIn(e,t){if(!SDFS){SDFS=new Float32Array(TW*TH);for(let o=0;o<TW*TH;o++)SDFS[o]=-((BK.sdf[o*4]/255-.5)*96);blur(SDFS,TW,TH,4)}const a=Math.max(0,Math.min(TW-1,e|0)),n=Math.max(0,Math.min(TH-1,t|0));return SDFS[n*TW+a]}function isoChains(){const e=(s,l)=>[(sdfIn(s+1.5,l)-sdfIn(s-1.5,l))/3,(sdfIn(s,l+1.5)-sdfIn(s,l-1.5))/3],t=BK.box,a=[7.5,21,34],n=[];let o=777;const r=()=>(o=o*16807%2147483647,o/2147483647);for(let s=0;s<a.length;s++){const l=a[s],f=new Uint8Array(400*225),p=(m,g)=>(g/4|0)*400+(m/4|0);for(let m=t[1]-10;m<t[3]+10;m+=3)for(let g=t[0]-10;g<t[2]+10;g+=3){const u=sdfIn(g,m);if(Math.abs(u-l)>1.2||f[p(g,m)])continue;const h=55+r()*70,R=r()*6.283,T=s===0?3.5:8.5;let c=g,y=m,[b,U]=e(c,y),E=-U,D=b,J=Math.hypot(E,D);if(J<.2)continue;E/=J,D/=J;const Z=[[c,y]];let $=0,q=!1,O=!0;for(let B=0;B<700;B++){const w=l+T*Math.sin($*6.283/h+R);[b,U]=e(c,y);const L=Math.hypot(b,U);if(L<.15){O=Z.length>20;break}let X=-U/L,C=b/L;X*E+C*D<0&&(X=-X,C=-C),E=E*.55+X*.45,D=D*.55+C*.45;const j=Math.hypot(E,D);E/=j,D/=j,c+=E*4,y+=D*4;const P=sdfIn(c,y);if(c+=b/L*(w-P)*.5,y+=U/L*(w-P)*.5,$+=4,sdfIn(c,y)<2)break;Z.push([c,y]);const A=p(c,y);if(B>6&&f[A]&&Math.hypot(c-g,y-m)>10)break;if(B>25&&Math.hypot(c-g,y-m)<7){q=!0;break}}for(const B of Z)for(let w=-1;w<=1;w++)for(let L=-1;L<=1;L++){const X=p(B[0]+L*4,B[1]+w*4);X>=0&&X<f.length&&(f[X]=1)}O&&Z.length>8&&n.push({pts:Z,closed:q,li:s})}}const i=(s,l)=>[(sdfIn(s+1.5,l)-sdfIn(s-1.5,l))/(2*1.5),(sdfIn(s,l+1.5)-sdfIn(s,l-1.5))/(2*1.5)];for(let s=0,l=0;s<70&&l<4e3;l++){const f=t[0]+r()*(t[2]-t[0]),p=t[1]+r()*(t[3]-t[1]);if(sdfIn(f,p)<9)continue;let m=f,g=p,u=r()*6.283,h=0;const R=[[m,g]],T=160+r()*260;for(let c=0;c<T;c+=4){h+=(r()-.5)*.35,h*=.9,u+=h;let y=Math.cos(u),b=Math.sin(u);const U=sdfIn(m,g);if(U<11){const[E,D]=i(m,g),J=Math.hypot(E,D)||1;y+=E/J*(11-U)*.22,b+=D/J*(11-U)*.22,u=Math.atan2(b,y)}if(m+=Math.cos(u)*4,g+=Math.sin(u)*4,sdfIn(m,g)<3)break;R.push([m,g])}R.length>14&&(n.push({pts:R,closed:!1,li:4}),s++)}{const s=[];for(let p=t[0]-4;p<t[2]+4;p+=2){let m=!1;for(let g=t[1];g<t[3];g+=3)if(sdfIn(p,g)>4){m=!0;break}s.push(m)}const l=[];let f=-1;s.forEach((p,m)=>{p&&f<0&&(f=m),!p&&f>=0&&(l.push([t[0]-4+f*2,t[0]-4+m*2]),f=-1)}),f>=0&&l.push([t[0]-4+f*2,t[2]+4]),l.forEach(([p,m],g)=>{const u=[];for(let T=p+6;T<m-6;T+=3)for(let c=t[3]+2;c>t[3]-40;c-=2)if(sdfIn(T,c)>9){u.push([T,c]);break}if(!u.length)return;const h=[];for(const T of u){const c=h.find(y=>Math.abs(y[y.length-1][0]-T[0])<8);c?c.push(T):h.push([T])}let R=h.map(T=>T[T.length-1][0]-T[0][0]>70?[T[T.length-1][0]-8,T[T.length-1][1],1]:T[T.length>>1]);g===l.length-1&&(R=R.slice(0,1)),R=R.slice(0,2);for(const T of R){const[c,y]=T,b=[];if(T[2]){let U=y;for(let E=y;E>y-80;E-=2)if(sdfIn(c,E)<6){U=(y+E)/2;break}for(let E=-30;E<=24;E+=3){const D=Math.max(0,E)/24;b.push([c+E,U+D*D*10])}}else{const U=c<(p+m)/2?-1:1;for(let E=-14;E<=26;E+=3){const D=Math.max(0,E)/26;b.push([c+U*D*D*16,y+E])}}n.push({pts:b,closed:!1,li:6,cut:!0})}})}{let s=t[2]-26,l=-1;for(let f=t[2]-10;f>t[2]-90&&l<0;f-=3)for(let p=t[3]+4;p>t[3]-120;p-=2)if(sdfIn(f,p)>12){l=p,s=f;break}if(l>0){const f=[];for(let m=-60;m<=120;m+=4){const g=Math.max(0,m)/120;f.push([s+34*g*g+Math.sin(g*3.2)*5,l+m])}n.push({pts:f,closed:!1,li:5,plug:"rj45"})}}return n}function buildCables(){if(!T3)return!1;try{const e=isoChains(),t=new THREE.Scene;t.environment=T3.scene.environment;const a=new THREE.OrthographicCamera(0,1600,0,-900,-2e3,2e3);a.position.set(0,0,800),a.lookAt(0,0,0);const n=new THREE.MeshPhysicalMaterial({color:723724,roughness:.46,metalness:0,clearcoat:.75,clearcoatRoughness:.16,envMapIntensity:.95}),o=new THREE.MeshStandardMaterial({color:15133935,roughness:.1,metalness:0,transparent:!0,opacity:.5,envMapIntensity:1.4,depthWrite:!1}),r=new THREE.MeshStandardMaterial({color:13740099,roughness:.25,metalness:1}),i=new THREE.MeshStandardMaterial({color:13159632,roughness:.22,metalness:1}),s=new THREE.MeshStandardMaterial({color:1118740,roughness:.5}),l=new THREE.MeshStandardMaterial({color:15242074,roughness:.25,metalness:1}),f=new THREE.DirectionalLight(16777215,2.6);f.position.set(-100,250,900),f.target.position.set(800,-450,0),t.add(f),t.add(f.target),f.castShadow=!0,f.shadow.mapSize.set(4096,4096);const p=f.shadow.camera;p.left=-1e3,p.right=1e3,p.top=700,p.bottom=-700,p.near=10,p.far=4e3,f.shadow.bias=-4e-4,f.shadow.radius=3,t.add(new THREE.HemisphereLight(16777215,4473924,.35));{const c=new THREE.DirectionalLight(14674175,1.25);c.position.set(1500,150,-500),c.target.position.set(800,-450,0),t.add(c),t.add(c.target)}const m=new THREE.Mesh(new THREE.PlaneGeometry(1800,1100),new THREE.ShadowMaterial({opacity:.4}));m.position.set(800,-450,0),m.receiveShadow=!0,t.add(m);const g=[];let u=4242;const h=()=>(u=u*16807%2147483647,u/2147483647);for(const c of e){if(c.li===5||c.li===6)continue;c.cut=!1,c.plug=!1;const y=60+h()*80,b=h()*6.283;let U=0;const E=[];for(let q=0;q<c.pts.length;q+=2){const O=c.pts[q];if(q>0){const B=c.pts[q-2];U+=Math.hypot(O[0]-B[0],O[1]-B[1])}E.push(new THREE.Vector3(O[0],-O[1],c.li===6?14+Math.max(0,8-Math.max(0,O[1]-c.pts[4][1])*.25):c.li===5?Math.max(12,30-Math.max(0,O[1]-(c.pts[15]?c.pts[15][1]:O[1]))*.3):22+10*Math.sin(U*6.283/y+b)+c.li*1.5))}if(E.length<4)continue;const D=c.li===6?7.6:c.li===5?8.6:(c.li===4?6.6:7.4)*(.9+h()*.2),J=new THREE.TubeGeometry(new THREE.CatmullRomCurve3(E,c.closed),Math.max(12,E.length*3|0),D,16,c.closed),Z=new THREE.Mesh(J,n);Z.castShadow=!0,Z.receiveShadow=!0,t.add(Z);const $=h()*.45+E[0].x/1600*.55;if(g.push({me:Z,n:J.index.count,delay:$,hang:c.li===5}),c.cut){const q=E[E.length-1],O=E[E.length-3],B=Math.atan2(q.y-O.y,q.x-O.x),w=new THREE.Group;w.position.copy(q),w.rotation.z=B;const L=new THREE.Mesh(new THREE.CylinderGeometry(7.7,7.7,1.6,16,1,!0),s);L.rotation.z=Math.PI/2,w.add(L),t.add(w),g.push({me:w,n:0,delay:$+CAB_DUR*.8,plug:!0,cut:!0})}if(c.plug){const q=E[E.length-1],O=E[E.length-3],B=Math.atan2(q.y-O.y,q.x-O.x),w=new THREE.Group;if(w.position.copy(q),w.rotation.z=B,c.plug==="rj45"){const L=new THREE.Mesh(new THREE.CylinderGeometry(9.5,8.2,26,18),s);L.rotation.z=-Math.PI/2,L.position.x=11,w.add(L);for(let x=0;x<4;x++){const F=new THREE.Mesh(new THREE.TorusGeometry(8.6+x*.3,.9,6,18),s);F.rotation.y=Math.PI/2,F.position.x=2+x*5.5,w.add(F)}const X=new THREE.Mesh(new THREE.BoxGeometry(8,24,17),s);X.position.x=26,w.add(X);const C=new THREE.Mesh(new THREE.BoxGeometry(34,26,18),o);C.position.x=47,w.add(C);const j=[15980996,14710830,13953746,3108817,13622515,3840586,14865606,8014376];for(let x=0;x<8;x++){const F=new THREE.Mesh(new THREE.CylinderGeometry(1.15,1.15,26,6),new THREE.MeshStandardMaterial({color:j[x],roughness:.5}));F.rotation.z=Math.PI/2,F.position.set(45,-9.6+x*2.75,1),w.add(F)}for(let x=0;x<8;x++){const F=new THREE.Mesh(new THREE.BoxGeometry(6,1.4,1.2),r);F.position.set(60,-9.6+x*2.75,8.4),w.add(F)}const P=new THREE.Mesh(new THREE.BoxGeometry(26,10,2.4),o);P.position.set(44,0,11.5),P.rotation.y=.12,w.add(P);const A=new THREE.Mesh(new THREE.BoxGeometry(3,26,18),new THREE.MeshStandardMaterial({color:15265520,roughness:.12,transparent:!0,opacity:.65}));A.position.x=64.5,w.add(A)}else{const L=new THREE.Mesh(new THREE.BoxGeometry(22,13,9),s);L.position.x=9,w.add(L);const X=new THREE.Mesh(new THREE.BoxGeometry(13,9,4.2),i);X.position.x=26,w.add(X);const C=new THREE.Mesh(new THREE.BoxGeometry(2,6.5,2.2),s);C.position.x=32.2,w.add(C)}w.traverse(L=>{L.isMesh&&(L.castShadow=!0,L.receiveShadow=!0)}),t.add(w),g.push({me:w,n:0,delay:$+CAB_DUR*.85,plug:!0,hang:!0})}}const R=new THREE.Group,T=new THREE.Group;R.position.set(800,-450,0),T.position.set(-800,450,0),R.add(T);for(const c of[...t.children])(c.isMesh&&c!==m||c.isGroup)&&(t.remove(c),T.add(c));return t.add(R),CAB={scene:t,cam:a,meshes:g,rt:null,start:-99,dur:CAB_DUR,dirty:!0,w:0,h:0,root:R,rx:0,ry:0},!0}catch(e){return console.error("cables",e),CAB=null,!1}}function cabWind(){CAB&&(CAB.start=tt,CAB.dirty=!0)}function cabAnimating(){return CAB&&(tt-CAB.start<CAB.dur+1.2||tzOn&&!tzW&&tt-tzT0<1.3)}function renderCables(){if(!CAB||!T3)return;const e=T3.R,t=Math.min(4096,Math.round(1600*sc*DPR*(window.__cabSS||1.5))),a=Math.round(t*900/1600);(!CAB.rt||CAB.w!==t)&&(CAB.rt&&CAB.rt.dispose(),CAB.rt=new THREE.WebGLRenderTarget(t,a,{samples:4}),CAB.w=t,CAB.h=a,CAB.dirty=!0);{const i=window.__noSw?0:-SWY*.011,s=window.__noSw?0:SWX*.011;(Math.abs(i-CAB.rx)>.0015||Math.abs(s-CAB.ry)>.0015)&&(CAB.rx=i,CAB.ry=s,CAB.root.rotation.set(i,s,0),CAB.dirty=!0)}const n=cabAnimating();if(!CAB.dirty&&!n)return;const o=tzOn&&!tzW?Math.min(1,Math.max(0,(tt-tzT0)/1.1)):0,r=o*o*(3-2*o);for(const i of CAB.meshes){const s=Math.max(0,Math.min(1,(tt-CAB.start-i.delay)/CAB.dur));let l=1-Math.pow(1-s,3);i.hang&&(l*=1-r),i.plug?(i.me.visible=l>.02,i.me.scale.setScalar(.4+.6*l),i.cut||(i.base===void 0&&(i.base=i.me.position.y),i.me.position.y=i.base+r*150)):(i.me.geometry.setDrawRange(0,Math.floor(i.n*l/6)*6),i.me.visible=l>0)}e.resetState(),e.shadowMap.enabled=!0,e.shadowMap.type=THREE.PCFSoftShadowMap,e.setRenderTarget(CAB.rt),e.setClearColor(0,0),e.clear(!0,!0,!0),e.render(CAB.scene,CAB.cam),e.setRenderTarget(null),e.shadowMap.enabled=!1,ourState(),CAB.dirty=n}function cabTex(){return CAB&&CAB.rt?T3.R.properties.get(CAB.rt.texture).__webglTexture:null}let sayI=-1,last=performance.now(),tq=null,qPend=null,gpuMs=0,fr=[],jsMs=0,hud=null,hudT=0,resT=0;function frame(e){requestAnimationFrame(frame);const t=Math.min(.1,(e-last)/1e3),a=e-last;if(last=e,!ready)return;const n=performance.now();tt+=t,autoStroke(t),packSegs(),lampStep(Math.min(t,.05)),LAMP.on<0&&tt>.9&&(LAMP.on=tt);{const r=1-Math.exp(-t*3.5);msx+=(mxT-msx)*r,msy+=(myT-msy)*r}const o=nSeg>0||tt-lastSeg<45;if(ema+=(a-ema)*.05,tt>3&&ema>26&&rCap>1.01&&!window.__noAdapt&&++slowN>90?(slowN=0,rCap=Math.max(1,Math.min(rCap,DPR)*.85),ema=16.7,layout()):ema<=26&&(slowN=0),teaser(),hlStep(),lensStep(t),o||LZ.act||tzOn||cabAnimating()||dirty||tt<2.6||window.__T0!==void 0||++idleN%3===0){let r=null;tq&&!qPend&&(r=gl.createQuery(),gl.beginQuery(tq.TIME_ELAPSED_EXT,r)),o&&sim(Math.min(t,.05)),draw(),dirty=!1,r&&(gl.endQuery(tq.TIME_ELAPSED_EXT),qPend=r)}qPend&&gl.getQueryParameter(qPend,gl.QUERY_RESULT_AVAILABLE)&&(gl.getParameter(tq.GPU_DISJOINT_EXT)||(gpuMs+=(gl.getQueryParameter(qPend,gl.QUERY_RESULT)/1e6-gpuMs)*.1),gl.deleteQuery(qPend),qPend=null),inkAmt*=Math.exp(-t/4),stress=clamp(stress+(inkAmt*.1+paint*.08)*t-t*.01,0,1),paint*=Math.exp(-t*2);{const r=tt-lastSeg<15;!clicks&&hintT<0&&tt-lastSeg<1&&tt>9&&(hintT=tt,document.getElementById("say").textContent="T\u0131kla.")}if(!(hintT>0&&tt-hintT<3.5)){let r=0;SAY.forEach((i,s)=>{stress>=i[0]&&(r=s)}),(r!==sayI||hintT>0&&tt-hintT<3.6)&&(sayI=r,document.getElementById("say").textContent=SAY[r][1])}if(jsMs+=(performance.now()-n-jsMs)*.1,DEBUG&&(fr.push(a),fr.length>240&&fr.shift(),e-hudT>400)){hudT=e,hud||(hud=document.createElement("div"),hud.id="hud",document.body.appendChild(hud));const r=[...fr].sort((s,l)=>s-l),i=fr.reduce((s,l)=>s+l,0)/fr.length;hud.textContent="fps "+(1e3/i).toFixed(0)+`
kare ms p50 `+r[r.length>>1].toFixed(1)+"  p95 "+r[Math.floor(r.length*.95)].toFixed(1)+"  max "+r[r.length-1].toFixed(1)+`
JS ms `+jsMs.toFixed(2)+(tq?`
GPU ms `+gpuMs.toFixed(2):`
GPU ms (yok)`)+`
\u0131zgara `+mw+"\xD7"+mh+"  tuval "+cv.width+"\xD7"+cv.height+`
sim `+(o?"a\xE7\u0131k":"uykuda")}}let simW=0,simH=0;function onResize(){if(isPort()!==window.__portrait){location.reload();return}clearTimeout(resT),layout(),resT=setTimeout(()=>{if(ready){if(simW&&Math.abs(innerWidth-simW)/simW<.06&&Math.abs(innerHeight-simH)/simH<.22){dirty=!0;return}simW=innerWidth,simH=innerHeight,initSim(),dirty=!0}},260)}addEventListener("resize",onResize);function start(){{const t=setInterval(()=>{if(performance.now()<2600)return;[...document.querySelectorAll("[data-goo]")].some(n=>n.style.filter&&n.style.filter!=="none"||n.style.boxShadow)||(document.documentElement.classList.add("inv"),clearInterval(t))},300)}layout(),document.querySelector(".fb").textContent=WORD,document.querySelector("h1").textContent=WORD;const e=async()=>{try{const t=performance.now();BK=await bakeText(WORD),layout(),window.__bakeMs=performance.now()-t,boot()}catch(t){console.error(t),document.documentElement.classList.add("nogl")}};document.fonts&&document.fonts.load?Promise.all([document.fonts.load("900 100px Front"),document.fonts.load("600 100px Back"),document.fonts.load("400 16px Plex"),document.fonts.load("600 16px Plex")]).then(e,e):e(),requestAnimationFrame(frame)}start(),window.__L={prof(e){const t=new Uint8Array(4),a=()=>{gl.bindFramebuffer(gl.FRAMEBUFFER,null),gl.readPixels(0,0,1,1,gl.RGBA,gl.UNSIGNED_BYTE,t)},n=PR.render,o={};a();let r=performance.now();for(let i=0;i<e;i++)sim(1/60);a(),o.sim=(performance.now()-r)/e,r=performance.now();for(let i=0;i<e;i++)draw();if(a(),o.drawAll=(performance.now()-r)/e,T3){r=performance.now();for(let i=0;i<e;i++)gl.useProgram(PR.copy.p),bind(0,FB.bg.t),gl.uniform1i(PR.copy.u.uS,0),pass(PR.copy,null);a(),o.copy=(performance.now()-r)/e,r=performance.now();for(let i=0;i<e;i++)drawThree([-.6,.5,.6]);a(),o.three=(performance.now()-r)/e}return o},get tt(){return tt},get simT(){return SIMT},get stress(){return stress},stroke:(e,t)=>stroke(e,t,performance.now()),set:e=>stress=e,setT:e=>window.__T0=e,step(e,t){for(let a=0;a<e;a++)packSegs(),sim(t||1/60);draw()},read(){gl.bindFramebuffer(gl.FRAMEBUFFER,FB.st.r.f);const e=new Float32Array(mw*mh*4);gl.readPixels(0,0,mw,mh,gl.RGBA,gl.FLOAT,e);let t=0,a=0,n=0;for(let o=0;o<e.length;o+=4){const r=e[o];(r!==r||!isFinite(r))&&n++,r>THR&&t++,r>a&&(a=r)}return{cov:t/(mw*mh),max:a,bad:n}},readV(){gl.bindFramebuffer(gl.FRAMEBUFFER,FB.vel.r.f);const e=new Float32Array(mw*mh*4);gl.readPixels(0,0,mw,mh,gl.RGBA,gl.FLOAT,e);let t=0,a=0;for(let n=0;n<e.length;n+=4){const o=Math.abs(e[n])+Math.abs(e[n+1]);isFinite(o)?o>t&&(t=o):a++}return{max:t,bad:a}},skip(e){tt+=e},err(){const e=[];let t;for(;(t=gl.getError())!==0&&e.length<8;)e.push(t);return e},get ready(){return ready},get qlen(){return Q.length},get draws(){return nDraw},lose(){const e=gl.getExtension("WEBGL_lose_context");e.loseContext(),setTimeout(()=>e.restoreContext(),250)}},(function(){if(window.__goo)return;window.__goo=1;var e=document.createElement("style");e.textContent="[data-goo]:not(.goo-done){opacity:0}",document.head.appendChild(e);var t=matchMedia("(prefers-reduced-motion: reduce)").matches,a=(getComputedStyle(document.documentElement).getPropertyValue("--paper")||"#fbfbf9").trim();function n(i){if(i.classList.contains("goo-done")||i.__gooRun)return;i.__gooRun=1;var s=parseFloat(i.getAttribute("data-goo-delay"))||0,l=parseFloat(i.getAttribute("data-goo-dur"))||950;if(t){i.classList.add("goo-done");return}var f=parseFloat(getComputedStyle(i).fontSize)||16,p=Math.max(5,Math.min(24,f*.34)),m=Math.max(24,p*2.2),g={bg:i.style.background,bs:i.style.boxShadow,f:i.style.filter,o:i.style.opacity};i.style.willChange="filter,opacity";function u(R){var T=1-Math.pow(1-R,3),c=p*(1-T)*(1-T*.35)*(R<1?1:0),y=.1+.4*T,b=.5/(1-y);i.style.opacity=Math.min(1,T*1.6),i.style.filter="blur("+(c*.55).toFixed(2)+"px)"}if(i.__gooPose=u,!window.__gooHold){var h=performance.now()+s;(function R(T){if(T<h){requestAnimationFrame(R);return}var c=Math.min(1,(T-h)/l);u(c),c<1?requestAnimationFrame(R):(i.style.filter=g.f,i.style.background=g.bg,i.style.boxShadow=g.bs,i.style.willChange="",i.style.opacity=g.o,i.classList.add("goo-done"))})(performance.now())}}var o="IntersectionObserver"in window?new IntersectionObserver(function(i){i.forEach(function(s){s.isIntersecting&&(o.unobserve(s.target),n(s.target))})},{threshold:.25}):null;function r(i){(i||document).querySelectorAll("[data-goo]").forEach(function(s){s.__gooSeen||(s.__gooSeen=1,o?o.observe(s):n(s))})}window.goo={scan:r,run:n},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",function(){r()}):r()})();
