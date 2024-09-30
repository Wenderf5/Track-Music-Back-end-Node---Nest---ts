import { Module } from '@nestjs/common';
import { MusicModuleModule } from './modules/music-module/music-module.module';
import { DefaultController } from './default/default.controller';

@Module({
  imports: [MusicModuleModule],
  controllers: [DefaultController],
  providers: [],
})
export class AppModule { }
