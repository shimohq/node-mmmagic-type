import test from 'ava'
import fs from 'fs-extra'
import path from 'path'
import * as mime from 'mime'
import { detect } from '../source'

const fixtures = [
  {
    ext: 'jpeg',
    name: 'test.jpg'
  },
  {
    ext: 'pdf'
  },
  {
    ext: 'doc'
  },
  {
    ext: 'docx'
  },
  {
    ext: 'xls'
  },
  {
    ext: 'xlsx'
  },
  {
    ext: 'm4a',
    mime: 'audio/x-m4a'
  },
  {
    ext: 'txt'
  }
]

test('detect()', async t => {
  for (const fixture of fixtures) {
    const name = fixture.name ? fixture.name : `test.${fixture.ext}`
    const result = await detect(await fs.readFile(path.resolve(process.cwd(), `./test/fixtures/${name}`)))
    t.is(result.ext, fixture.ext)
    t.is(result.mime, fixture.mime || mime.getType(result.ext))
  }

  const type = await detect(Buffer.from(''))
  t.is(type.ext, '')
  t.is(type.mime, 'application/x-empty')
})
