import { ContactForm } from '../components/contactform';
import { Section, Container } from '../components';

export default function Contact() {
  return (
    <>
      <Section>
        <Container classes='text-center'>
          <h2 className='mb-4 '>Contact Solace Solstice Counseling</h2>
          <p>
            Taking the first step towards mental wellness is a significant and empowering decision. I’m here to make
            that process as smooth and supportive as possible. Please feel free to reach out to me through any of the
            methods below. I look forward to connecting with you.
          </p>
        </Container>
        <ContactForm />
      </Section>
    </>
  );
}
