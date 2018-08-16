import { InterfaceBuilder } from './InterfaceBuilder.type';

class InterfaceBuilderProxy<T> {
  private readonly built: T = {} as T;
  private readonly proxy: InterfaceBuilder<T>;

  constructor() {
    this.proxy = new Proxy(
      {},
      {
        get: (target: object, propertyKey: PropertyKey) => this.handleProxyGet(propertyKey),
      }) as InterfaceBuilder<T>;
  }

  public getProxy(): InterfaceBuilder<T> {
    return this.proxy;
  }

  private handleProxyGet(propertyKey: PropertyKey): any {
    if (propertyKey === 'build') {
      return () => this.build();
    }

    return (value: any): InterfaceBuilder<T> => {
      Object.assign(this.built, {[propertyKey]: value});

      return this.proxy;
    };
  }

  private build(): T {
    return this.built;
  }
}

export function builderOf<T>(): InterfaceBuilder<T> {
  return new InterfaceBuilderProxy<T>().getProxy();
}
