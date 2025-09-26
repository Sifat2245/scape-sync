import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/providers/AuthProvider";

const VerifyOTP = () => {
  // State to store each digit of the OTP
  const [otp, setOtp] = useState(new Array(6).fill(""));
  //loading state
  const [loading, setLoading] = useState(false)

  // Ref array to handle focus on OTP inputs
  const otpInputRefs = useRef([]);

  const navigate = useNavigate();
  const { forgotVerifyOTP, verifyOTP } = useAuth();

  // Function to generate a random 32-byte hex token (used for password reset)
  const generateToken = () => {
    const array = new Uint8Array(32);
    window.crypto.getRandomValues(array);
    return Array.from(array, (b) => b.toString(16).padStart(2, "0")).join("");
  };

  // Retrieve stored email and purpose of OTP from localStorage
  const storedEmail =
    localStorage.getItem("unverifiedEmail") ||
    localStorage.getItem("forgotEmail");
  const otpPurpose = localStorage.getItem("otpPurpose");
  const email = storedEmail || "";
  console.log(email);

  // Handle input change for each OTP digit
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return; // only numbers allowed
    setOtp(otp.map((d, idx) => (idx === index ? element.value : d)));

    // Auto-focus next input if current input is filled
    if (element.value !== "" && index < 5)
      otpInputRefs.current[index + 1].focus();
  };

  // Handle backspace key to move focus to previous input
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      otpInputRefs.current[index - 1].focus();
    }
  };

  // Handle paste event to fill OTP inputs automatically
  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, 6);
    const newOtp = new Array(6).fill("");
    pasteData.split("").forEach((char, i) => {
      if (i < 6 && !isNaN(char)) newOtp[i] = char;
    });
    setOtp(newOtp);

    // Focus on the first empty input after pasting
    const lastFilledIndex = newOtp.findIndex((char) => char === "");
    otpInputRefs.current[lastFilledIndex === -1 ? 5 : lastFilledIndex].focus();
  };

  // Verify OTP when form is submitted
  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true)
    const fullOtp = otp.join("");

    // Validate OTP length
    if (fullOtp.length !== 6) {
      toast.error("Please enter a complete 6-digit OTP.");
      setLoading(false)
      return;
    }

    try {
      if (otpPurpose === "signup") {
        // OTP verification for signup
        await verifyOTP({ email, otp: fullOtp });
        toast.success("OTP verified successfully!");
        navigate("/auth/login");
      } else if (otpPurpose === "forget") {
        // OTP verification for forgot password
        await forgotVerifyOTP({ email, otp: fullOtp });
        toast.success("OTP verified successfully!");

        // Generate a random token for password reset (since API does not return one)
        const resetToken = generateToken();
        console.log(resetToken);

        // Store token in localStorage and navigate to reset password page
        localStorage.setItem("resetToken", resetToken);
        navigate(`/auth/reset-password/${resetToken}`);
      }

      // Clean up localStorage after successful verification
      localStorage.removeItem("unverifiedEmail");
      localStorage.removeItem("forgotEmail");
      localStorage.removeItem("otpPurpose");
    } catch (err) {
      console.error(err.response?.data || err.message);
      toast.error(err.response?.data?.message || "OTP verification failed");
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
            to="/auth/register"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#39A432] hover:text-green-700 mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Link>

          <div className="space-y-6 text-center">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Please check your email!
              </h1>
              <p className="mt-3 text-gray-600 max-w-sm mx-auto">
                We've emailed a 6-digit confirmation code to{" "}
                <span className="font-semibold">acb@domain</span>, please enter
                the code in below box to verify your email.
              </p>
            </div>

            <form onSubmit={handleVerify} className="space-y-6">
              <div className="flex justify-center gap-2 sm:gap-3">
                {otp.map((data, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onPaste={handlePaste}
                    ref={(el) => (otpInputRefs.current[index] = el)}
                    className="w-10 h-14 sm:w-14 sm:h-14 text-center text-xl font-bold border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#39A432] focus:border-transparent transition"
                  />
                ))}
              </div>

              <div>
                 <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-[#298622] hover:bg-green-700 shadow-[0_6px_14px_rgba(59,163,52,0.4)] hover:shadow-[0_6px_20px_rgba(59,170,10,0.5)] hover:-translate-y-1 transition-all duration-300 text-center"
            >
              {loading && <Loader2 className="animate-spin h-5 w-5 mr-2" />}
              {loading ? "Please Wait..." : "Verify"}
            </button>
              </div>
            </form>

            <p className="text-center text-sm text-gray-600">
              Don't have a code?{" "}
              <button
                type="button"
                onClick={() => alert("Resending code...")}
                className="font-medium text-[#39A432] hover:underline focus:outline-none"
              >
                Resend code
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
