# Adding Data Persistence Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Data Persistence**. During this sprint, you studied **RDBMS, including SQL, multi-table queries, and data modeling**. In your challenge this week, you will demonstrate your mastery of these skills by creating **a database based on given specifications**.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

_You have **three hours** to complete this challenge. Plan your time accordingly._

## Introduction

In this project you will be given a set of requirements and must design a database to satisfy them. As a part of this process you'll also build an API with endpoints to access the data.

### Entities

A `project` is what needs to be done. We want to store the following data about a `project`:

- [ ] `id` - a unique ID.
- [ ] `name` - this column is required.
- [ ] `description` - optional.
- [ ] `completed` - a boolean that indicates if the project has been completed. This column cannot be `NULL`, the default value should be `false`.

A `resource` is anything needed to complete a project, some examples are: a person, a tool, a meeting room or a software license. We want to store the following data about a `resource`:

- [ ] `id` - a unique ID.
- [ ] `name` - this column is required.
- [ ] `description` - optional.

The database should not allow resources with duplicate names.

A `task` is one of the steps needed to complete the project. We want to store the following data about an `task`.

- [ ] `id` - a unique ID.
- [ ] `description`  - of what needs to be done. This column is required.
- [ ] `notes` - optional, to add additional information.
- [ ] `completed` - a boolean that indicates if the task has been completed. This column cannot be `NULL`, the default value should be `false`.

### Commits

Commit your code regularly and meaningfully.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. Explain the difference between `Relational Databases` and `SQL`.

2. Why do tables need a `primary key`?

3. What is the name given to a table column that references the primary key on another table.

4. What do we need in order to have a _many to many_ relationship between two tables.

## Instructions

### Task 1: Project Set Up

- [ ] Create a forked copy of this project.
- [ ] Clone your OWN version of the repository. (Not Lambda's by mistake!)
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch.
- [ ] Push commits: git push origin `<firstName-lastName>`.

### Task 2: Project Requirements

Your finished project must include all of the following requirements:

- [ ] Design the data model and use _knex migrations_ to create the database and tables needed to satisfy the following business rules:
  - [ ] a `project` can have multiple `tasks`.
  - [ ] a `task` belongs to only one `project`.
  - [ ] a `project` can use multiple `resources`. Example of `resources` are: computer, conference room, microphone, delivery van.
  - [ ] the same `resource` can be used in multiple `projects`.
  - [ ] when adding `projects` the client must provide a name, the description is optional.
  - [ ] when adding `resources` the client must provide a name, the description is optional.
  - [ ] when adding a `task` the client must provide a description, the notes are optional.
  - [ ] when adding a `task` the client must provide the `id` of an existing project.
  - [ ] for `projects` and `tasks` if no value is provided for the `completed` property, the API should provide a default value of `false`.
- [ ] Build an API with endpoints for:
  - [ ] adding resources.
  - [ ] retrieving a list of resources.
  - [ ] adding projects.
  - [ ] retrieving a list of projects.
  - [ ] adding tasks.
  - [ ] retrieving a list of tasks by project id. **The list of tasks should include the project name and project description**.

In your solution, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3: Stretch Goals

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

- [ ] Add an endpoint to get a list of project resources.
- [ ] Add an endpoint to get a list of project tasks.
- [ ] Add an endpoint to see all projects using a particular resource.
- [ ] Add support for assigning `resources` directly to `tasks` in addition to adding them to `projects`

## Submission format

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge `<firstName-lastName>` Branch into `main` (student's Repo). **Please don't merge your own pull request**
