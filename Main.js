let Birds = [];
let Enemies = [];
let Obstacles = [];
let Slings = [];
let stretch = 0.001;
let vert = 0;
let launched = false;
let lev = 1;
let won = false;
let pickeb = 0;
let marcopolo = false;
let timer = [];
let tut = true;
let tutnum = 1;

function preload() {
	bg = loadImage("Background.png");
	rocks = loadImage("rocks.png")
} //preload

function setup() {
	createCanvas(1300, 900);
	levelreset(1);
	timer.push(new time(999999, timer.length));
	timer.push(new time(999999, timer.length));
} //setup

function draw() {
	if (tut == true) {
		background(0);
		textSize(70);
		fill(255, 130, 200, 200);
		stroke(255, 255, 255);
		strokeWeight(2);
		textAlign(CENTER);
		if (tutnum == 1) {
			text("Welcome to the game!\nClick 't' to move on.", width / 2, height / 2);
		} else if (tutnum == 2) {
			text("Click and drag with the mouse\nto pull the bird back.", width / 2, height / 6);
			noStroke();
			Birds[pickeb].display();
			Slings[0].display();
			Slings[0].open();
			if (mouseIsPressed) {
				if (launched == false) {
					let dx = mouseX - Slings[0].x;
					let dy = mouseY - Slings[0].y;
					let scalex = dx / (1 + abs(dx) / 150);
					let scaley = dy / (1 + abs(dy) / 150);
					Birds[pickeb].x = Slings[0].x + scalex;
					Birds[pickeb].y = Slings[0].y + scaley;
					angleMode(DEGREES);
					Slings[0].theta = 90 - atan(abs(Birds[pickeb].x - Slings[0].x) / abs(Birds[pickeb].y - Slings[0].y));
					Birds[pickeb].e = (((0.5) * (Slings[0].k)) * ((dist(Slings[0].x, Slings[0].y, Birds[pickeb].x, Birds[pickeb].y)) * dist(Slings[0].x, Slings[0].y, Birds[pickeb].x, Birds[pickeb].y)));
					if ((Slings[0].x - Birds[pickeb].x) > 0) {
						Birds[pickeb].right = true;
					} else if ((Slings[0].x - Birds[pickeb].x) < 0) {
						Birds[pickeb].right = false;
					}
					if ((Slings[0].y - Birds[pickeb].y) < 0) {
						Birds[pickeb].up = true;
					} else if ((Slings[0].y - Birds[pickeb].y) > 0) {
						Birds[pickeb].up = false;
					}
				} else {}
			}
		} else if (tutnum == 3) {
			text("Pulling the bird generates spring energy.\nThe further you pull\nThe stronger the shot.", width / 2, height / 6);
			noStroke();
			Birds[pickeb].display();
			Slings[0].display();
			Slings[0].open();
			if (mouseIsPressed) {
				if (launched == false) {
					let dx = mouseX - Slings[0].x;
					let dy = mouseY - Slings[0].y;
					let scalex = dx / (1 + abs(dx) / 150);
					let scaley = dy / (1 + abs(dy) / 150);
					Birds[pickeb].x = Slings[0].x + scalex;
					Birds[pickeb].y = Slings[0].y + scaley;
					angleMode(DEGREES);
					Slings[0].theta = 90 - atan(abs(Birds[pickeb].x - Slings[0].x) / abs(Birds[pickeb].y - Slings[0].y));
					Birds[pickeb].e = (((0.5) * (Slings[0].k)) * ((dist(Slings[0].x, Slings[0].y, Birds[pickeb].x, Birds[pickeb].y)) * dist(Slings[0].x, Slings[0].y, Birds[pickeb].x, Birds[pickeb].y)));
					if ((Slings[0].x - Birds[pickeb].x) > 0) {
						Birds[pickeb].right = true;
					} else if ((Slings[0].x - Birds[pickeb].x) < 0) {
						Birds[pickeb].right = false;
					}
					if ((Slings[0].y - Birds[pickeb].y) < 0) {
						Birds[pickeb].up = true;
					} else if ((Slings[0].y - Birds[pickeb].y) > 0) {
						Birds[pickeb].up = false;
					}
				} else {}
			}
		} else if (tutnum == 4) {
			text("The dotted trail shows\nthe predicted flight path.", width / 2, height / 6);
			noStroke();
			Birds[pickeb].display();
			Slings[0].display();
			Slings[0].open();
			drawShotGuide(Birds[pickeb], Slings[0]);
			if (mouseIsPressed) {
				if (launched == false) {
					let dx = mouseX - Slings[0].x;
					let dy = mouseY - Slings[0].y;
					let scalex = dx / (1 + abs(dx) / 150);
					let scaley = dy / (1 + abs(dy) / 150);
					Birds[pickeb].x = Slings[0].x + scalex;
					Birds[pickeb].y = Slings[0].y + scaley;
					angleMode(DEGREES);
					Slings[0].theta = 90 - atan(abs(Birds[pickeb].x - Slings[0].x) / abs(Birds[pickeb].y - Slings[0].y));
					Birds[pickeb].e = (((0.5) * (Slings[0].k)) * ((dist(Slings[0].x, Slings[0].y, Birds[pickeb].x, Birds[pickeb].y)) * dist(Slings[0].x, Slings[0].y, Birds[pickeb].x, Birds[pickeb].y)));
					if ((Slings[0].x - Birds[pickeb].x) > 0) {
						Birds[pickeb].right = true;
					} else if ((Slings[0].x - Birds[pickeb].x) < 0) {
						Birds[pickeb].right = false;
					}
					if ((Slings[0].y - Birds[pickeb].y) < 0) {
						Birds[pickeb].up = true;
					} else if ((Slings[0].y - Birds[pickeb].y) > 0) {
						Birds[pickeb].up = false;
					}
				} else {}
			}
		} else if (tutnum == 5) {
			text("Try to aim at the green enemies.\nThe goal is to destroy them.", width / 2, height / 6);
			noStroke();
			Birds[pickeb].display();
			Slings[0].display();
			Slings[0].open();
			drawShotGuide(Birds[pickeb], Slings[0]);
			for (let i = 0; i < Enemies.length; i++) {
				Enemies[i].display();
			}
			if (mouseIsPressed) {
				if (launched == false) {
					let dx = mouseX - Slings[0].x;
					let dy = mouseY - Slings[0].y;
					let scalex = dx / (1 + abs(dx) / 150);
					let scaley = dy / (1 + abs(dy) / 150);
					Birds[pickeb].x = Slings[0].x + scalex;
					Birds[pickeb].y = Slings[0].y + scaley;
					angleMode(DEGREES);
					Slings[0].theta = 90 - atan(abs(Birds[pickeb].x - Slings[0].x) / abs(Birds[pickeb].y - Slings[0].y));
					Birds[pickeb].e = (((0.5) * (Slings[0].k)) * ((dist(Slings[0].x, Slings[0].y, Birds[pickeb].x, Birds[pickeb].y)) * dist(Slings[0].x, Slings[0].y, Birds[pickeb].x, Birds[pickeb].y)));
					if ((Slings[0].x - Birds[pickeb].x) > 0) {
						Birds[pickeb].right = true;
					} else if ((Slings[0].x - Birds[pickeb].x) < 0) {
						Birds[pickeb].right = false;
					}
					if ((Slings[0].y - Birds[pickeb].y) < 0) {
						Birds[pickeb].up = true;
					} else if ((Slings[0].y - Birds[pickeb].y) > 0) {
						Birds[pickeb].up = false;
					}
				} else {}
			}
		} else if (tutnum == 6) {
			text("Use obstacles strategically.\nThey can block your shots.\nOr hit enemies", width / 2, height / 6);
			noStroke();
			Birds[pickeb].display();
			Slings[0].display();
			Slings[0].open();
			noStroke();
			Obstacles[0].display();
			drawShotGuide(Birds[pickeb], Slings[0]);
			Enemies[0].display();
			if (mouseIsPressed) {
				if (launched == false) {
					let dx = mouseX - Slings[0].x;
					let dy = mouseY - Slings[0].y;
					let scalex = dx / (1 + abs(dx) / 150);
					let scaley = dy / (1 + abs(dy) / 150);
					Birds[pickeb].x = Slings[0].x + scalex;
					Birds[pickeb].y = Slings[0].y + scaley;
					angleMode(DEGREES);
					Slings[0].theta = 90 - atan(abs(Birds[pickeb].x - Slings[0].x) / abs(Birds[pickeb].y - Slings[0].y));
					Birds[pickeb].e = (((0.5) * (Slings[0].k)) * ((dist(Slings[0].x, Slings[0].y, Birds[pickeb].x, Birds[pickeb].y)) * dist(Slings[0].x, Slings[0].y, Birds[pickeb].x, Birds[pickeb].y)));
					if ((Slings[0].x - Birds[pickeb].x) > 0) {
						Birds[pickeb].right = true;
					} else if ((Slings[0].x - Birds[pickeb].x) < 0) {
						Birds[pickeb].right = false;
					}
					if ((Slings[0].y - Birds[pickeb].y) < 0) {
						Birds[pickeb].up = true;
					} else if ((Slings[0].y - Birds[pickeb].y) > 0) {
						Birds[pickeb].up = false;
					}
				} else {}
			}
		} else if (tutnum == 7) {
			text("Each bird has mass.\nWhich affects velocity, range,\nAnd momentum", width / 2, height / 6);
			noStroke();
			Birds[pickeb].display();
			Slings[0].display();
			Slings[0].open();
			noStroke();
			Obstacles[0].display();
			drawShotGuide(Birds[pickeb], Slings[0]);
			Enemies[0].display();
			if (mouseIsPressed) {
				if (launched == false) {
					let dx = mouseX - Slings[0].x;
					let dy = mouseY - Slings[0].y;
					let scalex = dx / (1 + abs(dx) / 150);
					let scaley = dy / (1 + abs(dy) / 150);
					Birds[pickeb].x = Slings[0].x + scalex;
					Birds[pickeb].y = Slings[0].y + scaley;
					angleMode(DEGREES);
					Slings[0].theta = 90 - atan(abs(Birds[pickeb].x - Slings[0].x) / abs(Birds[pickeb].y - Slings[0].y));
					Birds[pickeb].e = (((0.5) * (Slings[0].k)) * ((dist(Slings[0].x, Slings[0].y, Birds[pickeb].x, Birds[pickeb].y)) * dist(Slings[0].x, Slings[0].y, Birds[pickeb].x, Birds[pickeb].y)));
					if ((Slings[0].x - Birds[pickeb].x) > 0) {
						Birds[pickeb].right = true;
					} else if ((Slings[0].x - Birds[pickeb].x) < 0) {
						Birds[pickeb].right = false;
					}
					if ((Slings[0].y - Birds[pickeb].y) < 0) {
						Birds[pickeb].up = true;
					} else if ((Slings[0].y - Birds[pickeb].y) > 0) {
						Birds[pickeb].up = false;
					}
				} else {}
			}
		} else if (tutnum == 8) {
			text("A bird's mass is indicated by its redness.\nBrighter red is higher mass", width / 2, height / 6);
			noStroke();
			Birds[pickeb].display();
			Slings[0].display();
			Slings[0].open();
			noStroke();
			Obstacles[0].display();
			drawShotGuide(Birds[pickeb], Slings[0]);
			Enemies[0].display();
			if (mouseIsPressed) {
				if (launched == false) {
					let dx = mouseX - Slings[0].x;
					let dy = mouseY - Slings[0].y;
					let scalex = dx / (1 + abs(dx) / 150);
					let scaley = dy / (1 + abs(dy) / 150);
					Birds[pickeb].x = Slings[0].x + scalex;
					Birds[pickeb].y = Slings[0].y + scaley;
					angleMode(DEGREES);
					Slings[0].theta = 90 - atan(abs(Birds[pickeb].x - Slings[0].x) / abs(Birds[pickeb].y - Slings[0].y));
					Birds[pickeb].e = (((0.5) * (Slings[0].k)) * ((dist(Slings[0].x, Slings[0].y, Birds[pickeb].x, Birds[pickeb].y)) * dist(Slings[0].x, Slings[0].y, Birds[pickeb].x, Birds[pickeb].y)));
					if ((Slings[0].x - Birds[pickeb].x) > 0) {
						Birds[pickeb].right = true;
					} else if ((Slings[0].x - Birds[pickeb].x) < 0) {
						Birds[pickeb].right = false;
					}
					if ((Slings[0].y - Birds[pickeb].y) < 0) {
						Birds[pickeb].up = true;
					} else if ((Slings[0].y - Birds[pickeb].y) > 0) {
						Birds[pickeb].up = false;
					}
				} else {}
			}
		} else if (tutnum == 9) {
			if (Birds[pickeb].m >= 2) {
				text("For example this bird is:\n" + Birds[pickeb].m + " kilograms.\nWhich is why it is bright", width / 2, height / 6);
			} else if (Birds[pickeb].m < 2) {
				text("For example this bird is:\n" + Birds[pickeb].m + " kilograms.\nWhich is why it is dull", width / 2, height / 6);
			}
			noStroke();
			Birds[pickeb].display();
			Slings[0].display();
			Slings[0].open();
			noStroke();
			Obstacles[0].display();
			drawShotGuide(Birds[pickeb], Slings[0]);
			Enemies[0].display();
			if (mouseIsPressed) {
				if (launched == false) {
					let dx = mouseX - Slings[0].x;
					let dy = mouseY - Slings[0].y;
					let scalex = dx / (1 + abs(dx) / 150);
					let scaley = dy / (1 + abs(dy) / 150);
					Birds[pickeb].x = Slings[0].x + scalex;
					Birds[pickeb].y = Slings[0].y + scaley;
					angleMode(DEGREES);
					Slings[0].theta = 90 - atan(abs(Birds[pickeb].x - Slings[0].x) / abs(Birds[pickeb].y - Slings[0].y));
					Birds[pickeb].e = (((0.5) * (Slings[0].k)) * ((dist(Slings[0].x, Slings[0].y, Birds[pickeb].x, Birds[pickeb].y)) * dist(Slings[0].x, Slings[0].y, Birds[pickeb].x, Birds[pickeb].y)));
					if ((Slings[0].x - Birds[pickeb].x) > 0) {
						Birds[pickeb].right = true;
					} else if ((Slings[0].x - Birds[pickeb].x) < 0) {
						Birds[pickeb].right = false;
					}
					if ((Slings[0].y - Birds[pickeb].y) < 0) {
						Birds[pickeb].up = true;
					} else if ((Slings[0].y - Birds[pickeb].y) > 0) {
						Birds[pickeb].up = false;
					}
				} else {}
			}
		} else if (tutnum == 10) {
			text("Obstacles also have different masses.\nIndicated by the blueness", width / 2, height / 6);
			noStroke();
			Birds[pickeb].display();
			Slings[0].display();
			Slings[0].open();
			noStroke();
			Obstacles[0].display();
			drawShotGuide(Birds[pickeb], Slings[0]);
			Enemies[0].display();
			if (mouseIsPressed) {
				if (launched == false) {
					let dx = mouseX - Slings[0].x;
					let dy = mouseY - Slings[0].y;
					let scalex = dx / (1 + abs(dx) / 150);
					let scaley = dy / (1 + abs(dy) / 150);
					Birds[pickeb].x = Slings[0].x + scalex;
					Birds[pickeb].y = Slings[0].y + scaley;
					angleMode(DEGREES);
					Slings[0].theta = 90 - atan(abs(Birds[pickeb].x - Slings[0].x) / abs(Birds[pickeb].y - Slings[0].y));
					Birds[pickeb].e = (((0.5) * (Slings[0].k)) * ((dist(Slings[0].x, Slings[0].y, Birds[pickeb].x, Birds[pickeb].y)) * dist(Slings[0].x, Slings[0].y, Birds[pickeb].x, Birds[pickeb].y)));
					if ((Slings[0].x - Birds[pickeb].x) > 0) {
						Birds[pickeb].right = true;
					} else if ((Slings[0].x - Birds[pickeb].x) < 0) {
						Birds[pickeb].right = false;
					}
					if ((Slings[0].y - Birds[pickeb].y) < 0) {
						Birds[pickeb].up = true;
					} else if ((Slings[0].y - Birds[pickeb].y) > 0) {
						Birds[pickeb].up = false;
					}
				} else {}
			}
		} else if (tutnum == 11) {
			if (Obstacles[0].m >= 1.5) {
				text("For example this obstacle is:\n" + Obstacles[0].m + " kilograms.\nWhich is why it is bright", width / 2, height / 6);
			} else if (Obstacles[0].m < 1.5) {
				text("For example this obstacle is:\n" + Obstacles[0].m + " kilograms.\nWhich is why it is dull", width / 2, height / 6);
			}
			noStroke();
			Birds[pickeb].display();
			Slings[0].display();
			Slings[0].open();
			noStroke();
			Obstacles[0].display();
			drawShotGuide(Birds[pickeb], Slings[0]);
			Enemies[0].display();
			if (mouseIsPressed) {
				if (launched == false) {
					let dx = mouseX - Slings[0].x;
					let dy = mouseY - Slings[0].y;
					let scalex = dx / (1 + abs(dx) / 150);
					let scaley = dy / (1 + abs(dy) / 150);
					Birds[pickeb].x = Slings[0].x + scalex;
					Birds[pickeb].y = Slings[0].y + scaley;
					angleMode(DEGREES);
					Slings[0].theta = 90 - atan(abs(Birds[pickeb].x - Slings[0].x) / abs(Birds[pickeb].y - Slings[0].y));
					Birds[pickeb].e = (((0.5) * (Slings[0].k)) * ((dist(Slings[0].x, Slings[0].y, Birds[pickeb].x, Birds[pickeb].y)) * dist(Slings[0].x, Slings[0].y, Birds[pickeb].x, Birds[pickeb].y)));
					if ((Slings[0].x - Birds[pickeb].x) > 0) {
						Birds[pickeb].right = true;
					} else if ((Slings[0].x - Birds[pickeb].x) < 0) {
						Birds[pickeb].right = false;
					}
					if ((Slings[0].y - Birds[pickeb].y) < 0) {
						Birds[pickeb].up = true;
					} else if ((Slings[0].y - Birds[pickeb].y) > 0) {
						Birds[pickeb].up = false;
					}
				} else {}
			}
		} else if (tutnum == 12) {
			text("Slingshots have different resistances.\nIndicated by the greenness", width / 2, height / 6);
			noStroke();
			Birds[pickeb].display();
			Slings[0].display();
			Slings[0].open();
			noStroke();
			Obstacles[0].display();
			drawShotGuide(Birds[pickeb], Slings[0]);
			Enemies[0].display();
			if (mouseIsPressed) {
				if (launched == false) {
					let dx = mouseX - Slings[0].x;
					let dy = mouseY - Slings[0].y;
					let scalex = dx / (1 + abs(dx) / 150);
					let scaley = dy / (1 + abs(dy) / 150);
					Birds[pickeb].x = Slings[0].x + scalex;
					Birds[pickeb].y = Slings[0].y + scaley;
					angleMode(DEGREES);
					Slings[0].theta = 90 - atan(abs(Birds[pickeb].x - Slings[0].x) / abs(Birds[pickeb].y - Slings[0].y));
					Birds[pickeb].e = (((0.5) * (Slings[0].k)) * ((dist(Slings[0].x, Slings[0].y, Birds[pickeb].x, Birds[pickeb].y)) * dist(Slings[0].x, Slings[0].y, Birds[pickeb].x, Birds[pickeb].y)));
					if ((Slings[0].x - Birds[pickeb].x) > 0) {
						Birds[pickeb].right = true;
					} else if ((Slings[0].x - Birds[pickeb].x) < 0) {
						Birds[pickeb].right = false;
					}
					if ((Slings[0].y - Birds[pickeb].y) < 0) {
						Birds[pickeb].up = true;
					} else if ((Slings[0].y - Birds[pickeb].y) > 0) {
						Birds[pickeb].up = false;
					}
				} else {}
			}
		} else if (tutnum == 13) {
			if (Slings[0].k >= 20) {
				text("For example this slingshot has:\n" + Slings[0].k + " Newtons / m.\nWhich is why it is bright", width / 2, height / 6);
			} else if (Slings[0].k < 20) {
				text("For example this obstacle is:\n" + Slings[0].k + " Newtons / m.\nWhich is why it is dull", width / 2, height / 6);
			}
			noStroke();
			Birds[pickeb].display();
			Slings[0].display();
			Slings[0].open();
			noStroke();
			Obstacles[0].display();
			drawShotGuide(Birds[pickeb], Slings[0]);
			Enemies[0].display();
			if (mouseIsPressed) {
				if (launched == false) {
					let dx = mouseX - Slings[0].x;
					let dy = mouseY - Slings[0].y;
					let scalex = dx / (1 + abs(dx) / 150);
					let scaley = dy / (1 + abs(dy) / 150);
					Birds[pickeb].x = Slings[0].x + scalex;
					Birds[pickeb].y = Slings[0].y + scaley;
					angleMode(DEGREES);
					Slings[0].theta = 90 - atan(abs(Birds[pickeb].x - Slings[0].x) / abs(Birds[pickeb].y - Slings[0].y));
					Birds[pickeb].e = (((0.5) * (Slings[0].k)) * ((dist(Slings[0].x, Slings[0].y, Birds[pickeb].x, Birds[pickeb].y)) * dist(Slings[0].x, Slings[0].y, Birds[pickeb].x, Birds[pickeb].y)));
					if ((Slings[0].x - Birds[pickeb].x) > 0) {
						Birds[pickeb].right = true;
					} else if ((Slings[0].x - Birds[pickeb].x) < 0) {
						Birds[pickeb].right = false;
					}
					if ((Slings[0].y - Birds[pickeb].y) < 0) {
						Birds[pickeb].up = true;
					} else if ((Slings[0].y - Birds[pickeb].y) > 0) {
						Birds[pickeb].up = false;
					}
				} else {}
			}
		} else if (tutnum == 14) {
			text("Press the right arrow key\nTo switch birds before launch.\nPrevious actions done to a bird\nAre remembered", width / 2, height / 6);
			noStroke();
			Birds[pickeb].display();
			Slings[0].display();
			Slings[0].open();
			noStroke();
			Obstacles[0].display();
			drawShotGuide(Birds[pickeb], Slings[0]);
			Enemies[0].display();
			if (mouseIsPressed) {
				if (launched == false) {
					let dx = mouseX - Slings[0].x;
					let dy = mouseY - Slings[0].y;
					let scalex = dx / (1 + abs(dx) / 150);
					let scaley = dy / (1 + abs(dy) / 150);
					Birds[pickeb].x = Slings[0].x + scalex;
					Birds[pickeb].y = Slings[0].y + scaley;
					angleMode(DEGREES);
					Slings[0].theta = 90 - atan(abs(Birds[pickeb].x - Slings[0].x) / abs(Birds[pickeb].y - Slings[0].y));
					Birds[pickeb].e = (((0.5) * (Slings[0].k)) * ((dist(Slings[0].x, Slings[0].y, Birds[pickeb].x, Birds[pickeb].y)) * dist(Slings[0].x, Slings[0].y, Birds[pickeb].x, Birds[pickeb].y)));
					if ((Slings[0].x - Birds[pickeb].x) > 0) {
						Birds[pickeb].right = true;
					} else if ((Slings[0].x - Birds[pickeb].x) < 0) {
						Birds[pickeb].right = false;
					}
					if ((Slings[0].y - Birds[pickeb].y) < 0) {
						Birds[pickeb].up = true;
					} else if ((Slings[0].y - Birds[pickeb].y) > 0) {
						Birds[pickeb].up = false;
					}
				} else {}
			}
		} else if (tutnum == 15) {
			text("Once sure of your launch orientation\nPress 'l' to shoot.", width / 2, height / 2);
		} else if (tutnum == 16) {
			text("Every 5th level\nIs a secret difficulty\nGood Luck!", width / 2, height / 2.25);
		} else if (tutnum == 17) {
			tut = false;
			levelreset(1);
		}
	} else {
		for (let i = 0; i < timer.length; i++) {
			timer[i].run();
		}
		background(0);
		if (mouseX < 200) {
			HUD(0, 255, 50 / mouseX);
		} else if (mouseX >= 200) {
			HUD(255, 0, 1 / (1000 / mouseX));
		}
		image(bg, 0, 0, width, height);
		level(0, pickeb, 0, lev);

		if (mouseIsPressed) {
			if (launched == false) {
				let dx = mouseX - Slings[0].x;
				let dy = mouseY - Slings[0].y;
				let scalex = dx / (1 + abs(dx) / 150);
				let scaley = dy / (1 + abs(dy) / 150);
				Birds[pickeb].x = Slings[0].x + scalex;
				Birds[pickeb].y = Slings[0].y + scaley;
				angleMode(DEGREES);
				Slings[0].theta = 90 - atan(abs(Birds[pickeb].x - Slings[0].x) / abs(Birds[pickeb].y - Slings[0].y));
				Birds[pickeb].e = (((0.5) * (Slings[0].k)) * ((dist(Slings[0].x, Slings[0].y, Birds[pickeb].x, Birds[pickeb].y)) * dist(Slings[0].x, Slings[0].y, Birds[pickeb].x, Birds[pickeb].y)));
				if ((Slings[0].x - Birds[pickeb].x) > 0) {
					Birds[pickeb].right = true;
				} else if ((Slings[0].x - Birds[pickeb].x) < 0) {
					Birds[pickeb].right = false;
				}
				if ((Slings[0].y - Birds[pickeb].y) < 0) {
					Birds[pickeb].up = true;
				} else if ((Slings[0].y - Birds[pickeb].y) > 0) {
					Birds[pickeb].up = false;
				}
			} else {}
		}
		if (launched == false) {
			Slings[0].open();
		}
		if (marcopolo == true && timer[1].t > 1) {
			background(0);
		}
		for (let i = 0; i < width; i += 50) {
			fill(255, 255, 255);
			noStroke();
		}
		drawShotGuide(Birds[pickeb], Slings[0]);
	}
} //draw

