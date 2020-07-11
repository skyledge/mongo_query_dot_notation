'use strict';

import { Operator } from "./operator.ts";

// MongoDB Update field operators
// https://docs.mongodb.com/manual/reference/operator/update/#fields

export function $set (value:any) {
    const operator = new Operator('$set');
    operator.create('$set', value);

    return operator;
};

export function $inc (value:any=undefined) {
    const operator = new Operator('$inc');
    operator.create('$inc', value, 1);
    return operator;
};

export function $max (value:any) {
    const operator = new Operator('$max');
    operator.create('$max', value);
    return operator;
};

export function $min (value:any) {
    const operator = new Operator('$min');
    operator.create('$min', value);
    return operator;
};

export function $mul (value:any=undefined) {
    const operator = new Operator('$mul');
    operator.create('$mul', value, 1);
    return operator;
};

export function $rename (field:any) {
    const operator = new Operator('$rename');
    operator.create('$rename', field);
    return operator;
};

export function $setOnInsert (value:any) {
    const operator = new Operator('$setOnInsert');
    operator.create('$setOnInsert', value);
    return operator;
};

export function $unset () {
    const operator = new Operator('$unset');
    operator.create('$unset', '');
    return operator;
};

export function $currentDate (type:any=undefined) {
    const operator = new Operator('$currentDate');
    operator.create('$currentDate', { $type: type || 'date' });
    return operator;
};

export function $timestamp () {
    const operator = new Operator('$currentDate');
    operator.create('$currentDate', { $type: 'timestamp' });
    return operator;
};

