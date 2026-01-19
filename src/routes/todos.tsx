import TaskInput from "@/components/TaskInput";
import { createFileRoute } from "@tanstack/react-router";
import { Ellipsis, Menu, Search, SquarePen } from "lucide-react";

export const Route = createFileRoute("/todos")({
	component: RouteComponent,
});

function RouteComponent() {
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
        <TaskInput/>
			</div>
		</div>
	);
}
