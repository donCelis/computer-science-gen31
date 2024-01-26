function createUser(user, username = 'Juan') {
  console.log(username);
  return {
    ...user,
    name: username,
    id: Math.random() * 100,
  };
}

const DEFAULT_USER_NAME = 'Karen';

export default createUser;
export { DEFAULT_USER_NAME, createUser };
// module.exports = createUser;