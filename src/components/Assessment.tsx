import { useState } from "react";
import { QuestionCard } from "./QuestionCard";
import { ProgressIndicator } from "./ProgressIndicator";
import { psychometricQuestions } from "@/data/questions";

interface AssessmentProps {
  onComplete: (answers: Record<string, string>) => void;
}

export const Assessment = ({ onComplete }: AssessmentProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const currentQuestion = psychometricQuestions[currentQuestionIndex];
  const isFirst = currentQuestionIndex === 0;
  const isLast = currentQuestionIndex === psychometricQuestions.length - 1;

  const handleAnswerSelect = (answerId: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answerId
    }));
  };

  const handleNext = () => {
    if (isLast) {
      onComplete(answers);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (!isFirst) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Progress Bar */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <ProgressIndicator 
            currentStep={currentQuestionIndex + 1} 
            totalSteps={psychometricQuestions.length}
          />
        </div>
      </div>

      <QuestionCard
        question={currentQuestion}
        selectedAnswer={answers[currentQuestion.id] || null}
        onAnswerSelect={handleAnswerSelect}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={psychometricQuestions.length}
        onNext={handleNext}
        onPrevious={handlePrevious}
        isFirst={isFirst}
        isLast={isLast}
      />
    </div>
  );
};