function uniteUnique(...arr) {
	let result = [];
	arr.map(x => x.map(y => result.includes(y) ? y : result.push(y)))
	return result;
}
console.log(uniteUnique([1,2,3], [5,4,3,6,5]))