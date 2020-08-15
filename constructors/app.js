function person(name, age){
  this.name = name; 
  this.age = age; 
  this.birthday = new Date(age); 
  this.calculateAge = () => { 
    const diff = Date.now() - this.birthday.getTime(); 
    const ageDate = new Date(diff); 
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }; 
}

const luke = new person('luke', '05-06-1999'); 
console.log(luke); 
console.log(luke.calculateAge())