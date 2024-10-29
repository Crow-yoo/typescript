// 멤버변수 == 속성 == 프로퍼티
// 멤버함수 == 메소드
var Employee = /** @class */ (function () {
    function Employee(empName, age, empJob) {
        var _this = this;
        this.printEmp = function () {
            console.log(_this._empName + '의 나이는' + _this._age + '이고, 직업은 ' + _this._empJob + '입니다.');
        };
        this._empName = empName;
        this._age = age;
        this._empJob = empJob;
    }
    Object.defineProperty(Employee.prototype, "empName", {
        //get/set
        get: function () {
            return this._empName;
        },
        set: function (val) {
            this._empName = val;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
//public private protected
var employee1 = new Employee('kim', 20, '개발자');
employee1.empName = 'lee';
employee1.printEmp();
