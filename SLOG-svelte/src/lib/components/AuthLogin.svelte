<script>
	import { auth } from '../stores';

	let values = {
		formEmail: '',
		formPassword: '',
	}

	const resetValues = () => {
		values.formEmail = '';
		values.formPassword = '';
	}

	const onLogin = async () => {

		alert();
		try {
			await auth.login(values.formEmail, values.formPassword);
			resetValues();
		} catch (error) {
			alert(error.message)
		}
	}
</script>


<!-- login-box start-->
<div class="auth-content-box">
	<div class="auth-box-main">
		<div class="auth-input-box">
			<input
				type="email"
				name="floating_email"
				id="floating_email"
				class="auth-input-text peer"
				placeholder=" "
				bind:value="{values.formEmail}"
			/>
			<label for="floating_email" class="auth-input-label">이메일</label>
		</div>
		<div class="auth-input-box">
			<input
				type="password"
				name="floating_email"
				id="floating_email"
				class="auth-input-text peer"
				placeholder=" "
				bind:value="{values.formPassword}"
			/>
			<label for="floating_email" class="auth-input-label">비밀번호</label>
		</div>
	</div>
	<div class="content-box-bottom">
		<div class="button-box">
			<button class="button-base" on:click="{onLogin}">로그인</button>
		</div>
	</div>
</div>
<!-- login-box end-->
