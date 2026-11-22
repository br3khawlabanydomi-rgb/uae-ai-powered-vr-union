const loadImage=src=>new Promise((res,rej)=>{let i=new Image();i.onload=()=>res(i);i.onerror=rej;i.src=src});
export async function makeCertificate(name,id,date){
 const c=document.createElement('canvas');c.width=3508;c.height=2480;const x=c.getContext('2d');const W=c.width,H=c.height;const gold='#a57b2b',deep='#123f3d';await document.fonts.load('80px "CertificateArabic"');
 const logo=await loadImage('ics-logo.png');let gradient=x.createLinearGradient(0,0,W,H);gradient.addColorStop(0,'#fffdf0');gradient.addColorStop(.55,'#faf3df');gradient.addColorStop(1,'#fffdf6');x.fillStyle=gradient;x.fillRect(0,0,W,H);
 function rect(a,b,w,h,col){x.fillStyle=col;x.fillRect(a,b,w,h)}function line(a,b,d,e,col,width=3){x.strokeStyle=col;x.lineWidth=width;x.beginPath();x.moveTo(a,b);x.lineTo(d,e);x.stroke()}function text(t,y,size,color=deep,font='Georgia',bold=false){x.fillStyle=color;x.textAlign='center';x.textBaseline='middle';x.font=(bold?'bold ':'')+size+'px '+font;x.fillText(t,W/2,y)}
 x.strokeStyle='#9e782d';x.lineWidth=15;x.strokeRect(42,42,W-84,H-84);x.lineWidth=4;x.strokeRect(73,73,W-146,H-146);x.strokeStyle='#d1b56b';x.lineWidth=2;x.strokeRect(97,97,W-194,H-194);
 for(let a of [0,1])for(let b of [0,1]){x.save();x.translate(a?W-112:112,b?H-112:112);x.scale(a?-1:1,b?-1:1);for(let i=0;i<5;i++){x.strokeStyle=i%2?'#ddc994':'#b5974d';x.lineWidth=3;x.beginPath();x.moveTo(0,42+i*19);x.lineTo(42+i*19,0);x.lineTo(125+i*11,0);x.stroke()}x.restore()}
 // Heritage and modern architecture silhouettes along the lower perimeter.
 x.save();x.globalAlpha=.18;for(let i=0;i<7;i++){let px=155+i*84,h=120+(i%3)*58;rect(px,2265-h,64,h,gold);for(let j=0;j<3;j++)rect(px+j*23,2265-h-18,15,18,gold)}for(let i=0;i<10;i++){let px=2770+i*54,h=100+(i*71)%220;rect(px,2265-h,40,h,gold)}rect(3065,1945,38,320,gold);rect(3076,1875,16,70,gold);
 for(let a of [160,3100])for(let i=0;i<7;i++){let yy=550+i*94;line(a,yy,a+150,yy,gold,5);line(a+150,yy,a+195,yy-45,gold,4);x.beginPath();x.arc(a+195,yy-45,9,0,Math.PI*2);x.fillStyle=gold;x.fill()}x.restore();
 x.drawImage(logo,295,170,295,295);
 // UAE flag, drawn accurately in its official colour arrangement.
 const fx=2780,fy=212,fw=430,fh=215;rect(fx,fy,fw,fh/3,'#00843d');rect(fx,fy+fh/3,fw,fh/3,'#fff');rect(fx,fy+2*fh/3,fw,fh/3,'#161616');rect(fx,fy,fw/4,fh,'#e52337');x.strokeStyle=gold;x.lineWidth=4;x.strokeRect(fx,fy,fw,fh);
 // Golden anniversary medallion.
 x.save();x.translate(W/2,240);for(let i=0;i<36;i++){x.rotate(Math.PI/18);rect(-5,-144,10,20,'#bf9a47')}let med=x.createRadialGradient(-35,-45,20,0,0,135);med.addColorStop(0,'#fff0b1');med.addColorStop(1,'#b68930');x.fillStyle=med;x.beginPath();x.arc(0,0,127,0,Math.PI*2);x.fill();x.strokeStyle='#9c7023';x.lineWidth=4;x.stroke();x.fillStyle='#61471a';x.font='bold 97px Georgia';x.textAlign='center';x.textBaseline='middle';x.fillText('55',0,-3);x.font='23px Georgia';x.fillText('1971–2026',0,78);x.restore();
 text('INTERNATIONAL COMMUNITY SCHOOLS  •  KHALIFA CITY',422,43,deep,'Georgia',true);text('55TH EID AL ETIHAD  •  AI-POWERED VR',488,35,gold,'Georgia',true);
 text('UAE Unity Ambassador',630,124,deep,'Georgia',true);
 text('سفير الاتحاد الإماراتي',770,111,gold,'"CertificateArabic"',true);
 text('55 Years of Unity, Pride & Innovation',865,55,gold,'Georgia',true);text('55 عاماً من الاتحاد والفخر والابتكار',935,55,deep,'"CertificateArabic"');
 line(950,1005,2558,1005,'#bf9a47',3);
 text('PROUDLY PRESENTED TO  •  يُقدَّم بكل فخر إلى',1080,44,deep,'"CertificateArabic"');
 let n=name.trim()||'UAE Heritage Explorer';x.font='bold 113px Georgia, CertificateArabic';let size=113;while(x.measureText(n).width>2660&&size>46){size-=3;x.font='bold '+size+'px Georgia, CertificateArabic'}text(n,1230,size,'#9d7429','Georgia, CertificateArabic',true);line(575,1320,W-575,1320,'#c5a052',5);
 text('In recognition of successfully completing the AI-Powered UAE Virtual Reality Journey,',1430,46,deep);text('exploring the nation’s heritage, celebrating its remarkable achievements, and embracing',1496,46,deep);text('its vision for an innovative future.',1562,46,deep);
 text('تقديراً لإتمام رحلة الإمارات بالواقع الافتراضي المدعوم بالذكاء الاصطناعي، واستكشاف تراث الوطن',1660,53,deep,'"CertificateArabic"');text('والاحتفاء بإنجازاته المتميزة والمشاركة في رؤيته لمستقبل مبتكر.',1730,53,deep,'"CertificateArabic"');
 text('★  ★  ★  ★  ★  ★  ★',1840,62,gold,'Georgia',true);
 // Achievement seal, with a distinct commemorative design.
 x.save();x.translate(2980,1940);x.fillStyle='#bd963d';x.beginPath();for(let i=0;i<64;i++){let a=i*Math.PI/32,r=i%2?177:190;i?x.lineTo(Math.cos(a)*r,Math.sin(a)*r):x.moveTo(Math.cos(a)*r,Math.sin(a)*r)}x.closePath();x.fill();x.strokeStyle='#f9e5a1';x.lineWidth=9;x.beginPath();x.arc(0,0,158,0,Math.PI*2);x.stroke();x.fillStyle='#493714';x.textAlign='center';x.textBaseline='middle';x.font='bold 35px Georgia';x.fillText('UNITY',0,-38);x.fillText('AMBASSADOR',0,9);x.font='bold 48px Georgia';x.fillText('★',0,76);x.restore();
 x.textAlign='left';x.fillStyle=deep;x.font='italic bold 57px Georgia';x.fillText('Khawla Banydomi',290,1935);line(280,1982,1210,1982,gold,3);x.font='35px Georgia';x.fillText('AI Lead | AI & Digital Learning Instructor',290,2040);x.fillText('International Community Schools – Khalifa City',290,2095);
 text('Inspired by Our Heritage. United in Pride. Empowered by AI.',2160,49,deep,'Georgia',true);text('تراث يلهمنا، واتحاد يجمعنا، وذكاء اصطناعي يمكّن مستقبلنا',2230,52,gold,'"CertificateArabic"',true);
 line(260,2300,W-260,2300,gold,3);x.font='30px Georgia';x.fillStyle=deep;x.textAlign='left';x.fillText('Certificate ID: '+id,290,2370);x.textAlign='right';x.fillText('Completion: '+date,W-290,2370);
 return c;
}
