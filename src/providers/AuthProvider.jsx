import React, { createContext, useState, useContext, useEffect } from "react";
import api from "@/hooks/axios";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext); //eslint-disable-line

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const res = await api.get("/user-detail", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(res.data);
        } catch {
          localStorage.removeItem("token");
        }
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  // Convert object to FormData
  const toFormData = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => formData.append(key, data[key]));
    return formData;
  };

  // Login
  const login = async ({ email, password }) => {
    const formData = toFormData({ email, password });
    const res = await api.post("/login", formData);
    const token = res.data?.token || res.data?.access_token;
    localStorage.setItem("token", token);

    const userRes = await api.get("/user-detail", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setUser(userRes.data);
  };

  // Register
  const register = async (payload) => {
    const formData = toFormData(payload);
    await api.post("/register", formData);
  };

  // verify OTP
  const verifyOTP = async ({ email, otp }) => {
    const formData = toFormData({ email, otp });
    await api.post("/verify_otp", formData);
  };

  // Logout
  const logout = async () => {
    try {
      const token = localStorage.getItem("token");
      await api.post("/logout", null, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (err) {
      console.log(err);
    }
    localStorage.removeItem("token");
    setUser(null);
  };

  // Forgot Password - send email
  const forgotPassword = async (email) => {
    const formData = toFormData({ email });
    await api.post("/forgot-password", formData);
  };

  // Forgot Password - verify OTP
  const forgotVerifyOTP = async ({ email, otp }) => {
    const formData = toFormData({ email, otp });
    await api.post("/forgot-verify-otp", formData);
  };

  //reset password
  const resetPassword = async ({ token, password, password_confirmation }) => {
  const formData = toFormData({ token, password, password_confirmation });
  await api.post("/reset-password", formData);  // getting 404 here.. tried from Postman also.. i think API route is wrong or method wrong.
};

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        verifyOTP,
        logout,
        loading,
        forgotPassword,
        forgotVerifyOTP,
        resetPassword
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
