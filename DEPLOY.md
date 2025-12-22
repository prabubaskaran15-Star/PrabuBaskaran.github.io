
# Deploying Prabu Baskaran's Portfolio

Your professional portfolio is ready to be hosted on GitHub Pages.

## 1. Uploading to GitHub
Since you are using the repository name `PrabuBaskaran.github.io`, GitHub will automatically treat this as your primary User Page.

1. Go to your repository on GitHub.
2. Use the "Add file" -> "Create new file" method for each of the following:
   - `index.html`
   - `index.tsx`
   - `App.tsx`
   - `constants.tsx`
   - `types.ts`
   - `geminiService.ts`
   - `metadata.json`
3. Paste the code for each file from the provided blocks.

## 2. Enabling GitHub Pages
1. Go to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, ensure it says "Deploy from a branch".
3. Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
4. Click **Save**.

## 3. Viewing Your Site
Your site will be available at:
`https://PrabuBaskaran.github.io`

## 4. Enabling the AI Assistant
To make the AI Assistant work:
1. Get a free API key from [Google AI Studio](https://aistudio.google.com/).
2. On GitHub, go to your repository **Settings** > **Secrets and variables** > **Actions**.
3. Click **New repository secret**.
4. Name it `API_KEY` and paste your key.
5. *Note: For GitHub Pages static sites, the API key must be handled carefully. For this specific template, it expects the key to be available in the environment.*

---
**Owner:** Prabu Baskaran
**Stack:** React 19 + Tailwind CSS + Gemini AI
