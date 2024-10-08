import { HttpStatus, Injectable } from '@nestjs/common';
import { topMusic } from './types/topMusic';

@Injectable()
export class TopMusicService {
    async GetTopMusic(): Promise<topMusic[] | HttpStatus> {
        try {
            const response = await fetch('https://api.deezer.com/chart/0/tracks?limit=100', {
                method: 'GET'
            });
            const data = await response.json();
            const arrayTopMusic: topMusic[] = [];
            data.data.map((track: any, index: number) => {
                arrayTopMusic.push({
                    title: track.title,
                    preview: track.preview,
                    artist: {
                        name: track.artist.name
                    },
                    album: {
                        title: track.album.title,
                        cover_big: track.album.cover_big
                    }
                });
            });
            return arrayTopMusic;
        } catch (error) {
            return HttpStatus.BAD_REQUEST;
        }
    }
}
