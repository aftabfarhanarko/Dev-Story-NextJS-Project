export default function AuthLayout({ children }) {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <div className="col-span-12 md:col-span-8">
        {children}
      </div>

      <div className="hidden md:flex md:col-span-4 bg-sky-100 items-center justify-center">
        <h2 className="text-3xl font-bold text-red-500">
          Welcome Auth Layout
        </h2>
      </div>
    </div>
  );
}
