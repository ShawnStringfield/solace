import { HeroHome } from '../components/sections/hero_home';
import { Featured } from '../components/sections/featured';
import { FeaturedSplit } from '../components/sections/featured_split';
import { Section, Container } from '../components';

export default function Home() {
  return (
    <>
      <HeroHome />
      <Section classes='border-b-[1px] pb-16 bg-dove bg-no-repeat bg-[length:100px_100px] bg-[center_bottom_-35px]'>
        <Container classes='text-center sm:px-16'>
          <p className='sm:text-2xl'>
            At Solace Solstice Counseling, we believe in the power of transformation. Our mission is to guide you
            through life’s challenges with compassion and expertise, helping you find comfort and clarity. Whether you
            are dealing with anxiety, depression, or relationship issues, we are here to support you every step of the
            way.
          </p>
        </Container>
      </Section>
      <Featured />
      <FeaturedSplit />
    </>
  );
}
