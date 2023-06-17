import { useForm } from "react-hook-form";
import "./Contact.css";

export const Contact = () => {
  const { register } = useForm();

  return (
    <div className="top-space">
      <h2 className="section-header top-space">GET IN TOUCH!</h2>
      <form
        action="https://formsubmit.co/print3Dverse@gmail.com"
        method="POST"
        className="contact-form"
      >
        <input
          type="text"
          placeholder="First name"
          {...register("First name", { required: true, maxLength: 80 })}
        />
        <input
          type="text"
          placeholder="Last name"
          {...register("Last name", { required: true, maxLength: 100 })}
        />
        <input
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="tel"
          placeholder="Mobile number"
          {...register("Mobile number", {
            required: true,
            minLength: 9,
            maxLength: 12,
          })}
        />
        <textarea
          placeholder="Message"
          {...register("Message", { required: true })}
        />
        <input type="hidden" name="_subject" value="New inquiry from www.print3dverse.com!"/>
        <input type="hidden" name="_next" value="http://127.0.0.1:5173/thanks" />

        <input type="submit" className="btn-blue" />
      </form>
    </div>
  );
};
