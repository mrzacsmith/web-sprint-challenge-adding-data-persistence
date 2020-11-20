// 👉 You can run tests with `npm test`
// DO NOT CHANGE THIS FILE!
const request = require('supertest')
const server = require('./api/server')
const db = require('./data/dbConfig')
const Project = require('./api/project/model')
const Resource = require('./api/resource/model')
const Task = require('./api/task/model')

const projectA = { name: 'a', description: 'b' }
const projectB = { name: 'c', description: 'd', completed: true }
const projectC = { name: 'e' }

beforeAll(async () => {
  await db.migrate.latest()
})
beforeEach(async () => {
  await db('tasks').truncate()
  await db('resources').truncate()
  await db('projects').truncate()
  await db('projects').insert(projectA)
  await db('projects').insert({ ...projectB, completed: 1 })
})

it('sanity check', () => {
  expect(true).not.toBe(false)
})

describe('server.js', () => {
  describe('-------------------- projects endpoints', () => {
    describe('[GET] /api/projects', () => {
      it('can get all projects', async () => {
        const res = await request(server).get('/api/projects')
        expect(res.body).toHaveLength(2)
      })
      it('sets the default completed to false', async () => {
        const res = await request(server).get('/api/projects')
        expect(res.body[0]).toMatchObject({ ...projectA, completed: false })
        expect(res.body[1]).toMatchObject(projectB)
      })
    })
    describe('[POST] /api/projects', async () => {
      it('can add a new project to the db', async () => {
        await db('projects').truncate()
        await request(server).post('/api/projects').send(projectA)
        await request(server).post('/api/projects').send(projectB)
        await request(server).post('/api/projects').send(projectC)
        const projects = await db('projects')
        expect(projects).toHaveLength(3)
        expect(projects[0]).toMatchObject({ ...projectA, completed: 0 })
        expect(projects[1]).toMatchObject({ ...projectB, completed: 1 })
        expect(projects[2]).toMatchObject({ ...projectC, description: null, completed: 0 })
      })
      it('responds with the newly created resource', async () => {
        await db('projects').truncate()
        const res = await request(server).post('/api/projects').send(projectA)
        expect(res.body).toMatchObject({ ...projectA, completed: false })
      })
      it('rejects projects lacking a description with a "client error" status code', async () => {
        await db('projects').truncate()
        const res = await request(server).post('/api/projects').send({})
        const projects = await db('projects')
        expect(res.status + '').toMatch(/4/)
        expect(projects).toHaveLength(0)
      })
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
