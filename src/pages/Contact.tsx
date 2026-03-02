import { Mail, MapPin, Phone, Send, Clock3 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="bg-primary py-14">
        <div className="container">
          <h1 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
            Contact TEPHCOM HR SOLUTIONS
          </h1>
          <p className="mt-2 max-w-2xl text-primary-foreground/70">
            Reach out for career opportunities, resume writing, document verification, and support.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container grid gap-6 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-1">
            <div className="rounded-xl border bg-card p-5 shadow-soft">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-accent" />
                <div>
                  <p className="font-display text-lg font-semibold">Email</p>
                  <a href="mailto:support@tephcomhr.com" className="text-sm text-muted-foreground hover:text-accent">
                    support@tephcomhr.com
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-5 shadow-soft">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-accent" />
                <div>
                  <p className="font-display text-lg font-semibold">Phone</p>
                  <a href="tel:+254700000000" className="text-sm text-muted-foreground hover:text-accent">
                    +254 700 000 000
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-5 shadow-soft">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-accent" />
                <div>
                  <p className="font-display text-lg font-semibold">Office</p>
                  <p className="text-sm text-muted-foreground">Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-5 shadow-soft">
              <div className="flex items-start gap-3">
                <Clock3 className="mt-0.5 h-5 w-5 text-accent" />
                <div>
                  <p className="font-display text-lg font-semibold">Working Hours</p>
                  <p className="text-sm text-muted-foreground">Mon - Fri, 8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border bg-card p-6 shadow-soft lg:col-span-2">
            <h2 className="font-display text-2xl font-bold">Send Us a Message</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill in your details and our team will respond as soon as possible.
            </p>

            <form className="mt-6 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Full Name</label>
                  <input
                    className="w-full rounded-lg border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Email Address</label>
                  <input
                    type="email"
                    className="w-full rounded-lg border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium">Subject</label>
                <input
                  className="w-full rounded-lg border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium">Message</label>
                <textarea
                  className="min-h-[140px] w-full rounded-lg border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Write your message..."
                />
              </div>

              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-gold px-6 py-3 font-display font-semibold text-primary shadow-gold"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
