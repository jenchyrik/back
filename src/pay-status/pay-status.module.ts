import { Module } from '@nestjs/common';
import { PayStatusController } from './pay-status.controller';
import { PayStatusService } from './pay-status.service';

@Module({
  controllers: [PayStatusController],
  providers: [PayStatusService],
})
export class PayStatusModule {}
