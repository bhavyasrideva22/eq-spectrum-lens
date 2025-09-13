import { useState } from "react";
import { AssessmentIntro } from "@/components/AssessmentIntro";
import { Assessment } from "@/components/Assessment";
import { Results } from "@/components/Results";

type AppState = 'intro' | 'assessment' | 'results';

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>('intro');
  const [assessmentResults, setAssessmentResults] = useState<Record<string, string>>({});

  const handleStartAssessment = () => {
    setCurrentState('assessment');
  };

  const handleAssessmentComplete = (answers: Record<string, string>) => {
    setAssessmentResults(answers);
    setCurrentState('results');
  };

  const handleRetakeAssessment = () => {
    setAssessmentResults({});
    setCurrentState('intro');
  };

  return (
    <div className="min-h-screen">
      {currentState === 'intro' && (
        <AssessmentIntro onStartAssessment={handleStartAssessment} />
      )}
      
      {currentState === 'assessment' && (
        <Assessment onComplete={handleAssessmentComplete} />
      )}
      
      {currentState === 'results' && (
        <Results 
          answers={assessmentResults} 
          onRetake={handleRetakeAssessment}
        />
      )}
    </div>
  );
};

export default Index;
