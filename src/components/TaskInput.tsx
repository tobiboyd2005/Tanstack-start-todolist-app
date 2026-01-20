import { Plus } from "lucide-react";
import { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const TaskInput = ({onAddTask}: {onAddTask: (name: string) => void}) => {
	const [taskName, setTaskName] = useState("");

  function handleAdd(){
    if (!taskName.trim()) return;
    onAddTask(taskName);
    setTaskName("");
    console.log("Task Added:", taskName);
  }

	return (
		<Dialog>
			<DialogTrigger className="border px-2 w-full flex items-center gap-4 h-10 rounded-xl ">
				<Plus />
				<p>Add New Task</p>
			</DialogTrigger>
			<DialogContent className="bg-black text-white gap-6">
				<DialogHeader className="bg-black text-white gap-6">
					<DialogTitle>Create a Task</DialogTitle>
					<DialogDescription className="flex flex-col gap-4">
						<Input
							value={taskName}
							onChange={(e) => setTaskName(e.target.value)}
							placeholder="Enter task name"
						/>
						<Button type="submit" onClick={() => {handleAdd()}} className="bg-white text-black border border-white hover:bg-black hover:text-white">Create Task</Button>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

export default TaskInput;
