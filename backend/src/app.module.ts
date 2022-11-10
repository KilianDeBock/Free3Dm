import { AddressesModule } from './addresses/addresses.module';
import { ArticleOrderModule } from './article_order/article_order.module';
import { ArticlesModule } from './articles/articles.module';
import { BrandsModule } from './brands/brands.module';
import { CategoriesModule } from './categories/categories.module';
import { CustomersModule } from './customers/customers.module';
import { DetailsModule } from './details/details.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { ReviewsModule } from './reviews/reviews.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    AddressesModule,
    ArticleOrderModule,
    ArticlesModule,
    BrandsModule,
    CategoriesModule,
    CustomersModule,
    DetailsModule,
    OrdersModule,
    ProductsModule,
    ReviewsModule,
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
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        if (process.env.NODE_ENV === 'production') {
          return {
            url: process.env.DATABASE_URL,
            type: 'postgres',
            ssl: {
              rejectUnauthorized: false,
            },
            entities: ['dist/**/*.entity{.ts,.js}'],
            synchronize: true,
          };
        } else {
          return {
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'server',
            password: 'Secret123',
            database: 'free3dm',
            entities: ['dist/**/*.entity{.ts,.js}'],
            synchronize: true,
          };
        }
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
