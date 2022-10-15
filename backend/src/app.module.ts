import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { AdressesModule } from './adresses/adresses.module';
import { OrdersModule } from './orders/orders.module';
import { ArticleOrderModule } from './article_order/article_order.module';
import { ReviewsModule } from './reviews/reviews.module';
import { ArticlesModule } from './articles/articles.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { BrandsModule } from './brands/brands.module';
import { DetailsModule } from './details/details.module';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CustomersModule,
    AdressesModule,
    OrdersModule,
    ArticleOrderModule,
    ReviewsModule,
    ArticlesModule,
    ProductsModule,
    CategoriesModule,
    BrandsModule,
    DetailsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      introspection: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: {
        dateScalarMode: 'timestamp',
      },
    }),
    // TypeOrmModule.forRoot({
    //   type: 'sqlite',
    //   database: ':memory:',
    //   synchronize: true,
    //   entities: ['dist/**/*.entity{.ts,.js}'],
    // }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'server',
      password: 'Secret123',
      database: 'free3dm',
      synchronize: true,
      entities: ['dist/**/*.entity{.ts,.js}'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
