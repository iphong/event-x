# event-x
Lightest javascript functional event emitters

## Install
```
npm install event-x
```

## Usage

### Event Listeners and Emitters

```js
import { emit, listen } from 'event-x'

const dog = {}

// Attach listener
const dispose = listen(dog, 'bark').then(() => console.log('dog is barking'))

// Emit event
emit(dog, 'bark')// should log "dog is barking"

// Remove listener
dispose()

emit(dog, 'bark') // Nothing will happen

```
