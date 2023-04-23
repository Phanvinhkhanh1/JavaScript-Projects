function setup() {
	// createCanvas(windowWidth, windowHeight);
	// put setup code here
	noCanvas();

	const model = tf.sequential();

	// create hidden layer
	const configHidden = {
		units: 4,
		activation: 'sigmoid',
		inputShape: [2]
	};
	const hidden = tf.layers.dense(configHidden);

	// create output layer 
	const configOutput = {
		units: 1,
		activation: 'sigmoid'
	};
	const output = tf.layers.dense(configOutput);

	model.add(hidden);
	model.add(output);

	// optimizer
	const sgdOpt = tf.train.sgd(0.1);
	// loss function 
	const loss = tf.losses.meanSquaredError;

	// Compile
	const configCompile = {
		optimizer: sgdOpt,
		loss: loss
	};

	model.compile(configCompile);

	//Create data to train
	const xs = tf.tensor2d([0.5, 0.9, 1.0, -1.2, 0.4, 0.7], [3, 2]);

	const ys = tf.tensor2d([0.8, 1.0, -1.2], [3, 1]);

	// train data 
	async function train() {
		for (var i = 0; i < 200; i++) {
			const history = await model.fit(xs, ys, {
				shuffling: true,
				epochs: 5
			});
			console.log(history.history.loss[4]);
		}
	}

	train().then(() => {
		console.log('Training completed!');
		let outputs = model.predict(xs);
		console.log(outputs.print());
	})

}

function draw() {
	// put drawing code here
}
