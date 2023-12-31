const Input = (props) => {
    return (
      <div className="flex flex-col mb-4">
          <label htmlFor={props.id} className="font text-xl mb-1">{props.label}</label>
          <input type={props.type} className='border-2 w-full p-2 rounded-xl font focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-300' placeholder={props.placeholder} {...props.register}/>
          <span className="text-red-500 text-sm font">{props.errorMessage}</span>
      </div>
    )
  }
  
  export default Input