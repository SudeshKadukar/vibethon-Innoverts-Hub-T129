export const quizData = [
  {
    id: 1,
    question: 'What does "supervised learning" mean?',
    options: [
      'Learning without any data',
      'Learning from labeled examples',
      'Learning from rewards and punishments',
      'Random guessing'
    ],
    correctIndex: 1,
    explanation: 'Supervised learning uses labeled data—input-output pairs—to train a model.'
  },
  {
    id: 2,
    question: 'Which is an example of unsupervised learning?',
    options: [
      'Image classification',
      'Spam filtering',
      'Customer segmentation',
      'Predicting house prices'
    ],
    correctIndex: 2,
    explanation: 'Customer segmentation clusters data without predefined labels.'
  },
  {
    id: 3,
    question: 'What is the purpose of an activation function in neural networks?',
    options: [
      'To store data',
      'To introduce non-linearity',
      'To reduce the learning rate',
      'To normalize inputs'
    ],
    correctIndex: 1,
    explanation: 'Activation functions introduce non-linearity, enabling networks to learn complex patterns.'
  },
  {
    id: 4,
    question: 'What does overfitting mean?',
    options: [
      'Model performs well on training data but poorly on new data',
      'Model is too simple',
      'Model has no parameters',
      'Model ignores training data'
    ],
    correctIndex: 0,
    explanation: 'Overfitting occurs when a model memorizes training data rather than generalizing.'
  }
];
