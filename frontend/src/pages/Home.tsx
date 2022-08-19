import { Link } from "react-router-dom";
import Layout from "../componets/Layout";

const styleButton = "px-4 py-3 bg-emerald-500 rounded-md";

function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center gap-5 bg-neutral-200 dark:bg-slate-900">
      <Layout style="flex flex-col justify-center items-center gap-5">
        <>
        <h1 className="text-3xl dark:text-neutral-200">Friends app</h1>
        <section className="flex gap-3">
          <Link to="/login" className={styleButton}>
            Login
          </Link>
          <Link to="/signin" className={styleButton}>
            Sign in
          </Link>
        </section>
        </>
      </Layout>
    </main>
  );
}

export default Home;
