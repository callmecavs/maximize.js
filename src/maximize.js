function getName() {
  const names = [
    'requestFullscreen',
    'msRequestFullscreen',
    'mozRequestFullScreen',
    'webkitRequestFullscreen'
  ]

  return names.reduce((prev, curr) => document.documentElement[curr] ? curr : prev, undefined)
}

export default (toggle, target = document.documentElement) => {
  // determine fullscreen method
  const method = getName()

  toggle.addEventListener('click', event => {
    // prevent default if toggle is link
    toggle.tagName.toLowerCase() === 'a' && event.preventDefault()

    // enter fullscreen, or fail silently
    target[method] && target[method]()
  })
}
