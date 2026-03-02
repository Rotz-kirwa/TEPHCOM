import { useState } from "react";
import { BarChart3, Briefcase, Users, CreditCard, Settings, LogOut, Plus, Download, Eye } from "lucide-react";
import { SAMPLE_JOBS } from "@/data/mockData";
import { Link } from "react-router-dom";

const LOGO_URL =
  "https://www.dropbox.com/scl/fi/713p3qs8nexichyfjw8b5/TEPH.jpeg?rlkey=yny7dssjx4apils4b7359ocom&st=hsdhzxmq&raw=1";

type AdminTab = "dashboard" | "jobs" | "applications" | "payments" | "settings";

const mockApplications = [
  { id: "A1", jobTitle: "Senior Software Engineer", applicant: "Jane Wanjiku", email: "jane@mail.com", phone: "254712345678", status: "Received" as const, paidAt: "2026-02-27", fee: 500 },
  { id: "A2", jobTitle: "Marketing Manager", applicant: "Peter Ochieng", email: "peter@mail.com", phone: "254798765432", status: "Shortlisted" as const, paidAt: "2026-02-26", fee: 300 },
  { id: "A3", jobTitle: "UX Designer", applicant: "Amina Hassan", email: "amina@mail.com", phone: "254701234567", status: "Received" as const, paidAt: "2026-02-27", fee: 200 },
];

