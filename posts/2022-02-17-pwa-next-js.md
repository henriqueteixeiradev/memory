---
title: PWA NEXT JS
description: "Passo a passo pwa next js "
date: 2022-02-17 12:55:58
thumbnail: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png
category: NextJS
background: "#000000"
---
1. Instalar `yarn add next-pwa`
2. Instalar `yarn add webpack@4`
3. Configurar o arquivo `next.config,js`

   ```jsx
   const withPWA = require('next-pwa')
   const isProd = process.env.NODE_ENV === 'production'

   module.exports = withPWA({
     pwa: {
       dest: 'public',
       disable: !isProd
     }
   })
   ```
4. Dentro da pasta public cria um arquivo `manifest.json`

   ```jsx
   {
       "name": "Sepi Bellmont Sistema",
       "short_name": "Sepi Bellmont Sistema",
       "icons": [
         {
           "src": "/img/icon-192.png",
           "type": "image/png",
           "sizes": "192x192"
         },
         {
           "src": "/img/icon-512.png",
           "type": "image/png",
           "sizes": "512x512"
         }
       ],
       "background_color": "#1A1F36",
       "description": "Sepi Bellmont Sistema",
       "display": "standalone",
       "start_url": "/",
       "theme_color": "#1A1F36"
     }
   ```
5. Chamar o `manifest.json` na no arquivo `_app.tsx`

   ```jsx
   <Head>
     <link rel="manifest" href="/manifest.json" />
   </Head>
   ```