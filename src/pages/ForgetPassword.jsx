import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/providers/AuthProvider";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const { forgotPassword } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      await forgotPassword(email);
      localStorage.setItem("unverifiedEmail", email);
      localStorage.setItem("otpPurpose", "forget");
      toast.success("a reset link has been sent.");
      navigate("/auth/verify-otp");
    } catch {
      toast.error("Something went wrong");
    }
    finally{
      setLoading(false)
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col items-center justify-center mt-20 sm:mt-24">
        <div className="w-full max-w-md">
          <Link
            to="/auth/login"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#238d1c] hover:text-green-700 mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Link>

          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Forgot your password?
            </h1>
            <p className="mt-3 text-gray-500 max-w-md">
              Please enter the email address associated with your account, and
              we'll email you a link to reset your password.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div className="relative">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="peer block w-full px-4 pt-5 pb-2 border border-gray-300 rounded-md shadow-sm placeholder-transparent focus:outline-none focus:ring-[#39A432] focus:border-[#39A432] sm:text-sm"
                  placeholder="Email address"
                />
                <label
                htmlFor="email"
                className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#39A432] "
              >
                Email Address
              </label>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-[#298622] hover:bg-green-700 shadow-[0_6px_14px_rgba(59,163,52,0.4)] hover:shadow-[0_6px_20px_rgba(59,170,10,0.5)] hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  {loading && <Loader2 className="animate-spin h-5 w-5 mr-2" />}
                  {loading ? "Sending..." : "Send a reset link"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
