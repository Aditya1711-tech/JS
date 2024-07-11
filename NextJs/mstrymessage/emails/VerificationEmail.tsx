import { Head, Html, Preview } from "@react-email/components";

interface VerificationMailProps {
  username: string;
  otp: string;
}

export default function VerificationEmail({
  username,
  otp,
}: VerificationMailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Verifiation Code</title>
      </Head>
      <Preview>Here&apos;s your otp {otp} </Preview>
    </Html>
  );
}
