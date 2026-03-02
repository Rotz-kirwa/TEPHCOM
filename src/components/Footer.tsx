import { Link } from "react-router-dom";

const LOGO_URL =
  "https://www.dropbox.com/scl/fi/713p3qs8nexichyfjw8b5/TEPH.jpeg?rlkey=yny7dssjx4apils4b7359ocom&st=hsdhzxmq&raw=1";

const Footer = () => (
  <footer className="border-t bg-primary text-primary-foreground">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
            <img
              src={LOGO_URL}
              alt="TEPHCOM HR SOLUTIONS logo"
              className="h-9 w-14 rounded bg-white p-1 object-contain"
            />
            TEPHCOM HR SOLUTIONS
          </Link>
          <p className="mt-3 text-sm opacity-70">
            HR and recruiting agency connecting candidates to opportunities across the world.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold">Services</h4>
          <ul className="mt-3 space-y-2 text-sm opacity-70">
            <li><Link to="/services#career" className="hover:opacity-100">Career Opportunities</Link></li>
            <li><Link to="/services#resume" className="hover:opacity-100">Resume Writing</Link></li>
            <li><Link to="/services#verification" className="hover:opacity-100">Document Verification</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold">Company</h4>
          <ul className="mt-3 space-y-2 text-sm opacity-70">
            <li><Link to="/faq" className="hover:opacity-100">About Us</Link></li>
            <li><Link to="/contact" className="hover:opacity-100">Contact</Link></li>
            <li><Link to="/faq" className="hover:opacity-100">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold">Payment</h4>
          <ul className="mt-3 space-y-2 text-sm opacity-70">
            <li>Job application: KES 500</li>
            <li>Document verification: KES 200/document</li>
            <li>Resume writing: KES 200</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-primary-foreground/10 pt-6 text-center text-sm opacity-50">
        © 2026 TEPHCOM HR SOLUTIONS. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
