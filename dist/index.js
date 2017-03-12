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
     * add further include paths
     */
    addIncludePaths(includePathsArray) {
        for (let includePath of includePathsArray) {
            this.includePaths.push(includePath);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBVTlDO0lBR0UsWUFBWSxVQUF3QztRQUZwRCxpQkFBWSxHQUFHLEVBQUUsQ0FBQTtRQUdmLElBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQTtRQUM3QyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUM1QixHQUFHLENBQUMsQ0FBQyxJQUFJLFdBQVcsSUFBSSxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDckMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxlQUFlLENBQUUsaUJBQTJCO1FBQzFDLEdBQUcsQ0FBQyxDQUFDLElBQUksV0FBVyxJQUFJLGlCQUFpQixDQUFDLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUNyQyxDQUFDO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUF1QixDQUFBO1FBQ3RELE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ2xCLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYTtZQUN4QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7U0FDaEMsRUFBRSxVQUFVLEdBQUcsRUFBRSxNQUFNO1lBQ3RCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNsQixDQUFDO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN0QixDQUFDLENBQUMsQ0FBQTtRQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBO0lBQ3JCLENBQUM7SUFFRDs7T0FFRztJQUNHLGNBQWMsQ0FBRSxjQUFzQjs7WUFDMUMsSUFBSSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7WUFDaEMsTUFBTSxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQTtRQUM1RSxDQUFDO0tBQUE7Q0FDRjtBQTlDRCw4QkE4Q0MifQ==