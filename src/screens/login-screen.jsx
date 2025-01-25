import { Card, Typography, Avatar, Button } from "@material-tailwind/react";
import { CustomInput } from "../components/custom-components/custom-input";

const EmailAndPasswordContainer = () => (
  <div className="space-y-4">
    <CustomInput labelName="Email" placeHolderName="Enter your email" />
    <CustomInput labelName="Password" placeHolderName="Enter your password" />
  </div>
);

const RenderLoginScreen = () => {
  const handleLogin = () => {
    console.log("Login button clicked");
    // Add your login logic here
  };

  const handleSignUp = () => {
    console.log("Redirect to signup");
    // Add your signup navigation logic here
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <Card className="w-full max-w-md p-6">
        <div className="flex justify-center mb-6">
          <Avatar
            src="/src/components/custom-components/logo-image/r3FXToE5_400x400.jpg"
            alt="avatar"
            size="xxl"
            className="p-2"
          />
        </div>
        <EmailAndPasswordContainer />
        <Button
          className="w-full rounded-full mt-6 hover:cursor-pointer"
          onClick={handleLogin}
        >
          Login
        </Button>
        <Typography
          variant="small"
          className="mt-6 flex justify-center items-center text-gray-600"
        >
          Don&apos;t have an account?
          <Typography
            as="a"
            href="#signup"
            variant="small"
            color="blue-gray"
            className="ml-1 font-bold hover:underline"
            onClick={handleSignUp}
          >
            Sign up
          </Typography>
        </Typography>
      </Card>
    </div>
  );
};

export default RenderLoginScreen;
