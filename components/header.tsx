'use client'
import { useCheckUser } from '@/hooks/check-user';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';


const Header = () => {


useCheckUser();

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <h2>Expense Tracker</h2>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Header;