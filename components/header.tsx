

import { checkUser } from '@/lib/check-user';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';


const Header = async () => {


  const user =await checkUser();

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