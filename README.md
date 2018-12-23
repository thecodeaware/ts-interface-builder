# Typescript Interface Builder

[![](https://img.shields.io/npm/v/@thecodeaware/ts-interface-builder.svg)](https://badge.fury.io/js/%40thecodeaware%2Fts-interface-builder)
[![MIT License](http://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/thecodeaware/ts-interface-builder/blob/master/LICENSE.md)
![](https://img.shields.io/npm/types/@thecodeaware/ts-interface-builder.svg)
![](https://img.shields.io/npm/dm/@thecodeaware/ts-interface-builder.svg)
> Builder pattern for typescript interfaces.

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

__ES5 interface builder__

```typescript
import { builderOf } from '@thecodeaware/ts-interface-builder/dist/es5';

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
This project is licensed under the terms of the MIT license - check [LICENSE](https://github.com/thecodeaware/ts-interface-builder/blob/master/LICENSE.md) file.

# Changelog
[CHANGELOG](https://github.com/thecodeaware/ts-interface-builder/blob/master/CHANGELOG.md) 