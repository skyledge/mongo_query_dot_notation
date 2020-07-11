export { assertEquals, assertThrows } from "https://deno.land/std/testing/asserts.ts";
import { rgb24, dim, red, green, blue, cyan, yellow } from "https://deno.land/std/fmt/colors.ts";

const consoleColor = {r:156, g:220, b:254};

export function prefixSuffixMessage(prefix:string='', suffix:string='', message: string='') {
    return dim(prefix) + rgb24(suffix, consoleColor) + message;
}
