// javascript
var counter = 3;

var counter = 5;
console.log(counter);
//ES6 newly it has let and const daatypes
const cantbe reinitialised
const array = ['suranya','vijaya'];
array = ['suranya'] // error, it wont allow
let a = 10;
let a = 18; // error we shouldnot reinitialise
for(var i = 1;i < 5; i++){
    console.log(i);
}
console.log(i); // it works fro var but not for let  var has global scope
concatination
var name = 'suranya';
console.log("my name is " + name); //js
let name = "suranya";
console.log('my name is ${name}'); //es
functions
function getBook(title, Author){
    return {
        title: title,
        Author: Author
    }
}
var a1 = getBook('Math', 'Suranta');
console.log(a1); // js
function getBook(title, Author){
        return {
            title,
            Author, // when both are the same  no need to assaign
        }
    }
    const a2 = getBook('Math', 'Suranta');
    console.log(a2); // es
object detection
var obj ={
    name : 'suranya',
    age : 25
};
var object = obj.name;
console.log(object);// js
var obje = {
    name : 'suranya',
    age : 25
};
const {name, age} = obje;
console.log(name, age);
const {name} = obje;
console.log(name);//es
functions
function sayname(){
    console.log("I am suranya");
}
var place = function(){
    console.log("iam from Murari");
};
sayname();
place();//js
const location = (location)=>{
    console.log('my location is ${location}');
}
location('Murari');// error function in es
var obj ={
        name : 'suranya',
        age : 25,
        sayName: function(){
            console.log("my name is " + this.name);
            var that = this;
            var sayage = function(){
                console.log("my name is " + that.name + " my age is " +  that.age);// this cant be assessed directly and can be done using that
            }
            sayage();
        }
    };
    obj.sayName();// another way of declaring in es
    var obj ={
        name : 'suranya',
        age : 25,
        sayName: function(){
            console.log("my name is " + this.name);
            var sayage = () => {
                console.log("my name is " + this.name + " my age is " +  this.age);// this cant be assessed directly and can be done using that
            }
            sayage();
        }
    };
    obj.sayName();// using error function we need not reference that by this

    function multiply(x,y ){
        var a = x || 1;
        var b = y || 1; // or operation
        console.log(a * b);
    }
    multiply(2,5);
    multiply();// both works //js
    const add  =(a = 1,b = 1)=>{
        console.log(a + b);
    } 
    add(3,10);
    add();//es
    const shoplist =['apple', 'banana', 'grape'];
    shoplist.forEach((item, index)=>{
        console.log(item + " " + index);
    });
    map gives a copy
    const newlist = shoplist.map(item =>{
        return item;
    });
    const newlist1 = shoplist.map(item =>{
        return item + "new ";
    });
    console.log(newlist);
    console.log(newlist1);
    const filterlist = shoplist.filter(item => {
        return item !== 'apple';
    });
    console.log(filterlist);//es
    function person(name,age,surname){
        this.name = name;
        this.age = age;
        this.surname = surname;
    }
    var suranya = new person('suranya', 20, 'sunkavilli');
    console.log(suranya);
    person.prototype.sayName = function(){
        console.log("I am " + this.name);
    }
    suranya.sayName();
    function sayBio(occupation, hobbies, name,age,surname){
        person.call(this,name,age,surname );
        this.occupation = occupation;
        this.hobbies = hobbies;
    }
    var s = new sayBio('student', 'gaming', 'suranya', 20, 'sunkavilli');
    console.log(s);//js
    class shoplist{
        constructor(items, number){
            this.items = items;
            this.number = number;
        }
        sayList(){
            console.log(this.items);
        }
    }
    const mylist = new shoplist(['pink', 'green', 'blue']);
    mylist.sayList();
    class product extends shoplist{
        constructor(items, number, amount, cost){
            super(items, number);
            this.amount = amount;
            this.cost = cost;
        }
    }
    const product1 = new product(['pink', 'green'], 2, 200, 2000);
    product1.sayList();
    console.log(product1);//es










