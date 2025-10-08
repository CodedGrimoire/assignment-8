📖 Description

HERO.IO is a React-based web application that showcases trending and available applications in a clean, modern UI.
The project includes features such as app browsing, installation simulation, search, filtering, error handling, and detailed app pages – built following Figma design references.

Users can:

Browse all applications in a grid layout.

View detailed app information (ratings, downloads, reviews, description).

Install apps (saved to localStorage) and see them in My Installation.

Uninstall apps with a toast notification.

Search apps by title with a loading spinner while filtering.

Sort installed apps by downloads (High → Low, Low → High).

Navigate across pages with a Navbar and Footer.

Handle errors with custom 404 Page and App Not Found Page.

🛠️ Technologies Used

React 18 + Vite – fast and modern frontend framework.

React Router DOM – for routing between pages.

Tailwind CSS + DaisyUI – for styling and prebuilt UI components (buttons, spinners, toasts).

Lucide React – for beautiful icons.

Recharts – for app ratings visualization (bar charts).

localStorage – to persist installed apps.

📂 Pages Implemented

Home – Landing page with hero section and trending apps.

All Applications – Searchable & clickable app grid.

App Details (About) – App info, ratings chart, install button with toast.

My Installation – Installed apps with uninstall + sorting.

404 Page – Custom design for unknown routes.

App Not Found Page – Special page if an app ID doesn’t exist.

⚡ Features

🔍 Search Apps with a simulated loading spinner.

📊 Ratings Visualization using Recharts.

💾 Install/Uninstall Apps with persistence in localStorage.

🔔 Toast Notifications for install/uninstall actions.

🎨 Modern UI based on Figma designs.

🛡 Error Handling with custom error pages.