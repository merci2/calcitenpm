import "@esri/calcite-components/dist/components/calcite-shell"
import "@esri/calcite-components/dist/components/calcite-shell-panel"
import "@esri/calcite-components/dist/components/calcite-panel"
import "@esri/calcite-components/dist/components/calcite-button"

function Home() {

  //defaults: works also without writing them
  return (
    <calcite-shell>
        <calcite-shell-panel slot="panel-start" position="start" id="shell-panel-start">
            <calcite-panel>
    <calcite-button
      icon-start="home"//case sensitive! lowercase!
      href="https://developers.arcgis.com/calcite-design-system/"
      target="_blank"
    >
      Calcite Design System
    </calcite-button>
    </calcite-panel>
    </calcite-shell-panel>
    </calcite-shell>
  )
}

export default Home

