# 🤖 Kareah — Guía de comandos
Bot de **moderación**, **utilidades de comunidad** y **datos de Star Citizen**.
Escribe `/` en el chat para ver los comandos y sus opciones. Los ejemplos de esta guía usan valores de muestra.

**Secciones**
🛡️ Moderación y servidor
🚀 Star Citizen

<!-- ✂ MENSAJE 2 — moderación directa -->
# 🛡️ MODERACIÓN Y SERVIDOR
## Moderación directa
- `/ban` — Banea a un usuario.
  Ej.: `/ban user:@Juan reason:spam delete_messages:1d`
- `/kick` — Expulsa a un usuario.
  Ej.: `/kick user:@Juan reason:flood`
- `/silenciar aplicar` · `eliminar` — Silencia (timeout) a un usuario un tiempo.
  Ej.: `/silenciar aplicar usuario:@Juan duracion:1h razon:insultos`
- `/aviso` — Advierte a un usuario.
  Ej.: `/aviso user:@Juan reason:Primer aviso por spam`
- `/avisos listar` · `limpiar` — Consulta o borra advertencias.
  Ej.: `/avisos listar user:@Juan`
- `/clear mensajes` — Borra mensajes del canal.
  Ej.: `/clear mensajes cantidad:20 usuario:@Juan`
- `/clear auto añadir` · `eliminar` · `lista` — Borrado automático periódico de un canal.
  Ej.: `/clear auto añadir canal:#spam cantidad:100 unidad:horas`
- `/infousuario` — Información de un usuario.
  Ej.: `/infousuario user:@Juan`

**Por prefijo:** `!clear 10` (borra 10 mensajes y el propio comando) · `!clear all` · `!clear clonar` · `!help`

<!-- ✂ MENSAJE 3 — automatización -->
## Automatización y protección
- `/automod` — Automoderación: `estado`, `activar`, `desactivar`, `antispam`, `antiinvites`, `palabra añadir`, `exento rol`…
  Ej.: `/automod antispam activar:true mensajes:5 segundos:5`
- `/logs canal` · `estado` · `desactivar` — Registro de mensajes editados y borrados.
  Ej.: `/logs canal canal:#registros`
- `/trigger crear` · `listar` · `alternar` · `eliminar` — Respuestas automáticas a palabras clave.
  Ej.: `/trigger crear` (abre un formulario)
- `/autoroles añadir` · `lista` — Roles que se dan al entrar al servidor.
  Ej.: `/autoroles añadir rol:@Miembro`
- `/buttonroles crear` · `añadir` — Mensajes con botones para elegir rol.
  Ej.: `/buttonroles crear canal:#roles titulo:Elige tu rol`
- `/permisos añadir` · `ver` · `copiar` · `limpiar` — Permisos de un canal.
  Ej.: `/permisos ver canal:#staff`

<!-- ✂ MENSAJE 4 — canales -->
## Canales y estructura
- `/canal clonar` · `editar` · `ocultar` · `eliminar` — Gestión de canales.
  Ej.: `/canal editar canal:#general slowmode:10`
- `/stats canal crear` · `lista` · `eliminar` — Canales con estadísticas (miembros, bots, canales, roles).
  Ej.: `/stats canal crear tipo:miembros`
- `/sticky texto` · `embed` — Mensaje fijado siempre al final del canal.
  Ej.: `/sticky texto mensaje:Lee las normas antes de escribir`
- `/voztemp` — Canales de voz temporales. Admins: `configurar`. Usuarios: `bloquear`, `nombre`, `transferir`.
  Ej.: `/voztemp nombre nuevo:Sala de Juan`
- `/moveall` — Mueve a todos los usuarios de voz a un canal.
  Ej.: `/moveall origen:#sala-1 destino:#sala-2`
- `/prefijo establecer` · `ver` · `reiniciar` — Prefijo de los comandos con `!`.
  Ej.: `/prefijo establecer prefijo:?`

