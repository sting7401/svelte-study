export const load = async ({ fetch }) => {
	console.log('serveLoadEvent 2');
	const res = await fetch('api/postcodes');
	const postcodes = await res.json();

	const addressList = postcodes.map(postcode => {
		return `${postcode.buildingName}, ${postcode.line1}, ${postcode.line2}, ${postcode.line3}, ${postcode.town}, ${postcode.county}, ${postcode.postcode}`;
	});
	console.log(addressList);
	return { addressList };
};
