import { Star, TrashIcon } from "lucide-react";
import { useState } from "react";
import { Checkbox } from "./ui/checkbox";

interface taskProps {
	id: number;
	name: string;
	onDelete: (id: number) => void;
}

const Task = (props: taskProps) => {
	const [checked, setChecked] = useState(false);

	return (
		<div className="w-full flex items-center justify-between gap-4 p-4 border-b">
			<section className="flex items-center gap-4">
				<Checkbox
					checked={checked}
					onCheckedChange={(e) => setChecked(e as boolean)}
				/>
				<p>{props.name}</p>
			</section>
			<TrashIcon
				onClick={() => {
					props.onDelete(props.id);
				}}
			/>
		</div>
	);
};

export default Task;
