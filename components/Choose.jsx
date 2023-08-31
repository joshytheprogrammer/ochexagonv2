const Choose = () => {
  return (
    <div className="lg:px-20 lg:py-24 md:px-16 px-8 pt-12">
      <h1 className="font text-4xl md:text-[56px] font-semibold text-center md:mb-12 mb-6">
        Why Choose Us
      </h1>

      <div className="flex justify-center">
        <p className="font text-xl text-center  mb-12 w-full lg:w-[600px]">
          Uncover the <span className="font-bold text-primary">OCHEXAGON</span>{" "}
          difference. Experience excellence, innovation, and sustainability at
          its best.
        </p>
      </div>

      <div className="flex flex-wrap justify-between md:flex-row items-center ">
        <div className="w-full md:w-[49%] lg:w-[32%] rounded-2xl lg:py-12 py-8 px-6 lg:mb-0 mb-16 flex flex-col items-center background-accent">
          <h2 className="font font-semibold text-xl md:text-2xl lg:text-3xl text-center my-3 xl:my-6">
            Unparalleled Expertise
          </h2>

          <p className="font text-base lg:text-sm xl:text-lg text-center">
            Experienced professionals offer unparalleled, in-depth chemical
            insights, skillfully and confidently conquering various intricate
            complex challenges
          </p>
        </div>

        <div className="w-full md:w-[49%] lg:w-[32%] rounded-2xl lg:py-12 py-8 px-6 lg:mb-0 mb-16 flex flex-col items-center background-accent">
          <h2 className="font font-semibold text-xl md:text-2xl lg:text-3xl text-center my-3 xl:my-6">
            Tailored Innovations
          </h2>

          <p className="font text-base lg:text-sm xl:text-lg text-center">
            We specialize in customized chemical innovations, ensuring outcomes
            that go beyond expectations for every client's unique needs.
          </p>
        </div>

        <div className="w-full md:w-[49%] lg:w-[32%] rounded-2xl lg:py-12 py-8 px-6 lg:mb-0 mb-8 flex flex-col items-center background-accent">
          <h2 className="font font-semibold text-xl md:text-2xl lg:text-3xl text-center my-3 xl:my-6">
            Sustainability Leaders
          </h2>

          <p className="font text-base lg:text-sm  xl:text-lg text-center">
            Beyond uncompromising quality, we're committed to eco-friendly
            practices, making us your partner for responsible and effective
            chemical solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Choose;
