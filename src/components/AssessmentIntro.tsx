import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Heart, Users, Target, TrendingUp, Clock, CheckCircle2 } from "lucide-react";

interface AssessmentIntroProps {
  onStartAssessment: () => void;
}

export const AssessmentIntro = ({ onStartAssessment }: AssessmentIntroProps) => {
  return (
    <div className="min-h-screen bg-gradient-soft">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 px-6 py-2 text-sm font-medium">
            💬 Personal & Emotional Intelligence Assessment
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Communication Style
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Spectrum
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how you feel, how you communicate, and how others see you—then get personalized guidance 
            to grow stronger in relationships, resilience, and self-leadership.
          </p>
        </div>

        {/* Why EQ Matters Section */}
        <Card className="mb-12 shadow-medium bg-gradient-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl flex items-center justify-center gap-3">
              <Heart className="w-8 h-8 text-secondary" />
              Why EQ Matters
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Your ability to recognize and manage your emotions, respond well in social situations, and bounce back 
              from difficulties shapes how you learn, work, and connect with others. When EQ is strong, you build trust, 
              lead with empathy, adapt under pressure, and make thoughtful choices.
            </p>
          </CardContent>
        </Card>

        {/* What You'll Get Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="shadow-soft bg-gradient-card hover:shadow-medium transition-all duration-300">
            <CardHeader>
              <Brain className="w-10 h-10 text-primary mb-4" />
              <CardTitle className="text-xl">Emotional Traits Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Core dimensions breakdown covering awareness, regulation, empathy, social skills, and motivation.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft bg-gradient-card hover:shadow-medium transition-all duration-300">
            <CardHeader>
              <Users className="w-10 h-10 text-secondary mb-4" />
              <CardTitle className="text-xl">Style Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Discover your personality and communication patterns, including how others perceive you.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft bg-gradient-card hover:shadow-medium transition-all duration-300">
            <CardHeader>
              <Target className="w-10 h-10 text-accent mb-4" />
              <CardTitle className="text-xl">Growth Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Personalized strengths, blind spots, and actionable growth plan you can implement right away.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Assessment Details */}
        <Card className="mb-12 shadow-medium bg-gradient-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl flex items-center justify-center gap-3">
              <CheckCircle2 className="w-8 h-8 text-success" />
              Assessment Overview
            </CardTitle>
            <CardDescription className="text-lg">
              Comprehensive evaluation across multiple dimensions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-medium">~15-20 minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-secondary" />
                  <span className="font-medium">25+ questions & scenarios</span>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Assessment Sections:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Psychometric EQ Foundations (10-12 questions)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Personality & Emotional Style (6-8 questions)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Situational EQ Assessment (6-8 scenarios)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-info rounded-full"></div>
                    PEARL Framework Analysis (Custom EQ Model)
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            onClick={onStartAssessment}
            size="lg" 
            className="text-lg px-12 py-6 h-auto shadow-large"
          >
            Let's Get Started!
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Free assessment • Instant results • No registration required
          </p>
        </div>
      </div>
    </div>
  );
};