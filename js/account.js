'use strict';

/**
 * A Bank Account class
 *
 * Provides the basic functionality that every account should have
 */
class Account {
  /**
   * Constructor for creating a new Account object
   *
   * @param {number} number the number for this account
   */
  constructor(number) {
    this._number = number; // the account number
    this._balance = 0.0;
  }

  /**
   * Getter for the 'private' number field
   *
   * @returns {number} the account number
   */
  getNumber() {
    return this._number;
  }

  /**
   * Accessor for the 'private' balance field
   *
   * @returns {number} balance for this account
   */
  getBalance() {
    return this._balance;
  }

  /**
   * Method to add money into the account
   *
   * @param {number} amount money to be deposited into the account
   * @returns {undefined}
   * @throws {RangeError} when amount is less than or equal to zero
   */
  deposit(amount) {
    if (amount <= 0) {
      throw new RangeError('Deposit amount has to be greater than zero');
    }
    this._balance += amount;
  }

  /**
   * Method to take money out of the account
   *
   * @param {number} amount money to be taken out of the account
   * @returns {undefined}
   * @throws {RangeError} when amount is less than or equal to zero
   * @throws {Error} when the account has insufficient funds (balance)
   */
  withdraw(amount) {
    if (amount <= 0) {
      throw new RangeError('Withdraw amount has to be greater than zero');
    }
    if (amount > this._balance) {
      throw Error('Insufficient funds');
    }
    this._balance -= amount;
  }

  /**
   * @returns {string} representation of this account
   */
  toString() {
    return 'Account ' + this._number + ': balance ' + this._balance;
  }

  /**
   * Performs needed actions at the end of the month
   *
   * @returns {undefined}
   */
  endOfMonth() {
    return ''; // does nothing
  }
}

class SavingsAccount extends Account {
  constructor(number, interest) {
    super(number);
    this.interest = interest;
  }
  set setInterest(interest) {
    this.interest = interest;
  }
  get getInterest() {
    return this.interest;
  }
  addInterest() {
    return (this._balance * this.interest) / 100 + this._balance;
  }
  toString() {
    return 'Account ' + this._number + ': balance $' + this.addInterest();
  }
}

class CheckingAccount extends Account {
  constructor(number, overdraftLimit) {
    super(number);
    this.overdraftLimit = overdraftLimit;
  }

  set setOverdraftLimit(overdraftLimit) {
    this.overdraftLimit = overdraftLimit;
  }
  get getOverdarftLimit() {
    return this.overdraftLimit;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new RangeError('Withdraw amount has to be greater than zero');
    }
    if (amount > this._balance - this.overdraftLimit) {
      throw Error('Insufficient funds');
    }
    this._balance -= amount;
    return this._balance;
  }
  toString() {
    return 'Account ' + this._number + ': remaining balance $' + this._balance;
  }
}

let sa = new SavingsAccount(1234, 12);
sa.deposit(100);
let ca = new CheckingAccount(1234, 25);
ca.deposit(100);
console.log('Balance after interest $' + sa.addInterest());
console.log(sa.toString());
console.log('Balance after withdraw $' + ca.withdraw(10));
console.log(ca.toString());

class Bank {
  static nextNumber = 1;
  constructor() {
    this.accountArr = [];
  }
  addAccount() {
    let account = new Account(Bank.nextNumber++);
    this.accountArr.push(account);
    return this.accountArr.length;
  }

  addSavingsAccount(interest) {
    let savingAccount = new SavingsAccount(Bank.nextNumber++, interest);
    this.accountArr.push(savingAccount);
    return this.accountArr.length;
  }
  addCheckingAccount(overdraft) {
    let checkingAccount = new CheckingAccount(Bank.nextNumber++, overdraft);
    this.accountArr.push(checkingAccount);
    return this.accountArr.length;
  }
  closeAccount(number) {
    this.accountArr = this.accountArr.filter(x => x._number != number);
    return this.accountArr.length;
  }

  accountReport() {
    let accountDetail = '';
    for (let account of this.accountArr) {
      accountDetail +=
        'Account number ' +
        account._number +
        ': balance $' +
        account._balance +
        '\n';
    }
    return accountDetail;
  }
}

let bank = new Bank();
bank.addAccount();
bank.addCheckingAccount(12);
console.log(bank.closeAccount(1));
console.log(bank.accountReport());
