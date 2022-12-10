import request from 'supertest';
import app from '../../src/api';

describe("myApp", () => {
  it('should implement CORS', async() => {
    const { headers } = await request(app).get('/');
    expect(headers['access-control-allow-origin']).toEqual('*');
    expect(headers['access-control-allow-methods']).toEqual('*');
    expect(headers['access-control-allow-headers']).toEqual('*');
  });
});