# Autodetail Vermeij - Premium Autodetailing Website

Een moderne, responsive website voor Autodetail Vermeij, een premium autodetailing bedrijf in Regio Gouda/Reeuwijk. De website is gebouwd met Next.js 14, TypeScript, Tailwind CSS en is geoptimaliseerd voor GitHub + Vercel deployment.

## 🚀 Live Website

**Website:** https://autodetail-vermeij.nl

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui + Lucide React icons
- **Animations:** Framer Motion
- **Deployment:** Vercel (automatic GitHub integration)
- **Email:** Resend (optional)

## 📁 Project Structuur

```
autodetail-vermeij/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── (pages)/           # Website pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── robots.ts          # Robots.txt
│   └── sitemap.ts         # Sitemap
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   └── (page components) # Page-specific components
├── config/               # Site configuration
├── lib/                  # Utilities and helpers
└── public/               # Static assets
```

## 🚀 Deployment (GitHub + Vercel)

### Stap 1: GitHub Repository

1. **Push code naar GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit: Autodetail Vermeij website"
   git push origin main
   ```

### Stap 2: Vercel Deployment

1. **Ga naar [Vercel](https://vercel.com) en log in**

2. **Import GitHub repository:**
   - Klik op "New Project"
   - Selecteer je GitHub repository
   - Vercel detecteert automatisch Next.js

3. **Configureer project:**
   - **Framework Preset:** Next.js
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (automatic)
   - **Output Directory:** `.next` (automatic)

4. **Deploy:**
   - Klik "Deploy"
   - Vercel bouwt en deployt automatisch

### Stap 3: Domain Setup (Hostnet DNS)

1. **In Hostnet DNS panel:**
   ```
   A    @    76.76.21.21
   CNAME www cname.vercel-dns.com
   ```

2. **In Vercel dashboard:**
   - Ga naar Project Settings → Domains
   - Voeg je domein toe: `autodetail-vermeij.nl`
   - Voeg ook `www.autodetail-vermeij.nl` toe
   - Stel primair domein in (apex of www)

### Stap 4: Environment Variables (Optioneel)

Voor e-mail functionaliteit, voeg toe in Vercel:

1. **Ga naar Project Settings → Environment Variables**
2. **Voeg toe:**
   ```
   RESEND_API_KEY = your_resend_api_key_here
   ```

## 📧 E-mail Setup (Optioneel)

De contact formulier werkt zonder e-mail setup, maar voor e-mail notificaties:

1. **Maak account bij [Resend](https://resend.com)**
2. **Verifieer je domein**
3. **Voeg API key toe aan Vercel environment variables**

## 🔄 Automatische Deployment

Na setup:
- **Push naar GitHub** → **Automatische Vercel deployment**
- **Geen lokale development nodig**
- **Production-ready builds**

## 📱 Features

### 🏠 Homepage
- Hero sectie met call-to-action
- USP sectie met voordelen
- Services grid met featured diensten
- Voor/na gallery met interactieve slider
- Klantreviews sectie
- Call-to-action sectie

### 🛠️ Diensten
- Uitgebreide diensten overzicht
- Categorieën: Exterieur, Interieur, Lakcorrectie, Keramische Coating
- Complete pakketten (Basic, Pro, Ultimate)
- Prijzen en beschrijvingen

### 🖼️ Portfolio
- Voor/na foto's met interactieve modal
- Project details en uitgevoerde diensten
- Responsive grid layout

### 👥 Over Ons
- Team sectie met specialisten
- Werkproces in 4 stappen
- Bedrijfswaarden en missie

### ❓ FAQ
- 10+ veelgestelde vragen
- Schema.org markup voor SEO
- Interactieve accordion

### 📞 Contact
- Contact formulier met validatie
- Anti-spam bescherming (honeypot)
- Contact informatie en openingstijden
- Google Maps placeholder

### ✅ Bedankt Pagina
- Bevestiging na formulier verzending
- Volgende stappen uitleg
- Contact opties

## 🎨 Design & UX

- **Mobile-first responsive design**
- **Premium automotive styling**
- **Smooth animations met Framer Motion**
- **Accessibility optimized**
- **Fast loading met Next.js optimizations**

## 🔍 SEO Features

- **Structured data (JSON-LD)**
- **Meta tags en Open Graph**
- **Sitemap.xml**
- **Robots.txt**
- **Semantic HTML**
- **Fast Core Web Vitals**

## 🛡️ Security

- **CSRF protection**
- **Input validation**
- **Honeypot anti-spam**
- **Secure headers**
- **Environment variables**

## 📊 Performance

- **Next.js Image optimization**
- **Automatic code splitting**
- **Static generation waar mogelijk**
- **Optimized bundle size**

## 🎯 Browser Support

- **Chrome 90+**
- **Firefox 88+**
- **Safari 14+**
- **Edge 90+**

## 📝 Content Management

Alle content is geconfigureerd in:
- `config/site.ts` - Bedrijfsinformatie, diensten, prijzen
- `lib/seo.ts` - SEO metadata helpers
- Component props voor dynamische content

## 🔧 Customization

### Kleuren aanpassen:
```css
/* tailwind.config.js */
colors: {
  charcoal: "#1B1C1E",    // Donkergrijs
  metallic: "#2E3033",    // Metallic grijs  
  blue: "#0A84FF",        // Accent blauw
}
```

### Content aanpassen:
```typescript
// config/site.ts
export const siteConfig = {
  name: "Autodetail Vermeij",
  contact: {
    email: "info@autodetail-vermeij.nl",
    phone: "+31 6 12345678",
    // ...
  }
}
```

## 📞 Support

Voor vragen over de website:
- **E-mail:** info@autodetail-vermeij.nl
- **Telefoon:** +31 6 12345678

## 📄 Licentie

© 2024 Autodetail Vermeij. Alle rechten voorbehouden.

---

**Deployment Status:** ✅ Production Ready  
**Last Updated:** December 2024  
**Version:** 1.0.0
