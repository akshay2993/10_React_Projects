import Card from "./components/Card"

function App() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline mb-6 text-center">Hello Tailwind!</h1>
      <Card author="Sarah Dayan" designation="Staff Engineer, Algolia" />
      <Card />
      <Card author="Akshay" designation="Software Engineer" />
      <Card author="Jacob" designation="Engineer" />
    </main>
  )
}

export default App
