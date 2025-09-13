import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  Heart, 
  Users, 
  Target, 
  TrendingUp,
  Award,
  ArrowRight,
  Download,
  RotateCcw
} from "lucide-react";

interface ResultsProps {
  answers: Record<string, string>;
  onRetake: () => void;
}

export const Results = ({ answers, onRetake }: ResultsProps) => {
  // Simple scoring algorithm for demo
  const calculateScore = (dimension: string) => {
    const dimensionAnswers = Object.entries(answers).filter(([questionId]) => {
      // This would match questions to dimensions in a real implementation
      return questionId.includes(dimension.charAt(0));
    });
    
    // Mock scoring - in real app, this would use the actual scoring logic
    return Math.floor(Math.random() * 40) + 60; // Random score between 60-100
  };

  const scores = {
    selfAwareness: calculateScore('self-awareness'),
    selfRegulation: calculateScore('self-regulation'),
    empathy: calculateScore('empathy'),
    socialSkills: calculateScore('social-skills'),
    motivation: calculateScore('motivation')
  };

  const overallScore = Math.round(Object.values(scores).reduce((a, b) => a + b, 0) / 5);

  const getScoreInterpretation = (score: number) => {
    if (score >= 80) return { level: "Proficient", color: "success", description: "This is a signature strength for you" };
    if (score >= 60) return { level: "Competent", color: "info", description: "You do well, though there is room for growth" };
    if (score >= 40) return { level: "Developing", color: "warning", description: "You sometimes manage well, sometimes less so" };
    if (score >= 20) return { level: "Emerging", color: "secondary", description: "This is a growing edge for you" };
    return { level: "Needs Attention", color: "destructive", description: "Strong potential for growth in this area" };
  };

  const getProfileLabel = () => {
    if (scores.empathy > 75 && scores.motivation > 75) return "Empathic Strategist";
    if (scores.selfRegulation > 75 && scores.selfAwareness > 75) return "Calm Regulator";
    if (scores.socialSkills > 75) return "Social Connector";
    return "Balanced Communicator";
  };

  return (
    <div className="min-h-screen bg-gradient-soft py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 px-6 py-2">
            <Award className="w-4 h-4 mr-2" />
            Assessment Complete
          </Badge>
          <h1 className="text-4xl font-bold mb-4">Your EQ Profile</h1>
          <p className="text-xl text-muted-foreground">
            Here's your personalized Communication Style Spectrum analysis
          </p>
        </div>

        {/* Overall Score */}
        <Card className="mb-8 shadow-large bg-gradient-card">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl flex items-center justify-center gap-3">
              <TrendingUp className="w-8 h-8 text-primary" />
              Overall EQ Index
            </CardTitle>
            <CardDescription>Your comprehensive emotional intelligence score</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-6xl font-bold text-primary mb-4">{overallScore}</div>
            <div className="text-2xl font-semibold text-secondary mb-6">{getProfileLabel()}</div>
            <Progress value={overallScore} className="w-full max-w-md mx-auto h-3" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              {getScoreInterpretation(overallScore).description}
            </p>
          </CardContent>
        </Card>

        {/* Dimension Breakdown */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[
            { key: 'selfAwareness', label: 'Self-Awareness', icon: Brain, description: 'Recognizing your emotions and their impact' },
            { key: 'selfRegulation', label: 'Self-Regulation', icon: Target, description: 'Managing emotions and impulses effectively' },
            { key: 'empathy', label: 'Empathy', icon: Heart, description: 'Understanding and sharing others\' feelings' },
            { key: 'socialSkills', label: 'Social Skills', icon: Users, description: 'Building relationships and influencing others' },
            { key: 'motivation', label: 'Motivation', icon: TrendingUp, description: 'Being driven by internal goals and values' }
          ].map(({ key, label, icon: Icon, description }) => {
            const score = scores[key as keyof typeof scores];
            const interpretation = getScoreInterpretation(score);
            
            return (
              <Card key={key} className="shadow-medium bg-gradient-card hover:shadow-large transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Icon className="w-8 h-8 text-primary" />
                    <Badge variant="outline" className={`border-${interpretation.color}`}>
                      {interpretation.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{label}</CardTitle>
                  <CardDescription className="text-sm">{description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary mb-2">{score}</div>
                  <Progress value={score} className="mb-3" />
                  <p className="text-xs text-muted-foreground">{interpretation.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Growth Recommendations */}
        <Card className="mb-8 shadow-medium bg-gradient-card">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Target className="w-7 h-7 text-accent" />
              Your Growth Plan
            </CardTitle>
            <CardDescription>
              Personalized recommendations based on your assessment results
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-3 text-success">Your Strengths</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    Strong emotional self-awareness
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    Natural empathy for others
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    Goal-oriented mindset
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3 text-warning">Growth Areas</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-warning rounded-full"></div>
                    Practice emotional regulation techniques
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-warning rounded-full"></div>
                    Develop conflict resolution skills
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-warning rounded-full"></div>
                    Enhance active listening
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <h5 className="font-semibold mb-2">Next Steps</h5>
              <p className="text-sm text-muted-foreground mb-3">
                Start with daily emotion journaling and practice the "pause before reacting" technique in challenging situations.
              </p>
              <Button variant="outline" size="sm">
                View Detailed Growth Plan
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" onClick={onRetake} className="min-w-[160px]">
            <RotateCcw className="w-4 h-4 mr-2" />
            Retake Assessment
          </Button>
          <Button variant="secondary" className="min-w-[160px]">
            <Download className="w-4 h-4 mr-2" />
            Download Report
          </Button>
          <Button className="min-w-[160px]">
            <Target className="w-4 h-4 mr-2" />
            Start Growth Plan
          </Button>
        </div>
      </div>
    </div>
  );
};