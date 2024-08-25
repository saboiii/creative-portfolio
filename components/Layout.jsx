export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <div>
        {children}
      </div>
    </div>
  );
}
