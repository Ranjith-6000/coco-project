import { Card } from "@material-tailwind/react";
import { CustomInput } from "../components/custom-components/custom-input";
import { Avatar } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
const EmailAndPasswordContainer = () => {
  return (
    <div className="">
      {/* Email Input */}
      <CustomInput labelName="Email" placeHolderName={"Enter your email"} />
      {/* Password Input */}
      <CustomInput
        labelName={"Password"}
        placeHolderName={"Enter your password"}
      />
      {/* Button - login */}
      <></>
    </div>
  );
};

export default function RenderLoginScreen() {
  return (
    <>
      {/* card */}
      {/* Email and Password */}
      <Card className="w-100 h-100 items-center ">
        <Avatar
          src="/src/components/custom-components/logo-image/r3FXToE5_400x400.jpg"
          alt="avatar"
          size="xxl"
          className="mb-5"
        />
        <EmailAndPasswordContainer />
        <Button variant="login" className="rounded-full mt-5">
          Login
        </Button>
        <div>
          To creat a new account{" "}
          <button className="hover:underline-offset-blue-100">signup</button>
        </div>
      </Card>
    </>
  );
}
