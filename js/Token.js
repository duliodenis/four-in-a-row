class Token {
  constructor(index, owner) {
    this.owner = owner
    this.id = `token-${index}-${owner.id}`
    this.dropped = false
  }

  /** 
   * Renders the tokens into the DOM
   */
  drawHTMLToken() {
    const token = document.createElement('div')
    document.getElementById('game-board-underlay').appendChild(token)
    token.setAttribute('id', this.id)
    token.setAttribute('class', 'token')
    token.style.backgroundColor = this.owner.color
    return token
  }

  /** 
   * Token getter method
   */
  get htmlToken() {
    return this.drawHTMLToken
  }
}