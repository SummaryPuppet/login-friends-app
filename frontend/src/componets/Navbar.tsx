import AddFriendButton from "./AddFriendButton";

function Navbar() {
  return (
    <header className="w-full px-2 py-2 flex flex-col lg:flex-row justify-between bg-neutral-400 dark:bg-slate-800 gap-2">
      <h1 className="text-3xl text-center dark:text-neutral-200">Friends</h1>
      <AddFriendButton />
    </header>
  );
}

export default Navbar;
