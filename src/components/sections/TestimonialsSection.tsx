import { useState, useEffect, useCallback } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "The opportunity gave me a real problem to work on, a team to learn with, and feedback I could use immediately. I left with more confidence and a clearer direction.",
    name: "Ama Boateng",
    company: "Workforce Global Community",
    position: "Opportunity Participant",
    rating: 5,
    avatar: "AB",
    bg: "from-gold/10 to-transparent",
  },
  {
    quote:
      "The challenge helped us discover three strong ideas while giving participants a supportive place to practice collaboration and presenting their work.",
    name: "David Mensah",
    company: "Community Partner",
    position: "Program Facilitator",
    rating: 5,
    avatar: "DM",
    bg: "from-blue-900/20 to-transparent",
  },
  {
    quote:
      "I came in with a rough idea and left with a tested prototype, useful feedback, and new collaborators. The process made learning feel active and possible.",
    name: "Sarah Osei",
    company: "Learning Community",
    position: "Participant",
    rating: 5,
    avatar: "SO",
    bg: "from-emerald-900/20 to-transparent",
  },
  {
    quote:
      "The program gave learners a practical way to build, reflect, and share their work. It created momentum that continued well beyond the final session.",
    name: "Prof. Kwame Asante",
    company: "University Community",
    position: "Learning Program Partner",
    rating: 5,
    avatar: "KA",
    bg: "from-purple-900/20 to-transparent",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [autoPlay, next]);

  return (
    <section id="testimonials" className="py-28 bg-card relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.035] blur-[120px] bg-gold pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`reveal ${headerVisible ? "visible" : ""} mb-16 text-center max-w-2xl mx-auto`}
        >
          <span className="section-label block mb-4">Community Voices</span>
          <div className="gold-line mx-auto" />
          <h2 className="section-heading mb-5">What People Gain From Participating</h2>
        </div>

        {/* Carousel */}
        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          {/* Card */}
          <div className="testimonial-card relative overflow-hidden">
            {/* Quote icon */}
            <Quote
              size={48}
              className="absolute top-6 right-8 text-gold/10"
              aria-hidden="true"
            />

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} size={16} className="text-gold fill-gold" />
              ))}
            </div>

            {/* Quote */}
            <blockquote
              className="text-xl md:text-2xl text-foreground leading-relaxed font-manrope font-medium mb-8"
              style={{ fontStyle: "normal" }}
            >
              "{testimonials[current].quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-jet shrink-0"
                style={{ background: "linear-gradient(135deg, #D4B57A, #C6A15B)" }}
              >
                {testimonials[current].avatar}
              </div>
              <div>
                <div className="font-semibold text-foreground font-manrope">
                  {testimonials[current].name}
                </div>
                <div
                  className="text-xs text-muted-foreground"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {testimonials[current].position} · {testimonials[current].company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-gold" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:border-gold/30 hover:text-gold transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:border-gold/30 hover:text-gold transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
