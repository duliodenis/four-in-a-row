class Player {
  // playerID
  // red or yellow
  // makeMove
  constructor(name, id, color, active = false) {
    this.name = name
    this.id = id
    this.color = color
    this.active = active
    this.tokens = this.createTokens(21)
  }

  /**
 * Creates token objects for player
 * @param     {number}    num - Number of token objects to be created
 * @returns   {Array}     An array of the newly created token objects
 */
  createTokens(num) {
    const tokens = []
    for (let i=0; i < num; i++) {
      let token = new Token(i, this)
      tokens.push(token)
    }
    return tokens
  }

  /** 
   * Getter for unused tokens returns tokens which haven't been played yet
   * @returns {Array} array of unused tokens
   */
  get unusedTokens() {
    return this.tokens.filter(token => !token.active)
  }

  /** 
  * Next Active Token getter method returns the first inactive token found
  * @returns {Object} first token object in the array of unused tokens
  */
  get activeToken() {
    return this.unusedTokens[0]
  }
}
