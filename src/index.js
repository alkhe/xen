import { fromFile, toFile, toStdout } from './io'
import { fromIndexed, toNewArray } from './iterable'

let rev = (next, end) => {
	let buf = []
	return [
		char => {
			if (char === '\n') {
				for (let c of buf.reverse()) {
					next(c)
				}
				next('\n')
				buf = []
			} else {
				buf.push(char)
			}
		},
		() => {
			for (let c of buf.reverse()) {
				next(c)
			}
			end()
		}
	]
}

let transduce = (to, xds, from) =>
	new Promise((res, rej) => {
		try {
			let xfs = to(res)
			for (let xd of xds) {
				xfs = xd(...xfs)
			}
			from(...xfs)
		} catch (e) {
			rej(e)
		}
	})

transduce(toStdout, [rev], fromFile('./fixtures/simple.txt'))
// transduce(toFile(null, { fd: 1 }), [rev], fromFile('./fixtures/simple.txt'))
