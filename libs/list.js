'use strict'

function list () {
  return {
    length: 0,
    push: function (el) {
      this[this.length] = el
      this.length++
    },
    pop: function () {
      this.length--
      let last = this[this.length]
      this[this.length] = undefined
      return last
    }
  }
}