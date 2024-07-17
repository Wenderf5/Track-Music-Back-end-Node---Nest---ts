import { HttpStatus, Injectable } from '@nestjs/common';
import { artist } from './types/artist';

@Injectable()
export class TopArtistService {
    async GetTopArtists(): Promise<artist[] | HttpStatus> {
        try {
            const response = await fetch('https://api.deezer.com/chart/0/artists?limit=6', {
                method: 'GET'
            });
            const data = await response.json();
            const artistArray: artist[] = [];
            data.data.map((item: any, index: number) => {
                artistArray.push({
                    id: item.id,
                    name: item.name,
                    picture: item.picture_big
                });
            })
            return artistArray;
        } catch (error) {
            return HttpStatus.BAD_REQUEST;
        }
    }
}
