# Design System Specification (DESIGN.md)
**Source / Brand**: Coolmate (E-commerce / Apparel)  
**Target Tech Stack**: React + TypeScript + Tailwind CSS  
**Audience & Tone**: Clean, athletic, modern, high-contrast, accessible, e-commerce conversion-focused.

---

## 1. Brand Identity & Visual Principles
- **Modern Performance & Simplicity**: Clean white backgrounds, crisp neutral typography, stark black accent points, and deliberate high-visibility functional badges (sale red, promo orange, loyalty blue).
- **Scanability & Ergonomics**: High information density paired with clear grouping, generous tap targets, rounded modern inputs, pill badges, and sticky conversion elements (sticky buy bar, checkout summary dock).
- **Trust & Frictionless Commerce**: Transparent badge callouts (Freeship threshold progress, voucher chips, CoolClub rewards, COD guarantees).

---

## 2. Color Palette & Semantic Tokens

### Primary & Neutral Grayscale
| Token Name | Hex Code | Tailwind Arbitrary / Class | Usage Description |
| :--- | :--- | :--- | :--- |
| `primary-black` | `#111111` | `bg-neutral-900` / `#111111` | Primary text, main CTA buttons, dark state toggles |
| `secondary-black` | `#222222` | `text-neutral-800` | Section headings, modal titles, strong emphasis |
| `subtext` | `#666666` | `text-neutral-500` / `#666666` | Breadcrumbs, subtitles, form field hints, secondary meta |
| `subtext-light` | `#8C8C8C` | `text-neutral-400` | Placeholder text, disabled labels, timestamps |
| `border-default` | `#E5E7EB` | `border-neutral-200` | Card borders, input outlines, divider rules |
| `border-subtle` | `#F0F0F0` | `border-neutral-100` | Table dividers, subtle group outlines |
| `surface-bg` | `#FFFFFF` | `bg-white` | Page base, modal body, dropdown menus |
| `surface-muted` | `#F8F9FA` | `bg-neutral-50` / `#F8F9FA` | Secondary card fills, sticky headers, table alternating rows |
| `surface-hover` | `#F3F4F6` | `hover:bg-neutral-100` | Interactive chip hovers, list item hover states |

### Brand & Interactive Accents
| Token Name | Hex Code | Tailwind Mapping | Usage Description |
| :--- | :--- | :--- | :--- |
| `brand-blue` | `#2F5ACF` | `bg-[#2F5ACF]` / `text-[#2F5ACF]` | CoolClub loyalty banners, primary modal links, member CTA |
| `brand-blue-hover`| `#2548A6` | `bg-[#2548A6]` | Hover state for CoolClub buttons |
| `brand-blue-tint` | `#EEF2FF` | `bg-[#EEF2FF]` | Member badge backgrounds, CoolCash notification container |
| `accent-red` | `#E11B22` | `text-[#E11B22]` / `bg-[#E11B22]` | "-50% SALE" tags, discount chips, warning/validation errors |
| `promo-orange` | `#F97316` / `#FF7A00` | `bg-orange-50` / `text-orange-600` | Discount coupon tags ("Giảm 80K", "Giảm 12%"), flash promos |
| `cashback-navy` | `#1D2A68` | `text-[#1D2A68]` / `bg-[#1D2A68]` | CoolClub brand mark & rewards banner background |
| `zalo-green` | `#25D366` / `#0088FF` | `bg-emerald-500` / `bg-[#0068FF]` | Floating quick-support / hotline buttons |

---

## 3. Typography & Text Hierarchy

