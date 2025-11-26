# GitHub Repository Setup Guide

Follow these steps to create and push your portfolio to GitHub.

## Step 1: Initialize Git Repository

```bash
# Navigate to your project directory
cd /Users/rityagodala/Desktop/personalwebsite

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Portfolio website"
```

## Step 2: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon in the top right
3. Select **New repository**
4. Repository name: `personalwebsite` or `portfolio` or `rityagodala.com`
5. Description: "Personal portfolio website for Ritya Godala"
6. Choose **Public** or **Private**
7. **DO NOT** initialize with README (you already have one)
8. Click **Create repository**

## Step 3: Connect and Push to GitHub

```bash
# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/personalwebsite.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 4: Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New Project**
3. Import your newly created GitHub repository
4. Vercel will auto-detect Next.js
5. Click **Deploy**

## Step 5: Set Up Domain (See DOMAIN_SETUP.md)

Follow the instructions in `DOMAIN_SETUP.md` to configure `rityagodala.com`

## Future Updates

After making changes to your portfolio:

```bash
# Add changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push
```

Vercel will automatically deploy your changes!

## Repository Structure

```
personalwebsite/
├── app/              # Next.js app directory
│   ├── layout.tsx   # Root layout
│   ├── page.tsx     # Home page
│   └── globals.css  # Global styles
├── components/       # React components
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── TechStack.tsx
│   ├── Projects.tsx
│   ├── Education.tsx
│   └── Awards.tsx
├── public/          # Static assets (add your resume.pdf here)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## Tips

- Keep your repository public to showcase your code
- Add a `.github/workflows` for CI/CD (optional)
- Use meaningful commit messages
- Consider adding a LICENSE file

