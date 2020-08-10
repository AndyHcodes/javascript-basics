const createPerson = (name, age) => {
  return {
    name: name,
    age: age,
  };
};

const getName = (object) => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  if (object[property]) {
    return true;
  } else {
    return false;
  }
};

const isOver65 = (person) => {
  return person.age > 65;
};

const getAges = (people) => {
  const mappedArr = people.map(function(person) {
    return person.age;
  });
  return mappedArr;
};

const findByName = (name, people) => {
  // if people contains the name shopw the appropriate object, i.e Jim or Marjorie
};

const findHondas = (cars) => {
  // Looking for the objects that comtain Honda so will need to map with object / cars the return objects with Honda
};

const averageAge = (people) => {
  // need to map people then average the values of the ages extracted
  // This should be the same as get ages with an additional function to average the ages
};

const createTalkingPerson = (name, age) => {
  // return name and age then add to string which introduces
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson,
};
