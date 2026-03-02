import { Link } from "react-router-dom";
import { CheckCircle2, FileCheck2, FileText, Globe2, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    id: "career",
    icon: Globe2,
    title: "Career Opportunities",
    fee: "KES 500",
    description:
      "Apply for global job opportunities that match your area of specialization.",
    details: [
      "Access advertised opportunities across different countries and sectors.",
      "Guided application support before final submission.",
      "Payment is required before application submission.",
    ],
    ctaLabel: "Browse Jobs",
    ctaTo: "/jobs",
  },
  {
    id: "resume",
    icon: FileText,
    title: "Resume Writing",
    fee: "KES 200",
    description:
      "Get a professionally written resume tailored to your target role and experience.",
    details: [
      "Content optimized for clarity and recruiter screening.",
      "Structured for your specialization and career level.",
      "Payment is required before service submission.",
    ],
    ctaLabel: "Contact Support",
    ctaTo: "/faq",
  },
  {
    id: "verification",
    icon: FileCheck2,
    title: "Document Verification",
    fee: "KES 200 / document",
    description:
      "Verify your documents for authenticity and readiness before employer submission.",
    details: [
      "Verification support for academic and professional documents.",
      "Recommended before international or regulated applications.",
      "Payment is required before service submission.",
    ],
    ctaLabel: "Contact Support",
    ctaTo: "/faq",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="bg-primary py-14">
        <div className="container">
          <h1 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
            Our Services
          </h1>
          <p className="mt-2 max-w-2xl text-primary-foreground/70">
            TEPHCOM HR SOLUTIONS offers career opportunities, resume writing, and document verification.
            Payment is required before submitting any service request.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.id} id={service.id} className="rounded-xl border bg-card p-6 shadow-soft">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10">
                <service.icon className="h-5 w-5 text-accent" />
              </div>
              <h2 className="mt-4 font-display text-xl font-semibold">{service.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
              <div className="mt-4 rounded-lg bg-accent/10 p-3">
                <span className="text-sm text-muted-foreground">Service Fee</span>
                <p className="font-display text-2xl font-bold text-accent">{service.fee}</p>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {service.details.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={service.ctaTo}
                className="mt-5 inline-flex items-center rounded-lg bg-gradient-gold px-5 py-2.5 font-display font-semibold text-primary shadow-gold"
              >
                {service.ctaLabel}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-muted/50 py-12">
        <div className="container">
          <h2 className="font-display text-2xl font-bold">Payment Before Submission</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            All services on this platform follow a payment-first model. Complete payment via M-Pesa,
            then proceed with the final submission for the selected service.
          </p>
          <div className="mt-6 rounded-xl border bg-card p-6 shadow-soft">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 text-success" />
              <p className="text-sm text-muted-foreground">
                This process helps us validate serious requests, allocate HR resources effectively,
                and provide timely service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
