import { Module } from '@nestjs/common';
import { TopPlaylistController } from './controllers/top-playlist/top-playlist.controller';
import { TopPlaylistService } from './services/top-playlist/top-playlist.service';
import { PlaylistMusicService } from './services/playlist-music/playlist-music.service';
import { PlaylistMusicController } from './controllers/playlist-music/playlist-music.controller';
import { PlaylistService } from './services/playlist/playlist.service';
import { PlaylistController } from './controllers/playlist/playlist.controller';

@Module({
  controllers: [TopPlaylistController, PlaylistMusicController, PlaylistController],
  providers: [TopPlaylistService, PlaylistMusicService, PlaylistService]
})
export class PlaylistModuleModule { }
