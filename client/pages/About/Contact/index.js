import React from 'react';
import Section from '@/components/Section';
import ContactItem from '@/components/ContactItem';

const Contact = () => (
  <Section title="CONTACT">
    <ContactItem name="home" subtitle="Taiwan, Taipei" />
    <ContactItem name="email" subtitle="jack5241027@gmail.com" />
    <ContactItem name="github" subtitle="jack5241027" />
  </Section>
);

export default Contact;
