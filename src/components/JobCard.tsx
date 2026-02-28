import { type Job } from "@/data/types";
import { MapPin, Clock, Building2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  const daysAgo = Math.floor((Date.now() - new Date(job.createdAt).getTime()) / 86400000);

  return (
    <Link
      to={`/jobs/${job.id}`}
      className="group block rounded-xl border bg-card p-6 shadow-soft transition-all hover:shadow-medium hover:-translate-y-0.5"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
              {job.category}
            </span>
            <span className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
              {job.type}
            </span>
          </div>
          <h3 className="mt-3 font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
            {job.title}
          </h3>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Building2 className="h-3.5 w-3.5" />
              {job.company}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {job.location}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {daysAgo === 0 ? "Today" : `${daysAgo}d ago`}
            </span>
          </div>
        </div>
        <div className="ml-4 flex flex-col items-end gap-2">
          <span className="font-display text-lg font-bold text-accent">
            KSh {job.feeAmount}
          </span>
          <span className="text-xs text-muted-foreground">application fee</span>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="line-clamp-1 text-sm text-muted-foreground">{job.description}</p>
        <ArrowRight className="ml-2 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent" />
      </div>
    </Link>
  );
};

export default JobCard;
