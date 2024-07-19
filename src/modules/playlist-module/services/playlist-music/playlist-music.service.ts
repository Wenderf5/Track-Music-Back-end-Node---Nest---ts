import { HttpStatus, Injectable } from '@nestjs/common';
import { playlistMusic } from './types/playlistMusic';

@Injectable()
export class PlaylistMusicService {
    async GetPlaylistMusic(playlistID: string): Promise<playlistMusic[] | HttpStatus> {
        try {
            const response = await fetch(`https://api.deezer.com/playlist/${playlistID}/tracks?limit=100`, {
                method: 'GET'
            });
            const data = await response.json();
            const arrayPlaylistMusic: playlistMusic[] = [];
            data.data.map((track: any, index: number) => {
                arrayPlaylistMusic.push({
                    title: track.title,
                    preview: track.preview,
                    artist: {
                        name: track.artist.name
                    },
                    album: {
                        cover_big: track.album.cover_big,
                    }
                });
            });
            return arrayPlaylistMusic;
        } catch (error) {
            console.log(error)
            return HttpStatus.BAD_REQUEST;
        }
    }
}
