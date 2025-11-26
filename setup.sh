#!/bin/bash

# Portfolio Setup Script
echo "🚀 Setting up Ritya Godala Portfolio..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
else
    echo "✅ Dependencies already installed"
fi

# Initialize git if not already done
if [ ! -d ".git" ]; then
    echo "🔧 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit: Portfolio website"
    echo "✅ Git repository initialized"
    echo ""
    echo "📝 Next steps:"
    echo "1. Create a repository on GitHub"
    echo "2. Run: git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git"
    echo "3. Run: git push -u origin main"
    echo ""
    echo "See GITHUB_SETUP.md for detailed instructions"
else
    echo "✅ Git repository already initialized"
fi

echo ""
echo "✨ Setup complete!"
echo ""
echo "To start development server:"
echo "  npm run dev"
echo ""
echo "To build for production:"
echo "  npm run build"
echo ""

