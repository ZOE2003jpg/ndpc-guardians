import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Their audit methodology helped us achieve 100% NDPA compliance readiness — without disrupting operations.",
    author: "COO, Healthcare Group",
    company: "Lagos Medical Center",
    rating: 5
  },
  {
    quote: "The practical training sessions improved employee awareness overnight. Highly recommended for any organization serious about data protection.",
    author: "HR Manager, Financial Institution",
    company: "First Bank Nigeria",
    rating: 5
  },
  {
    quote: "From registration to ongoing monitoring, they made NDPA compliance straightforward and affordable for our SME.",
    author: "CEO, Tech Startup",
    company: "PayTech Solutions",
    rating: 5
  },
  {
    quote: "The self-assessment tool helped us identify critical gaps before they became regulatory issues. Excellent proactive approach.",
    author: "Data Protection Officer",
    company: "Telecommunications Nigeria",
    rating: 5
  },
  {
    quote: "Professional, knowledgeable, and results-oriented. They transformed our data handling processes completely.",
    author: "CISO, Manufacturing Company",
    company: "Nigerian Industrials Ltd",
    rating: 5
  }
];

export function TestimonialsCarousel() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Are Saying
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by industry leaders across Nigeria for NDPA compliance excellence
          </p>
        </div>
        
        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-border/50">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-trust text-trust" />
                      ))}
                    </div>
                    
                    <blockquote className="text-sm leading-relaxed mb-6 flex-grow italic">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="mt-auto">
                      <cite className="not-italic">
                        <div className="font-semibold text-sm text-primary">
                          {testimonial.author}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {testimonial.company}
                        </div>
                      </cite>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}