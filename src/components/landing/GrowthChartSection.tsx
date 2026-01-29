import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { month: "Jan", reddit: 5, mrr: 3 },
  { month: "Fév", reddit: 8, mrr: 5 },
  { month: "Mar", reddit: 14, mrr: 10 },
  { month: "Avr", reddit: 22, mrr: 18 },
  { month: "Mai", reddit: 35, mrr: 30 },
  { month: "Juin", reddit: 55, mrr: 48 },
  { month: "Juil", reddit: 78, mrr: 72 },
  { month: "Août", reddit: 100, mrr: 95 },
];

export const GrowthChartSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Ce n'est pas un canal <span className="text-primary">"viral"</span>.
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            C'est un canal qui <span className="text-primary">compose</span>.
          </h3>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <div className="h-[350px] w-full mb-8">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(var(--border))"
                  opacity={0.5}
                />
                <XAxis
                  dataKey="month"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                    color: "hsl(var(--foreground))",
                  }}
                  labelStyle={{ color: "hsl(var(--foreground))" }}
                />
                <Legend
                  wrapperStyle={{ paddingTop: "20px" }}
                  formatter={(value) => (
                    <span style={{ color: "hsl(var(--foreground))" }}>
                      {value}
                    </span>
                  )}
                />
                <Line
                  type="monotone"
                  dataKey="reddit"
                  name="Présence Reddit"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, fill: "hsl(var(--primary))" }}
                />
                <Line
                  type="monotone"
                  dataKey="mrr"
                  name="MRR"
                  stroke="hsl(var(--chart-2))"
                  strokeWidth={3}
                  dot={false}
                  activeDot={{ r: 6, fill: "hsl(var(--chart-2))" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <p className="text-lg text-muted-foreground text-center leading-relaxed max-w-2xl mx-auto">
            Les résultats varient selon le produit et le marché, mais Reddit
            surpasse systématiquement le trafic payant en qualité de leads —
            quand c'est bien fait.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};
