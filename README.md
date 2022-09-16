# Getting Started with Astro UI Library

![image](https://user-images.githubusercontent.com/93447469/190551386-74f76819-37ba-4e17-9217-3f87bed1a75b.png)

## Start Contributing to Astro UI Library

### 1. Clone the repository to your local machine.

`git clone https://github.com/JordanUrbaezLu/astro-ui-library`

&nbsp;
### 2. Install node-modules and dependencies.

`cd astro-ui-library`

`npm install`

&nbsp;
### 3. Create a new branch off main.

`git checkout -b <new-branch-name>`

&nbsp;
### 4. Make some improvements to the code base!

&nbsp;
### 5. After making improvements, add your files to the staging area.

`git add .`

&nbsp;
### 6. Now commit your files and leave a message using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).

`git commit -m "<type>[scope/component]: <description>"`

&nbsp;
### 7. Raise a pull request for the project owner to review!

`git push origin <your-branch-name>`

&nbsp;
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Runs all the unit tests for the components.\
Unit tests use React Testing Library and Jest.

### `npm test-u`

Runs all the unit tests for the components and also updates the snapshots.
Snapshots should only be updated if you already ran `npm test` and failed because a foundamental change was made inside a component.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

### `npm run format`

Formats the all the files in the project with Prettier - Code Formatter.

### `npm run storybook`

Launches Storybook for the React UI Components.\
Open [http://localhost:6006](http://localhost:6006) to view Storybook in the browser.

### `npm run build-storybook`

Builds a production ready, static version of your Storybook app to the `storybook-static` folder.
