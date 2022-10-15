import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AdressesService } from './adresses.service';
import { Adress } from './entities/adress.entity';
import { CreateAdressInput } from './dto/create-adress.input';
import { UpdateAdressInput } from './dto/update-adress.input';

@Resolver(() => Adress)
export class AdressesResolver {
  constructor(private readonly adressesService: AdressesService) {}

  @Mutation(() => Adress)
  createAdress(@Args('createAdressInput') createAdressInput: CreateAdressInput) {
    return this.adressesService.create(createAdressInput);
  }

  @Query(() => [Adress], { name: 'adresses' })
  findAll() {
    return this.adressesService.findAll();
  }

  @Query(() => Adress, { name: 'adress' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.adressesService.findOne(id);
  }

  @Mutation(() => Adress)
  updateAdress(@Args('updateAdressInput') updateAdressInput: UpdateAdressInput) {
    return this.adressesService.update(updateAdressInput.id, updateAdressInput);
  }

  @Mutation(() => Adress)
  removeAdress(@Args('id', { type: () => Int }) id: number) {
    return this.adressesService.remove(id);
  }
}
