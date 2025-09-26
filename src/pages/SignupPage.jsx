import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import api from "@/hooks/axios";
import { toast } from "sonner";

const SignupPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const { register } = api();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (form.password !== form.password_confirmation) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    const payload = {
      ...form,
      terms: document.getElementById("terms").checked ? "true" : "false",
    };

    try {
      await register(payload);
      toast.success("Registration successful");
      localStorage.setItem("unverifiedEmail", form.email);
      localStorage.setItem("otpPurpose", "signup");
      navigate("/auth/verify-otp");
    } catch (err) {
      console.error(err.response?.data || err.message);
      toast.error("Register failed");
      setError(err.response?.data?.message || err.message || "Register failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col items-center justify-center mt-12 sm:mt-16">
        <div className="w-full max-w-lg space-y-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Create your Account
            </h1>
            <p className="mt-3 text-gray-600">When sports Meets smart Tech.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full relative">
                <input
                  id="first-name"
                  name="first_name"
                  type="text"
                  required
                  value={form.first_name}
                  onChange={(e) =>
                    setForm({ ...form, first_name: e.target.value })
                  }
                  className="peer block w-full px-4 pt-5 pb-2 border border-gray-300 rounded-md shadow-sm placeholder-transparent focus:outline-none focus:ring-[#39A432] focus:border-[#39A432] sm:text-sm"
                />
                <label
                  htmlFor="first-name"
                  className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#39A432] "
                >
                  First Name
                </label>
              </div>
              <div className="w-full relative">
                <input
                  id="last-name"
                  name="last_name"
                  type="text"
                  required
                  value={form.last_name}
                  onChange={(e) =>
                    setForm({ ...form, last_name: e.target.value })
                  }
                  className="peer block w-full px-4 pt-5 pb-2 border border-gray-300 rounded-md shadow-sm placeholder-transparent focus:outline-none focus:ring-[#39A432] focus:border-[#39A432] sm:text-sm"
                />

                <label
                  htmlFor="last-name"
                  className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#39A432] "
                >
                  Last Name
                </label>
              </div>
            </div>

            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="peer block w-full px-4 pt-5 pb-2 border border-gray-300 rounded-md shadow-sm placeholder-transparent focus:outline-none focus:ring-[#39A432] focus:border-[#39A432] sm:text-sm"
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#39A432] "
              >
                Email Address
              </label>
            </div>

            <div className="mt-1 relative">
              <input
                id="password"
                name="password"
                type={passwordVisible ? "text" : "password"}
                required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="peer block w-full px-4 pt-5 pb-2 border border-gray-300 rounded-md shadow-sm placeholder-transparent focus:outline-none focus:ring-[#39A432] focus:border-[#39A432] sm:text-sm"
              />
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
              >
                {passwordVisible ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
              <label
                htmlFor="password"
                className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#39A432] "
              >
                Password
              </label>
            </div>

            <div className="mt-1 relative">
              <input
                id="confirm-password"
                name="password_confirmation"
                type={confirmPasswordVisible ? "text" : "password"}
                required
                value={form.password_confirmation}
                onChange={(e) =>
                  setForm({ ...form, password_confirmation: e.target.value })
                }
                className="peer block w-full px-4 pt-5 pb-2 border border-gray-300 rounded-md shadow-sm placeholder-transparent focus:outline-none focus:ring-[#39A432] focus:border-[#39A432] sm:text-sm"
              />
              <button
                type="button"
                onClick={() =>
                  setConfirmPasswordVisible(!confirmPasswordVisible)
                }
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
              >
                {confirmPasswordVisible ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>

              <label
                htmlFor="confirm-password"
                className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#39A432] "
              >
                Confirm Password
              </label>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 text-[#39A432] focus:ring-[#39A432] border-gray-300 rounded"
                  defaultChecked
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="text-gray-700">
                  I agree to Tech Takes{" "}
                  <a
                    href="#"
                    className="font-medium text-[#39A432] hover:underline"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="font-medium text-[#39A432] hover:underline"
                  >
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-[#298622] hover:bg-green-700 shadow-[0_6px_14px_rgba(59,163,52,0.4)] hover:shadow-[0_6px_20px_rgba(59,170,10,0.5)] hover:-translate-y-1 transition-all duration-300 text-center"
              >
                {loading && (
                  <Loader2 className="animate-spin h-5 w-5 mr-2"></Loader2>
                )}
                {loading ? "Please Wait.." : "Create Account"}
              </button>
            </div>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">OR</span>
            </div>
          </div>

          <div>
            <button
              type="button"
              className="w-full inline-flex justify-center items-center py-3 px-4 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <svg
                aria-label="Google logo"
                width="24"
                height="24"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              <span className="pl-2">Continue with Google</span>
            </button>
          </div>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="font-medium text-[#39A432] hover:text-green-700"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
