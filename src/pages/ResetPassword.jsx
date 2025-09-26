import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router";
import { ArrowLeft, Eye, EyeOff, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/providers/AuthProvider";

const ResetPassword = () => {
  const { token } = useParams();
  console.log(token);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { resetPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirm) {
      toast.error("Passwords do not match.");
      return;
    }
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      return;
    }

    setIsLoading(true);
    const token = localStorage.getItem("resetToken");
    if (!token) {
      toast.error("Token not found. Please verify OTP again.");
      setIsLoading(false);
      return;
    }

    try {
      await resetPassword({ token, password, password_confirmation: confirm });
      toast.success("Password has been successfully updated!");
      localStorage.removeItem("resetToken");
      navigate("/auth/login");
    } catch (err) {
      console.error(err);
      toast.error(
        err.response?.data?.message ||
          "Failed to reset password. The link may have expired."
      );
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col items-center justify-center mt-20 sm:mt-24">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Set a New Password
            </h1>
            <p className="mt-3 text-gray-600">
              Create a new, strong password for your account.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mt-1 relative">
              <input
                id="password"
                name="password"
                type={passwordVisible ? "text" : "password"}
                required
                className="peer block w-full px-4 pt-5 pb-2 border border-gray-300 rounded-md shadow-sm placeholder-transparent focus:outline-none focus:ring-[#39A432] focus:border-[#39A432] sm:text-sm"
                placeholder="Enter your new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#39A432] peer-[&:not(:placeholder-shown)]:top-1 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-gray-600 "
              >
                New Password
              </label>
            </div>

            <div className="mt-1 relative">
              <input
                id="confirm-password"
                name="confirm-password"
                type={confirmVisible ? "text" : "password"}
                required
                className="peer block w-full px-4 pt-5 pb-2 border border-gray-300 rounded-md shadow-sm placeholder-transparent focus:outline-none focus:ring-[#39A432] focus:border-[#39A432] sm:text-sm"
                placeholder="Confirm your new password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setConfirmVisible(!confirmVisible)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
              >
                {confirmVisible ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
              <label
                htmlFor="confirm-password"
                className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#39A432] peer-[&:not(:placeholder-shown)]:top-1 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-gray-600 "
              >
                Confirm New Password
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-[#298622] hover:bg-green-700 shadow-[0_6px_14px_rgba(59,163,52,0.4)] hover:shadow-[0_6px_20px_rgba(59,170,10,0.5)] hover:-translate-y-1 transition-all duration-300 text-center"
              >
                {isLoading ? (
                  <Loader2 className="animate-spin h-5 w-5 mr-2"></Loader2>
                ) : (
                  "Reset Password"
                )}
              </button>
            </div>
          </form>
          <div className="text-center">
            <Link
              to="/auth/login"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#298b22] hover:text-green-700"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
