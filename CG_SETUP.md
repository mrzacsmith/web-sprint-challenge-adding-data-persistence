# Codegrade Setup

This is the solution repo for [Adding Data Persistence](https://github.com/LambdaSchool/web-sprint-challenge-adding-data-persistence) Sprint Challenge Submission.

If you make changes to this project, please go through this checklist:

1. Make sure that all tests are passing in your local.
2. Upload the updated fixtures to your template Codegrade assignment.
3. Notify the changes to fellow staff in the appropriate channels.

## Fixtures

1. `codegrade_mvp.test.js`
2. `jest.config.js`

## Global setup script to run

```bash
cg-jest install
```

## Per-student setup script to run

```bash
mv $FIXTURES/* . && npm install
```

## Program to test

```bash
NODE_ENV=testing cg-jest run -- codegrade_mvp.test.js --runInBand --forceExit
```

## Rubric

### Auto Tests (9 points)

>Automatic tests are run against your branch, to check how closely your work matches specification.
There is a copy of the tests inside the `codegrade_mvp.test.js` file, at the root of the project.
You can execute those tests in your local machine by running `npm test`.
It is crucial that test your API manually using HTTPie or Postman, and troubleshoot using log statements or the debugger.
Do not rely on the automatic tests alone to check your progress!

### Intro to Relational Databases

_Use Knex to perform CRUD operations on a single tables._

| Grade         | Points | Description |
|---------------|:------:|-------------|
| Not Yet       | 0      | Student's API does not exist or does not persist data from CRUD operations to the database. |
| Met           | 1      | Student's API has endpoints that perform CRUD operations and persist data to the database. |
| Flying Colors | 2      | Student's API uses access methods to separate database code from router code. |

### Database Schema Design

_Write migrations to generate database schemas._

| Grade         | Points | Description |
|---------------|:------:|-------------|
| Not Yet       | 0      | Migrations do not exist or the data types and/or constraints used do not reflect the README requirements. |
| Met           | 1      | Migrations reflect the model as outlined in the README, and include a down function to undo the changes. |
| Flying Colors | 2      | NPM scripts exist inside `package.json` that can be used to run and roll back migrations. |

### Multi-Table Queries

_Use Knex to work with data from multiple tables._

| Grade         | Points | Description |
|---------------|:------:|-------------|
| Not Yet       | 0      | No queries that join tables exist in the project. |
| Met           | 1      | The `[GET] /api/tasks` endpoint returns JSON obtained by joining the `tasks` and `projects` tables. |

### Data Modeling

_Design normalized data model according to client requirements._

| Grade         | Points | Description |
|---------------|:------:|-------------|
| Not Yet       | 0      | Migrations do not create the connecting table `project_resources` or it does it incorrectly. |
| Met           | 1      | Connecting table `project_resources` exists and has a primary key made of one or more columns, and foreign keys. |

### Code Quality

_Write code that is straightforward and easy to follow._

| Grade         | Points | Description |
|---------------|:------:|-------------|
| Not Yet       | 0      | The code is difficult to read, or not DRY, or formatted poorly. |
| Met           | 1      | The code is easy to read, DRY and properly formatted, but does not use middleware functions. |
| Flying Colors | 2      | The code is easy to read and middlware functions are used to handle edge cases and errors. |
