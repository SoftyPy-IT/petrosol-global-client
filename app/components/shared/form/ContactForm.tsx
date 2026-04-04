"use client"
import TextArea from './form-inputs/TextArea'
import TextInput from './form-inputs/TextInput'
import AppForm from './AppFrom'
import Container from '../utils/Container';
import { FieldValues } from 'react-hook-form';
import SubmitButton from '../buttons/SubmitButton';

export default function ContactForm() {

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <Container className="px-2 2xl:px-0">
      <AppForm onSubmit={onSubmit}>
        <div className='space-y-4'>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="w-full">
              <TextInput name="name" label="Name" placeholder="Enter your name" required />
            </div>
            <div className="w-full">
              <TextInput name="email" label="Email" placeholder="Enter your email" required />
            </div>
          </div>
          <TextInput name="subject" label="Subject" placeholder="Enter your subject" required />
          <TextArea name="message" label="Message" placeholder="Enter your message" required />
          <SubmitButton title="Send Message" />
        </div>
      </AppForm>
    </Container>
  )
}
