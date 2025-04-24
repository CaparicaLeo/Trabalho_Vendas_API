import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Product";
import ProductRepository from "../typeorm/repositories/ProductsRepository";
import AppError from "@shared/errors/AppError";

interface IRequest {
  name: string;
  price: number;
  quantity: number;
}
export default class CreateProductService {
  public async execute({ name, price, quantity }: IRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);
    console.log("create product service 1: " + name)
    const productsExists = await productsRepository.findByName(name);
    console.log("create product service 2")
    if (productsExists) {
      throw new AppError("This is already one product with this name");
    }
    console.log("service")
    const product = productsRepository.create({ name, price, quantity });
    await productsRepository.save(product);
    return product;
  }
}
