const Footer = () => {
  return (
    <footer className="w-full px-4 py-4 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0a0a0c]">
      <div className="max-w-[700px] mx-auto text-center text-sm text-zinc-600 dark:text-zinc-400 font-medium tracking-tight">
        <span className="inline-block">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-zinc-800 dark:text-white">
            SweatLog
          </span>
          <span className="mx-1 text-zinc-400 dark:text-zinc-500">·</span>
          Built with discipline.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
