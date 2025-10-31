# PrimeReact Kit Tailwind

Tailwind CSS preset library for PrimeReact components using PassThrough API.

## Features

- 🎨 Pre-styled PrimeReact components with Tailwind CSS
- 🌓 Dark mode support
- 🎯 Customizable color themes using CSS variables
- 📦 Zero configuration - just import and use
- 🚀 TypeScript support
- ⚡ Built with Vite

## Prerequisites

Your project must have the following dependencies installed:
```json
{
  "dependencies": {
    "primereact": "^10.9.7",
    "tailwindcss": "^4.1.16"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.1.16"
  }
}
```

## Installation
```bash
npm install primereact-kit-tailwind
# or
pnpm add primereact-kit-tailwind
# or
yarn add primereact-kit-tailwind
```

## Setup

### 1. Configure Vite

Add Tailwind CSS plugin to your `vite.config.ts`:
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

### 2. Setup CSS

Create or update your main CSS file (e.g., `src/main.css`):
```css
@import 'tailwindcss';
@layer tailwind-base, tailwind-utilities;

@theme {
  /* Light mode colors */
  --color-base-100: oklch(100% 0 0);
  --color-base-200: oklch(93% 0 0);
  --color-base-300: oklch(86% 0 0);
  --color-base-content: oklch(22.389% 0.031 278.072);
  
  --color-primary: oklch(58% 0.158 241.966);
  --color-primary-content: oklch(100% 0 0);
  
  --color-secondary: oklch(55% 0.046 257.417);
  --color-secondary-content: oklch(100% 0 0);
  
  --color-accent: oklch(60% 0.118 184.704);
  --color-accent-content: oklch(100% 0 0);
  
  --color-neutral: oklch(0% 0 0);
  --color-neutral-content: oklch(100% 0 0);
  
  --color-info: oklch(60% 0.126 221.723);
  --color-info-content: oklch(100% 0 0);
  
  --color-success: oklch(62% 0.194 149.214);
  --color-success-content: oklch(100% 0 0);
  
  --color-warning: oklch(85% 0.199 91.936);
  --color-warning-content: oklch(0% 0 0);
  
  --color-error: oklch(70% 0.191 22.216);
  --color-error-content: oklch(0% 0 0);
  
  --radius-box: 1rem;
  --radius-field: 2rem;
  --radius-btn: 0.5rem;
}

.dark {
  /* Dark mode colors */
  --color-base-100: oklch(30.857% 0.023 264.149);
  --color-base-200: oklch(28.036% 0.019 264.182);
  --color-base-300: oklch(26.346% 0.018 262.177);
  --color-base-content: oklch(82.901% 0.031 222.959);
  
  --color-primary: oklch(86.133% 0.141 139.549);
  --color-primary-content: oklch(17.226% 0.028 139.549);
  
  --color-secondary: oklch(73.375% 0.165 35.353);
  --color-secondary-content: oklch(14.675% 0.033 35.353);
  
  --color-accent: oklch(74.229% 0.133 311.379);
  --color-accent-content: oklch(14.845% 0.026 311.379);
  
  --color-neutral: oklch(24.731% 0.02 264.094);
  --color-neutral-content: oklch(82.901% 0.031 222.959);
  
  --color-info: oklch(86.078% 0.142 206.182);
  --color-info-content: oklch(17.215% 0.028 206.182);
  
  --color-success: oklch(86.171% 0.142 166.534);
  --color-success-content: oklch(17.234% 0.028 166.534);
  
  --color-warning: oklch(86.163% 0.142 94.818);
  --color-warning-content: oklch(17.232% 0.028 94.818);
  
  --color-error: oklch(82.418% 0.099 33.756);
  --color-error-content: oklch(16.483% 0.019 33.756);
  
  --radius-box: 1rem;
  --radius-field: 2rem;
  --radius-btn: 0.5rem;
}
```

> **Note:** You can customize these CSS variables to match your design system.

### 3. Apply to PrimeReact

Import and apply the preset in your main application file:
```typescript
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PrimeReactProvider } from 'primereact/api';
import primereactKitTailwind from 'primereact-kit-tailwind';
import App from './App';
import './main.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimeReactProvider
      value={{
        pt: primereactKitTailwind,
        unstyled: false,
      }}
    >
      <App />
    </PrimeReactProvider>
  </StrictMode>
);
```

## Usage

Once configured, all PrimeReact components will automatically use the Tailwind styling:
```typescript
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

function App() {
  return (
    <div>
      <Button label="Click Me" />
      <InputText placeholder="Enter text" />
    </div>
  );
}
```

## Customization

### Color Theme

Modify the CSS variables in your `main.css` to customize colors:
```css
@theme {
  --color-primary: oklch(65% 0.2 250); /* Your custom primary color */
  --color-secondary: oklch(70% 0.15 180); /* Your custom secondary color */
  /* ... other customizations */
}
```

### Border Radius

Adjust border radius values:
```css
@theme {
  --radius-box: 0.5rem;    /* Box border radius */
  --radius-field: 0.25rem; /* Input field border radius */
  --radius-btn: 0.375rem;  /* Button border radius */
}
```

## Development

### Building from Source
```bash
# Clone the repository
git clone https://github.com/Forlk4/primereact-kit-tailwind.git
cd primereact-kit-tailwind

# Install dependencies
npm install

# Build the library
npm run build

# Format code
npm run format
```

### Project Structure
```
primereact-kit-tailwind/
├── src/
│   ├── button/
│   ├── data/
│   ├── form/
│   ├── misc/
│   ├── overlay/
│   ├── panel/
│   ├── utils/
│   ├── index.js
│   └── index.d.ts
├── dist/           # Build output
├── package.json
└── vite.config.ts
```

## Contributing

Contributions are welcome! This is an open-source project and we appreciate your help to make it better.

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/...-feature`)
3. Commit your changes (`git commit -m 'feat: add ... feature'`)
4. Push to the branch (`git push origin feature/...-feature`)
5. Open a Pull Request

### Guidelines

- Follow the existing code style
- Run `npm run format` before committing
- Add/update tests if applicable
- Update documentation for new features


## Links

- [GitHub Repository](https://github.com/Forlk4/primereact-kit-tailwind)
- [PrimeReact Documentation](https://primereact.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

## Support

If you find this project helpful, please consider giving it a ⭐️ on GitHub!

For issues and questions, please use the [GitHub Issues](https://github.com/Forlk4/primereact-kit-tailwind/issues) page.