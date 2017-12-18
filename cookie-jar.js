import styled from 'styled-elements'
import {
  get,
  set
} from 'js-cookie'

import Close from './components/Close'
import Terminal from './components/Terminal'

// Singleton
let instance = null

class CookieJar {
  constructor () {
    if (!instance) {
      instance = this
    }

    this.check()

    return instance
  }

  // Check wether the cookie was already set or not
  check () {
    if (typeof get('cookie-jar-accepted') === 'undefined') {
      this.build()
    }
  }

  // Build DOM structure
  build () {
    const Wrapper = document.createElement('div')
    Wrapper.style.cssText = `
      background-color: #111;
      bottom: 0;
      position: fixed;
      right: 0;
      z-index: 999999999;
    `

    const Box = document.createElement('div')
    Box.style.cssText = `
      width: 380px;
      min-height: 120px;
      position: relative;
      padding: 20px 20px 0;
      box-sizing: border-box;
    `

    Box.appendChild(Close)
    Box.appendChild(Terminal)
    Wrapper.appendChild(Box)
    document.body.appendChild(Wrapper)
  }
}

export default new CookieJar()
