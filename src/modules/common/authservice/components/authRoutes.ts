// src/modules/common/authservice/components/authRoutes.ts
import { Router } from 'express';

const router = Router();

// Example route
router.post('/auth/login', (req, res) => {
  res.json({ message: 'Login successful' });
});

// Export router
export default router;
