type TodoType = {
	id?: string;
	title?: string;
	completed?: boolean;
	value?: boolean;
	checked?: boolean;
};

interface InputInit {
	clearInput: () => void;
}

export { TodoType, InputInit };
