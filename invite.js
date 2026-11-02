/* Botón «Invitar a Kareah» (arriba a la derecha) + cuadro de aceptación.
   Se carga con <script src="invite.js" defer></script> desde todas las páginas de docs/legal. */
(function () {
  // ID de la aplicación (Developer Portal → General Information → Application ID). No es un secreto.
  var CLIENT_ID = '1500654627425882172';
  // Permisos pedidos: mismo valor que INVITE_PERMISSIONS en src/events/messageCreate.ts (sin Administrador).
  var PERMISSIONS = '1099798014998';

  var URL = 'https://discord.com/oauth2/authorize?client_id=' + encodeURIComponent(CLIENT_ID) +
    '&permissions=' + PERMISSIONS + '&scope=' + encodeURIComponent('bot applications.commands');

  var T = {
    es: {
      btn: 'Invitar a Kareah',
      title: 'Invitar a Kareah',
      intro: 'Kareah se añade desde la pantalla oficial de Discord, donde eliges el servidor. Solo puedes añadirlo a servidores donde tengas el permiso <strong>Gestionar servidor</strong>.',
      permsTitle: 'Permisos que pide (no pide Administrador)',
      perms: [
        'Ver canales, enviar mensajes, insertar enlaces, adjuntar archivos y leer el historial: responder a comandos y publicar fichas.',
        'Gestionar mensajes: <code>/clear</code>, borrado automático, automoderación y mensajes fijados.',
        'Gestionar canales: <code>/canal</code>, estadísticas, voz temporal y permisos de canal.',
        'Gestionar roles: autoroles y botones de rol.',
        'Expulsar, banear y aislar miembros: <code>/kick</code>, <code>/ban</code>, <code>/silenciar</code> y sanciones de la automoderación.',
        'Conectar y mover miembros en voz: voz temporal y <code>/moveall</code>.'
      ],
      data: 'Para funcionar, el bot <strong>lee los mensajes de los canales que ve</strong> (automoderación, fijados, disparadores, comandos con prefijo y monitor de noticias) y guarda la configuración de cada servidor. Al expulsarlo se borran los datos de ese servidor. Detalle en la <a href="privacy.html">Política de Privacidad</a>.',
      checksTitle: 'Marca todas las casillas para continuar',
      checks: [
        'Tengo el permiso <strong>Gestionar servidor</strong> en el servidor donde lo voy a añadir, o autorización de quien lo administra.',
        'He leído y acepto las <a href="terms.html" target="_blank" rel="noopener">Condiciones del Servicio</a>.',
        'He leído la <a href="privacy.html" target="_blank" rel="noopener">Política de Privacidad</a> y entiendo que el bot lee los mensajes de los canales que ve para ofrecer sus funciones.',
        'Entiendo los permisos que solicita y que soy responsable de informar a los miembros del servidor y de usar el bot conforme a las normas de Discord.',
        'Tengo la edad mínima exigida por Discord en mi país para usar la plataforma.'
      ],
      cancel: 'Cancelar',
      go: 'Aceptar y continuar en Discord'
    },
    en: {
      btn: 'Invite Kareah',
      title: 'Invite Kareah',
      intro: 'Kareah is added through Discord\'s official screen, where you pick the server. You can only add it to servers where you have the <strong>Manage Server</strong> permission.',
      permsTitle: 'Permissions it asks for (no Administrator)',
      perms: [
        'View channels, send messages, embed links, attach files and read history: answer commands and post sheets.',
        'Manage messages: <code>/clear</code>, auto-clear, automod and sticky messages.',
        'Manage channels: <code>/canal</code>, stats, temporary voice and channel permissions.',
        'Manage roles: auto-roles and button roles.',
        'Kick, ban and time out members: <code>/kick</code>, <code>/ban</code>, <code>/silenciar</code> and automod sanctions.',
        'Connect and move members in voice: temporary voice and <code>/moveall</code>.'
      ],
      data: 'To work, the bot <strong>reads messages in the channels it can see</strong> (automod, sticky messages, triggers, prefix commands and the news monitor) and stores each server\'s settings. When it is removed, that server\'s data is deleted. Details in the <a href="privacy.html#en">Privacy Policy</a>.',
      checksTitle: 'Tick every box to continue',
      checks: [
        'I have the <strong>Manage Server</strong> permission on the server where I am adding it, or authorization from whoever administers it.',
        'I have read and accept the <a href="terms.html#en" target="_blank" rel="noopener">Terms of Service</a>.',
        'I have read the <a href="privacy.html#en" target="_blank" rel="noopener">Privacy Policy</a> and understand the bot reads messages in the channels it sees to provide its features.',
        'I understand the permissions it requests, and that I am responsible for informing the server\'s members and for using the bot in line with Discord\'s rules.',
        'I am at least the minimum age Discord requires in my country.'
      ],
      cancel: 'Cancel',
      go: 'Accept and continue on Discord'
    }
  };

  var CSS = '' +
    ':root{--kv-on:#fff}@media (prefers-color-scheme:dark){:root{--kv-on:#0d1117}}' +
    '.kv-top{display:flex;justify-content:flex-end;padding:10px 16px 0;max-width:1080px;margin:0 auto}' +
    '.kv-btn{font:inherit;font-size:.92rem;font-weight:600;cursor:pointer;border:0;border-radius:10px;padding:8px 16px;background:var(--accent,#5865f2);color:var(--kv-on)}' +
    '.kv-btn:hover:not(:disabled){filter:brightness(1.1)}.kv-btn:focus-visible{outline:2px solid var(--accent,#5865f2);outline-offset:3px}' +
    '.kv-btn:disabled{opacity:.45;cursor:not-allowed}' +
    '.kv-btn.kv-ghost{background:transparent;color:var(--fg,inherit);border:1px solid var(--line,#d1d9e0)}' +
    '.kv-dlg{max-width:600px;width:calc(100% - 32px);max-height:90vh;overflow:auto;border:1px solid var(--line,#d1d9e0);border-radius:14px;background:var(--bg,#fff);color:var(--fg,inherit);padding:0}' +
    '.kv-dlg::backdrop{background:rgba(0,0,0,.55)}' +
    '.kv-in{padding:20px 22px 18px;font-size:.95rem;line-height:1.5}' +
    '.kv-in h2{font-size:1.25rem;margin:0 0 8px;padding:0;border:0}.kv-in h3{font-size:1rem;margin:16px 0 6px;padding:0;border:0}' +
    '.kv-in p{margin:.4rem 0}.kv-in ul{margin:.3rem 0;padding-left:1.2rem}.kv-in li{margin:.25rem 0}' +
    '.kv-in a{color:var(--accent,#5865f2)}.kv-in code{background:rgba(127,127,127,.15);padding:1px 5px;border-radius:4px;font-size:.9em}' +
    '.kv-head{display:flex;align-items:center;gap:8px}.kv-head h2{flex:1}' +
    '.kv-lang{display:flex;gap:6px}.kv-lang button{font:inherit;font-size:.8rem;padding:2px 9px;border:1px solid var(--line,#d1d9e0);border-radius:999px;background:transparent;color:inherit;cursor:pointer}' +
    '.kv-lang button[aria-pressed=true]{border-color:var(--accent,#5865f2);color:var(--accent,#5865f2)}' +
    '.kv-checks{display:grid;gap:10px;margin:8px 0 16px}' +
    '.kv-checks label{display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:start;cursor:pointer}' +
    '.kv-checks input{width:18px;height:18px;margin-top:2px;accent-color:var(--accent,#5865f2)}' +
    '.kv-actions{display:flex;gap:10px;justify-content:flex-end;flex-wrap:wrap}';

  var lang = /^en/i.test(document.documentElement.lang || navigator.language || '') ? 'en' : 'es';
  var dlg, goBtn, checks, topBtn;

  function build() {
    var style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    var top = document.createElement('div');
    top.className = 'kv-top';
    topBtn = document.createElement('button');
    topBtn.type = 'button';
    topBtn.className = 'kv-btn';
    top.appendChild(topBtn);
    document.body.insertBefore(top, document.body.firstChild);

    dlg = document.createElement('dialog');
    dlg.className = 'kv-dlg';
    dlg.setAttribute('aria-labelledby', 'kv-title');
    document.body.appendChild(dlg);

    topBtn.addEventListener('click', function () {
      render();
      if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '');
    });
    render(true);
  }

  function render(buttonOnly) {
    var t = T[lang];
    topBtn.textContent = t.btn;
    if (buttonOnly) return;

    var html = '<form method="dialog" class="kv-in">' +
      '<div class="kv-head"><h2 id="kv-title">' + t.title + '</h2>' +
      '<span class="kv-lang" role="group" aria-label="Idioma / Language">' +
      '<button type="button" data-l="es" aria-pressed="' + (lang === 'es') + '">ES</button>' +
      '<button type="button" data-l="en" aria-pressed="' + (lang === 'en') + '">EN</button></span></div>' +
      '<p>' + t.intro + '</p>' +
      '<h3>' + t.permsTitle + '</h3><ul>' + t.perms.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ul>' +
      '<p>' + t.data + '</p>' +
      '<h3>' + t.checksTitle + '</h3><div class="kv-checks">' +
      t.checks.map(function (c) { return '<label><input type="checkbox"><span>' + c + '</span></label>'; }).join('') + '</div>' +
      '<div class="kv-actions"><button type="button" class="kv-btn kv-ghost" id="kv-cancel">' + t.cancel + '</button>' +
      '<button type="submit" class="kv-btn" id="kv-go" disabled>' + t.go + '</button></div></form>';
    dlg.innerHTML = html;

    goBtn = dlg.querySelector('#kv-go');
    checks = Array.prototype.slice.call(dlg.querySelectorAll('input[type=checkbox]'));
    var sync = function () { goBtn.disabled = !checks.every(function (c) { return c.checked; }); };
    checks.forEach(function (c) { c.addEventListener('change', sync); });

    dlg.querySelector('#kv-cancel').addEventListener('click', function () { dlg.close(); });
    Array.prototype.forEach.call(dlg.querySelectorAll('.kv-lang button'), function (b) {
      b.addEventListener('click', function () { lang = b.getAttribute('data-l'); topBtn.textContent = T[lang].btn; render(); });
    });
    dlg.querySelector('form').addEventListener('submit', function (e) {
      e.preventDefault();
      if (goBtn.disabled) return;
      dlg.close();
      window.open(URL, '_blank', 'noopener');
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build); else build();
})();
