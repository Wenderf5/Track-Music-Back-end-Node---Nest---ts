import { Module } from '@nestjs/common';
import { TopPlaylistController } from './controllers/top-playlist/top-playlist.controller';
import { TopPlaylistService } from './services/top-playlist/top-playlist.service';
import { PlaylistMusicService } from './services/playlist-music/playlist-music.service';
import { PlaylistMusicController } from './controllers/playlist-music/playlist-music.controller';

@Module({
  controllers: [TopPlaylistController, PlaylistMusicController],
  providers: [TopPlaylistService, PlaylistMusicService]
})
export class PlaylistModuleModule {}
