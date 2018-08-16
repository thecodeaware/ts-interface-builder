import { builderOf } from '../../src/simple/SimpleInterfaceBuilder';

interface Input {
  label: string;
  value: number;
  title?: string;
}

describe('SimpleInterfaceBuilder', () => {
  describe('should return', () => {
    it('built object', () => {
      // when
      const input: Input = builderOf<Input>()
        .with('title', 'titleValue')
        .with('label', 'labelValue')
        .with('value', 2)
        .build();

      // then
      expect(input.label).toEqual('labelValue');
      expect(input.title).toEqual('titleValue');
      expect(input.value).toEqual(2);
    });

    it('built object with undefined filed', () => {
      // when
      const input: Input = builderOf<Input>()
        .with('label', 'labelValue')
        .with('value', 2)
        .build();

      // then
      expect(input.label).toEqual('labelValue');
      expect(input.value).toEqual(2);
      expect(input.title).toBeUndefined();
    });
  });
});
