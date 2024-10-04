import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";

function MembershipForm() {
  const { membershipName } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
  console.log("Form Data:", data);
  console.log("Form Data:", name);
  try {
    const response = await axios.post("http://localhost:3000/payment", {
      membershipType: membershipName,
      email: data.email,
      name: data.name,
      mobile: data.mobile,
    });



      if (response.status === 200) {
        if (response.data.url) {
          window.location.href = response.data.url;
        } else {
          navigate("/success");
        }


    } else {
      console.error("Invalid payment session response");
    }
  } catch (error) {
    console.error("Error processing payment:", error.response ? error.response.data : error.message);
  }
};

  return (
    <div className="bg-bgColor min-h-screen flex flex-col justify-center items-center px-[4rem]">
      <div className="w-full max-w-[70rem] flex flex-col gap-4 py-[2rem] md:gap-8">
        <Header
          headerName="Membership Form"
          pageDesc="To apply for membership, please complete the form below with accurate and up-to-date information. All required fields must be filled out, including your personal and contact details. The information provided will be used for reviewing your membership application, and it’s essential to ensure that it’s correct. If any discrepancies or errors are found, it could delay the processing of your application or affect your membership status."
        />

        <form
          className="flex flex-col gap-3 w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <label
              className="block text-[0.75rem] font-semibold"
              htmlFor="name"
            >
              Name
            </label>
            <input
              id="name"
              className="p-2 rounded-md w-full max-w-[18rem]"
              {...register("name", { required: "Name is required" })}
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-[0.75rem] font-semibold"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="p-2 rounded-md w-full max-w-[18rem]"
              id="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="">
            <label
              className="block text-[0.75rem] font-semibold"
              htmlFor="mobile"
            >
              Mobile Number
            </label>
            <input
              className="p-2 rounded-md w-full max-w-[18rem]"
              id="mobile"
              {...register("mobile", {
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Please enter a valid 10-digit mobile number",
                },
              })}
              placeholder="Enter your mobile number"
            />
            {errors.mobile && (
              <p className="text-red-500">{errors.mobile.message}</p>
            )}
          </div>

          {/* Checkbox with validation */}
          <div className="flex items-center gap-2 py-[2rem] md:py-[5rem] font-charter">
            <input
              type="checkbox"
              id="declaration"
              className="h-5 w-5 text-primary focus:ring-2 focus:ring-primary"
              {...register("declaration", {
                required: "You must accept the declaration",
              })}
            />
            <label htmlFor="declaration" className="text-[0.875rem]">
              I hereby declare that the information provided is accurate to the
              best of my knowledge. If found false, my membership may be
              revoked.
            </label>
          </div>
          {errors.declaration && (
            <p className="text-red-500">{errors.declaration.message}</p>
          )}

          {/* Submit Button */}
          <div className="bg-secondary font-mont text-textColor text-center p-2 rounded w-[8rem]">
            <button className="uppercase" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MembershipForm;
