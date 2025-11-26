# Ritya Godala - Personal Portfolio

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and clean UI design
- 📱 Fully responsive
- ⚡ Fast and optimized
- 🎭 Smooth animations
- 🌙 Dark theme optimized

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment & Domain Setup

### Deploy to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings

### Setting up rityagodala.com Domain

#### Step 1: Purchase Domain
- Purchase `rityagodala.com` from a domain registrar (Namecheap, Google Domains, GoDaddy, etc.)

#### Step 2: Configure Domain in Vercel
1. Go to your project settings in Vercel
2. Navigate to **Domains** section
3. Add `rityagodala.com` and `www.rityagodala.com`
4. Vercel will provide DNS records to configure

#### Step 3: Configure DNS Records
Add the following DNS records at your domain registrar:

**For root domain (rityagodala.com):**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21` (Vercel's IP)

**For www subdomain (www.rityagodala.com):**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

**Alternative (Recommended):**
- Use Vercel's nameservers:
  - `ns1.vercel-dns.com`
  - `ns2.vercel-dns.com`

#### Step 4: SSL Certificate
Vercel automatically provisions SSL certificates for your domain. Wait 24-48 hours for DNS propagation and SSL activation.

#### Step 5: Verify
Once DNS propagates (can take up to 48 hours), your site will be live at `https://rityagodala.com`

## Customization

Edit the content in:
- `app/page.tsx` - Main page content
- `components/` - Individual section components
- `app/globals.css` - Global styles

## License

MIT

