(function(){
'use strict';
var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var WA='6285883861610';
var ID={nav_home:'Beranda',nav_about:'Tentang Kami',nav_services:'Layanan',nav_portfolio:'Portofolio',nav_process:'Proses',nav_contact:'Kontak',
h_title:'Bangun Brand yang Menonjol',h_desc:'LogoLoomShopArt adalah studio desain logo dan branding. Kami membantu UMKM, startup, bisnis online, dan perusahaan memiliki identitas yang jelas dan mudah diingat.',h_c1:'Mari Berdiskusi',h_c2:'Lihat Karya Kami',
a_title:'Tentang Kami',a_p:'LogoLoomShopArt adalah studio desain logo dan branding. Kami merancang logo dan identitas brand yang sesuai dengan bisnis, target pasar, dan kebutuhan Anda.',
a_ph:'Filosofi desain',a_phd:'Logo yang baik itu sederhana, jelas, dan berfungsi di mana saja, dari layar ponsel hingga papan nama.',a_pv:'Visi',a_pvd:'Membantu setiap bisnis, besar maupun kecil, tampil profesional dan mudah diingat.',a_pm:'Misi',a_pmd:'Memahami cerita setiap klien, mengubahnya menjadi desain yang matang, dan menyerahkan file yang siap pakai.',
s_title:'Layanan Kami',s1:'Desain Logo Kustom',s1d:'Logo orisinal yang dibuat khusus untuk brand Anda, lengkap dengan konsep dan revisi.',s2:'Desain Identitas Brand',s2d:'Warna, tipografi, dan elemen visual agar brand Anda tampil konsisten.',s3:'Branding Bisnis',s3d:'Branding untuk kemasan, alat tulis, papan nama, dan materi bisnis lainnya.',s4:'Branding Media Sosial',s4d:'Foto profil, template, dan gaya visual untuk akun media sosial Anda.',s5:'Panduan Brand',s5d:'Dokumen yang menjelaskan cara memakai logo, warna, dan font dengan benar.',
p_title:'Portofolio',f_all:'Semua',f_logo:'Desain Logo',f_branding:'Branding',f_identity:'Identitas Brand',f_business:'Branding Bisnis',f_social:'Media Sosial',c1:'Konsep wordmark',c2:'Konsep monogram',c3:'Set identitas',c4:'Mockup alat tulis',c5:'Kit media sosial',c6:'Konsep emblem',p_note:'Gambar contoh masih berupa placeholder. Proyek asli akan ditambahkan di sini.',
pr_title:'Proses Kami',pr1:'Discovery',pr1d:'Kami mempelajari bisnis, target pasar, dan tujuan Anda.',pr2:'Pengembangan Konsep',pr2d:'Kami menggali ide dan membuat arah desain untuk brand Anda.',pr3:'Desain &amp; Penyempurnaan',pr3d:'Kami mengembangkan konsep terpilih dan menyempurnakannya sesuai masukan Anda.',pr4:'Penyerahan Akhir',pr4d:'Anda menerima file final yang siap untuk cetak dan digital.',
ct_title:'Kontak',ct_sub:'Ceritakan proyek Anda. Kami akan membalas secepatnya.',l_name:'Nama',l_email:'Email',l_svc:'Layanan',l_msg:'Pesan',ph_msg:'Ceritakan bisnis Anda dan apa yang Anda butuhkan',l_send:'Kirim lewat WhatsApp',ct_wa:'Chat WhatsApp',ft:'Hak cipta dilindungi.'};
var MSG={en:{need:'Please fill in your name, a valid email and your message.',ok:'Opening WhatsApp…',hi:'Hello LogoLoomShopArt, I would like to discuss a project.',n:'Name',e:'Email',s:'Service',m:'Message',t:'LogoLoomShopArt | Logo Design & Branding Studio'},
id:{need:'Mohon isi nama, email yang valid, dan pesan Anda.',ok:'Membuka WhatsApp…',hi:'Halo LogoLoomShopArt, saya ingin berdiskusi tentang proyek.',n:'Nama',e:'Email',s:'Layanan',m:'Pesan',t:'LogoLoomShopArt | Studio Desain Logo & Branding'}};
var lang='en';
$$('[data-i18n]').forEach(function(e){e.dataset.en=e.innerHTML});
$$('[data-i18n-ph]').forEach(function(e){e.dataset.en=e.placeholder});
function setLang(l){
 lang=l;document.documentElement.lang=l;document.title=MSG[l].t;
 $$('[data-i18n]').forEach(function(e){e.innerHTML=l==='en'?e.dataset.en:(ID[e.dataset.i18n]||e.dataset.en)});
 $$('[data-i18n-ph]').forEach(function(e){e.placeholder=l==='en'?e.dataset.en:ID[e.dataset.i18nPh]});
 $$('[data-lang]').forEach(function(b){var on=b.dataset.lang===l;b.classList.toggle('on',on);b.setAttribute('aria-pressed',on)});
 try{localStorage.setItem('lang',l)}catch(x){}
}
$$('[data-lang]').forEach(function(b){b.addEventListener('click',function(){setLang(b.dataset.lang)})});
var saved=null;try{saved=localStorage.getItem('lang')}catch(x){}
setLang(saved||((navigator.language||'').slice(0,2)==='id'?'id':'en'));
$('#yr').textContent=new Date().getFullYear();

/* nav */
var nav=$('#top'),burger=$('#burger');
burger.addEventListener('click',function(){var o=nav.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
$$('#menu a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('open');burger.setAttribute('aria-expanded',false)})});
window.addEventListener('scroll',function(){nav.classList.toggle('scrolled',window.scrollY>10)},{passive:true});

/* portfolio filter */
var fb=$$('.filters button'),figs=$$('.grid figure');
fb.forEach(function(b){b.addEventListener('click',function(){
 fb.forEach(function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b)});
 figs.forEach(function(f){f.hidden=!(b.dataset.f==='all'||f.dataset.cat===b.dataset.f)});
})});

/* scroll effects */
if('IntersectionObserver' in window){
 $$('.sec h2,.svc li,.grid figure,.steps li,.pillars div,.ct-g>*').forEach(function(e){e.classList.add('rv')});
 var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});
 $$('.rv').forEach(function(e){io.observe(e)});
 var links=$$('#menu a');
 var so=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){links.forEach(function(a){a.classList.toggle('act',a.getAttribute('href')==='#'+x.target.id)})}})},{rootMargin:'-45% 0px -50% 0px'});
 $$('main section[id]').forEach(function(s){so.observe(s)});
}

