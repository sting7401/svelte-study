<script lang="ts">
	interface Props {
		productId?: number;
	}

	let { productId = 100 }: Props = $props();
</script>

<a href="/">home</a>

<ul>
	<li><a href="/products/product1">1</a></li>
	<li>2</li>
	<li><a href="/products/product{productId}">1{productId}</a></li>
</ul>
