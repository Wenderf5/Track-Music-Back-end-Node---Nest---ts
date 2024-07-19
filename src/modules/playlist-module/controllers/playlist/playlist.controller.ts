import { Controller, Get, Param } from '@nestjs/common';
import { PlaylistService } from '../../services/playlist/playlist.service';

@Controller()
export class PlaylistController {
    constructor(private readonly PlaylistService: PlaylistService) { }

    @Get('/playlist/:playlistID')
    GetPlaylist(@Param('playlistID') playlistID: string) {
        return this.PlaylistService.GetPlaylistMusic(playlistID);
    }
}
