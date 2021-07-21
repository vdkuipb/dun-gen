import { Grid } from "./Grid";

const grid: Grid<string> = new Grid<string>(10, 10);
grid.fill('.');

function render() {
    for (let y = 0, h = grid.height; y < h; y++) {
        for (let x = 0, w = grid.width; x < w; x++) {
            process.stdout.write(grid.get(x ,y) + ' ');
        }
        process.stdout.write('\n');
    }
}

render();