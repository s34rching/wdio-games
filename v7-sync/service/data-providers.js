import Chance from 'chance';
const chance = new Chance();

export const generateUserData = () => (
  {
    firstName: chance.first(),
    lastName: chance.last(),
    email: `user_${Date.now()}@gmail.com`,
    message: chance.sentence()
  }
)
