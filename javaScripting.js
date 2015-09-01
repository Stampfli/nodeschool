// Lesson One
console.log('hello');

// Lesson Two
var example = "some string";
console.log(example);

// Lesson Three
var someString = 'this is a string';
console.log(someString);

// Lesson Four
var example = 'example string';
console.log(example.length);

// Lesson Five
var pizza = 'pizza is alright';
pizza = pizza.replace('alright', 'wonderful');
console.log(pizza);

// Lesson Six
var example = 123456789;
console.log(example);

// Lesson Seven
var roundUp = 1.5;
roundUp = Math.round(roundUp);
console.log(roundUp);

// Lesson Eight
var n = 128;
n = n.toString();
console.log(n);

// Lesson Nine
var fruit = 'orange';
if(fruit.length >= 5){
	console.log("The fruit name has more than five characters.");
}
else{
	console.log("The fruit name has five characters or less.");
}

// Lesson Ten
var total = 0;
var limit = 10;
for(var i = 0; i < limit; i++){
	total += i;
}
console.log(total);

// Lesson Eleven
var pizzaToppings = ['tomato sauce', 'cheese', 'pepperoni'];
console.log(pizzaToppings);

// Lesson Twelve
var numbers = [1,2,3,4,5,6,7,8,9,10];
var filtered = numbers.filter(function(num){
	return num % 2 === 0;
});
console.log(filtered);

// Lesson Thirteen
var food = ['apple', 'pizza', 'pear'];
console.log(food[1]);

// Lesson Fourteen
var pets = ['cat', 'dog', 'rat'];
for(var i = 0; i < pets.length; i++){
	pets[i] += 's';
}
console.log(pets);

// Lesson Fifteen
var pizza = {
	toppings: ['cheese', 'sauce', 'pepperoni'],
	crust: 'deep dish',
	serves: 2
};
console.log(pizza);

// Lesson Sixteen
var food = {
	types: 'only pizza'
}
console.log(food.types);

// Lesson Seventeen
function eat(food){
	return food + ' tasted really good.';
}
console.log(eat('bananas'));

// Lesson Eighteen
function math(add, x, y){
	return add += x * y;
}
console.log(math(53,61,67));

// Lesson Nineteen
var a = 1, b = 2, c = 3;

(function firstFunction(){
    var b = 5, c = 6;

    (function secondFunction(){
        var b = 8;
        console.log("a: "+a+", b: "+b+",c: "+c);

        (function thirdFunction(){
            var a = 7, c = 9;

            (function fourthFunction(){
                var a = 1, c = 8;

            })();
        })();
    })();
})();
