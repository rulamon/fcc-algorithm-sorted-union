function uniteUnique(...arr) {
	return [...new Set([].concat(...arr))];
}
console.log(uniteUnique([1,2,3], [5,4,3,6]))