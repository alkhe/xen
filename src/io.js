import { createReadStream, createWriteStream } from 'fs'

export let fromFile = (file, options) => (next, end) => {
	let stream = createReadStream(file, { encoding: 'utf8', ...options })

	stream.on('data', chunk => {
		for (let i = 0; i < chunk.length; i++) {
			next(chunk[i])
		}
	})

	stream.on('end', end)
}

export let toFile = (file, options) => res => {
	let stream = createWriteStream(file, options)

	return [
		::stream.write,
		() => (stream.end(), res())
	]
}

export let fromStdin = (next, end) => {
	process.stdin.on('data', chunk => {
		for (let i = 0; i < chunk.length; i++) {
			next(chunk(i))
		}
	})
}

export let toStdout = res => [
	::process.stdout.write,
	res
]

