AFRAME.registerComponent('return-emitter', {
	init: function () {
		// Do something when component first attached.

		let el = this.el;

		this.returnCall = () => {
			let p = el.getAttribute('position');

			console.dir(el);

			el.emit('returnSphere', { returnPoint: p });
		};

		this.el.addEventListener('click', this.returnCall);
	},

	update: function () {
		// Do something when component's data is updated.
	},

	remove: function () {
		// Do something the component or its entity is detached.
		this.el.removeEventListener('click', this.returnCall);
	},

	tick: function (time, timeDelta) {
		// Do something on every scene tick or frame.
	}
});
