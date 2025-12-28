import { Suspense } from 'react'
import './App.css'
import Bottles from './Components/Bottles/bottles'

function App() {
 const bottlePromise = fetch('https://raw.githubusercontent.com/ProgrammingHero1/B10-memorable-water-bottle/refs/heads/main/public/bottles.json')
 .then(res => res.json());
  return (
    <>
      <h1>Awesome Water Bottles</h1>
      <Suspense fallback={<h2>Bottles are loading...</h2>}>
        <Bottles bottlePromise={bottlePromise} />
      </Suspense>
    </>
  )
}
export default App
