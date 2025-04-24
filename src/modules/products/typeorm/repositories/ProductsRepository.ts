import { EntityRepository, Repository } from "typeorm";
import Product from "../entities/Product";

@EntityRepository(Product)
export default class ProductRepository extends Repository<Product> {
	public async findByName(name: string): Promise<Product | undefined> {
		console.log("Entity repository: "+ name)
		const product = this.findOne({ where: { name } });
		console.log(product)
		return product;
	}
}	
