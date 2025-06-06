import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserTokens1747168683713 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "user_tokens",
				columns: [
					{
						name: "id",
						type: "uuid",
						isPrimary: true,
						generationStrategy: "uuid",
						default: "uuid_generate_v4()",
					},
					{
						name: "token",
						type: "uuid",
						generationStrategy: "uuid",
						default: "uuid_generate_v4()",
					},
					{ name: "user_id", type: "uuid" },
					{ name: "created_at", type: "timestamp", default: "now()" },
					{ name: "update_at", type: "timestamp", default: "now()" },
				],
				foreignKeys: [
					{
						name: "TokenUsers",
						referencedTableName: "users",
						referencedColumnNames: ["id"],
						columnNames: ["user_id"],
						onDelete: "CASCADE",
						onUpdate: "CASCADE",
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users_tokens');
    }
}
