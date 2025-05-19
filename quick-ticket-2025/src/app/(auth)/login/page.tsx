import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/current-user';
import LoginForm from './login-form'; 

const LoginPage = async () => {
  const user = await getCurrentUser();

  if (user) {
    redirect('/tickets');
  };

  return <LoginForm />;
};

export default LoginPage;