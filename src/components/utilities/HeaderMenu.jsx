const HeaderMenu = ({ title }) => {
  return (
    <>
      <div className="p-8">
        <h3 className="text-center text-2xl md:text-4xl sm:text-xl text-color-primary">
          {title}
        </h3>
      </div>
    </>
  );
};

export default HeaderMenu;
