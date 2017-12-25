'use strict'

function createLineSegment (len, end, line) {
  if (!len || isNaN(len) || len < 0) return

  return {
    length: len || 0,
    end: end || '*',
    line: line || '*',
    print: function () {
      let visualized = ''
      let remaining = this.length
      while (remaining > 0) {
        let isEnd = remaining === this.length || remaining === 1
        if (isEnd) {
          visualized += this.end
        } else {
          visualized += this.line
        }
        remaining--
      }
      return visualized
    }
  }
}
