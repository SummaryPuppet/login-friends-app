import axios from "axios";
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikHelpers,
  FormikValues,
} from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../componets/Layout";

type Values = {
  friendName: string;
};

function AddFriendPage() {
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (
    { friendName }: FormikValues,
    actions: FormikHelpers<Values>
  ) => {
    const token = localStorage.getItem("contactsAppToken");

    const { data } = await axios.post(
      "http://localhost:5000/api/usr/add-friend",
      { nickname: friendName },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    if (!data.success) return setErrorMsg(data.error);

    setErrorMsg("");

    actions.resetForm();
    navigate("/friends");
  };

  return (
    <Layout style="flex flex-col justify-center items-center">
      <Formik initialValues={{ friendName: "" }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="md:px-6 md:py-9 flex flex-col justify-center items-center gap-3 bg-slate-100 dark:bg-slate-700 rounded">
            <label className="text-3xl dark:text-neutral-200">
              Friend Nickname
            </label>

            <Field name="friendName" required className="px-1 py-2 rounded" />

            <ErrorMessage name="friendName">
              {(msg) => <div>{msg}</div>}
            </ErrorMessage>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-3 py-3 bg-emerald-500 rounded-md"
            >
              Add Friend
            </button>

            {errorMsg ? (
              <span className="w-full mt-3 px-4 py-2 text-center bg-red-500 rounded">
                {errorMsg}
              </span>
            ) : (
              <div></div>
            )}

            <button type="button" onClick={() => navigate(-1)} className="">
              go back
            </button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
}

export default AddFriendPage;
