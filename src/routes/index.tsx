// src/routes/index.tsx
import { useNavigate, createFileRoute } from '@tanstack/react-router'





export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {

  const navigate = useNavigate()


  return (
    <div className="flex justify-center items-center ">
    <button
      type="button"
      onClick={() => {
        navigate({ to: '/todos' })
      }}
    >
      Start Tracking your tasks!
    </button>
    </div>
  )
}
