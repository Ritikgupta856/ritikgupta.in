export const Separator = () => {
  return (
    <div className="relative flex h-8 w-full border-x border-zinc-200 dark:border-zinc-800 
      before:absolute before:-left-[100vw] before:-z-10 before:h-8 before:w-[200vw] 
      before:bg-[repeating-linear-gradient(315deg,rgba(0,0,0,0.05)_0,rgba(0,0,0,0.05)_1px,transparent_0,transparent_50%)] 
      dark:before:bg-[repeating-linear-gradient(315deg,rgba(255,255,255,0.05)_0,rgba(255,255,255,0.05)_1px,transparent_0,transparent_50%)]
      before:bg-[length:8px_8px] border-t-0 border-b-0 before:border before:border-zinc-200 before:dark:border-zinc-800">
    </div>
  );
};