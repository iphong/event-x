# event-x
Lightest javascript functional event emitters

## Install
```
npm install event-x
```

## Usage

### Event Listeners and Emitters

```js
import events from 'event-x'

const dog = {}

events.on(dog, 'bark').then(() => console.log('dog barked'))

events.emit(dog, 'bark')// should log "dog is barking"

events.off(dog, 'bark')

events.emit(dog, 'bark') // Nothing will happen
```
