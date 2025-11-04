import { Navbar } from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, TrendingUp, DollarSign, Play, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Creator() {
  const navigate = useNavigate();

  // Mock metrics data
  const metrics = {
    views: 15420,
    dwellDepth: 78,
    quizUplift: 23,
    adImpressions: 8934,
    earnings: 1247.50,
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Creator Dashboard</h1>
            <p className="text-muted-foreground">Manage your courses and track performance</p>
          </div>
          <Button size="lg" onClick={() => navigate('/creator/new')}>
            <Plus className="mr-2 h-5 w-5" />
            Create Course
          </Button>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Views</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.views.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground mt-1">
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Dwell Depth</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.dwellDepth}%</div>
              <p className="text-xs text-muted-foreground mt-1">
                Average completion rate
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Ad Impressions</CardTitle>
              <Play className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.adImpressions.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground mt-1">
                This month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Earnings</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${metrics.earnings.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Total lifetime
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Course Management */}
        <Tabs defaultValue="courses">
          <TabsList>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="integrity">Integrity</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Courses</CardTitle>
                <CardDescription>Manage and edit your published courses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">
                    You haven't created any courses yet
                  </p>
                  <Button onClick={() => navigate('/creator/new')}>
                    <Plus className="mr-2 h-4 w-4" />
                    Create Your First Course
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Detailed Analytics</CardTitle>
                <CardDescription>Deep dive into your course performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Quiz Uplift Score</h3>
                    <p className="text-2xl font-bold text-primary">{metrics.quizUplift}%</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Students who complete quizzes perform {metrics.quizUplift}% better
                    </p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Engagement Rate</h3>
                    <div className="h-40 flex items-end justify-around gap-2">
                      {[65, 72, 68, 78, 75, 82, 80].map((value, i) => (
                        <div
                          key={i}
                          className="bg-primary rounded-t flex-1"
                          style={{ height: `${value}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="integrity" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Content Integrity</CardTitle>
                <CardDescription>Monitor content quality and flagged issues</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 text-success mb-4">
                    ✓
                  </div>
                  <p className="font-medium mb-2">All Clear!</p>
                  <p className="text-sm text-muted-foreground">
                    No integrity issues detected with your content
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
