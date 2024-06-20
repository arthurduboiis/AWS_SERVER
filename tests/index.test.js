const request = require('supertest');
const app = require('../server');


describe('Test the users API', () => {
    it('should add a new user', async () => {
        const response = await request(app)
            .post('/adduser')
            .send({ name: 'Test User', point: 5 });
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('User added...');
    });

    it('GET /hello should return Hello Jest', async () => {
        const response = await request(app).get('/hello');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Hello Jest2!');
    });
});