### STREAM LOBBY 

Application to help streamers get viewers to play games with.

# SITE SETUP 

### General setup: 
 React single page app on the front-end with JS micro-services deployed on AWS lambda using the Serverless framework. DynamoDB for database


For Link creation with certain fields enabled or not:

### Option 1:  

Query parameter in the link you generate, i.e. mylink.domain?ageGroup=true. You could check if the query has the key “rank” with value “true”, and if that’s the case, then require the rank to be specified.

### Option 2:  

Url slugs –   basically when people create an entry, store the entry and the custom part of the url (slug) in the same spot in a database. When people hit your domain, check for the extra text at the end against all of the names in the database and pull out the associated information when generating the page. 

1. Create an event with settings saved to the DB.
2. Get a link from the create response
3. User sends to others
4. Other people hit the link, which does a DB lookup

# For limiting entries to one IP address:

### Option 1:  

How you do it depends on the language you're coding in, but basically the user's IP address will be in the request, so record it in your database with the submission and if you get another one with the same IP just don't save it. You could do that with a 'unique' constraint on the database or by searching the database for the IP address before saving the submission.

### Option 2:  

URL parameters -  When you ship the links out, have a random key generated as a parameter that is stored in a database. Make it 16 characters or something. Only allow matching parameters to make a submission. If the parameter is already being used in your submission database, ignore submission.
Option 3:  Cookies - You can leave them in browser for up to 12 months. Give a confirmation every time someone submits so they don’t feel the need to circumvent.

------------------------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
# Stream-Lobby
