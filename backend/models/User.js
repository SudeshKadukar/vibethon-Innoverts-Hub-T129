// User model placeholder
// In production, this would use Mongoose/Sequelize with a real database

class User {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password; // Should be hashed in production
    this.createdAt = new Date().toISOString();
    this.xp = 0;
    this.level = 'Beginner';
    this.completedModules = [];
    this.badges = [];
  }
}

module.exports = User;
