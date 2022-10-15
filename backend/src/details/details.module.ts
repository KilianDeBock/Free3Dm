import { Module } from '@nestjs/common';
import { DetailsService } from './details.service';
import { DetailsResolver } from './details.resolver';

@Module({
  providers: [DetailsResolver, DetailsService]
})
export class DetailsModule {}
