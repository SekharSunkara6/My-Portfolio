# My Portfolio Website

A personal portfolio website built with Gatsby.js showcasing my projects, skills, and contact information.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Credits](#credits)
- [Contact](#contact)
- [License](#license)

## Project Overview

This is a responsive personal portfolio website built using Gatsby v2, React, and styled-components. The site highlights my projects, skills, and contact details, optimized for both performance and SEO. It is deployed on Netlify for reliable hosting with continuous deployment.

## Features

- Fast static site generation with Gatsby v2
- Responsive design using styled-components
- SEO optimized with React Helmet
- Image optimizations using Gatsby plugins (`gatsby-image`, `gatsby-plugin-sharp`)
- Prettier & ESLint for code quality and formatting
- Husky pre-commit hooks for consistent code standards
- Continuous deployment on Netlify from GitHub

## Tech Stack

- Node.js (v18+)
- Gatsby.js (v2)
- React.js
- styled-components
- Prettier & ESLint
- Husky & lint-staged
- Netlify (deployment)
- Git & GitHub (version control)

## Getting Started

### 1. Clone the repository

```
git clone https://github.com/SekharSunkara6/My-Portfolio.git
cd My-Portfolio
```

### 2. Install dependencies

```
npm install
```

(or use `yarn install` if you prefer Yarn)

### 3. Start the development server

```
npm run develop
```

The site will be available at [http://localhost:8000](http://localhost:8000).

## Scripts

| Command           | Description                       |
|-------------------|---------------------------------|
| `npm run develop` | Start the development server     |
| `npm run build`   | Build the production-ready files |
| `npm run serve`   | Serve the production build locally |
| `npm run clean`   | Clear Gatsby cache               |

## Deployment

The portfolio website is deployed on Netlify for fast and reliable hosting.

- **Production URL:**  
  *(Replace with your actual deployed URL)*  
  `https://your-netlify-site.netlify.app/`

- **Automatic Deploys:**  
  Deploys automatically on push to the `main` branch on GitHub.

- **Manual Deployment:**  
  Push code to GitHub and trigger deploy on Netlify dashboard (optionally clear cache for fresh builds).

## Project Structure

```
src/                # Source files (components, pages, styles)
public/             # Built static files (auto-generated)
gatsby-config.js    # Gatsby configuration
package.json        # Project metadata and dependencies
```

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests with improvements.

- Ensure that all linting and formatting rules pass before committing.
- Keep commit messages clear and descriptive.

## Credits

This portfolio website is inspired by and forked from [brittanychiang.com](https://brittanychiang.com).  
Please give proper credit by linking back to [brittanychiang.com](https://brittanychiang.com) if you use or fork this project. Thanks!

## Contact

Sekhar Sunkara  
Email: sekharsunkara2002@gmail.com  
GitHub: [https://github.com/SekharSunkara6](https://github.com/SekharSunkara6)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
