import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";
import { SAMPLE_JOBS, JOB_CATEGORIES } from "@/data/mockData";
import { ArrowRight, Search, Shield, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredJobs = SAMPLE_JOBS.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(38 80% 52% / 0.3) 0%, transparent 50%)" }} />
        </div>
        <div className="container relative">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent">
              <Smartphone className="h-3.5 w-3.5" />
              Pay & Apply via M-Pesa
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-primary-foreground md:text-6xl">
              Find Your Next
              <span className="text-gradient-gold"> Career </span>
              in Kenya
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/70 md:text-xl">
              Browse verified job opportunities from top Kenyan companies. Apply seamlessly with M-Pesa payment — your gateway to your dream role.
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
          <h2 className="text-center font-display text-3xl font-bold">How AjiraConnect Works</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { icon: Search, title: "Find a Job", desc: "Browse and filter hundreds of verified openings across Kenya." },
              { icon: Smartphone, title: "Pay via M-Pesa", desc: "Small application fee paid instantly via STK Push on your phone." },
              { icon: Shield, title: "Apply Securely", desc: "Your application is submitted only after verified payment." },
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

      {/* Categories */}
      <section className="bg-muted/50 py-16">
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

      <Footer />
    </div>
  );
};

export default Index;
