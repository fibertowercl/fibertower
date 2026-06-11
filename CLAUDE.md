# Fibertower — Sitio Web

## Descripción del Proyecto
Sitio web corporativo para **Fibertower**, empresa chilena especializada en **mantenimiento, montaje y servicios de torres de enfriamiento industrial**.

## Repositorio
- **GitHub:** https://github.com/fibertowercl/fibertower
- **Sitio en línea:** https://fibertower.cl
- **Cuenta GitHub:** fibertowercl

## Tecnologías
- HTML5 + CSS3 + JavaScript vanilla
- Bootstrap 5.3 (CDN)
- Font Awesome 6.4 (CDN)
- Google Fonts: Montserrat (títulos) + Roboto (cuerpo)
- Sin frameworks ni dependencias locales — todo por CDN

## Estructura de Archivos
```
fibertower/
├── index.html                  # Página principal
├── nosotros/index.html         # Quiénes Somos → URL: /nosotros/
├── servicios/index.html        # Servicios → URL: /servicios/
├── contactanos/index.html      # Contacto → URL: /contactanos/
├── tecnologia/index.html       # Tecnología / Centro Técnico → URL: /tecnologia/
├── quienes-somos.html          # Redirect meta-refresh → /nosotros/
├── servicios.html              # Redirect meta-refresh → /servicios/
├── contacto.html               # Redirect meta-refresh → /contactanos/
├── css/style.css               # Todos los estilos
├── js/main.js                  # JS: navbar scroll, contadores, lightbox galería
├── sitemap.xml                 # Sitemap para Google (5 URLs)
├── robots.txt                  # Apunta al sitemap
├── logofiber.png               # Logo original (fondo blanco) — usado en navbar
├── Mantencion.png              # Foto de mantención original
├── mantencion2.png             # Foto de mantención original 2
└── images/
    ├── newlogo.png             # Logo original (fondo blanco) — ya no se usa en navbar
    ├── newlogo_transparente_normal.png  # Logo con fondo transparente — usado en navbar ESCRITORIO
    ├── newlogo_blanco.png      # Logo con letras blancas y fondo transparente — usado en navbar MÓVIL
    ├── newlogo_transparent.png # Logo generado automáticamente (no usar, reemplazado por los anteriores)
    ├── SPLASH.jpg              # Foto correcta de relleno splash (usada en /tecnologia/ #rellenos)
    ├── logopie.png             # Logo sin tagline (fondo blanco) — usado en footer
    ├── torresarriba.jpg        # Foto hero slider slide 1
    ├── Foto1.jpg               # Técnicos en torre azul (SINAX)
    ├── foto2.jpg               # Dos torres azules en azotea
    ├── foto3.jpg               # Montaje con grúa (equipo instalando torre)
    ├── foto4.jpg               # Torres industriales grandes grises con tuberías
    ├── foto5.jpg               # Sistema con tuberías verdes
    ├── foto6.jpg               # Torre azul compacta close-up
    ├── foto7.jpg               # Técnico inspeccionando sistema de ventilación
    ├── foto8.jpg               # Dos técnicos en mantención
    ├── rellenos.jpg            # Rellenos plásticos negros (componente de torre)
    ├── evaluacion.png          # Imagen servicio Evaluación de Proyectos
    ├── recambio.png            # Imagen servicio Recambio de Rellenos
    ├── rellenostipos.png       # Imagen tipos de rellenos (laminar/splash)
    ├── electro.png             # Imagen servicio Servicios Electromecánicos
    └── galeria2/               # Fotos específicas por componente (usadas en /tecnologia/)
        ├── Ventiladores/       # Fotos de ventiladores
        ├── motores/            # Fotos de motores eléctricos
        ├── drift/              # Fotos de drift eliminators
        ├── louvers/            # Fotos de louvers/persianas
        ├── boquillas/          # Fotos de boquillas aspersoras
        ├── distribucion/       # Fotos de sistema de distribución de agua
        └── balanceo/           # Fotos de balanceo y análisis de vibraciones
```

## Paleta de Colores
```css
--primary:   #023e7d   /* Azul navy oscuro */
--secondary: #0096c7   /* Azul cyan */
--accent:    #e87722   /* Naranja */
--dark:      #0a1628   /* Casi negro azulado */
--light:     #f0f5fa   /* Gris claro */
```

