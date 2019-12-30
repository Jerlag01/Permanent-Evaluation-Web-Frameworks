export class TikTakToe{
    private grid: string[][];

    constructor(){
        this.grid = [];
        for (let i = 0; i < 3; i++) {
            this.grid[i] = [];
            for (let j = 0; j < 3; j++) {
                this.grid[i][j] = " ";
            }
        }
    }

    public Resetgrid(){
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.grid[i][j] = " ";               
            }
        }
    }
    
    get Grid(){
        return this.grid;
    }

    public SetgridEllement(character : string, xPos : number, yPos : number){
        this.grid[xPos][yPos] = character;
    }

    public GameWon(): boolean{
        for (let i = 0; i < 3; i++) {
            if (this.grid[i][0] == this.grid[i][1] && this.grid[i][1] == this.grid[i][2] && this.grid[i][2] != " ")
                return true;
            if (this.grid[0][i] == this.grid[1][i] && this.grid[1][i] == this.grid[2][i] && this.grid[2][i] != " ")
                return true;
        }
        if (this.grid[0][0] == this.grid[1][1] && this.grid[1][1] == this.grid[2][2] && this.grid[2][2] != " ")
                return true;
        if (this.grid[2][0] == this.grid[1][1] && this.grid[1][1] == this.grid[0][2] && this.grid[0][2] != " ")
                return true;
        
        return false;
    }
    
}