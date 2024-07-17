import { HttpStatus, Injectable } from '@nestjs/common';
import { ArtistMusic } from './types/artistMusic';

@Injectable()
export class ArtistMusicService {

    async GetArtistMusic(artistID: string): Promise<ArtistMusic[] | HttpStatus> {
        try {
            const response = await fetch(`https://api.deezer.com/artist/${artistID}/top`, {
                method: 'GET'
            });
            const data = await response.json();
            const arrayArtistMusic: ArtistMusic[] = [];
            data.data.map((track: any, index: number) => {
                arrayArtistMusic.push({
                    title: track.title,
                    preview: track.preview,
                    artist: {
                        name: track.artist.name
                    },
                    album: {
                        cover_big: track.album.cover_big
                    }
                })
            })
            return arrayArtistMusic;
        } catch (error) {
            return HttpStatus.BAD_REQUEST;
        }
    }
}
