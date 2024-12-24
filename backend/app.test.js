const request = require('supertest');
const app = require('./index'); 

describe('API Tests', () => {
  afterAll((done) => {
    // Close the server after all tests are done
    server.close(done);
  });

describe('Factorial Calculator API', () => {
  
  test('GET /factorial/5 should return 120', async () => {
    const response = await request(app).get('/factorial/5');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({factorial: 120});
  });

  test('GET /factorial/0 should return 1', async () => {
    const response = await request(app).get('/factorial/0');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({factorial: 1});
  });

  test('GET /factorial/-1 should return 400 error', async () => {
    const response = await request(app).get('/factorial/-1');
    expect(response.statusCode).toBe(400);
    expect(response.text).toBe('Please enter a positive number');
  });

  test('GET /factorial/abc should return 400 error', async () => {
    const response = await request(app).get('/factorial/abc');
    expect(response.statusCode).toBe(400);
    expect(response.text).toBe('Please enter a positive number');
  });
});
