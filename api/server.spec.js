const request = require('supertest');

const server = require('./server.js');
const db = require('../data/dbConfig.js');


describe('the server', () => {

  beforeEach(async () => {
    // what do we want?
    await db('hobbits').truncate();
  });

  describe('GET /', () => {
    it('should run the testing env', () => {
      expect(process.env.DB_ENV).toBe('testing');
    });

    it('should return status 200', () => {
      return request(server)
        .get('/');
      expect(res.status).toBe(200);
    });
  });

    it('should return the corrct object', () => {
      return request(server)
      .get('/')
      .then(res => {
        expect(res.type).toBe('application/json');
        // When is not a primitive type use toEqual instead of toBe
        expect(res.body).toEqual({ api: 'up' });
      });
    });

  describe('GET /hobbits', () => {
    it('should return list of hobbits', () => {
      return request(server)
      .get('/hobbits')
      .then(res => {
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        expect(res.body.length).toBe(0);
      
      });
    });
  });

});