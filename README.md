This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Project structure

You will be using mostly the folders in `src` directory. Let see what each directory contains and how you can start adding to the existing code

### `action-types`

This directory contains the action types for reducer. you can define action types for your reducer here in this folder

### `actions`

This folder contains the actions for reducers. For example if you want to create a reducer for transactions your actions for transaction will be defined here.

### `Components`

Components will be defined here. Remember! the react components defined here should be state less and functional.
However this is not a rigid rule in case of complex scenarios class components can also be written. But, try to avoid class components as much as possible

### `Containers`

This folder will contain the logical components. These components will contain the data manipulation.
For example: Redux states will be mapped here like in the code below

```$xslt
const mapStateToProps = (state) => {
     return {
         users: state.user_reducer.users
     };
 };
 
 const mapDispatchToProps = (dispatch) => {
     return {
         setActiveUsers: () => dispatch(setActiveUsers())
     };
 };
```

### `HOC`

This folder contains the higher order components. 
These components are used when you want a consistent design without depending on the components being render.

### `reducer`

This folder contains the reducers. 
You can add you own reducer and combine with the existing reducers.
Here is a code snippet
 ```
import user_reducer from "./user-reducer";
import {combineReducers} from "redux";

const reducer = combineReducers({
    user_reducer
});

export default reducer;
```
Try to follow the file naming convention for the reducers.

### `Services`

This folder contains all the functionality related to your data source i.e API requests or file system.

### `socket-io`

This folder contains all logic related to sockets.

#### `Utils`

This folder contains all the utility functions required in our project.
This folder also contains a ```axios ``` utility which will be called whenever we want to call an api.

### `Styling`

As in the project you can define local styles for presentational components or use global styles.
Module support is also added so if you want to use css in modules you can do that
for example

```
import ManCss from './main.css';

 <div className={ManCss.man}>
 </div>
```
## Libraries.
following is the list of main libraries we have used

 * Material UI (for themes and styled components)
 * Redux (As data store)
 * Redux Thunk (Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.)
 * eslint-config-react-app (for code linting)
 * eslint-plugin-react-hooks(for linting of react hooks)
 
 ## Best practices.
  * UI before API
     - Helps in abstraction and better user experience
     - Don't get distracted by imaginary problems
     - Over complex linting for styles result in missing the basic logical flaws in design
  * Use react linting
    - Use a separate style formatter, prettier etc
    - Use snippets
 Rather than copying code and leaving extra code in different components
  * Trust the theory
     - Go for your proposed idea if it increases the user experience of application
  * Debugging
     - Use developers tools
     - User react and redux dev tools for better understanding of data flow

## Guide for Component creation.

  ### `Presentational components`
   
   - Are concerned with how things look.
   - May contain both presentational and container components** inside, and usually have some DOM markup and styles of their own.
   - Often allow containment via this.props.children.
   - Have no dependencies on the rest of the app, such as redux actions or stores.
   - Don’t specify how the data is loaded or mutated.
   - Receive data and callbacks exclusively via props.
   - Rarely have their own state (when they do, it’s UI state rather than data).
   - Are written as functional components unless they need state, lifecycle hooks, or performance optimizations.
   - Examples: Page, Sidebar, Story, UserInfo, List.
 
 ### `Containers`
  - Are concerned with how things work.
  - May contain both presentational and container components** inside but usually don’t have any DOM markup of their own except for some wrapping divs, and never have any styles.
  -Provide the data and behavior to presentational or other container components.
  - Call Flux actions and provide these as callbacks to the presentational components.
  - Are often stateful, as they tend to serve as data sources.
  - Are usually generated using higher order components such as connect() from React Redux, createContainer() from Relay, or Container.create() from Flux Utils, rather than written by hand.
  - Examples: UserPage, FollowersSidebar, StoryContainer, FollowedUserList.

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

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
