import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-down">
              Build Amazing Projects Together
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up">
              Join our community of developers and create innovative solutions that
              make a difference.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors animate-fade-up"
            >
              Explore Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-16 px-4 bg-secondary">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="glass-card rounded-lg p-6 hover:scale-105 transition-transform duration-300 animate-fade-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <img
                    src={`https://images.unsplash.com/photo-148859052838${i}-4636190af475`}
                    alt={`Project ${i}`}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">Project Title {i}</h3>
                  <p className="text-muted-foreground mb-4">
                    A brief description of the project and its main features.
                  </p>
                  <Link
                    to={`/project/${i}`}
                    className="text-primary hover:underline inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our community today and start building amazing projects with
              developers from around the world.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
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