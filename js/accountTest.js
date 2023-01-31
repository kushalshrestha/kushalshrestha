describe('SavingAccounts', function () {
  it('should add interest to the account', function () {
    let accountNumber = 12345;
    let interestRate = 12;
    let savingAccount = new SavingsAccount(accountNumber, interestRate);
    savingAccount.deposit(100);
    let actualAmount = savingAccount.addInterest();
    let expectedAmount = 112;
    assert.equal(actualAmount, expectedAmount);
  });
});

describe('CheckingAccounts', function () {
  it('should withdraw amount from account', function () {
    let accountNumber = 12345;
    let overdraftLimit = 25;
    let checkingAccount = new CheckingAccount(accountNumber, overdraftLimit);
    checkingAccount.deposit(100);
    let actualAmount = checkingAccount.withdraw(10);
    let expectedAmount = 90;
    assert.equal(actualAmount, expectedAmount);
  });
  it('should throw an error if zero amount is enter to withdraw', function () {
    let accountNumber = 12345;
    let overdraftLimit = 25;
    let checkingAccount = new CheckingAccount(accountNumber, overdraftLimit);
    checkingAccount.deposit(100);
    //expect(checkingAccount.withdraw(0)).to.throw(Error);
  });
});

describe('Bank', function () {
  it('should add account', function () {
    let bank = new Bank();
    bank.addAccount();
    bank.addCheckingAccount(12);
    let actual = bank.closeAccount(1); // one account to be delete
    assert.equal(actual, 2);
  });
});
