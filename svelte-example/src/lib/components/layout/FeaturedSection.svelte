<script>
	import { ButtonVariant } from '$lib/types/Button';
	import Button from './Button.svelte';
</script>

<div class="mt-16 flex flex-col h-auto gap-5 h-auto lg:h-[70vh] lg:flex-row">
	<div class="w-full lg:w-2/3 rounded-lg h-48 lg:h-full overflow-hidden cursor-pointer relative">
		<img
			class="scale-image object-cover h-full w-full"
			src="https://images.unsplash.com/photo-1542393545-10f5cde2c810?auto=format&fit=crop&q=80&w=3165&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			alt="Laptop Discounts"
		/>
		<span
			class="text-white absolute px-5 right-0 text-center lg:left-1/2 bottom-5 lg:top-12 lg:bottom-auto lg:-translate-x-1/2"
		>
			Kickoff New Year with 15% Discount on Laptops
		</span>
		<Button
			dClass="hidden lg:block absolute bottom-5 left-1/2 -translate-x-1/2 border-white text-white w-1/3"
			variant={ButtonVariant.SECONDARY}
		>
			View Offer
		</Button>
	</div>
	<div class="flex flex-col gap-5 w-full lg:w-1/3 lg:h-full">
		<div class="w-full rounded-lg h-48 lg:h-full overflow-hidden relative cursor-pointer">
			<img
				class="scale-image object-cover h-full w-full"
				src="https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&q=80&w=2971&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="Smart Watch Collections"
			/>
			<span class="text-white absolute px-5 left-0 bottom-5"> Smart Watch Collections </span>
		</div>
		<div class="w-full rounded-lg h-48 lg:h-full overflow-hidden relative cursor-pointer">
			<img
				class="scale-image object-cover h-full w-full"
				src="https://images.unsplash.com/photo-1556196148-1fb724238998?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="Headphones"
			/>
			<span class="text-white absolute px-5 right-0 bottom-5"> High Quality Headphones </span>
		</div>
		<div class="w-full rounded-lg h-48 lg:h-full overflow-hidden relative cursor-pointer">
			<img
				class="scale-image object-cover h-full w-full"
				src="https://images.unsplash.com/photo-1615869442320-fd02a129c77c?auto=format&fit=crop&q=80&w=3134&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="Large Selection of Keyboards"
			/>
			<span class="text-white absolute px-5 left-0 bottom-5">Keyboards</span>
		</div>
	</div>
</div>
