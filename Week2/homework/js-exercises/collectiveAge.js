'use strict'

const hackYourFutureMembers = [
    { name: 'Wouter', age: 33 },
    { name: 'Federico', age: 32 },
    { name: 'Noer', age: 27 },
    { name: 'Tjebbe', age: 22 },
  ];

const ages = hackYourFutureMembers.map(function(member){
    return member.age
})
const collectiveAge = ages.reduce(function(acc,member){
    return acc + member
},0);
console.log(`The collective age of the HYF team is: ${collectiveAge}`);
