function setup() {
	// createCanvas(windowWidth, windowHeight);
	// put setup code here
	noCanvas();
	const values = [];
	const shapeA = [5, 4];
	const shapeB = [4, 5];
	for (var i = 0; i < 20; i++) {
		values[i] = random(i);
	}

	const tenseA = tf.tensor2d(values, shapeA, dtype = 'float32');
	const tenseB = tf.tensor2d(values, shapeB, dtype = 'float32');
	// const tVariable = tf.variable(tense);
	const a = tf.variable(tenseA);
	const b = tf.variable(tenseB);
	// tense.data().then(function (stuff) {
	// 	console.log(stuff);
	// })
	const c = a.matMul(b);
	console.log(c.print());
	// console.log(tense.dataSync());
	// console.log(tVariable);
}

function draw() {
	// put drawing code here
}
