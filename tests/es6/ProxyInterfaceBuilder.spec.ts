import { builderOf } from '../../src';

interface Input {
  label: string;
  value: number;
  title?: string;
}

describe('ProxyInterfaceBuilder', () => {
  describe('should return', () => {
    it('built object', () => {
      // when
      const input: Input = builderOf<Input>()
        .title('title')
        .label('label')
        .value(2)
        .build();

      // then
      expect(input.label).toEqual('label');
      expect(input.title).toEqual('title');
      expect(input.value).toEqual(2);
    });

    it('built object with undefined filed', () => {
      // when
      const input: Input = builderOf<Input>()
        .label('label')
        .value(2)
        .build();

      // then
      expect(input.label).toEqual('label');
      expect(input.value).toEqual(2);
      expect(input.title).toBeUndefined();
    });
  });
});
