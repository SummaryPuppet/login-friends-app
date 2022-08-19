import { Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../componets/Layout";
import { useLogin } from "../context/LoginProvider";

function Sigin() {
  const { signIn } = useLogin();
  const navigate = useNavigate();

  const styleInput = "px-2 py-1 rounded";

  return (
    <Layout style="flex flex-col justify-center items-center gap-2">
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          nickname: "",
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          signIn?.(values);

          setSubmitting(false);
          resetForm();

          navigate("/login");
        }}
      >
        {({ isSubmitting }) => (
          <>
            <Form className="md:px-6 md:py-4 flex flex-col gap-4 bg-slate-100 dark:bg-slate-700 rounded">
              <label className="text-3xl text-neutral-200 ">Sign in</label>

              <Field
                type="text"
                name="firstname"
                required
                placeholder="Juan"
                className={styleInput}
              />

              <Field
                type="text"
                name="lastname"
                required
                placeholder="Smith"
                className={styleInput}
              />

              <Field
                type="text"
                name="nickname"
                required
                placeholder="nickname"
                className={styleInput}
              />

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
                disabled={isSubmitting}
                className="py-2 text-neutral-200 bg-blue-700 rounded-md"
              >
                Sign in
              </button>
            </Form>

            <Link
              to="/login"
              className="px-6 py-2 text-neutral-200 bg-gray-700 rounded-md"
            >
              Log in
            </Link>
          </>
        )}
      </Formik>
    </Layout>
  );
}

export default Sigin;
