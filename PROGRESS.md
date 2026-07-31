# Estado del proyecto — leer esto primero

Este archivo es el punto de partida para cualquier sesión nueva (Claude u otra). Resume qué se decidió, qué se construyó y qué sigue, para no repetir preguntas ni trabajo.

## Qué es este proyecto
Plataforma de marca personal para **Fausto Jiménez** (estratega digital, consultor de innovación, instructor de IA). El brief original completo está en `../readme.md` (un nivel arriba, en `faustoweb/`) y la imagen de referencia visual en `../imagen_de_referencia/Visual_de_la_pagina_web.png`. El plan de trabajo completo por fases vive en `C:\Users\USER\.claude\plans\ancient-stargazing-treehouse.md`.

Documentos clave dentro de este repo:
- `BRAND.md` — marca, pilares, tono de voz, design tokens (color/tipografía/spacing/motion)
- `SITEMAP.md` — arquitectura completa del sitio (rutas actuales y futuras)
- `prisma/schema.prisma` — modelo de datos completo (users, cursos, membresías, marketplace, CRM, eventos)

## Decisiones ya tomadas (no volver a preguntar)
1. **Alcance:** arquitectura completa desde el inicio (DB, auth, CRM, comercio, marketplace ya modelados), pero la **construcción visible es por fases** — no se construye todo en paralelo.
2. **Assets:** Fausto NO tiene aún fotos/videos reales ni logos de sus proyectos (Lánzate, MaxPro Academy, Mols Colombia, IA 365, F Concept). Se construye con placeholders de alta calidad y se marca con `TODO: reemplazar con asset real` para sustituir después.
3. **Contenido (Blog/Academia/Lab):** archivos en el propio repo (MDX/JSON), sin CMS externo por ahora.
4. **Idioma:** bilingüe ES/EN desde el día uno (`next-intl`, rutas `/es` `/en`, default `es`).
5. **Repo:** `https://github.com/fejimenezs/faustojimenez.git`, rama `main`. **Ojo:** el repo git de `C:\Users\USER` (home directory) es OTRO repo completamente distinto (`pre-Entrenamiento.git`) que por accidente engloba todo el home — este proyecto tiene su **propio** `.git` inicializado dentro de `Deseñador_web/`, no uses el de más arriba.

## Stack técnico instalado
Next.js 16 (App Router, Turbopack) + TypeScript + Tailwind v4 + shadcn/ui + Framer Motion + GSAP + Lenis + next-intl + Prisma 7 (con `@prisma/adapter-pg`) + Auth.js v5 (beta) + Stripe.

## Estado por fase

- **Fase 0 (Marca e identidad visual):** ✅ completa → `BRAND.md`
- **Fase 1 (Fundaciones):** ✅ completa
  - Proyecto Next.js inicializado, shadcn/ui inicializado
  - next-intl configurado (`src/i18n/`, `src/proxy.ts`, `messages/es.json`, `messages/en.json`, rutas bajo `src/app/[locale]/`)
  - Prisma schema completo escrito; cliente generado localmente (funciona, pero apunta a un `DATABASE_URL` de relleno — **no hay base de datos real todavía**)
  - Auth.js scaffoldeado (`src/auth.ts`, `src/app/api/auth/[...nextauth]/route.ts`, roles en JWT/sesión, Credentials + Google opcional) — funcional en build, sin páginas de login reales aún
  - Stripe scaffoldeado (`src/lib/stripe.ts`, `src/app/api/stripe/webhook/route.ts`) — sin checkout real todavía
  - Build (`npm run build`) y lint (`npm run lint`) pasan limpio
  - Subido a GitHub (2 commits en `main`)
- **Fase 2 (Design System):** ⏳ **siguiente paso** — llevar los tokens de `BRAND.md` a `globals.css`/Tailwind + construir componentes base no genéricos (paneles de vidrio, botones premium, cards tipo startup, nav con blur). Aún no se tocó `src/app/globals.css` más allá de lo que generó shadcn init.
- **Fase 3 (Wireframes/UX por sección):** pendiente
- **Fase 4 (Construcción de secciones visibles):** pendiente — home actual (`src/app/[locale]/page.tsx`) es un placeholder mínimo, no el diseño cinematográfico real
- **Fase 5 (Cuentas de usuario):** pendiente
- **Fase 6 (Comercio):** pendiente
- **Fase 7 (Comunidad/Eventos):** pendiente

## Cosas no obvias que costó resolver (para no repetir el problema)
- **`npx` con "Lock compromised" (ECOMPROMISED):** bug de entorno Windows, no es un paquete comprometido. Solución que funcionó: instalar el paquete como devDependency local (`npm install -D shadcn`, `npm install -D prisma`) y ejecutar el binario directo (`./node_modules/.bin/shadcn`, `./node_modules/.bin/prisma`) en vez de `npx`.
- **`create-next-app` no acepta nombres con ñ/mayúsculas:** se generó en una carpeta temporal (`fausto-web-tmp`) y se movieron los archivos a `Deseñador_web/` (sin mover `node_modules`, que se reinstaló limpio ahí).
- **Prisma 7 cambió la config:** ya no se pone `url = env("DATABASE_URL")` dentro de `datasource` en `schema.prisma`. Ahora se usa `prisma.config.ts` (paquete `@prisma/config`) para el CLI, y el `PrismaClient` en runtime necesita un **driver adapter** (`@prisma/adapter-pg` + `pg`) construido con la connection string. Ver `src/lib/prisma.ts` y `prisma.config.ts`.
- **Next.js 16 renombró `middleware.ts` a `proxy.ts`:** el archivo ya está como `src/proxy.ts` (no lo vuelvas a llamar `middleware.ts`).
- **Warning de "workspace root" mal inferido:** por el lockfile del home directory (`C:\Users\USER\package-lock.json`, de otro proyecto). Se fijó `turbopack.root: __dirname` en `next.config.ts` para evitar que Next.js escanee hacia arriba.
- **`.env` es de relleno, no lo borres sin reemplazarlo:** contiene `DATABASE_URL` y `STRIPE_SECRET_KEY` con valores falsos SOLO para que `prisma generate` y `npm run build` no truenen (Stripe SDK y el config de Prisma lanzan error si esas variables faltan). No está commiteado (ver `.gitignore`). `.env.example` sí está commiteado y documenta todas las variables reales que hacen falta más adelante (Fase 5/6): Supabase `DATABASE_URL`, `AUTH_SECRET`, Google OAuth, Stripe test keys, YouTube API.

## Cómo retomar mañana
```bash
cd "c:\Users\USER\Desktop\DEV-IA\faustoweb\Deseñador_web"
npm install   # por si acaso
npm run dev   # http://localhost:3000/es o /en
```
Working tree debe estar limpio (`git status`); si no, revisar qué quedó sin commitear antes de seguir.

**Siguiente tarea concreta:** Fase 2 — Design System. Empezar por llevar los valores de `BRAND.md` (sección "Design tokens") a `src/app/globals.css` (Tailwind v4 usa `@theme` en CSS, no `tailwind.config.ts`), y luego construir los componentes base antes de tocar contenido de secciones.
