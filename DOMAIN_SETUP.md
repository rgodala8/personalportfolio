# Domain Setup Guide for rityagodala.com

This guide will help you set up the custom domain `rityagodala.com` for your portfolio.

## Prerequisites

- Domain `rityagodala.com` purchased from a registrar
- GitHub account with your portfolio repository
- Vercel account (free tier works)

## Step-by-Step Instructions

### 1. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New Project**
3. Import your portfolio repository
4. Vercel will auto-detect Next.js settings
5. Click **Deploy**

Your site will be live at `your-project.vercel.app`

### 2. Add Domain to Vercel

1. In your Vercel project dashboard, go to **Settings**
2. Click **Domains** in the sidebar
3. Enter `rityagodala.com` and click **Add**
4. Also add `www.rityagodala.com` and click **Add**
5. Vercel will show you DNS configuration instructions

### 3. Configure DNS at Your Domain Registrar

You have two options:

#### Option A: Use Vercel Nameservers (Recommended)

1. Go to your domain registrar's DNS management
2. Change nameservers to:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
3. Save changes

#### Option B: Configure DNS Records Manually

Add these records at your domain registrar:

**For root domain:**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: Auto (or 3600)
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: Auto (or 3600)
```

### 4. Wait for DNS Propagation

- DNS changes can take 24-48 hours to propagate globally
- You can check propagation status at [whatsmydns.net](https://www.whatsmydns.net)
- Vercel will automatically provision SSL certificates once DNS is configured

### 5. Verify Domain

1. Check Vercel dashboard - domain should show "Valid Configuration"
2. Visit `https://rityagodala.com` in your browser
3. You should see your portfolio with a valid SSL certificate

## Troubleshooting

### Domain not resolving
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Check Vercel dashboard for any errors

### SSL certificate issues
- Ensure DNS is properly configured
- Wait for automatic SSL provisioning (can take a few hours)
- Check Vercel dashboard for SSL status

### www redirect
- Vercel automatically redirects www to root domain
- You can configure this in Vercel project settings

## Popular Domain Registrars

- [Namecheap](https://www.namecheap.com)
- [Google Domains](https://domains.google)
- [GoDaddy](https://www.godaddy.com)
- [Cloudflare Registrar](https://www.cloudflare.com/products/registrar)

## Need Help?

- [Vercel Domain Documentation](https://vercel.com/docs/concepts/projects/domains)
- [Vercel Support](https://vercel.com/support)

