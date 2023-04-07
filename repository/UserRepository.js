const User = require('../models/User');

class UserRepository {
  static async findAll() {
    return User.findAll();
  }

  static async findById(id) {
    return User.findByPk(id);
  }

  static async create(user) {
    return User.create(user);
  }

  static async update(id, user) {
    await User.update(user, { where: { id } });
    return User.findByPk(id);
  }

  static async delete(id) {
    return User.destroy({ where: { id } });
  }
}

module.exports = UserRepository;
