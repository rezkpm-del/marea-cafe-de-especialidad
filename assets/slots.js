/* Generado automaticamente. No editar a mano. */
(function () {
  var D = {"url": "https://dxcpwtxbdnunkmerelpj.supabase.co", "clave": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4Y3B3dHhiZG51bmttZXJlbHBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5OTk4MjksImV4cCI6MjA4OTU3NTgyOX0.s-2YAEVgqbG00GMrsz2o6-cNmYZhowzNmhj5o91LuyQ", "tablas": {"contacto": "zk_marea_cafe_de_especialidad_contacto"}, "gracias": "¡Gracias! Recibimos tus datos."};
  if (D.url) document.querySelectorAll('form[data-zk]').forEach(function (f) {
    var tabla = D.tablas && D.tablas[f.getAttribute('data-zk')];
    if (!tabla) return;
    f.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var aviso = f.querySelector('.zk-mensaje') || f;
      var boton = f.querySelector('[type=submit]');
      var d = {}; new FormData(f).forEach(function (v, k) { d[k] = v; });
      if (boton) boton.disabled = true;
      aviso.textContent = 'Enviando...';
      fetch(D.url + '/rest/v1/' + tabla, {
        method: 'POST',
        headers: { 'apikey': D.clave, 'Authorization': 'Bearer ' + D.clave,
                   'Content-Type': 'application/json', 'Prefer': 'return=minimal' },
        body: JSON.stringify({ datos: d, origen: location.pathname })
      }).then(function (r) {
        if (!r.ok) throw new Error(r.status);
        f.reset();
        aviso.textContent = D.gracias || '¡Listo! Recibimos tus datos.';
      }).catch(function () {
        aviso.textContent = 'No se pudo enviar. Probá de nuevo en un momento.';
      }).then(function () { if (boton) boton.disabled = false; });
    });
  });
})();
/* videos */
(function () {
  var v = {};
  Object.keys(v).forEach(function (id) {
    document.querySelectorAll('[data-slot="' + id + '"]').forEach(function (el) {
      var d = v[id], e = document.createElement('video');
      e.src = 'assets/' + d.archivo;
      e.autoplay = e.loop = e.muted = e.playsInline = true;
      e.setAttribute('playsinline', '');
      e.setAttribute('aria-hidden', 'true');
      e.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:0;'
        + 'object-fit:' + d.ajuste + ';object-position:' + d.pos + ';';
      if (getComputedStyle(el).position === 'static') el.style.position = 'relative';
      el.style.overflow = 'hidden';
      el.appendChild(e);
    });
  });
})();
