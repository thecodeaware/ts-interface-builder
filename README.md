# Typescript Interface Builder

[![](https://img.shields.io/npm/v/@thecodeaware/ts-interface-builder.svg)](https://www.npmjs.com/package/@thecodeaware/ts-interface-builder)
[![Build Status](https://travis-ci.com/thecodeaware/ts-interface-builder.svg?branch=master)](https://travis-ci.com/thecodeaware/ts-interface-builder)
[![codecov](https://codecov.io/gh/thecodeaware/ts-interface-builder/branch/master/graph/badge.svg)](https://codecov.io/gh/thecodeaware/ts-interface-builder)
[![MIT License](http://img.shields.io/badge/license-MIT-brightgreen.svg)](./LICENSE.md)
[![](https://img.shields.io/badge/Semantic%20Versioning-2.0.0-informational.svg)](https://semver.org/spec/v2.0.0.html)
[![](https://img.shields.io/badge/Keep%20a%20Changelog-1.0.0-important.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wITFBYMammazQAAAfdJREFUOMtd00uIT3EUB/DP/48ZMtwII2QxrDxyhdSkZkGNMDM1WakrWajZWHltUGYyJTZeKXnU9QiF5LHyiEhIt5mVpDQkEbmMvPLYnL/kbu7vd8893+8533O+lTJLJXmhzNIhaMY6zEc9vqDAMTxI8uKj/55K7VBm6Ql8xH4MxyxMQDXA5uNQkhfXaqR/Acos3YFPkXwRU3A8KmjHVKxGN44meXGmBlIps3R8fGwrs/Q8TuIeFmMUHmMEduEgurAnyYuzZZaqlFm6HNMwBGMxiIU4F+c5aMUmrMWleG9DfzWYHmEnrmJekheduIXLSV70oAOnsRtH0IMttRau4wRa8ARX8BQ30JLkxffQaQFWBlk7GrC9isloDPGa8CIG8w7tZZbuixH3YRwuYFJo1VvFrxDrAybiawDUhw7dSV78xG8MxTAM4D6WVSPwC3UhWl0AVHETq8ssrcQ/1SAYGYTvq1HqGyyJ3hvxA4fQhs+RmEV8NGYmeTGIMZUySw/jLE4FSDfW422U2xCzXxTxO9iK6ZhbKbN0KWbgW6zvKayJxMFY7xv4jg04GvfzaB2Ku9iMFdiIvejF69CiGQfwHKvi/hCtSV4M1rywKFZ1a/igFUn0O4Db4ZsOvEdXzZmVf+zchM5oZ3YI+SwSXqEffUlevAxSSV74A7nKrjedcKMAAAAAAElFTkSuQmCC)](./CHANGELOG.md)
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

// with default object
const inputWithDefaults: Input = builderOf<Input>({
    title: 'defaultTitle',
    label: 'defaultLabel',
    value: 1,
  })
  .title('title')
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

# ToDo

* add defaults to the es5 builder
* add typedoc doc in the code
* generate documentation file from typedoc

# Contribution

Feel free to add improvements. Remember about the tests!

```bash
npm install
```

```bash
npm run test
```
