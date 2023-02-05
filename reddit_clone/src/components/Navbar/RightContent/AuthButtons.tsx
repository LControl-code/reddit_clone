import { authModalState } from '@/src/atoms/authModalAtom';
import { Button } from '@chakra-ui/react';
import React from 'react';
import { useSetRecoilState } from 'recoil';

const AuthButtons = () => {
  const setAuthModalState = useSetRecoilState(authModalState);

  return (
    <>
      <Button
        variant="outline" // Outline style for the button
        height="28px" // Button height
        display={{ base: "none", sm: "flex" }} // Display property based on screen size
        width={{ base: "70px", md: "110px" }} // Button width based on screen size
        onClick={() => setAuthModalState({ open: true, view: 'login' })} // Set modal state to open and show login view when button is clicked
      >
        Log In
      </Button>
      <Button
        height="28px" // Button height
        display={{ base: "none", sm: "flex" }} // Display property based on screen size
        width={{ base: "70px", md: "110px" }} // Button width based on screen size
        onClick={() => setAuthModalState({ open: true, view: 'signup' })} // Set modal state to open and show signup view when button is clicked
      >
        Sign Up
      </Button>
    </>
  );
};

export default AuthButtons;