import * as plugins from './smartsass.plugins'

// interfaces
import { Result } from 'node-sass'

export interface ISmartsassConstructorOptions {
  entryFilePath: string
}

export class Smartsass {
  entryFilePath: string
  constructor(optionsArg: ISmartsassConstructorOptions) {
    this.entryFilePath = optionsArg.entryFilePath
  }

  /**
   * renders the Smartsass classes' entryfile and returns result as string
   */
  render() {
    let done = plugins.smartq.defer<plugins.sass.Result>()
    plugins.sass.render({
      file: this.entryFilePath
    }, function (err, result) {
      if (err) {
        console.log(err)
        done.reject(err)
      }
      done.resolve(result)
    })
    return done.promise
  }

  /**
   * renders and stores
   */
  async renderAndStore (outputFilePath: string) {
    let result = await this.render()
    await plugins.smartfile.memory.toFs(result.css.toString(), outputFilePath)
  }
}
