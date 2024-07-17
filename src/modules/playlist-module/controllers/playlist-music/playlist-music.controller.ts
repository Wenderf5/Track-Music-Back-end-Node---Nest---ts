import { Controller, Get, Param } from '@nestjs/common';
import { PlaylistMusicService } from '../../services/playlist-music/playlist-music.service';

@Controller()
export class PlaylistMusicController {
    constructor(private readonly PlaylistMusicService: PlaylistMusicService) { }

    @Get('/playlist-music/:playlistID')
    GetPlaylistMusic(@Param('playlistID') playlistID: string) {
        return this.PlaylistMusicService.GetPlaylistMusic(playlistID);
    }
}
