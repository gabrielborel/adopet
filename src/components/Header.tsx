import { EnvelopeSimple, House } from "phosphor-react";
import { FullWhite } from "./svgs/Full-White";

export const Header = () => {
  return (
    <div className="p-12 flex gap-[50px] w-full">
      <div className="hidden md:block">
        <FullWhite styles="w-32" />
      </div>

      <button>
        <EnvelopeSimple size={28} color="white" />
      </button>

      <button>
        <House size={28} color="white" />
      </button>
    </div>
  );
};
