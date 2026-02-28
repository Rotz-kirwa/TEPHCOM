import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "What is the application fee for?",
    a: "The application fee helps us maintain quality job postings and verify serious applicants. It covers CV screening and employer matching services.",
  },
  {
    q: "How does M-Pesa payment work?",
    a: "After filling your application, enter your M-Pesa phone number. You'll receive an STK Push prompt on your phone — enter your PIN to pay. Once payment is confirmed, your application is submitted automatically.",
  },
  {
    q: "What if my payment fails?",
    a: "You can retry the payment immediately. If the amount was deducted but the status shows 'Failed', contact us with your M-Pesa receipt number for reconciliation.",
  },
  {
    q: "Can I get a refund?",
    a: "Application fees are non-refundable once the application has been submitted. If payment was processed but your application wasn't submitted due to a technical error, contact support.",
  },
  {
    q: "How do I know my application was received?",
    a: "You'll see a confirmation page with a reference number after submission. A confirmation email will also be sent to the email address you provided.",
  },
  {
    q: "What file formats are accepted for CVs?",
    a: "We accept PDF, DOC, and DOCX files up to 5MB. PDF is recommended for best formatting.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="bg-primary py-12">
        <div className="container">
          <h1 className="font-display text-3xl font-bold text-primary-foreground">Frequently Asked Questions</h1>
          <p className="mt-1 text-primary-foreground/60">Everything you need to know about applying and paying</p>
        </div>
      </div>

      <div className="container max-w-2xl py-10">
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl border bg-card shadow-soft">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <span className="font-display font-semibold">{faq.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="border-t px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border bg-accent/10 p-8 text-center">
          <h2 className="font-display text-xl font-semibold">Still have questions?</h2>
          <p className="mt-2 text-sm text-muted-foreground">Reach out to our support team</p>
          <a href="mailto:support@ajiraconnect.co.ke" className="mt-4 inline-block rounded-lg bg-gradient-gold px-6 py-3 font-display font-semibold text-primary shadow-gold">
            Contact Support
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;
