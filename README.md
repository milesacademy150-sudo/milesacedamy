# Miles Academy Website

Standalone static website for Miles Academy. It runs without a build system, database, or backend server.

## Contents

- `index.html` – site structure and form configuration
- `styles.css` – responsive styling
- `script.js` – mobile navigation and form status message
- Image files – logo, founders, service posters, and philosophy photos
- `package.json` – optional local preview and validation commands
- `.env.example` – configuration names only; it contains no secrets

## Run locally

Open `index.html` directly in a browser, or use a small static server:

```bash
npx serve .
```

Then open the local URL shown in the terminal.

## Form notifications

The callback form posts to FormSubmit and is currently configured to notify `milesacademy150@gmail.com`.

On first use, FormSubmit sends an activation email to that inbox. Open it and confirm the address. After that, each form submission is delivered by email.

To change the receiving inbox, update the form `action` in `index.html`:

```html
<form action="https://formsubmit.co/YOUR_EMAIL_ADDRESS" method="POST">
```

## Deploy to GitHub Pages

The repository is already configured for GitHub Pages. Keep the website files in the repository root and publish from the `main` branch using **Settings → Pages → Deploy from a branch → main → /(root)**.

## Notes

- No backend code or secrets are included because this project uses static hosting.
- Google Fonts are loaded from the Google Fonts CDN at runtime.
- Do not put passwords, API keys, or private credentials in this project.
