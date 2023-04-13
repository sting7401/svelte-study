<script>
	export let data;
	const { product } = data;
</script>

<h1>상세 페이지</h1>

<div>
	<h2>{product.title}</h2>
	<h3>{product.price}</h3>
	<h3>{product.description}</h3>
</div>
