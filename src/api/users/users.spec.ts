import request from 'supertest';
import { app } from '../../index';
import { Response } from 'supertest';

describe('Users module', () => {
  it('should return all users by GET method', async () => {
    await request(app)
      .get('/api/users')
      .send()
      .then((res: Response) => {
        expect(res.status).toBe(200)
        expect(res.body).toStrictEqual([])
      })
  });
});