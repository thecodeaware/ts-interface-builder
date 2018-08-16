# Typescript Interface Builder

Builder pattern for typescript interfaces.

# Installation

```bash

npm install @thecodeaware/ts-interface-builder

```

# Usage

__Interface builder based on ES6 Proxy__

```typescript
import { builderOf } from '@thecodeaware/ts-interface-builder'; 

interface Input {
  label: string;
  value: number;
  title?: string;
}

const input: Input = builderOf<Input>()
    .title('title')
    .label('label')
    .value(2)
    .build();
```

__Simple interface builder (ES5)__

```typescript
import { builderOf } from '@thecodeaware/ts-interface-builder/dist/simple/SimpleInterfaceBuilder'; 

interface Input {
  label: string;
  value: number;
  title?: string;
}

const input: Input = builderOf<Input>()
    .with('title', 'titleValue')
    .with('label', 'labelValue')
    .with('value', 2)
    .build();
```

# Contribution

Feel free to add improvements. Remember about the tests!

```bash
npm install
```

```bash
npm run test
```

# License
This project is licensed under the terms of the MIT license - check [LICENSE](./LICENSE.md) file.