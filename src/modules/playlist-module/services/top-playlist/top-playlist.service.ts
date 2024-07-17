import { HttpStatus, Injectable } from '@nestjs/common';
import { topPlaylist } from './types/topPlaylist';

@Injectable()
export class TopPlaylistService {
    async GetTopPlaylist(): Promise<topPlaylist[] | HttpStatus> {
        try {
            const response = await fetch(`https://api.deezer.com/chart/0/playlists?limit=6`, {
                method: 'GET'
            });
            const data = await response.json();
            const arrayTopPlaylist: topPlaylist[] = [];
            data.data.map((playlist: any, index: number) => {
                arrayTopPlaylist.push({
                    id: playlist.id,
                    title: playlist.title,
                    picture: playlist.picture_big
                });
            });
            return arrayTopPlaylist;
        } catch (error) {
            return HttpStatus.BAD_REQUEST;
        }
    }
}
