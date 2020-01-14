import { Column, CreateDateColumn, PrimaryColumn, Entity, OneToMany } from 'typeorm';
import { Submission } from './Submission';

@Entity()
export class Author {
	@PrimaryColumn()
	id: string;

	@Column({ type: 'datetime', nullable: true, default: null })
	created?: Date;

	@CreateDateColumn()
	added: Date;

	@Column({ nullable: true })
	fullname?: string;

	@OneToMany(
		() => Submission,
		(submission) => submission.author
	)
	submissions: Submission[];
}
