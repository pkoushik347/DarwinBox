console.log("hi");
var first = /** @class */ (function () {
    function first(name, age) {
        this.name = name;
        this.age = age;
    }
    first.prototype.profession = function () {
        console.log("Teaching");
    };
    return first;
}());
