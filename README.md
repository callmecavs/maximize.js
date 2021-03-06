# Maximize.js

[![Maximize.js on NPM](https://img.shields.io/npm/v/maximize.js.svg)](https://www.npmjs.com/package/maximize.js)

A tiny wrapper for cross-browser requestFullscreen (not the entire [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API)).

## Usage

Maximize was developed with a modern JavaScript workflow in mind. To use it, it's recommended you have a build system in place that can transpile ES6, and bundle modules. For a minimal boilerplate that does so, check out [outset](https://github.com/callmecavs/outset).

Follow these steps to get started:

* [Install](#install)
* [Call](#call)

## Install

Using NPM, install Maximize.js, and add it to your `package.json` dependencies.

```
$ npm install maximize.js --save
```

## Call

Simply import Maximize, then call it.

* **Passed one element:** clicking the element will _fullscreen the browser_
* **Passed two elements:** clicking the first element will _fullscreen the second element_
* **Passed two elements, and a callback:**: clicking the first element will _fullscreen the second_, then the callback will be fired

```es6
// import Maximize
import maximize from 'maximize.js'

// clicking .button will fullscreen the browser
// event.preventDefault will be called if .button is an <a> tag
maximize(document.querySelector('.button'))

// clicking .toggle will fullscreen .video
maximize(document.querySelector('.toggle'), document.querySelector('.video'))

// clicking .toggle will fullscreen .video, then fire the callback
maximize(document.querySelector('.toggle'), document.querySelector('.video'), () => {
  // ...
})
```

## License

MIT. © 2016 Michael Cavalea

[![Built With Love](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
