import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";


function SimpleLight({ children }) {
   // let settings = {}
   return (
      <SimpleReactLightbox>
         <SRLWrapper>
            { children }
         </SRLWrapper>
      </SimpleReactLightbox>
   )
}
export default SimpleLight;