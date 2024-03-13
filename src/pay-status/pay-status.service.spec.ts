import { Test, TestingModule } from '@nestjs/testing';
import { PayStatusService } from './pay-status.service';

describe('PayStatusService', () => {
  let service: PayStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PayStatusService],
    }).compile();

    service = module.get<PayStatusService>(PayStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
