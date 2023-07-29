export type TypeBuilder<T> = {
  [P in keyof T]-?: (arg: T[P]) => TypeBuilder<T>;
} & {
  build(): T;
};
