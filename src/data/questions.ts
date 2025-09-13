import { Question } from "@/components/QuestionCard";

export const psychometricQuestions: Question[] = [
  {
    id: "q1",
    type: "likert",
    dimension: "self-awareness",
    question: "I clearly recognize when I am becoming stressed, before it affects my behavior.",
    options: [
      { id: "q1_1", text: "Never", value: 1 },
      { id: "q1_2", text: "Rarely", value: 2 },
      { id: "q1_3", text: "Sometimes", value: 3 },
      { id: "q1_4", text: "Often", value: 4 },
      { id: "q1_5", text: "Always", value: 5 }
    ]
  },
  {
    id: "q2",
    type: "scenario",
    dimension: "self-regulation",
    question: "What would you do in this situation?",
    scenario: "You receive unexpected criticism from your manager in front of your team.",
    options: [
      { id: "q2_a", text: "Defend yourself immediately, point out the criticism's flaws", value: 1 },
      { id: "q2_b", text: "Pause, ask clarifying questions, respond after thinking", value: 5 },
      { id: "q2_c", text: "Avoid talking until later, let it go without comment", value: 2 },
      { id: "q2_d", text: "Apologize even if you don't feel you did anything wrong", value: 3 }
    ]
  },
  {
    id: "q3",
    type: "forced-choice",
    dimension: "empathy",
    question: "Which statement is more true for you?",
    options: [
      { id: "q3_a", text: "I try to imagine what someone else is feeling, even if they don't say it", value: 5 },
      { id: "q3_b", text: "I prefer to wait until they tell me clearly how they feel before I respond", value: 3 }
    ]
  },
  {
    id: "q4",
    type: "likert",
    dimension: "social-skills",
    question: "When in group discussions, I can express my ideas clearly and also listen so that others feel heard.",
    options: [
      { id: "q4_1", text: "Never", value: 1 },
      { id: "q4_2", text: "Rarely", value: 2 },
      { id: "q4_3", text: "Sometimes", value: 3 },
      { id: "q4_4", text: "Often", value: 4 },
      { id: "q4_5", text: "Always", value: 5 }
    ]
  },
  {
    id: "q5",
    type: "likert",
    dimension: "motivation",
    question: "I feel driven by my own goals rather than by what everyone else expects of me.",
    options: [
      { id: "q5_1", text: "Never", value: 1 },
      { id: "q5_2", text: "Rarely", value: 2 },
      { id: "q5_3", text: "Sometimes", value: 3 },
      { id: "q5_4", text: "Often", value: 4 },
      { id: "q5_5", text: "Always", value: 5 }
    ]
  },
  {
    id: "q6",
    type: "scenario",
    dimension: "empathy",
    question: "How would you respond in this situation?",
    scenario: "A close friend seems upset but insists they're 'fine' when you ask what's wrong.",
    options: [
      { id: "q6_a", text: "Accept their answer and give them space", value: 2 },
      { id: "q6_b", text: "Gently let them know you're there if they want to talk", value: 5 },
      { id: "q6_c", text: "Keep asking until they tell you what's really wrong", value: 1 },
      { id: "q6_d", text: "Share a personal story to help them open up", value: 4 }
    ]
  },
  {
    id: "q7",
    type: "likert",
    dimension: "self-awareness",
    question: "I understand how my emotions influence my thoughts and decisions.",
    options: [
      { id: "q7_1", text: "Never", value: 1 },
      { id: "q7_2", text: "Rarely", value: 2 },
      { id: "q7_3", text: "Sometimes", value: 3 },
      { id: "q7_4", text: "Often", value: 4 },
      { id: "q7_5", text: "Always", value: 5 }
    ]
  },
  {
    id: "q8",
    type: "scenario",
    dimension: "self-regulation",
    question: "What's your typical response in this situation?",
    scenario: "You're running late for an important meeting due to unexpected traffic.",
    options: [
      { id: "q8_a", text: "Feel anxious and frustrated, let it affect your mood for hours", value: 1 },
      { id: "q8_b", text: "Take deep breaths, call ahead, and focus on what you can control", value: 5 },
      { id: "q8_c", text: "Blame others for not warning you about traffic", value: 2 },
      { id: "q8_d", text: "Rush dangerously to try to make up time", value: 1 }
    ]
  },
  {
    id: "q9",
    type: "forced-choice",
    dimension: "social-skills",
    question: "In group settings, which describes you better?",
    options: [
      { id: "q9_a", text: "I naturally take charge and guide the conversation", value: 4 },
      { id: "q9_b", text: "I prefer to listen and contribute when I have something valuable to add", value: 5 }
    ]
  },
  {
    id: "q10",
    type: "likert",
    dimension: "motivation",
    question: "I remain optimistic and focused on solutions even when facing setbacks.",
    options: [
      { id: "q10_1", text: "Never", value: 1 },
      { id: "q10_2", text: "Rarely", value: 2 },
      { id: "q10_3", text: "Sometimes", value: 3 },
      { id: "q10_4", text: "Often", value: 4 },
      { id: "q10_5", text: "Always", value: 5 }
    ]
  }
];