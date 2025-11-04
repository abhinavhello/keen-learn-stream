import { useParams, useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, Clock, Users, PlayCircle, Award } from 'lucide-react';
import { mockCourses } from '@/lib/mockData';
import { toast } from 'sonner';

export default function CourseDetail() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = mockCourses.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Course not found</h1>
          <Button onClick={() => navigate('/home')}>Back to Courses</Button>
        </div>
      </div>
    );
  }

  const handleEnroll = () => {
    toast.success('Enrolled successfully!');
    if (course.sections.length > 0 && course.sections[0].lessons.length > 0) {
      navigate(`/learn/${courseId}/${course.sections[0].lessons[0].id}`);
    }
  };

  const hours = Math.floor(course.totalDuration / 3600);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-card to-muted border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex gap-2 mb-4">
                <Badge variant="secondary" className="capitalize">
                  {course.difficulty}
                </Badge>
                {course.price === 0 && (
                  <Badge className="bg-success text-success-foreground">Free</Badge>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">{course.description}</p>
              
              <div className="flex flex-wrap gap-4 mb-6 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 text-amber-600 fill-current" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-muted-foreground">({course.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <span>{course.enrolledCount.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span>{hours} hours</span>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-2">Created by</p>
                <p className="font-semibold text-lg">{course.creator.name}</p>
              </div>

              <Button size="lg" className="w-full md:w-auto" onClick={handleEnroll}>
                <PlayCircle className="mr-2 h-5 w-5" />
                Enroll Now - Free
              </Button>
            </div>

            <div className="relative">
              <img
                src={course.coverImg}
                alt={course.title}
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>What you'll learn</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid md:grid-cols-2 gap-3">
                  {[
                    'Build real-world projects',
                    'Master core concepts',
                    'Best practices and patterns',
                    'Industry-standard tools',
                    'Problem-solving skills',
                    'Portfolio-ready projects',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {course.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="curriculum" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Course Content</CardTitle>
                <CardDescription>
                  {course.sections.length} sections • {course.sections.reduce((acc, s) => acc + s.lessons.length, 0)} lectures
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {course.sections.length > 0 ? (
                  course.sections.map((section, i) => (
                    <div key={section.id} className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-3">
                        Section {i + 1}: {section.title}
                      </h3>
                      <div className="space-y-2">
                        {section.lessons.map((lesson) => (
                          <div key={lesson.id} className="flex items-center gap-2 text-sm">
                            <PlayCircle className="h-4 w-4 text-muted-foreground" />
                            <span>{lesson.title}</span>
                            <span className="text-muted-foreground ml-auto">
                              {Math.floor(lesson.durationSec / 60)}m
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-muted-foreground">Course curriculum coming soon</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Student Reviews</CardTitle>
                <CardDescription>Coming soon</CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
