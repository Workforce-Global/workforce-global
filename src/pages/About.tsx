import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const team = [
    {
      name: "Harrison Ankah",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81", // TODO: Replace with actual team member image
      socials: ["twitter", "linkedin", "github"]
    },
    {
      name: "Mark Agyemang",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c", // TODO: Replace with actual team member image
      socials: ["twitter", "dribbble"]
    },
    {
      name: "Janet Frimpong",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158", // TODO: Replace with actual team member image
      socials: ["linkedin", "twitter", "github"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-16">
          <section className="mb-20 animate-fade-up">
            <div className="glass-card rounded-xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold">
                  Innovative Futures, One Project At A Time
                </h1>
                <p className="text-muted-foreground text-lg">
                  At Wikie Projects, we are dedicated to help shape innovation. Our team of dedicated innovators is committed to transforming inspiring ideas into reality, one project at a time. We believe in creating solutions that make a real difference.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To drive innovation through technology and create impactful solutions that transform businesses and enhance lives.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Our Values</h3>
                    <ul className="text-muted-foreground list-disc list-inside">
                      <li>Innovation First</li>
                      <li>Quality Delivery</li>
                      <li>Client Success</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <img 
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" // TODO: Replace with actual hero image
                  alt="Team working together"
                  className="rounded-lg w-full h-auto object-cover animate-fade-in"
                />
              </div>
            </div>
          </section>

          <section className="animate-fade-up delay-200">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team Of Experts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={member.name} className="hover:scale-105 transition-transform duration-300">
                  <CardHeader className="text-center">
                    <Avatar className="w-32 h-32 mx-auto mb-4">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.name[0]}</AvatarFallback>
                    </Avatar>
                    <CardTitle>{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">{member.role}</p>
                    <div className="flex justify-center gap-4 mt-4">
                      {member.socials.map((social) => (
                        <a
                          key={social}
                          href="#"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {social}
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
