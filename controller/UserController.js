const UserRepository = require('../repository/UserRepository');

class UserController {
  static async getAll(req, res) {
    const users = await UserRepository.findAll();
    res.json(users);
  }

  static async getById(req, res) {
    const user = await UserRepository.findById(req.params.id);
    if (!user) {
        res.status(404).send();
      } else {
        res.json(user);
      }
    }
   
    static async create(req, res) {
      const user = await UserRepository.create(req.body);
      res.status(201).json(user);
    }
   
    static async update(req, res) {
      const user = await UserRepository.update(req.params.id, req.body);
      if (!user) {
        res.status(404).send();
      } else {
        res.json(user);
      }
    }
   
    static async delete(req, res) {
      await UserRepository.delete(req.params.id);
      res.status(204).send();
    }
}

module.exports = UserController;