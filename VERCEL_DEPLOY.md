# Deploy to Vercel - Step by Step Guide

## Method 1: Deploy via GitHub (Recommended)

### Step 1: Push to GitHub

1. Create a new repository on GitHub:
   - Go to [github.com/new](https://github.com/new)
   - Repository name: `personalwebsite` (or any name you prefer)
   - Make it **Public** or **Private**
   - **DO NOT** initialize with README (you already have files)
   - Click **Create repository**

2. Connect and push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/personalwebsite.git
   git branch -M main
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` with your GitHub username.

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up** or **Log In**
3. Choose **Continue with GitHub** (recommended)
4. Authorize Vercel to access your GitHub account
5. Click **Add New Project**
6. Find and select your `personalwebsite` repository
7. Vercel will auto-detect Next.js settings:
   - Framework Preset: Next.js
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)
8. Click **Deploy**
9. Wait 1-2 minutes for deployment
10. Your site will be live at `your-project.vercel.app`!

### Step 3: Add Custom Domain

1. In Vercel project dashboard → **Settings** → **Domains**
2. Enter `rityagodala.com` and click **Add**
3. Enter `www.rityagodala.com` and click **Add**
4. Follow DNS configuration steps (see `GODADDY_SETUP.md`)

---

## Method 2: Deploy via Vercel CLI (Quick Alternative)

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Yes**
- Which scope? (select your account)
- Link to existing project? **No**
- Project name? (press Enter for default)
- Directory? (press Enter for `./`)
- Override settings? **No**

### Step 4: Production Deploy

```bash
vercel --prod
```

Your site will be live!

---

## After Deployment

### Automatic Deployments
- Every push to `main` branch = automatic production deployment
- Pull requests = preview deployments

### Environment Variables
- If you need environment variables, add them in:
  - Vercel Dashboard → Settings → Environment Variables

### Custom Domain
- See `GODADDY_SETUP.md` for domain configuration

---

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Run `npm run build` locally to test

### Domain Not Working
- Wait 24-48 hours for DNS propagation
- Check DNS configuration in GoDaddy
- Verify domain in Vercel dashboard shows "Valid Configuration"

### Need Help?
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Vercel Support: [vercel.com/support](https://vercel.com/support)

