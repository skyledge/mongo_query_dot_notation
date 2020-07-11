import * as $ from '../mod.ts';
import { prefixSuffixMessage, assertEquals, assertThrows } from "../deps-dev.ts";
import { Operator } from './operator.ts';


Deno.test({
    name: prefixSuffixMessage('Internals::','Operator::',' Defines isOperator methods'),
    fn: () => {
        const operator = new Operator('test');
        assertEquals(Operator.isOperator(operator),true);
    }
});

Deno.test({
    name: prefixSuffixMessage('Internals::','Operator::',' Name is set'),
    fn: () => {
        const operator = new Operator('test');
        assertEquals(operator.name,'test');
    }
});

Deno.test({
    name: prefixSuffixMessage('Internals::','Operator::',' When value not set defaults to undefined'),
    fn: () => {
        const operator = new Operator('test');
        operator.value();
        assertEquals(operator.value(),undefined);
    }
});

Deno.test({
    name: prefixSuffixMessage('Internals::','Operator::',' When value set to null returns null value'),
    fn: () => {
        const operator = new Operator('test');
        operator.value(null);
        assertEquals(operator.value(),null);
    }
});

Deno.test({
    name: prefixSuffixMessage('Internals::','Operator::',' When value set returns same value'),
    fn: () => {
        const arbitaryVal = {};
        const operator = new Operator('test');
        operator.value(arbitaryVal);
        assertEquals(operator.value(),arbitaryVal);
    }
});

Deno.test({
    name: prefixSuffixMessage('Internals::','Operator::',' When value set chains self'),
    fn: () => {
        const operator = new Operator('test');
        assertEquals(operator.value({}),operator);
    }
});

Deno.test({
    name: prefixSuffixMessage('Update Operators::Field','$inc::',' Is operator'),
    fn: () => {
        assertEquals($.isOperator($.$inc()),true);
    }
});

Deno.test({
    name: prefixSuffixMessage('Update Operators::Field','$inc::',' Has $inc name'),
    fn: () => {
        assertEquals($.$inc().name,'$inc');
    }
});

Deno.test({
    name: prefixSuffixMessage('Update Operators::Field','$inc::',' When argument is undefined defaults to 1'),
    fn: () => {
        assertEquals($.$inc().value(), 1);
    }
});


Deno.test({
    name: prefixSuffixMessage('Update Operators::Field','$inc::',' When argument is set uses its value'),
    fn: () => {
        const value = 123;
        assertEquals($.$inc(value).value(), value);
    }
});

Deno.test({
    name: prefixSuffixMessage('Update Operators::Field','$mul::',' Is operator'),
    fn: () => {
        assertEquals($.isOperator($.$mul()),true);
    }
});

Deno.test({
    name: prefixSuffixMessage('Update Operators::Field','$mul::',' Has $mul name'),
    fn: () => {
        assertEquals($.$inc().name,'$inc');
    }
});

Deno.test({
    name: prefixSuffixMessage('Update Operators::Field','$mul::',' When argument is undefined defaults to 1'),
    fn: () => {
        assertEquals($.$mul().value(), 1);
    }
});

Deno.test({
    name: prefixSuffixMessage('Update Operators::Field','$mul::',' When argument is set uses its value'),
    fn: () => {
        const value = 123;
        assertEquals($.$mul(value).value(), value);
    }
});

Deno.test({
    name: prefixSuffixMessage('Update Operators::Field','$rename::',' Is operator'),
    fn: () => {
        assertEquals($.isOperator($.$rename('field')),true);
    }
});

Deno.test({
    name: prefixSuffixMessage('Update Operators::Field','$rename::',' Has $rename name'),
    fn: () => {
        assertEquals($.$rename('field').name,'$rename');
    }
});


Deno.test({
    name: prefixSuffixMessage('Update Operators::Field','$rename::',' Has expected value'),
    fn: () => {
        const value = 'test';
        assertEquals($.$rename(value).value(), value);
    }
});

Deno.test({
    name: prefixSuffixMessage('Update Operators::Field','$setOnInsert::',' Is operator'),
    fn: () => {
        assertEquals($.isOperator($.$setOnInsert('field')),true);
    }
});

Deno.test({
    name: prefixSuffixMessage('Update Operators::Field','$setOnInsert::',' Has $setOnInsert name'),
    fn: () => {
        assertEquals($.$setOnInsert('field').name,'$setOnInsert');
    }
});


