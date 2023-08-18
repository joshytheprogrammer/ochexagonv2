

const Choose = () => {
  return (
    <div className="lg:p-24 md:px-16 px-8 py-12">
      <h1 className="font text-4xl md:text-[56px] font-semibold text-center md:mb-12 mb-6">Why Choose Us</h1>

      <p className="font text-base text-center mb-8">
        Uncover the <span className="font-bold text-primary">OCHEXAGON</span> difference. Experience excellence, innovation, and sustainability at its best.
      </p>
      
      <div className="flex flex-wrap justify-between md:flex-row items-center ">
        <div className="w-full md:w-[49%] lg:w-[32%] rounded-2xl py-8 px-3 mb-8 flex flex-col items-center background-accent">
          
          <h2 className="font font-semibold text-xl md:text-2xl lg:text-2xl xl:text-32l text-center my-3 xl:my-6">
            Unparalleled Expertise
          </h2>

          <p className="font text-base lg:text-sm xl:text-lg text-center">
            Experienced professionals offer unparalleled, in-depth chemical insights, skillfully conquering various complex challenges.
          </p>
        </div>

        <div className="w-full md:w-[49%] lg:w-[32%] rounded-2xl py-8 px-3 mb-8 flex flex-col items-center background-accent">

          <h2 className="font font-semibold text-xl md:text-2xl lg:text-2xl xl:text-2xl text-center my-3 xl:my-6">
            Tailored Innovations
          </h2>

          <p className="font text-base lg:text-sm xl:text-lg text-center">
            We specialize in customized chemical innovations, ensuring outcomes that go beyond expectations for every client's unique needs.
          </p>
        </div>
        <div className="w-full md:w-[49%] lg:w-[32%] rounded-2xl py-8 px-3 mb-8 flex flex-col items-center background-accent">

          <h2 className="font font-semibold text-xl md:text-2xl lg:text-2xl xl:text-32l text-center my-3 xl:my-6">
            Sustainability Leaders
          </h2>

          <p className="font text-base lg:text-sm  xl:text-lg text-center">
            Beyond uncompromising quality, we're committed to eco-friendly practices, making us your partner for responsible and effective chemical solutions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Choose