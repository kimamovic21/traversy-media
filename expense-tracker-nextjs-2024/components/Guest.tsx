import { SignInButton } from '@clerk/nextjs';

const Guest = () => {
  return (
    <div className='guest'>
      <h2>Welcome</h2>
      <p>Please sign in to manage your transactions</p>
      <SignInButton />
    </div>
  );
};

export default Guest;