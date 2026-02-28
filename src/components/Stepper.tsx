import { Check } from "lucide-react";
import { type ApplicationStep } from "@/data/types";

interface StepperProps {
  currentStep: ApplicationStep;
}

const STEPS: { key: ApplicationStep; label: string }[] = [
  { key: "info", label: "Your Info" },
  { key: "uploads", label: "Documents" },
  { key: "payment", label: "Payment" },
  { key: "review", label: "Review" },
];

const Stepper = ({ currentStep }: StepperProps) => {
  const currentIndex = STEPS.findIndex((s) => s.key === currentStep);

  return (
    <div className="flex items-center justify-center gap-2">
      {STEPS.map((step, i) => {
        const isCompleted = i < currentIndex;
        const isCurrent = i === currentIndex;

        return (
          <div key={step.key} className="flex items-center">
            <div className="flex items-center gap-2">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-all ${
                  isCompleted
                    ? "bg-success text-success-foreground"
                    : isCurrent
                    ? "bg-gradient-gold text-primary-foreground animate-pulse-gold"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {isCompleted ? <Check className="h-4 w-4" /> : i + 1}
              </div>
              <span
                className={`hidden text-sm font-medium sm:inline ${
                  isCurrent ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {step.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`mx-3 h-0.5 w-8 rounded-full transition-colors ${
                  isCompleted ? "bg-success" : "bg-muted"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
