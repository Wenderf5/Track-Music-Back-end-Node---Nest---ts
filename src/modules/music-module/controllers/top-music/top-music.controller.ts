import { Controller, Get } from '@nestjs/common';
import { TopMusicService } from '../../services/top-music/top-music.service';

@Controller()
export class TopMusicController {
    constructor(private readonly TopMusicService: TopMusicService) { }

    @Get('/top-music')
    GetTopMusic() {
        return this.TopMusicService.GetTopMusic();
    }
}
