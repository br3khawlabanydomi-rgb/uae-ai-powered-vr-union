// Generate a shareable QR code from the actual hosting location.
(() => {
  if (!/^https?:$/.test(location.protocol) || typeof qrcode !== 'function') return;
  const url = new URL('./', location.href).href;
  const qr = qrcode(0, 'M');
  qr.addData(url); qr.make();
  const n = qr.getModuleCount(), size = 10, margin = 4;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = (n + margin * 2) * size;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'white'; ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#000';
  for (let row = 0; row < n; row++) for (let col = 0; col < n; col++)
    if (qr.isDark(row, col)) ctx.fillRect((col + margin) * size, (row + margin) * size, size, size);
  const png = canvas.toDataURL('image/png');
  function refresh() {
    document.querySelectorAll('a[href="uae-qr.png"]').forEach(a => {
      a.href = png; a.download = 'UAE_VR_Share_QR.png';
    });
    document.querySelectorAll('img[src="uae-qr.png"]').forEach(i => { i.src = png; });
  }
  refresh();
  new MutationObserver(refresh).observe(document.body, {childList:true, subtree:true});
})();
