// determine method name, using the documentElement

function getName() {
  const names = [
    'requestFullscreen',
    'msRequestFullscreen',
    'mozRequestFullScreen',
    'webkitRequestFullscreen'
  ]

  return names.reduce((prev, curr) => document.documentElement[curr] ? curr : prev, undefined)
}

export default (button, element = document.documentElement) => {
  const method = getName()

  button.addEventListener('click', event => {
    // prevent default if button is a link
    button.tagName.toLowerCase() === 'a' && event.preventDefault()

    // enter fullscreen
    element[method]()
  })
}
