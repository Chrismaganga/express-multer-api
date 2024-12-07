import request from 'supertest';
import express from 'express';
import { router } from '../src/routes';

describe('Image API Routes', () => {
    const app = express();
    app.use('/api', router);

    it('should get all images', async () => {
        const response = await request(app).get('/api/images');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it('should reject upload without image', async () => {
        const response = await request(app)
            .post('/api/upload')
            .field('name', 'Test Image')
            .field('description', 'Test Description');
        
        expect(response.status).toBe(400);
    });
});
