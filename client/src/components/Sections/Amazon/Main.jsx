import React, {useEffect} from 'react';
import NavBar from './NavBar';
import VideoGallery from './VideoGallery';
import Footer from '../Footer';
import Photo from './Photo';
import Study from './Study';
import VideoWithButton from './VideoWithButton';
import Faq from './Faq';
import Why from './Why';
import FullPagePhoto from './FullPagePhoto';

const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // This scrolls to the top on page load
  }, []);
  return (
    <div>
<NavBar/>
<VideoGallery/>
<Photo/>
<Why/>
<Study/>
<FullPagePhoto/>
<VideoWithButton/>
<Faq/>
<Footer/>
    </div>
  )
}

export default Main