<script>
	export let productId = 100;
</script>

<a href="/tutorial">home</a>

<ul>
	<li><a href="/tutorial/products/product1">1</a></li>
	<li>2</li>
	<li><a href="/tutorial/products/product{productId}">1{productId}</a></li>
</ul>
