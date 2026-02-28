import { type Payment } from "@/data/types";
import { CheckCircle2, Clock, XCircle, RefreshCw } from "lucide-react";

interface PaymentStatusBadgeProps {
  status: Payment["status"];
}

const config: Record<Payment["status"], { icon: React.ElementType; label: string; className: string }> = {
  PENDING: { icon: Clock, label: "Pending Payment", className: "bg-warning/10 text-warning" },
  PAID: { icon: CheckCircle2, label: "Paid", className: "bg-success/10 text-success" },
  FAILED: { icon: XCircle, label: "Failed", className: "bg-destructive/10 text-destructive" },
  TIMEOUT: { icon: RefreshCw, label: "Timed Out", className: "bg-muted text-muted-foreground" },
};

const PaymentStatusBadge = ({ status }: PaymentStatusBadgeProps) => {
  const { icon: Icon, label, className } = config[status];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium ${className}`}>
      <Icon className="h-3.5 w-3.5" />
      {label}
    </span>
  );
};

export default PaymentStatusBadge;
