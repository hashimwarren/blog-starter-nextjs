import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ReactNode } from "react";

export default function PortfolioItem({
  title,
  image,
  children,
}: {
  title: string;
  image: string;
  children: ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <Image src={image} alt={title} width={400} height={300} className="w-full h-auto" />
        <h3 className="text-lg font-semibold mt-2">{title}</h3>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
