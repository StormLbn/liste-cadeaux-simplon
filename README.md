# IDKDO (idées cadeau)

This is a small training project to learn **Angular** and API requests. It was done in pairs, during courses with the training organisation *Simplon*.

This app uses the ChatGPT API to generate a list of gift ideas depending on criteras such as age, gender and interests of the person.

**Using the app requires a valid OpenAI API key and credits.**

## Features

- Enter (or not) criteras such as gender, name, age and/or up to 3 interests to make a search
- Browse gift ideas with descriptions, price and auto-generated example pictures
- Save gift ideas for later - they appear at the bottom of the page, where they can also be deleted

## Technologies

- Angular 15
- JSON server

## How to run the app

This project isn't hosted online ; if you want to run it, you will have to clone the project and install it.

### Requirements :
- [Angular CLI](https://github.com/angular/angular-cli) version 15.1.2.
- [json-server](https://github.com/typicode/json-server/tree/v0) version V0.
- **A valid ChatGPT API key and available credits**


### Install and run the JSON server

Install json-server with terminal open in the `json` folder, then start it :
```bash
npm install json-server
npm start
```

Server runs on port 3000 ; raw data is available at http://localhost:3000/data


### Install and setup IDKDO

**You will need a valid OpenAI API key and credits available to make search.**
Copy your API key in `IDKDO/src/environments/environment.development.ts`.

With a terminal open in the `IDKDO` folder, install node modules then start the app :
```bash
npm install
ng serve
```

Application is then running on port 4200. Data from the JSON server appears as "favorites" at the bottom of the page.
