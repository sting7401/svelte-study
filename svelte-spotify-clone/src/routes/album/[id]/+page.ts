import type { PageLoad } from './$types';
import { fetchRefresh } from '$helpers';

export const load: PageLoad = async ({ fetch: _fetch, params }) => {
	const albumRes = await fetchRefresh(_fetch, `/api/spotify/albums/${params.id}`);

	if (!albumRes.ok) {
		throw error(albumRes.status, 'failed to load album');
	}

	const albumJSON: SpotifyApi.SingleAlbumResponse = await albumRes.json();

	return {
		album: albumJSON,
		title: albumJSON.name
	};
};
