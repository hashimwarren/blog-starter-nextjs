import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ReactNode } from "react";

export default function FeatureCard({
  title,
  children,
  icon,
}: {
  title: string;
  children: ReactNode;
  icon: ReactNode;
}) {
  return (
    <Card className="text-center">
      <CardHeader className="flex flex-col items-center gap-2">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{children}</p>
        <Badge variant="outline">Learn More</Badge>
      </CardContent>
    </Card>
  );
}
