# Demo 3 React + Vite

## Env

Use environment variables. add .env file, and define variables with VITE_....:

```properties
VITE_PATH_API=https://localhost:8080/
VITE_PORT=3000
```

Change port in server, add in file **vite.config.js**

```js
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig((mode) => {
    
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    server: {
      port: env.VITE_PORT || 5173,
    },
  }
})

```

