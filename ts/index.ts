import * as plugins from './smartsass.plugins'

// interfaces
import { Result } from 'node-sass'

export interface ISmartsassConstructorOptions {
  entryFilePath: string,
  includePaths?: string[]
}

export class Smartsass {
  includePaths = []
  entryFilePath: string
  constructor(optionsArg: ISmartsassConstructorOptions) {
    this.entryFilePath = optionsArg.entryFilePath
    if (optionsArg.includePaths) {
      for (let includePath of optionsArg.includePaths) {
        this.includePaths.push(includePath)
      }
    }
  }

  /**
   * add further include paths
   */
  addIncludePaths (includePathsArray: string[]) {
    for (let includePath of includePathsArray) {
      this.includePaths.push(includePath)
    }
  }

  /**
   * renders the Smartsass classes' entryfile and returns result as string
   */
  render() {
    let done = plugins.smartq.defer<plugins.sass.Result>()
    plugins.sass.render({
      file: this.entryFilePath,
      includePaths: this.includePaths
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
