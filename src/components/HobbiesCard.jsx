const HobbiesCard = ({ hobbie }) => {
  return (
    <div className="flex flex-col justify-between shadow-xl mt-4  dark:bg-modal px-8 py-7  h-full">
      <header>
        <div className="flex items-center gap-3">
          <div className="text-xl dark:text-white">{hobbie.icon}</div>
          <h3 className="text-xl font-bold dark:text-slate-200">
            {hobbie.title}
          </h3>
        </div>
        <div>
          <p className="text-slate-600 dark:text-slate-400 pt-3">
            {hobbie.description}
          </p>
        </div>
      </header>
      <footer>
        <div className="text-lg mt-5 dark:text-white">
          <a
            href={hobbie.website.link}
            className="hover:text-font inline-block text-xl"
          >
            {hobbie.website.icon}
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HobbiesCard;
