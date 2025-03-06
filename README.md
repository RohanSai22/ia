
# IA Flow

**IA Flow** is a web application that uses Google’s **Gemini** model to generate full-stack React/Next.js apps from prompts. Simply describe your idea in the prompt, and IA Flow handles scaffolding and rendering your code. You can edit, preview, and deploy all within a single interface.

## Table of Contents

- [Features](#features)
- [Live Demo](#live-demo)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Troubleshooting](#troubleshooting)
- [How to Contribute](#how-to-contribute)
- [Credits](#credits)
- [Thanks](#thanks)

## Features

- **Prompt-Based Generation**: Enter an idea or prompt, and IA Flow uses Google Gemini to generate React files, Tailwind CSS styling, and more.
- **Live Preview**: View generated code in real time using the embedded Sandpack editor.
- **Full-Stack**: Combines Next.js, React, Tailwind CSS, and Convex for data storage.
- **Rate Limiting & Retries**: Integrates basic rate-limiting logic to avoid hitting free-tier Gemini usage limits too quickly.
- **User Authentication**: Sign in to track usage tokens and manage your workspaces.
- **Deployment**: One-click deploy your newly generated app from the UI (in progress).

## Live Demo

Try the app here: **[IA Flow on Vercel](https://ia-flow.vercel.app/)**

> **Note**: Because of free-tier constraints, some requests to the Gemini API may occasionally result in errors (e.g., 429 or 500) if usage limits are reached.

> **Special Note:**  
> There has been an issue because Vercel/Netlify only allow about 10 seconds of execution time for API routes, and the `updateFiles` process can take much longer for larger projects. If you encounter errors on these platforms, please try running the app locally for a full experience.

## Prerequisites

- **Node.js** (v16+ recommended)
- **npm** or **yarn**
- A **Google Generative AI** (Gemini) API key.  
  - Set it in an environment variable, e.g. `NEXT_PUBLIC_GEMINI_API_KEY`.

## Installation

1. **Clone the repo**:
   ```bash
   git clone https://github.com/RohanSai22/ia.git
   cd ia
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn
   ```

3. **Set environment variables**:  
   - Create a `.env.local` file in the project root:
     ```
     NEXT_PUBLIC_GEMINI_API_KEY=<YOUR_GEMINI_API_KEY>
     ```
   - Add any other required environment variables as needed.
   - Refer the env.local.example given in the repo

4. **Run locally**:
   ```bash
   npm run dev
   ```
   This starts the local development server at `http://localhost:3000`.

   - Set up the convex dev database and also the environment variables associated
   - Then run the below command using new termianl
   ```bash
   npx convex dev
   ```

## Usage

1. **Open the local dev URL** or the **Vercel deployment**.
2. **Sign in** or create an account (if required).
3. On the home screen, you’ll see the hero heading:
   ```
   "What idea do you want to work on?"
   ```
   Enter your idea in the text box (the “magic” prompt).
4. Wait for Gemini to generate your React code structure.  
   - You’ll see a code editor and preview side by side.
   - The “Generating your Files...” overlay appears while the app fetches and merges code.
5. **Edit, preview, and deploy** your generated app as needed.

## Troubleshooting

- **`500 (Internal Server Error)` or `429 (Rate Limit)`**:  
  - The free tier of Gemini may be hitting rate or usage limits.  
  - Try again later, or ensure your rate-limiting logic is correct in `/api/gen-ai-code.js`.
  - Check your environment variables to confirm your API key is valid.
  - Look at the server logs (on Vercel or locally) for more details.
- **Local Setup Issues**:  
  - Double-check `.env.local` is properly configured.
  - Make sure you’re on the right Node.js version (v16+).
- **Deployment**:  
  - On Vercel or Netlify, confirm that environment variables are set in the dashboard.
  - There has been an error because vercel only has 10s of waittime 

## How to Contribute

We welcome contributions of all kinds—bug fixes, new features, documentation updates, or even ideas for improvement! A few ways you can help:

1. **Fix the `500` error** when calling `/api/gen-ai-code`.  
   - If you have insight into why the server returns an Internal Server Error (e.g., token usage, request timeouts, etc.), we’d love your help!
2. **Improve the code generation logic**.  
   - If you have suggestions for better prompts or advanced rate-limiting strategies, feel free to open a PR.
3. **UI/UX enhancements**.  
   - We’re always looking to make the interface more intuitive and visually appealing.
4. **Report Issues**.  
   - If you find a bug, please open an issue in the GitHub repo with steps to reproduce it.

### Steps to Contribute

1. **Fork** the repository and clone your fork.
2. **Create a new branch** for your feature or fix:
   ```bash
   git checkout -b my-new-feature
   ```
3. **Make your changes** and test them locally.
4. **Commit** and push to your fork.
5. **Open a Pull Request** describing your changes and referencing any related issues.

> **Special Note:**  
> There has been an issue because Vercel/Netlify only allow about 10 seconds of execution time for API routes, and the `updateFiles` process can take much longer for larger projects. If you encounter errors on these platforms, please try running the app locally for a full experience.

## Credits

- **Special Thanks:**  
  - [**Harkirat**](https://github.com/hkirat) – For his insightful videos and tutorials.  
  - [**tubeguruji**](https://github.com/rrs301) – For his great videos that helped shape this project.

- **Built With:**  
  - [Next.js](https://nextjs.org/)
  - [React](https://reactjs.org/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Google Generative AI (Gemini)](https://ai.google/)
  - [Convex](https://convex.dev/)
  - [Sandpack](https://codesandbox.io/docs/sandpack)


## Thanks 

- Special thanks to [**Harkirat**](https://github.com/hkirat) and [**tubeguruji**](https://github.com/rrs301) for their awesome videos and tutorials that inspired parts of this project.
- The entire Next.js and Tailwind CSS community for making modern React development easier and more powerful.
- Google’s Gemini for powering the code generation magic.

