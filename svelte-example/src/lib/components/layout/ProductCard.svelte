<script lang="ts">
	import StarIcon from '$lib/icons/StarIcon.svelte';
	import { ButtonVariant } from '$lib/types/Button';
	import type { Product } from '$lib/types/Product';
	import Button from './Button.svelte';

	export let product: Product;
</script>

<div class="h-full p-8 pb-10 flex flex-col shadow-sm bg-white rounded-lg justify-between">
	<div>
		<div class="w-full aspect-square rounded-xl mb-7 overflow-hidden">
			<img
				class="w-full h-full object-cover scale-image cursor-pointer"
				src={product.image}
				alt="Product"
			/>
		</div>

		<button class="w-min whitespace-nowrap font-bold text-fw-blue text-xl mb-6 block">
			{product.name}
		</button>
	</div>

	<div>
		<button class="w-min whitespace-nowrap font-light text-fw-darkgrey mb-3 block">
			{product.category}
		</button>
		<div class="flex items-center justify-between">
			<span class="font-light text-fw-darkgrey text-sm line-through">
				{product.price}
			</span>
			<div class="flex gap-1 items-center">
				<StarIcon />
				<span class="font-bold text-fw-gold text-sm items-center">
					{product.rating}
				</span>
			</div>
		</div>
		<span class="font-semibold text-2xl block mb-6 text-fw-red">
			{product.dicount}
		</span>
		<Button variant={ButtonVariant.PRIMARY} dClass="w-full">Add to cart</Button>
	</div>
</div>
