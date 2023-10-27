import './FAQs.css'
import faqs from './data';
import FAQ from './FAQ';

const FAQs = () => {
  return (
    <section id='faqs'>
      <h2>FAQS</h2>
      <p></p>
      <div className='container faqs__container'>{faqs.map(faq =>(
        <FAQ key={faq.id} faq={faq}/>
      ))}</div>
    </section>
  );
}

export default FAQs