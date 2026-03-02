import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";
import { SAMPLE_JOBS, JOB_CATEGORIES } from "@/data/mockData";
import { ArrowRight, FileCheck2, FileText, Globe2, Search, Shield, Smartphone, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredJobs = SAMPLE_JOBS.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section
        className="relative overflow-hidden py-24 md:py-32"
        style={{
          backgroundImage:
            "linear-gradient(hsl(220 18% 18% / 0.78), hsl(220 18% 18% / 0.72)), url('https://i.pinimg.com/1200x/a5/03/6d/a5036de81ea68c006df932a80b8a1c8d.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(38 80% 52% / 0.3) 0%, transparent 50%)" }} />
        </div>
        <div className="container relative">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent">
              <Smartphone className="h-3.5 w-3.5" />
              TEPHCOM HR SOLUTIONS
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-primary-foreground md:text-6xl">
              Global Opportunities,
              <span className="text-gradient-gold"> Trusted HR </span>
              Support
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/70 md:text-xl">
              We are an HR and recruiting agency helping candidates apply for roles that match their specialization, with secure payment before submission for every service.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/jobs"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-gold px-6 py-3 font-display font-semibold text-primary shadow-gold transition-all hover:opacity-90"
              >
                Browse Jobs
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/faq"
                className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-6 py-3 font-display font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-center font-display text-3xl font-bold">How TEPHCOM Works</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { icon: Search, title: "Select a Service", desc: "Choose job applications, resume writing, or document verification." },
              { icon: Smartphone, title: "Pay Securely", desc: "Complete payment first via M-Pesa before your request is submitted." },
              { icon: Shield, title: "Get Expert Support", desc: "Our HR team processes your request professionally and promptly." },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-card p-6 text-center shadow-soft animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <h2 className="font-display text-3xl font-bold">Services Offered</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Every service requires payment before submission.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { icon: Globe2, title: "Career Opportunities", fee: "KES 500", desc: "Apply for advertised job opportunities across the world." },
              { icon: FileText, title: "Resume Writing", fee: "KES 200", desc: "Get a professional resume tailored to your specialization." },
              { icon: FileCheck2, title: "Document Verification", fee: "KES 200/document", desc: "Verify your documents before employer submission." },
            ].map((service, i) => (
              <div key={i} className="rounded-xl border bg-card p-6 shadow-soft">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <service.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.desc}</p>
                <p className="mt-4 text-sm font-semibold text-accent">Fee: {service.fee}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-display text-3xl font-bold">Job Categories</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {JOB_CATEGORIES.map((cat) => (
              <Link
                key={cat.name}
                to={`/jobs?category=${encodeURIComponent(cat.name)}`}
                className="group rounded-xl border bg-card p-4 text-center shadow-soft transition-all hover:shadow-medium hover:-translate-y-0.5"
              >
                <span className="text-2xl">{cat.icon}</span>
                <h4 className="mt-2 font-display text-sm font-semibold group-hover:text-accent transition-colors">{cat.name}</h4>
                <span className="text-xs text-muted-foreground">{cat.count} jobs</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <h2 className="font-display text-3xl font-bold">Why Choose Us</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              "Specialized HR and recruiting support for diverse industries.",
              "Transparent payment structure before any submission starts.",
              "Global job opportunity reach matched to your area of expertise.",
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-card p-6 shadow-soft">
                <h3 className="font-display text-lg font-semibold">Reason {i + 1}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-3xl font-bold">Featured Jobs</h2>
            <Link to="/jobs" className="text-sm font-medium text-accent hover:underline">
              View all →
            </Link>
          </div>
          <div className="mt-8 space-y-4">
            {featuredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-display text-3xl font-bold">Testimonials</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { name: "Linet N.", text: "TEPHCOM helped me secure interviews quickly and guided me through every step." },
              { name: "Brian K.", text: "My resume rewrite was excellent and recruiter-ready within a short time." },
              { name: "Aisha M.", text: "Document verification was fast and gave me confidence before applying." },
            ].map((t, i) => (
              <div key={i} className="rounded-xl border bg-card p-6 shadow-soft">
                <Star className="h-5 w-5 text-accent" />
                <p className="mt-3 text-sm text-muted-foreground">{t.text}</p>
                <p className="mt-4 text-sm font-semibold">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
