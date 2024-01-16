AFRAME.registerComponent('target-maker', {
	schema: {},

	init: function () {
		// Do something when component first attached.

		const el = this.el;

		this.addMaker = (event) => {
			const p = event.detail.intersection.point;
			const scene = document.querySelector('a-scene');

			const newMark = document.createElement('a-entity');
			newMark.setAttribute('geometry', { primitive: 'sphere' });
			newMark.setAttribute('material', 'color: red');
			newMark.setAttribute('scale', '.2 .2 .2');
			newMark.setAttribute('position', el.object3D.worldToLocal(p));
			newMark.setAttribute('target-maker', {});

			el?.appendChild(newMark);
		};

		this.el.addEventListener('click', this.addMaker);
	},

	update: function () {
		// Do something when component's data is updated.
	},

	remove: function () {
		// Do something the component or its entity is detached.
		this.el.removeEventListener('click', this.addMaker);
	},

	tick: function (time, timeDelta) {
		// Do something on every scene tick or frame.
	}
});
