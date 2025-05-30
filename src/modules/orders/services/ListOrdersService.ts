import { getCustomRepository } from "typeorm";
import OrdersRepository from "../typeorm/repository/OrdersRepository";
import Order from "../typeorm/entities/Order";

export default class ListOrdersService{
    public async execute():Promise<Order[]>{
        const ordersRepository = getCustomRepository(OrdersRepository);
        const orders = await ordersRepository.find();
        return orders;
    }
}