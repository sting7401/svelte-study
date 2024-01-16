<script>
	import ArrowIcon from './../../icons/ArrowIcon.svelte';
	import { ButtonVariant } from '$lib/types/Button';
	import Button from './Button.svelte';
</script>

<h1
	class="pt-6 flex flex-col text-[18vw] leading-none text-fw-blue uppercase font-serif text-start items-start sm:text-start sm:items-start"
>
	Elevate your <br />

	<div class="relative flex text-[12vw]">
		<span class="bg-tech-rocket bg-cover bg-clip-text text-transparent">tech</span>
		<div class="w-[30vw]"></div>
		<img
			src="src/lib/images/laptop.png"
			alt="laptops"
			class="absolute left-[7vw] -top-[11vw] w-[43vw]"
		/>
		<div class="flex flex-col gap-5">
			<span class="bg-game-rocket bg-cover bg-clip-text text-transparent">game</span>
		</div>
	</div>
</h1>

<div class="w-full flex-col gap-8 flex sm:hidden mt-[20vw]">
	<span class="block text-sm font-sans normal-case w-full sm:w-2/3 text-justify">
		discover out curated selection of</span
	>

	<Button variant={ButtonVariant.SECONDARY} dClass="w-full">
		Explore Laptops <ArrowIcon />
	</Button>
</div>
