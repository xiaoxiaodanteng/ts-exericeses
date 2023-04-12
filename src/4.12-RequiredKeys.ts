/*
 * @Author: Walker Qin
 * @Description:
 * @Date: 2023-04-12 10:27:13
 * @LastEditTime: 2023-04-12 17:13:11
 */
/**
 * Implement the advanced util type RequiredKeys<T>, which picks all the required keys into a union.

For example

type Result = RequiredKeys<{ foo: number; bar?: string }>;
// expected to be “foo”

 */
type Foo = { foo: number; bar?: string };

type Result = RequiredKeys<{ foo: number; bar?: string }>; // expected to be “foo”

type MyRequired<T extends Record<string, unknown>> = { [K in keyof T]-?: T[K] };

type FooA = Pick<Foo, "foo">; // { foo: number }
type FooB = Pick<Foo, "bar">; // { bar?: number }

// {} extends { foo: number } -> false
type Result1 = {} extends FooA ? true : false;

// {} extends { bar?: number } -> true
type Result2 = {} extends FooB ? true : false;

/**
 * type Result = RequiredKeys<{ foo: number; bar?: string }>;
 * -> Result = { foo: 'foo', bar: never }['foo' | 'bar'];
 * -> Result = 'foo'
 */
/* type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T]; */

/* type RequiredKeys<T> = keyof {
  [K in keyof T as Omit<T, K> extends T ? never : K]: T[K];
}; */

type RequiredKeys<T> = keyof {
  [K in keyof T as {} extends Pick<T, K> ? never : K]: T[K];
};
