import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface Question {
  id: string;
  type: 'likert' | 'scenario' | 'forced-choice';
  dimension: string;
  question: string;
  scenario?: string;
  options: {
    id: string;
    text: string;
    value: number;
  }[];
}

interface QuestionCardProps {
  question: Question;
  selectedAnswer: string | null;
  onAnswerSelect: (answerId: string) => void;
  questionNumber: number;
  totalQuestions: number;
  onNext: () => void;
  onPrevious: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export const QuestionCard = ({
  question,
  selectedAnswer,
  onAnswerSelect,
  questionNumber,
  totalQuestions,
  onNext,
  onPrevious,
  isFirst,
  isLast
}: QuestionCardProps) => {
  const getDimensionColor = (dimension: string) => {
    const colors = {
      'self-awareness': 'bg-primary/10 text-primary',
      'self-regulation': 'bg-secondary/10 text-secondary',
      'empathy': 'bg-accent/10 text-accent',
      'social-skills': 'bg-info/10 text-info',
      'motivation': 'bg-warning/10 text-warning'
    };
    return colors[dimension as keyof typeof colors] || 'bg-muted text-muted-foreground';
  };

  const renderLikertScale = () => (
    <div className="space-y-3">
      <div className="flex justify-between text-xs text-muted-foreground mb-4">
        <span>Strongly Disagree</span>
        <span>Strongly Agree</span>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {question.options.map((option) => (
          <Button
            key={option.id}
            variant={selectedAnswer === option.id ? "default" : "outline"}
            className={cn(
              "h-16 flex flex-col items-center justify-center text-xs transition-all duration-300",
              selectedAnswer === option.id && "shadow-glow scale-105"
            )}
            onClick={() => onAnswerSelect(option.id)}
          >
            <div className="font-bold text-lg">{option.value}</div>
            <div className="text-xs opacity-75">{option.text}</div>
          </Button>
        ))}
      </div>
    </div>
  );

  const renderMultipleChoice = () => (
    <div className="space-y-3">
      {question.options.map((option) => (
        <Button
          key={option.id}
          variant={selectedAnswer === option.id ? "assessment" : "outline"}
          className={cn(
            "w-full text-left justify-start p-4 h-auto min-h-[60px] transition-all duration-300",
            selectedAnswer === option.id && "border-primary shadow-medium"
          )}
          onClick={() => onAnswerSelect(option.id)}
        >
          <div className="flex items-start gap-3">
            <div className={cn(
              "w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 transition-all duration-300",
              selectedAnswer === option.id 
                ? "border-primary bg-primary" 
                : "border-border"
            )}>
              {selectedAnswer === option.id && (
                <div className="w-full h-full bg-primary-foreground rounded-full scale-50" />
              )}
            </div>
            <span className="text-sm leading-relaxed">{option.text}</span>
          </div>
        </Button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-soft py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="shadow-large bg-gradient-card">
          <CardHeader className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge className={getDimensionColor(question.dimension)}>
                {question.dimension.replace('-', ' ').toUpperCase()}
              </Badge>
              <span className="text-sm text-muted-foreground">
                Question {questionNumber} of {totalQuestions}
              </span>
            </div>
            <CardTitle className="text-xl md:text-2xl leading-relaxed">
              {question.question}
            </CardTitle>
            {question.scenario && (
              <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-primary">
                <p className="text-sm text-muted-foreground italic">
                  <strong>Scenario:</strong> {question.scenario}
                </p>
              </div>
            )}
          </CardHeader>
          <CardContent className="space-y-6">
            {question.type === 'likert' ? renderLikertScale() : renderMultipleChoice()}
            
            <div className="flex justify-between pt-6">
              <Button
                variant="ghost"
                onClick={onPrevious}
                disabled={isFirst}
                className="min-w-[100px]"
              >
                Previous
              </Button>
              
              <Button
                onClick={onNext}
                disabled={!selectedAnswer}
                className="min-w-[100px]"
              >
                {isLast ? 'Complete' : 'Next'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};