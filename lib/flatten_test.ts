import * as $ from '../mod.ts';
import { prefixSuffixMessage, assertEquals } from "../deps-dev.ts";


Deno.test({
    name: prefixSuffixMessage('Flatten::Primitive Types::','{ }',' Should return an empty object given a {}'),
    fn: () => {
        assertEquals($.flatten({}),{});
    }
});

Deno.test({
    name: prefixSuffixMessage('Flatten::Primitive Types::','Number',' Should return a number given a number input'),
    fn: () => {
        assertEquals($.flatten(23),23);
    }
});

Deno.test({
    name: prefixSuffixMessage('Flatten::Primitive Types::','String',' Should return a string given a string input'),
    fn: () => {
        assertEquals($.flatten('test'),'test');
    }
});

Deno.test({
    name: prefixSuffixMessage('Flatten::Primitive Types::','Boolean',' Should return a boolean given a boolean input'),
    fn: () => {
        assertEquals($.flatten(true),true);
    }
});

Deno.test({
    name: prefixSuffixMessage('Flatten::Primitive Types::','Date',' Should return a date given a date input'),
    fn: () => {
        const date = new Date();
        assertEquals($.flatten(date),date);
    }
});

Deno.test({
    name: prefixSuffixMessage('Flatten::Primitive Types::','Array',' Should return an Array given an Array input'),
    fn: () => {
        const array = [1,2,3];
        assertEquals($.flatten(array),array);
    }
});

Deno.test({
    name: prefixSuffixMessage('Flatten::Primitive Types::','Array (mixed)',' Should return an Array of mixed complex objects given an Array of mixed complex objects'),
    fn: () => {
        const mixedArray = [1, true, 'A', {x: 10, y: 20}];
        assertEquals($.flatten(mixedArray),mixedArray);
    }
});

Deno.test({
    name: prefixSuffixMessage('MongoDB::Types::Supported Types',' Flatten directly', '...todo'),
    ignore: true,
    fn: () => {
        // todo: when a module becomes available with MongoTypes.
    }
});

Deno.test({
    name: prefixSuffixMessage('MongoDB::Types::Supported Types',' Flatten as nested property', '...todo'),
    ignore: true,
    fn: () => {
        // todo: when a module becomes available with MongoTypes.
    }
})

Deno.test({
    name: prefixSuffixMessage('Flatten::Simple Objects::',' Key with string value', ''),
    fn: () => {
        const obj = { a: 'test' };
        assertEquals($.flatten(obj).hasOwnProperty('$set'), true);
        assertEquals($.flatten(obj)['$set'], obj);
    }
})

Deno.test({
    name: prefixSuffixMessage('Flatten::Simple Objects::',' Key with array value', ''),
    fn: () => {
        const obj = { a: [1, 2, 3] };
        assertEquals($.flatten(obj).hasOwnProperty('$set'), true);
        assertEquals($.flatten(obj)['$set'], obj);
    }
});

Deno.test({
    name: prefixSuffixMessage('Flatten::Simple Objects::',' Key with mixed value', ''),
    fn: () => {
        const obj = { a: [1, 2, 3], b: 'test', c: {} };
        assertEquals($.flatten(obj).hasOwnProperty('$set'), true);
        assertEquals($.flatten(obj)['$set'], obj);
    }
})

Deno.test({
    name: prefixSuffixMessage('Flatten::Simple Objects::',' Object with undefined constructor', ''),
    fn: () => {
        const obj = { value: 'test' };
        // @ts-ignore
        obj.constructor = undefined;
        assertEquals($.flatten(obj).hasOwnProperty('$set'), true);
        assertEquals($.flatten(obj)['$set'], obj);
    }
})

Deno.test({
    name: prefixSuffixMessage('Flatten::Nexted Objects::($ positional operator)::',' When positional operator with $set', ''),
    fn: () => {
        const obj = { points: $.$().$set(10) };
        assertEquals($.flatten(obj), { $set: { 'points.$': 10 } });
    }
})

Deno.test({
    name: prefixSuffixMessage('Flatten::Nexted Objects::($ positional operator)::',' When positional operator with value', ''),
    fn: () => {
        const obj = { points: $.$().value('test') };
        assertEquals($.flatten(obj), { $set: { 'points.$': 'test' } });
    }
})

