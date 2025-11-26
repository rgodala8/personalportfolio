# Push Code to GitHub

Your repository is already connected! Now you just need to push your code.

## Method 1: Push with Credentials (Easiest)

Run this command in your terminal:

```bash
git push -u origin main
```

When prompted:
- **Username**: Enter your GitHub username (`rgodala8`)
- **Password**: Enter a **Personal Access Token** (NOT your GitHub password)

### How to Create a Personal Access Token:

1. Go to [github.com/settings/tokens](https://github.com/settings/tokens)
2. Click **Generate new token** → **Generate new token (classic)**
3. Give it a name: "Portfolio Push"
4. Select scopes: Check **repo** (this gives full repository access)
5. Click **Generate token**
6. **Copy the token immediately** (you won't see it again!)
7. Use this token as your password when pushing

## Method 2: Use SSH (Alternative)

If you prefer SSH:

1. Change remote to SSH:
   ```bash
   git remote set-url origin git@github.com:rgodala8/personalportfolio.git
   ```

2. Push:
   ```bash
   git push -u origin main
   ```

## After Pushing

Once your code is on GitHub:
1. Go to [github.com/rgodala8/personalportfolio](https://github.com/rgodala8/personalportfolio)
2. Verify all files are there
3. Then deploy to Vercel!

