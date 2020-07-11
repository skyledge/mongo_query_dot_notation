'use strict';

export { Operator, isOperator } from "./lib/operator.ts";

export {
  $set,
  $inc,
  $max,
  $min,
  $mul,
  $rename,
  $setOnInsert,
  $unset,
  $currentDate,
  $timestamp
} from "./lib/field.ts";

export {
  $,
  $addToSet,
  $pop,
  $pullAll,
  $pull,
  $push,
  $slice,
  $sort
} from "./lib/array.ts";

export {
  $bit,
  $and,
  $or,
  $xor
} from "./lib/bitwise.ts";

export { flatten } from "./lib/flatten.ts";
