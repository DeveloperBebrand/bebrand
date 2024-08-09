"use client";
import { useState } from "react";
import axios from "axios"; // Import Axios
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { FiNavigation } from "react-icons/fi";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Form() {
  const options = [
    { value: "Creative", label: "Creative" },
    { value: "Marketing", label: "Marketing" },
    { value: "SEO ", label: "SEO" },
    { value: "Workshops", label: "Workshops" },
    { value: "Development Atelier", label: "Development Atelier" },
    { value: "Digital Marketing", label: "Digital Marketing" },
  ];

  const [phone, setPhone] = useState("");
  const [full_name, setFull_name] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!full_name || !email || !phone || !message) {
      toast.error("All fields are required.");
      return;
    }

    const data = {
      full_name,
      email,
      phone,
      message,
      services: selectedOptions.map((option: any) => option.value),
    };

    setLoading(true); // Set loading to true before request
    try {
      const response = await axios.post(
        "https://bebrandadmin.beviparena.com/public/api/send-email",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.status === "success") {
        toast.success("Email sent successfully.");
        setFull_name("");
        setEmail("");
        setPhone("");
        setMessage("");
        setSelectedOptions([]);
      } else {
        toast.error("Error sending email.");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false); // Set loading to false after request
    }
  };

  return (
    <>
      <ToastContainer />
      <form
        className="flex flex-col items-center justify-center w-full max-w-md mx-auto "
        onSubmit={handleSubmit}
      >
        {" "}
        {/* Center the form */}
        <div className="w-full">
          <div>
            <div className="relative mt-5 w-full flex flex-col ">
              <div>
                <input
                  type="text"
                  id="name"
                  className="form-modal-input border-2 h-12 outline-none peer block w-full appearance-none rounded-lg   border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                  value={full_name}
                  onChange={(e) => setFull_name(e.target.value)}
                />
                <label
                  htmlFor="name"
                  className="absolute top-2 left-1  z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                >
                  Enter Your Name
                </label>
              </div>
            </div>
            <div className="relative mt-5 w-full *: ">
              <input
                type="text"
                id="email"
                className="border-2 h-12 peer block form-modal-input w-full appearance-none rounded-lg     border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                htmlFor="email"
                className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
              >
                Enter Your Email
              </label>
            </div>
          </div>
        </div>
        <div className="relative mt-5 w-full">
          <PhoneInput
            className="w-full border-2 rounded-lg   form-modal-input"
            defaultCountry="ae"
            disableFormatting={true}
            value={phone}
            inputClassName="bg-gray-200 rounded-md h-12"
            onChange={(phone) => setPhone(phone)}
          />
        </div>
        <div className="mt-5 w-full border-2 rounded-lg ">
          <Select
            isMulti
            placeholder="Select Services"
            styles={{
              menu: (provided) => ({
                ...provided,
                backgroundColor: "white",
                color: "#3b3b3b",
                borderRadius: "10px",
                border: "none",
                padding: "10px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
              }),

              control: (provided) => ({
                ...provided,
                minHeight: "48px",
                maxHeight: "100%",
              }),
            }}
            options={options as any}
            value={selectedOptions}
            onChange={(e) => setSelectedOptions(e as any)}
          />
        </div>
        <div className="mt-5 w-full">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium    "
          >
            Your message
          </label>
          <textarea
            id="message"
            rows={4}
            className="block border-2 outline-none p-2.5 w-full text-sm  bg-gray-50 rounded-lg   border-gray-300 focus:ring-gold-500 focus:border-gold-500    dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-center w-full">
          <button
            type="submit"
            style={{ borderRadius: "100px" }}
            className="group relative mt-5 inline-flex items-center justify-center overflow-hidden border-2 w-32 h-12 p-4 px-5 py-2.5 font-medium text-[#C4DFE6] shadow-md transition duration-300 ease-out"
            disabled={loading} // Disable button when loading
          >
            <span className="absolute inset-0 p-5 flex h-full w-full -translate-x-full items-center justify-center bg-[#222222] text-white duration-300 group-hover:translate-x-0">
              {loading ? (
                <span className="loader">
                  {" "}
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </span>
              ) : (
                <FiNavigation className="text-2xl" />
              )}
            </span>
            <span className="absolute p-3 flex h-full w-full transform items-center justify-center text-[#0c0c0c] transition-all duration-300 group-hover:translate-x-full">
              {loading ? (
                <>
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </>
              ) : (
                "Send"
              )}
            </span>
            <span className="invisible relative">Send</span>
          </button>
        </div>
      </form>
    </>
  );
}
