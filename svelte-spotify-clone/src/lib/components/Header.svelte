<script lang="ts">
	import { LogoutButton } from '$components';
	import { browser } from '$app/environment';
	import Navigation from './Navigation.svelte';
	import { page } from '$app/stores';
	import { ChevronDown, ExternalLink } from 'lucide-svelte';
	import { tippy } from '$actions';

	$: user = $page.data.user;
</script>

<div class="content">
	<div class="left">
		{#if browser}
			<Navigation desktop={false} />
		{/if}
	</div>
	<div class="right">
		<div id="profile" class="profile__button-wrap">
			<button
				class="profile__button"
				use:tippy={{
					content: document.querySelector('#profileMenu') || undefined,
					onMount: () => {
						const template = document.querySelector('#profileMenu');
						if (template) {
							template.style.display = 'block';
						}
					},
					trigger: 'click',
					placement: 'bottom-end',
					interactive: true,
					theme: 'menu'
				}}
			>
				{#if user?.images && user.images.length > 0}
					<img src={user.images[0].url} alt="" />
				{/if}
				{user?.display_name}
				<span class="visually-hidden"> profile name </span>
				<ChevronDown class="profile-arrow" size={22} />
			</button>
		</div>
		<div id="profileMenu" class="profile-menu" style="display: none;">
			<div class="profile-menu__content">
				<ul>
					<li>
						<a href={user?.external_urls.spotify} target="_blank" rel="noopener noreferrer">
							View on Spotify
							<ExternalLink focusable="false" aria-hidden="true" size={20} />
						</a>
					</li>
					<li>
						<a href="/profile"> View Profile </a>
					</li>
					<li>
						<LogoutButton />
					</li>
				</ul>
			</div>
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

		&-menu {
			&__content {
				padding: functions.rem(5) 0;
				ul {
					li {
						&:hover {
							background-image: linear-gradient(rgba(255, 255, 255, 0.07) 0 0);
						}

						a,
						:global(button) {
							@include mixins.flex($ai: center);
							@include mixins.wh100;
							@include mixins.font($fs: functions.rem(14));

							padding: functions.rem(10) functions.rem(15);
						}

						svg {
							margin-left: functions.rem(5);
						}
					}
				}
			}
		}
	}
</style>
