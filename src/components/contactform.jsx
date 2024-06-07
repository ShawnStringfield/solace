import { Button } from '@/components/shadcn/ui/button';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/shadcn/ui/select';

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
      <section className='container mx-auto text-center md:mb-32 mb-16'>
        <h1 className='mb-8 text-4xl sm:text-6xl'>Become a Member of Harmonia Connect</h1>
        <p>
          If you are committed to making a positive difference and wish to join our mission, we invite you to apply for
          membership. Please fill out the contact form below, and our team will review your application. We look forward
          to potentially welcoming you into our community of change-makers.
        </p>
      </section>

      <section className='container mx-auto text-center my-16 border-t-[1px] pt-16'>
        <h2 className='mb-4'>Application Form</h2>
        <p className='md:w-3/4 container'>
          Please fill out the form below to apply for membership. Our team will review your application and get back to
          you as soon as possible. Please note that all fields are required unless stated otherwise.
        </p>
      </section>
      <section className='container mx-auto py-16 mb-16'>
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
            <div>
              <label htmlFor='role'>Current Role/Occupation</label>
              <input
                {...register('role', { required: true })}
                type='text'
                id='role'
                name='role'
                className='border border-slate-300 w-full rounded-sm my-4 p-2 text-primary mb-8'
              />
              {errors.role && <span className=''>This field is required</span>}
            </div>

            <div>
              <label htmlFor='message'>Why You Want to Join</label>
              <textarea
                {...register('message', { required: true })}
                id='message'
                name='message'
                className='border border-slate-300 w-full rounded-sm my-4 p-4 text-primary min-h-48'
              ></textarea>
              {errors.message && <span className=''>This field is required</span>}
            </div>
            <div>
              <label htmlFor='message'>Area of Interest</label>
              <Select>
                <SelectTrigger className='my-4 rounded-sm border border-slate-300 mb-8'>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent {...register('interest')}>
                  <SelectItem value='harmonia_academy'>Harmonia Academy</SelectItem>
                  <SelectItem value='harmonia_labs'>Harmonia Labs</SelectItem>
                  <SelectItem value='harmonia_grants'>Harmonia Grants</SelectItem>
                  <SelectItem value='harmonia_connect'>Harmonia Connect</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className='pb-8'>
            <Button type='submit' className='mt-8 w-full md:w-auto text-2xl md:text-xl p-8'>
              Submit
            </Button>
          </div>
        </form>

        {isSubmitSuccessful && (
          <div className='container mx-auto text-center mt-8 border-t-[1px] border-secondary pt-16'>
            <p>
              Thank you <span className='font-bold'>{`${data.name}`} </span>for submitting your application to join
              Harmonia Connect! We are thrilled that you share our passion for leveraging technology to foster community
              well-being and environmental stewardship.
            </p>
          </div>
        )}
      </section>
    </>
  );
};
