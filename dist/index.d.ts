import { Result } from 'node-sass';
export interface ISmartsassConstructorOptions {
    entryFilePath: string;
    includePaths?: string[];
}
export declare class Smartsass {
    includePaths: any[];
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
