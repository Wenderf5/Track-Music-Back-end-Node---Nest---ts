export interface playlistMusic {
    title: string;
    picture_big: string;
    tracks: {
        data: [
            {
                title: string;
                preview: string;
                artist: {
                    name: string;
                };
                album: {
                    cover_big: string;
                };
            }
        ];
    }
}