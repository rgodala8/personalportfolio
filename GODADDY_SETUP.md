# GoDaddy Domain Setup Guide for rityagodala.com

This guide is specifically for setting up your domain purchased through GoDaddy.

## Step 1: Purchase Domain on GoDaddy

1. Go to [godaddy.com](https://www.godaddy.com)
2. Search for `rityagodala.com`
3. Add to cart
4. **Skip all add-ons** (hosting, email, SSL - you don't need them)
5. Complete purchase
6. You'll get access to your domain management dashboard

## Step 2: Deploy Your Site to Vercel First

Before configuring DNS, make sure your site is deployed:

1. Push your code to GitHub (see `GITHUB_SETUP.md`)
2. Go to [vercel.com](https://vercel.com) and sign in
3. Import your repository
4. Deploy your site
5. Note your Vercel deployment URL (e.g., `your-project.vercel.app`)

## Step 3: Add Domain in Vercel

1. In Vercel project dashboard → **Settings** → **Domains**
2. Add `rityagodala.com` and click **Add**
3. Add `www.rityagodala.com` and click **Add**
4. Vercel will show you DNS configuration instructions

## Step 4: Configure DNS in GoDaddy

### Option A: Use Vercel Nameservers (Easiest - Recommended)

1. Log into [GoDaddy](https://sso.godaddy.com)
2. Go to **My Products** → Find your domain → Click **DNS** (or **Manage DNS**)
3. Scroll down to **Nameservers** section
4. Click **Change**
5. Select **Custom** (not "GoDaddy Nameservers")
6. Replace the nameservers with:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
7. Click **Save**

**Note:** This will replace all GoDaddy DNS settings. Vercel will manage everything.

### Option B: Configure DNS Records Manually (Keep GoDaddy Nameservers)

If you want to keep GoDaddy nameservers:

1. Log into [GoDaddy](https://sso.godaddy.com)
2. Go to **My Products** → Find your domain → Click **DNS**
3. Scroll to **Records** section
4. Delete any existing A records for `@` (root domain)
5. Add new A record:
   - **Type:** A
   - **Name:** @
   - **Value:** `76.76.21.21`
   - **TTL:** 600 seconds (or default)
6. Add CNAME record for www:
   - **Type:** CNAME
   - **Name:** www
   - **Value:** `cname.vercel-dns.com`
   - **TTL:** 600 seconds (or default)
7. Click **Save**

## Step 5: Wait for DNS Propagation

- DNS changes can take 24-48 hours to fully propagate
- You can check status at [whatsmydns.net](https://www.whatsmydns.net)
- Enter `rityagodala.com` and check if it shows the Vercel IP
- Vercel will automatically provision SSL certificates

## Step 6: Verify in Vercel

1. Go back to Vercel dashboard → **Settings** → **Domains**
2. Check that both domains show "Valid Configuration"
3. SSL certificates will be provisioned automatically

## Step 7: Test Your Domain

After 24-48 hours:
- Visit `https://rityagodala.com` - should show your portfolio
- Visit `https://www.rityagodala.com` - should redirect to root domain

## GoDaddy-Specific Tips

### Domain Privacy
- GoDaddy charges extra for domain privacy
- Consider enabling it to protect your contact information
- Can be found in domain settings → Privacy

### Auto-Renewal
- Enable auto-renewal to prevent domain expiration
- Go to domain settings → Auto-renew

### Common Issues

**DNS not updating:**
- Wait 24-48 hours (DNS propagation takes time)
- Clear your browser cache
- Try incognito/private browsing mode

**SSL certificate not working:**
- Ensure DNS is properly configured
- Wait a few hours after DNS propagation
- Check Vercel dashboard for SSL status

**www not redirecting:**
- Vercel handles this automatically
- Check Vercel project settings if needed

## GoDaddy Support

If you need help:
- GoDaddy Support: [support.godaddy.com](https://support.godaddy.com)
- Live Chat available 24/7
- Phone: 1-480-505-8877

## Cost Reminder

- First year: ~$0.01 (promotional)
- Renewal: ~$22.19/year
- Domain Privacy: ~$9.99/year (optional)

