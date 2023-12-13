# Tycation.com - React Project  

#### Authors: Tyler Meyers with collaboration from fellow code-master [Dominic Santini](https://github.com/domsantini) 
#### Youtube demonstration: https://www.youtube.com/watch?v=MVRm4pS-ImE  

**Project completion:** December 2023

## Summary

Tycation.com is a React project developed by Tyler Meyers and Dominic Santini. The project served as a valuable learning experience in React, incorporating features such as location selection, notes generation, itinerary creation, and exploration of local places through the Yelp Fusion API and Google Maps/Places API.

## Key Files

### App.js

`App.js` serves as the main entry point for Tycation.com, orchestrating the rendering of different components based on the application's state. It manages the website's layout and conditional rendering between the initial landing page and the main planning page.

### Planner.js

`Planner.js` is a React component representing the main planning page of Tycation.com. It incorporates functionalities for managing trip details, exploring places through the Yelp API, creating and editing notes, and structuring a day-by-day itinerary. The file showcases the use of React hooks, Axios for API requests, and FontAwesome icons.

### Start.js and SearchForm.js

`Start.js` and `SearchForm.js` contains React components for user input and form submission related to planning a trip on Tycation.com. It includes a location selection with Places Autocomplete, date picking, error handling, and a Combobox for location suggestions. The file ensures a smooth user experience when entering trip details, with credit to Dominic Santini for the Google Places API integration.

### MapSection.js

`MapSection.js` is a React component responsible for rendering a Google Map using the `@vis.gl/react-google-maps` library. This component dynamically centers the map based on geographical coordinates (`latLng`) and provides an interactive view of the planned trip location. The integration includes API key configuration and responsive design for various screen sizes. Special thanks to Dominic Santini for his contributions with the map section.

## How to Run the Application

To run the application, follow these steps:

1. Ensure you have Node.js installed on your system.
2. Clone this repository to your local machine.
3. Navigate to the project directory in the terminal.
4. Run `npm install` to install the necessary dependencies. (If there's issues run 'npm audit fix --force')
5. Create a `.env` file with your Google Maps API key: `REACT_APP_GOOGLE_MAPS_API_KEY=your-api-key` and Yelp API key: `REACT_APP_YELP_API_KEY`
6. For CORS workaround, need to enable tempoarary access here 'https://cors-anywhere.herokuapp.com/corsdemo' 
7. Run `npm start` to start the development server.
8. Open your browser and go to `http://localhost:3000` to view the application.

## Additional Information

Tycation.com represents a collaborative effort, symbolizing the authors' progress in web development and collaboration. It integrates various React features, external API usage, and responsive design, embodying their commitment to continuous learning and project implementation.
