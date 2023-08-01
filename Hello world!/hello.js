"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function age(constructor) {
    console.log('in decrator fn ', constructor);
    constructor.prototype.age = 55;
}
var A = /** @class */ (function () {
    function A(name, message) {
        this.name = name;
        this.message = message;
    }
    A.prototype.sayHello = function () {
        console.log("".concat(this.name, " : ").concat(this.message, "\nage : ").concat(this.age));
    };
    A = __decorate([
        age
    ], A);
    return A;
}());
console.log(new A('Ahmed', 'Hello to our board').sayHello());
var x = 5;
