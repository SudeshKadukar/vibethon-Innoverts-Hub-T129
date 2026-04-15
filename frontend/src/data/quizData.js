export const quizData = [
  // 🟢 Basic Level
  {
    id: 1,
    level: 'Basic',
    question: 'What is Artificial Intelligence?',
    options: ['Human intelligence', 'Machine mimicking human intelligence', 'Programming language', 'Database system'],
    correctIndex: 1,
    explanation: 'AI refers to the simulation of human intelligence processes by machines, especially computer systems.'
  },
  {
    id: 2,
    level: 'Basic',
    question: 'Which type of ML uses labeled data?',
    options: ['Unsupervised Learning', 'Reinforcement Learning', 'Supervised Learning', 'Deep Learning'],
    correctIndex: 2,
    explanation: 'Supervised learning uses labeled training data — input-output pairs — to train a model.'
  },
  {
    id: 3,
    level: 'Basic',
    question: 'Which algorithm is used for regression?',
    options: ['KNN', 'Linear Regression', 'K-Means', 'Apriori'],
    correctIndex: 1,
    explanation: 'Linear Regression is the standard algorithm for predicting continuous numerical values.'
  },
  {
    id: 4,
    level: 'Basic',
    question: 'What is a feature in machine learning?',
    options: ['Output variable', 'Input variable', 'Model', 'Algorithm'],
    correctIndex: 1,
    explanation: 'A feature is an individual measurable input variable used by the model to make predictions.'
  },
  {
    id: 5,
    level: 'Basic',
    question: 'Overfitting means:',
    options: ['Model performs well on new data', 'Model performs well only on training data', 'Model is too simple', 'Model fails to train'],
    correctIndex: 1,
    explanation: 'Overfitting occurs when a model memorizes training data too well and fails to generalize to unseen data.'
  },
  // 🟡 Moderate Level
  {
    id: 6,
    level: 'Moderate',
    question: 'What is the purpose of cross-validation?',
    options: ['Increase data', 'Reduce bias', 'Evaluate model performance', 'Train faster'],
    correctIndex: 2,
    explanation: 'Cross-validation evaluates how well a model generalizes to an independent dataset by splitting data multiple ways.'
  },
  {
    id: 7,
    level: 'Moderate',
    question: 'Which metric is best for imbalanced data?',
    options: ['Accuracy', 'Precision/Recall', 'Mean', 'Variance'],
    correctIndex: 1,
    explanation: 'Accuracy can be misleading on imbalanced datasets. Precision and Recall give a clearer picture of performance for each class.'
  },
  {
    id: 8,
    level: 'Moderate',
    question: 'What does a confusion matrix show?',
    options: ['Model loss', 'Predictions vs actual values', 'Training time', 'Data size'],
    correctIndex: 1,
    explanation: 'A confusion matrix shows the count of correct and incorrect predictions against actual labels (TP, FP, TN, FN).'
  },
  {
    id: 9,
    level: 'Moderate',
    question: 'Random Forest is:',
    options: ['Single tree', 'Multiple decision trees', 'Clustering method', 'Neural network'],
    correctIndex: 1,
    explanation: 'Random Forest is an ensemble method that builds multiple decision trees and merges their outputs for better accuracy.'
  },
  {
    id: 10,
    level: 'Moderate',
    question: 'What is gradient descent used for?',
    options: ['Data cleaning', 'Model optimization', 'Feature selection', 'Visualization'],
    correctIndex: 1,
    explanation: 'Gradient descent is an optimization algorithm used to minimize the loss function by iteratively adjusting model parameters.'
  },
  {
    id: 11,
    level: 'Moderate',
    question: 'SVM is mainly used for:',
    options: ['Clustering', 'Classification', 'Sorting', 'Searching'],
    correctIndex: 1,
    explanation: 'Support Vector Machines (SVM) are primarily used for classification by finding the optimal hyperplane separating classes.'
  },
  {
    id: 12,
    level: 'Moderate',
    question: 'Normalization is used to:',
    options: ['Increase data', 'Scale features', 'Remove noise', 'Train faster'],
    correctIndex: 1,
    explanation: 'Normalization scales feature values to a common range (e.g., 0–1) so no single feature dominates due to scale differences.'
  },
  // 🔴 Advanced Level
  {
    id: 13,
    level: 'Advanced',
    question: 'What is L1 regularization also known as?',
    options: ['Ridge', 'Lasso', 'ElasticNet', 'Dropout'],
    correctIndex: 1,
    explanation: 'L1 regularization is called Lasso (Least Absolute Shrinkage and Selection Operator). It can shrink some coefficients to zero.'
  },
  {
    id: 14,
    level: 'Advanced',
    question: 'What does PCA do?',
    options: ['Increase dimensions', 'Reduce dimensions', 'Train model', 'Classify data'],
    correctIndex: 1,
    explanation: 'Principal Component Analysis (PCA) reduces the number of features while retaining the most important variance in the data.'
  },
  {
    id: 15,
    level: 'Advanced',
    question: 'Which activation function avoids vanishing gradient?',
    options: ['Sigmoid', 'Tanh', 'ReLU', 'Softmax'],
    correctIndex: 2,
    explanation: 'ReLU (Rectified Linear Unit) avoids the vanishing gradient problem because its gradient is 1 for positive inputs — no saturation.'
  },
  {
    id: 16,
    level: 'Advanced',
    question: 'CNN is mainly used for:',
    options: ['Text data', 'Image data', 'Audio data', 'Tabular data'],
    correctIndex: 1,
    explanation: 'Convolutional Neural Networks (CNN) excel at image data by learning spatial hierarchies of features through convolution layers.'
  },
  {
    id: 17,
    level: 'Advanced',
    question: 'RNN is best for:',
    options: ['Images', 'Sequential data', 'Tables', 'Graphs'],
    correctIndex: 1,
    explanation: 'Recurrent Neural Networks (RNN) are designed for sequential data like time series, text, or speech, where order matters.'
  },
  {
    id: 18,
    level: 'Advanced',
    question: 'What is dropout in neural networks?',
    options: ['Remove data', 'Remove neurons randomly during training', 'Stop training', 'Reduce dataset'],
    correctIndex: 1,
    explanation: 'Dropout is a regularization technique that randomly deactivates neurons during training to prevent overfitting.'
  },
  {
    id: 19,
    level: 'Advanced',
    question: 'What is the curse of dimensionality?',
    options: ['Too much data', 'Too many features causing poor performance', 'Less data', 'Fast training'],
    correctIndex: 1,
    explanation: 'The curse of dimensionality refers to the exponential increase in data needed as feature dimensions grow, causing sparsity and poor performance.'
  },
  {
    id: 20,
    level: 'Advanced',
    question: 'Ensemble learning means:',
    options: ['Single model', 'Combining multiple models', 'Removing data', 'Data scaling'],
    correctIndex: 1,
    explanation: 'Ensemble learning combines predictions from multiple models to improve accuracy and reduce variance compared to any single model.'
  },
  // 🔥 Bonus / Interview Level
  {
    id: 21,
    level: 'Expert',
    question: 'Transformer model uses:',
    options: ['CNN', 'RNN', 'Attention Mechanism', 'KNN'],
    correctIndex: 2,
    explanation: 'Transformer models use a self-attention mechanism to process all tokens in parallel, enabling better long-range dependency learning than RNNs.'
  },
  {
    id: 22,
    level: 'Expert',
    question: 'Model drift means:',
    options: ['Model improves', 'Model performance degrades over time', 'Model stops', 'Model resets'],
    correctIndex: 1,
    explanation: 'Model drift occurs when the statistical properties of input data change over time, causing the model\'s predictions to become less accurate.'
  },
  {
    id: 23,
    level: 'Expert',
    question: 'Precision formula:',
    options: ['TP / (TP + FN)', 'TP / (TP + FP)', 'TN / Total', 'FP / Total'],
    correctIndex: 1,
    explanation: 'Precision = TP / (TP + FP). It measures how many of the positively predicted instances are actually positive.'
  }
];
