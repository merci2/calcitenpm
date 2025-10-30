import "@esri/calcite-components/dist/components/calcite-button"

function Home() {

  //defaults: works also without writing them
  return (
    <calcite-button
      appearance="solid"
      kind="brand"
      scale="m"
      split-child="false"
      type="button"
      width="auto"
      calcite-hydrated

      icon-start="Home"
      href="https://developers.arcgis.com/calcite-design-system/"
      target="_blank"
    >
      Calcite Design System
    </calcite-button>
  )
}

export default Home