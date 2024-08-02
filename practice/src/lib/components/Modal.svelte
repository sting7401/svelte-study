<script lang="ts">
	export let list: [{ title: string; story: string }] = [];
	export let selectedMovie = 0; // 선택한 영화의 번호 받는다(props 변수 선언)
	export let closeModal;
</script>

<div class="modal">
	<div class="inner">
		<h3>{list[selectedMovie].title}</h3>
		<p>{@html list[selectedMovie].story}</p>
		<button on:click={closeModal} class="btn-close">닫기</button>
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
