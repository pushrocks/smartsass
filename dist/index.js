"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smartsass.plugins");
class Smartsass {
    constructor(optionsArg) {
        this.includePaths = [];
        this.entryFilePath = optionsArg.entryFilePath;
        if (optionsArg.includePaths) {
            for (let includePath of optionsArg.includePaths) {
                this.includePaths.push(includePath);
            }
        }
    }
    /**
     * renders the Smartsass classes' entryfile and returns result as string
     */
    render() {
        let done = plugins.smartq.defer();
        plugins.sass.render({
            file: this.entryFilePath,
            includePaths: this.includePaths
        }, function (err, result) {
            if (err) {
                console.log(err);
                done.reject(err);
            }
            done.resolve(result);
        });
        return done.promise;
    }
    /**
     * renders and stores
     */
    renderAndStore(outputFilePath) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.render();
            yield plugins.smartfile.memory.toFs(result.css.toString(), outputFilePath);
        });
    }
}
exports.Smartsass = Smartsass;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBVTlDO0lBR0UsWUFBWSxVQUF3QztRQUZwRCxpQkFBWSxHQUFHLEVBQUUsQ0FBQTtRQUdmLElBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQTtRQUM3QyxFQUFFLENBQUEsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUMzQixHQUFHLENBQUMsQ0FBQyxJQUFJLFdBQVcsSUFBSSxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDckMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQXVCLENBQUE7UUFDdEQsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDbEIsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ3hCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtTQUNoQyxFQUFFLFVBQVUsR0FBRyxFQUFFLE1BQU07WUFDdEIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2xCLENBQUM7WUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3RCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7SUFDckIsQ0FBQztJQUVEOztPQUVHO0lBQ0csY0FBYyxDQUFFLGNBQXNCOztZQUMxQyxJQUFJLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtZQUNoQyxNQUFNLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLGNBQWMsQ0FBQyxDQUFBO1FBQzVFLENBQUM7S0FBQTtDQUNGO0FBckNELDhCQXFDQyJ9