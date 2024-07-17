import { Controller, Get, Param } from '@nestjs/common';
import { ArtistService } from '../../services/artist/artist.service';

@Controller()
export class ArtistController {
    constructor(private readonly ArtistService: ArtistService) { }

    @Get('/artist/:artistID')
    GetArtist(@Param('artistID') artistID: string) {
        return this.ArtistService.GetArtist(artistID);
    }
}
