
const name="Deekshita"
const repoCount=50

//console.log(name+repoCount+"Value");

console.log('Hello my name is ${name}and my repo count is $ {repoCount}');
const gameName=new String('Deekshu')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.topperCase());
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('t'));  //t is at which index position

const newString=gameName.substring (0,4)
console.log(newString);//first methode in string



const anotherString=gameName.slice(-8,4)
console.log(anotherString);
//2nd methode of string


const newStringOne="  Deekshu  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https//hitesh.com/hitesh%20chowdhary"

console.log(url.replace('%20','-'))
console.log(url.includes('sundar'))
console.log(gameName.split(--)); 


