<p align="center">
    <img src="https://i.imgur.com/BqsX9NT.png" width="300" height="300" alt="mitt">
    <br>
    <a href="https://deno.land/x/mitt"><img src="https://shield.deno.dev/x/mitt" alt="deno module"></a>
    <a href="https://deno.land/x/mitt"><img src="https://deno.bundlejs.com/badge?q=https://deno.land/x/mitt/mod.ts" alt="gzip size"></a>
</p>

# Mitt

> Tiny 200b functional event emitter / pubsub.

-   **Zero dependencies:** doesn't rely on any other package or polyfill
-   **Microscopic:** weighs less than 200 bytes gzipped
-   **Useful:** a wildcard `"*"` event type listens to all events
-   **Familiar:** same names & ideas as [Node's EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter)
-   **Functional:** methods don't rely on `this`

## Table of Contents

-   [Usage](#usage)
-   [Examples & Demos](#examples--demos)
-   [API](#api)
-   [License](#license)

## Usage

```ts
import mitt from "mitt"


const emitter = mitt()

// listen to an event
emitter.on("foo", e => console.log("foo", e) )

// listen to all events
emitter.on("*", (type, e) => console.log(type, e) )

// fire an event
emitter.emit("foo", { a: "b" })

// clearing all events
emitter.all.clear()

// working with handler references:
function onFoo() {}
emitter.on("foo", onFoo)   // listen
emitter.off("foo", onFoo)  // unlisten
```

## Examples & Demos

[Example in Replit](https://replit.com/@hex2w/Deno?embed=true)

## API

---

#### Table of Contents

-   [mitt](#mitt)
-   [all](#all)
-   [on](#on)
    -   [Parameters](#parameters)
-   [off](#off)
    -   [Parameters](#parameters-1)
-   [emit](#emit)
    -   [Parameters](#parameters-2)

### mitt

Mitt: Tiny (~200b) functional event emitter / pubsub.

Returns **Mitt** 

### all

A Map of event names to registered handler functions.

### on

Register an event handler for the given type.

#### Parameters

-   `type` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [symbol](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol))** Type of event to listen for, or `'*'` for all events
-   `handler` **[Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** Function to call in response to given event

### off

Remove an event handler for the given type.
If `handler` is omitted, all handlers of the given type are removed.

#### Parameters

-   `type` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [symbol](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol))** Type of event to unregister `handler` from, or `'*'`
-   `handler` **[Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)?** Handler function to remove

### emit

Invoke all handlers for the given type.
If present, `'*'` handlers are invoked after type-matched handlers.

Note: Manually firing '\*' handlers is not supported.
#### Table of Contents

- [Mitt](#mitt)
  - [Table of Contents](#table-of-contents)
  - [Usage](#usage)
  - [Examples \& Demos](#examples--demos)
  - [API](#api)
      - [Table of Contents](#table-of-contents-1)
    - [mitt](#mitt-1)
    - [all](#all)
    - [on](#on)
      - [Parameters](#parameters)
    - [off](#off)
      - [Parameters](#parameters-1)
    - [emit](#emit)
      - [Table of Contents](#table-of-contents-2)
    - [mitt](#mitt-2)
    - [all](#all-1)
    - [on](#on-1)
      - [Parameters](#parameters-2)
    - [off](#off-1)
      - [Parameters](#parameters-3)
    - [emit](#emit-1)
      - [Parameters](#parameters-4)
  - [License](#license)

### mitt

Mitt: Tiny (~200b) functional event emitter / pubsub.

Returns **Mitt** 

### all

A Map of event names to registered handler functions.

### on

Register an event handler for the given type.

#### Parameters

-   `type` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [symbol](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol))** Type of event to listen for, or `"*"` for all events
-   `handler` **[Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** Function to call in response to given event

### off

Remove an event handler for the given type.
If `handler` is omitted, all handlers of the given type are removed.

#### Parameters

-   `type` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [symbol](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol))** Type of event to unregister `handler` from, or `"*"`
-   `handler` **[Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)?** Handler function to remove

### emit

Invoke all handlers for the given type.
If present, `"*"` handlers are invoked after type-matched handlers.

Note: Manually firing "\*" handlers is not supported.

#### Parameters

-   `type` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [symbol](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol))** The event type to invoke
-   `evt` **Any?** Any value (object is recommended and powerful), passed to each handler

---

## License

[MIT License](https://opensource.org/licenses/MIT) © [Jason Miller](https://jasonformat.com/), [Petr Kolonicz](https://github.com/hexrw)
