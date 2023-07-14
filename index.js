import { readFile } from 'node:fs/promises';
import assert from 'node:assert';
import {test } from 'node:test';

test('able to read from this project', async () => {
        let threw = false;
	try {
	  await readFile('./package.json')
	} catch (error) {
          threw = true;
	  console.error(error) 
	}
        assert.strictEqual(threw, false);
});

test('unable to write to this project', () => {
	assert.strictEqual(process.permission.has('fs.write'), false);
	assert.strictEqual(process.permission.has('fs.write', '/home/nodejs/protected-folder'), false);
});

