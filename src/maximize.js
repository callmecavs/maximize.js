function getName() {
  const names = [
    'requestFullscreen',
    'msRequestFullscreen',
    'mozRequestFullScreen',
    'webkitRequestFullscreen'
  ]

  return names.reduce((prev, curr) => document.documentElement[curr] ? curr : prev, undefined)
}

export default (toggle, target = document.documentElement, callback) => {
  // determine fullscreen method
  const method = getName()

  toggle.addEventListener('click', event => {
    // prevent default if toggle is link
    toggle.tagName.toLowerCase() === 'a' && event.preventDefault()

    // silently fail
    if(target[method]) {
      // enter fullscreen and fire callback
      target[method]()
      callback && callback()
    }
  })
}
