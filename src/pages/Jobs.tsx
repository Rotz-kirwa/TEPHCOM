import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";
import { SAMPLE_JOBS, JOB_LOCATIONS, JOB_TYPES, JOB_CATEGORIES } from "@/data/mockData";
import { Search, SlidersHorizontal } from "lucide-react";

const Jobs = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "";
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return SAMPLE_JOBS.filter((job) => {
      const matchSearch = !search || job.title.toLowerCase().includes(search.toLowerCase()) || job.company.toLowerCase().includes(search.toLowerCase());
      const matchCat = !category || job.category === category;
      const matchLoc = !location || job.location === location;
      const matchType = !type || job.type === type;
      return matchSearch && matchCat && matchLoc && matchType;
    });
  }, [search, category, location, type]);

  const selectClass = "w-full rounded-lg border bg-card px-3 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring";

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-primary py-12">
        <div className="container">
          <h1 className="font-display text-3xl font-bold text-primary-foreground">Browse Jobs</h1>
          <p className="mt-1 text-primary-foreground/60">Find verified opportunities across Kenya</p>
          <div className="mt-6 flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by title or company..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-lg border-0 bg-card py-3 pl-10 pr-4 text-sm shadow-soft outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 rounded-lg bg-accent/20 px-4 py-3 text-sm font-medium text-accent md:hidden"
            >
              <SlidersHorizontal className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="flex gap-8">
          {/* Filters sidebar */}
          <aside className={`w-64 shrink-0 space-y-4 ${showFilters ? "block" : "hidden"} md:block`}>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)} className={selectClass}>
                <option value="">All Categories</option>
                {JOB_CATEGORIES.map((c) => (
                  <option key={c.name} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Location</label>
              <select value={location} onChange={(e) => setLocation(e.target.value)} className={selectClass}>
                <option value="">All Locations</option>
                {JOB_LOCATIONS.map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Type</label>
              <select value={type} onChange={(e) => setType(e.target.value)} className={selectClass}>
                <option value="">All Types</option>
                {JOB_TYPES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            {(category || location || type) && (
              <button
                onClick={() => { setCategory(""); setLocation(""); setType(""); }}
                className="text-sm text-accent hover:underline"
              >
                Clear filters
              </button>
            )}
          </aside>

          {/* Job list */}
          <div className="flex-1 space-y-4">
            <p className="text-sm text-muted-foreground">{filtered.length} job{filtered.length !== 1 ? "s" : ""} found</p>
            {filtered.length === 0 ? (
              <div className="rounded-xl border bg-card p-12 text-center">
                <p className="text-muted-foreground">No jobs match your filters. Try adjusting your search.</p>
              </div>
            ) : (
              filtered.map((job) => <JobCard key={job.id} job={job} />)
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Jobs;
