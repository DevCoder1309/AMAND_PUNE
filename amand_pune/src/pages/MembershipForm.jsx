import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

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
    <div className="flex flex-col py-9 px-5 md:px-[8.75rem] bg-bgColor min-h-screen">
      <div className="py-[4rem] uppercase text-2xl font-semibold text-left">
        Membership Form
      </div>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-[0.75rem] font-semibold" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className="p-2 rounded-md w-[18rem]"
            {...register("name", { required: "Name is required" })}
            placeholder="Enter your name"
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-[0.75rem] font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="p-2 rounded-md w-[18rem]"
            id="email"
            {...register("email", { required: "Email is required" })}
            placeholder="Enter your Email"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label
            className="block text-[0.75rem] font-semibold"
            htmlFor="mobile"
          >
            Mobile Number
          </label>
          <input
            className="p-2 rounded-md w-[18rem]"
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
          {errors.mobile && <p>{errors.mobile.message}</p>}
        </div>
        <div className="py-[5rem] md:w-[50rem]">
          I do hereby declare that the information furnished above is true to
          the best of my knowledge and belief. If any information furnished by
          me is found to be false at any stage, my membership to this
          association may be cancelled.
        </div>
        <div className="bg-primary w-20 text-center p-2 rounded">
          {" "}
          <button className="self-start" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default MembershipForm;
