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
                 w-max max-w-[92vw]"
    >
      {sections.map(({ id, label, Icon }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition
                      ${active === id
                        ? "bg-white text-black shadow"
                        : "text-white/80 hover:text-white"}`}
        >
          <Icon size={18} />
          <span className="text-base font-medium">{label}</span>
        </button>
      ))}
    </nav>
  );

  // Mobile FAB + vertical menu
  const mobileNav = (
    <div className="md:hidden fixed bottom-8 right-4 z-50 flex flex-col items-start gap-3">
      {/* Menu items */}
      <div
        className={`flex flex-col items-start gap-3 transition-all duration-300
                    ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      >
        {sections.map(({ id, Icon }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`w-11 h-11 flex items-center justify-center rounded-full
                        bg-white/15 backdrop-blur-md border border-white/20
                        text-white transition hover:bg-white/25
                        ${active === id ? "ring-2 ring-white/80" : ""}`}
          >
            <Icon size={20} />
          </button>
        ))}
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 flex items-center justify-center rounded-full
                   bg-white/20 backdrop-blur-xl border border-white/25
                   text-white shadow-lg active:scale-95 transition"
      >
        {open ? <X size={26} /> : <Menu size={26} />}
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
