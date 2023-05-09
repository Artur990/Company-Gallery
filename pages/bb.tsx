import { ThemeToggle } from "@/components/ThemeToggle";
import { FC } from "react";

interface AAProps {}

const bb: FC<AAProps> = ({}) => {
  return (
    <div className=" relative z-30">
      Cześć
      <div className="absolute left-14 top-16 z-30">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default bb;
