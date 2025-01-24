import { ArrowRight, Code, Cpu, Database, Network } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Software Development",
      description:
        "Tailored solutions built to address your specific business needs.",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database Management",
      description:
        "Efficient data storage and retrieval systems for your applications.",
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment services.",
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "System Integration",
      description:
        "Seamless integration of different systems and technologies.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow snap-y snap-mandatory overflow-y-auto">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center snap-start animate-fade-in">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1518770660439-4636190af475')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="container mx-auto relative z-10 px-4">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-down">
                Driving Innovation Through Software.
              </h1>
              <p className="text-xl text-white/90 mb-8 animate-fade-up delay-200">
                We specialize in transforming complex challenges into elegant
                solutions, driving technological advancement one project at a
                time.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-white text-black hover:bg-white/90 transition-colors animate-fade-up delay-300"
              >
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="min-h-screen py-20 bg-gray-50 snap-start">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 animate-fade-down">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="mb-4 text-primary">{service.icon}</div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="min-h-screen py-16 px-4 snap-start">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 animate-fade-down">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up delay-100">
              Join our community today and start building amazing projects with
              developers from around the world.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1 animate-fade-up delay-200"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
