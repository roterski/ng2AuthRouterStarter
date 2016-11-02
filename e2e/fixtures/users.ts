import { User } from '../stubs/user';
import uuid = require('node-uuid');

const TestUser = new User('test@e2e.test', 'password');

const generateNewTestUser= () => {
  return new User(`test-${uuid.v1()}@e2e.test`, 'password');
}

export { TestUser, generateNewTestUser };