Deno.test({
    name: prefixSuffixMessage('Update Operators::Field','$setOnInsert::',' Has expected value'),
    fn: () => {
        const value = {x: 10, y: 20};
        assertEquals($.$setOnInsert(value).value(), value);
    }
});

Deno.test({
    name: prefixSuffixMessage('Update Operators::Field','$set::',' Is operator'),
    fn: () => {
        assertEquals($.isOperator($.$set('field')),true);
    }
});

Deno.test({
    name: prefixSuffixMessage('Update Operators::Field','$set::',' Has $set name'),
    fn: () => {
        assertEquals($.$set('field').name,'$set');
    }
});


Deno.test({
    name: prefixSuffixMessage('Update Operators::Field','$set::',' Has expected value'),
    fn: () => {
        const value = {x: 10, y: 20};
        assertEquals($.$set(value).value(), value);
    }
});

Deno.test({
    name: prefixSuffixMessage('Update Operators::Field','$unset::',' Is operator'),
    fn: () => {
        assertEquals($.isOperator($.$unset()),true);
    }
});

Deno.test({
    name: prefixSuffixMessage('Update Operators::Field','$unset::',' Has $set name'),
    fn: () => {
        assertEquals($.$unset().name,'$unset');
    }
});


Deno.test({
    name: prefixSuffixMessage('Update Operators::Field','$unset::',' Has expected value'),
    fn: () => {
        assertEquals($.$unset().value(), '');
    }
});

Deno.test({
    name: prefixSuffixMessage('Update Operators::Field','$min::',' Is operator'),
    fn: () => {
        assertEquals($.isOperator($.$min(1)),true);
    }
});

Deno.test({
    name: prefixSuffixMessage('Update Operators::Field','$min::',' Has $min name'),
    fn: () => {
        assertEquals($.$min(1).name,'$min');
    }
});


Deno.test({
    name: prefixSuffixMessage('Update Operators::Field','$min::',' Has expected value'),
    fn: () => {
        const value = 10;
        assertEquals($.$min(value).value(), value);
    }
});

Deno.test({
    name: prefixSuffixMessage('Update Operators::Field','$max::',' Is operator'),
    fn: () => {
        assertEquals($.isOperator($.$max(1)),true);
    }
});

Deno.test({
    name: prefixSuffixMessage('Update Operators::Field','$max::',' Has $min name'),
    fn: () => {
        assertEquals($.$max(1).name,'$max');
    }
});


Deno.test({
    name: prefixSuffixMessage('Update Operators::Field','$max::',' Has expected value'),
    fn: () => {
        const value = 10;
        assertEquals($.$max(value).value(), value);
    }
});

Deno.test({
    name: prefixSuffixMessage('Update Operators::Field','$currentDate::',' Is operator'),
    fn: () => {
        assertEquals($.isOperator($.$currentDate()),true);
    }
});

Deno.test({
    name: prefixSuffixMessage('Update Operators::Field','$currentDate::',' Has $currentDate name'),
    fn: () => {
        assertEquals($.$currentDate().name,'$currentDate');
    }
});

Deno.test({
    name: prefixSuffixMessage('Update Operators::Field','$currentDate::',' When argument is undefined defaults to date type'),
    fn: () => {
        assertEquals($.$currentDate().value(), { $type: 'date' });
    }
});

Deno.test({
    name: prefixSuffixMessage('Update Operators::Field','$currentDate::',' When argument is set uses its value'),
    fn: () => {
        assertEquals($.$currentDate('timestamp').value(), { $type: 'timestamp' });
    }
});

Deno.test({
    name: prefixSuffixMessage('Update Operators::Field','$timestamp::',' Is operator'),
    fn: () => {
        assertEquals($.isOperator($.$timestamp()),true);
    }
});

Deno.test({
    name: prefixSuffixMessage('Update Operators::Field','$timestamp::',' Has $currentDate name'),
    fn: () => {
        assertEquals($.$timestamp().name,'$currentDate');
    }
});

