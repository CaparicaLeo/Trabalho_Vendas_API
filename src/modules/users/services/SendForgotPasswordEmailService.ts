import { getCustomRepository } from "typeorm";
import UsersRepository from "../typeorm/repositories/UsersRepository";
import UserTokensRepository from "../typeorm/repositories/UserTokensRepository";
import AppError from "@shared/errors/AppError";
import EtherealMail from "@config/mail/EtheralMail";

interface IRequest{
    email:string;
}
export default class SendForgotPasswordEmailService{
    public async execute({email}:IRequest):Promise<void>{
        const userRepository = getCustomRepository(UsersRepository);
        const userTokenRepository = getCustomRepository(UserTokensRepository);
        const user = await userRepository.findByEmail(email);
        if(!user){
            throw new AppError('User does not exist');
        }
        const { token } = await userTokenRepository.createToken(user.id);

        //Implementação do envio do token 
        console.log(token);
        await EtherealMail.sendMail({
            to: email,
            body:`Solicitação de redefinição de senha recebida ${token}`
        })
    }
}