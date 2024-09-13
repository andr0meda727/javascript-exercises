const findTheOldest = function(people) {
    people.map(inputPersonAgeIntoObject)
    function inputPersonAgeIntoObject(person) {
        if (person.yearOfDeath) {
            person["age"] = `${person.yearOfDeath - person.yearOfBirth}`;
        }
        else {
            person["age"] = `${new Date().getFullYear() - person.yearOfBirth}`;
        }
    }

    let greatestAge = 0;
    for (let person of people) {
        if (Number(person.age) > Number(greatestAge)) {
            greatestAge = person.age;
        }
    }
    

    return people.find(person => person.age == greatestAge);
};

// Do not edit below this line
module.exports = findTheOldest;
