# Evergreen Outdoor Living — Landscaping Website Demo

A responsive landscaping-company website concept built as a **web-development portfolio project**. The fictional brand, sample projects, testimonials, locations, prices, and contact details are illustrative content—not claims about a real company.

## Live preview

**[Open the website](https://tabeeb1314.github.io/Landscaping-Company-Website/)**

## Screenshots

The images below are live page captures generated from the deployed demo. They are loaded from an external screenshot service rather than stored as binary files in this repository.

### Landing page
![Evergreen Outdoor Living landing page screenshot](https://image.thum.io/get/width/1200/crop/850/noanimate/https://tabeeb1314.github.io/Landscaping-Company-Website/)

### Full-page layout
![Evergreen Outdoor Living full-page screenshot](https://image.thum.io/get/width/1200/fullpage/noanimate/https://tabeeb1314.github.io/Landscaping-Company-Website/)

## Features demonstrated

- Responsive navigation with a mobile menu
- Hero section and service overview
- Project gallery with project-detail interactions
- Interactive sample cost estimator
- About/process and FAQ sections
- Fictional client-story cards, clearly labelled as sample content
- Validated project brief form with a downloadable local text brief
- GitHub Pages deployment workflow using GitHub Actions

## Demo limitations

This project is intended to showcase design and front-end implementation skills.

- **No real business is represented.** Names, client stories, ratings, project outcomes, credentials, contact information, service areas, and prices are fictional or illustrative.
- The project brief form validates data in the browser and creates a downloadable text file. It does **not** submit data to a server, email anyone, or store submissions.
- The attachment control only demonstrates selecting filenames in the interface. Files are not uploaded.
- The estimator provides sample figures for interaction and is not a quote or price guarantee.
- Replace all sample copy, pricing, photos, contact details, and credentials with client-approved material before adapting this design for a real business.

## Tech stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React icons
- GitHub Pages + GitHub Actions

## Run locally

Requires a current Node.js version compatible with the Vite setup.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal.

## Build and type-check

```bash
npm run build
npm run lint
```

## Deployment

The repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that builds the Vite project and deploys the `dist` directory to GitHub Pages on pushes to `main`.

- [Deployment workflow runs](https://github.com/tabeeb1314/Landscaping-Company-Website/actions)
- [GitHub Pages settings](https://github.com/tabeeb1314/Landscaping-Company-Website/settings/pages)

## Portfolio note

This project demonstrates a possible front-end implementation for a landscaping business. It is a sample, not a production booking or lead-management system.
