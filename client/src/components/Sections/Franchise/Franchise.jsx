import React, {useEffect} from 'react';
import Form from './Form';
import Footer from '../Footer';

const Franchise = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // This scrolls to the top on page load
  }, []);
  return (
    <div>

    <Form/>
    <Footer/>
    </div>
  )
}

export default Franchise