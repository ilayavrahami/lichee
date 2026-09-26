const release = new Date('2026-10-12T00:00:00+03:00').getTime();
const pad = n => String(Math.max(0, n)).padStart(2,'0');
function updateCountdown(){
  const diff = release - Date.now();
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  document.getElementById('days').textContent = pad(d);
  document.getElementById('hours').textContent = pad(h);
  document.getElementById('minutes').textContent = pad(m);
  document.getElementById('seconds').textContent = pad(s);
}
updateCountdown();
setInterval(updateCountdown,1000);
