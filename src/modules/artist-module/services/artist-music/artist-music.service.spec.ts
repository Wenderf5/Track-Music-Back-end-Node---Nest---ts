import { Test, TestingModule } from '@nestjs/testing';
import { ArtistMusicService } from './artist-music.service';

describe('ArtistMusicService', () => {
  let service: ArtistMusicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArtistMusicService],
    }).compile();

    service = module.get<ArtistMusicService>(ArtistMusicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
