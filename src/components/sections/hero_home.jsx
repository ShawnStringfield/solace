import { Section, Container } from '../index';
import { Button } from '@/components/shadcn/ui/button';
import { Link } from 'react-router-dom';

export const HeroHome = () => {
  return (
    <Section classes='sm:my-8 bg-hero_home bg-cover sm:bg-[bottom_left_-150px] md:bg-[left_top_-10px] bg-no-repeat'>
      <div className='flex min-h-[300px] sm:min-h-[600px]'>
        <Container>
          <h1 className='text-2xl sm:text-4xl md:text-6xl w-3/4 sm:w-2/4 text-white [text-shadow:_2px_2px_0_rgb(0_0_0_/_50%)] self-center'>
            <div>Find Your Path to Peace and Clarity with Solace Solstice</div>
            <Link to='/contact'>
              <Button className='bg-blue-400 sm:text-lg text-white py-6 mt-4 hover:bg-primary-foreground'>
                Book an Appointment
              </Button>
            </Link>
          </h1>
        </Container>
      </div>
    </Section>
  );
};
