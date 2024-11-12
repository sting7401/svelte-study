<script>
	import Product from './Product.svelte';
	import CartItem from './CartItem.svelte';
	import FamilyNode from './FamilyNode.svelte';

	let y;

	$: console.log(y);

	let currentTitle = 'my app';

	let familyStructure = [
		{
			isParent: true,
			name: 'son',
			children: [
				{ isParent: false, name: 'son1' },
				{
					isParent: true,
					name: 'son2',
					children: [
						{ isParent: false, name: 'son3' },
						{ isParent: false, name: 'son4' }
					]
				}
			]
		},
		{ isParent: false, name: 'son' }
	];

	let showProduct = true;

	let renderComponent = { cmp: Product, title: 'text', id: 'p1' };

	const toggle = () => {
		showProduct = !showProduct;

		if (renderComponent.cmp === Product) {
			renderComponent.cmp = {
				cmp: CartItem,
				title: 'test',
				id: 'p2'
			};
		} else {
			renderComponent.cmp = {
				cmp: Product,
				title: 'text',
				id: 'p1'
			};
		}
	};

	const changeTitle = () => {
		currentTitle = 'change Title';
	};
</script>

<svelte:window bind:scrollY={y} />

<svelte:head>
	<title>{currentTitle}</title>
</svelte:head>
<svelte:body on:mouseenter />

<button on:click={changeTitle}>change title</button>

<div>
	<button on:click={toggle}>toggle</button>

	<svelte:component
		this={renderComponent.cmp}
		title={renderComponent.title}
		id={renderComponent.id}
	/>

	<!-- {#if showProduct}
        <Product title="text" id="p1" />
    {:else}
        <CartItem title="cart" id="p2" />
    {/if} -->

	{#each familyStructure as item}
		<FamilyNode member={item} />
	{/each}
</div>

<svelte:window>
	div {
		height: 3000px;
	}
</svelte:window>
