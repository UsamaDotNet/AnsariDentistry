const burger=document.getElementById('burger'),mmenu=document.getElementById('mmenu');
burger.addEventListener('click',()=>{const o=mmenu.classList.toggle('open');burger.classList.toggle('open',o);burger.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''});
mmenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mmenu.classList.remove('open');burger.classList.remove('open');burger.setAttribute('aria-expanded','false');document.body.style.overflow=''}));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));

/* Lightbox: click any loaded .ph image to enlarge with blurred backdrop */
const lb=document.getElementById('lb'),lbImg=document.getElementById('lb-img');
function openLB(src,alt){lbImg.src=src;lbImg.alt=alt||'';lb.classList.add('open');document.body.style.overflow='hidden'}
function closeLB(){lb.classList.remove('open');document.body.style.overflow='';setTimeout(()=>{if(!lb.classList.contains('open'))lbImg.src=''},300)}
document.querySelectorAll('.ph img').forEach(img=>{
  img.addEventListener('click',e=>{
    e.stopPropagation();
    if(img.complete && img.naturalWidth>0) openLB(img.currentSrc||img.src,img.alt); // only if photo actually loaded
  });
});
lb.addEventListener('click',closeLB);              // click backdrop = close
lbImg.addEventListener('click',e=>e.stopPropagation()); // clicking the image itself doesn't close
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLB()});
