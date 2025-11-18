"use client";

import { Button, Card, CardBody, Image } from "@heroui/react";

export default function Herosection() {
  return (
    <section className="w-full bg-black flex flex-col-reverse lg:flex-row items-center justify-around gap-10 py-20 px-6">
      <div className="flex flex-col gap-6 max-w-lg text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
          Build Stunning Interfaces
          <span className="text-primary"> Faster</span>
        </h1>

        <p className="text-gray-500 text-lg">
          HeroUI gives you elegant, modern, and fully customizable React
          components designed for fast and beautiful interfaces.
        </p>

        <div className="flex gap-3 justify-center lg:justify-start">
          <Button color="primary" size="lg">
            Get Started
          </Button>
          <Button variant="bordered" size="lg" color="primary">
            Learn More
          </Button>
        </div>
      </div>

      <Card className="shadow-xl w-full max-w-md">
        <CardBody className="p-0">
          <Image
            src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2"
            alt="Hero Example"
            radius="none"
          />
        </CardBody>
      </Card>
    </section>
  );
}
