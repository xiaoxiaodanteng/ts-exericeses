/*
 * @Author: Walker Qin
 * @Description:
 * @Date: 2023-04-03 13:45:01
 * @LastEditTime: 2023-04-03 13:45:08
 */
/**
 * Given an array, transform it into an object type and the key/value must be in the provided array.

For example:
 */

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

type TupleToObject<T extends readonly any[]> = {
  [K in T[number]]: K
}