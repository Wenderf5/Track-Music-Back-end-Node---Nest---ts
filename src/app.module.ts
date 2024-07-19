import { Module } from '@nestjs/common';
import { ArtistModuleModule } from './modules/artist-module/artist-module.module';
import { PlaylistModuleModule } from './modules/playlist-module/playlist-module.module';
import { MusicModuleModule } from './modules/music-module/music-module.module';
import { DefaultController } from './default/default.controller';

@Module({
  imports: [ArtistModuleModule, PlaylistModuleModule, MusicModuleModule],
  controllers: [DefaultController],
  providers: [],
})
export class AppModule {}
