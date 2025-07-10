import ThemeBtn from "./ThemeBtn";

const Header = () => {
  return (
    <header className="w-full px-4 sm:px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0a0a0c] transition-colors duration-300">
      <div className="max-w-[700px] mx-auto flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-2xl sm:text-3xl font-mono font-semibold tracking-tight text-zinc-900 dark:text-white leading-none">
            SweatLog
          </h1>
          <div className="mt-1">
            <span className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-[2px] rounded-full tracking-wide">
              Track. Train. Transform.
            </span>
          </div>
        </div>
        <ThemeBtn />
      </div>
    </header>
  );
};

export default Header;
