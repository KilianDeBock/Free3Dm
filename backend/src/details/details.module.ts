import { forwardRef, Module } from '@nestjs/common';
import { DetailsService } from './details.service';
import { DetailsResolver } from './details.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Detail } from './entities/detail.entity';
import { ArticlesModule } from '../articles/articles.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Detail]),
    forwardRef(() => ArticlesModule),
  ],
  providers: [DetailsResolver, DetailsService],
  exports: [DetailsService],
})
export class DetailsModule {}
