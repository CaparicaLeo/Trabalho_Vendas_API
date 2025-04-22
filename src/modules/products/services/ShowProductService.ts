import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Product";
import ProductRepository from "../typeorm/repositories/ProductsRepository";
import AppError from "@shared/errors/AppError";

interface IRequest {
	id: string;
}
export default class ShowProductService {
	public async execute({ id }: IRequest): Promise<Product> {
		const productsRepository = getCustomRepository(ProductRepository);
		const products = await productsRepository.findOne(id);
		if (!products) {
			throw new AppError("Product not found");
		}
		return products;
	}
}
