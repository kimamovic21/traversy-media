import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/current-user';
import RegisterForm from './register-form';

const RegisterPage = async () => {
  const user = await getCurrentUser();

  if (user) {
    redirect('/tickets');
  };
  
  return <RegisterForm />;
};

export default RegisterPage;