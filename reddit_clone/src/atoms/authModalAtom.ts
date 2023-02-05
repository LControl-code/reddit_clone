import { atom } from "recoil";

interface AuthModalState {
  open: boolean; // Indicates whether the modal is open or not
  view: 'login' | 'signup' | 'resetPassword'; // Indicates the view to display in the modal
}

const defaultModalState: AuthModalState = {
  open: false, // By default, the modal is not open
  view: 'login', // By default, the view displayed is the login view
};

export const authModalState = atom<AuthModalState>({
  key: 'authModalState', // Unique key for this atom
  default: defaultModalState, // Default value for this atom
});