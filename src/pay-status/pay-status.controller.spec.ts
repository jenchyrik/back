import { Test, TestingModule } from '@nestjs/testing';
import { PayStatusController } from './pay-status.controller';

describe('PayStatusController', () => {
  let controller: PayStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PayStatusController],
    }).compile();

    controller = module.get<PayStatusController>(PayStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
