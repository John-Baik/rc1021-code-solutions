/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) && balance > 0) {
    var account = new Account(this.nextAccountNumber, holder);
    account.deposit(balance);
    this.accounts.push(account);
    this.nextAccountNumber++;
    return account.number;
  }
  return null;
};

Bank.prototype.getAccount = function (number) {
  for (var e = 0; e < this.accounts.length; e++) {
    if (this.accounts[e].number === number) {
      return this.accounts[e];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var total = 0;
  for (var u = 0; u < this.accounts.length; u++) {
    total += this.accounts[u].getBalance();
  }
  return total;
};
