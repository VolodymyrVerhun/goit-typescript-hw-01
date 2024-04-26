function merge<T extends object, U>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}
