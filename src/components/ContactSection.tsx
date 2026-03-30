import { motion, useInView } from "framer-motion";
import { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { personalInfo, emailjsConfig } from "@/data/portfolio-data";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);
    try {
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        emailjsConfig.publicKey,
      );
      toast({
        title: "Message sent! ✨",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      formRef.current.reset();
    } catch {
      toast({
        title: "Oops!",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  const contactDetails = [
    { icon: Mail, label: personalInfo.email },
    { icon: Phone, label: personalInfo.phone },
    { icon: MapPin, label: personalInfo.location },
  ];

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-2">
            Let's Connect
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold gradient-text">
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            className="md:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <p className="text-muted-foreground font-body text-lg">
              Have a project in mind or just want to say hi? Feel free to reach
              out!
            </p>
            {contactDetails.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <item.icon size={20} className="text-primary-foreground" />
                </div>
                <span className="text-foreground font-body">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="md:col-span-3 glass-card glow-border rounded-2xl p-8 space-y-5"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-body text-muted-foreground mb-1 block">
                  Name
                </label>
                <input
                  name="user_name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground font-body focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="text-sm font-body text-muted-foreground mb-1 block">
                  Email
                </label>
                <input
                  name="user_email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground font-body focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-body text-muted-foreground mb-1 block">
                Subject
              </label>
              <input
                name="subject"
                required
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground font-body focus:outline-none focus:border-primary transition-colors"
                placeholder="Subject"
              />
            </div>
            <div>
              <label className="text-sm font-body text-muted-foreground mb-1 block">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground font-body focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Message"
              />
            </div>
            <motion.button
              type="submit"
              disabled={sending}
              className="w-full py-3 rounded-lg font-heading font-semibold text-primary-foreground flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
              style={{ background: "var(--gradient-primary)" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {sending ? "Sending..." : "Send Message"}
              <Send size={18} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
