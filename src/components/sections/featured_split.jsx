import content from '../../assets/content.json';
import { Container } from '../container';
import { Section } from '../section';
import { Button } from '@/components/shadcn/ui/button';

export const FeaturedSplit = () => {
  return (
    <Section>
      <Container>
        <div className='md:flex p-4' id='services'>
          <div className='md:w-2/4 md:mr-16 mb-8 self-center'>
            <h2 className='text-5xl'>How it Works</h2>
            <ul className='list-inside mt-8'>
              {content.how_it_works.map((value, index) => (
                <li key={index} className='mb-4'>
                  <p>
                    <span className='text-primary text-3xl mr-2 font-bold'>{index + 1}</span>
                    <span className='font-bold'>{value.title}: </span>
                    {value.description}
                  </p>
                  <p></p>
                </li>
              ))}
            </ul>
            <Button
              className='mt-4 text-lg text-white py-6 bg-blue-400 hover:bg-secondary-foreground'
              variant='secondary'
            >
              Lets Get Started
            </Button>
          </div>
          <div className='md:w-3/4 flex'>
            <div className='md:grid grid-cols-2 gap-16'>
              {content.featured_split.map((value, index) => (
                <div key={index} className='my-8 md:my-4'>
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
