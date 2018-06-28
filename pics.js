function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  this.pz = this.z;

  this.update = function() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  this.show = function() {
    fill(255);
    noStroke();

    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);

    var r = map(this.z, 0, width, 100, 1);
    image(img, sx, sy, r, r);
  }
}

//////////


var stars = [];

var speed;

function preload() {
  img1 = loadImage('https://scontent.xx.fbcdn.net/v/t1.0-0/s130x130/34395341_10209124795875342_2456476604730179584_n.jpg?_nc_cat=0&oh=ea090f572bef78d1d5d9f49c2baaef30&oe=5B9FDA19');
  img = loadImage('https://scontent.xx.fbcdn.net/v/t1.0-0/q82/s130x130/16681820_1582233405137851_9120296776701291928_n.jpg?_nc_cat=0&oh=a8d649e5b02c405b9b943fc5651dabdb&oe=5B9F1A1F')
}

function setup() {
  createCanvas(600, 600);
  for (var i = 0; i < 200; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  //speed = map(mouseX, 0, width, 0, 50);
  speed = 5;
  background(0);
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}
