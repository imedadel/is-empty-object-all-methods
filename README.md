# is-empty-object-all-methods
> 5 functions to test if an object is empty or nah

## Usage

```js
import isEmpty from "is-empty-object-all-methods"

console.log(isEmpty.useEntries({}))
//=> true
```

Or, use a named import

```js
import {useEntries} from "is-empty-object-all-methods"

console.log(useEntries({}))
//=> true
```

## API

### `useEntries()`
> relies on Object.entries()

### `useEntriesWOC()`
> same as `useEntries()` but doesn't check for Object

### `useKeys()`
> relies on Object.keys()

### `useKeysWOC()`
> same as `useKeys()` but doesn't check for Object

### `useForIn()`
> relies on for .. in loop
