import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Facebook, MessageCircle } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "owusudarlington2007@gmail.com",
      href: "mailto:owusudarlington2007@gmail.com",
      color: "primary"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+233 505164494",
      href: "tel:0505164494",
      color: "accent"
    }
  ];

  const socialLinks = [
    {
      icon: <Facebook className="w-6 h-6" />,
      label: "Facebook",
      href: "https://facebook.com",
      color: "primary"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: "WhatsApp",
      href: "https://wa.me/233505164494",
      color: "accent"
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you. Let's create something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((contact, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card border-border/50 hover:border-primary/50 transition-all hover:shadow-glow-primary group"
            >
              <a 
                href={contact.href}
                className="flex flex-col items-center text-center space-y-4 group"
              >
                <div className={`p-4 rounded-full bg-${contact.color}/10 group-hover:scale-110 transition-transform`}>
                  <div className="text-primary">
                    {contact.icon}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{contact.label}</h3>
                  <p className="text-lg text-foreground/80 group-hover:text-primary transition-colors">
                    {contact.value}
                  </p>
                </div>
              </a>
            </Card>
          ))}
        </div>

        <div className="space-y-6 text-center">
          <h3 className="text-2xl font-semibold">Connect With Me</h3>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary transition-all hover:scale-110"
                asChild
              >
                <a 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  {social.icon}
                  {social.label}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
