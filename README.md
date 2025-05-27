# 🌍 REST Countries App with Filters and Theme Toggle

This is my solution to the [Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-REST-Countries-API) challenge. I built it using **Next.js**, **Tailwind CSS**, and the **REST Countries API**.

## 🔧 Features

- ✅ Display all countries with flags, names, population, and region
- 🔍 Search countries by name
- 🌍 Filter countries by region
- 🔠 Sort countries alphabetically (A–Z and Z–A)
- 👥 Filter countries with population over 50 million
- 🌗 Toggle between light and dark mode
- 🗺️ View detailed country information on a separate page
  - Including native name, subregion, capital, currencies, languages, and more
  - Clickable links to border countries

## 🚀 Technologies Used

- [Next.js 14](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [REST Countries API](https://restcountries.com/)
- React Hooks (`useState`, `useEffect`)


## 🛠️ Getting Started

To run this project locally, follow these steps:

```bash
git clone https://github.com/najmeh25/CountriesApp.git
cd CountriesApp
npm install
npm run dev

📁 Folder Structure
/app
  /[country]       # Dynamic route for country detail pages
  /components      # Reusable UI components
  layout.js        # Global layout with theme toggle
  page.js          # Homepage with filters and list

To run this project locally:


🔗 [Live Demo](https://countries-app-mocha.vercel.app/)


📚 What I Learned
How to work with dynamic routes using the new App Router in Next.js

Implementing light/dark themes with Tailwind and useState

Managing filtered and sorted data using React state

Using external APIs and handling async data

🙌 Acknowledgments
Challenge by Frontend Mentor

Thanks to the awesome community for code reviews and support!


