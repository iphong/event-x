# event-x
Lightest javascript functional event emitters

## Install
```
npm install event-x
```

## Usage

```js
import events from 'event-x'

const dog = {}

events.on(dog, 'bark', () => console.log('dog barked'))

events.emit(dog, 'bark')// should log "dog barked"

events.off(dog, 'bark')

events.emit(dog, 'bark') // Nothing will happen
```

### async / await
```
const container = {}

const delay = () => new Promise(resolve => setTimeout(resolve, 3000))

events.on(container, 'foo', delay)

events.emit(container, 'foo', 'bar').then(console.log) // shoud log "bar" after 3 seconds

```
