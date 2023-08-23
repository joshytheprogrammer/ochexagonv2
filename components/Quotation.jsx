"use client"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

import Input from '@components/Input'

const schema = yup.object({
  CompanyName: yup
    .string()
    .required("Company Name is a required field"),
  email: yup
    .string()
    .required("Company Email is a required field")
    .email("Email is not valid"),
  ProductName: yup
    .string()
    .required("Product Name is a required field"),
  ProductNumber: yup
  .number() // Change the validation type to number
  .typeError("Product Number must be a number") // Custom error message for non-numeric input
  .required("Product Number is a required field")
 });

const Quotation = () => {

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
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className="lg:w-3/5 w-full lg:px-20 ">
        <Input 
        id="Username"
        label="Company Name"
        type="text"
        register={{ ...register("name") }}
        errorMessage={errors.CompanyName?.message}
        />

        <Input 
        id="Email"
        label="Company Email"
        type="email"
        register={{ ...register("email") }} 
        errorMessage={errors.email?.message}
        />

        <Input 
        id="Username"
        label="Product Name"
        type="text"
        register={{ ...register("ProductName") }}
        errorMessage={errors.ProductName?.message}
        />

        <Input 
        id="Username"
        label="Product Number"
        type="text"
        register={{ ...register("ProductNumber") }}
        errorMessage={errors.ProductNumber?.message}
        />

        <div className="flex flex-col mb-4">
          <label className="font text-xl mb-2">Other Information</label>
          <textarea name="message" id="message" cols="30" rows="10" className="border-2 w-full h-[180px] p-3 rounded-xl font focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-300"></textarea>
        </div> 

        <button type="submit" className="font text-xl background-primary text-white py-3 px-6 rounded-xl">Get a Quote</button>

      </form>
    </div>
  )
}

export default Quotation


