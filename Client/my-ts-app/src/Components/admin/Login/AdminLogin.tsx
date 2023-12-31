import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { adminLogin } from "../../../features/axios/api/admin/adminAuthentication";

interface FormValues {
  email: string;
  password: string;
}

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(5, "Password must be at least 5 characters long"),
});

export default function AdminLoginForm() {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const notify = (msg: string, type: string) => {
    type === "error"
      ? toast.error(msg, { position: toast.POSITION.BOTTOM_RIGHT })
      : toast.success(msg, { position: toast.POSITION.BOTTOM_RIGHT });
  };

  const handleSubmit = async (values: FormValues) => {
    await adminLogin(values)
      .then((data) => {
        localStorage.setItem("adminToken",data?.token);
        notify("Admin Login successful", "success");
        setTimeout(() => {
          navigate("/admin");
        }, 2000);
      })
      .catch((error: any) => {
        notify(error.message, "error");
      });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
        <img src="https://res.cloudinary.com/dpgbodkae/image/upload/v1695012129/found_it-logos_black_wgrai8.png" className="h-8 mr-3" alt="logo" />
                <span className="self-center text-xl font-serif sm:text-2xl whitespace-nowrap dark:text-white">
                  Found<span className="text-sky-600">it</span>
                </span>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Admin Login
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brown-600 sm:text-sm sm:leading-6"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm font-semibold text-brown-600 hover:text-brown-500">
                    {/* <a
                      href="#"
                      className="font-semibold text-brown-600 hover:text-brown-500"
                    >
                    </a> */}
                  
                  </div>
                </div>
                <div className="mt-2">
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brown-600 sm:text-sm sm:leading-6"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-brown-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-brown-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-600"
                >
                  Sign in
                </button>
              </div>
            </Form>
          </Formik>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}