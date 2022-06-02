import { blit }                 from "meta.gl/dist/software-render";
import { RASTER_MODE__ORDINAL } from "meta.gl/dist/software-render/rasterizer";

export class OutputRenderer {

    public blit(meshes: any[]): void  {
        let fbo = [] as string[];

        fbo.push("Total 40 ")

        blit(RASTER_MODE__ORDINAL.UNICODE_RGBA_HDR, [], fbo, 80)
    }

}