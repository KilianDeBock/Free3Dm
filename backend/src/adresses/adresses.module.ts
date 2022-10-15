import { Module } from '@nestjs/common';
import { AdressesService } from './adresses.service';
import { AdressesResolver } from './adresses.resolver';

@Module({
  providers: [AdressesResolver, AdressesService]
})
export class AdressesModule {}
