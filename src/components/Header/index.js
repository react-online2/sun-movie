import React from 'react';
import { Link } from 'react-router-dom';
import RMDBLogo from '../../images/image.png';
import MVLogo from '../../images/movie-gif.gif'

import { Wrapper, Content, LogoImg, MVLogoImg } from './Header.styles';

 
function Header() {
   return (
     <header>
       <Wrapper>
         <Content>
           <Link to="/">
             <LogoImg src={RMDBLogo} alt="rmbd-logo" />
           </Link>
           <MVLogoImg src={MVLogo} alt="tmdb-logo" />
         </Content>
       </Wrapper>
     </header>
   );
}
export default Header;