import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { MediaTypeEnum } from './MediaTypeEnum';

@Entity()
export class Media {
	@PrimaryColumn()
	urlHash: string;

	@CreateDateColumn()
	added: Date;

	@Column()
	url: string;

	@Column()
	domain: string;

	@Column({
		type: 'enum',
		enum: MediaTypeEnum,
	})
	type: MediaTypeEnum;

	@Column({ nullable: true })
	originalName?: string;

	@Column()
	path: string;
}
