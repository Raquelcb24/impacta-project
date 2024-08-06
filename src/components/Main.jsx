import Section_articles from "./Section_articles"
import Section_clients from "./Section_clients"
import Section_passion from "./Section_passion"
import SectionForm from "./SectionForm"


function Main() {
  return (
    <>
    <main className="bg-zinc-100">
      <Section_articles/>
      <Section_passion/>
      <Section_clients/>
      <SectionForm/>
    </main>
      
    </>

  )
}

export default Main