function keyPressed() {
	if (tut == true) {
		if (key == 't') {
			tutnum += 1
		} else if (tutnum == 14) {
			if (keyCode == 39 && (pickeb + 1) <= (Birds.length - 1)) {
				pickeb += 1;
			} else if (keyCode == 39 && (pickeb + 1) > (Birds.length - 1)) {
				pickeb = 0;
			}
		}
	} else {
		if (key == 'l' || key == 'L') {
			timer.splice(2, 1);
			timer.push(new time(sqrt(Birds[pickeb].m / Slings[0].k), timer.length));
			launched = true;
		}
		if (key == 'm' || key == 'M') {
			timer[1].st = millis() / 1;
		}
		if (keyCode == 39 && (pickeb + 1) <= (Birds.length - 1)) {
			pickeb += 1;
		} else if (keyCode == 39 && (pickeb + 1) > (Birds.length - 1)) {
			pickeb = 0;
		}
	}
}

function levelreset(levelnum) {
	if (levelnum % 5 == 0) {
		marcopolo = true;
	} else {
		marcopolo = false;
	}
	Obstacles = [];
	Birds = [];
	Enemies = [];
	for (let i = 0; i < levelnum; i++) {
		Enemies.push(new enemy(random(600, 1000), random(height / 3, height / 1.5)));
		Obstacles.push(new obstacle(random(600, 1000), random(height / 3, height / 1.5)));
	}
	let resistance = random(10, 25.5);
	Slings.push(new sling(200, height / 1.75 - 10, color(0, 10 * resistance, 0), resistance));
	for (let i = 0; i < floor((sqrt(levelnum + 1)) * 1.5); i++) {
		let mass = random(1, 2.55)
		Birds.push(new bird(200, height / 1.75 - 10, color(100 * mass, 0, 0), 40, mass));
	}
}

