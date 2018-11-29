function uniteUnique(...arr) {
	let result = [];
	arr.map(x => result = result.concat(x.filter(y => !result.includes(y))));
	return result;
}
console.log(uniteUnique([1,2,3], [5,4,3,6,[1]]))