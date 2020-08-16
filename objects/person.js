const person = {
    name: ['luke', 'howsam'],
    age: 21,
    gender: 'male',
    interests: ['music', 'web development'],
    bio: () => {
        console.log(
            this.name[0] +
                ' ' +
                this.name[1] +
                ' is' +
                this.age +
                ' years old. He likes',
            this.interests[0] + '.'
        );
    },
    greeting: () => {
        console.log("Hi, I'm " + this.name[0] + '.');
    },
};



console.log(person.name); 
console.log(person.name[0])
console.log(person.age) 
console.log(person.interests[1]); 
// console.log(person.bio()) 
// console.log(person.greeting())