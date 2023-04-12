/*
 * @Author: Walker Qin
 * @Description:
 * @Date: 2023-04-11 18:50:30
 * @LastEditTime: 2023-04-11 18:58:33
 */
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

const p = PromiseAll([promise1, promise2, promise3] as const);

declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{ [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K] }>;

export {};
