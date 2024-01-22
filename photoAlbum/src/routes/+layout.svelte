<script class="ts">
	import '../app.pcss';
	import { Camera, Upload } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="fixed top-0 w-full border-b bg-white">
	<div class="container flex h-16 items-center">
		<a href="/"><Camera /></a>

		<div class="ml-auto">
			<Button class="space-x-1">
				<Upload class="h-[1rem]" />
				<span>Upload</span>
			</Button>
		</div>
	</div>
</div>

<div class="container pt-16">
	<slot />
</div>
