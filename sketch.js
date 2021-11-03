let quadtree;
let count = 0;
function setup() {
    createCanvas(600, 600);
    let boundary = new Rectangle(300, 300, 300, 300);
    quadtree = new QuadTree(boundary, 4);
    console.log(quadtree);
    for (let i = 0; i < 50; i++) {
        let p = new Point(Math.random() * 600, Math.random() * 600);
        quadtree.insert(p);
    }
    background(0);
    quadtree.show();
    stroke('red');
    rectMode(CENTER);
    let range = new Rectangle(random(400), random(400), random(100), random(100))
    rect(range.x, range.y, range.w * 2, range.h * 2);
    let points = [];
    quadtree.query(range, points);
    for (let p of points) {
        strokeWeight(4);
        point(p.x, p.y);
    }

}