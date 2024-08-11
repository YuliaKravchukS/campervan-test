# React + Vite

                                Camper Rental App

This is a React application for renting campers. The app allows users to browse through a catalog of campers and view detailed specifications for each one.

Features

Camper Catalog: Browse through a list of available campers.
Detailed View: View detailed specifications and features for each camper.
Favorites: Mark campers as favorites and manage your list.
Booking: Fill out a form to book a camper.

Tech Stack

React: Frontend framework used for building the UI.
Vite: Build tool that provides fast and optimized development and production builds.
Redux Toolkit: State management for managing global state, including favorite campers and filtering options.
React Router DOM: For handling routing and navigation within the app.
React Hook Form: Form management library for handling camper booking forms.
Yup: Schema validation for forms, integrated with React Hook Form.
Axios: HTTP client for making API requests.
Redux Persist: To persist Redux state across page reloads.
React Datepicker: For selecting dates when booking a camper.
React Modal: To display camper details in a modal window.
React Star Ratings: For displaying camper ratings.
clsx: Utility for conditionally applying class names.
date-fns: Date utility library for formatting and manipulating dates.

Installation

Clone the repository:

git clone https://github.com/your-username/camper-rental-app.git
cd camper-rental-app

Install dependencies:

npm install

Start the development server:

npm run dev

Open your browser and navigate to http://localhost:3000 to view the app.

Scripts

npm run dev: Start the development server.
npm run build: Build the project for production.
npm run preview: Preview the production build.

Project Structure

src/: Contains the source code.
components/: Reusable components like CampersList.
pages/: Page components like AdvertsPage.
redux/: Redux slices, store configuration, and selectors.
api/: Axios setup and API request functions.
ui/: UI components like Button.
assets/: Static assets like icons and images.

Contributing

Contributions are welcome! Please feel free to submit a pull request.
