'use strict';

import { Operator } from "./operator.ts";

// MongoDB Update field operators
// https://docs.mongodb.com/manual/reference/operator/update/#bitwise

export const $bit = function(){ return new BitOperator(); };
export const $and = function(x:any){ return new BitOperator().$and(x); };
export const $or = function(x:any){ return new BitOperator().$or(x); };
export const $xor = function(x:any){ return new BitOperator().$xor(x); };

class BitwiseOperator extends Operator {
  _operation:string;
  constructor(operation:string) {
    super('$bit');
    this._operation = operation;
  }

  value(val:any) {
    if (typeof (val) !== 'undefined'){
      return super.value(val);
    }

    const result:any = {};
    result[this._operation] = super.value();
    return result;
  }
}

class BitOperator extends Operator {
  constructor() {
    super('$bit');
  }

  value() {
    throw new Error('Value not supported when bitwise operation not set. Use $and, $or or $xor.');
  }

  $and(value:any){
    return new BitwiseOperator('and').value(value);
  }

  $or(value:any){
    return new BitwiseOperator('or').value(value);
  }

  $xor(value:any){
    return new BitwiseOperator('xor').value(value);
  }
}
