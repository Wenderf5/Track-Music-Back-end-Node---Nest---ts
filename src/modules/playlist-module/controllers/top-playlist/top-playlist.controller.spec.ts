import { Test, TestingModule } from '@nestjs/testing';
import { TopPlaylistController } from './top-playlist.controller';

describe('TopPlaylistController', () => {
  let controller: TopPlaylistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TopPlaylistController],
    }).compile();

    controller = module.get<TopPlaylistController>(TopPlaylistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