### Font Family
```css
font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Type Scale & Hierarchy
| Hierarchy / Level | Font Size | Line Height | Weight | Tracking | Example Classes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero / H1 (Product Title)** | `24px` (`1.5rem`) | `32px` | 700 (Bold) | `-0.01em` | `text-2xl font-bold tracking-tight text-neutral-900` |
| **H2 (Modal Title / Section)**| `20px` (`1.25rem`)| `28px` | 700 (Bold) | `-0.01em` | `text-xl font-bold text-neutral-900` |
| **H3 (Form / Group Title)**   | `16px` (`1rem`)    | `24px` | 600 (Semibold)| `normal` | `text-base font-semibold text-neutral-900` |
| **Price (Highlighted Hero)** | `22px` (`1.375rem`)| `28px` | 800 (Extrabold)| `normal`| `text-xl md:text-2xl font-extrabold text-neutral-900` |
| **Body (Default / Inputs)**   | `14px` (`0.875rem`)| `20px` | 400 (Regular)| `normal`  | `text-sm font-normal text-neutral-700` |
| **Body Strong**              | `14px` (`0.875rem`)| `20px` | 600 (Semibold)| `normal` | `text-sm font-semibold text-neutral-900` |
| **Caption / Helper / Tags**   | `12px` (`0.75rem`) | `16px` | 500 (Medium) | `+0.01em` | `text-xs font-medium text-neutral-500` |
| **Micro / Status Badge**     | `10px` (`0.625rem`)| `14px` | 700 (Bold)   | `+0.02em` | `text-[10px] font-bold uppercase tracking-wider` |

---

## 4. Spacing, Sizing & Grid Systems

### Spacing Scale
- **Base Grid**: 4px increment (`0.25rem`)
- **Common Gaps**:
  - `gap-1` (`4px`): Micro badge spacing, icon + label pairs.
  - `gap-2` (`8px`): Size button grids, color chip groups, horizontal coupon pills.
  - `gap-3` (`12px`): Input stacks, filter group items.
  - `gap-4` (`16px`): Standard card internals, drawer padding, mobile margins.
  - `gap-6` (`24px`): Section vertical spacing, modal gutters.
  - `gap-8` (`32px`): Desktop column splits, major page divisions.

### Sizing & Touch Targets
- **Minimum Tap Target**: `44px` x `44px` on mobile screens.
- **Button Heights**:
  - **Large (Primary CTA / Add to cart)**: `48px` - `52px` (`h-12` or `h-[50px]`)
  - **Medium (Pill Buttons / Inputs)**: `40px` - `44px` (`h-10` or `h-11`)
  - **Small (Size selector buttons)**: `36px` x `36px` (`w-9 h-9` or `min-w-[44px] h-9`)
- **Container Max-Width**:
  - Desktop content: `max-w-7xl` (`1280px`) with `px-4 sm:px-6 lg:px-8`.
  - Checkout two-column: `max-w-6xl` (`1152px`).
  - Mobile app frame: `390px` to `428px` centered.

---

## 5. Border Radius & Shadows

### Border Radius
| Purpose | Radius Value | Tailwind Class | Usage |
| :--- | :--- | :--- | :--- |
| **Pills / Full-Round** | `9999px` | `rounded-full` | Search bar, primary CTA buttons, filter toggles, status pills |
| **Cards & Modals** | `16px` (`1rem`) | `rounded-2xl` | CoolClub modal popup, member promotional card |
| **Input Fields & Large Selectors** | `24px` to `9999px` | `rounded-full` / `rounded-xl` | Text inputs, dropdown select wrappers |
| **Size / Thumbnail Tiles** | `8px` (`0.5rem`) | `rounded-lg` | Size buttons (S/M/L/XL), thumbnail product previews |
| **Badges & Small Chips** | `4px` - `6px` | `rounded-md` | "BÁN CHẠY" tag, "-16%" discount pill, coupon chips |

### Elevation & Shadows
```css
/* Custom shadow utility matching reference UI */
--shadow-modal: 0px 20px 40px -10px rgba(0, 0, 0, 0.25);
--shadow-dropdown: 0px 10px 25px -5px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-sticky-bar: 0px -4px 16px rgba(0, 0, 0, 0.06);
--shadow-badge-floating: 0px 4px 12px rgba(0, 0, 0, 0.12);
```
- **Tailwind Mappings**:
  - Modal overlay card: `shadow-2xl`
  - Sticky bottom purchase bar: `shadow-[0_-4px_16px_rgba(0,0,0,0.06)]`
  - Mega menu dropdown: `shadow-xl border border-neutral-100`

---

## 6. Component Guidelines & Specifications

### 6.1. Buttons
1. **Primary Action (Add to Cart / Submit / Checkout)**:
   - Base: `bg-neutral-900 text-white font-bold rounded-full py-3.5 px-6 flex items-center justify-center transition-colors duration-150 hover:bg-black active:scale-[0.99]`
   - Disabled: `bg-neutral-300 text-neutral-500 cursor-not-allowed`
2. **CoolClub Member CTA**:
   - Base: `bg-[#2F5ACF] text-white font-bold rounded-full py-2.5 px-5 text-sm uppercase tracking-wide hover:bg-[#2548A6]`
3. **Filter & Option Pills (Sizes: S, M, L, XL)**:
   - Unselected: `bg-neutral-100 text-neutral-800 font-semibold rounded-lg h-10 min-w-[52px] px-3 flex items-center justify-center border border-transparent hover:border-neutral-300`
   - Active / Selected: `bg-neutral-900 text-white font-bold rounded-lg h-10 min-w-[52px] px-3 flex items-center justify-center shadow-sm`
   - Disabled / Out of stock: `opacity-40 line-through cursor-not-allowed bg-neutral-100 text-neutral-400`

### 6.2. Form Inputs & Selects
- **Text & Tel Fields**:
  - Container: `relative w-full`
  - Input: `w-full h-11 px-4 text-sm bg-white border border-neutral-300 rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent placeholder:text-neutral-400 transition-all`
- **Dropdown Select (e.g. Salutation "Anh/Chị")**:
  - Trigger: `h-11 px-4 text-sm font-medium bg-neutral-50 border border-neutral-300 rounded-l-full flex items-center gap-1.5`
- **Checkbox (Terms & Privacy)**:
  - Base: `w-4 h-4 rounded text-neutral-900 border-neutral-300 focus:ring-neutral-900 focus:ring-offset-0 cursor-pointer`

### 6.3. Product Card & Collection Grid
- **Card Structure**:
  - Image Wrapper: `relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-neutral-100`
  - Badge Overlay: Top-left or top-right absolute positioning (`absolute top-2 left-2 bg-neutral-900 text-white text-[10px] font-bold px-2 py-0.5 rounded`).
  - Promo Banner: Bottom banner ribbon inside image (`absolute bottom-0 inset-x-0 bg-blue-700 text-white text-xs py-1 text-center font-medium`).
  - Body: `pt-3 flex flex-col gap-1` (Title, Color Swatches, Price Row with Strikethrough & Discount Tag).

### 6.4. Coupon & Promo Chips
- **Coupon Card**:
  - Border: `border border-dashed border-neutral-300 bg-neutral-50/70 rounded-xl p-3 flex flex-col justify-between`
  - Code & Expiry: `font-bold text-neutral-900 text-sm` + `text-xs text-neutral-500`
  - Status indicator: Mini radio toggle or `Áp dụng` button.

### 6.5. Sticky Bottom Action Bar (Mobile / PDP)
- Sticky bottom fixed container: `fixed bottom-0 inset-x-0 bg-white border-t border-neutral-200 px-4 py-3 flex items-center justify-between z-40 shadow-lg`
- Left: Price summary / quantity stepper.
- Right: Full CTA button (`Thêm vào giỏ` / `Đặt hàng`).

### 6.6. Modal Dialogue (e.g. CoolClub Registration)
- Overlay: `fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50`
- Modal Box: `relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden`
- Close Trigger: `absolute top-4 right-4 w-9 h-9 bg-neutral-900 text-white rounded-full flex items-center justify-center hover:bg-neutral-800`

---

## 7. Responsive Behavior & Breakpoints

| Breakpoint | Width | Layout Adjustments |
| :--- | :--- | :--- |
| **Mobile (`< 640px`)** | `< 640px` | 1-2 product columns; hamburger nav; full-screen or bottom-sheet filters; sticky bottom checkout button. |
| **Tablet (`640px - 1024px`)** | `640px - 1024px` | 3 product columns; collapsible filter sidebar drawer; 2-column checkout with vertical summary. |
| **Desktop (`> 1024px`)** | `1024px+` | 4 product columns; persistent left filter sidebar; hover mega menus; sticky right checkout order summary panel. |

---

## 8. Sample Tailwind Config & Reusable TypeScript Interfaces

### 8.1. `tailwind.config.js` Extension
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2F5ACF',
          'blue-dark': '#1D2A68',
          'blue-tint': '#EEF2FF',
        },
        promo: {
          red: '#E11B22',
          orange: '#FF7A00',
        },
      },
      borderRadius: {
        'pill': '9999px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
};
```

### 8.2. Core TypeScript Interfaces (`types.ts`)
```typescript
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  rating?: number;
  reviewCount?: number;
  badge?: 'BÁN CHẠY' | 'NEW' | '-50%';
  colors: { name: string; hex: string; inStock: boolean }[];
  sizes: ('XS' | 'S' | 'M' | 'L' | 'XL' | '2XL' | '3XL')[];
  images: string[];
}

export interface Coupon {
  code: string;
  description: string;
  expiryDate: string;
  remainingCount?: number;
  isEligible: boolean;
  minSpend?: number;
}

export interface CheckoutFormState {
  salutation: 'Anh' | 'Chị';
  fullName: string;
  phoneNumber: string;
  email: string;
  address: string;
  paymentMethod: 'COD' | 'VOUCHER' | 'COOLCASH';
  agreedToPolicy: boolean;
}
```