Deno.test({
    name: prefixSuffixMessage('Flatten::Nexted Objects::($ positional operator)::',' When positional operator with inc', ''),
    fn: () => {
        const obj = { points: $.$().$inc(-1) };
        assertEquals($.flatten(obj), { $inc: { 'points.$': -1 } });
    }
})

Deno.test({
    name: prefixSuffixMessage('Flatten::Nexted Objects::($ positional operator)::',' When positional operator with field specified', ''),
    fn: () => {
        const obj = { points: $.$('std').$set(0.5) };
        assertEquals($.flatten(obj), { $set: { 'points.$.std': 0.5 } });
    }
})

Deno.test({
    name: prefixSuffixMessage('Flatten::Nexted Objects::($ positional operator)::',' When positional operator with field specified in nested object', ''),
    fn: () => {
        const obj = {stats: { group: { points: $.$('std').$set(0.5) }}};
        assertEquals($.flatten(obj), { $set: { 'stats.group.points.$.std': 0.5 } });
    }
})

Deno.test({
    name: prefixSuffixMessage('Flatten::Empty Values::',' When property value is null sets to null', ''),
    fn: () => {
        const obj = { x: null };
        assertEquals($.flatten(obj), { $set: { x: null } });
    }
})
Deno.test({
    name: prefixSuffixMessage('Flatten::Empty Values::',' When property value is undefined sets to undefined', ''),
    fn: () => {
        const obj = { x: undefined };
        assertEquals($.flatten(obj), { $set: { x: undefined } });
    }
})
Deno.test({
    name: prefixSuffixMessage('Flatten::Simple objects using operators::',' When a property uses $inc', ''),
    fn: () => {
        const obj = { x: 1, y: $.$inc(2) };
        assertEquals($.flatten(obj), { $set: { x: 1 }, $inc: { y: 2 } });
    }
})
Deno.test({
    name: prefixSuffixMessage('Flatten::Simple objects using operators::',' When more properties use $inc', ''),
    fn: () => {
        const obj = { x: 1, y: $.$inc(), z: $.$inc(10) };
        assertEquals($.flatten(obj), { $set: { x: 1 }, $inc: { y: 1, z: 10 } });
    }
})
Deno.test({
    name: prefixSuffixMessage('Flatten::Simple objects using operators::',' When a property uses $mul', ''),
    fn: () => {
        const obj = { x: 1, y: $.$mul(2) };
        assertEquals($.flatten(obj), { $set: { x: 1 }, $mul: { y: 2 } });
    }
})
Deno.test({
    name: prefixSuffixMessage('Flatten::Simple objects using operators::',' When more properties use $mul', ''),
    fn: () => {
        const obj = { x: 1, y: $.$mul(), z: $.$mul(10) };
        assertEquals($.flatten(obj), { $set: { x: 1 }, $mul: { y: 1, z: 10 } });
    }
})
Deno.test({
    name: prefixSuffixMessage('Flatten::Simple objects using operators::',' When a property uses $rename', ''),
    fn: () => {
        const obj = { x: 1, y: $.$rename(2) };
        assertEquals($.flatten(obj), { $set: { x: 1 }, $rename: { y: 2 } });
    }
})
Deno.test({
    name: prefixSuffixMessage('Flatten::Simple objects using operators::',' When more properties use $rename', ''),
    fn: () => {
        const obj = { x: 1, y: $.$rename('alias 1'), z: $.$rename('alias 2') };
        assertEquals($.flatten(obj), { $set: { x: 1 }, $rename: { y: 'alias 1', z: 'alias 2' } });
    }
})
Deno.test({
    name: prefixSuffixMessage('Flatten::Simple objects using operators::',' When a property uses $setOnInsert', ''),
    fn: () => {
        const obj = { x: 1, y: $.$setOnInsert(2) };
        assertEquals($.flatten(obj), { $set: { x: 1 }, $setOnInsert: { y: 2 } });
    }
})
Deno.test({
    name: prefixSuffixMessage('Flatten::Simple objects using operators::',' When more properties use $setOnInsert', ''),
    fn: () => {
        const obj = { x: 1, y: $.$setOnInsert([1, 2]), z: $.$setOnInsert(3) };
        assertEquals($.flatten(obj), { $set: { x: 1 }, $setOnInsert: { y: [1, 2], z: 3 } });
    }
})
Deno.test({
    name: prefixSuffixMessage('Flatten::Simple objects using operators::',' When a property uses $set', ''),
    fn: () => {
        const obj = { x: 1, y: $.$set(2) };
        assertEquals($.flatten(obj), { $set: { x: 1, y: 2 } });
    }
})
Deno.test({
    name: prefixSuffixMessage('Flatten::Simple objects using operators::',' When more properties use $set', ''),
    fn: () => {
        const obj = {
            x: 1,
            y: $.$set([1, 2, 3]),
            z: $.$set({ inner: 'object', a: { b: 'c' } })
          };
            assertEquals($.flatten(obj), { $set: { x: 1, y: [1, 2, 3], z: { inner: 'object', a: { b: 'c' } } } });
    }
})
Deno.test({
    name: prefixSuffixMessage('Flatten::Simple objects using operators::',' When a property uses $unset', ''),
    fn: () => {
        const obj = { x: 1, y: $.$unset() };
        assertEquals($.flatten(obj), { $set: { x: 1 }, $unset: { y: '' } });
    }
})
Deno.test({
    name: prefixSuffixMessage('Flatten::Simple objects using operators::',' When more properties use $unset', ''),
    fn: () => {
        const obj = { x: 1, y: $.$unset(), z: $.$unset() };
        assertEquals($.flatten(obj), { $set: { x: 1 }, $unset: { y: '', z: '' } });
    }
})
Deno.test({
    name: prefixSuffixMessage('Flatten::Simple objects using operators::',' When a property uses $min', ''),
    fn: () => {
        const obj = { x: 1, y: $.$min(10) };
        assertEquals($.flatten(obj), { $set: { x: 1 }, $min: { y: 10 } });
    }
})
Deno.test({
    name: prefixSuffixMessage('Flatten::Simple objects using operators::',' When more properties use $min', ''),
    fn: () => {
        const obj = { x: 1, y: $.$min(-1), z: $.$min('abc') };
        assertEquals($.flatten(obj), { $set: { x: 1 }, $min: { y: -1, z: 'abc' } });
    }
})
Deno.test({
    name: prefixSuffixMessage('Flatten::Simple objects using operators::',' when a property uses $max', ''),
    fn: () => {
        const obj = { x: 1, y: $.$max(10) };
        assertEquals($.flatten(obj), { $set: { x: 1 }, $max: { y: 10 } });
    }
})
Deno.test({
    name: prefixSuffixMessage('Flatten::Simple objects using operators::',' when more properties use $max', ''),
    fn: () => {
        const obj = { x: 1, y: $.$max(-1), z: $.$max('abc') };
        assertEquals($.flatten(obj), { $set: { x: 1 }, $max: { y: -1, z: 'abc' } });
    }
})
Deno.test({
    name: prefixSuffixMessage('Flatten::Simple objects using operators::',' When a property uses $currentDate', ''),
    fn: () => {
        const obj = { x: 1, y: $.$currentDate() };
        assertEquals($.flatten(obj), { $set: { x: 1 }, $currentDate: { y: { $type: 'date' } } });
    }
})
Deno.test({
    name: prefixSuffixMessage('Flatten::Simple objects using operators::',' When more properties use $max', ''),
    fn: () => {
        const obj = { x: 1, y: $.$currentDate(), z: $.$currentDate() };
        assertEquals($.flatten(obj), { $set: { x: 1 }, $currentDate: { y: {$type: 'date'}, z: {$type: 'date'} } });
    }
})
Deno.test({
    name: prefixSuffixMessage('Flatten::Simple objects using operators::',' When more properties use $max', ''),
    fn: () => {
        const obj = { x: 1, y: $.$timestamp() };
        assertEquals($.flatten(obj), { $set: { x: 1 }, $currentDate: { y: { $type: 'timestamp' } } });
    }
})
Deno.test({
    name: prefixSuffixMessage('Flatten::Simple objects using operators::',' When more properties use $timestamp', ''),
    fn: () => {
        const obj = { x: 1, y: $.$timestamp(), z: $.$timestamp() };
        assertEquals($.flatten(obj), { $set: { x: 1 }, $currentDate: { y: { $type: 'timestamp' }, z: { $type: 'timestamp' } } });
    }
})
Deno.test({
    name: prefixSuffixMessage('Flatten::Simple objects using operators::',' When a property uses null', ''),
    fn: () => {
        const obj = { x: 1, y: null };
        assertEquals($.flatten(obj), { $set: { x: 1,  y: null } });
    }
})
Deno.test({
    name: prefixSuffixMessage('Flatten::Simple objects using operators::',' Using all operators', ''),
    fn: () => {
        const obj = {
            a1: 1, a2: 11,
            b1: $.$inc(2), b2: $.$inc(22),
            c1: $.$mul(3), c2: $.$mul(33),
            d1: $.$rename('alias 4'), d2: $.$rename('alias 44'),
            e1: $.$setOnInsert([5]), e2: $.$setOnInsert([5, 5]),
            f1: $.$set(new Date(2000, 1, 1)), f2: $.$set(new Date(2016, 1, 1)),
            g1: $.$unset(), g2: $.$unset(),
            h1: $.$min(8), h2: $.$min(88),
            i1: $.$max(9), i2: $.$max(99),
            j1: $.$currentDate(), j2: $.$currentDate(),
            k1: $.$timestamp(), k2: $.$timestamp()
          };

          const expectedValue = {
            $set: { a1: 1, a2: 11, f1: new Date(2000, 1, 1), f2: new Date(2016, 1, 1) },
            $inc: { b1: 2, b2: 22 },
            $mul: { c1: 3, c2: 33 },
            $rename: { d1: 'alias 4', d2: 'alias 44' },
            $setOnInsert: { e1: [5], e2: [5, 5] },
            $unset: { g1: '', g2: '' },
            $min: { h1: 8, h2: 88 },
            $max: { i1: 9, i2: 99 },
            $currentDate: { j1: { $type: 'date' }, j2: { $type: 'date' }, k1: { $type: 'timestamp' }, k2: { $type: 'timestamp' } },
          };

          assertEquals($.flatten(obj), expectedValue);
    }
})

