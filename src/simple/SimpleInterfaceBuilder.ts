export class SimpleInterfaceBuilder<T> {
  private properties: T = {} as T;

  public build(): T {
    return this.properties;
  }

  public with<K extends keyof T>(property: K, value: T[K]): this {
    this.properties[property] = value;

    return this;
  }
}

export function builderOf<T>(): SimpleInterfaceBuilder<T> {
  return new SimpleInterfaceBuilder<T>();
}
