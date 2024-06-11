import content from '../../assets/content.json';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/shadcn/ui/accordion';

export const FAQ = () => {
  return (
    <section className='container mx-auto my-20'>
      <div className='text-center mb-10'>
        <h2 className='mb-4 text-4xl font-bold'>Frequently Asked Questions</h2>
        <p className='text-lg text-gray-600'>
          {' '}
          Whether you’re new to therapy or seeking specific information, these FAQs are designed to provide clarity and
          support. If you have any additional questions, please feel free to contact me directly.
        </p>
      </div>

      <Accordion type='single' collapsible className='w-full'>
        {content.faq.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className='text-lg font-bold'>{item.question}</AccordionTrigger>
            <AccordionContent className='text-base'>
              <div>
                <p className='mb-4'>{item.answer}</p>
              </div>
              <ul className='list-decimal pl-5'>
                {item.subanswers && item.subanswers.map((subanswer, subindex) => <li key={subindex}>{subanswer}</li>)}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
