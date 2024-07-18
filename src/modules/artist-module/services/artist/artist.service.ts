import { HttpStatus, Injectable } from '@nestjs/common';
import { artist } from './types/artist';

@Injectable()
export class ArtistService {
    async GetArtist(artistID: string): Promise<artist | HttpStatus> {
        try {
            const response = await fetch(`https://api.deezer.com/artist/${artistID}`, {
                method: 'GET'
            });
            const data = await response.json();
            const artist: artist = {
                name: data.name,
                picture: data.picture_big
            }
            return artist;
        } catch (error) {
            return HttpStatus.BAD_REQUEST;
        }
    }
}
