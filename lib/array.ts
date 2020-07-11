'use strict';

import * as field from "./field.ts";
import { Operator } from "./operator.ts";
// MongoDB Update field operators
// https://docs.mongodb.com/manual/reference/operator/update-array/#array-update-operators

export function $ (x:any=undefined) {
  return new PositionalOperator(x)
};

export function $addToSet (x:any):AddToSetOperator {
  return buildOperator(new AddToSetOperator(), x)
};
export function $pop (x:any=undefined) {
  return buildOperator(new PopOperator(), x || 1);
};
export function $pullAll (x:any) {
  const operator = new Operator('$pullAll');
        operator.create('$pullAll', Array.isArray(x) ? x : [x]);
  return operator;
};
export function $pull (x:any) {
  const operator = new Operator('$pull');
      operator.create('$pull', Array.isArray(x) ? { '$in' : x } : x);
  return operator;
};
export function $push (x:any=undefined) {
  return buildOperator(new PushOperator(), x);
};
export function $slice (x:any) {
  return buildOperator(new PushOperator(), []).$each().$slice(x);
};
export function $sort (x:any) {
  return buildOperator(new PushOperator(), []).$each().$sort(x);
};

function buildOperator(operator:any, val:any):Operator | AddToSetOperator | PushOperator | any {
  operator.value(val);
  return operator;
}

class AddToSetOperator extends Operator {
  _each:any;

  constructor() {
    super('$addToSet');
    this._each = false;
  }

  $each() {
    this._each = true;
    return this;
  }

  value(val:any=undefined) {
    if (typeof(val) === 'undefined' && this._each){
      const result = super.value();
      return { '$each': Array.isArray(result) ? result : [result] };
    }

    return super.value(val);
  }
}


class PopOperator extends Operator {
  constructor() {
    super('$pop');
    this._value = 1;
  }

  first() {
    return this.value(-1);
  }

  last() {
    return this.value(1);
  }
}



class PushOperator extends Operator {
  _each:any;
  _slice:any;
  _sort:any;
  _position:any;

  constructor() {
    super('$push');
    this._each = false;
    this._slice = null;
    this._sort = null;
    this._position = null;
  }

  value(val:any) {
    if (typeof (val) !== 'undefined' || !this._each){
      return super.value(val);
    }

    const data:any = {
      '$each': typeof (this._value) === 'undefined' ? [] :
        (Array.isArray(this._value) ? this._value : [this._value])
    };

    if (this._sort !== null) {
      data['$sort'] = this._sort;
    }

    if (this._slice !== null) {
      data['$slice'] = this._slice;
    }

    if (this._position !== null) {
      data['$position'] = this._position;
    }

    return data;
  }

  $each(){
    this._each = true;
    return this;
  }

  $slice(count:number){
    if (!this._each) {
      throw new Error('$slice operator is available only when using $each.');
    }

    if (typeof (count) !== 'undefined') {
      this._slice = count;
    }

    return this;
  }

  $sort(specification:any){
    if (!this._each) {
      throw new Error('$sort operator is available only when using $each.');
    }

    this._sort = typeof(specification) === 'undefined' ? 1 : specification;
    return this;
  }

  $position(index:any){
    if (!this._each) {
      throw new Error('$position operator is available only when using $each.');
    }

    if (typeof (index) !== 'undefined') {
      this._position = index;
    }

    return this;
  }
}

class PositionalOperator extends Operator {
  _operator:any;
  [prop: string]: any;
  constructor(field:any) {
    if (typeof (field) === 'number' || field && /\d+/.test(field)) {
      super(field + '');
    } else {
      super('$' + (field ? '.' + field : ''));
    }
  }

  value(val:any) {
    if (typeof(val) === 'undefined'){
      if (!this._operator) {
        throw Error('Value is mandatory for positional operator.');
      }

      return this._operator;
    }

    if (Operator.isOperator(val)){
      if (!isValidPositionalOperator(val))
        throw new Error(val.name + ' operator is not supported with $ positional operator.');
      this._operator = val;
    }
    else{
      this._operator = field.$set(val);
    }

    return this;
  }


  $inc(value: any){
    const incResult = field['$inc'](value);
    return this.value(incResult);
  }

  $mul(value: any){
    return this.value(field['$mul'](value));
  }

  $set(value: any) {
    const setResult = field['$set'](value);
    return this.value(setResult);
  }

  $unset(value: any){
    return this.value(field['$unset']());
  }

  $min(value: any){
    return this.value(field['$min'](value));
  }

  $max(value: any){
    return this.value(field['$max'](value));
  }

  $currentDate(value: any){
    return this.value(field['$currentDate'](value));
  }

  $timestamp(value: any){
    return this.value(field['$timestamp']());
  }

  static get _SupportedOperators() {
    return ['$inc', '$mul', '$set', '$unset', '$min', '$max', '$currentDate', '$timestamp'];
  }
}

// PositionalOperator._SupportedOperators.forEach((name:any) => {
//   PositionalOperator.prototype[name] = function() {
//     let f: {[index: string]:any} = field;
//     console.log('f[name]');
//     console.log(f[name].apply);
//     return this.value(f[name].apply(null, arguments));
//   }
// })

function isValidPositionalOperator(operator:any){
  return PositionalOperator._SupportedOperators.indexOf(operator.name) > -1;
}
