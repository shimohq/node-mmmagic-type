import * as mmm from 'mmmagic'
import * as mime from 'mime'

/**
 * Detect file type with mmmagic and mime
 */
export async function detect (buf: Buffer): Promise<{ ext: string, mime: string }> {
  return new Promise((resolve, reject) => {
    const magic = new mmm.Magic(mmm.MAGIC_MIME_TYPE)
    magic.detect(buf, (err, result) => {
      if (err) {
        reject(err)
      } else {
        const ext = mime.getExtension(result)

        resolve({
          ext: typeof ext === 'string' ? ext : '',
          mime: result
        })
      }
    })
  })
}
