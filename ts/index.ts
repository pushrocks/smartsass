import * as plugins from './smartsass.plugins';

// interfaces
import { Result } from 'node-sass';

export interface ISmartsassConstructorOptions {
  data?: string;
  entryFilePath?: string;
  includePaths?: string[];
}

export class Smartsass {
  includePaths = [];
  entryFilePath: string;
  data: string;
  constructor(optionsArg: ISmartsassConstructorOptions) {
    this.entryFilePath = optionsArg.entryFilePath;
    this.data = optionsArg.data;
    if (optionsArg.includePaths) {
      for (let includePath of optionsArg.includePaths) {
        this.includePaths.push(includePath);
      }
    }
  }

  /**
   * add further include paths
   */
  addIncludePaths(includePathsArray: string[]) {
    for (let includePath of includePathsArray) {
      this.includePaths.push(includePath);
    }
  }

  /**
   * renders the Smartsass classes' entryfile and returns result as string
   */
  render() {
    let done = plugins.smartpromise.defer<plugins.sass.Result>();
    plugins.sass.render(
      {
        data: this.data,
        file: this.entryFilePath,
        includePaths: this.includePaths
      },
      function(err, result) {
        if (err) {
          console.log(err);
          done.reject(err);
        }
        done.resolve(result);
      }
    );
    return done.promise;
  }

  /**
   * renders and stores
   */
  async renderAndStore(outputFilePath: string) {
    let result = await this.render();
    await plugins.smartfile.memory.toFs(result.css.toString(), outputFilePath);
  }
}
