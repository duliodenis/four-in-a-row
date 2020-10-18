class Board {
  constructor() {
    this.rows = 6
    this.columns = 7
    this.spaces = this.createSpaces()
    this.drawHTMLBoard()
  }

  /** 
   * Generates 2D array of spaces. 
   * @return  {Array}     An array of space objects
   */
  createSpaces() {
    const spaces = []
    for (let x = 0; x < this.columns; x++) {
      let column = []
      for (let y = 0; y < this.rows; y++) {
        let space = new Space(x, y)
        column.push(space)
      }
      spaces.push(column)
    }
    return spaces
  }

  /** 
   * Renders the board into the DOM
   */
  drawHTMLBoard() {
    for (let x = 0; x < this.columns; x++) {
      for (let y = 0; y < this.rows; y++) {
        this.spaces[x][y].drawSVGSpace() 
      }
    }
  }
}
