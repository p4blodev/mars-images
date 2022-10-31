
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## How to setup your local enviroment

> You must have Nodejs installed in your computer (14 or higher)
>
> You must generate an api key here https://api.nasa.gov/ . *You will need this api key tu setup later.*

1. CLone repository
2. Navigate to proyect's folder. eg: `user/projects/southern-challenge`
3. Inside southern-challenge folder create a new file called `.env`
   1. Create key named `REACT_APP_NASA_API_KEY` and set it up with the value of de api key generated previously.
   2. Create key named: `REACT_APP_BASE_URL` and set it up with: `https://api.nasa.gov/mars-photos/api/v1/rovers/`
   3. In your terminal run the following commands:
      1. `npm install`
      2. `npm start`
      3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser



## Available Scripts

In the project directory, you can run:

- `predeploy`: reserved to deploy app
- `deploy`: reserved to deploy app
- `build`: build app
- `lint:fix`: run linter and fix warnings and erros
- `lint`: run linter
- `predeploy`: run build command. This command is neccesary for deploy in guthub
- `start`: start app en dev mode
- `test:coverage`: run unit test and generate coverage report
- `test`: run unit test

