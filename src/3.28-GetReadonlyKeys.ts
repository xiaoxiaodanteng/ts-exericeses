/*
 * @Author: Walker Qin
 * @Description:
 * @Date: 2023-03-28 09:49:27
 * @LastEditTime: 2023-03-28 11:33:05
 */
/**
 * Implement a generic GetReadonlyKeys<T> that returns a union of the readonly keys of an Object.

For example

interface Todo {
  readonly title: string
  readonly description: string
  completed: boolean
}

type Keys = GetReadonlyKeys<Todo> // expected to be "title" | "description"

 */

// 思路：先实现一个Equal类型 传入X和Y，再通过Pick<T,K>和Readonly<Pick<T,K>>判断是否相等


/**
 * 该思路也是在网上找的 Equal的实现需理解<T>() => (T extends X ? 1 : 2) 与<T>() => (T extends Y ? 1 : 2)的判断
 * 如 let a: <T>() => (T extends number ? 1 : 2)
 *   let b: <T>() => (T extends string ? 1 : 2)
 *   a = b // 将会报错 a和b的类型不属于同一类型
 *
 *
 * let x: <T>() => (T extends string ? 1 : 2)
 * let y: <T>() => (T extends string ? 1 : 2)
 * x = y // 不报错 属于同一个类型
 *
 * 需回头再多写几遍
 */
type Equal<X, Y> = (<T>() => (T extends X ? 1 : 2)) extends
  (<T>() => (T extends Y ? 1 : 2))
    ? true
    : false

// 判断只读和不只读是否一致
type GetReadonlyKeys<T, K = keyof T> =  K extends keyof T
  ? Equal<Pick<T, K>, Readonly<Pick<T, K>>> extends true
  ? K
  : never
  : never

interface Todo {
  readonly title: string
  readonly description: string
  completed: boolean
}

type Keys = GetReadonlyKeys<Todo>