Deno.test({
    name: prefixSuffixMessage('Flatten::Nested Objects::',' When has inner property', ''),
    fn: () => {
        const obj = { a: {b: {c: 1}} };
        assertEquals($.flatten(obj), {$set: {'a.b.c': 1}});
    }
})

Deno.test({
    name: prefixSuffixMessage('Flatten::Nested Objects::',' When has inner property that is empty object', ''),
    fn: () => {
        const obj = { a: {} };
        assertEquals($.flatten(obj), {$set: {'a': {}}});
    }
})
Deno.test({
    name: prefixSuffixMessage('Flatten::Nested Objects::',' When has many inner properties', ''),
    fn: () => {
        const obj = {
            a: {
              b: {
                c: 1,
                d: 2,
                x: {
                  y: {
                    z: [1]
                  }
                }
              }
            },
            x: 'test'
          };

          const expectedValue = {
            $set: {
              'a.b.c': 1,
              'a.b.d': 2,
              'a.b.x.y.z': [1],
              x: 'test'
            }
          };
          assertEquals($.flatten(obj), expectedValue);
    }
})
Deno.test({
    name: prefixSuffixMessage('Flatten::Nested Objects::',' When has many inner properties with operators', ''),
    fn: () => {
        const id = 'test';
      const obj = {
        id: id,
        a: {
          b: {
            c: $.$min(1),
            d: 2,
            x: {
              y: {
                z: $.$inc(3),
                w: $.$min(100)
              },
              t: $.$mul(5)
            }
          }
        },
        n: $.$set({a: {b: {c: 'd'}}}),
        x: $.$rename('test')
      };

      const expectedValue = {
        $set: {
          'id': id,
          'a.b.d': 2,
          'n': { a: { b: { c: 'd' } } }
        },
        $min: { 'a.b.c': 1, 'a.b.x.y.w': 100 },
        $inc: { 'a.b.x.y.z': 3 },
        $mul: { 'a.b.x.t': 5 },
        $rename: { 'x': 'test' }
      };


        assertEquals($.flatten(obj), expectedValue);
    }
})
