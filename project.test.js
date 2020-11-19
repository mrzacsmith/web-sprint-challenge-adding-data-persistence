// 👉 You can run tests with `npm test`
// DO NOT CHANGE THIS FILE!
const request = require('supertest')
const server = require('./api/server')
const db = require('./data/dbConfig')
const Project = require('./api/project/model')
const Resource = require('./api/resource/model')
const Task = require('./api/task/model')

const projectA = {
  name: 'a', description: 'b',
}
const projectB = {
  name: 'c', description: 'd', completed: true,
}

beforeAll(async () => {
  await db.migrate.latest()
})
beforeEach(async () => {
  await db('tasks').truncate()
  await db('resources').truncate()
  await db('projects').truncate()
  await Project.insert(projectA)
  await Project.insert(projectB)
})

it('sanity check', () => {
  expect(true).not.toBe(false)
})

describe('server.js', () => {
  describe('-------------------- projects endpoints', () => {
    describe('[GET] /api/projects', () => {

    })
    describe('[POST] /api/projects', async () => {

    })
  })

  describe('-------------------- resources endpoints', () => {
    describe('[GET] /api/resources', () => {

    })
    describe('[POST] /api/resources', () => {

    })
  })

  describe('-------------------- tasks endpoints', () => {
    describe('[GET] /api/tasks', () => {

    })
    describe('[POST] /api/tasks', () => {

    })
  })
})
