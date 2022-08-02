import { Router } from 'express';

export const routes = Router();

routes.get('/', (_, res) => {
  res.json({ success: true, message: 'I"m OK' });
});

routes.get('/health', (_, res) => {
  res.json({ success: true, message: `I"m OK here. Now: ${new Date().toISOString()}` });
});
