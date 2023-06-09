"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const userProfile = (_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.USERPROFILE;
const directory = 'Documents'; // local atual dos arquivos
const newDirectory = 'Files of Documents'; // nome da pasta a ser criada
const rootDir = 'Desktop'; // caminho principal onde sera criada a nova pasta
function createFolder(dir, url, nameDir) {
    promises_1.default.mkdir(path_1.default.join(userProfile, `${dir}`, `${url}`, `${nameDir}`), { recursive: true });
    return { dir, url };
}
function organizer() {
    return __awaiter(this, void 0, void 0, function* () {
        let inputsUser = createFolder(rootDir, newDirectory);
        yield promises_1.default.readdir(path_1.default.join(userProfile, directory))
            .then(files => {
            files.forEach(file => {
                let extension = file.split('.').pop();
                createFolder(rootDir, newDirectory, `${extension}`);
                if (path_1.default.extname(file) === '.' + extension) {
                    promises_1.default.rename(path_1.default.join(userProfile, directory, file), path_1.default.join(userProfile, inputsUser.dir, inputsUser.url, `${extension}`, file));
                }
            });
        });
    });
}
organizer();
