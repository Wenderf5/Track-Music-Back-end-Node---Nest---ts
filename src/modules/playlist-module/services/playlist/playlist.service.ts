import { HttpStatus, Injectable } from '@nestjs/common';
import { playlist } from './types/playlist';

@Injectable()
export class PlaylistService {
    async GetPlaylistMusic(playlistID: string): Promise<playlist | HttpStatus> {
        try {
            const response = await fetch(`https://api.deezer.com/playlist/${playlistID}`, {
                method: 'GET'
            });
            const data = await response.json();
            const playlist: playlist = {
                title: data.title,
                picture: data.picture_big,
                creation_date: data.creation_date,
                creator: {
                    name: data.creator.name
                }
            };
            return playlist;
        } catch (error) {
            return HttpStatus.BAD_REQUEST;
        }
    }
}
