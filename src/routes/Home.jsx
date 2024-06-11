import { HeroHome } from '../components/sections/hero_home';
import { Featured } from '../components/sections/featured';
import { FeaturedSplit } from '../components/sections/featured_split';
import { Section, Container } from '../components';
import { ContactForm } from '../components/contactform';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/shadcn/ui/avatar';
import { FAQ } from '../components/sections/faq';
import t1 from '@/assets/testimonials/1.jpg';

export default function Home() {
  return (
    <>
      <HeroHome />
      <Section classes='border-b-[1px] pb-16 bg-quote bg-no-repeat bg-[length:100px_100px] bg-[center_bottom_-25px]'>
        <Container classes='text-center sm:px-16'>
          <h2 className='text-3xl sm:text-4xl'>
            {String(
              'I found the guidance and support I needed at Solace Solstice Counseling. My therapist helped me navigate through some of the toughest times in my life.'
            )}
          </h2>
          <div className='flex justify-center mt-8'>
            <Avatar className='w-24 h-24'>
              <AvatarImage className='size-full' src={t1} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className='pl-4 self-center'> - David Varges</div>
          </div>
        </Container>
      </Section>
      <FeaturedSplit />

      <Section>
        <Featured />
      </Section>

      <Section>
        <ContactForm />
      </Section>

      <Section classes='px-4'>
        <FAQ />
      </Section>
    </>
  );
}
