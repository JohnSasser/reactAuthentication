import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';

const LoginButton = () => {
  const {
    loginWithRedirect,
    loginWithPopup,
    logout,
    user,
    isAuthenticated,
    isLoading,
  } = useAuth0();
  //   console.log(`loginWithRedirect: ${loginWithRedirect}`);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}
    >
      <Button
        style={{ margin: '.25em' }}
        variant="outline-secondary"
        onClick={() => loginWithRedirect()}
      >
        Login with Redirect
      </Button>
      <br />
      <Button
        style={{ margin: '.25em' }}
        variant="outline-secondary"
        onClick={() => loginWithPopup()}
      >
        Login with Popup
      </Button>
      <br />{' '}
      <Button
        style={{ margin: '.25em' }}
        variant="outline-secondary"
        onClick={() => logout()}
      >
        Logout
      </Button>
      <br />{' '}
      <Button
        style={{ margin: '.25em' }}
        variant="outline-secondary"
        onClick={() => user()}
      >
        User
      </Button>
      <br />{' '}
      <Button
        style={{ margin: '.25em' }}
        variant="outline-secondary"
        onClick={() => isAuthenticated()}
      >
        isAuthenticated
      </Button>
      <br />
    </div>
  );
};

export default LoginButton;
