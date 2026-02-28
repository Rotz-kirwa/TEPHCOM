export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  category: string;
  description: string;
  requirements: string;
  feeAmount: number;
  isActive: boolean;
  createdAt: string;
}

export interface Application {
  id: string;
  jobId: string;
  fullName: string;
  email: string;
  phone: string;
  cvUrl?: string;
  cvFileName?: string;
  coverLetter: string;
  portfolioLink?: string;
  status: "draft" | "pending_payment" | "submitted" | "shortlisted" | "rejected" | "hired";
  submittedAt?: string;
  createdAt: string;
}

export interface Payment {
  id: string;
  applicationId: string;
  phone: string;
  amount: number;
  checkoutRequestId?: string;
  merchantRequestId?: string;
  mpesaReceipt?: string;
  resultCode?: number;
  resultDesc?: string;
  paidAt?: string;
  status: "PENDING" | "PAID" | "FAILED" | "TIMEOUT";
  createdAt: string;
}

export interface AdminUser {
  id: string;
  email: string;
  role: "admin" | "superadmin";
}

export type ApplicationStep = "info" | "uploads" | "payment" | "review";
