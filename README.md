# 🎨 PrimeReact Kit Tailwind

### Tailwind CSS preset library for PrimeReact components using PassThrough API

[![npm version](https://img.shields.io/npm/v/primereact-kit-tailwind?style=flat&colorA=18181B&colorB=3b82f6)](https://www.npmjs.com/package/primereact-kit-tailwind)
[![npm downloads](https://img.shields.io/npm/dm/primereact-kit-tailwind?style=flat&colorA=18181B&colorB=3b82f6)](https://www.npmjs.com/package/primereact-kit-tailwind)
[![bundle size](https://img.shields.io/bundlephobia/minzip/primereact-kit-tailwind?style=flat&colorA=18181B&colorB=3b82f6)](https://bundlephobia.com/package/primereact-kit-tailwind)
[![license](https://img.shields.io/npm/l/primereact-kit-tailwind?style=flat&colorA=18181B&colorB=3b82f6)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat&colorA=18181B&colorB=10b981)](http://makeapullrequest.com)
[![GitHub stars](https://img.shields.io/github/stars/Forlk4/primereact-kit-tailwind?style=flat&colorA=18181B&colorB=f59e0b)](https://github.com/Forlk4/primereact-kit-tailwind/stargazers)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=flat&colorA=18181B&colorB=3b82f6&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

[Installation](#-installation) • [Quick Start](#-quick-start) • [Documentation](#-documentation) • [Examples](#-examples) • [Contributing](#-contributing)

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎨 **Pre-styled Components**
Zero configuration styling with Tailwind CSS

### 🌓 **Dark Mode Support**  
Built-in dark mode with CSS variables

### 🎯 **Customizable Themes**
Easy color customization using CSS variables

</td>
<td width="50%">

### 📦 **Zero Configuration**
Import and use immediately

### 🚀 **TypeScript Ready**
Full TypeScript support included

### ⚡ **Vite Optimized**
Built and optimized with Vite

</td>
</tr>
</table>

---

## 📋 Prerequisites

Before installing, ensure you have these dependencies:

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

---

## 📦 Installation

Choose your preferred package manager:

<details open>
<summary><b>npm</b></summary>

```bash
npm install primereact-kit-tailwind
```
</details>

<details>
<summary><b>pnpm</b></summary>

```bash
pnpm add primereact-kit-tailwind
```
</details>

<details>
<summary><b>yarn</b></summary>

```bash
yarn add primereact-kit-tailwind
```
</details>

---

## 🚀 Quick Start

### Step 1: Configure Vite

Add Tailwind CSS plugin to `vite.config.ts`:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

### Step 2: Setup CSS Theme

Create `src/main.css` with your theme:

<details>
<summary><b>View Complete CSS Setup</b></summary>

```css
@import 'tailwindcss';
@source "../node_modules/primereact-kit-tailwind";
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
</details>

> 💡 **Tip:** Customize CSS variables to match your design system

### Step 3: Apply to PrimeReact

Configure in your main app file:

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
        unstyled: true,
      }}
    >
      <App />
    </PrimeReactProvider>
  </StrictMode>
);
```

---

## 💡 Examples

### Basic Usage

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

### Custom Theme Colors

```css
@theme {
  --color-primary: oklch(65% 0.2 250);
  --color-secondary: oklch(70% 0.15 180);
  --color-accent: oklch(75% 0.18 200);
}
```

### Border Radius Customization

```css
@theme {
  --radius-box: 0.5rem;
  --radius-field: 0.25rem;
  --radius-btn: 0.375rem;
}
```

---

## 🎨 Customization

<table>
<tr>
<td width="50%">

### Color Palette
Modify CSS variables for complete color control:
- `--color-primary` - Primary brand color
- `--color-secondary` - Secondary actions
- `--color-accent` - Accent highlights
- `--color-base-*` - Background layers
- `--color-*-content` - Text on colored backgrounds

</td>
<td width="50%">

### Border Radius
Adjust component roundness:
- `--radius-box` - Container elements
- `--radius-field` - Input fields
- `--radius-btn` - Buttons

</td>
</tr>
</table>

---

## 🛠️ Development

### Setup Development Environment

```bash
# Clone repository
git clone https://github.com/Forlk4/primereact-kit-tailwind.git
cd primereact-kit-tailwind

# Install dependencies
npm install

# Build library
npm run build

# Format code
npm run format
```

### Project Structure

```
primereact-kit-tailwind/
├── 📁 src/
│   ├── 📁 button/       # Button components
│   ├── 📁 data/         # Data display components
│   ├── 📁 form/         # Form components
│   ├── 📁 misc/         # Miscellaneous components
│   ├── 📁 overlay/      # Overlay components
│   ├── 📁 panel/        # Panel components
│   ├── 📁 utils/        # Utility functions
│   ├── 📄 index.js      # Main entry point
│   └── 📄 index.d.ts    # TypeScript definitions
├── 📁 dist/             # Build output
├── 📄 package.json
└── 📄 vite.config.ts
```

---

## 🤝 Contributing

Contributions are welcome! Help us make this project better.

### How to Contribute

1. **Fork** the repository
2. **Create** your feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit** your changes
   ```bash
   git commit -m 'feat: add amazing feature'
   ```
4. **Push** to the branch
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open** a Pull Request

### Contribution Guidelines

- ✅ Follow existing code style
- ✅ Run `npm run format` before committing
- ✅ Add/update tests if applicable
- ✅ Update documentation for new features

---

## 📚 Documentation


| Resource | Link |
|----------|------|
| 📦 **GitHub Repository** | [github.com/Forlk4/primereact-kit-tailwind](https://github.com/Forlk4/primereact-kit-tailwind) |
| 📖 **PrimeReact Docs** | [primereact.org](https://primereact.org/) |
| 🎨 **Tailwind CSS Docs** | [tailwindcss.com](https://tailwindcss.com/) |
| 🐛 **Report Issues** | [GitHub Issues](https://github.com/Forlk4/primereact-kit-tailwind/issues) |


---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 💖 Support

If you find this project helpful, please consider:

⭐ **Starring** the repository

🐛 **Reporting** issues

🤝 **Contributing** code

📢 **Sharing** with others

---

Made with ❤️ by the community

[![GitHub](https://img.shields.io/badge/GitHub-Forlk4-181717?style=flat&logo=github)](https://github.com/Forlk4)

