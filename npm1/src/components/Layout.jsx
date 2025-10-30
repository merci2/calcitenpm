import "@esri/calcite-components/dist/components/calcite-shell"
import "@esri/calcite-components/dist/components/calcite-shell-panel"

function Layout({ children }) {
  return (
    <calcite-shell>
      <calcite-shell-panel 
        slot="panel-start" 
        position="start" 
        id="shell-panel-start"
      >
        {children}
      </calcite-shell-panel>
    </calcite-shell>
  );
}

export default Layout