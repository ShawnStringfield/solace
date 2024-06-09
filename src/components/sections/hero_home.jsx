import { Section, Container } from '../index';
import { Button } from '@/components/shadcn/ui/button';

export const HeroHome = () => {
  return (
    <Section classes='sm:my-8 bg-hero_home bg-cover sm:bg-[bottom_left_-150px] md:bg-[left_top_-10px] bg-no-repeat'>
      <div className='flex bg-section_header bg-[length:1200px_100px] sm:bg-[length:1200px_100px] md:bg-[length:2400px_100px] bg-no-repeat bg-[center_bottom_-25px] sm:bg-[center_bottom_-25px] md:bg-[center_bottom_-5px] min-h-[300px] sm:min-h-[600px]'>
        <Container>
          <h1 className='text-2xl sm:text-4xl md:text-6xl w-3/4 sm:w-2/4 text-white [text-shadow:_2px_2px_0_rgb(0_0_0_/_50%)] self-center'>
            <div>Find Your Path to Peace and Clarity with Solace Solstice</div>
            <Button className='bg-primary self-center mt-4'>Book an Appointment</Button>
          </h1>
        </Container>
      </div>
    </Section>
  );
};
