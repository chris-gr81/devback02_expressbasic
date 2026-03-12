"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./routes/router"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api", router_1.default);
app.use("/static", express_1.default.static(path_1.default.join(__dirname, "../public")));
const port = process.env.port || 3000;
app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log(`Server is running on port ${port}`);
    }
});
//# sourceMappingURL=index.js.map