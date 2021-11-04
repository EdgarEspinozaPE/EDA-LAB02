let quadtree;
let count = 0;
let button1;
let canvas1;
let inpx;
let inpy;
let button2;
let rangex;
let rangetox;
let rangey;
let rangetoy;

function setup() {

    //creando espacio de dibujo
    createCanvas(800, 600);
    let boundary = new Rectangle(300, 300, 300, 300);
    quadtree = new QuadTree(boundary, 4); //inicializa el quadtree

    //inserccion de 50 puntos aleatorios
    for (let i = 0; i < 50; i++) {
        let p = new Point(Math.random() * 600, Math.random() * 600);
        quadtree.insert(p);
    }
    background(0);
    quadtree.show();

    stroke('red');
    /*
    rectMode(CENTER);
    let range = new Rectangle(random(400), random(400), random(100), random(100))
    rect(range.x, range.y, range.w * 2, range.h * 2);
    console.log(range.x,range.y,range.w,range.h);
    let points = [];
    quadtree.query(range, points);
    for (let p of points) {
        strokeWeight(4);
        point(p.x, p.y);
    }
    */

    //buttons y cajas de input.
    button1 = createButton('Insertar');
    button1.position(670, 80);
    button1.mousePressed(insertpoint);

    inpx = createInput('x');
    inpx.position(640, 120);
    inpx.size(50);

    inpy = createInput('y');
    inpy.position(700, 120);
    inpy.size(50);

    button2 = createButton('Buscar');
    button2.position(670, 180);
    button2.mousePressed(searchrange);

    rangex = createInput('x');
    rangex.position(640, 200);
    rangex.size(50);

    rangetox = createInput('x');
    rangetox.position(700, 200);
    rangetox.size(50);

    rangey = createInput('y');
    rangey.position(640, 220);
    rangey.size(50);

    rangetoy = createInput('y');
    rangetoy.position(700, 220);
    rangetoy.size(50);
}

function insertpoint() {
    let p = new Point(inpx.value(), inpy.value());
    quadtree.insert(p);
    quadtree.show();
    
}

function searchrange() {
    rectMode(CENTER);
    let range = new Rectangle(rangex.value(), rangey.value(), rangetox.value(), rangetoy.value());
    rect(range.x, range.y, range.w*2, range.h*2);
    let points = [];
    quadtree.query(range, points);
    for (let p of points) {
        strokeWeight(4);
        point(p.x, p.y);
    }
}