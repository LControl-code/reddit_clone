import { authModalState } from '@/src/atoms/authModalAtom';
import { Button, Flex, Text, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/src/firebase/clientApp';

type LoginProps = {

};

const Login: React.FC<LoginProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    useSignInWithEmailAndPassword(loginForm.email, loginForm.password);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm(prev => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))

  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        required
        name="email"
        type="email"
        placeholder='email'
        mb={2}
        onChange={onChange}
        fontSize="10pt"
        _placeholder={{ color: 'gray.500' }}
        _hover={{
          bg: 'white',
          border: '1px solid',
          borderColor: "blue.500",
        }}
        _focus={{
          outline: 'none',
          bg: 'white',
          border: '1px solid',
          borderColor: "blue.500"
        }}
        bg="gray.50"
      />
      <Input
        required
        name="password"
        placeholder="password"
        mb={2}
        type="password"
        onChange={onChange}
        fontSize="10pt"
        _placeholder={{ color: 'gray.500' }}
        _hover={{
          bg: 'white',
          border: '1px solid',
          borderColor: "blue.500",
        }}
        _focus={{
          outline: 'none',
          bg: 'white',
          border: '1px solid',
          borderColor: "blue.500"
        }}
        bg="gray.50"
      />
      <Button
        width="100%"
        height="36px"
        mt={2}
        mb={2}
        type="submit"
      >
        Log In</Button>
      <Flex justifyContent="center" fontSize="9pt">
        <Text mr={1}>New here?</Text>
        <Text
          color="blue.500"
          fontWeight="700"
          cursor="pointer"
          onClick={() => setAuthModalState(prev => ({
            ...prev,
            view: 'signup',
          }))}
        >
          SIGN UP</Text>
      </Flex>
    </form>
  )
}
export default Login;