<!--
CÓMO USAR ESTE ARCHIVO
- Cada bloque entre las marcas "✂ MENSAJE N" es UN mensaje de Discord. Copia solo lo que hay
  debajo de la marca (sin la marca) y pégalo en el canal. Discord limita cada mensaje a
  2000 caracteres, por eso está dividido así.
- Al editar, mantén cada bloque por debajo de ~1900 caracteres. Si te pasas, parte el bloque.
- Discord no muestra tablas: por eso todo son listas y títulos (#, ##, ###).
- Los ejemplos usan valores de muestra: cambia canales, usuarios y cantidades por los tuyos.
-->

<!-- ✂ MENSAJE 1 — introducción -->
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
- `/clear mensajes` — Borra mensajes del canal. Conserva los anclados salvo que pongas `ancladas:true`.
  Ej.: `/clear mensajes cantidad:20 usuario:@Juan`
- `/clear auto añadir` · `eliminar` · `lista` — Borrado automático periódico de un canal. Con `ancladas:true` borra todo, sin excepciones.
  Ej.: `/clear auto añadir canal:#spam cantidad:100 unidad:horas`
- `/infousuario` — Información de un usuario.
  Ej.: `/infousuario user:@Juan`

**Por prefijo:** `!clear 10` (borra 10 mensajes y el propio comando) · `!clear all` · `!clear clonar` · `!help`
📌 `!clear` conserva los mensajes anclados. Para borrarlos también, añade `ancladas`: `!clear 10 ancladas` · `!clear all ancladas`

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

<!-- ✂ MENSAJE 6 — inventarios -->
## Inventarios
- `/inventario crear` · `lista` · `borrar` · `republicar` — Inventarios con panel fijo y botones ➕ Añadir · ➖ Quitar · 🔁 Mover · 📋 Detalle · 📜 Historial. Cada objeto tiene cantidad por ubicación y un mínimo opcional que avisa al bajar. Los administradores lo crean; ven el panel y el historial todos.
  Ej.: `/inventario crear nombre:Reactivos ubicaciones:Flotación, Nave, Jhon Wick`
- `/inventario objeto` (`añadir` · `quitar` · `minimo`) · `ubicacion` (`añadir` · `quitar`) — Estructura del inventario (administradores).
  Ej.: `/inventario objeto añadir inventario:Reactivos nombre:Reactivo 01 minimo:5`
- `/inventario permisos añadir` · `quitar` · `ver` — Usuarios o roles que pueden cambiar cantidades con los botones (administradores).
  Ej.: `/inventario permisos añadir inventario:Reactivos usuario:@Juan`
- `/inventario stock añadir` · `quitar` · `mover` — Lo mismo que los botones, escrito (solo usuarios con permiso).
  Ej.: `/inventario stock mover inventario:Reactivos objeto:Reactivo 01 desde:Nave hacia:Flotación cantidad:3`

<!-- ✂ MENSAJE 7 — Star Citizen: minería -->
# 🚀 STAR CITIZEN
## Minería y recursos
- `/recurso` — Ficha de un material: dónde minarlo (🚀 nave · ⛏️ ROC · 🚜 FPS · 🌿 cosecha), rareza y refinerías.
  Ej.: `/recurso objeto:Quantainium usos:true` · con `solo_recetas:true` ves solo las recetas
- `/escaneo` — Tabla de códigos de escaneo de hasta 12 recursos, ordenada por firma.
  Ej.: `/escaneo recurso:Aluminum recurso2:Quantainium recurso3:Agricium`
- `/minado` — Calcula láser y módulos para minar una roca.
  Ej.: `/minado objeto:Iron`
- `/refinar` — Mejores refinerías, coste y rendimiento según tus lotes (`SCU,calidad`). El material se puede buscar en español o inglés.
  Ej.: `/refinar material:Iron prioridad:coste`

<!-- ✂ MENSAJE 8 — Star Citizen: crafteo y misiones -->
## Crafteo y misiones
- `/receta` — Receta de fabricación y qué propiedad afecta cada material.
  Ej.: `/receta objeto:CQ7 Rifle`
- `/craft` — Resultado del crafteo según la calidad de cada material.
  Ej.: `/craft objeto:CQ7 Rifle`
- `/mision` — Ficha completa: recompensas, requisitos, entregas, tiempo, cooldown, jugadores, combate (naves, bando y carga), lugares y destinos, sin recortes. Sale en español por defecto, aunque busques el nombre en inglés; usa `idioma:English` para verla en inglés.
  Ej.: `/mision nombre:XS Purchase Order`
- `/wikelo` — Trueques de Wikelo Emporium, por nombre o por recompensa (nave, arma, armadura): el autocompletado muestra `Trueque → Recompensa`. Misma opción `idioma` que `/mision`.
  Ej.: `/wikelo objeto:Aegis Sabre Firebird`

<!-- ✂ MENSAJE 9 — Star Citizen: naves, objetos y otros -->
## Naves y objetos
- `/nave buy` · `rent` — Dónde comprar o alquilar una nave. En `buy` salen también los paquetes sin CCU de Star-Hangar y Space Foundry: el precio más bajo de cada seguro (LTI, 10 años…) por tienda.
  Ej.: `/nave buy nave:Carrack`
- `/nave lista buy` · `rent` — Naves a la venta o en alquiler en una ubicación.
  Ej.: `/nave lista buy ubicacion:New Deal`
- `/nave carrito add` · `quitar` · `ver` · `vaciar` — Tu lista de la compra agrupada por tienda.
  Ej.: `/nave carrito add nave:Cutlass Black`
- `/nave ruta` — Cadena de upgrades (CCU) más barata entre dos naves, en € o $.
  Ej.: `/nave ruta origen:Aurora objetivo:Carrack moneda:EUR`
- `/objeto buy` · `lista buy` · `carrito` — Dónde comprar ítems y componentes.
  Ej.: `/objeto carrito add objeto:Arrowhead cantidad:2`
- `/finder buscar` — Busca cualquier ítem y lista todas las tiendas donde comprarlo. Con `sistema` (Stanton, Pyro o Nyx), `ubicacion` (ciudad o estación: `Nyx - Levski`, `Stanton - ARC-L1`) o `tienda` solo las de ahí. Si un trueque de Wikelo u otra misión pide el ítem (con la cantidad y el pago), las lista y las abre con un desplegable.
  Ej.: `/finder buscar objeto:P4-AR Rifle ubicacion:Stanton - ARC-L1`
- `/finder tienda` — Todo lo que vende una tienda, por categorías y con precio. Con `categoria` solo una (`Utility`, `Utility/Gadgets`, `Miscellaneous/Foods`…).
  Ej.: `/finder tienda tienda:Tammany categoria:Utility/Gadgets`

<!-- ✂ MENSAJE 10 — Star Citizen: componentes, comercio y otros -->
## Componentes
- `/componente buscar` — Dónde se compra un componente de nave, si puede ser botín y qué naves lo llevan de serie, con en cuántas misiones sale cada una. Con `nave` lista esas misiones.
  Ej.: `/componente buscar componente:Bulwark nave:Drake Vulture`
- `/componente nave` — Qué equipamiento trae de serie una nave: generador, escudos, armas, misiles…
  Ej.: `/componente nave nave:Cutlass Black`

## Comercio
- `/comercio comprar` · `vender` — Dónde comprar (más barato primero) o vender (más caro primero) una mercancía.
  Ej.: `/comercio comprar recurso:oro sistema:Stanton`
- `/comercio terminal` — Qué compra y vende una terminal.
  Ej.: `/comercio terminal ubicacion:TDD Area 18`
- `/comercio ruta` — Rutas rentables según tu carga e inversión (beneficio, ROI, distancia).
  Ej.: `/comercio ruta sistema:Stanton scu:46 inversion:200000 orden:roi`

## Otros
- `/pyam` — Estado del Executive Hangar (online, offline o reiniciando) y sus próximos cambios. El ciclo sale de contestedzonetimers.com; con `fuente` puedes usar exec.xyxyll.com.
  Ej.: `/pyam naves:true fuente:exec.xyxyll.com` (muestra también las naves de recompensa)
