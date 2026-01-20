import { createFileRoute } from "@tanstack/react-router";
import { Ellipsis, Menu, Search, SquarePen } from "lucide-react";
import { useState } from "react";
import Task from "@/components/Task";
import TaskInput from "@/components/TaskInput";

export const Route = createFileRoute("/todos")({
	component: RouteComponent,
});

function RouteComponent() {
	const [tasks, setTasks] = useState<Array<{ id: number; name: string }>>([]);

	function addTask(name: string) {
		setTasks(prev => [
			...prev,
			{
				id: Date.now(),
				name
			}
		])
	}

	function deleteTask(id:number){
		setTasks(prev => prev.filter(task => task.id !== id));
	}

	return (
		<div className="w-96">
			<div className="flex justify-between items-center mb-8">
				<Menu />
				<h1 className="text-5xl font-bold">Todo List</h1>
				<Search />
			</div>
			<div className="flex justify-between items-center mb-8">
				<h2 className="text-3xl font-bold">Tasks</h2>
				<section className="flex justify-center items-center gap-10">
					<SquarePen />
					<Ellipsis />
				</section>
			</div>
			<div className="flex flex-col justify-center items-center mb-8">
				<TaskInput onAddTask={addTask}/>
				{tasks.map(task => (
						<Task key={task.id} id={task.id} name={task.name} onDelete={deleteTask}/>
				))}

			</div>
		</div>
	);
}

