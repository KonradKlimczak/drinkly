/* eslint-disable @typescript-eslint/no-explicit-any */
export const getUsernameError = (error: any, username: string): string | undefined => {
  const message: string | undefined = error?.message;
  if (message?.includes(`Username ${username} is already taken`)) {
    return 'Username is already taken';
  }
  return;
};

export const getEmailError = (error: any, email: string): string | undefined => {
  const message: string | undefined = error?.message;
  if (message?.includes(`User with email address ${email} already exists`)) {
    return 'This email already has account reqistered';
  }
  return;
};