function level(pickes, pickeb, numob, numen) {
	Birds[pickeb].display();
	Birds[pickeb].move();
	for (let i = 0; i < Obstacles.length; i++) {
		if (Obstacles[i].x > width || Obstacles[i].y > height) {
			Obstacles.splice(i, 1);
			break;
		}
	}
	for (let i = 0; i < Obstacles.length; i++) {
		Obstacles[i].display();
		Obstacles[i].move();
		if (circlecollide(Birds[pickeb], Obstacles[i])) {
			Obstacles[i].g = 1;
			vtrans(Obstacles[i], Birds[pickeb]);
		}
		for (let o = 0; o < Obstacles.length, o != i; o++) {
			if (circlecollide(Obstacles[i], Obstacles[o])) {
				Obstacles[i].g = 1;
				vtrans(Obstacles[i], Obstacles[o]);
			}
		}
	}
	for (let i = 0; i < Enemies.length; i++) {
		Enemies[i].display();
		Enemies[i].move();
		if (circlecollide(Birds[pickeb], Enemies[i])) {
			Enemies.splice(i, 1);
			numen -= 1;
		}
	}
	for (let i = 0; i < Enemies.length; i++) {
		for (let o = 0; o < Obstacles.length, i != o; o++) {
			print(Obstacles[o].x);
			if (circlecollide(Enemies[i], Obstacles[o])) {
				Enemies.splice(i, 1);
				numen -= 1;
			}
		}
	}
	Slings[pickes].display();
}

