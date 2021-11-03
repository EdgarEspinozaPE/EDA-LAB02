let quadtree;
let count = 0;
let button1;
let canvas1;
let inpx;
let inpy;

function setup() {
    createCanvas(800, 600);
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

    //button experiments
    button1 = createButton('Insertar');
    button1.position(670, 80);
    button1.mousePressed(insertpoint);

    inpx = createInput('x');
    inpx.position(640, 120);
    inpx.size(50);

    inpy = createInput('y');
    inpy.position(700, 120);
    inpy.size(50);

}

function insertpoint() {
    let p = new Point(inpx.value(), inpy.value());
    quadtree.insert(p);
    quadtree.show();
    console.log('you are typing: ', inpx.value());
}