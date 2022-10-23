import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { BrandsService } from './brands.service';
import { Brand } from './entities/brand.entity';
import { CreateBrandInput } from './dto/create-brand.input';
import { UpdateBrandInput } from './dto/update-brand.input';
import { Product } from 'src/products/entities/product.entity';

@Resolver(() => Brand)
export class BrandsResolver {
  constructor(private readonly brandsService: BrandsService) {}

  @Mutation(() => Brand)
  createBrand(@Args('createBrandInput') createBrandInput: CreateBrandInput) {
    return this.brandsService.create(createBrandInput);
  }

  @Query(() => [Brand], { name: 'brands' })
  findAll() {
    return this.brandsService.findAll();
  }

  @Query(() => Brand, { name: 'brand' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.brandsService.findOne(id);
  }

  @ResolveField(() => [Product])
  products(@Parent() brand: Brand): Promise<Product[]> {
    return this.brandsService.getAllProducts(brand.id);
  }

  @Mutation(() => Brand)
  updateBrand(@Args('updateBrandInput') updateBrandInput: UpdateBrandInput) {
    return this.brandsService.update(updateBrandInput.id, updateBrandInput);
  }

  @Mutation(() => Brand)
  removeBrand(@Args('id', { type: () => Int }) id: number) {
    return this.brandsService.remove(id);
  }
}
