import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import { StartFunc as StartFuncGetFiles } from "./KCode/getFiles.js";

const SrcFolder = "src/bs5/Simple/SourceCode";
const FrontEndDistFolder = "publicDir/binBS5";


let files = StartFuncGetFiles({ inSrcPath: SrcFolder });

export default {
    base: './',
    root: resolve(__dirname, `../../../${SrcFolder}`),
    plugins: [
        handlebars({
            context(pagePath) {
                return files[pagePath];
            },
        })
    ],
    build: {
        outDir: resolve(__dirname, `../../../${FrontEndDistFolder}`)
    },
    server: {
        port: 8080
    }
}
