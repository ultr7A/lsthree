import { InputFilter } from "./input-filter";
const { exec } = require("child_process");


export class InputShellCommand {

    constructor(private inputFilter: InputFilter) { }

    /**
     * 
     * @param args - should have `-` or `--` prepended, when passed.
     * @param callback 
     */
    exec(args: string[], callback: (standard_output: string) => void): void {
        
        args = this.inputFilter.apply(args);

        exec(
            "ls "+args.join(" "), 
            (error: Error, output: string, errOutput: string) => {
            
                if (error) {
                    return console.log(`LSThree Error: ${error.message}`);
                }

                if (errOutput) {
                    return console.log(`stderr: ${errOutput}`);
                }
                
                callback(output);
             }
        );

    }
}