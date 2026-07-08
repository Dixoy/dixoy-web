# Comandos rápidos — DIXOY WEB

## 1. Abrir el proyecto en VS Code

Ruta del proyecto:

```powershell
C:\Users\DIXOY\iCloudDrive\DIXOY\WEB\dixoy-web
```

En VS Code abre la terminal:

```text
Terminal → New Terminal
```

Si no estás dentro del proyecto, entra con:

```powershell
cd C:\Users\DIXOY\iCloudDrive\DIXOY\WEB\dixoy-web
```

---

## 2. Iniciar servidor local

Usa este comando para trabajar en local:

```powershell
npx next dev --webpack
```

Luego abre:

```text
http://localhost:3000
```

Para detener el servidor:

```text
Ctrl + C
```

---

## 3. Probar build antes de subir

```powershell
npm run build
```

Si no aparecen errores, la página está lista para publicar.

---

## 4. Guardar cambios en GitHub

Revisar estado:

```powershell
git status
```

Agregar cambios:

```powershell
git add .
```

Crear commit:

```powershell
git commit -m "Descripción del cambio"
```

Subir a GitHub:

```powershell
git push
```

Ejemplo real:

```powershell
git add .
git commit -m "Actualizar hero principal de DIXOY"
git push
```

---

## 5. Flujo recomendado cada vez que edites la web

```powershell
npx next dev --webpack
```

Revisar en:

```text
http://localhost:3000
```

Después de confirmar que todo funciona:

```powershell
npm run build
git status
git add .
git commit -m "Descripción del cambio"
git push
```

Cloudflare Pages debería actualizar la web automáticamente después del `git push`.

---

## 6. Web pública

```text
https://dixoy.co
https://www.dixoy.co
```

---

## 7. Repositorio GitHub

```text
https://github.com/Dixoy/dixoy-web
```

---

## 8. Notas importantes

- No borrar la carpeta `app`.
- No borrar la carpeta `public`.
- Las imágenes de la web están en:

```text
public/images/hero
```

- Los logos están en:

```text
public/logos
```

- El archivo principal de la página es:

```text
app/page.tsx
```

- Los componentes están en:

```text
app/components
```

- Para cambios grandes, primero probar local y luego hacer `git push`.
