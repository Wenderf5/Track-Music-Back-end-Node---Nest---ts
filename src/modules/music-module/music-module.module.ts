import { Module } from '@nestjs/common';
import { MusicController } from './controllers/music/music.controller';
import { MusicService } from './services/music/music.service';
import { TopMusicService } from './services/top-music/top-music.service';
import { TopMusicController } from './controllers/top-music/top-music.controller';

@Module({
  controllers: [MusicController, TopMusicController],
  providers: [MusicService, TopMusicService]
})
export class MusicModuleModule {}
