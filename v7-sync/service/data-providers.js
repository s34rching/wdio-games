const Chance = require('chance');
const chance = new Chance();

const generateUserData = () => (
  {
    firstName: chance.first(),
    lastName: chance.last(),
    email: `user_${Date.now()}@gmail.com`,
    message: chance.sentence()
  }
)

module.exports = { generateUserData };
