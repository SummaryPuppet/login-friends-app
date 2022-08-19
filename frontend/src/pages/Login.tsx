import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../componets/Layout";
import { useLogin } from "../context/LoginProvider";

function Login() {
  const { logIn } = useLogin();
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");

  const styleInput = "px-1 py-2 rounded";

  return (
    <Layout style="flex flex-col justify-center items-center gap-2">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async ({ email, password }, { setSubmitting, resetForm }) => {
          const msg = await logIn?.(email, password);

          if (msg) {
            setErrorMsg(msg!.error!);
            setSubmitting(false);
            resetForm();
            return;
          }

          setSubmitting(false);
          setErrorMsg("")
          resetForm();
          navigate("/friends");
        }}
      >
        {({ isSubmitting }) => (
          <>
            <Form className="md:px-6 md:py-4 flex flex-col gap-4 bg-slate-100 dark:bg-slate-700 rounded">
              <label className="text-3xl dark:text-neutral-200">Login</label>

              <Field
                type="email"
                name="email"
                required
                placeholder="example@example.com"
                className={styleInput}
              />

              <Field
                type="password"
                name="password"
                required
                placeholder="1234567"
                className={styleInput}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="py-2 text-neutral-200 bg-blue-700 rounded-md"
              >
                Login
              </button>

              {errorMsg ? (
                <span className="w-full mt-3 px-4 py-2 text-center bg-red-500 rounded">
                  {errorMsg}
                </span>
              ) : (
                <div></div>
              )}

              <span className="text-center dark:text-neutral-200">or</span>

              {/*<button type="button" className="py-1 text-neutral-200 bg-black rounded">Github</button>
              <button type="button" className="py-1 bg-white rounded" >Google</button>
              <button type="button" className="py-1 text-neutral bg-blue-600 rounded" >Facebook</button>
                */}
            </Form>
            <Link
              to="/sigin"
              className="px-6 py-2 text-neutral-200 bg-gray-700 dark:bg-gray-800 rounded-md"
            >
              Signin
            </Link>
          </>
        )}
      </Formik>
    </Layout>
  );
}

export default Login;
