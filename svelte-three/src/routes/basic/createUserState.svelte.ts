export default function createUserState(props) {
	let username = $state(props.username);

	return {
		...props,

		get username() {
			return username;
		},
		set username(value) {
			username = value;
		}
	};
}
