import { blit }                 from "meta.gl/dist/software-render";
import { RASTER_MODE__ORDINAL } from "meta.gl/dist/software-render/rasterizer";
import { OutputParser } from "./output-parse";

export class OutputRenderer {
    constructor(private parser: OutputParser) { }
    
    public blit(meshes: any[]): void  {
        let fbo = [] as string[];

        fbo.push("Total 40 ")

        // UNICODE_RGBA and UNICODE_RGBA_HDR 
        // both attempt to shade based on numeric values..
        // mixing text with this seems problematic.
        // Need to map out the use-cases here,  
        //         VS
        //         how meta.gl is currently set up.                                     
        blit(RASTER_MODE__ORDINAL.UNICODE_RGBA_HDR, [], fbo, 80)
    }

}