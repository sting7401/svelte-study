export const handleError: HandleClientError = async ({ error, event }) => {
	console.log('this is not responding 클라이언트');
	console.log(error, event);

	return {
		message: error.message,
		code: 'error code 훅'
	};
};
