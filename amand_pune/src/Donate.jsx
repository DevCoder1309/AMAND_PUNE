import { useForm } from "react-hook-form";

export default function Donate() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstname">Name: </label>
      <input {...register("firstName", { required: true, maxLength: 20 })} placeholder="Name" /> <br />

      <label htmlFor="lastname">Last Name: </label>
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} placeholder="Last Name" /> <br />

      <label htmlFor="age">Age: </label>
      <input type="number" {...register("age", { min: 18, max: 99 })} placeholder="Age" /> <br />

      <input type="submit" />
    </form>
  );
}