function HUD(r, g, pwr) {
	for (let x = 0; x < width + 10; x += 5) {
		for (let y = 0; y < 400; y += 5) {
			noStroke();
			fill(r, g, 0, pwr * (400 - y));
			rect(x, y, 5, 5);
		}
	}
	fill(255);
	textSize(30);
	textAlign(LEFT);
	text("Enemies left: " + Enemies.length, 50, 50);
	text("Current level: " + lev, 50, 100);
	text("Birds left in queue: " + Birds.length, 50, 150);
}

class bird {
	constructor(x, y, col, d, m) {
		this.x = x;
		this.y = y;
		this.col = col;
		this.dia = d;
		this.m = m;
		this.vx = 0;
		this.vy = 0;
		this.v = 0;
		this.g = 50;
		this.e = 0;
		this.vi = 0;
		this.xi = 0;
		this.yi = 0;
		this.up = true;
		this.right = true;
	}
	display() {
		fill(this.col);
		circle(this.x, this.y, this.dia);
		fill(255);
		circle(this.x, this.y, this.dia - 10);
		if (this.y > height && Birds.length > 0) {
			this.x = 200;
			this.y = height / 1.75 - 10;
			launched = false;
			Birds.splice(0, 1);
			if (Enemies.length < 1) {
				lev += 1;
				levelreset(lev);
			} else if (Enemies.length > 0 && Birds.length <= 0) {
				window.alert("You lost, please reset game to try again");
			}
		}
	}
	move() {
		if (launched == true && timer[2] && timer[2].running == false) {
			this.x = (this.vx * timer[0].t) + this.xi;
			this.y = (this.vy * timer[0].t) + this.yi;
			this.vy = this.vi + (this.g * timer[0].t);
		} else if (launched == true && timer[2] && timer[2].running == true) {
			Slings[0].close();
			this.xi = this.x;
			this.yi = this.y;
			this.v = sqrt(2 * this.e / this.m);
			if (this.up == true) {
				this.vy = -this.v * sin(Slings[0].theta);
			} else if (this.up == false) {
				this.vy = this.v * sin(Slings[0].theta);
			}
			if (this.right == true) {
				this.vx = this.v * cos(Slings[0].theta);
			} else if (this.right == false) {
				this.vx = -this.v * cos(Slings[0].theta);
			}
			this.vi = this.vy;
			timer[0].st = millis() / 1;
		}
	}
}

