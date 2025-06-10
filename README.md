# NgUserCreation

UI elements created with [PrineNG](https://primeng.org/)
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.13.

## Your goal
It’s a code challenge small enough so it can be solved without investing too much time, but complex enough to give us some hints on your thinking process, problem-solving, testing, and software engineering skills.
You must solve the next exercises using Angular (Typescript). Your objective is to demonstrate your ability to develop efficient, readable and maintainable solutions using only Angular and Typescript.
You are completely free to use third-party libraries for application development (functionality or styles) or for Unit Tests.

## What will be evaluated

### Documentation
The right amount of documentation is the one that explains what a project does, how to operate and why certain choices were made. For this test, also write down what’s left to improve and why.

### Web Standards
We believe in writing accessible web pages that conform to the HTML and CSS spec.
Code Architecture
Code should be easy to read and change. Complexity is more often than not necessary, and choosing the right abstraction is vital to keep a healthy codebase.

### Test Coverage
No project can be defined ready for production without a suite of tests that verifies its operating as expected. Our approach is to write code that is easy to test in isolation. This will allow easier composability.

### Design and Responsible
Our approach to design goes back to our belief in an accessible web. It provides a functional user interface, enhanced by thoughtful user experience.

### Extra Mile Bonus (not a requirement)
In addition to the above, time permitting, consider the following suggestions for taking your implementation a step further:
- Application logging and metrics
- CI/CD
- Pattern
- i18n
- Etc.

## Test
The application should allow a customer to:
- Create a new user (username, password, date-expiration and if it’s enabled or not).
- Check the current users that are registered.
Example of layout:

![image](https://github.com/user-attachments/assets/182e8107-69a6-46fa-9666-1daa98faa2be)

## Initial thoughts on requirements as Angular Developer (Me =D)
### Documentation
*To document this I would use JSONDoc format for every method. Methods that contain business logic should include also Aceptance criteria information.
A changelog should be created following changes described on every version. Also [Compodoc](https://www.npmjs.com/package/@compodoc/compodoc) may help on complex scenarios.*

### Web Standards
*Even on a simple scenarios I preffer to use Domain Drive Design principles on every project. In spite of being more a Backend approach, it bring some advantages to Frontend i.e: define Data Transfers Object for models required to communicate with Endpoints and keep them separate from real "Domain Object" that will be used to represent this data into the UI.
Regarding project folder structure I always follow angular convention (https://angular.dev/style-guide)*

### Test Coverage
*Current Angular version should use Jest instead of Jasmine. I would create at least one test for every method. If the method implements some Acceptance Criteria, all scenarios should be covered.
E2E Testing: I will use Cypress and create at least minimun ammount of tests for happy paths and Acceptance Criteria scenarios.*

### Design and Responsible
*I recently discovered PrimeNg and still learning about this libraries. Seems to have some issues on complex UI components like Toast, but the library classes works pretty well and are easy to read (grid system follows same convention as Bootstrap). For responsiveness, if posible I preffer to use new display:grid css native styling: (https://www.w3schools.com/css/css_grid.asp).*

### Extra Mile Bonus
- *Application logging and metrics: Not big experience here more than basic Google Analytic usage and the create of custom Logger services.*
- *CI/CD: again, no experiences configuring CI/CD. Most of the time I consume or follow the required steps to make deployements but rely on a DevOps mate =P.*
- *Pattern: Redux like state management is a must =). There is a nice implementation using signals presented by Deborah Kurata (https://www.youtube.com/watch?v=rHQa4SpekaA&ab_channel=DeborahKurata). This keeps the component responsibilities as low as possible and rely on computed signals that are directly referenced by the service to update views.*
- *i18n: little experience here but latest I tried was [Transloco] (https://github.com/jsverse/transloco).*

## Test Approach
  - *1. First step will include create the main components and form page using PrimeNg.*
  - *2. Then create a ReactiveForm to connect the UI fields (I was aksed to create custom validator).*
  - *3. Create a State Service which stores the state of the form and exposed computed signals for every slice.*
  - *4. Create a component table that list the created user. It will be linked to a computed signal in the State Service (Array of users).*
  - *5. Create a method that adds a new user into the state (Array of users) at State Service level that will be called by the component when "Save" button is pressed (ngSubmit)*
  - *6. Add any extra validation like table items limit.*
  - *7. Create unit tests for Custom Validators and Submit method and basic e2e to tests for happy paths.*


## Installation
To install package dependencies, run:

```bash
npm i
```

## Run Development server

To start a local development server, run:

```bash
npm run start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.
