# Setting up Firebase for hosting

- Use node version `14.18.0`
- run `npm install -g firebase-tools`
- run `firebase init hosting` in root directory of project
- Follow instructions in CLI

- Visit [this page](https://github.com/settings/connections/applications/89cf50f02ac6aaed3484) to revoke authorisation for the Firebase CLI Github OAuth app

# Deploying Firebase preview

From the root of your local project directory, run the following command:

`firebase hosting:channel:deploy CHANNEL_ID`

Replace `CHANNEL_ID` with a name like `feature-name`
The generated URL can be accessed by other devices and shared with others. 

To update your preview URL with changes, run the same command again. Make sure to specify the same CHANNEL_ID in the command.

# Deploying live

- From any directory, run the following command:
`firebase hosting:clone SOURCE_SITE_ID:SOURCE_CHANNEL_ID TARGET_SITE_ID:live`

Replace each placeholder with the following:

`SOURCE_SITE_ID` and `TARGET_SITE_ID`: These are the IDs of the Hosting sites that contain the channels.
In my case, `personal-site-9e28d`

For your default Hosting site, use your Firebase project ID.
You can specify sites that are in the same Firebase project or even in different Firebase projects.
`SOURCE_CHANNEL_ID`: This is the identifer for the channel that is currently serving the version you want to deploy to your live channel.

For a live channel, use live as the channel ID.



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
