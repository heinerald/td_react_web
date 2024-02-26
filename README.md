# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Entorno de desarrollo WEB:

REACT JS https://gndx.dev/blog/instalar-nvm-en-ubuntu-20-04/
dependencies:
    @popperjs/core: 2.11.8
    bootstrap: 5.3.3
    react": 18.2.0
    react-dom": 18.2.0
    sass: 1.71.1

NVM - gestor de paquetes de nodejs
Steps:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm --version
0.39.0

nvm install node
node --version | npm --version
v21.6.2 // 10.2.4


VITE
npm create vite@latest td_react_web -- --template react
✔ Project name: … td_react_web
✔ Select a framework: › React
✔ Select a variant: › JavaScript + SWC
Scaffolding project in /home/tdling/REPOS/td_react_web/td_react_web...
Done. Now run:
  cd td_react_web
  npm install
  npm run dev


npm i bootstrap @popperjs/core
npm i sass

