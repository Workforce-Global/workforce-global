import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone } from "lucide-react";
import emailjs from "emailjs-com";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const templateParams = {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        message: data.message,
        bcc_email: "rodneyhagan74@gmail.com,aliodimekitonima@gmail.com",
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Replace with your EmailJS Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Replace with your EmailJS Template ID
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Replace with your EmailJS Public Key
      );

      if (response.status === 200) {
        toast.success("Message sent successfully!");
        reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        <section className="min-h-screen bg-background">
          <div className="section-content">
            <h1 className="section-title">Get In Touch</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="p-6 glass-card animate-fade-up">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="firstName"
                        className="text-sm font-medium"
                      >
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        {...register("firstName", { required: true })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        {...register("lastName", { required: true })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      {...register("email", { required: true })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      className="min-h-[150px]"
                      {...register("message", { required: true })}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8 animate-fade-up delay-100">
                <div>
                  <h2 className="text-2xl font-bold mb-6">
                    Contact Information
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Have a project in mind? Want to collaborate? Or just want to
                    say hi? We'd love to hear from you!
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Our Location</h3>
                      <p className="text-muted-foreground">
                        1-6 Drake Avenue, Airport Residential Area, Accra, Ghana
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Email Us</h3>
                      <p className="text-muted-foreground">
                        gl.workforce@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Call Us</h3>
                      <p className="text-muted-foreground">(+233) 0537066043</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
