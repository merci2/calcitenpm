import "@esri/calcite-components/dist/components/calcite-button"

function App() {

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

      icon-start="script"
      href="https://www.n-tv.de/"
      target="_blank"
    >
      Open News
    </calcite-button>
  )
}

export default App

