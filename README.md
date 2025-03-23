# Mi Aplicación React

Una aplicación moderna construida con React, Vite, Tailwind CSS, Framer Motion y React Router.

## Características

- ⚡ **Vite** - Servidor de desarrollo ultrarrápido
- ⚛️ **React 18** con **TypeScript**
- 🎨 **Tailwind CSS** - Utilidades CSS para un diseño rápido
- 🚦 **React Router** - Enrutamiento declarativo
- ✨ **Framer Motion** - Animaciones fluidas
- 🔍 **SEO Optimizado** - Metadatos y estructura semántica
- 📱 **Responsive** - Diseño adaptable a todos los dispositivos
- 🌙 **Modo oscuro** - Soporte para tema claro/oscuro
- 🦸 **Heroicons** - Iconos SVG hermosos

## Requisitos previos

- Node.js (versión 14.x o superior)
- npm o yarn

## Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/tu-usuario/mi-react-app.git
cd mi-react-app
```

2. Instala las dependencias:
```bash
npm install
# o
yarn
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
```

4. Abre tu navegador en `http://localhost:3000`

## Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Compila la aplicación para producción
- `npm run preview` - Vista previa de la compilación de producción
- `npm run lint` - Ejecuta el linter para encontrar problemas

## Estructura del proyecto

```
/
├── public/             # Archivos estáticos
├── src/                # Código fuente
│   ├── assets/         # Imágenes, fuentes, etc.
│   ├── components/     # Componentes reutilizables
│   ├── hooks/          # Custom hooks
│   ├── layouts/        # Componentes de layout
│   ├── pages/          # Componentes de página
│   ├── App.tsx         # Componente principal
│   ├── main.tsx        # Punto de entrada
│   └── index.css       # Estilos globales con Tailwind
├── index.html          # Plantilla HTML
├── tailwind.config.js  # Configuración de Tailwind
├── postcss.config.js   # Configuración de PostCSS
├── vite.config.ts      # Configuración de Vite
└── tsconfig.json       # Configuración de TypeScript
```

## Personalización

### Tailwind CSS

Puedes personalizar los colores, fuentes y más en el archivo `tailwind.config.js`.

### Framer Motion

Las animaciones se pueden ajustar en los componentes individuales utilizando las propiedades de Framer Motion.

## Despliegue

Para compilar la aplicación para producción:

```bash
npm run build
# o
yarn build
```

Los archivos compilados estarán en el directorio `dist`, que puedes desplegar en cualquier servicio de hosting estático como Netlify, Vercel, GitHub Pages, etc.

## Licencia

MIT 