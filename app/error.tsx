"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <>
      <div>что то пошло не так</div>
      <div>{JSON.stringify(error.message)}</div>
    </>
  );
}
