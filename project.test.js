// 👉 You can run tests with `npm test`
// DO NOT CHANGE THIS FILE!
const request = require('supertest')
const server = require('./api/server')
const db = require('./data/dbConfig')
const Project = require('./api/project/model')
const Resource = require('./api/resource/model')
const Task = require('./api/task/model')

const projectA = { name: 'Web API', description: 'Build APIs' }
const projectB = { name: 'Databases', description: 'Learn SQL', completed: true }
const projectC = { name: 'Authentication' }

const resourceA = { name: 'keyboard' }
const resourceB = { name: 'computer', description: 'Windows PC' }

beforeAll(async () => {
  await db.migrate.latest()
})

it('sanity check', () => {
  expect(true).not.toBe(false)
})

describe('server.js', () => {
  describe('-------------------- projects endpoints', () => {
    beforeEach(async () => {
      await db('projects').truncate()
      await db('projects').insert(projectA)
      await db('projects').insert({ ...projectB, completed: 1 })
    })
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
      it('responds with the newly created project', async () => {
        await db('projects').truncate()
        const res = await request(server).post('/api/projects').send(projectA)
        expect(res.body).toMatchObject({ ...projectA, completed: false })
      })
      it('rejects projects lacking a description with an error status code', async () => {
        await db('projects').truncate()
        const res = await request(server).post('/api/projects').send({})
        const projects = await db('projects')
        expect(res.status + '').toMatch(/4|5/)
        expect(projects).toHaveLength(0)
      })
    })
  })

  describe('-------------------- resources endpoints', () => {
    beforeEach(async () => {
      await db('resources').truncate()
      await db('resources').insert(resourceA)
      await db('resources').insert(resourceB)
    })
    describe('[GET] /api/resources', () => {
      it('can get all resources', async () => {
        const res = await request(server).get('/api/resources')
        expect(res.body).toHaveLength(2)
        expect(res.body[0]).toMatchObject(resourceA)
        expect(res.body[1]).toMatchObject(resourceB)
      })
    })
    describe('[POST] /api/resources', () => {
      it('can add a new resource to the db', async () => {
        await db('resources').truncate()
        await request(server).post('/api/resources').send(resourceA)
        await request(server).post('/api/resources').send(resourceB)
        const resources = await db('resources')
        expect(resources).toHaveLength(2)
        expect(resources[0]).toMatchObject(resourceA)
        expect(resources[1]).toMatchObject(resourceB)
      })
      it('responds with the newly created resource', async () => {
        await db('resources').truncate()
        const res = await request(server).post('/api/resources').send(resourceA)
        expect(res.body).toMatchObject(resourceA)
      })
      it('rejects a resource with an existing name with an error status code', async () => {
        const res = await request(server).post('/api/resources').send(resourceA)
        const resources = await db('resources')
        expect(res.status + '').toMatch(/4|5/)
        expect(resources).toHaveLength(2)
      })
    })
  })

  describe('-------------------- tasks endpoints', () => {
    describe('[GET] /api/tasks', () => {

    })
    describe('[POST] /api/tasks', () => {

    })
  })
})
