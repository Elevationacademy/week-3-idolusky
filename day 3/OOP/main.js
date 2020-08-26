// class animal {
//     constructor(name, numOfLegs) {
//         this.name = name
//         this.numOfLegs = numOfLegs
//         this.children = []
//     }
//     giveBirth(name) {
//         this.children.push(name)
//     }
// }


// const dog = new animal("jojo", 4)


// class human {

//     constructor(name, age, isFriendly) {
//         this.name = name
//         this.age = age
//         this.isFriendly = isFriendly

//     }
// }

// const h1 = new human("tal", 30, true)

// console.log(`${h1.name}, who is ${h1.age} years old , is ${h1.isFriendly ? 'friendly' : 'not friendly'}`);

// dog.giveBirth("maya")
// console.log(dog.children);


// class Vehicle {

//     constructor(x, y, speed, fuel) {
//         this.x = x;
//         this._speed = speed;
//         this.y = y;
//         this._fuel = fuel
//         Vehicle.carsSold++;
//     }
//     static getInfo() {
//         console.log(`we've sold ${Vehicle.carsSold} Vehicles`);
//     }
//     static calculateMoney() {
//         console.log(`made ${Vehicle.carsSold * 30000}`);
//     }

//     set speed(speed) {
//         if (speed < 0) {
//             return console.log("speed must be postive")
//         }
//         this._speed = speed
//     }
//     get speed() {
//         return this._speed
//     }
//     set fuel(amount) {
//         if (amount < 0) {
//             return console.log("put some gas in dis bitch");
//         }
//         if (amount > 150) {
//             return console.log(("too much gas in dis motherfucker"));
//         }
//         this._fuel = amount
//     }
//     get fuel() {
//         return this._fuel
//     }
// }
// Vehicle.carsSold = 0;

// const ferarri = new Vehicle(5, 12, 250)
// const mustang = new Vehicle(8, 10, 240)

// Vehicle.getInfo()
// Vehicle.calculateMoney()

// const c = new Vehicle()
// c.x = 3
// c.y = 1
// // c.speed = -2 // at this point, we'll get the console log saying speed needs to be positive
// // console.log(c.speed) // prints undefined

// c.speed = 10
// console.log(c.speed)

// c.fuel = -1
// console.log(c.fuel);




