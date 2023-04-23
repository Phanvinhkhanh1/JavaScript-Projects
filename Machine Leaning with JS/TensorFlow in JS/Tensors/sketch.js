function setup() {
	// createCanvas(windowWidth, windowHeight);
	// put setup code here
	noCanvas();
	const values = [];
	const shape = [4, 5];
	for (var i = 0; i < 20; i++) {
		values[i] = random(i);
	}

	const data = tf.tensor(values, shape);
	console.log(data.print());
}

function draw() {
	// put drawing code here
}
