import { Test, TestingModule } from '@nestjs/testing';
import { ArtistMusicController } from './artist-music.controller';

describe('ArtistMusicController', () => {
  let controller: ArtistMusicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArtistMusicController],
    }).compile();

    controller = module.get<ArtistMusicController>(ArtistMusicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
