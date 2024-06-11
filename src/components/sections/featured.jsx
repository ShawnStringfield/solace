import content from '../../assets/content.json';
import { Container } from '../container';
import { Section } from '../section';
import { Button } from '@/components/shadcn/ui/button';
import amazon from '@/assets/amazon.svg';
import { Link } from 'react-router-dom';

export const Featured = () => {
  return (
    <Section classes='bg-slate-50'>
      <Container>
        <Container classes='md:h-72 text-center md:w-3/4 bg-books bg-no-repeat bg-[length:75px_75px] md:bg-[length:100px_100px] bg-[center_bottom_0px] pb-32 md:bg-[center_bottom_-5px]'>
          <h2 className='mb-4'>Book Recommendations</h2>
          <p>
            Exploring the world of mental health through literature can be incredibly enlightening and supportive. Here
            are a few book recommendations that offer valuable insights, practical advice, and inspiration on your
            journey to mental wellness.
          </p>
        </Container>
        <div className='md:grid grid-cols-3 gap-16'>
          {content.featured.map((item, index) => (
            <div key={index} className='p-4 mt-8'>
              <h4 className='mb-4'>{item.title}</h4>
              <p className=''>{item.description}</p>
              <Link target='_blank' to={item.link}>
                <Button variant='link' className='text-blue-400 text-xl p-0 mt-4'>
                  <span>
                    <img className='w-4 mr-2' src={amazon} />
                  </span>
                  Buy on Amazon{' '}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
