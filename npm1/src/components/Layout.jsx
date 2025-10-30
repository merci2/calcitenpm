import "@esri/calcite-components/dist/components/calcite-shell"
import "@esri/calcite-components/dist/components/calcite-shell-panel"

function Layout({ children, content }) {
  return (
    <calcite-shell>
      <calcite-shell-panel 
        slot="panel-start" 
        position="start" 
        id="shell-panel-start"
      >
        {children}
      </calcite-shell-panel> 

      {/* <calcite-panel heading="calcite-panel heading='Content'"> */}
      <calcite-panel>
        {content}
      </calcite-panel>     
        
    </calcite-shell>
  );
}

export default Layout