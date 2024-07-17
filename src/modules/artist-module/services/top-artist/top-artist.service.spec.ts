import { Test, TestingModule } from '@nestjs/testing';
import { TopArtistService } from './top-artist.service';

describe('TopArtistService', () => {
  let service: TopArtistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TopArtistService],
    }).compile();

    service = module.get<TopArtistService>(TopArtistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
