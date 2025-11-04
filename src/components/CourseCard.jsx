import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, Users } from 'lucide-react';

export const CourseCard = ({ course }) => {
  const hours = Math.floor(course.totalDuration / 3600);

  return (
    <Link to={`/course/${course.id}`}>
      <Card className="h-full overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
        <div className="aspect-video overflow-hidden">
          <img
            src={course.coverImg}
            alt={course.title}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2 mb-2">
            <Badge variant="secondary" className="capitalize">
              {course.difficulty}
            </Badge>
            {course.price === 0 && (
              <Badge className="bg-success text-success-foreground">Free</Badge>
            )}
          </div>
          <h3 className="font-semibold text-lg line-clamp-2 leading-tight">
            {course.title}
          </h3>
        </CardHeader>
        <CardContent className="pb-3">
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {course.description}
          </p>
          <div className="flex flex-wrap gap-1 mb-3">
            {course.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between text-sm pt-3 border-t">
          <div className="flex items-center gap-1 text-amber-600">
            <Star className="h-4 w-4 fill-current" />
            <span className="font-medium">{course.rating}</span>
            <span className="text-muted-foreground">({course.reviewCount})</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{hours}h</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{(course.enrolledCount / 1000).toFixed(1)}k</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
