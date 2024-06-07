import { Header } from '../components/header';
import { Featured } from '../components/sections/featured';
import { FeaturedSplit } from '../components/sections/featured_split';

export default function Home() {
  return (
    <>
      <Header
        heading='Heading'
        text='Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
      />
      <Featured />
      <FeaturedSplit />
    </>
  );
}
