const release=new Date('2026-10-12T00:00:00+03:00').getTime();
const pad=n=>String(Math.max(0,n)).padStart(2,'0');
function countdown(){const d=release-Date.now();document.getElementById('days').textContent=pad(Math.floor(d/86400000));document.getElementById('hours').textContent=pad(Math.floor(d%86400000/3600000));document.getElementById('minutes').textContent=pad(Math.floor(d%3600000/60000));document.getElementById('seconds').textContent=pad(Math.floor(d%60000/1000));}
countdown();setInterval(countdown,1000);
const glow=document.querySelector('.cursor-glow');window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});
document.querySelectorAll('.section,.manifesto,.quote-section,.socials').forEach(el=>{el.classList.add('reveal');observer.observe(el)});
