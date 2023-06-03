<main>
	<h3>admin layout</h3>

	<nav>
		<a href="/settings">settings</a>
		<a href="/settings/profile">profile settings</a>
		<a href="/settings/general">general settings</a>
	</nav>

	<slot><!-- optional fallback --></slot>
</main>

<style>
	main {
		padding: 0.625rem;
		background-color: rgb(0, 153, 255);
	}
</style>
