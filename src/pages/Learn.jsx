import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, HelpCircle } from 'lucide-react';
import { mockCourses } from '@/lib/mockData';

export default function Learn() {
  const { courseId, lessonId } = useParams();
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const course = mockCourses.find(c => c.id === courseId);
  const lesson = course?.sections
    .flatMap(s => s.lessons)
    .find(l => l.id === lessonId);

  if (!course || !lesson) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold">Lesson not found</h1>
        </div>
      </div>
    );
  }

  const currentSegment = lesson.segments.find(
    seg => currentTime >= seg.startSec && currentTime < seg.endSec
  );

  const segmentQuizzes = lesson.quiz.filter(q => q.segmentId === currentSegment?.id);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Player */}
            <Card className="overflow-hidden">
              <div className="aspect-video bg-black relative">
                <video
                  src={lesson.videoUrl}
                  className="w-full h-full"
                  controls
                  onPlay={() => setPlaying(true)}
                  onPause={() => setPlaying(false)}
                  onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
                />
              </div>
              
              {/* Segment Timeline */}
              <div className="p-4 border-t">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium">Segments:</span>
                  {currentSegment && (
                    <Badge variant="secondary">{currentSegment.title}</Badge>
                  )}
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {lesson.segments.map((segment) => {
                    const isActive = segment.id === currentSegment?.id;
                    return (
                      <Button
                        key={segment.id}
                        variant={isActive ? "default" : "outline"}
                        size="sm"
                        className="whitespace-nowrap"
                      >
                        {segment.title}
                      </Button>
                    );
                  })}
                </div>
              </div>
            </Card>

            {/* Lesson Info */}
            <Card className="p-6">
              <h1 className="text-2xl font-bold mb-2">{lesson.title}</h1>
              <p className="text-muted-foreground mb-4">
                Duration: {Math.floor(lesson.durationSec / 60)} minutes
              </p>
              
              <Tabs defaultValue="resources">
                <TabsList>
                  <TabsTrigger value="resources">Resources</TabsTrigger>
                  <TabsTrigger value="transcript">Transcript</TabsTrigger>
                </TabsList>
                <TabsContent value="resources" className="space-y-2 mt-4">
                  {lesson.resources.map(resource => (
                    <div key={resource.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>{resource.title}</span>
                      </div>
                      <Button size="sm" variant="ghost">Download</Button>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="transcript" className="mt-4">
                  <div className="space-y-2">
                    {lesson.transcript.map((seg, i) => (
                      <p key={i} className="text-sm">
                        <span className="text-muted-foreground mr-2">
                          {Math.floor(seg.startSec / 60)}:{String(seg.startSec % 60).padStart(2, '0')}
                        </span>
                        {seg.text}
                      </p>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quiz Drawer */}
            {segmentQuizzes.length > 0 && (
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  <h2 className="font-semibold">Quiz for this segment</h2>
                </div>
                {segmentQuizzes.map((quiz) => (
                  <div key={quiz.id} className="space-y-4">
                    <p className="font-medium">{quiz.prompt}</p>
                    {quiz.options && (
                      <div className="space-y-2">
                        {quiz.options.map((option, i) => (
                          <Button
                            key={i}
                            variant="outline"
                            className="w-full justify-start text-left"
                          >
                            {option}
                          </Button>
                        ))}
                      </div>
                    )}
                    {quiz.hint && (
                      <p className="text-sm text-muted-foreground">
                        <strong>Hint:</strong> {quiz.hint}
                      </p>
                    )}
                  </div>
                ))}
              </Card>
            )}

            {/* Notes Panel */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full">
                  <FileText className="mr-2 h-4 w-4" />
                  My Notes
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>My Notes</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <p className="text-sm text-muted-foreground">
                    No notes yet. Start taking notes while watching!
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
}
