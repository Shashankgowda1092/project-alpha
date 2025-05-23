import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormInput {
  firstName: string;
  gender: GenderEnum;
}

export default function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input
        className={errors.firstName ? "border border-red-500" : "border"}
        {...register("firstName", {
          required: "First name is required",
          minLength: {
            value: 3,
            message: "Minimum 3 characters required",
          },
          maxLength: {
            value: 13,
            message: "Maximum 13 characters allowed",
          },
        })}
      />
      {errors.firstName && (
        <p style={{ color: "red", fontSize: "0.875rem" }}>
          {errors.firstName.message}
        </p>
      )}
      <label>Gender Selection</label>
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
  );
}
