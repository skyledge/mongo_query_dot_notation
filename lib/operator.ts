'use strict';

export class Operator{
  name:any;
  _value: any;

  constructor(name:string) {
    if (!name)
      throw new Error('Null argument error: name');
    this.name = name;
  }

  value(val?:any) {
    if (typeof(val) === 'undefined') {
      return this._value;
    }

    this._value = val;
    return this;
  }

  static isOperator(obj:any) {
    return obj instanceof Operator;
  }

  create(name:string, value:any, defaultValue:any=null) {
    this.value(typeof(value) === 'undefined' ? defaultValue : value);
  }
}

export function isOperator (testSubject:any) {
  return Operator.isOperator(testSubject);
}
