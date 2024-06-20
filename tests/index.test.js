const request = require('supertest');
const app = require('../server');


describe('Test the users API', () => {

    it('GET /hello should return Hello Jest', async () => {
        const response = await request(app).get('/hello');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Hello Jest2!');
    });
});