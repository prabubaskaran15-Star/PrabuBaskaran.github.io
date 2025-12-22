
# Deploying Prabu Baskaran's Portfolio

Your professional portfolio is ready for GitHub Pages. 

## 1. Uploading to GitHub
Since your repository is `PrabuBaskaran.github.io`, it is configured as a "User Page".

1. Go to your GitHub repository.
2. Click **Add file** > **Create new file**.
3. Create each of these files one by one by pasting the code provided:
   - `index.html`
   - `index.tsx`
   - `App.tsx`
   - `constants.tsx`
   - `types.ts`
   - `geminiService.ts`
   - `metadata.json`
4. For each file, click **Commit changes** at the bottom.

## 2. How long does it take?
Deployment typically takes **1 to 3 minutes**. GitHub needs this time to "build" your site and distribute it to their servers.

## 3. How to check if it's deployed
There are three ways to check the status:

### A. The "Actions" Tab (Best Method)
1. Click the **Actions** tab at the top of your GitHub repository page.
2. You will see a workflow named **"pages build and deployment"**.
3. If it shows a **Yellow spinning circle**, it is currently building.
4. If it shows a **Green checkmark**, your site is successfully live!
5. If it shows a **Red X**, there was an error (usually a missing file).

### B. The "Settings" Page
1. Go to **Settings** > **Pages** (on the left sidebar).
2. At the top of the page, if the deployment is finished, you will see a box that says: 
   > "Your site is live at https://PrabuBaskaran.github.io/"
3. Click the **Visit site** button.

### C. The Commit History
1. On your main repository code page, look at the top right of the file list.
2. You will see a small icon next to your latest commit (a yellow circle or green check). Click it to see the build progress.

## 4. Enabling the AI Assistant
To make the AI Assistant work:
1. Get a free API key from [Google AI Studio](https://aistudio.google.com/).
2. On GitHub, go to your repository **Settings** > **Secrets and variables** > **Actions**.
3. Click **New repository secret**.
4. Name it `API_KEY` and paste your key.

---
**Owner:** Prabu Baskaran
**Stack:** React 19 + Tailwind CSS + Gemini AI
