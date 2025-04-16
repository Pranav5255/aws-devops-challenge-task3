import express from 'express';
import SampleModel from '../model/schema.js'; // adjust the path as needed

const router = express.Router();

// Route to populate sample data
router.get('/populate', async (req, res) => {
  try {
    const sampleData = new SampleModel({
      name: "John Doe",
      email: "john@example.com",
      age: 25,
      isActive: true
    });

    const savedData = await sampleData.save();
    res.status(201).json(savedData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to populate sample data" });
  }
});

export default router;
