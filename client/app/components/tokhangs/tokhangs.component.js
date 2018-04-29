"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tokhang_service_1 = require("../../services/tokhang.service");
var TokhangsComponent = /** @class */ (function () {
    function TokhangsComponent(tokhangService) {
        var _this = this;
        this.tokhangService = tokhangService;
        this.tokhangService.getTokhangs()
            .subscribe(function (tokhangs) {
            _this.tokhangs = tokhangs;
        });
    }
    TokhangsComponent.prototype.addTokhang = function (event) {
        var _this = this;
        event.preventDefault();
        var newTokhang = {
            firstname: this.firstname,
            lastname: this.lastname,
            isjailed: false
        };
        this.tokhangService.addTokhang(newTokhang)
            .subscribe(function (tokhang) {
            _this.tokhangs.push(tokhang);
            _this.firstname = '';
            _this.lastname = '';
        });
    };
    TokhangsComponent.prototype.deleteTokhang = function (id) {
        var tokhangs = this.tokhangs;
        this.tokhangService.deleteTokhang(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < tokhangs.length; i++) {
                    if (tokhangs[i]._id == id) {
                        tokhangs.splice(i, 1);
                    }
                }
            }
        });
    };
    TokhangsComponent.prototype.updateStatus = function (tokhang) {
        var _tokhang = {
            _id: tokhang._id,
            firstname: tokhang.firstname,
            lastnamename: tokhang.lastname,
            isjailed: !tokhang.isjailed
        };
        this.tokhangService.updateStatus(_tokhang).subscribe(function (data) {
            tokhang.isjailed = !tokhang.isjailed;
        });
    };
    TokhangsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tokhangs',
            templateUrl: 'tokhangs.component.html'
        }),
        __metadata("design:paramtypes", [tokhang_service_1.TokhangService])
    ], TokhangsComponent);
    return TokhangsComponent;
}());
exports.TokhangsComponent = TokhangsComponent;
//# sourceMappingURL=tokhangs.component.js.map