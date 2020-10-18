class Game {
  constructor() {
    this.board = new Board()
    this.players = this.createPlayers()
    this.ready = false
  }

  /** 
   * Creates two player objects
   * @returns {Array} An array of two Player objects.
   */
  createPlayers() {
    let player1 = new Player("Player One", 1, '#e15258', true)
    let player2 = new Player("Player Two", 2, '#e59a13', false)
    return [player1, player2]
  }

  /** 
   * Active Player getter method returns the player whose turn it is
   * @returns {Object} the active player object
   */
  get activePlayer() {
    return this.players.find(player => player.active)
  }

  /* 
   * Gets game ready for play - game initialization
   */
  startGame() {
    this.board.drawHTMLBoard()
    this.activePlayer.activeToken.drawHTMLToken()
    this.ready = true
  }
}
