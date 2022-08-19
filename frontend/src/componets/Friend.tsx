interface Props {
  nickname: string;
  firstname: string;
  lastname: string;
}

function Friend({ nickname, firstname, lastname }: Props) {
  return (
    <article className="px-2 py-2 bg-neutral-500 dark:bg-slate-600">
      <h1 className="text-xl md:text-2xl xl:text-3xl dark:text-neutral-200">{nickname}</h1>
      <p className="text-sm md:text-md xl:text-lg dark:text-neutral-400">
        {firstname} {lastname}
      </p>
    </article>
  );
}

export default Friend;
