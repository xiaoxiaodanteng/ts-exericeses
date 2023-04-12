/*
 * @Author: Walker Qin
 * @Description:
 * @Date: 2023-04-02 22:42:07
 * @LastEditTime: 2023-04-03 09:30:33
 */
/**
 * Implement a generic TupleToUnion<T> which covers the values of a tuple to its values union.
For example
type Arr = ['1', '2', '3']
type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
 */
type Arr = ['1', '2', '3']
type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'

// type TupleToUnion<T extends Array<any>> = T[number]

type TupleToUnion<T extends Array<any>> = T extends Array<infer P> ? P : T

export {}