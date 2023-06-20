import tippy, {
	type ExtendedProps,
	hideOnEsc,
	hideOthersOnOpen,
	hideOnPopperBlur
} from './tippy-plugin';
import 'tippy.js/dist/tippy.css';

export default function (node: HTMLElement, options?: Partial<ExtendedProps>) {
	const plugins = [hideOnEsc, hideOthersOnOpen, hideOnPopperBlur];
	const _options = options ? { ...options, plugins } : { plugins };
	const instance = tippy(node, _options);
	return {
		update(newOptions: Partial<ExtendedProps>) {
			const _newOptions = newOptions ? { ...newOptions, plugins } : { plugins };
			instance.setProps(_newOptions);
		},
		destroy() {
			instance.destroy();
		}
	};
}
