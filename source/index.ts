import { InputFilter } from "./input-filter";
import { InputShellCommand } from "./input-shell-command";
import { OutputParser } from "./output-parse";
import { OutputRendererCamera } from "./output-renderer-camera";

const args     = process.argv.slice(2);
const dir_name = process.argv[1];

const fbo = [];

const inputFilter       = new InputFilter();
const inputShellCommand = new InputShellCommand();

const outputParserer       = new OutputParser();
const outputRendererCamera = new OutputRendererCamera();

console.log("dir_name: "+dir_name);
console.log("args:     "+args.join(", "));