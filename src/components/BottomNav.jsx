import React, { useEffect, useState } from "react";
import {
  Home,
  User,
  Briefcase,
  Layers,
  Mail,
  Menu,
  X,
} from "lucide-react";

const sections = [
  { id: "hero", label: "Home", Icon: Home },
  { id: "about", label: "About", Icon: User },
  { id: "projects", label: "Work", Icon: Briefcase },
  { id: "skills", label: "Skills", Icon: Layers },
  { id: "contact", label: "Contact", Icon: Mail },
];

export default function BottomNav() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  // Scroll-spy: highlight current section
  useEffect(() => {
    const observers = sections.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([e]) => e.isIntersecting && setActive(id),
        { threshold: 0.5 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  // Scroll and close menu
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setOpen(false);
  };

  // Desktop/Tablet Bar
  const fullBar = (
    <nav
      className="hidden md:flex fixed bottom-10 left-1/2 -translate-x-1/2 z-50
                 bg-white/10 backdrop-blur-md border border-white/15 shadow-xl
                 items-center justify-center gap-1.5 rounded-full px-3 py-1
                 w-max max-w-[92vw] transition-all duration-300 ease-out"
    >
      {sections.map(({ id, label, Icon }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300 ease-out
                      ${active === id
                        ? "bg-white text-black shadow-lg scale-105"
                        : "text-white/80 hover:text-white hover:bg-white/10 hover:scale-102"}`}
        >
          <Icon size={18} className="transition-transform duration-200" />
          <span className="text-base font-medium">{label}</span>
        </button>
      ))}
    </nav>
  );

  // Mobile FAB + vertical menu
  const mobileNav = (
    <div className="md:hidden fixed bottom-8 right-4 z-50 flex flex-col items-end gap-3">
      {/* Menu items */}
      <div className="flex flex-col items-end gap-3">
        {sections.map(({ id, Icon }, index) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`w-11 h-11 flex items-center justify-center rounded-full
                        bg-white/15 backdrop-blur-md border border-white/20
                        text-white shadow-lg transition-all duration-300 ease-out
                        hover:bg-white/25 hover:scale-110 active:scale-95
                        ${active === id ? "ring-2 ring-white/80 bg-white/25" : ""}
                        ${open 
                          ? "opacity-100 translate-y-0 translate-x-0" 
                          : "opacity-0 translate-y-4 translate-x-4 pointer-events-none"}`}
            style={{
              transitionDelay: open ? `${index * 50}ms` : `${(sections.length - index - 1) * 30}ms`
            }}
          >
            <Icon size={20} className="transition-transform duration-200" />
          </button>
        ))}
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-14 h-14 flex items-center justify-center rounded-full
                   bg-white/20 backdrop-blur-xl border border-white/25
                   text-white shadow-lg transition-all duration-300 ease-out
                   hover:bg-white/30 hover:scale-110 active:scale-95
                   ${open ? "rotate-180" : "rotate-0"}`}
      >
        <div className="relative">
          <Menu 
            size={26} 
            className={`absolute inset-0 transition-all duration-300 ease-out
                       ${open ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"}`} 
          />
          <X 
            size={26} 
            className={`absolute inset-0 transition-all duration-300 ease-out
                       ${open ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-75"}`} 
          />
        </div>
      </button>
    </div>
  );

  return (
    <>
      {fullBar}
      {mobileNav}
    </>
  );
}