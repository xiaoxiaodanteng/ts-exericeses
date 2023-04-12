/*
 * @Author: Walker Qin
 * @Description:
 * @Date: 2023-04-12 17:14:54
 * @LastEditTime: 2023-04-12 19:19:05
 */
/**
 * Implement Capitalize<T> which converts the first letter of a string to uppercase and leave the rest as-is.

For example

type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'
 */
type capitalized = Capitalize<"hello world">; // expected to be 'Hello world'

type Str = "hello world";

// type Capitalize<T> = T extends `${infer F}${infer R}` ? `${Uppercase<F>}${R}` : T
type Capitalize<T> = T extends `${infer F}${infer R}`
  ? `${Uppercase<F>}${R}`
  : T;

type R = "hello world" extends `${infer F}${infer M}${infer R}` ? M : false; // R -> ello world

export {};
