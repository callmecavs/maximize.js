function getName() {
  const names = [
    'requestFullscreen',
    'msRequestFullscreen',
    'mozRequestFullScreen',
    'webkitRequestFullscreen'
  ]

  // determine method name, using the documentElement
  return names.reduce((prev, curr) => document.documentElement[curr] ? curr : prev, undefined)
}

export default (toggle, target = document.documentElement) => {
  const method = getName()

  toggle.addEventListener('click', event => {
    // prevent default if toggle is a link
    toggle.tagName.toLowerCase() === 'a' && event.preventDefault()

    // enter fullscreen
    target[method]()
  })
}
