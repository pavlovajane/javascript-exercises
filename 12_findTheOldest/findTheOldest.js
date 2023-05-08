const people = [
    {
        name: "Carly",
        yearOfBirth: 2018,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

function getAge(person) {

    if ("yearOfDeath" in person)
        yearOfDeath = person.yearOfDeath;
    else
        yearOfDeath = new Date(Date.now()).getFullYear();
        

    yearOfBirth = person.yearOfBirth;

    return Number(yearOfDeath - yearOfBirth)
}

const findTheOldest = function(people) {
    
    initialValue = people[0];
    return people.reduce(
        (accumulator, currentValue) => {

            agePrev = getAge(accumulator);
            ageCurrent = getAge(currentValue);

            if (ageCurrent > agePrev)
                return currentValue;
            return accumulator

        }, initialValue
    );
};
console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
