/**
 * Implement a simpiled version of a Vue-like typing support.

By providing a function name SimpleVue (similar to Vue.extend or defineComponent), it should properly infer the this type inside computed and methods.

In this challenge, we assume that SimpleVue take an Object with data, computed and methods fields as it's only argument,

data is a simple function that returns an object that exposes the context this, but you won't be accessible to other computed values or methods.

computed is an Object of functions that take the context as this, doing some calculation and returns the result. The computed results should be exposed to the context as the plain return values instead of functions.

methods is an Object of functions that take the context as this as well. Methods can access the fields exposed by data, computed as well as other methods. The different between computed is that methods exposed as functions as-is.

The type of SimpleVue's return value can be arbitrary.
const instance = SimpleVue({
  data() {
    return {
      firstname: "Type",
      lastname: "Challenges",
      amount: 10,
    };
  },
  computed: {
    fullname() {
      return this.firstname + " " + this.lastname;
    },
  },
  methods: {
    hi() {
      alert(this.fullname.toLowerCase());
    },
  },
});
 */

/**
 * 思路：
 * 1.SimpleVue是一个工厂函数
 * 2.data函数的返回值挂载在this上，包括data函数的返回值类型
 * 3.
 */

type DataFn = () => object;

type Computed = Record<keyof object, () => any>;

class SimpleVue{
  constructor({}: {
    data?: DataFn
    computed?: Computed
  }) {}

  /**
   * 将data函数的返回值挂载到this上
   */
  static mountDataProperties() {}

  static mountComputed() {}

  static mountMethods() {}
}