const Admin = () => {
  const [tab, setTab] = useState<AdminTab>("dashboard");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  if (!isLoggedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-muted/50">
        <div className="w-full max-w-sm rounded-xl border bg-card p-8 shadow-medium">
          <div className="text-center">
            <img
              src={LOGO_URL}
              alt="TEPHCOM HR SOLUTIONS logo"
              className="mx-auto h-16 w-24 rounded-md bg-white p-1 object-contain"
            />
            <h1 className="mt-4 font-display text-2xl font-bold">Admin Login</h1>
            <p className="mt-1 text-sm text-muted-foreground">TEPHCOM HR Admin Portal</p>
          </div>
          <div className="mt-6 space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium">Email</label>
              <input
                className="w-full rounded-lg border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                type="email"
                value={loginForm.email}
                onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                placeholder="admin@tephcomhr.com"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Password</label>
              <input
                className="w-full rounded-lg border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                type="password"
                value={loginForm.password}
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                placeholder="••••••••"
              />
            </div>
            <button
              onClick={() => setIsLoggedIn(true)}
              className="w-full rounded-lg bg-primary py-3 font-display font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              Sign In
            </button>
          </div>
          <Link to="/" className="mt-4 block text-center text-sm text-accent hover:underline">← Back to website</Link>
        </div>
      </div>
    );
  }

  const navItems: { key: AdminTab; icon: React.ElementType; label: string }[] = [
    { key: "dashboard", icon: BarChart3, label: "Dashboard" },
    { key: "jobs", icon: Briefcase, label: "Jobs" },
    { key: "applications", icon: Users, label: "Applications" },
    { key: "payments", icon: CreditCard, label: "Payments" },
    { key: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-sidebar p-4">
        <div className="flex items-center gap-2 px-2 font-display text-lg font-bold text-sidebar-foreground">
          <img
            src={LOGO_URL}
            alt="TEPHCOM HR SOLUTIONS logo"
            className="h-8 w-12 rounded bg-white p-1 object-contain"
          />
          TEPHCOM HR
        </div>
        <nav className="mt-6 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setTab(item.key)}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                tab === item.key
                  ? "bg-sidebar-accent text-sidebar-primary"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}
        </nav>
        <button
          onClick={() => setIsLoggedIn(false)}
          className="mt-auto flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-foreground/50 hover:text-sidebar-foreground"
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </button>
      </aside>

      {/* Content */}
      <main className="flex-1 bg-background p-8">
        {tab === "dashboard" && (
          <div>
            <h1 className="font-display text-2xl font-bold">Dashboard</h1>
            <div className="mt-6 grid gap-4 md:grid-cols-4">
              {[
                { label: "Active Jobs", value: SAMPLE_JOBS.length, color: "bg-accent/10 text-accent" },
                { label: "Applications Today", value: 12, color: "bg-success/10 text-success" },
                { label: "Paid Applications", value: 8, color: "bg-success/10 text-success" },
                { label: "Revenue Today", value: "KSh 3,200", color: "bg-accent/10 text-accent" },
              ].map((stat, i) => (
                <div key={i} className="rounded-xl border bg-card p-5 shadow-soft">
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                  <p className="mt-1 font-display text-2xl font-bold">{stat.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h2 className="font-display text-lg font-semibold">Recent Applications</h2>
              <div className="mt-4 overflow-hidden rounded-xl border">
                <table className="w-full text-sm">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-4 py-3 text-left font-medium text-muted-foreground">Applicant</th>
                      <th className="px-4 py-3 text-left font-medium text-muted-foreground">Job</th>
                      <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
                      <th className="px-4 py-3 text-left font-medium text-muted-foreground">Fee</th>
                      <th className="px-4 py-3 text-left font-medium text-muted-foreground">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockApplications.map((app) => (
                      <tr key={app.id} className="border-t">
                        <td className="px-4 py-3 font-medium">{app.applicant}</td>
                        <td className="px-4 py-3 text-muted-foreground">{app.jobTitle}</td>
                        <td className="px-4 py-3">
                          <span className="rounded-full bg-success/10 px-2.5 py-1 text-xs font-medium text-success">{app.status}</span>
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">KSh {app.fee}</td>
                        <td className="px-4 py-3 text-muted-foreground">{app.paidAt}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {tab === "jobs" && (
          <div>
            <div className="flex items-center justify-between">
              <h1 className="font-display text-2xl font-bold">Manage Jobs</h1>
              <button className="flex items-center gap-2 rounded-lg bg-gradient-gold px-4 py-2.5 text-sm font-semibold text-primary shadow-gold">
                <Plus className="h-4 w-4" /> Add Job
              </button>
            </div>
            <div className="mt-6 overflow-hidden rounded-xl border">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Title</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Company</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Fee</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {SAMPLE_JOBS.map((job) => (
                    <tr key={job.id} className="border-t">
                      <td className="px-4 py-3 font-medium">{job.title}</td>
                      <td className="px-4 py-3 text-muted-foreground">{job.company}</td>
                      <td className="px-4 py-3 text-muted-foreground">KSh {job.feeAmount}</td>
                      <td className="px-4 py-3">
                        <span className="rounded-full bg-success/10 px-2.5 py-1 text-xs font-medium text-success">Active</span>
                      </td>
                      <td className="px-4 py-3">
                        <button className="text-accent hover:underline text-xs">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {tab === "applications" && (
          <div>
            <div className="flex items-center justify-between">
              <h1 className="font-display text-2xl font-bold">Applications</h1>
              <button className="flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground">
                <Download className="h-4 w-4" /> Export CSV
              </button>
            </div>
            <div className="mt-6 overflow-hidden rounded-xl border">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Applicant</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Job</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Email</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockApplications.map((app) => (
                    <tr key={app.id} className="border-t">
                      <td className="px-4 py-3 font-medium">{app.applicant}</td>
                      <td className="px-4 py-3 text-muted-foreground">{app.jobTitle}</td>
                      <td className="px-4 py-3 text-muted-foreground">{app.email}</td>
                      <td className="px-4 py-3">
                        <span className="rounded-full bg-success/10 px-2.5 py-1 text-xs font-medium text-success">{app.status}</span>
                      </td>
                      <td className="px-4 py-3 flex gap-2">
                        <button className="text-accent hover:underline text-xs flex items-center gap-1"><Eye className="h-3 w-3" />View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {tab === "payments" && (
          <div>
            <h1 className="font-display text-2xl font-bold">Payments Log</h1>
            <div className="mt-6 overflow-hidden rounded-xl border">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Phone</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Amount</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Receipt</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {mockApplications.map((app, i) => (
                    <tr key={i} className="border-t">
                      <td className="px-4 py-3 font-medium">{app.phone}</td>
                      <td className="px-4 py-3 text-muted-foreground">KSh {app.fee}</td>
                      <td className="px-4 py-3 text-muted-foreground">QKJ{Math.random().toString(36).slice(2, 8).toUpperCase()}</td>
                      <td className="px-4 py-3">
                        <span className="rounded-full bg-success/10 px-2.5 py-1 text-xs font-medium text-success">PAID</span>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{app.paidAt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {tab === "settings" && (
          <div>
            <h1 className="font-display text-2xl font-bold">Settings</h1>
            <div className="mt-6 max-w-lg space-y-6">
              <div className="rounded-xl border bg-card p-6 shadow-soft">
                <h3 className="font-display font-semibold">Global Application Fee</h3>
                <p className="mt-1 text-sm text-muted-foreground">Default fee for jobs without a custom fee</p>
                <input className="mt-3 w-full rounded-lg border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring" defaultValue="300" />
              </div>
              <div className="rounded-xl border bg-card p-6 shadow-soft">
                <h3 className="font-display font-semibold">M-Pesa Callback URL</h3>
                <p className="mt-1 text-sm text-muted-foreground">Daraja API callback endpoint</p>
                <input className="mt-3 w-full rounded-lg border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring" defaultValue="https://api.ajiraconnect.co.ke/mpesa/callback" readOnly />
              </div>
              <div className="rounded-xl border bg-card p-6 shadow-soft">
                <h3 className="font-display font-semibold">Accepted File Types</h3>
                <p className="mt-1 text-sm text-muted-foreground">Allowed CV upload formats</p>
                <input className="mt-3 w-full rounded-lg border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring" defaultValue=".pdf, .doc, .docx" />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;