## URLs del Sitio
Todas las páginas usan rutas absolutas (`/nosotros/`, `/servicios/`, etc.), NO rutas relativas ni `.html`.
- Inicio: `/`
- Quiénes Somos: `/nosotros/`
- Servicios: `/servicios/`
- Tecnología: `/tecnologia/`
- Contacto: `/contactanos/`

Las páginas internas (nosotros, servicios, contactanos) usan `../` para assets:
- CSS: `../css/style.css`
- JS: `../js/main.js`
- Imágenes: `../images/foto1.jpg`, `../Mantencion.png`, etc.

## Páginas y Secciones

### index.html
1. Top bar (teléfono, email, redes sociales)
2. Navbar sticky con logo (se achica al hacer scroll)
3. Hero slider 3 slides: `torresarriba.jpg` / `foto3.jpg` / `foto2.jpg` — altura `65vh; min-height:480px`
4. About: `foto8.jpg` + badge "+10 años"
5. Stats animados: 10+ años / 200+ proyectos / 150+ clientes / 98% satisfacción
6. Servicios (6 cards): Foto1.jpg / foto3.jpg / foto7.jpg / recambio.png / evaluacion.png / electro.png
7. Por qué elegirnos: foto4.jpg — **SIN** tarjeta "Cobertura Nacional" (eliminada)
8. Galería 3×3 con lightbox: las 9 fotos de images/
9. CTA sección azul oscuro con patrón de gotas de agua SVG de fondo
10. Footer — dirección: **Oficina 1202** (no "Depto 1202")
11. Statcounter fijo abajo-izquierda (`position:fixed; bottom:12px; left:12px; z-index:9999`)

### nosotros/index.html
- Historia empresa + foto3.jpg
- Tira de 4 fotos: foto5, foto6, Mantencion.png, mantencion2.png
- Misión / Visión / Compromiso
- 4 valores (Calidad, Seguridad, Innovación, Sustentabilidad)
- Principios de Trabajo (4 tarjetas con íconos): Seguridad / Eficiencia / Confiabilidad / Compromiso Técnico

### servicios/index.html
6 servicios en este orden:
1. Evaluación de Proyectos: `evaluacion.png`
2. Mantención Preventiva y Correctiva: `foto8.jpg`
3. Montaje e Instalación: `foto3.jpg`
4. Reparación de Componentes: `foto7.jpg`
5. Recambio de Rellenos Evaporativos: `recambio.png` + imagen `rellenostipos.png`
6. Servicios Electromecánicos: `electro.png`

Layout alternado: impares fondo blanco imagen-izquierda, pares fondo `var(--light)` imagen-derecha (`flex-lg-row-reverse`).

### contactanos/index.html
- 4 tarjetas info: teléfono, WhatsApp, email, emergencias 24/7
- Formulario AJAX (Formsubmit.co) — ver sección Formulario de Contacto
- Horarios de atención
- Mapa Google Maps embed: Sexta Avenida 1340, Oficina 1202, San Miguel
- Redes sociales (LinkedIn + WhatsApp)
- FAQ acordeón (11 preguntas: faq1, faq3, faq4 originales + faq5 a faq12 agregadas)

### tecnologia/index.html
Página Centro Técnico con sub-nav sticky y 8 secciones:
1. `#funcionamiento` — Cómo funciona una torre de enfriamiento (diagrama + texto)
2. `#rellenos` — Tipos de rellenos (laminar vs splash) con tabla comparativa
3. `#componentes` — 6 component-cards con fotos reales de `images/galeria2/`:
   - Ventiladores → `galeria2/Ventiladores/`
   - Motores Eléctricos → `galeria2/motores/`
   - Drift Eliminators → `galeria2/drift/`
   - Louvers → `galeria2/louvers/`
   - Boquillas → `galeria2/boquillas/`
   - Sistema Distribución → `galeria2/distribucion/`
4. `#mantenimiento` — Programa de mantenimiento preventivo (tabla de frecuencias)
5. `#balanceo` — Balanceo y Vibraciones, fotos desde `galeria2/balanceo/`
6. `#problemas` — Problemas comunes y soluciones (tarjetas diagnóstico)
7. `#agua` — Tratamiento del agua (parámetros, inhibidores, biocidas)
8. `#galeria` — Galería lightbox (reutiliza `.gallery-grid` / `.gallery-item` de style.css)

