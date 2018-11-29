function uniteUnique(...arr) {
	return arr.reduce((a,b) => a.concat(b.filter(x => !a.includes(x))));
}
console.log(uniteUnique([1,2,3], [5,4,3,6,[1]]))