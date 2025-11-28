# Landing Page (Vite + React + Tailwind)

Projeto inicial de uma landing page genérica criado com Vite, React e TailwindCSS.

### Scripts

- `npm install` — instala dependências
- `npm run dev` — inicia servidor de desenvolvimento (Vite)
- `npm run build` — build de produção
- `npm run preview` — serva o build localmente

### Como rodar (Windows / PowerShell)

```powershell
npm install
npm run dev
```

O projeto já está estruturado para ser facilmente dividido em componentes React (veja `src/components`).

> Observação: caso o Tailwind não gere estilos, rode `npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch`, porém o `npm run dev` deve cuidar disso automaticamente com a configuração presente.
