import { TypeBuilder } from './TypeBuilder.type';

class ProxyTypeBuilder<T> {
  private built: T = {} as T;
  private readonly proxy: TypeBuilder<T>;

  constructor(defaults?: T) {
    this.assignDefaults(defaults);
    this.proxy = new Proxy(
      {},
      {
        get: (target: object, propertyKey: string) => this.handleProxyGet(propertyKey),
      },
    ) as TypeBuilder<T>;
  }

  public getProxy(): TypeBuilder<T> {
    return this.proxy;
  }

  private handleProxyGet(propertyKey: string) {
    if (propertyKey === 'build') {
      return () => this.build();
    }

    return (value: unknown): TypeBuilder<T> => {
      Object.assign(this.built, { [propertyKey]: value });

      return this.proxy;
    };
  }

  private assignDefaults(defaults: T): void {
    if (defaults) {
      this.built = Object.assign({}, this.built, defaults);
    }
  }

  private build(): T {
    return this.built;
  }
}

/**
 * Provides builders method based on given `T` type.
 *
 * @param defaults Default T object to ensure that all required properties are filled
 * @returns TypeBuilder
 */
export function builderOf<T>(defaults?: T): TypeBuilder<T> {
  return new ProxyTypeBuilder<T>(defaults).getProxy();
}
