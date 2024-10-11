<script>
	import { page, navigating, updated } from '$app/stores';
	const { data } = $props();

	const {
		params: { slug: slugId, review: reviewId }
	} = $page;
</script>

<p>{slugId} / {reviewId}</p>
