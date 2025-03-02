export default function ScreenLoader() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-10">
      <img src="/loading.svg" alt="" className="animate-spin transition-all" />
    </div>
  );
}
