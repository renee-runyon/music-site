import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/Button";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sheilaveemusic@gmail.com",
    href: "mailto:sheilaveemusic@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Northern New Jersey",
    href: "#",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);

      setSubmitStatus({
        type: "error",
        message:
          error.text || "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-x-hidden overflow-y-hidden bg-gradient-to-b from-black via-black/1 to-black/0 py-24 md:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 w-full">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 bg-highlight/5 blur-3xl" />
      </div>

      {/* One centered wrapper for the entire section */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 w-full max-w-3xl text-center md:mb-20">
          <div className="mb-8 animate-fade-in">
            <span className="block text-sm uppercase tracking-[0.3em] text-[#5d9dff]">
              Contact
            </span>
          </div>

          <h2 className="section-title animate-fade-in text-4xl font-bold uppercase tracking-tight text-white animation-delay-100 md:text-6xl">
            Let's connect.
          </h2>

          <div className="mt-6 animate-fade-in text-lg leading-relaxed text-white/70 animation-delay-200">
            <p>
              Whether you’re booking a venue, writing about the music, or
              reaching out as a fan or collaborator, this goes straight to
              Sheila.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto grid w-full max-w-5xl min-w-0 grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact Form */}
          <div className="glass min-w-0 border border-primary/30 p-6 animate-fade-in sm:p-8 animation-delay-300">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="w-full min-w-0 border border-border bg-surface px-4 py-3 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="w-full min-w-0 border border-border bg-surface px-4 py-3 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className="w-full min-w-0 resize-none border border-border bg-surface px-4 py-3 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <Button
                className="w-full"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="h-5 w-5" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-start gap-3 p-4 ${
                    submitStatus.type === "success"
                      ? "border border-green-500/20 bg-green-500/10 text-green-400"
                      : "border border-red-500/20 bg-red-500/10 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                  )}

                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Right Column */}
          <div className="min-w-0 space-y-6 animate-fade-in animation-delay-400">
            {/* Contact Information */}
            <div className="glass p-6 sm:p-8">
              <h3 className="mb-6 text-xl font-semibold">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex min-w-0 items-center gap-4 p-4 transition-colors hover:bg-surface"
                    >
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-primary/10 transition-colors hover:bg-primary/20">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>

                      <div className="min-w-0">
                        <div className="text-sm text-muted-foreground">
                          {item.label}
                        </div>

                        <div className="break-words font-medium">
                          {item.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass border border-primary/30 p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-3 w-3 animate-pulse rounded-full bg-[#029500]" />
                <span className="font-medium">I'm Available!</span>
              </div>

              <p className="text-sm text-muted-foreground">
                I'm currently open to new opportunities and exciting projects.
                Whether you need a solo musician or a full band, let's talk!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
