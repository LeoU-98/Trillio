import sprite from "./assets/sprite.svg";
import propTypes from "prop-types";

const navData = [
  {
    path: "Hotel",
    icon: "icon-home",
    title: "Hotel",
  },
  {
    path: "Flight",
    icon: "icon-aircraft-take-off",
    title: "Flight",
  },
  {
    path: "Car rental",
    icon: "icon-key",
    title: "Car rental",
  },
  {
    path: "Tours",
    icon: "icon-map",
    title: "Tours",
  },
];

function SideNav() {
  return (
    <aside className="basis-[20%] bg-[#333]">
      <nav className="flex h-full flex-col pt-8">
        <ul className="">
          {navData.map((page, key) => (
            <NavIcon data={page} key={key} />
          ))}
        </ul>
        <div className="mt-auto p-4 text-white">
          &copy; 2017 by trillo. All rights reserved.
        </div>
      </nav>
    </aside>
  );
}

export default SideNav;

function NavIcon({ data }) {
  const { path, icon, title } = data;

  return (
    <li className="group relative mb-3">
      <div className="absolute top-1/2 h-0 w-0 -translate-y-1/2 bg-cerise-red-500 [transition:_width_0.3s,height_0.4s_cubic-bezier(1,-0.05,.56,.69)] group-hover:h-full group-hover:w-full"></div>
      <a
        href={path}
        className="relative z-50 flex items-center gap-2 px-6 py-5 text-white"
      >
        <svg className="size-6 fill-current">
          <use href={`${sprite}#${icon}`} />
        </svg>
        <span>{title}</span>
      </a>
    </li>
  );
}

NavIcon.propTypes = {
  data: propTypes.object,
};
