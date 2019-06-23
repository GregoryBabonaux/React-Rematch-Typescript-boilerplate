## This is yet another boiletplate based on CRA

I'm bored (you probably bored too) to set-up the same tools at every single projects, fix Typescript, create a store, configure routing... so i deciced to create a brand new boilerplate.

This boilerplate allows you to create a React App with best tools, in seconds. 

I'm using it for every new projects and it save me a lot of time by focusing on code, not on boilerplate.

You can easly adapt this to your own project. 

It's 100% compatible with next versions of CRA, don't need to eject, but you can if you want to.

Jump in !

### Tools
- Redux powered by Rematch (https://github.com/rematch/rematch/blob/master/docs/plugins.md) with
  - Persist
  - Loading
  - Select
- Connected React Router (https://github.com/supasate/connected-react-router)
- i18next (https://github.com/i18next/react-i18next)
- Typescript 
- Formik (https://jaredpalmer.com/formik/)
- Ant Design (https://ant.design)
- Reactotron (https://github.com/infinitered/reactotron)
- Loadable (https://github.com/jamiebuilds/react-loadable)
- styled component (https://www.styled-components.com/)
- Atomic Design concepts (https://github.com/danilowoz/react-atomic-design)
- Sentry (https://sentry.io/welcome/)
- Error Boundaries
- Storybook (https://storybook.js.org/) with Typescript compatibily (thannks to https://medium.com/@dandobusiness/setting-up-a-react-typescript-storybook-project-5e4e9f540568)
- Axios (https://github.com/axios/axios)
- Json server (https://github.com/typicode/json-server) is used to simulate some endpoints, it's usefull to understand effects in rematch models (sheep)

### Config
Don't forget to edit src/config.sample.ts (rename it config.ts and edit constants)

### About Storybook
Stories must be saved in src/stories folder. You can change this by editing storybook configuration in .storybook folder at the root.

### About Reactotron
Don't forget to install Reactotron App. Check src/ReactotronConfig if you need to change name, IP & port

### About imports
Absolute imports are avalaible from src folder

### About Loadable
You can find an example in App.tsx, where Sheeps page is loaded with Loadable, this way : 

`const LoadableSheeps = Loadable({
  loader: () => import('pages/Sheeps'),
  loading: Loading,
});`

You can use loadable for any component you want. 

### About Axios
Axios is used to make api calls.

It provide interceptors where you can set JWT before request, and handling response status (for, like in this code, handling a 401 and redirect user to the login screen)

## Commands

- Launch project : 

`yarn install`

`yarn start`

- Launch Storybook

`yarn storybook`

- Launch Json Server :

`json-server --watch data/index.js --port 3004`

Or :

`yarn jsonserver`

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
