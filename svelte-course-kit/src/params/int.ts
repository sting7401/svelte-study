import type { ParamMatcher } from '@sveltejs/kit';

export const match: ParamMatcher = (param: string) => {
	return Number.isInteger(+param) && +param > 0;
};
