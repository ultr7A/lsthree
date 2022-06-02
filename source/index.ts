import { InputFilter }          from "./input-filter";
import { InputShellCommand }    from "./input-shell-command";
import { OutputParser }         from "./output-parse";
import { OutputRenderer }       from "./output-render";
import { OutputRendererCamera } from "./output-renderer-camera";

const args     = process.argv.slice(2);
const dir_name = process.argv[1];

const inputFilter       = new InputFilter();
const inputShellCommand = new InputShellCommand(inputFilter);

inputShellCommand.exec(args, (standard_out: string) => {

    const outputParser         = new OutputParser();
    const outputRenderer       = new OutputRenderer(outputParser);
    const outputRendererCamera = new OutputRendererCamera();

    outputRenderer.blit([]);

    console.log("dir_name: "+dir_name);
    console.log("args:     "+args.join(", "));

});
