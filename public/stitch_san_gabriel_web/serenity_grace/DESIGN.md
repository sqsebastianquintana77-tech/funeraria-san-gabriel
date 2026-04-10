# Design System Document

## 1. Overview & Creative North Star: "The Ethereal Sanctuary"
This design system is built to provide more than just information; it is designed to offer a digital embrace. For Funeraria San Gabriel, we depart from the rigid, clinical grids of traditional service providers to embrace **"The Ethereal Sanctuary."** 

The Creative North Star focuses on **Tonal Serenity**. By utilizing a high-end editorial approach, we prioritize breathing room (white space), asymmetrical layouts that feel organic rather than robotic, and a sophisticated layering of surfaces. We move away from "web templates" toward a "digital journal" feel—one that respects the gravity of the user's situation through quiet confidence and intentional, soft transitions.

---

## 2. Colors: Tonal Depth & The "No-Line" Rule
The palette is rooted in deep teals and charcoal greys, balanced by a range of soft, luminous whites. 

### The "No-Line" Rule
To maintain a premium, seamless aesthetic, **designers are prohibited from using 1px solid borders for sectioning.** Boundaries must be defined solely through background color shifts. 
*   *Example:* A `surface-container-low` section should sit directly against a `surface` background. The shift in tone provides the boundary, creating a softer, more modern interface.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the `surface-container` tiers to create depth:
*   **Base:** `surface` (#f8f9fa)
*   **Low Importance:** `surface-container-low` (#f3f4f5)
*   **Standard Cards:** `surface-container` (#edeeef)
*   **Prominent Elements:** `surface-container-highest` (#e1e3e4)

### The "Glass & Gradient" Rule
For floating elements (like the WhatsApp button or Navigation bars), use **Glassmorphism**. Apply a semi-transparent `surface-container-lowest` (80% opacity) with a `backdrop-blur` of 12px. 

### Signature Textures
Main CTAs and Hero backgrounds should utilize a subtle linear gradient from `primary` (#00696e) to `primary-container` (#00a1a9). This avoids the "flat" look and adds a professional, velvet-like "soul" to the primary touchpoints.

---

## 3. Typography: Editorial Elegance
The typography system uses a high-contrast pairing of **Noto Serif** and **Inter** to convey authority and empathy.

*   **Display & Headlines (Noto Serif):** Used for emotional anchors and section titles. The serif typeface conveys tradition, respect, and the "San Gabriel" legacy.
    *   *Headline-LG:* 2rem, Noto Serif. Use for service titles.
*   **Titles & Body (Inter):** Used for functional information. Inter provides high legibility even in stressful moments.
    *   *Body-LG:* 1rem, Inter. Optimized for reading long-form service descriptions.
*   **Hierarchy Note:** Always lead with a Noto Serif headline to set the tone, followed by Inter body text to provide the clarity the user needs to make decisions.

---

## 4. Elevation & Depth: Tonal Layering
We do not use shadows to create "pop"; we use layering to create "presence."

*   **The Layering Principle:** Stack `surface-container-lowest` cards on top of `surface-container-low` backgrounds. This creates a natural "lift" that mimics fine stationery.
*   **Ambient Shadows:** If a floating effect is required (e.g., for the WhatsApp button), use a 24px blur with 6% opacity, using the `on-surface` (#191c1d) color. It should feel like a soft glow, not a drop shadow.
*   **Ghost Borders:** If accessibility requires a stroke (e.g., in high-contrast modes), use the `outline-variant` token at **15% opacity**. Never use 100% opaque lines.

---

## 5. Components

### Service Cards
*   **Style:** No borders. Use `surface-container-low` with `xl` (0.75rem) roundedness.
*   **Interaction:** On hover, shift the background to `surface-container-high` and apply a subtle `primary` tint to the headline. No vertical divider lines; use 24px of vertical padding to separate content.

### Primary Buttons
*   **Style:** Gradient fill (`primary` to `primary-container`).
*   **Typography:** `label-md` (Inter, uppercase with 0.05em tracking).
*   **Radius:** `full` (9999px) for a soft, approachable feel.

### Input Fields & Contact Forms
*   **Surface:** `surface-container-lowest`.
*   **State:** The "Ghost Border" (outline-variant at 20%) is used for the field container. On focus, the border transitions to a 2px `primary` stroke.
*   **Helper Text:** Always use `body-sm` in `tertiary` (#5f5e5e) to maintain a non-intrusive presence.

### WhatsApp Floating Button
*   **Visuals:** Glassmorphic container with a `secondary` (#705d00) accent for the icon.
*   **Positioning:** Bottom-right, using the `xl` spacing token. It should feel like an "attendant" waiting in the wings—present but never obstructing the content.

### Lists
*   **Layout:** Forbid divider lines. Use `surface-container-low` as a alternating background for long lists (zebra striping) or use 16px of vertical white space between `title-sm` elements.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical margins (e.g., 10% left, 20% right) for hero sections to create a high-end editorial feel.
*   **Do** prioritize `surface-container` shifts over shadows.
*   **Do** use `Noto Serif` for all moments of emotional weight (e.g., testimonials, "About Us").

### Don't:
*   **Don't** use 1px solid black or grey lines to separate content.
*   **Don't** use harsh, 100% opaque shadows; they break the "Sanctuary" aesthetic.
*   **Don't** use bright, saturated colors for anything other than primary actions; keep the experience "sober and professional."
*   **Don't** crowd the layout. If in doubt, add 16px more padding.