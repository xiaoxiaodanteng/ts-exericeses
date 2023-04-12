/*
 * @Author: Walker Qin
 * @Description:
 * @Date: 2023-04-11 15:55:18
 * @LastEditTime: 2023-04-11 16:05:12
 */
type I = Union2Intersection<'foo' | 42 | true> // expected to be 'foo' & 42 & true

type Union2Intersection<T> = (T extends any ? (x: T) => any : never) extends (x: infer R) => any ? R : never

type A = 'foo' & 42 & true