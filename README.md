# event-x

Event emitter the functional programming way rewritten from the ground up. No more constructors, extends or mixins bullshit, it works seamlessly out of the box and you can implement it into your existing code base without any modification. 

You can make anything in your application to be capable of emitting events, and when i say “anything” i really mean it. From React Components, Backbone Views, Containers, DOM Elements or just simply any plain objects, And it presence is completely transparent and you can opt out anytime.

## Install
```
npm install event-x
```

## Basic Usage

```js
import events from 'event-x'

const dog = {}

events.on(dog, 'bark', () => console.log('dog barked'))

events.emit(dog, 'bark')// should log "dog barked"

events.off(dog, 'bark')

events.emit(dog, 'bark') // Nothing will happen
```

### Asynchronous operation

If any listener return a promise, then the setState will 
wait for all of them to be resolved first. Since this is
ES6 Promise therefore it fully supports async / await operation

```js
(async () => {
  const container = {}

  const delay = () => new Promise(resolve => setTimeout(resolve, 3000))

  events.on(container, 'foo', delay)

  await events.emit(container, 'foo')
  await events.emit(container, 'foo')
  console.log('Done') // shoud log "Done" after 6 seconds
})()

```

### It works on anything

Attach listeners to any objects by calling `events.on()`

Trigger events on any objects by calling `events.emit()`

---

Check out my other library [Container-X](https://github.com/iphong/container-x) 
for easy state management in your React application.
