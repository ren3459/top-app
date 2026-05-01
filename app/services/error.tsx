"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      <div>что то пошло не так</div>
      <div>{JSON.stringify(error.message)}</div>
      <button onClick={() => reset}>resets</button>
    </>
  );
}
