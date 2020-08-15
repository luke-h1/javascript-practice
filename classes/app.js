class Computer { 
  constructor(make, model, age){
    this.make = make; 
    this.model = model; 
    this.age = new Date(age); 
  }

  description(){
    return `${make}, ${model}, ${age}`; 
  }

  newComputer(newMake, newModel, newAge){
    this.make = newMake; 
    this.model = newModel; 
    this.age = newAge; 
    return `${this.make}, ${this.model}, ${this.age}`
  }

  greeting(user){
    return `hello ${user} !, you have a ${this.make}, ${this.model} which is ${this.age} yrs old`
  }
}

const i = new Computer('Apple', 'MBP 2019', "2019-01-01")
console.log(i);

console.log(i.newComputer('Apple', 'MBP 2020', '2020-01-01')) 


console.log(i.greeting('luke'))