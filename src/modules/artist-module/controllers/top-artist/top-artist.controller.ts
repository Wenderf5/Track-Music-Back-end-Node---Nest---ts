import { Controller, Get } from '@nestjs/common';
import { TopArtistService } from '../../services/top-artist/top-artist.service';

@Controller()
export class TopArtistController {
    constructor(private readonly TopArtistsService: TopArtistService) { }

    @Get('/top-artists')
    TopArtist() {
        return this.TopArtistsService.GetTopArtists();
    }
}
