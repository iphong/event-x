# event-x
Lightest javascript functional event emitters

## Install
```
npm install event-x
```

## Usage

### Event Listeners and Emitters

```js
import { when, emit } from 'event-x'

const dog = {}
const cat = {}

when(dog, 'bark').then(() => console.log('dog is barking'))
when(cat, 'sleep').then(() => console.log('cat is sleeping'))

emit(dog, 'bark')
emit(cat, 'sleep')
```

### Object Observer and Mutation

```
import { mutate, observe } from 'event-x

observe(dog).then(changes => console.log('dog changes'))
mutate(dog, { name: 'Scooby' })
```
