const longPress = (node, options) => {
	let timer;

	const mouseDown = () => {
		const { duration = 2000 } = options;

		timer = setTimeout(() => {
			node.dispatchEvent(new CustomEvent('longPress'));
		}, duration);
	};

	const mouseUp = () => {
		clearTimeout(timer);
	};

	node.addEventListener('mousedown', mouseDown);
	node.addEventListener('mouseup', mouseUp);

	return {
		update(newOptions) {
			options = newOptions;
		},
		destroy() {
			console.log('제거');
			clearTimeout(timer);

			node.removeEventListener('mousedown', mouseDown);
			node.removeEventListener('mouseup', mouseUp);
		}
	};
};

export { longPress };
