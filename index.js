"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createData = void 0;
const fs_1 = __importDefault(require("fs"));
const settings_1 = require("./settings");
const classes_1 = require("./classes");
function createData(type, fields, amount) {
    if (amount > 100) {
        throw new Error("The amount is not available");
    }
    const response = (0, settings_1.getData)(type, fields, amount);
    const jsonData = JSON.stringify(response, null, 2);
    if (type === "users") {
        const serviceData = classes_1.userService;
        const folderPathData = "data";
        const folderPathService = "services";
        const filePathData = `${folderPathData}/users.js`;
        const filePathService = `${folderPathService}/userService.js`;
        if (!fs_1.default.existsSync(folderPathData)) {
            fs_1.default.mkdirSync(folderPathData);
        }
        if (!fs_1.default.existsSync(folderPathService)) {
            fs_1.default.mkdirSync(folderPathService);
        }
        fs_1.default.writeFileSync(filePathData, `export const users = ${jsonData};`);
        fs_1.default.writeFileSync(filePathService, serviceData);
    }
    else if (type === "animals") {
        const serviceData = classes_1.animalService;
        const folderPathData = "data";
        const folderPathService = "services";
        const filePathData = `${folderPathData}/animals.js`;
        const filePathService = `${folderPathService}/animalService.js`;
        if (!fs_1.default.existsSync(folderPathData)) {
            fs_1.default.mkdirSync(folderPathData);
        }
        if (!fs_1.default.existsSync(folderPathService)) {
            fs_1.default.mkdirSync(folderPathService);
        }
        fs_1.default.writeFileSync(filePathData, `export const animals = ${jsonData};`);
        fs_1.default.writeFileSync(filePathService, serviceData);
    }
}
exports.createData = createData;
