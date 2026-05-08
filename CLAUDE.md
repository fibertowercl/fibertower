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
├── quienes-somos.html          # Redirect automático → /nosotros/
├── servicios.html              # Redirect automático → /servicios/
├── contacto.html               # Redirect automático → /contactanos/
├── css/style.css               # Todos los estilos
├── js/main.js                  # JS: navbar scroll, contadores, lightbox galería
├── sitemap.xml                 # Sitemap para Google
├── robots.txt                  # Apunta al sitemap
├── logofiber.png               # Logo original (fondo blanco) — usado en navbar
├── Mantencion.png              # Foto de mantención original
├── mantencion2.png             # Foto de mantención original 2
└── images/
    ├── newlogo.png             # Logo actual en navbar
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
    └── electro.png             # Imagen servicio Servicios Electromecánicos
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
7. Por qué elegirnos: foto4.jpg
8. Galería 3×3 con lightbox: las 9 fotos de images/
9. CTA sección azul oscuro con patrón de gotas de agua SVG de fondo
10. Footer
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
- Mapa Google Maps embed: Sexta Avenida 1340, San Miguel
- Redes sociales (LinkedIn + WhatsApp)
- FAQ acordeón (3 preguntas)

## Datos de Contacto
- Teléfono: `+56 9 7807 9037` / `tel:+56978079037`
- WhatsApp: `+56 9 8832 7996` / `https://wa.me/56988327996`
- Email: `contacto@fibertower.cl`
- Dirección: Sexta Avenida 1340, Dpto 1202, San Miguel, Santiago
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
`images/newlogo.png` — fondo blanco, funciona bien en navbar blanca.
- Normal: `max-height: 260px`
- Scrolled: `max-height: 185px`
- Móvil: `max-height: 160px`
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
- Altura: `height: 65vh; min-height: 480px` — tanto en `.hero-section` (CSS) como en cada `.carousel-item` (inline)
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
