<script lang="ts">
	export let text = '버튼';
	export let size = ''
	export let shadow = false;
	export let bgColor = 'inherit';
	export let textColor = 'inherit';

	$: bColor = bgColor || '';
	$: tColor = textColor || '';

	console.log(tColor, bColor);

</script>

<button type="button" 
	class:size-lg={size === 'large'}
	class:size-sm={size === 'small'}
	style:--buttonBgColor={bgColor}
	style:--buttonTextColor={textColor}
	class:shadow
>
	{text}
</button>

<style lang="scss">
	button {
		border: 0;
		border-radius: 0.5rem;
		background-color: var(--buttonBgColor);
		color: var(--buttonTextColor);
		cursor: pointer;

		&:hover {
			font-weight: bold;
		}

		&.size {
			&-sm {
				padding: 1rem 2rem;
			}

			&-lg {
				padding: 1.5rem 2.5rem;
			}
		}

		&.shadow {
			box-shadow: 0 0 1rem rgba(1,1,1,0.3);
		}
	}
	
</style>
