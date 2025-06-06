import { Button } from "@/components/ui/button"
import Page from "./app/dashboard/page"



function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button className='bg-amber-300'>Click me</Button>
      <Page />
    </div>
  )
}

export default App;
