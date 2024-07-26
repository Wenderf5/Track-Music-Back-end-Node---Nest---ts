import { HttpStatus, Injectable } from '@nestjs/common';
import { music } from './types/music';

@Injectable()
export class MusicService {
    async SearchMusic(music: string): Promise<music[] | HttpStatus> {
        try {
            const response = await fetch(`https://api.deezer.com/search?q=${music}&limit=100`, {
                method: 'GET'
            });
            const data = await response.json();
            const arrayMusic: music[] = [];
            data.data.map((track: any, index: number) => {
                arrayMusic.push({
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
            return arrayMusic;
        } catch (error) {
            return HttpStatus.BAD_REQUEST;
        }
    }
}