class enemy {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.dia = random(40, 60);
	}
	display() {
		fill(119, 221, 119);
		circle(this.x, this.y, this.dia);
	}
	move() {

	}
}

class obstacle {
	constructor(x, y, g) {
		this.x = x;
		this.y = y;
		this.xi = x;
		this.yi = y;
		this.vx = 0;
		this.vy = 0;
		this.vi = 0;
		this.g = 0;
		this.dia = 30;
		this.hit = false;
		this.m = random(0.5, 2);
		this.timerstart = millis();
		this.timer = 0;
	}
	display() {
		fill(0, 0, (255 / 2) * this.m);
		circle(this.x, this.y, this.dia);
		this.timer = ((millis() / 1) - this.timerstart) / 1000;
	}
	move() {
		this.x = this.xi + (this.vx * this.timer);
		this.y = this.yi + (this.vy * this.timer);
		this.vy = this.vi + (this.g * this.timer);
		if (this.hit == true) {
			this.hit = false;
		}
	}
}

class sling {
	constructor(x, y, col, k) {
		this.x = x;
		this.y = y;
		this.col = col;
		this.k = k;
		this.closesx = 0;
		this.closesy = 0;
		this.distx = 0;
		this.disty = 0;
	}
	display() {
		fill(this.col);
		rect(this.x, this.y, 15, 80);
		image(rocks, this.x - 20, this.y + 50, 55, 40);
	}
	open() {
		stroke("tan");
		strokeWeight(5);
		line(Slings[0].x, Slings[0].y, Birds[pickeb].x, Birds[pickeb].y);
		this.closesx = Birds[pickeb].x;
		this.closesy = Birds[pickeb].y;
		this.distx = abs(Birds[pickeb].x - Slings[0].x);
		this.disty = abs(Birds[pickeb].y - Slings[0].y);
	}
	close() {
		stroke("tan");
		strokeWeight(5);
		line(Slings[0].x, Slings[0].y, Birds[pickeb].x, Birds[pickeb].y);
		noStroke();
		if (Birds[pickeb].right == true) {
			Birds[pickeb].x = ((this.distx / timer[2].et) * timer[2].t) + this.closesx;
		} else if (Birds[pickeb].right == false) {
			Birds[pickeb].x = (-(this.distx / timer[2].et) * timer[2].t) + this.closesx;
		}
		if (Birds[pickeb].up == true) {
			Birds[pickeb].y = (-(this.disty / timer[2].et) * timer[2].t) + this.closesy;
		} else if (Birds[pickeb].up == false) {
			Birds[pickeb].y = ((this.disty / timer[2].et) * timer[2].t) + this.closesy;
		}
	}
}

class time {
	constructor(runtime, timernum) {
		this.t = 0;
		this.st = millis();
		this.et = runtime;
		this.num = timernum;
		this.running = true;
	}
	run() {
		this.t = ((millis() / 1) - this.st) / 1000;
		if (this.t > this.et) {
			this.running = false;
		}
	}
}

function drawShotGuide(bird, sling) {
	if (launched == true) {
		return;
	} else {
		let x0 = sling.x;
		let y0 = sling.y;
		
		let dx = bird.x - sling.x;
		let dy = bird.y - sling.y;
		
		let e = bird.e
		let v = sqrt(2 * bird.e / bird.m);
		
		let angle = -atan2(dy, dx);
		
		let vx = -v * cos(angle);
		let vy = v * sin(angle);
		let g = 50;
		
		for (let t = 0; t < 20; t += 0.2) {
			let x = x0 + vx * t;
			let y = y0 + vy * t + g * t * t;
			stroke(255, 255, 0, 255 - (100 * t));
			strokeWeight(2);
			fill(255, 255, 255, 255 - (t * (255 / 1.75)));
			circle(x, y, 10);
		}
	}
}

function mousePressed() {}
