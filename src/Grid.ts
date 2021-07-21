export class Grid<T> {
    private grid: T[];
    public constructor(public width: number, public height: number) {
        this.grid = new Array<T>(height * width);
    }

    public set(x: number, y: number, value: T): void {
        this.grid[y * this.height + x] = value;
    }

    public get(x: number, y: number): T {
        return this.grid[y * this.height + x];
    }

    public fill(value: T): void {
        for (let i = 0; i < this.height * this.width; i++) {
            this.grid[i] = value;
        } 
    }
}