<!-- ✂ MENSAJE 5 — utilidades de comunidad -->
## Utilidades de comunidad
- `/encuesta crear` · `cerrar` — Encuestas con votación.
  Ej.: `/encuesta crear pregunta:¿Quedamos? opcion1:Sí opcion2:No duracion:1d`
- `/sorteo crear` · `terminar` · `rerollear` · `lista` — Sorteos.
  Ej.: `/sorteo crear premio:Skin duracion:1d ganadores:2`
- `/evento crear` · `cancelar` · `lista` — Eventos con inscripción.
  Ej.: `/evento crear titulo:Noche de minería fecha:15/10/2026 21:00`
- `/recordar crear` · `lista` · `cancelar` — Recordatorios personales.
  Ej.: `/recordar crear tiempo:2h mensaje:Entregar el cargamento`
- `/traducir` — Traduce un texto. También: clic derecho en un mensaje → **Traducir mensaje**.
  Ej.: `/traducir text:Hello everyone to:es`
- `/embed crear` · `editar` — Mensajes con formato (embeds).
  Ej.: `/embed crear canal:#anuncios`
- `/rsi añadir` · `lista` · `alternar` — Reenvía y traduce canales de noticias.
  Ej.: `/rsi añadir origen:#rsi-news destino:#noticias traducir:true`

<!-- ✂ MENSAJE 6 — Star Citizen: minería -->
# 🚀 STAR CITIZEN
## Minería y recursos
- `/recurso` — Ficha de un material: dónde minarlo (🚀 nave · ⛏️ ROC · 🚜 FPS · 🌿 cosecha), rareza y refinerías.
  Ej.: `/recurso objeto:Quantainium usos:true` · con `solo_recetas:true` ves solo las recetas
- `/escaneo` — Tabla de códigos de escaneo de hasta 12 recursos, ordenada por firma.
  Ej.: `/escaneo recurso:Aluminum recurso2:Quantainium recurso3:Agricium`
- `/minado` — Calcula láser y módulos para minar una roca.
  Ej.: `/minado objeto:Iron`
- `/refinar` — Mejores refinerías, coste y rendimiento según tus lotes (`SCU,calidad`).
  Ej.: `/refinar material:Iron prioridad:coste`

<!-- ✂ MENSAJE 7 — Star Citizen: crafteo y misiones -->
## Crafteo y misiones
- `/receta` — Receta de fabricación y qué propiedad afecta cada material.
  Ej.: `/receta objeto:CQ7 Rifle`
- `/craft` — Resultado del crafteo según la calidad de cada material.
  Ej.: `/craft objeto:CQ7 Rifle`
- `/mision` — Misión con recompensas, requisitos y lo que hay que entregar.
  Ej.: `/mision nombre:XS Purchase Order`
- `/wikelo` — Trueques de Wikelo Emporium.
  Ej.: `/wikelo objeto:Lindinium`

<!-- ✂ MENSAJE 8 — Star Citizen: naves, objetos y otros -->
## Naves y objetos
- `/nave buy` · `rent` — Dónde comprar o alquilar una nave.
  Ej.: `/nave buy nave:Carrack`
- `/nave lista buy` · `rent` — Naves a la venta o en alquiler en una ubicación.
  Ej.: `/nave lista buy ubicacion:New Deal`
- `/nave carrito add` · `quitar` · `ver` · `vaciar` — Tu lista de la compra agrupada por tienda.
  Ej.: `/nave carrito add nave:Cutlass Black`
- `/nave ruta` — Cadena de upgrades (CCU) más barata entre dos naves, en € o $.
  Ej.: `/nave ruta origen:Aurora objetivo:Carrack moneda:EUR`
- `/objeto buy` · `lista buy` · `carrito` — Dónde comprar ítems y componentes.
  Ej.: `/objeto carrito add objeto:Arrowhead cantidad:2`
- `/finder` — Busca cualquier ítem del juego.
  Ej.: `/finder objeto:Behring P8-SC`

## PYAM - HANGARES EXECUTIVOS
- `/pyam` — Estado online/offline del Executive Hangar y sus próximos cambios.
  Ej.: `/pyam naves:true` (muestra también las naves de recompensa)
