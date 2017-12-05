import styled from 'styled-elements'
import {
  get,
  set
} from 'js-cookie'

let instance = null

class CookieJar {
  constructor () {
    if (!instance) {
      instance = this
    }

    this.check()

    return instance
  }

  check () {
    if (typeof get('cookie-jar-accepted') === 'undefined') {
      this.build()
    }
  }

  build () {
    this.box = styled.div`
      background-color: #111;
      bottom: 0;
      position: fixed;
      right: 0;
      z-index: 999999999;
    `

    // this.box.id = 'cookie-jar'
    // this.box.className = 'cookie-jar cookies-banner'

    document.body.appendChild(this.box({
      id: 'cookie-jar'
    }))
  }
}

export default new CookieJar()
