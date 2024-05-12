"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function ErrorBoundry({ error, reset }: ErrorProps) {
  return (
    <>
      <h1>{error.message}</h1>;<button onClick={reset}>Retry</button>
    </>
  );
}
