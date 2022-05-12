"use strict";
exports.__esModule = true;
exports.Payment = exports.Invoice = void 0;
var Invoice = /** @class */ (function () {
    function Invoice(client, work, amount) {
        this.client = client;
        this.work = work;
        this.amount = amount;
    }
    Invoice.prototype.print = function () {
        return "".concat(this.client, " owes ").concat(this.amount, " dollars for this work: ").concat(this.work);
    };
    return Invoice;
}());
exports.Invoice = Invoice;
var Payment = /** @class */ (function () {
    function Payment(receive, job, amt) {
        this.receive = receive;
        this.job = job;
        this.amt = amt;
    }
    Payment.prototype.print = function () {
        return "I owe  ".concat(this.receive, " ").concat(this.amt, " dollars for this job: ").concat(this.job);
    };
    return Payment;
}());
exports.Payment = Payment;
