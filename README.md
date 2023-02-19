# Ecommerce Application (React in TypeScript)

## Getting Started
You will need to install `npm` if you have not done so already
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## How to use this application?
This application provides the following features:
1. Upload a CSV file with appropriate feedback to the user on the upload progress.
2. List the data uploaded with pagination.
3. Search data from the uploaded file.

The features above are contained in the features folder.

### Upload CSV file
Users can upload one CSV file and a progress bar will indicate the progress with a label showing the percentage of completion

### List data with pagination
The data is displayed with all columns shown and users can select page size and page number
Uses React Query (TanStackQuery) to prefetch, synchronise and update data.

### Search
Users can do the following
1. enter a search term in the search bar and search by the Invoice No, Stock Code, Description, CustomerID and Country.
2. do server side filtering on the Invoice Date, Quantity and Unit Price

