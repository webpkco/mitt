import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import mitt, { Handler, WildcardHandler, Emitter } from './mod.ts';
import { EventType, EventHandlerList, WildCardEventHandlerList, EventHandlerMap } from './mod.ts';


let emitter: Emitter<{ event1: string; event2: number }>;

Deno.test("on - should register an event handler for the given type", () => {
  emitter = mitt();
  const handler: Handler<string> = () => {};
  emitter.on('event1', handler);

  assertEquals(emitter.all.get('event1'), [handler]);
});

Deno.test("on - should register a wildcard event handler", () => {
  emitter = mitt();
  const handler: WildcardHandler<{ event1: string; event2: number }> = () => {};
  emitter.on('*', handler);

  assertEquals(emitter.all.get('*'), [handler]);
});

Deno.test("off - should remove the specified event handler for the given type", () => {
  emitter = mitt();
  const handler1: Handler<string> = () => {};
  const handler2: Handler<string> = () => {};
  emitter.on('event1', handler1);
  emitter.on('event1', handler2);

  emitter.off('event1', handler1);

  assertEquals(emitter.all.get('event1'), [handler2]);
});

Deno.test("off - should remove all event handlers for the given type if handler is not specified", () => {
  emitter = mitt();
  const handler1: Handler<string> = () => {};
  const handler2: Handler<string> = () => {};
  emitter.on('event1', handler1);
  emitter.on('event1', handler2);

  emitter.off('event1');

  assertEquals(emitter.all.get('event1'), []);
});

Deno.test("off - should remove the specified wildcard event handler", () => {
  emitter = mitt();
  const handler: WildcardHandler<{ event1: string; event2: number }> = () => {};
  emitter.on('*', handler);

  emitter.off('*', handler);

  assertEquals(emitter.all.get('*'), []);
});

Deno.test("emit - should invoke all handlers for the given type", () => {
  emitter = mitt();
  const handler1: Handler<string> = (data) => { assertEquals(data, 'data'); };
  const handler2: Handler<string> = (data) => { assertEquals(data, 'data'); };
  emitter.on('event1', handler1);
  emitter.on('event1', handler2);

  emitter.emit('event1', 'data');
});

Deno.test("emit - should invoke wildcard handlers after type-matched handlers", () => {
  emitter = mitt();
  const handler1: Handler<string> = (data) => { assertEquals(data, 'data'); };
  const handler2: WildcardHandler<{ event1: string; event2: number }> = (type, data) => {
    assertEquals(type, 'event1');
    assertEquals(data, 'data');
  };
  emitter.on('event1', handler1);
  emitter.on('*', handler2);

  emitter.emit('event1', 'data');
});
