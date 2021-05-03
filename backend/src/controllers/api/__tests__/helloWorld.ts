import request from 'supertest';
import app from '../../../app';

describe('GET /', () => {
  it('should return hello world', async () => {
    const response = await request(app).get('/').send();
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World');
  });
});
