import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Product";
import ProductRepository from "../typeorm/repositories/ProductsRepository";

export default class ListProductService {
	public async execute(): Promise<Product[]> {
		console.log("list product service")
		const productsRepository = getCustomRepository(ProductRepository);
		console.log("list product service 2")
		const products = productsRepository.find();
		
		return products;
	}
}
