# Codegrade Setup

This is the solution repo for [Adding Data Persistence](https://github.com/LambdaSchool/web-sprint-challenge-adding-data-persistence) Sprint Challenge Submission.

Whenever setting up a Codegrade assignment or importing settings from another assignment:

1. Make sure that rubrics, fixtures and scripts match the ones in **this repo**.
2. Re-upload to Codegrade any items that don't match exactly the ones in this repo.
3. Run tests locally, and push an empty commit to Codegrade to verify that this repo passes all tests.

## 1- Fixtures

### Student-Facing

- [codegrade_mvp.test.js](./codegrade_mvp.test.js)

### Non-Student-Facing

- [codegrade_mvp.test1.js](./codegrade_mvp1.test.js)

## 2- Global Setup Script

```bash
cg-jest install
```

## 3- Per-Student Setup Script

```bash
mv $FIXTURES/* . && npm install
```

## 4- Auto Tests

### Learner-Facing - Weight 99

```bash
NODE_ENV=testing cg-jest run -- codegrade_mvp.test.js --runInBand --forceExit
```

### Non-Learner-Facing - Weight 1

```bash
NODE_ENV=testing cg-jest run -- codegrade_mvp1.test.js --runInBand --forceExit
```

## 5- Rubric

### Auto Tests (8 points)

>Automatic tests are run against your branch, to check how closely your work matches specification.
There is a copy of the tests inside the `codegrade_mvp.test.js` file, at the root of the project.
You can execute those tests in your local machine by running `npm test`.
It is crucial that test your API manually using HTTPie or Postman, and troubleshoot using log statements or the debugger.
Do not rely on the automatic tests alone to check your progress!

### Intro to Relational Databases

>Use Knex to perform CRUD operations on a single table.

| Grade         | Points | Description |
|---------------|:------:|-------------|
| Not Yet       | 0      | Student's API does not exist or does not persist data from CRUD operations to the database. |
| Met           | 1      | Student's API has endpoints that perform CRUD operations and persist data to the database. |
| Flying Colors | 2      | Student's API uses access methods to separate database code from router code. |

### Database Schema Design

>Write migrations to generate database schemas.

| Grade         | Points | Description |
|---------------|:------:|-------------|
| Not Yet       | 0      | Migrations do not exist or the data types and/or constraints used do not reflect the README requirements. |
| Met           | 1      | Migrations reflect the model as outlined in the README, and include a down function to undo the changes. |
| Flying Colors | 2      | NPM scripts exist inside `package.json` that can be used to run and roll back the migrations. |

### Multi-Table Queries

>Use Knex to work with data from multiple tables.

| Grade         | Points | Description |
|---------------|:------:|-------------|
| Not Yet       | 0      | No queries that join tables exist in the project. |
| Met           | 1      | The `[GET] /api/tasks` endpoint returns JSON obtained by joining the `tasks` and `projects` tables. |

### Data Modeling

>Design normalized data model according to client requirements.

| Grade         | Points | Description |
|---------------|:------:|-------------|
| Not Yet       | 0      | Migrations do not create the connecting table `project_resources` or do it incorrectly. |
| Met           | 1      | Connecting table `project_resources` exists and has a primary key and proper foreign keys to `projects` and `resources`. |

### Code Quality

>Write code that is straightforward and easy to follow.

| Grade         | Points | Description |
|---------------|:------:|-------------|
| Not Yet       | 0      | The code is difficult to read and formatted poorly. |
| Met           | 1      | The code is easy to read, properly formatted but does not use middleware functions so it could be made DRYer. |
| Flying Colors | 2      | Middleware functions are used to handle edge cases and errors, making the code very DRY. |
