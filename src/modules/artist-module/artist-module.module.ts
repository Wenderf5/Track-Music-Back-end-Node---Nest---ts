import { Module } from '@nestjs/common';
import { TopArtistController } from './controllers/top-artist/top-artist.controller';
import { TopArtistService } from './services/top-artist/top-artist.service';
import { ArtistController } from './controllers/artist/artist.controller';
import { ArtistService } from './services/artist/artist.service';
import { ArtistMusicController } from './controllers/artist-music/artist-music.controller';
import { ArtistMusicService } from './services/artist-music/artist-music.service';

@Module({
  controllers: [TopArtistController, ArtistController, ArtistMusicController],
  providers: [TopArtistService, ArtistService, ArtistMusicService]
})
export class ArtistModuleModule { }
