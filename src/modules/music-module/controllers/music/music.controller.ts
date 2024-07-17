import { Controller, Get, Param } from '@nestjs/common';
import { MusicService } from '../../services/music/music.service';

@Controller()
export class MusicController {
    constructor(private readonly MusicService: MusicService) { }

    @Get('/music/:musicName')
    SearchMusic(@Param('musicName') musicName: string) {
        return this.MusicService.SearchMusic(musicName);
    }
}