CSS inline en `<style>` al inicio del `<body>`. Sub-nav: `position:sticky; top:76px; z-index:98`.
Secciones con `scroll-margin-top: 130px` (navbar 76px + sub-nav 45px + margen).
- `.small-img-row img` height: **520px** (se aumentó para que se vean bien las fotos)
- Todas las imágenes de secciones técnicas tienen **lightbox táctil** (tap para ampliar en móvil, click en escritorio). Se distingue tap de scroll midiendo desplazamiento del dedo (<10px = tap). Script inline al final del `<body>`.
- Foto relleno splash: `../images/SPLASH.jpg`
- Foto sistema distribución: archivo `WW15uO4...` en `galeria2/distribucion/`

## Datos de Contacto
- Teléfono: `+56 9 7807 9037` / `tel:+56978079037`
- WhatsApp: `+56 9 8832 7996` / `https://wa.me/56988327996`
- Email: `contacto@fibertower.cl`
- Dirección: Sexta Avenida 1340, Oficina 1202, San Miguel, Santiago
- LinkedIn: `https://www.linkedin.com/company/fibertowerchile/`
- Redes activas: LinkedIn y WhatsApp. Facebook e Instagram NO se usan.

## Formulario de Contacto
El formulario en `contactanos/index.html` usa **Formsubmit.co** en modo AJAX:
- Endpoint: `https://formsubmit.co/ajax/fibertowerchile@gmail.com`
- Los correos llegan a: `fibertowerchile@gmail.com`
- Script inline al final del `<body>` (capture-phase listener)
- **IMPORTANTE:** Formsubmit.co pide activación por email la primera vez que recibe un envío desde una URL nueva. Si cambia la URL de la página, hay que activarlo de nuevo desde Gmail.
- Campos: nombre, empresa, telefono, email, servicio, tipo_torre, ciudad, mensaje

## Decisiones de Diseño Importantes

### Logo en Navbar
Dos versiones según pantalla (usando clases Bootstrap `d-none d-lg-block` / `d-lg-none`):
- **Escritorio** (`d-none d-lg-block`): `images/newlogo_transparente_normal.png` — fondo transparente, colores normales, sobre navbar blanca.
- **Móvil** (`d-lg-none`): `images/newlogo_blanco.png` — fondo transparente, letras blancas, sobre navbar azul navy.

Tamaños:
- Normal: `max-height: 260px`
- Scrolled: `max-height: 185px`
- Móvil: `max-height: 160px`

El navbar en **móvil** tiene fondo azul navy (`var(--primary)`) con links blancos y botón hamburguesa blanco (definido en `@media (max-width: 992px)` en `style.css`).
El efecto de crecer/achicarse al scrollear fue apreciado por el cliente.

### Logo en Footer
`images/logopie.png` (versión sin tagline) con fondo blanco redondeado:
```css
background: rgba(255,255,255,0.92);
padding: 12px 20px;
border-radius: 10px;
box-shadow: 0 4px 20px rgba(0,0,0,0.25);
```
**NO usar** `filter: brightness(0) invert(1)` — ambos logos tienen fondo blanco, no transparente. El filtro los convierte en cuadrado blanco sólido.

### Hero Slider
- Altura escritorio: `height: 65vh; min-height: 480px` — tanto en `.hero-section` (CSS) como en cada `.carousel-item` (inline)
- Altura móvil (`max-width: 768px`): `height: 70vh; min-height: 520px`
- En móvil el caption está en `top: 58%` (en vez de 50%) para evitar que se superponga con el navbar
- Deben coincidir para evitar espacio blanco bajo el slider
- Slide 1 overlay: `rgba(2,62,125,0.55)` — más liviano para que se vea la foto

### CTA Section (antes del footer)
Fondo azul oscuro con patrón de gotas de agua SVG como textura (dos capas: relleno 4% opacidad + contorno 6% opacidad desfasado).

## SEO
- Títulos y meta descriptions optimizados para "torres de enfriamiento Chile"
- JSON-LD LocalBusiness schema en `index.html`
- Canonical URLs en todas las páginas
- Open Graph meta tags
- `sitemap.xml` enviado a Google Search Console
- `robots.txt` apunta al sitemap
- Google Business Profile creado

## Analytics
Statcounter (proyecto 13227052) integrado solo en `index.html`, visible como widget fijo abajo-izquierda con link "View My Stats" en blanco.

## Cómo Publicar Cambios
```bash
git add -A
git commit -m "descripción del cambio"
git push
```
GitHub Pages se actualiza en 1-2 minutos automáticamente.
Después de cambios de URL, reenviar sitemap en Google Search Console.
