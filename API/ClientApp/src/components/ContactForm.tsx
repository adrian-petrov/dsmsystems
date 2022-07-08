import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import { ButtonBase } from './ButtonBase';
import styled from 'styled-components';

interface IFormData {
  company: string; // honeypot
  name: string;
  email: string;
  phone: string;
  message: string;
}

const StyledForm = styled(Form)`
  span {
    color: red;
  }
`;

const StyledSuccessMessage = styled.div`
  padding: 2rem;
  background-color: var(--lightGreen);
  display: flex;
  flex-direction: column;

  & h2 {
    font-weight: 700;
    text-align: left;
  }
`;

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    errors,
    formState,
    reset,
  } = useForm<IFormData>({
    mode: 'onBlur',
  });
  const { isSubmitSuccessful } = formState;
  const [submittedData, setSubmittedData] = React.useState<IFormData | null>(
    null
  );
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);
  const { REACT_APP_API_URL } = process.env;

  const handleFormSubmit = React.useCallback(async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch(REACT_APP_API_URL + 'email/send', {
        method: 'post',
        body: JSON.stringify(submittedData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status >= 200 && response.status <= 299) {
        reset();
        setIsSubmitting(false);
        setShowSuccessMessage(true);
      } else {
        console.log(`An error has occured: ${response}`);
      }
    } catch (err) {}
  }, [submittedData, reset, REACT_APP_API_URL]);

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      (async () => await handleFormSubmit())();
    }
  }, [isSubmitSuccessful, handleFormSubmit]);

  // on submit we only store the data in the state
  const onSubmit: SubmitHandler<IFormData> = (data) => {
    setSubmittedData(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {/* Honeypot */}
      <label className="its-a-trap" htmlFor="company"></label>
      <input
        ref={register}
        className="its-a-trap"
        autoComplete="off"
        type="text"
        id="company"
        name="company"
        tabIndex={-1}
      />
      <Form.Group>
        <Form.Label>
          Name<span>*</span>
        </Form.Label>
        <Form.Control
          size="lg"
          ref={register({ required: 'This field is required' })}
          name="name"
          placeholder="John Doe"
          isInvalid={!!errors.name}
        />
        <Form.Control.Feedback type="invalid">
          {errors.name && errors.name.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>
          Email Address<span>*</span>
        </Form.Label>
        <Form.Control
          size="lg"
          ref={register({
            required: 'This field is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Please enter a valid email address',
            },
          })}
          name="email"
          type="email"
          placeholder="contact@company.com"
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email && errors.email.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>Phone</Form.Label>
        <Form.Control
          size="lg"
          ref={register}
          name="phone"
          placeholder="Number"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>
          Message<span>*</span>
        </Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          size="lg"
          ref={register({ required: 'This field is required' })}
          name="message"
          placeholder="Your text here"
          isInvalid={!!errors.message}
        />
        <Form.Control.Feedback type="invalid">
          {errors.message && errors.message.message}
        </Form.Control.Feedback>
      </Form.Group>
      <ButtonBase isSubmitting={isSubmitting} className="mt-4" type="submit">
        Send
      </ButtonBase>
      {showSuccessMessage && (
        <StyledSuccessMessage className="mt-5">
          <h2>Thank you for contacting us!</h2>
          <p>
            Your message has been successfully sent. A member of our staff will
            get back to your very soon.
          </p>
          <p>For urgent enquiries, please call us on: 01225 808 550.</p>
        </StyledSuccessMessage>
      )}
    </StyledForm>
  );
};
