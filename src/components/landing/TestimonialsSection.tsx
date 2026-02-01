import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Marie Dupont",
    role: "CEO",
    company: "SaaSFlow",
    avatar: "MD",
    content: "En 3 mois, Reddit est devenu notre 2ème source d'acquisition. Les leads sont ultra qualifiés car ils viennent à nous après avoir vu notre expertise.",
    stars: 5,
  },
  {
    name: "Thomas Bernard",
    role: "Head of Growth",
    company: "DataSync",
    avatar: "TB",
    content: "L'approche organique a complètement changé notre perception du marketing. Zéro spam, que de la valeur. Notre CAC a baissé de 40%.",
    stars: 5,
  },
  {
    name: "Sophie Laurent",
    role: "Fondatrice",
    company: "CloudMetrics",
    avatar: "SL",
    content: "Je recommande sans hésitation. L'équipe comprend vraiment les codes de Reddit et sait créer du contenu qui résonne avec notre audience B2B.",
    stars: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6">
            <Quote className="w-4 h-4" />
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ce que nos clients disent
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des SaaS qui ont transformé Reddit en machine à leads qualifiés
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection 
              key={testimonial.name} 
              delay={100 + index * 100}
              animation="fade-up"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.stars }).map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 fill-primary text-primary" 
                      />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="flex-1 text-muted-foreground leading-relaxed mb-6">
                    "{testimonial.content}"
                  </blockquote>
                  
                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-sm font-semibold text-primary">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} @ {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
