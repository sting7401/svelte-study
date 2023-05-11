<script lang="ts">
	import { page } from '$app/stores';

	type greet = {
		[key: string]: string;
	};
	const greetings: greet = {
		en: 'Hello',
		es: 'Hola',
		kr: '안녕',
	};
	const { lang = 'en' } = $page.params;
	const greeting = greetings[lang];
</script>

<p>{greeting}</p>

<p>언어 변경 페이지 라우팅 Optional Parameters</p>

[[lang]] = 옵션

