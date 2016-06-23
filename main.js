//

function Animal(){
	this.hungry = true;
	this.eat = function(){
		this.hungry = false;
	}
	this.speak = function(){
		return this.says + '!';
	}
}

//

Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;

function Dog(){
	this.says = 'woof';
}

Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;

function Cat(){
	this.says = "meow";
}

dog = new Dog()
cat = new Cat()

console.assert(dog.speak() === 'woof!')
console.assert(cat.speak() === 'meow!')

//

function KeepSecret(secret){
	this.logSecret = function(){
		return secret;
	}
}

var secret = 'Bill Clinton DID have sexual relations with that woman!';
mySecret = new KeepSecret(secret);
console.assert(mySecret.logSecret() === secret);

//

function Key(){

}

function Safe(data, Key){
	this.unlock = function(attempt){
		if(attempt === Key){
			return data;
		}
	}
}

var sensitive = "shhhhh!";
var rightKey = new Key();
var wrongKey = new Key();
var safe = new Safe(sensitive, rightKey);

console.assert(safe.unlock(wrongKey) !== sensitive);
console.assert(safe.unlock(rightKey) === sensitive);