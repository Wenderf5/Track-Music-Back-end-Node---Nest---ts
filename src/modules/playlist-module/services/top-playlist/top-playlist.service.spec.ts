import { Test, TestingModule } from '@nestjs/testing';
import { TopPlaylistService } from './top-playlist.service';

describe('TopPlaylistService', () => {
  let service: TopPlaylistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TopPlaylistService],
    }).compile();

    service = module.get<TopPlaylistService>(TopPlaylistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
