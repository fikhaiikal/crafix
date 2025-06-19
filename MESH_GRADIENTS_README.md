# Animated Mesh Gradients

Koleksi komponen React untuk membuat efek mesh gradients yang animatif dan interaktif untuk website Crafix.

## Komponen yang Tersedia

### 1. DarkMeshGradients (Recommended for Dark Theme)
Komponen utama yang memberikan background gelap dengan efek mesh gradient yang subtle dan elegan.

**Fitur:**
- Dark background dengan gradient dari black ke dark-navy
- Very subtle animated orbs dengan opacity rendah
- Minimal mesh overlay effects
- Subtle mesh lines dengan opacity sangat rendah
- Minimal floating particles
- Vignette effect untuk depth
- Perfect untuk professional dark theme

**Penggunaan:**
```tsx
import { DarkMeshGradients } from './components/DarkMeshGradients';

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <DarkMeshGradients />
      {/* Konten aplikasi Anda */}
    </div>
  );
}
```

### 2. AdvancedMeshGradients (Recommended for Light/Medium Theme)
Komponen utama yang menggunakan CSS dan React state untuk efek mesh gradient yang paling halus dan performant.

**Fitur:**
- Multiple animated orbs dengan warna electric-cyan dan neon-orange
- Mesh overlay effects dengan radial gradients
- Animated mesh lines menggunakan SVG
- Floating particles
- Responsive dan smooth animations

**Penggunaan:**
```tsx
import { AdvancedMeshGradients } from './components/AdvancedMeshGradients';

function App() {
  return (
    <div className="relative">
      <AdvancedMeshGradients />
      {/* Konten aplikasi Anda */}
    </div>
  );
}
```

### 3. AnimatedMeshGradients (Canvas-based)
Menggunakan HTML5 Canvas API untuk rendering mesh gradients yang dinamis.

**Fitur:**
- Canvas-based rendering untuk performa tinggi
- Bouncing blob animations
- Dynamic gradient creation
- Overlay mesh effects

**Penggunaan:**
```tsx
import { AnimatedMeshGradients } from './components/AnimatedMeshGradients';

function App() {
  return (
    <div className="relative">
      <AnimatedMeshGradients />
      {/* Konten aplikasi Anda */}
    </div>
  );
}
```

### 4. SVGMeshGradients (SVG-based)
Menggunakan SVG untuk membuat mesh gradients yang scalable dan crisp.

**Fitur:**
- SVG-based rendering
- Dynamic gradient creation
- Smooth animations
- Scalable effects

**Penggunaan:**
```tsx
import { SVGMeshGradients } from './components/SVGMeshGradients';

function App() {
  return (
    <div className="relative">
      <SVGMeshGradients />
      {/* Konten aplikasi Anda */}
    </div>
  );
}
```

### 5. MeshGradientsDemo
Komponen demo untuk menampilkan dan membandingkan semua versi mesh gradients.

**Fitur:**
- Toggle antara semua versi mesh gradients
- Info panel untuk setiap versi
- Performance indicator
- Interactive controls

**Penggunaan:**
```tsx
import { MeshGradientsDemo } from './components/MeshGradientsDemo';

function App() {
  return (
    <div>
      <MeshGradientsDemo />
      {/* Konten aplikasi Anda */}
    </div>
  );
}
```

## Integrasi dengan Aplikasi Crafix

Komponen `DarkMeshGradients` sudah terintegrasi ke dalam aplikasi utama di `src/App.tsx`:

```tsx
import { DarkMeshGradients } from './components/DarkMeshGradients';

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <DarkMeshGradients />
      <div className="relative z-10">
        {/* Semua komponen aplikasi */}
      </div>
    </div>
  );
}
```

## Konfigurasi Warna

Semua komponen menggunakan warna tema Crafix yang didefinisikan di `tailwind.config.js`:

- `electric-cyan`: #00D9FF
- `neon-orange`: #FF814A
- `dark-navy`: #1E2A38

## Performa

### DarkMeshGradients
- ✅ Paling performant untuk dark theme
- ✅ Very subtle animations
- ✅ Professional appearance
- ✅ Ultra low CPU usage

### AdvancedMeshGradients
- ✅ Paling performant untuk light/medium theme
- ✅ Smooth animations
- ✅ Responsive
- ✅ Low CPU usage

### AnimatedMeshGradients
- ⚠️ Moderate performance
- ✅ High quality rendering
- ⚠️ Higher CPU usage pada mobile

### SVGMeshGradients
- ✅ Good performance
- ✅ Scalable
- ✅ Crisp rendering
- ⚠️ Moderate CPU usage

## Customization

### DarkMeshGradients Customization

#### Jumlah Orbs
```tsx
// Di DarkMeshGradients.tsx
for (let i = 0; i < 12; i++) { // Ubah angka ini
```

#### Opacity Levels
```tsx
const colors = [
  'rgba(0, 217, 255, 0.08)', // electric-cyan - very subtle
  'rgba(255, 129, 74, 0.06)', // neon-orange - very subtle
  // Ubah opacity untuk efek yang lebih terang/gelap
];
```

#### Background Darkness
```tsx
// Dark base layer
<div className="absolute inset-0 bg-gradient-to-br from-black via-dark-navy to-black"></div>

// Additional dark overlay
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/25 to-black/40"></div>
```

### AdvancedMeshGradients Customization

#### Jumlah Orbs
```tsx
// Di AdvancedMeshGradients.tsx
for (let i = 0; i < 15; i++) { // Ubah angka ini
```

#### Ukuran Orbs
```tsx
size: Math.random() * 400 + 200, // Ubah range ini
```

#### Warna
```tsx
const colors = [
  'rgba(0, 217, 255, 0.4)', // electric-cyan
  'rgba(255, 129, 74, 0.3)', // neon-orange
  // Tambah atau ubah warna
];
```

#### Animasi Duration
```tsx
animationDuration: Math.random() * 20 + 15, // Ubah range ini
```

## Browser Support

- ✅ Chrome/Edge (Modern)
- ✅ Firefox (Modern)
- ✅ Safari (Modern)
- ⚠️ IE11 (Limited support untuk Canvas dan CSS Grid)

## Tips Penggunaan

1. **Gunakan DarkMeshGradients** untuk dark theme professional
2. **Gunakan AdvancedMeshGradients** untuk light/medium theme
3. **Pastikan z-index** diatur dengan benar untuk layering
4. **Test di mobile** untuk memastikan performa yang baik
5. **Gunakan pointer-events-none** untuk komponen background
6. **Monitor CPU usage** pada perangkat low-end

## Troubleshooting

### Animasi tidak smooth
- Kurangi jumlah orbs
- Tingkatkan animation duration
- Gunakan `will-change: transform` untuk optimasi

### Performa buruk di mobile
- Gunakan `DarkMeshGradients` untuk dark theme
- Gunakan `AdvancedMeshGradients` untuk light theme
- Kurangi opacity dan blur effects
- Nonaktifkan animasi untuk `prefers-reduced-motion`

### Z-index issues
- Pastikan komponen mesh gradient memiliki `z-index: 0`
- Konten aplikasi harus memiliki `z-index: 10` atau lebih tinggi

### Background terlalu terang/gelap
- Untuk DarkMeshGradients: sesuaikan opacity di colors array
- Untuk AdvancedMeshGradients: sesuaikan opacity dan tambah dark overlay
- Gunakan browser dev tools untuk testing opacity values 