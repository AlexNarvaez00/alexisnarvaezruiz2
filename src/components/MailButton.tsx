import { type MouseEvent, type ReactNode, useEffect, useState } from "react";
import { toast, Toaster } from "sonner";

interface Props {
  children: ReactNode;
}

const isActiveDarkMode = () => {
  return "theme" in window.localStorage && window.localStorage.theme == "dark";
};

export default function MailButton({ children }: Props) {
  const [state, setSate] = useState(false);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigator.clipboard.writeText("ruiznarvaezalexis@gmail.com").then(() => {
      toast("Correo copiado 🚀");
      setSate(!state);
    });
  };

  useEffect(() => {}, [state]);

  return (
    <>
      <Toaster theme={!isActiveDarkMode() ? "light" : "dark"} />
      <a href="#" onClick={handleClick}>
        {children}
      </a>
    </>
  );
}
