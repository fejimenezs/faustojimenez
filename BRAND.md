# Fausto Jiménez — Marca personal

## Posicionamiento
Estratega digital, consultor de innovación, instructor de Inteligencia Artificial y emprendedor colombiano. +10 años en logística, operaciones y gestión empresarial, hoy enfocado en ayudar a empresas, emprendedores y profesionales a implementar IA, automatización, marketing digital, Design Thinking, Lean Startup y transformación digital.

**Propuesta de valor:** convierte la complejidad de la IA y la transformación digital en resultados de negocio concretos, con la credibilidad de haber operado empresas reales durante una década.

**Público objetivo:** empresarios y equipos directivos en Latinoamérica que necesitan adoptar IA/automatización sin saber por dónde empezar; emprendedores que quieren escalar con tecnología; estudiantes de sus academias (Academia, MaxPro Academy).

## Pilares de marca
1. **Experiencia real, no solo teoría** — 10 años operando logística y negocios antes de enseñar IA.
2. **Builder en serie** — Lánzate, MaxPro Academy, Mols Colombia, IA 365, F Concept: no solo habla, construye.
3. **Traductor de complejidad** — vuelve la IA accesible para quien no es técnico.
4. **Curiosidad perpetua** — siempre aprendiendo, siempre creando (drones, astronomía, lectura).
5. **Cercanía humana en un mundo técnico** — la marca debe sentirse premium y tecnológica, pero nunca fría.

## Tono de voz
- Directo, seguro, sin jerga innecesaria.
- Inspirador sin caer en frases motivacionales genéricas.
- Storytelling documental, no formato hoja de vida.
- Bilingüe: mismo tono en ES y EN, adaptado naturalmente (no traducción literal).

## Frase ancla (hero)
ES: "Construyo ideas que transforman personas y negocios."
EN: "I build ideas that transform people and businesses."

## Métrica de éxito subjetiva
Que el visitante piense "necesito trabajar con Fausto" y que al cerrar el sitio piense "es la mejor página personal que he visto".

---

# Design tokens

## Color (dark-first; único modo por ahora — el brief pide "Dark Mode" como base, no dos temas completos en v1)

| Token | Valor | Uso |
|---|---|---|
| `--bg-base` | `#050507` | Fondo principal, negro profundo |
| `--bg-elevated` | `#0B0B10` | Paneles, nav |
| `--bg-glass` | `rgba(255,255,255,0.04)` + `backdrop-blur(20px)` | Glassmorphism ligero |
| `--border-glass` | `rgba(255,255,255,0.08)` | Bordes de paneles de vidrio |
| `--gray-100` | `#F4F4F6` | Texto principal sobre fondo oscuro |
| `--gray-400` | `#9A9AA5` | Texto secundario |
| `--gray-700` | `#3A3A43` | Divisores |
| `--accent-blue` | `#4F6BFF` | Azul eléctrico — CTA primario, links, focus |
| `--accent-purple` | `#8B5CF6` | Morado — gradientes, acentos secundarios |
| `--gradient-hero` | `linear-gradient(135deg, #4F6BFF 0%, #8B5CF6 100%)` | Texto destacado, botones primarios |

Regla: nunca más de dos acentos de color visibles a la vez por sección. Mucho espacio en negro/gris antes de introducir azul/morado.

## Tipografía
- **Display / titulares:** `Poppins` (600–700)
- **Texto / UI:** `Inter` (400–500)
- **Fallback nativo Apple-like:** `-apple-system, "SF Pro Display", Inter, sans-serif`
- Escala: `12 / 14 / 16 / 18 / 22 / 28 / 36 / 48 / 64 / 88px`, line-height 1.1 en titulares, 1.6 en cuerpo.

## Espaciado y forma
- Escala base 4px (4/8/12/16/24/32/48/64/96/128).
- Radios: `12px` componentes pequeños, `24px` paneles, `9999px` píldoras/botones.
- Sombra estándar: `0 8px 40px rgba(0,0,0,0.35)`.

## Motion
- Duración estándar: `400ms` (micro), `800ms` (reveals de sección).
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (salida suave tipo Apple/Linear).
- Scroll reveals: fade + translateY(24px) → 0, staggered 80ms entre elementos hermanos.
- Respetar `prefers-reduced-motion: reduce` desactivando parallax/autoplay.
