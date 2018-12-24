const login = require('./login');
const register = require('./register');
const getById = require('./movie/get-by-id');
const discover = require('./movie/discover');

module.exports = {
  login,
  register,
  movie: {
    getById,
    discover,
  },
};
