import { Analytics } from "@vercel/analytics/react"
function App() {

  return (
    <>
      <h1 className="text-5xl">CS-Visualized</h1>
      <h2 className="text-3xl">Table of Contents</h2>
      <ul>
        <li>Data Structures</li>
        <li>Algorithms</li>
        <li>Operating Systems</li>
        <li>Computer Networks</li>
        <li>Databases</li>
        <li>Compiler Design</li>
      </ul>
      <Analytics />
    </>
  )
}

export default App
