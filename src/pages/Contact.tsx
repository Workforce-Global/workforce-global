import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    toast.success("Message sent successfully!");
    reset();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="glass-card rounded-xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fade-up">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Please Get In Touch Let's Talk
            </h1>
            <p className="text-muted-foreground text-lg">
              Have a project in mind? Want to collaborate? Or just want to say hi? We'd love to hear from you!
            </p>
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" // TODO: Replace with actual contact image
              alt="Contact us"
              className="rounded-lg w-full h-auto object-cover animate-fade-in"
            />
          </div>

          <Card className="p-6 animate-slide-in">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
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
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors"
              >
                Send Message
              </button>
            </form>
          </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
