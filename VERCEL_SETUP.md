# Konfigurasi Deployment Vercel untuk TanStack Start

## Perubahan yang Dilakukan:

### 1. **vercel.json** ✅

File konfigurasi untuk Vercel yang menentukan:

- Build command: `npm run build`
- Output directory: `.output/server`
- Node version: 18.x
- Framework detection: "other" (karena TanStack Start)

### 2. **.nvmrc** ✅

File untuk menentukan Node.js version (18) yang akan digunakan Vercel

### 3. **vite.config.ts** ✅

Diperbarui dengan konfigurasi Nitro untuk Node.js:

```typescript
nitro: {
  presets: ["node_server"],
  output: {
    dir: ".output",
    publicDir: ".output/public",
  },
}
```

## Langkah Deployment ke Vercel:

1. **Push perubahan ke Git**

   ```bash
   git add .
   git commit -m "Add Vercel configuration for TanStack Start"
   git push origin main
   ```

2. **Connect ke Vercel**
   - Go to https://vercel.com
   - Click "Add New" → "Project"
   - Import repository Anda
   - Vercel akan auto-detect `vercel.json`

3. **Environment Variables** (jika ada):
   - Di Vercel dashboard → Settings → Environment Variables
   - Tambahkan semua env vars yang diperlukan

4. **Deploy**
   - Klik "Deploy"
   - Vercel akan:
     - Install dependencies dengan `npm install`
     - Run `npm run build` untuk build
     - Deploy hasil build dari `.output/server`

## Important Notes:

⚠️ **Package Manager**: Project ini menggunakan **Bun** (bun.lock), tapi Vercel menggunakan `npm`. Jika ada issue dengan dependency, pastikan semua packages tercatat di package.json dengan benar.

✅ **Build Output**: Nitro dengan preset `node_server` akan generate:

- `.output/public/` - Static files
- `.output/server/` - Server executable untuk Vercel

💡 **Troubleshooting**: Jika masih ada error, cek Vercel logs untuk detail error yang spesifik.
