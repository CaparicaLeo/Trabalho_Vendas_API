import { string } from "joi";
import {
	Column,
	CreateDateColumn,
	Entity,
	Generated,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";

@Entity("user_tokens")
export default class UserTokens {
	@PrimaryGeneratedColumn("uuid")
	id: string;
	@Column("uuid")
	@Generated("uuid")
	token: string;
	@Column()
	user_id: string;
	@CreateDateColumn()
	created_at: Date;
	@UpdateDateColumn()
	update_at: Date;
}
