export let fromIterable = iterable => (next, end) => {
	for (let x of iterable) {
		next(x)
	}
	end()
}

export let fromIndexed = indexed => (next, end) => {
	for (let i = 0; i < indexed.length; i++) {
		next(indexed[i])
	}
	end()
}

export let toArray = res => (arr = []) => [
	::arr.push,
	res
]
	

export let toNewArray = res => (arr = []) => [
	x => {
		arr = arr.concat(x)
	},
	() => res(arr)
]
	
