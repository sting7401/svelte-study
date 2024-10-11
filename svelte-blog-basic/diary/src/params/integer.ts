export const match = (param: number): boolean => {
	return /^\d+$/.test(param.toString());
};
