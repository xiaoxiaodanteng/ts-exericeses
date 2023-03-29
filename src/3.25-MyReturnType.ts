/*
 * @Author: Walker Qin
 * @Description:
 * @Date: 2023-03-25 17:15:47
 * @LastEditTime: 2023-03-25 17:21:00
 */
const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

type MyReturnType<T> = T extends (...args: any[]) => infer P ? P : any

type a = MyReturnType<typeof fn> // 1 | 2
