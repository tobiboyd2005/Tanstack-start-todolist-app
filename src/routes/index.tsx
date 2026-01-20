// src/routes/index.tsx
import { Button } from "@/components/ui/button";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	const navigate = useNavigate();

	return (
		<div className="flex flex-col gap-4 items-center">
      <h1 className="text-5xl font-bold">Tobi's Todo List App</h1>
			<Button
				onClick={() => {
					navigate({ to: "/todos" });
				}}
				className="text-black bg-white hover:bg-black hover:text-white border border-white"
			>
				Start Tracking your tasks Tobi!
			</Button>
		</div>
	);
}
