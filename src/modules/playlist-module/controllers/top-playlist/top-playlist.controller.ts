import { Controller, Get } from '@nestjs/common';
import { TopPlaylistService } from '../../services/top-playlist/top-playlist.service';

@Controller()
export class TopPlaylistController {
    constructor(private readonly TopPlaylistService: TopPlaylistService) { }

    @Get('/top-playlist')
    GetTopPlaylist() {
        return this.TopPlaylistService.GetTopPlaylist();
    }
}
