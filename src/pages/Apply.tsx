import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Stepper from "@/components/Stepper";
import PaymentStatusBadge from "@/components/PaymentStatusBadge";
import { SAMPLE_JOBS } from "@/data/mockData";
import { type ApplicationStep, type Payment } from "@/data/types";
import { ArrowLeft, ArrowRight, Upload, CheckCircle2, Loader2 } from "lucide-react";

const Apply = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const job = SAMPLE_JOBS.find((j) => j.id === jobId);

  const [step, setStep] = useState<ApplicationStep>("info");
  const [form, setForm] = useState({ fullName: "", email: "", phone: "", coverLetter: "", portfolioLink: "" });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [mpesaPhone, setMpesaPhone] = useState("");
  const [paymentStatus, setPaymentStatus] = useState<Payment["status"] | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!job) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container py-20 text-center">
          <h1 className="font-display text-2xl font-bold">Job not found</h1>
          <Link to="/jobs" className="mt-4 inline-block text-accent hover:underline">← Back to Jobs</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const inputClass = "w-full rounded-lg border bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring transition-shadow";
  const labelClass = "mb-1.5 block text-sm font-medium text-foreground";

  const canGoNext = () => {
    if (step === "info") return form.fullName && form.email && form.phone;
    if (step === "uploads") return form.coverLetter;
    if (step === "payment") return paymentStatus === "PAID";
    return true;
  };

  const nextStep = () => {
    const order: ApplicationStep[] = ["info", "uploads", "payment", "review"];
    const idx = order.indexOf(step);
    if (idx < order.length - 1) setStep(order[idx + 1]);
  };

  const prevStep = () => {
    const order: ApplicationStep[] = ["info", "uploads", "payment", "review"];
    const idx = order.indexOf(step);
    if (idx > 0) setStep(order[idx - 1]);
  };

  const simulatePayment = () => {
    if (!mpesaPhone || !/^2547\d{8}$/.test(mpesaPhone)) return;
    setIsProcessing(true);
    setPaymentStatus("PENDING");
    // Simulate STK push flow
    setTimeout(() => {
      setPaymentStatus("PAID");
      setIsProcessing(false);
    }, 3000);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container flex flex-col items-center py-20 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
            <CheckCircle2 className="h-8 w-8 text-success" />
          </div>
          <h1 className="mt-6 font-display text-3xl font-bold">Application Submitted!</h1>
          <p className="mt-3 max-w-md text-muted-foreground">
            Your application for <strong>{job.title}</strong> at {job.company} has been submitted successfully. You'll receive a confirmation email shortly.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">Reference: AJC-{Date.now().toString(36).toUpperCase()}</p>
          <Link to="/jobs" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-gold px-6 py-3 font-display font-semibold text-primary shadow-gold">
            Browse More Jobs
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="bg-primary py-6">
        <div className="container">
          <Link to={`/jobs/${job.id}`} className="inline-flex items-center gap-1 text-sm text-primary-foreground/60 hover:text-primary-foreground">
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to {job.title}
          </Link>
          <h1 className="mt-2 font-display text-2xl font-bold text-primary-foreground">Apply: {job.title}</h1>
          <p className="text-sm text-primary-foreground/60">{job.company} · Application fee: KSh {job.feeAmount}</p>
        </div>
      </div>

      <div className="container max-w-2xl py-8">
        <Stepper currentStep={step} />

        <div className="mt-8 rounded-xl border bg-card p-6 shadow-soft">
          {/* Step 1: Info */}
          {step === "info" && (
            <div className="space-y-4">
              <h2 className="font-display text-xl font-semibold">Personal Information</h2>
              <div>
                <label className={labelClass}>Full Name *</label>
                <input className={inputClass} value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} placeholder="John Kamau" />
              </div>
              <div>
                <label className={labelClass}>Email Address *</label>
                <input className={inputClass} type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="john@example.com" />
              </div>
              <div>
                <label className={labelClass}>Phone Number *</label>
                <input className={inputClass} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="2547XXXXXXXX" />
              </div>
              <div>
                <label className={labelClass}>Portfolio Link (optional)</label>
                <input className={inputClass} value={form.portfolioLink} onChange={(e) => setForm({ ...form, portfolioLink: e.target.value })} placeholder="https://..." />
              </div>
            </div>
          )}

          {/* Step 2: Uploads */}
          {step === "uploads" && (
            <div className="space-y-4">
              <h2 className="font-display text-xl font-semibold">Documents</h2>
              <div>
                <label className={labelClass}>Upload CV (PDF)</label>
                <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dashed bg-muted/50 p-8 text-sm text-muted-foreground transition-colors hover:border-accent hover:text-accent">
                  <Upload className="h-5 w-5" />
                  {cvFile ? cvFile.name : "Click to upload your CV"}
                  <input type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={(e) => setCvFile(e.target.files?.[0] || null)} />
                </label>
              </div>
              <div>
                <label className={labelClass}>Cover Letter *</label>
                <textarea className={`${inputClass} min-h-[120px]`} value={form.coverLetter} onChange={(e) => setForm({ ...form, coverLetter: e.target.value })} placeholder="Why are you a great fit for this role?" />
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {step === "payment" && (
            <div className="space-y-4">
              <h2 className="font-display text-xl font-semibold">M-Pesa Payment</h2>
              <div className="rounded-lg bg-accent/10 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Application Fee</span>
                  <span className="font-display text-2xl font-bold text-accent">KSh {job.feeAmount}</span>
                </div>
              </div>

              {paymentStatus && <PaymentStatusBadge status={paymentStatus} />}

              {paymentStatus !== "PAID" && (
                <>
                  <div>
                    <label className={labelClass}>M-Pesa Phone Number</label>
                    <input
                      className={inputClass}
                      value={mpesaPhone}
                      onChange={(e) => setMpesaPhone(e.target.value)}
                      placeholder="2547XXXXXXXX"
                    />
                    <p className="mt-1 text-xs text-muted-foreground">Format: 2547XXXXXXXX (Kenyan M-Pesa number)</p>
                  </div>
                  <button
                    onClick={simulatePayment}
                    disabled={isProcessing || !/^2547\d{8}$/.test(mpesaPhone)}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-success py-3 font-display font-semibold text-success-foreground transition-all hover:opacity-90 disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Waiting for M-Pesa...
                      </>
                    ) : (
                      "Pay with M-Pesa"
                    )}
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    An STK Push prompt will be sent to your phone. Enter your M-Pesa PIN to complete payment.
                  </p>
                </>
              )}

              {paymentStatus === "PAID" && (
                <div className="rounded-lg border border-success/20 bg-success/5 p-4 text-center">
                  <CheckCircle2 className="mx-auto h-8 w-8 text-success" />
                  <p className="mt-2 font-medium text-success">Payment successful!</p>
                  <p className="text-sm text-muted-foreground">You can now proceed to review and submit your application.</p>
                </div>
              )}

              {paymentStatus === "FAILED" && (
                <button onClick={() => setPaymentStatus(null)} className="text-sm text-accent hover:underline">
                  Try Again
                </button>
              )}
            </div>
          )}

          {/* Step 4: Review */}
          {step === "review" && (
            <div className="space-y-4">
              <h2 className="font-display text-xl font-semibold">Review & Submit</h2>
              <div className="space-y-3 rounded-lg bg-muted/50 p-4 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Name</span><span className="font-medium">{form.fullName}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Email</span><span className="font-medium">{form.email}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Phone</span><span className="font-medium">{form.phone}</span></div>
                {cvFile && <div className="flex justify-between"><span className="text-muted-foreground">CV</span><span className="font-medium">{cvFile.name}</span></div>}
                <div className="flex justify-between"><span className="text-muted-foreground">Payment</span><PaymentStatusBadge status="PAID" /></div>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Cover Letter</span>
                <p className="mt-1 rounded-lg bg-muted/50 p-3 text-sm">{form.coverLetter}</p>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-6 flex justify-between">
            <button
              onClick={prevStep}
              disabled={step === "info"}
              className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground disabled:opacity-30"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
            {step === "review" ? (
              <button
                onClick={handleSubmit}
                className="flex items-center gap-2 rounded-lg bg-gradient-gold px-6 py-2.5 font-display font-semibold text-primary shadow-gold transition-all hover:opacity-90"
              >
                Submit Application
              </button>
            ) : (
              <button
                onClick={nextStep}
                disabled={!canGoNext()}
                className="flex items-center gap-1 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90 disabled:opacity-30"
              >
                Continue
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Apply;
