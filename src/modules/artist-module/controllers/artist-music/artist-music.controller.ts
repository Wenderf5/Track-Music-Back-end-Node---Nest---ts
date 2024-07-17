import { Controller, Get, Param } from '@nestjs/common';
import { ArtistMusicService } from '../../services/artist-music/artist-music.service';

@Controller()
export class ArtistMusicController {
    constructor(private readonly ArtistMusicService: ArtistMusicService) { }

    @Get('/artist-musics/:artistID')
    GetArtistMusic(@Param('artistID') artistID: string) {
        return this.ArtistMusicService.GetArtistMusic(artistID);
    }
}
