const express = require('express');
const router = express.Router();

// GET all modules
router.get('/', (req, res) => {
  const modules = [
    {
      id: 'intro-ai',
      title: 'Introduction to AI',
      description: 'Learn the basics of Artificial Intelligence and its real-world applications.',
      difficulty: 'Beginner',
      progress: 100,
      icon: 'Brain',
      lessons: ['What is AI?', 'History of AI', 'Types of AI', 'AI vs ML vs DL']
    },
    {
      id: 'supervised-learning',
      title: 'Supervised Learning',
      description: 'Understand how machines learn from labeled data to make predictions.',
      difficulty: 'Beginner',
      progress: 45,
      icon: 'Target',
      lessons: ['Regression', 'Classification', 'Decision Trees', 'Evaluation Metrics']
    },
    {
      id: 'neural-networks',
      title: 'Neural Networks',
      description: 'Explore the foundations of deep learning and brain-inspired computing.',
      difficulty: 'Intermediate',
      progress: 10,
      icon: 'Cpu',
      lessons: ['Perceptrons', 'Activation Functions', 'Backpropagation', 'CNNs']
    },
    {
      id: 'computer-vision',
      title: 'Computer Vision',
      description: 'Enable machines to see and interpret the visual world.',
      difficulty: 'Advanced',
      progress: 0,
      icon: 'Eye',
      lessons: ['Image Processing', 'Feature Extraction', 'Object Detection', 'GANs']
    }
  ];
  res.json(modules);
});

// GET single module by id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  // In a real app, look up from DB
  res.json({ id, message: `Details for module: ${id}` });
});

module.exports = router;
