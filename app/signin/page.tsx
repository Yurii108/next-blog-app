import { GoogleButton } from "@/components/GoogleButton";
import { SignInForm } from "@/components/SingInForm";

export default async function Signin() {
  return (
    <div>
      <h1>Sign in</h1>
      <GoogleButton />
      <div>or</div>
      <SignInForm />
    </div>
  );
}
