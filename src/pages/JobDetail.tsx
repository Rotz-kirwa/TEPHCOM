import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SAMPLE_JOBS } from "@/data/mockData";
import { MapPin, Clock, Building2, ArrowLeft, Smartphone } from "lucide-react";

const JobDetail = () => {
  const { id } = useParams();
  const job = SAMPLE_JOBS.find((j) => j.id === id);

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

  const daysAgo = Math.floor((Date.now() - new Date(job.createdAt).getTime()) / 86400000);

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="bg-primary py-12">
        <div className="container">
          <Link to="/jobs" className="inline-flex items-center gap-1 text-sm text-primary-foreground/60 hover:text-primary-foreground">
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Jobs
          </Link>
          <h1 className="mt-4 font-display text-3xl font-bold text-primary-foreground md:text-4xl">{job.title}</h1>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-primary-foreground/60">
            <span className="flex items-center gap-1"><Building2 className="h-4 w-4" />{job.company}</span>
            <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{job.location}</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{daysAgo === 0 ? "Today" : `${daysAgo} days ago`}</span>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <span className="rounded-md bg-accent/20 px-3 py-1 text-sm font-medium text-accent">{job.category}</span>
            <span className="rounded-md bg-primary-foreground/10 px-3 py-1 text-sm font-medium text-primary-foreground/80">{job.type}</span>
          </div>
        </div>
      </div>

      <div className="container py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="font-display text-xl font-semibold">Description</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{job.description}</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold">Requirements</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{job.requirements}</p>
            </section>
          </div>

          {/* Apply sidebar */}
          <div>
            <div className="sticky top-24 rounded-xl border bg-card p-6 shadow-soft">
              <h3 className="font-display text-lg font-semibold">Apply for this Job</h3>
              <div className="mt-4 rounded-lg bg-accent/10 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Application Fee</span>
                  <span className="font-display text-2xl font-bold text-accent">KSh {job.feeAmount}</span>
                </div>
                <p className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                  <Smartphone className="h-3 w-3" />
                  Paid via M-Pesa STK Push
                </p>
              </div>
              <Link
                to={`/apply/${job.id}`}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-gold px-6 py-3 font-display font-semibold text-primary shadow-gold transition-all hover:opacity-90"
              >
                Apply Now
              </Link>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                You'll pay the application fee via M-Pesa before submitting.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JobDetail;
