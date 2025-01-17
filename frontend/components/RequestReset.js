import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import Form from './styles/Form';
import useForm from '../lib/useForm';
import DisplayError from './ErrorMessage';

const REQUEST_RESET_MUTATION = gql`
   mutation REQUEST_RESET_MUTATION($email: String!) {
      sendUserPasswordResetLink(email: $email) {
         code
         message
      }
   }
`;

export default function RequestReset() {
   const { inputs, handleChange, resetForm } = useForm({
      email: '',
   });
   const [resetPassword, { data, loading, error }] = useMutation(
      REQUEST_RESET_MUTATION,
      {
         variables: inputs,
      }
   );

   async function handleSubmit(e) {
      e.preventDefault();
      await resetPassword().catch(console.error);
      resetForm();
   }

   return (
      <Form method="POST" onSubmit={handleSubmit}>
         <h2>Request a Password Reset</h2>
         <DisplayError error={error} />
         <fieldset>
            {data?.sendUserPasswordResetLink === null && (
               <p>Success! Check you email for a link!</p>
            )}
            <label htmlFor="email">
               Email
               <input
                  type="email"
                  name="email"
                  placeholder="Your email adress"
                  autoComplete="email"
                  value={inputs.email}
                  onChange={handleChange}
               />
            </label>
            <button type="submit">Request reset!</button>
         </fieldset>
      </Form>
   );
}
