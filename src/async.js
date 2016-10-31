let fromXstream = stream => (next, end) => {
	stream.addListener({
		next,
		error() {},
		complete: end
	})
}

let toEE = ee => [
	::ee.emit,
	::ee.end
]
