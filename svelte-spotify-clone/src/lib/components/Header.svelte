<script lang="ts">
	import { browser } from '$app/environment';
	import Navigation from './Navigation.svelte';
	import { page } from '$app/stores';
	import { ChevronDown } from 'lucide-svelte';

	$: user = $page.data.user;
</script>

<div class="content">
	<div class="left">
		{#if browser}
			<Navigation desktop={false} />
		{/if}
	</div>
	<div class="right">
		<div id="profile" class="profile">
			<button class="profile__button">
				{#if user?.images && user.images.length > 0}
					<img src={user.images[0].url} alt="" />
				{/if}
				{user?.display_name}
				<span class="visually-hidden"> profile name </span>
				<ChevronDown class="profile-arrow" size={22} />
			</button>
		</div>
	</div>
</div>

<style lang="scss">
	.content {
		@include mixins.flex($jc: between, $ai: center);

		width: 100%;
	}

	.profile {
		&__button {
			@include mixins.flex($ai: center);

			padding: functions.rem(5);
			border-radius: functions.rem(25);
			background: none;
			border: functions.rem(1) solid var(--border);
			color: var(--text-color);

			&:hover {
				background-color: var(--accent-color);
			}

			img {
				width: functions.rem(28);
				height: functions.rem(28);
				border-radius: 100%;
				margin-right: functions.rem(10);
			}
		}

		:global(.profile-arrow) {
			margin-left: functions.rem(3);
		}
	}
</style>
