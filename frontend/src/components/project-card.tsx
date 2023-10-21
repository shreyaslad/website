import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { ExternalLink } from "lucide-react";

type CardProps = {
  title: string;
  description: string;
  tags: string[];
};

export function ProjectCard({ title, description, tags }: CardProps) {
  return (
    <Card className="hover:bg-muted">
      <CardHeader>
        <div className="flex flex-row justify-between items-center">
          <CardTitle>{title}</CardTitle>
          <ExternalLink className="w-4 h-4" />
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardFooter className="gap-2">
        {tags.map((val, _) => (
          <Badge variant={"secondary"}>{val}</Badge>
        ))}
      </CardFooter>
    </Card>
  );
}
