import logo from "../assets/logo.png";
import sprite from "../assets/sprite.svg";
import user from "../assets/user.jpg";

function Header() {
  return (
    <header className="flex items-center justify-between bg-white px-6">
      <div>
        <img src={logo} alt="Trillo Logo" className="h-[40px] w-[60px]" />
      </div>
      <form className="flex w-[35%] items-center justify-center">
        <input
          type="text"
          name="search"
          placeholder="Search"
          className="w-[85%] rounded-l-full bg-[#f0eeee] py-1 pl-3 outline-none duration-500 focus:w-full"
        />
        <button className="">
          <svg className="size-8 shrink-0 grow-0 rounded-r-full bg-[#f0eeee] fill-[#999] py-1 pr-1">
            <use href={`${sprite}#icon-magnifying-glass`} />
          </svg>
        </button>
      </form>
      <div className="flex items-center">
        <div className="relative cursor-pointer p-4 hover:bg-gray-100">
          <span className="absolute right-2 top-1 flex size-5 items-center justify-center rounded-full bg-cerise-red-500 text-xs text-white">
            5
          </span>
          <svg className="size-7 fill-gray-500">
            <use href={`${sprite}#icon-bookmark`} />
          </svg>
        </div>
        <div className="relative cursor-pointer p-4 hover:bg-gray-100">
          <span className="absolute right-0 top-1 flex size-5 items-center justify-center rounded-full bg-cerise-red-500 text-xs text-white">
            3
          </span>
          <svg className="size-7 fill-gray-500">
            <use href={`${sprite}#icon-chat`} />
          </svg>
        </div>
        <div className="ml-2 flex items-center gap-2 px-2 py-6">
          <img src={user} className="size-11 rounded-full" />
          <span>LeoU</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
