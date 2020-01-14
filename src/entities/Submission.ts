import { Column, CreateDateColumn, PrimaryColumn, Entity, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Author } from './Author';
import { Subreddit } from './Subreddit';
import { Media } from './Media';

@Entity()
export class Submission {
	@PrimaryColumn()
	id: string;

	@Column({ type: 'datetime', nullable: true, default: null })
	created: Date;

	@CreateDateColumn()
	added: Date;

	@Column()
	permalink: string;

	@Column()
	url: string;

	@Column({ default: false })
	nsfw: boolean;

	@Column({ default: false })
	spoiler: boolean;

	@Column({ default: 0 })
	score: number;

	@Column()
	title: string;

	@Column()
	selftext: string;

	@Column({ default: false })
	isSelf: boolean;

	@ManyToOne(
		() => Subreddit,
		(subreddit) => subreddit.submissions,
		{ nullable: true }
	)
	subreddit: Subreddit;

	@ManyToOne(
		() => Author,
		(author) => author.submissions
	)
	author: Author;

	@ManyToMany(() => Media, { nullable: true })
	@JoinTable()
	media: Media;
}
