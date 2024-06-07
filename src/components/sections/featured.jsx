import content from '../../assets/content.json';
import { Container } from '../container';
import { Section } from '../section';
import { getIcons } from '../../lib/getIcons';

export const Featured = () => {
  return (
    <Section classes='text-center bg-accent'>
      <Container classes='py-4'>
        <div className='md:grid grid-cols-3 gap-8'>
          {content.featured.map((item, index) => (
            <div key={index} className='my-16'>
              <p className='flex justify-center mb-2'>{getIcons(item.icon)}</p>
              <h2 className='text-lg sm:text-2xl mb-2'>{item.title}</h2>
              <p className=''>{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
