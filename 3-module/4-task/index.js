function showSalary(users, age) {
  const filteredUsers = users.filter(user => (user.age <= age))
                              .map(({name, balance}) => ({name, balance}));
  return filteredUsers.map( user => Object.values(user).join(', '))
                      .join('\n');
}
