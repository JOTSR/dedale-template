import { assertEquals } from './deps.dev.ts'
import { add } from './mod.dedale.ts'

Deno.test({
	name: 'example test',
	fn() {
		assertEquals(add(1, 2), 3)
	},
})
