import content from '../../assets/content.json';
import { Container } from '../container';
import { Section } from '../section';

export const FeaturedSplit = () => {
  return (
    <Section>
      <Container>
        <div className='md:flex'>
          <div className='md:w-2/4 md:mr-16 mb-8 self-center'>
            <p className=''>Core Values</p>
            <h2>Guiding Principles: Connection, Eco-Consciousness, Innovation, Diversity, and Transparency</h2>
          </div>
          <div className='md:w-2/4 flex'>
            <div className='md:grid grid-cols-2 gap-8'>
              {content.featured_split.map((value, index) => (
                <div key={index} className='my-8 md:my-0'>
                  <h3 className='mb-2'>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
