const request = require('supertest');
const app = require('./app'); // assuming your main file is named app.js

describe('Factorial Calculator API', () => {
  
  test('GET / should return Hello World', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello World');
  });

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
