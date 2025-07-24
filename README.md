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

This is a responsive, SEO-friendly portfolio website built using Gatsby v2, React, and styled-components. It showcases my projects, skills, and contact details, and is deployed on Netlify for fast, reliable hosting with continuous integration.

## Features

- High-performance static site generation with Gatsby v2  
- Responsive design with styled-components  
- SEO optimization using React Helmet  
- Image processing and optimization with Gatsby plugins (`gatsby-image`, `gatsby-plugin-sharp`)  
- Code formatting and linting with Prettier and ESLint  
- Husky pre-commit hooks for consistent code quality  
- Continuous deployment triggered from GitHub commits on the main branch  

## Tech Stack

- Node.js (v18+)  
- Gatsby.js (v2)  
- React.js  
- styled-components  
- Prettier & ESLint  
- Husky & lint-staged  
- Netlify (hosting and CI/CD)  
- Git & GitHub (version control)  

## Getting Started

### 1. Clone the repository:

```bash
git clone https://github.com/SekharSunkara6/My-Portfolio.git
cd My-Portfolio
```

### 2. Install dependencies:

```bash
npm install
```

*(or use `yarn install` if preferred)*

### 3. Start the development server:

```bash
npm run develop
```

Open your browser and visit [http://localhost:8000](http://localhost:8000) to view the site locally.

## Scripts

| Command           | Description                         |
| ----------------- | --------------------------------- |
| `npm run develop` | Starts the development server      |
| `npm run build`   | Builds optimized production files  |
| `npm run serve`   | Serves production build locally    |
| `npm run clean`   | Clears Gatsby cache and build files|

## Deployment

This project is deployed on Netlify with automatic builds triggered on pushes to the `main` branch.

- **Production URL:** *(replace with your live site URL)*  
  `https://sekharsunkaraportfolio.netlify.app/`

- To manually deploy:  
  1. Push changes to GitHub.  
  2. Trigger deploy via Netlify dashboard (optionally deploy without cache for fresh builds).

## Project Structure

```
src/                # Source files (components, pages, styles)
public/             # Built static files (auto-generated)
gatsby-config.js    # Gatsby configuration file
package.json        # Project metadata and dependencies
```

## Contributing

Contributions are welcome! Please fork this repository and submit pull requests.

- Ensure code passes linting and formatting before committing.  
- Write clear, descriptive commit messages.

## Credits

This portfolio website is inspired by and forked from [brittanychiang.com](https://brittanychiang.com).  
Please give proper credit by linking back to [brittanychiang.com](https://brittanychiang.com) if you use or fork this project. Thanks!

## Contact

Sekhar Sunkara  
Email: sekharsunkara2002@gmail.com  
GitHub: [https://github.com/SekharSunkara6](https://github.com/SekharSunkara6)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