Deno.test({
    name: prefixSuffixMessage('Update Operators::Field','$timestamp::',' Has expected value'),
    fn: () => {
        assertEquals($.$timestamp().value(), { $type: 'timestamp' });
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$::',' Is operator'),
    fn: () => {
        assertEquals($.isOperator($.$()),true);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$::',' Is operator'),
    fn: () => {
        assertEquals($.$().name,'$');
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$::',' Appends field to name when field specified'),
    fn: () => {
        assertEquals($.$('std').name,'$.std');
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$::',' Appends index when number specified'),
    fn: () => {
        assertEquals($.$(3).name,'3');
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$::',' Appends index when string number specified'),
    fn: () => {
        assertEquals($.$('3').name,'3');
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$::',' Appends index with field when mathes number'),
    fn: () => {
        assertEquals($.$('3.std').name,'3.std');
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$::',' Appends index with field when matches 0'),
    fn: () => {
        assertEquals($.$('0.std').name,'0.std');
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$::',' Value throws when not set'),
    fn: () => {
        function throwIfNoValueSet() {
            $.$().value(undefined);
        }
        assertThrows(throwIfNoValueSet, Error);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$::',' Value throws when not supported operator is set'),
    fn: () => {
        function thrower () {
            $.$().value($.$setOnInsert(10));
        }
        assertThrows(thrower, Error);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$::',' When value set defaults to $set'),
    fn: () => {
        assertEquals($.$().value(101).value().value(), 101);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$::',' When value set with $set with null'),
    fn: () => {
        assertEquals($.$().value($.$set(null)).value().value(), null);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$::',' When value set to null'),
    fn: () => {
        const operator = $.$unset();
        assertEquals($.$().value($.$set(null)).value().value(), null);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$::',' When value set with operator returns operator'),
    fn: () => {
        const operator = $.$unset();
        assertEquals($.$().value(operator).value(), operator);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$::',' When chained operator'),
    fn: () => {

        assertEquals(typeof $.$().$inc == 'function', true);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$::',' Is chainable with $inc'),
    fn: () => {

        assertEquals(typeof $.$().$inc == 'function', true);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$::',' Is chainable with $mul'),
    fn: () => {

        assertEquals(typeof $.$().$mul == 'function', true);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$::',' Is chainable with $set'),
    fn: () => {

        assertEquals(typeof $.$().$set == 'function', true);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$::',' Is chainable with $unset'),
    fn: () => {

        assertEquals(typeof $.$().$unset == 'function', true);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$::',' Is chainable with $min'),
    fn: () => {

        assertEquals(typeof $.$().$min == 'function', true);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$::',' Is chainable with $max'),
    fn: () => {

        assertEquals(typeof $.$().$max == 'function', true);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$::',' Is chainable with $max'),
    fn: () => {

        assertEquals(typeof $.$().$max == 'function', true);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$::',' Is chainable with $currentDate'),
    fn: () => {

        assertEquals(typeof $.$().$currentDate == 'function', true);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$::',' Is chainable with $timestamp'),
    fn: () => {

        assertEquals(typeof $.$().$timestamp == 'function', true);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$addToSet::',' Is operator'),
    fn: () => {
        console.log('$.$addToSet(1)');
        console.log($.$addToSet(1));
        assertEquals($.isOperator($.$addToSet(1)), true);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$addToSet::',' Has $addToSet name'),
    fn: () => {
        assertEquals($.$addToSet(1).name, '$addToSet');
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$addToSet::',' null input should mean null value'),
    fn: () => {
        assertEquals($.$addToSet(null).value(), null);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$addToSet::',' When is scalar value'),
    fn: () => {
        assertEquals($.$addToSet(10).value(), 10);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$addToSet::',' When is null value with each'),
    fn: () => {
        assertEquals($.$addToSet(null).$each().value(), { '$each': [null] });
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$addToSet::',' When is an array value'),
    fn: () => {
        const value = [1, 2, 3];
        assertEquals($.$addToSet(value).value(), value);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$addToSet::',' When is scalar value with each'),
    fn: () => {
        const value = 10;
        assertEquals($.$addToSet(value).$each().value(), { '$each': [10] });
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$addToSet::',' When is array value with each'),
    fn: () => {
        const value = [1, 2, 3];
        assertEquals($.$addToSet(value).$each().value(), { '$each': [1, 2, 3] });
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$pop::',' Is operator'),
    fn: () => {
        assertEquals($.isOperator($.$pop(1)), true);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$pop::',' Has $pop name'),
    fn: () => {
        assertEquals($.$pop(1).name, '$pop');
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$pop::',' When direction not specified uses 1 by default'),
    fn: () => {
        assertEquals($.$pop().value(), 1);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$pop::',' When direction is 1 uses 1'),
    fn: () => {
        assertEquals($.$pop(1).value(), 1);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$pop::',' When direction is -1 uses -1'),
    fn: () => {
        assertEquals($.$pop(-1).value(), -1);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$pop::',' When chained with first uses -1'),
    fn: () => {
        assertEquals($.$pop().first().value(), -1);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$pop::',' When chained with last uses 1'),
    fn: () => {
        assertEquals($.$pop().last().value(), 1);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$pullAll::',' Is operator'),
    fn: () => {
        assertEquals($.isOperator($.$pullAll(1)), true);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$pullAll::',' Has $pullAll name'),
    fn: () => {
        assertEquals($.$pullAll(1).name, '$pullAll');
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$pullAll::',' When null value specified returns array of null element'),
    fn: () => {
        assertEquals($.$pullAll(null).value(), [null]);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$pullAll::',' When empty array specified returns empty array'),
    fn: () => {
        assertEquals($.$pullAll('Testing').value(), ['Testing']);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$pullAll::',' When array specified returns array'),
    fn: () => {
        const value = [1, 2, 3];
        assertEquals($.$pullAll(value).value(), value);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$pull::',' Is operator'),
    fn: () => {
        assertEquals($.isOperator($.$pull(1)), true);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$pull::',' Has $pull name'),
    fn: () => {
        assertEquals($.$pull(1).name, '$pull');
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$pull::',' When null value specified returns null'),
    fn: () => {
        assertEquals($.$pull(null).value(), null);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$pull::',' When scalar value specified returns value'),
    fn: () => {
        const value = 100;
        assertEquals($.$pull(value).value(), value);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$pull::',' When object value specified returns value'),
    fn: () => {
        const value = { score: 8, item: "B" };
        assertEquals($.$pull(value).value(), value);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$pull::',' When array value specified applies $in operator'),
    fn: () => {
        const value = ['A', 'B', 'C'];
        assertEquals($.$pull(value).value(), { '$in': value });
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$push::',' Is operator'),
    fn: () => {
        assertEquals($.isOperator($.$push(1)), true);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$push::',' Has $push name'),
    fn: () => {
        assertEquals($.$push().name, '$push');
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$push::',' Has $push name'),
    fn: () => {
        assertEquals($.$push().name, '$push');
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$push::',' When null value specified returns null'),
    fn: () => {
        assertEquals($.$push(null).value(), null);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$push::',' When undefined value specified returns undefined'),
    fn: () => {
        assertEquals($.$push().value(), undefined);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$push::',' When scalar value specified returns value'),
    fn: () => {
        const value = 9;
        assertEquals($.$push(value).value(), value);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$push::',' When object value specified returns value'),
    fn: () => {
        const value = { data: 'test'};
        assertEquals($.$push(value).value(), value);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$push::',' When array value specified returns array'),
    fn: () => {
        const value = [1, 2, 3];
        assertEquals($.$push(value).value(), value);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$push::',' When no value specified with $each'),
    fn: () => {
        assertEquals($.$push().$each().value(), { '$each': []});
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$push::',' When scalar value specified with $each'),
    fn: () => {
        const value = 100;
        assertEquals($.$push(value).$each().value(), { '$each': [value]});
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$push::',' When array value specified with $each'),
    fn: () => {
        const value = [1, 2, 3];
        assertEquals($.$push(value).$each().value(), { '$each': value});
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$push::',' When using $slice without $each throws'),
    fn: () => {
        function thrower () {
            $.$push(10).$slice(1);
        }
        assertThrows(thrower, Error);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$push::',' When using $slice with empty value is ignored'),
    fn: () => {
        assertEquals($.$push(10).$each().$slice().value(), { '$each': [10]});
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$push::',' When using $slice sets value'),
    fn: () => {
        assertEquals($.$push(10).$each().$slice(-3).value(), {'$each': [10], '$slice': -3});
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$push::',' When using $sort without $each throws'),
    fn: () => {
        function thrower () {
            $.$push(10).$sort(1);
        }
        assertThrows(thrower, Error);    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$push::',' When using $sort with empty value uses 1 by default'),
    fn: () => {
        assertEquals($.$push(10).$each().$sort().value(), {'$each': [10], '$sort': 1});
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$push::',' When using $sort sets value'),
    fn: () => {
        assertEquals($.$push(10).$each().$sort({ val: 1 }).value(), {'$each': [10], '$sort': { val: 1}});
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$push::',' When using $position without $each throws'),
    fn: () => {
        function thrower () {
            $.$push(10).$sort(1);
        }
        assertThrows(thrower, Error);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$push::',' When using $position with empty value is ignored'),
    fn: () => {
        assertEquals($.$push(10).$each().$position().value(), {'$each': [10]});
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$push::',' When using $position sets value'),
    fn: () => {
        assertEquals($.$push(10).$each().$position(0).value(), {'$each': [10], '$position': 0});
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$push::',' When using $position sets value'),
    fn: () => {
        assertEquals($.$push([{score: 9}, {score: 10}, {score: 7}])
        .$each()
        .$position(0)
        .$sort({score: -1})
        .$slice(3)
        .value(), {
            '$each': [{score: 9}, {score: 10}, {score: 7}],
            '$sort': {score: -1},
            '$slice': 3,
            '$position': 0
          });
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$slice *::',' Is operator'),
    fn: () => {
        assertEquals($.isOperator($.$slice(1)), true);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$slice *::',' Has $push name'),
    fn: () => {
        assertEquals($.$slice(1).name, '$push');
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$slice *::',' Is same as $push of empty array'),
    fn: () => {
        assertEquals($.$slice(1).value(), { '$each': [], '$slice': 1 });
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$sort *::',' Is operator'),
    fn: () => {
        assertEquals($.isOperator($.$sort(1)), true);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$sort *::',' Has $push name'),
    fn: () => {
        assertEquals($.$sort(1).name, '$push');
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$sort *::',' Is same as $push of empty array'),
    fn: () => {
        assertEquals($.$sort(1).value(), { '$each': [], '$sort': 1 });
    }
});

Deno.test({
    name: prefixSuffixMessage('Bitwise::','$bit::',' Is operator'),
    fn: () => {
        assertEquals($.isOperator($.$bit()), true);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$bit::',' Has $bit name'),
    fn: () => {
        assertEquals($.$bit().name, '$bit');
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$bit::$and::',' Is chainable with $and'),
    fn: () => {
        assertEquals(typeof $.$bit().$and == 'function', true);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$bit::$and::',' When chained with $and sets value'),
    fn: () => {
        assertEquals($.$bit().$and(1).value(), { 'and': 1 });
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$bit::$or::',' Is chainable with $or'),
    fn: () => {
        assertEquals(typeof $.$bit().$or == 'function', true);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$bit::$or::',' When chained with $or sets value'),
    fn: () => {
        assertEquals($.$bit().$or(1).value(), { 'or': 1 });
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$bit::$xor::',' Is chainable with $xor'),
    fn: () => {
        assertEquals(typeof $.$bit().$xor == 'function', true);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$bit::$xor::',' When chained with $xor sets value'),
    fn: () => {
        assertEquals($.$bit().$xor(1).value(), { 'xor': 1 });
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$bit::',' Value throws'),
    fn: () => {
        function thrower () {
            $.$bit().value();
        }
        assertThrows(thrower, Error);
    }
});


Deno.test({
    name: prefixSuffixMessage('Bitwise::','$and *::',' Is operator'),
    fn: () => {
        assertEquals($.isOperator($.$and(5)), true);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$and::',' Has $bit name'),
    fn: () => {
        assertEquals($.$and(5).name, '$bit');
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$and::',' When value provided'),
    fn: () => {
        assertEquals($.$and(5).value(), { 'and': 5 });
    }
});

Deno.test({
    name: prefixSuffixMessage('Bitwise::','$or *::',' Is operator'),
    fn: () => {
        assertEquals($.isOperator($.$or(5)), true);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$or::',' Has $bit name'),
    fn: () => {
        assertEquals($.$and(5).name, '$bit');
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$or::',' When value provided'),
    fn: () => {
        assertEquals($.$or(5).value(), { 'or': 5 });
    }
});

Deno.test({
    name: prefixSuffixMessage('Bitwise::','$xor *::',' Is operator'),
    fn: () => {
        assertEquals($.isOperator($.$xor(5)), true);
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$xor::',' Has $bit name'),
    fn: () => {
        assertEquals($.$xor(5).name, '$bit');
    }
});

Deno.test({
    name: prefixSuffixMessage('Array::','$xor::',' When value provided'),
    fn: () => {
        assertEquals($.$xor(5).value(), { 'xor': 5 });
    }
});
