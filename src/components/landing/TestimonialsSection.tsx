import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import mateoAvatarAsset from "@/assets/mateo-avatar.png";
const mateoAvatar = typeof mateoAvatarAsset === 'string' ? mateoAvatarAsset : mateoAvatarAsset.src;
export const TestimonialsSection = () => {
  return <section className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
            <Quote className="w-4 h-4" />
            Témoignage client
          </span>
        </AnimatedSection>

        <AnimatedSection delay={100} animation="fade-up">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
            <CardContent className="p-8 md:p-12 flex flex-col items-center text-center">
              {/* Quote icon */}
              <Quote className="w-12 h-12 text-primary/30 mb-6" />
              
              {/* Testimonial text */}
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 max-w-2xl">"En 3 mois, Reddit est devenu notre 2ème source d'acquisition. Les leads sont ultra qualifiés car ils viennent à nous après avoir vu notre expertise sur les discussions. Résultat : un CAC à 0€ sur ces leads et un taux de closing de 70%. C'est juste magique."</blockquote>
              
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({
                length: 5
              }).map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
              </div>
              
              {/* Author */}
              <div className="flex flex-col items-center gap-3">
                <img src={mateoAvatar} alt="Matéo" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" />
                <div>
                  <p className="font-semibold text-foreground text-lg">
                    Matéo
                  </p>
                  <p className="text-muted-foreground">
                    CEO @ StagingEasy
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>;
};