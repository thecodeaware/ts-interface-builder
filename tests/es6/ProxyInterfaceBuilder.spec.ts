import { builderOf } from '../../src';

interface Input {
  label: string;
  value: number;
  title?: string;
  colors: string[];
}

describe('ProxyInterfaceBuilder', () => {
  describe('should return', () => {
    it('built object with all properties filled', () => {
      // when
      const input: Input = builderOf<Input>()
        .title('title')
        .label('label')
        .value(2)
        .colors(['red'])
        .build();

      // then
      expect(input.label).toEqual('label');
      expect(input.title).toEqual('title');
      expect(input.colors).toEqual(['red']);
      expect(input.value).toEqual(2);
    });

    it('built object with undefined property when builder method was omitted', () => {
      // when
      const input: Input = builderOf<Input>()
        .label('label')
        .value(2)
        .build();

      // then
      expect(input.label).toEqual('label');
      expect(input.value).toEqual(2);
      expect(input.title).toBeUndefined();
      expect(input.colors).toBeUndefined();
    });

    it('built object with all required properties filled when defaults used', () => {
      // when
      const input: Input = builderOf<Input>({
        label: 'defaultLabel',
        title: 'defaultTitle',
        value: 1,
        colors: ['red', 'blue'],
      })
        .label('label')
        .value(1)
        .build();

      // then
      expect(input.label).toEqual('label');
      expect(input.title).toEqual('defaultTitle');
      expect(input.colors).toEqual(['red', 'blue']);
      expect(input.value).toEqual(1);
    });
  });

  it('should not throw error when defaults has empty value ', () => {
    // when
    const input: Input = builderOf<Input>(null)
      .label('label')
      .value(2)
      .build();

    // then
    expect(input.label).toEqual('label');
    expect(input.value).toEqual(2);
    expect(input.title).toBeUndefined();
    expect(input.colors).toBeUndefined();
  });

  it('should build object after build method called, omit property with name "build"', () => {
    // given
    interface Publication {
      name: string;
      build: string;
    }

    // when
    const publication: Publication = builderOf<Publication>()
      .name('name')
      .build();

    // then
    expect(publication).toEqual({name: 'name'});
  });
});
