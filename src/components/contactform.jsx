import { Button } from '@/components/shadcn/ui/button';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export const ContactForm = () => {
  const [data, setData] = useState({});
  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
  } = useForm();

  const onSubmit = (data) => setData(data);

  return (
    <>
      <section className='container mx-auto py-16 mb-16 border-b-[1px]'>
        <form className='mx-auto' onSubmit={handleSubmit(onSubmit)}>
          <div className='md:grid grid-cols-2 gap-6'>
            <div>
              <label htmlFor='name'>Name</label>
              <input
                {...register('name', { required: true })}
                type='text'
                id='name'
                name='name'
                className='border border-slate-300 w-full rounded-sm my-4 p-2 text-primary mb-8'
              />
              {errors.name && <span className=''>This field is required</span>}
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input
                {...register('email', { required: true })}
                type='email'
                id='email'
                name='email'
                className='border border-slate-300 w-full rounded-sm my-4 p-2 text-primary mb-8'
              />
              {errors.email && <span className=''>This field is required</span>}
            </div>

            <div>
              <label htmlFor='message'>Message</label>
              <textarea
                {...register('message', { required: true })}
                id='message'
                name='message'
                className='border border-slate-300 w-full rounded-sm my-4 p-4 text-primary min-h-48'
              ></textarea>
              {errors.message && <span className=''>This field is required</span>}
            </div>

            <div>
              <label htmlFor='phone'>Phone</label>
              <input
                {...register('phone', { required: true })}
                type='tel'
                id='phone'
                name='phone'
                className='border border-slate-300 w-full rounded-sm my-4 p-2 text-primary mb-8'
              />
              {errors.phone && <span className=''>This field is required</span>}
            </div>
          </div>
          <div className='pb-8'>
            <Button type='submit' className='bg-blue-400 sm:text-lg text-white py-6 mt-4 hover:bg-primary-foreground'>
              Submit
            </Button>
          </div>
        </form>

        {isSubmitSuccessful && (
          <div className='container mx-auto text-center mt-8 pt-16'>
            <p>
              Thank you <span className='font-bold'>{`${data.name}`} </span> we will get back to you shortly.
            </p>
          </div>
        )}
      </section>
    </>
  );
};
