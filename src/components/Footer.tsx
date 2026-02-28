import { Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t bg-primary text-primary-foreground">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
            <Briefcase className="h-5 w-5" />
            AjiraConnect
          </Link>
          <p className="mt-3 text-sm opacity-70">
            Kenya's trusted job platform. Find your next career opportunity with verified employers.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold">Job Seekers</h4>
          <ul className="mt-3 space-y-2 text-sm opacity-70">
            <li><Link to="/jobs" className="hover:opacity-100">Browse Jobs</Link></li>
            <li><Link to="/faq" className="hover:opacity-100">How to Apply</Link></li>
            <li><Link to="/faq" className="hover:opacity-100">Payment FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold">Company</h4>
          <ul className="mt-3 space-y-2 text-sm opacity-70">
            <li><Link to="/faq" className="hover:opacity-100">About Us</Link></li>
            <li><Link to="/faq" className="hover:opacity-100">Contact</Link></li>
            <li><Link to="/faq" className="hover:opacity-100">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold">Payment</h4>
          <p className="mt-3 text-sm opacity-70">
            Secure payments via M-Pesa STK Push. Your application fee supports verified job postings.
          </p>
        </div>
      </div>
      <div className="mt-8 border-t border-primary-foreground/10 pt-6 text-center text-sm opacity-50">
        © 2026 AjiraConnect. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
