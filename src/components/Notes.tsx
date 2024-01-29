import { INote } from "@/interfaces";

interface IProps {
	notes: INote[];
}

export const Notes = ({notes} : IProps) => {
	return (
		<ul>
			{notes.map(note => {
				return (
					<li key={note.id}><span>{note.rank}</span>{note.body}</li>
				)
			})}
		</ul>
	);
};
