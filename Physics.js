function circlecollide(instance, inst) {
	if (dist(instance.x, instance.y, inst.x, inst.y) < instance.dia / 2 + inst.dia / 2) {
		return true;
	}
	return false;
}

function vtrans(hit, hitter) {
	if (hit.hit == false) {
		let dx = hit.x - hitter.x;
		let dy = hit.y - hitter.y;
		let dist = sqrt(dx * dx + dy * dy);
		
		angleMode(DEGREES);
		let impactAngle = atan2(dy, dx);
		print(impactAngle);
		
		let nx = dx / dist;
		let ny = dy / dist;

		let dvx = hit.vx - hitter.vx;
		let dvy = hit.vy - hitter.vy;
		let relativevelocity = dvx * nx + dvy * ny;

		if (relativevelocity > 0) return;

		let m1 = hitter.m;
		let m2 = hit.m;
		let impulse = (2 * relativevelocity) / (m1 + m2);
		
		hitter.xi = hitter.x;
		hitter.yi = hitter.y;
		timer[0].st = millis() / 1;
		
		hit.xi = hit.x;
		hit.yi = hit.y;
		
		hitter.vx += impulse * m2 * nx;
		hitter.vy += impulse * m2 * ny;

		hit.vx -= impulse * m1 * nx;
		hit.vy -= impulse * m1 * ny;
		
		hit.vi = hit.vy;
		hit.timerstart = millis();
		
		hit.hit = true;
	} else {
		//balls
	}
}
