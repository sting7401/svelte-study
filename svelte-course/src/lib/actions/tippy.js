import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

const tippyUse = (node, options) => {
	const instance = tippy(node, options);

	return {
		update(newOptions) {
			instance.setProps(newOptions);
		},
		destroy() {
			instance.destroy();
		}
	};
};

export { tippyUse };
