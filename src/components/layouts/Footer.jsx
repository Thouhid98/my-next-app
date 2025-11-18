import { Link } from "@heroui/react";

export default function Footer() {
  return (
    <footer className="w-full mt-36 border-t py-10 px-6 bg-black text-foreground">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3   gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold">MyWebsite</h2>
          <p className="text-gray-500">
            Build fast, modern, and beautiful interfaces with HeroUI + Next.js.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <Link href="#" color="foreground">
            Home
          </Link>
          <Link href="#" color="foreground">
            About
          </Link>
          <Link href="#" color="foreground">
            Services
          </Link>
          <Link href="#" color="foreground">
            Contact
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg">Follow Us</h3>
          <Link href="#" color="foreground">
            Facebook
          </Link>
          <Link href="#" color="foreground">
            Twitter
          </Link>
          <Link href="#" color="foreground">
            Instagram
          </Link>
          <Link href="#" color="foreground">
            LinkedIn
          </Link>
        </div>
      </div>

      <div className="text-center pt-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
}
