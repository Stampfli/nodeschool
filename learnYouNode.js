var index = 2;
var args = process.argv;
var sum = 0;
while(args[index]){
	sum += Number(process.argv[index]);
	++index;
}
console.log(sum);