# Traveler Explorer

Welcome to the **Traveler Explorer** project! This is a web application built with **Next.js** and **Tailwind CSS** to help users explore countries and destinations around the world. The app integrates a public API to display information about different countries, including their details and relevant data.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Project Structure](#project-structure)
4. [API Integration](#api-integration)

## Installation

To get started with the project, follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone <your-repository-url>
   ```

2. Navigate into the project directory:
   ```bash
   cd bia/experimental-app
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Run the application in development mode:
   ```bash
   npm run dev
   ```

   This will start the server at (http://localhost:3000).

## Usage

After the installation, you can:

- Visit the homepage to explore different countries.
- Search for specific countries or explore random destinations.
- View detailed country information, including facts, flags, and more.

## Project Structure

Here’s a breakdown of the project directory structure:

```
BIA
│
├── experimental-app
│   ├── src
│   ├── app
│   │   ├── about
│   │   │   └── page.js        <-- /about route
│   │   ├── contact
│   │   │   └── page.js        <-- /contact route
│   │   ├── country[code]
│   │   │   └── page.js        <-- Dynamic /country/[code] route
│   │   ├── components
│   │   │   ├── CountriesCard.js    <-- Displays country information
│   │   │   ├── Destination.js       <-- Displays destination details
│   │   │   ├── FooterData.js       <-- Displays footer information
│   │   │   ├── HeaderData.js       <-- Displays header data
│   │   │   ├── ReviewCard.js       <-- Displays user reviews for countries
│   │   │   └── Services.js         <-- Displays services information
│   ├── fonts
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.js
│   └── page.js
│   ├── lib
│   │     └── apolloClient.js 
├── .eslintrc.json
├── .gitignore
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
└── tailwind.config.js
└── README.md
```

- **about**: Contains the `page.js` file for the About page, accessible at `/about`.
- **contact**: Contains the `page.js` file for the Contact page, accessible at `/contact`.
- **country[code]**: This folder uses dynamic routing for country-specific pages. For example, `countries/us` for the United States, `countries/in` for India, etc.
- **components**: Contains reusable components used across the app:
  - **CountriesCard.js**: Displays country details such as names, flags, and more.
  - **Destination.js**: Displays detailed information about different destinations.
  - **FooterData.js**: Contains footer information and links.
  - **HeaderData.js**: Contains data for the header, such as navigation links.
  - **ReviewCard.js**: Displays reviews related to countries or destinations.
  - **Services.js**: Displays services like tours, packages, etc.
- **globals.css**: Global styles for the project.
- **layout.js**: Layout wrapper for the entire app.
- **page.js**: The main entry page for the app.

## API Integration

This project integrates with the **Countries API** to fetch and display information about countries around the world.

### API Endpoint

The API used in the project is:
- [Countries API URL](https://countries.trevorblades.com)

The Home page and Countries[code] components fetch data from this API and display detailed information about each country, including country names, flags, and more.

