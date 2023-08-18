const Jumbotron = (props) => {
  const jumbotronStyle = {
    backgroundImage: `url(${props.url})`,
  };

  return (
    <div className="text-white flex items-center py-8 px-4 sm:px-8 md:px-12 lg:px-28 lg:py-24 h-fit md:h-[250px]" style={jumbotronStyle}>
      <h1 className="font font-semibold underline text-4xl">{props.content}</h1>
    </div>
  );
}

export default Jumbotron;
