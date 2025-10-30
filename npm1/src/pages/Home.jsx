import Layout from "../components/Layout"
import HomeContent from "./HomeContent"
import "@esri/calcite-components/dist/components/calcite-panel"
import "@esri/calcite-components/dist/components/calcite-button"

function Home() {

  //defaults: works also without writing them
  return (
    <Layout content={<HomeContent />}>
      <calcite-panel>
        <calcite-button
          icon-start="home"//case sensitive! lowercase!
          href="https://developers.arcgis.com/calcite-design-system/"
          target="_blank"
        >
          Calcite Design System
        </calcite-button>
      </calcite-panel>
    </Layout>
  )
}

export default Home

