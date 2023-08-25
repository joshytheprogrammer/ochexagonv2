"use client"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

import Input from '@components/Input'

const schema = yup.object({
  name: yup
    .string()
    .required("Name is a required field"),
  email: yup
    .string()
    .required("Email is a required field")
    .email("Email is not valid"),
 });

  const Contact = () => {

    const { 
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema)
      });
    
      const onSubmit = (data) => {
        console.log(data);
      }

  return (
    <div className="lg:px-24 lg:pt-20 md:px-16 md px-8 py-12 flex lg:flex-row  justify-between flex-col">
      <div className="lg:w-2/5 w-full mr-12 mb-20">
        <p className="font text-lg">
          If you have any questions or comments, please contact us via email, or send us a message using the contact form.
        </p>

        <div>
          <h2 className="font text-2xl font-bold mt-8">Email</h2>
          <span className="font text-lg">info@ochexagon.com</span>
        </div>

        <div>
          <h2 className="font text-2xl font-bold mt-4">Phone No</h2>
          <span className="font text-lg">+234-803-0512-882</span>
        </div>
        
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="lg:w-3/5 w-full">
        <Input 
        id="Username"
        label="Username"
        type="text"
        register={{ ...register("name") }}
        errorMessage={errors.name?.message}
        />
        <Input 
        id="Email"
        label="Email"
        type="email"
        register={{ ...register("email") }} 
        errorMessage={errors.email?.message}
        />

        <div className="flex flex-col mb-4">
          <label className="font font-bold text-xl mb-2">Message</label>
          <textarea name="message" id="message" cols="30" rows="10" className="border-2 w-full h-[180px] p-3 rounded-xl font focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-300"></textarea>
        </div>

        <input type="submit" className="block font text-xl w-full text-center p-3 background-primary cursor-pointer text-secondary rounded-xl"/>
      </form>
    </div>
  )
}

export default Contact