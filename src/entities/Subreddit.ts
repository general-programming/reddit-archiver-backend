import { Column, CreateDateColumn, PrimaryColumn, Entity, OneToMany } from 'typeorm';
import { Submission } from './Submission';

@Entity()
export class Subreddit {
	@PrimaryColumn()
	id: string;

	@CreateDateColumn()
	added: Date;

	@Column()
	name: string;

	@Column()
	type: string;

	@OneToMany(
		() => Submission,
		(submission) => submission.subreddit
	)
	submissions: Submission[];
}
