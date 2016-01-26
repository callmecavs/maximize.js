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

export default () => {
  const method = getName()
}
