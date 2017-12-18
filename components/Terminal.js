// Create Element
const Terminal = document.createElement('div')
const Getter = document.createElement('div')
const Setter = document.createElement('textarea')
const Writer = document.createElement('span')
const Cursor = document.createElement('span')

// Style box
Terminal.style.cssText = `
  width: 100%;
  min-height: 24px;
  display: block;
  color: #fff;
  border-radius: 0;
  border: 0;
  margin: 0;
  padding: 0;
  outline: none;
  background: transparent;
  overflow: auto;
  line-height: 24px;
  color: #ccc;
  cursor: text;
  font: 12px/1.2 Menlo,Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;
`

Setter.style.cssText = `
  left: -1000px;
  position: absolute
`

Cursor.style.cssText = `
  font-size: 12px;
  background-color: #fff;
  position: relative;
  width: 8px;
  height: 12px;
  display: block;
`

Writer.style.cssText = `
  font-family: cursor, courier;
  font-weight: bold;
  height: 36px;
`

// Listen to keys
// const events = ['keydown', 'keyup', 'keypress']
// events.forEach(type => {
  Terminal.addEventListener('keyup', event => {
    writeit(event)
    moveIt(event)
  })
// })

// Focus on textarea on click
Terminal.addEventListener('click', e => {
  Setter.focus()
})

// Translate newlines to new lines
const nl2br = txt => txt.replace(/\n/g, '<br />~ root#')

const writeit = e => {
  console.log(e)
  e = e || window.event
  let text = Setter.value

  if (e.keyCode === 8) {
    text = text.slice(0, -1);
  }

  Writer.innerHTML = nl2br(text)
}

const moveIt = e => {
  e = e || window.event
  let keycode = e.keyCode || e.which
  let left = parseInt(Cursor.style.left, 10)
  if (keycode == 37 && left >= (0 - ((count - 1) * 10))) {
    Cursor.style.left = left - 10 + "px"
  } else if (keycode == 39 && left + 10 <= 0) {
    Cursor.style.left = left + 10 + "px"
  }
}

const blink = () => {
  if (Cursor.style.display == 'none') {
    Cursor.style.display = 'inline-block'
  } else {
    Cursor.style.display = 'none'
  }
}

setInterval(blink, 500)

Getter.appendChild(Writer)
Getter.appendChild(Cursor)
Terminal.appendChild(Setter)
Terminal.appendChild(Getter)

export default Terminal
