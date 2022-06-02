export class InputFilter {

    private readonly supportedParams = "gRIlaicpO".split("");
    private readonly supportedHumanReadableParams = 
        [
            "all", "ignore", "group-directories-first", "help",                   //ls      params
            "perspective", "orthogonal", "interactive", "camera", "orbit-camera"  //lsthree params
        ];
    private readonly unicodeParams = 
        [
            [['', '', '', '', '',], 'c'],
            [['', '' ],             "i"],
        ]

    public apply(args: string[]): string[] {

        return args.filter(
            arg =>  {
                    
                const supported = this.supportedParams
                                      .includes("-"+arg)
                                  ||
                                  this.supportedHumanReadableParams
                                      .includes("--"+arg);

                if (!supported) {
                    console.log(`LSThree Error: Argument: '${arg}' is not supported`)
                }

                return supported;
            }
        );
    }

}
