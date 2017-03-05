import { Result } from 'node-sass';
export interface ISmartsassConstructorOptions {
    entryFilePath: string;
}
export declare class Smartsass {
    entryFilePath: string;
    constructor(optionsArg: ISmartsassConstructorOptions);
    /**
     * renders the Smartsass classes' entryfile and returns result as string
     */
    render(): Promise<Result>;
    /**
     * renders and stores
     */
    renderAndStore(outputFilePath: string): Promise<void>;
}
