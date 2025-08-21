import { useEffect, useRef, useState } from "react";
import {
  Users,
  GraduationCap,
  Heart,
  Award,
  TrendingUp,
  Globe,
} from "lucide-react";

const Achievements = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !inView) {
            setInView(true);
            const elements =
              entry.target.querySelectorAll(".animate-on-scroll");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.remove("opacity-0");
                el.classList.add("animate-slide-up");
              }, index * 200);
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [inView]);

  const CounterCard = ({
    icon: Icon,
    target,
    label,
    suffix = "",
    prefix = "",
    description,
    gradient,
  }: {
    icon: any;
    target: number;
    label: string;
    suffix?: string;
    prefix?: string;
    description: string;
    gradient: string;
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (inView) {
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        const stepDuration = duration / steps;

        let currentCount = 0;
        const timer = setInterval(() => {
          currentCount += increment;
          if (currentCount >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(currentCount));
          }
        }, stepDuration);

        return () => clearInterval(timer);
      }
    }, [inView, target]);

    return (
      <div className="animate-on-scroll opacity-0">
        <div className="bg-card p-8 rounded-2xl shadow-card hover:shadow-glow transition-all duration-500 border border-border/50 hover:border-primary/20 group text-center">
          <div
            className={`w-16 h-16 ${gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 pulse-glow`}
          >
            <Icon className="w-8 h-8 text-white" />
          </div>

          <div className="mb-4">
            <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
              {prefix}
              {count.toLocaleString()}
              {suffix}
            </div>
            <h3 className="text-xl font-semibold text-foreground">{label}</h3>
          </div>

          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    );
  };

  const achievements = [
    {
      icon: Users,
      target: 5000,
      label: "Patients Treated",
      suffix: "+",
      description:
        "Lives transformed through comprehensive diabetes care and treatment",
      gradient: "bg-gradient-primary",
    },
    {
      icon: GraduationCap,
      target: 200,
      label: "Professionals Trained",
      suffix: "+",
      description:
        "Healthcare professionals equipped with advanced skills and knowledge",
      gradient: "bg-gradient-secondary",
    },
    {
      icon: Heart,
      target: 15000,
      label: "Community Members Reached",
      suffix: "+",
      description:
        "Individuals educated about diabetes prevention and management",
      gradient: "bg-gradient-primary",
    },
    {
      icon: Award,
      target: 95,
      label: "Success Rate",
      suffix: "%",
      description:
        "Patient satisfaction and treatment success across all programs",
      gradient: "bg-gradient-secondary",
    },
    {
      icon: TrendingUp,
      target: 40,
      label: "Complication Reduction",
      suffix: "%",
      description:
        "Decrease in diabetes-related complications through early intervention",
      gradient: "bg-gradient-primary",
    },
    {
      icon: Globe,
      target: 25,
      label: "Research Publications",
      suffix: "+",
      description:
        "Contributing to global diabetes research and medical advancement",
      gradient: "bg-gradient-secondary",
    },
  ];

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="py-18 lg:mt-4 mt-10 lg:py-4 bg-muted/30 "
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 ">
        <div className="text-center mb-8">
          <h2 className="text-3xl  md:text-4xl lg:text-5xl font-bold mb-4 animate-on-scroll opacity-0">
            <span className="font-roboto font-bold gradient-text">
              Our Impact
            </span>
          </h2>
          <p className="font-roboto font-normal text-lg md:text-xl text-muted-foreground lg:max-w-3xl mx-auto animate-on-scroll opacity-0">
            Measurable results that demonstrate our commitment to transforming
            healthcare and improving lives across the Middle East
          </p>
        </div>

        <div
          className="grid  grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center  lg:max-w-7xl mx-auto"
          style={{ border: "2px solid black", display: "none" }}
        >
          {achievements.map((achievement, index) => (
            <CounterCard
              key={index}
              icon={achievement.icon}
              target={achievement.target}
              label={achievement.label}
              suffix={achievement.suffix}
              description={achievement.description}
              gradient={achievement.gradient}
            />
          ))}
        </div>
        {/* Transforming Lives & Recognition Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:ml-10 lg:gap-12 items-center">
          {/* Left: Transforming Lives */}
          <div className="animate-on-scroll opacity-0 ">
            <h3 className="font-roboto  text-2xl md:text-3xl font-bold gradient-text mb-4">
              Transforming Lives, One Patient at a Time
            </h3>
            <p className="font-roboto font-medium text-md md:text-lg text-muted-foreground mb-4 leading-relaxed">
              Behind every statistic is a human story of hope, resilience, and
              transformation. Our impact extends far beyond numbers—we're
              building healthier communities, stronger families, and a more
              sustainable healthcare future.
            </p>
            <div className="space-y-4 ">
              <div className="flex items-start space-x-3 p-4 bg-card rounded-lg border-l-4 border-primary">
                <Heart className="lg:w-6 lg:h-6 w-14 h-14 text-primary mt-1" />
                <div>
                  <h4 className="font-roboto font-bold text-foreground">
                    Patient-Centered Care
                  </h4>
                  <p className="font-roboto font-medium text-sm text-muted-foreground">
                    Every treatment plan is personalized to meet individual
                    needs and circumstances
                  </p>
                </div>
              </div>
              <div className="space-y-4 ">
                <div className="flex items-start space-x-3 p-4 bg-card rounded-lg border-l-4 border-primary">
                  <Users className="lg:w-6 lg:h-6 w-14 h-14 text-secondary mt-1" />
                  <div>
                    <h4 className="font-roboto font-bold text-foreground">
                      community Empowerment
                    </h4>
                    <p className="font-roboto font-medium text-sm text-muted-foreground">
                      Building local capacity and knowledge for sustainable
                      health outcomes
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-card rounded-lg border-l-4 border-primary">
                <TrendingUp className="lg:w-6 lg:h-6 w-14 h-14 text-primary mt-1" />
                <div>
                  <h4 className="font-roboto font-bold text-foreground">
                    Continuous Improvement
                  </h4>
                  <p className="font-roboto font-medium text-sm text-muted-foreground">
                    Data-driven approaches ensure our programs evolve and
                    improve
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Recognition & Awards */}
          <div className="animate-on-scroll opacity-0 lg:mr-2">
            <div className="bg-gradient-primary/5 p-6 lg:p-10 rounded-2xl border border-primary/10 ">
              <h4 className="font-roboto text-2xl md:text-2xl font-bold gradient-text mb-4 text-center">
                Recognition & Awards
              </h4>
              <div className="space-y-6">
                <div className="text-center p-4 bg-card rounded-xl shadow-card">
                  <Award className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h5 className="font-roboto font-bold text-foreground mb-2">
                    Excellence in Healthcare Delivery
                  </h5>
                  <p className="font-roboto font-medium text-sm text-muted-foreground">
                    Regional Healthcare Innovation Award 2023
                  </p>
                </div>
                <div className="text-center p-4 bg-card rounded-xl shadow-card">
                  <Globe className="w-12 h-12 text-secondary mx-auto mb-3" />
                  <h5 className="font-roboto font-bold text-foreground mb-2">
                    International Research Recognition
                  </h5>
                  <p className="font-roboto font-medium text-sm text-muted-foreground">
                    WHO Diabetes Research Excellence 2023
                  </p>
                </div>
                <div className="text-center p-4 bg-card rounded-xl shadow-card">
                  <Users className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h5 className="font-roboto font-bold text-foreground mb-2">
                    Community Impact Award
                  </h5>
                  <p className="font-roboto font-medium text-sm text-muted-foreground">
                    Pakistan Health Ministry Recognition 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
