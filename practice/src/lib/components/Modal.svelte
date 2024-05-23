<script lang="ts">
	export let title: string = '';
	export let story: string = '';
	export let closeModal;
</script>

<div class="modal">
	<div class="inner">
		<h2>영화 상세정보</h2>
		<p>개봉: {title}</p>
		<p>장르: {@html story}</p>
		<button class="" onclick={closeModal}>닫기</button>
	</div>
</div>

<style>
	.modal {
		background: rgba(0, 0, 0, 0.7);
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.modal .inner {
		background: #fff;
		width: 80%;
		padding: 20px;
		border-radius: 10px;
	}
</style>
