
const rect = document.getElementById("rectangles").getContext("2d");

rect.fillStyle = "green";
rect.fillRect(10, 10, 100, 60);

rect.clearRect(40, 25, 30, 20);

rect.strokeStyle = "red";
rect.strokeRect(140, 20, 100, 60);


// ---------------- Triángulos ----------------
const tri = document.getElementById("triangles").getContext("2d");

tri.beginPath();
tri.moveTo(30, 120);
tri.lineTo(150, 20);
tri.lineTo(270, 120);
tri.closePath();
tri.fillStyle = "lightblue";
tri.fill();
tri.stroke();


// ---------------- Cara sonriente / Pac-Man ----------------
const sm = document.getElementById("smiley").getContext("2d");

// Cara
sm.beginPath();
sm.arc(50, 75, 40, 0, Math.PI * 2, true);

// Boca
sm.moveTo(80, 75);
sm.arc(50, 75, 30, 0, Math.PI, false);

// Ojos
sm.moveTo(45, 65);
sm.arc(40, 65, 5, 0, Math.PI * 2, true);
sm.moveTo(65, 65);
sm.arc(60, 65, 5, 0, Math.PI * 2, true);

sm.stroke();

// Pac-Man
sm.beginPath();
sm.moveTo(130, 75);
sm.arc(130, 75, 40, 0.2 * Math.PI, 1.8 * Math.PI, false);
sm.closePath();
sm.fillStyle = "yellow";
sm.fill();


// ---------------- 12 arcos ----------------
const a12 = document.getElementById("arcs12").getContext("2d");

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 3; j++) {

    a12.beginPath();

    let x = 25 + j * 50;
    let y = 25 + i * 50;
    let r = 20;

    a12.arc(
      x,
      y,
      r,
      0,
      Math.PI + (Math.PI * j) / 2,
      i % 2 !== 0
    );

    if (i > 1) a12.fill();
    else a12.stroke();
  }
}


// ---------------- Curvas cuadráticas ----------------
const qc = document.getElementById("quadratic").getContext("2d");

qc.beginPath();
qc.moveTo(75, 25);
qc.quadraticCurveTo(25, 25, 25, 62.5);
qc.quadraticCurveTo(25, 100, 50, 100);
qc.quadraticCurveTo(50, 120, 30, 125);
qc.quadraticCurveTo(60, 120, 65, 100);
qc.quadraticCurveTo(125, 100, 125, 62.5);
qc.quadraticCurveTo(125, 25, 75, 25);
qc.stroke();


// ---------------- Curvas Bézier (corazón) ----------------
const bz = document.getElementById("bezier").getContext("2d");

bz.beginPath();
bz.moveTo(75, 40);
bz.bezierCurveTo(75, 37, 70, 25, 50, 25);
bz.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
bz.bezierCurveTo(20, 80, 40, 102, 75, 120);
bz.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
bz.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
bz.bezierCurveTo(85, 25, 75, 37, 75, 40);

bz.fillStyle = "pink";
bz.fill();

