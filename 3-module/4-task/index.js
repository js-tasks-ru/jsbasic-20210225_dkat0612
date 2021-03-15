function showSalary(users, age) {
  return users.filter(user => (user.age <= age))
                              .map(({name, balance}) => 
                              (Object.values({name, balance}).join(', ')))
                              .join('\n');
}