/* lightbox */
var lb=$('#lb'),lbi=$('#lb-img'),lbc=$('#lb-cap'),cur=0,list=[];
function vis(){return $$('.grid figure').filter(function(f){return !f.hidden})}
function show(i){list=vis();cur=(i+list.length)%list.length;var f=list[cur],b=$('.ph',f);lbi.src=b.dataset.full;lbi.alt=b.dataset.title;lbc.textContent=b.dataset.title+' \u2014 '+$('figcaption span',f).textContent}
$$('.ph').forEach(function(b){b.addEventListener('click',function(){show(vis().indexOf(b.closest('figure')));if(lb.showModal)lb.showModal();else lb.setAttribute('open','')})});
function closeLb(){if(lb.close)lb.close();else lb.removeAttribute('open')}
$('#lb-x').addEventListener('click',closeLb);
$('#lb-p').addEventListener('click',function(){show(cur-1)});
$('#lb-n').addEventListener('click',function(){show(cur+1)});
lb.addEventListener('click',function(e){if(e.target===lb)closeLb()});
document.addEventListener('keydown',function(e){if(!lb.open)return;if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)});

/* contact form -> WhatsApp */
var form=$('#form'),st=$('#status');
form.addEventListener('submit',function(ev){
 ev.preventDefault();
 var f=form.elements,ok=true;
 [f.name,f.email,f.msg].forEach(function(i){var v=i.value.trim();var bad=!v||(i===f.email&&!/^\S+@\S+\.\S+$/.test(v));i.classList.toggle('bad',bad);if(bad)ok=false});
 var m=MSG[lang];
 if(!ok){st.textContent=m.need;return}
 var txt=m.hi+'\n\n'+m.n+': '+f.name.value.trim()+'\n'+m.e+': '+f.email.value.trim()+'\n'+m.s+': '+f.svc.value+'\n'+m.m+': '+f.msg.value.trim();
 st.textContent=m.ok;
 window.open('https://wa.me/'+WA+'?text='+encodeURIComponent(txt),'_blank','noopener');
});
})();
