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
Object.defineProperty(exports, "__esModule", { value: true });
function weather(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data:", data);
            resolve("success");
        }, 3000);
    });
}
function weatherCondition() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("weather at 08:00 A.M");
        yield weather(32);
        console.log("weather at 09:00 A.M");
        yield weather(33);
        console.log("weather at 10:00 A.M");
        yield weather(34);
        console.log("weather at 11:00 A.M");
        yield weather(35);
        console.log("weather at 12:00 A.M");
        yield weather(36);
        console.log("weather at 01:00 P.M");
        yield weather(37);
        console.log("retrieve all data successfully");
    });
}
weatherCondition();
