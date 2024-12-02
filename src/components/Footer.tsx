import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { MailIcon } from "lucide-react";
// import { InstagramLogoIcon } from "@radix-ui/react-icons";
import Instagram from 'next/image';
import Linkedin from 'next/image';

export default function Footer() {
  // get the current time in UTC+1 time zone
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      date.setHours(date.getHours());
      setTime(
        date.toLocaleTimeString("en-US", {
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        }),
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-gradient-to-t from-primary/[1%] to-transparent">
      <div className="container mx-auto flex flex-row items-center justify-between py-6">
        <span className="flex flex-row items-center space-x-4">
          <p className="text-xs text-muted-foreground">
            Made with  by{" "}
            <Link
              href=""
              target="_blank"
              passHref
              className="text-foreground transition hover:text-primary"
            >
              DD
            </Link>
          </p>
          <hr className="hidden h-6 border-l border-muted md:flex" />
          <span className="flex hidden flex-row items-center space-x-2 md:flex">
            <p className="text-xs text-muted-foreground">Local time:</p>
            <p className="text-sm font-semibold">{time} UTC+1</p>
          </span>
        </span>
        <div className="flex space-x-4">
          <Link href={"https://www.instagram.com/color__motion/"} target="_blank">
            {/* <InstagramLogoIcon className="h-5 w-5 md:mr-2" /> */}
            {/* <lord-icon
            src="https://cdn.lordicon.com/ewswvzmw.json"
            trigger="hover"
            colors="primary:#ffffff,secondary:#c71f16"
            style="width:250px;height:250px">
          </lord-icon> */}
            <Instagram src='/insta_logo1.gif' alt='Instalogo' height={20} width={20}>

            </Instagram>
          </Link>
          <Link href={"https://www.linkedin.com/in/deep-darji-5a825a218/"} target="_blank ">
            <Linkedin src={'/linkedin_logo.gif'} alt='LinkedLogo' height={20} width={20}></Linkedin>
          </Link>
        </div>
        <Link
          href="mailto:colorandmotion01@gmail.com"
          passHref
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          <Button variant={"outline"}>
            <MailIcon className="h-4 w-4 md:mr-2" />
            <span className="hidden md:flex">colorandmotion01@gmail.com</span>
          </Button>
        </Link>
      </div>
      <div className="h-1 bg-[radial-gradient(closest-side,#8486ff,#42357d,#5d83ff,transparent)] opacity-50" />
    </footer>
  );
}
