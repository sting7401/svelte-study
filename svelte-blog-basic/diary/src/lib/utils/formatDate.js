// Function to format date
export const formatDate = () => {
	return new Date().toLocaleDateString('ko-KR', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		weekday: 'long'
	});
};
