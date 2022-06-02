const { exec } = require("child_process");


export class InputShellCommand {
    /**
     * 
     * @param args - should have `-` or `--` prepended, when passed.
     * @param callback 
     */
    exec(args: string[], callback: (standard_output: string) => void): void {
        
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