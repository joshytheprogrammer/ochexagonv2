const Jumbotron = (props) => {
  const jumbotronStyle = {
    backgroundImage: `url(${props.url})`,
    backgroundSize: 'cover', // You can adjust this as needed
    // Add any other background properties here
  };

  return (
    <div className="text-white flex items-center p-8 sm:px-8 md:px-12 lg:px-28 lg:py-24 h-[130px] md:h-[300px]" style={jumbotronStyle}>
      <h1 className="font font-semibold md:text-4xl text-2xl py-2 border-white border-b-4">{props.content}</h1>
    </div>
  );
};

export default Jumbotron;
