export function percent(num: number): string {
	return `${(Math.round(1000 * num) / 10).toFixed(1)}%`;
}
