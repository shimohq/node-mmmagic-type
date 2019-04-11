# mmmagic-type

Detect file type with [mmmagic](https://github.com/mscdex/mmmagic) and [mime](https://github.com/broofa/node-mime).

# Install

```
npm i mmmagic-type
```

# Usage

```js
import fs from 'fs'
import { detect } from 'mmmagic-type'

detect(fs.readFileSync('/path/to/file')).then(type => {
  console.log(type)
  // { ext: '', mime: '' }
})
```
