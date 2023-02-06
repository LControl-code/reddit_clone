import { Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "@/src/firebase/clientApp";

const OAuthButtons: React.FC = () => {

  const [singInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button variant="oauth" mb={2} isLoading={loading} onClick={() => singInWithGoogle()}>
        <Image src="/images/googlelogo.png" height="20px" mr={4} />
        Continue with Google
      </Button>
      <Button variant="oauth">Some Other Provider</Button>
      {error && <Text color="red">{error}</Text>}
    </Flex >
  )
}
export default OAuthButtons;