/* eslint-disable-next-line */
export interface TestProps {}

export function Test(props: TestProps) {
  return (
    <div>
      <h1>Welcome to Test!</h1>
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block">Ready to dive in?</span>
        <span className="block text-indigo-600">
          Start your free trial today.
        </span>
      </h2>
    </div>
  );
}

export default Test;
