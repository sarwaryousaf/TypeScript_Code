"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getData(Data, callback) {
    setTimeout(() => {
        console.log("Data", Data);
        callback();
    }, 3000);
}
console.log("fetching data1");
getData(22, () => {
    console.log("fetching data2");
    getData(34, () => {
        console.log("fetching data3");
        getData(44, () => {
            console.log("fetching data4");
            getData(55, () => {
                console.log("Get all data successfully");
            });
        });
    });
});
