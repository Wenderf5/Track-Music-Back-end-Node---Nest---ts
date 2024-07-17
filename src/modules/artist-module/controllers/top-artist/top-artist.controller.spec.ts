import { Test, TestingModule } from '@nestjs/testing';
import { TopArtistController } from './top-artist.controller';

describe('TopArtistController', () => {
  let controller: TopArtistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TopArtistController],
    }).compile();

    controller = module.get<TopArtistController>(TopArtistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
