<script lang="ts">
	import { Button } from '$components';
	import logo from '$images/Spotify_Logo_RGB_White.png';
	import cover from '$images/cover.png';
</script>

<div class="wrapper">
	<div class="content">
		<img src={logo} class="logo" alt="Spotify" />
		<h2>3 months of Premium</h2>
		<p>ad-free music listening</p>
		<div>
			<Button
				element="a"
				variant="outline"
				href="https://www.spotify.com/"
				target="_blank"
				rel="noopener noreferrer">Sign Up</Button
			>
			<Button element="a" href="/api/auth/login">Login</Button>
		</div>
	</div>

	<div class="cover">
		<img src={cover} alt="Svelte Album Cover" />
	</div>
</div>

<style lang="scss">
	:global(body) {
		background-image: linear-gradient(230deg, var(--sidebar-color), var(--bg-color));
		height: 100vh;
	}

	.wrapper {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: functions.rem(20);
		width: 100%;
		max-width: functions.rem(1200);
		margin: functions.rem(80) auto 0;

		@include breakpoint.up('md') {
			flex-direction: row;
		}
	}
	.cover {
		flex: 1;

		img {
			max-width: 100%;
		}
	}

	.content {
		flex: 1.8;

		h2 {
			font-size: functions.rem(40);
		}

		p {
			font-size: functions.rem(20);
		}

		.button {
			margin-top: functions.rem(40);

			:global(& + .button) {
				margin-left: functions.rem(10);
				padding: functions.rem(10) functions.rem(20);
				text-transform: uppercase;
			}
		}

		.logo {
			width: functions.rem(170);
			max-width: 100%;
			margin-bottom: functions.rem(30);
		}
	}
</style>
