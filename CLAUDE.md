# Fibertower — Sitio Web

## Descripción del Proyecto
Sitio web corporativo para **Fibertower**, empresa chilena especializada en **mantenimiento, montaje y servicios de torres de enfriamiento industrial**.

## Repositorio
- **GitHub:** https://github.com/fibertowercl/fibertower
- **Sitio en línea:** https://fibertowercl.github.io/fibertower/
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
├── index.html              # Página principal
├── quienes-somos.html      # Quiénes Somos
├── servicios.html          # Servicios
├── contacto.html           # Contacto
├── css/style.css           # Todos los estilos
├── js/main.js              # JS: navbar scroll, contadores, lightbox galería
├── logofiber.png           # Logo original (fondo blanco) — usado en navbar
├── Mantencion.png          # Foto de mantención original
├── mantencion2.png         # Foto de mantención original 2
└── images/
    ├── logopie.png         # Logo sin tagline (fondo blanco) — usado en footer
    ├── Foto1.jpg           # Técnicos en torre azul (SINAX)
    ├── foto2.jpg           # Dos torres azules en azotea
    ├── foto3.jpg           # Montaje con grúa (equipo instalando torre)
    ├── foto4.jpg           # Torres industriales grandes grises con tuberías
    ├── foto5.jpg           # Sistema con tuberías verdes
    ├── foto6.jpg           # Torre azul compacta close-up
    ├── foto7.jpg           # Técnico inspeccionando sistema de ventilación
    ├── foto8.jpg           # Dos técnicos en mantención
    └── rellenos.jpg        # Rellenos plásticos negros (componente de torre)
```

## Paleta de Colores
```css
--primary:   #023e7d   /* Azul navy oscuro */
--secondary: #0096c7   /* Azul cyan */
--accent:    #e87722   /* Naranja */
--dark:      #0a1628   /* Casi negro azulado */
--light:     #f0f5fa   /* Gris claro */
```

## Páginas y Secciones

### index.html
1. Top bar (teléfono, email, redes sociales)
2. Navbar sticky con logo (se achica al hacer scroll)
3. Hero slider 3 slides: gradiente CSS / foto3.jpg / foto2.jpg
4. About: foto8.jpg + badge "+10 años"
5. Stats animados: 10+ años / 200+ proyectos / 150+ clientes / 98% satisfacción
6. Servicios (3 cards): Foto1.jpg / foto3.jpg / foto7.jpg
7. Por qué elegirnos: foto4.jpg
8. Galería 3×3 con lightbox: las 9 fotos de images/
9. CTA sección azul oscuro con patrón de gotas de agua de fondo
10. Footer

### quienes-somos.html
- Historia empresa + foto3.jpg
- Tira de 4 fotos: foto5, foto6, Mantencion.png, mantencion2.png
- Misión / Visión / Compromiso
- 4 valores (Calidad, Seguridad, Innovación, Sustentabilidad)
- Equipo (4 tarjetas con íconos)

### servicios.html
- Mantención preventiva/correctiva: foto8.jpg
- Montaje e instalación: foto3.jpg
- Reparación de componentes: foto7.jpg
- Proceso 4 pasos
- Servicios adicionales (4 tarjetas)

### contacto.html
- 4 tarjetas info: teléfono, WhatsApp, email, emergencias 24/7
- Formulario completo con selects de tipo servicio y tipo torre
- Horarios de atención
- Redes sociales
- FAQ acordeón (4 preguntas)

## Decisiones de Diseño Importantes

### Logo en Navbar
`logofiber.png` tiene fondo blanco — funciona bien en navbar (fondo blanco).
- Normal: `max-height: 260px`
- Scrolled: `max-height: 185px`
- Móvil: `max-height: 160px`
El efecto de crecer/achicarse al scrollear fue apreciado por el cliente.

### Logo en Footer
`logopie.png` (versión sin tagline) se usa en el footer con fondo blanco redondeado:
```css
background: rgba(255,255,255,0.92);
padding: 12px 20px;
border-radius: 10px;
box-shadow: 0 4px 20px rgba(0,0,0,0.25);
```
**NO usar** `filter: brightness(0) invert(1)` — ambos logos tienen fondo blanco, no transparente. El filtro los convierte en cuadrado blanco sólido.

### Espaciado Hero vs Páginas Internas
El `<section class="hero-section">` heredaba `padding: 85px 0` de la regla global `section { padding: 85px 0 }`.
Fix: `.hero-section { padding: 0; }` — sin esto hay espacio blanco entre navbar e imagen.

### CTA Section (antes del footer)
Fondo azul oscuro con patrón de gotas de agua SVG como textura (dos capas: relleno 4% opacidad + contorno 6% opacidad desfasado). El cliente aprobó este diseño.

## Datos de Contacto (Pendientes de Actualizar)
Todos los archivos tienen placeholders que el cliente debe reemplazar:
- Teléfono: `+56 9 XXXX XXXX`
- Email: `contacto@fibertower.cl`
- WhatsApp: `https://wa.me/56900000000`
- Dirección: `Santiago, Chile`
- Redes sociales: todos los `href="#"` deben apuntar a perfiles reales

## Cómo Publicar Cambios
```bash
git add -A
git commit -m "descripción del cambio"
git push
```
GitHub Pages se actualiza en 1-2 minutos automáticamente.
