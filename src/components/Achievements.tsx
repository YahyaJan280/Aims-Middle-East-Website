import { useEffect, useRef, useState } from "react";
import MembershipSection from "@/components/DubaiHumanitarian";
import Diabestes from "@/assets/diabetes.png";
import KMU from "@/assets/KMU-Logo.png";
import MetiZindagi from "@/assets/Meethi-Zindagi.png";
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
        <div className="bg-card p-6 sm:p-8 rounded-2xl shadow-card hover:shadow-glow transition-all duration-500 border border-border/50 hover:border-primary/20 group text-center">
          <div
            className={`w-14 h-14 sm:w-16 sm:h-16 ${gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 pulse-glow`}
          >
            <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </div>

          <div className="mb-4">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-2">
              {prefix}
              {count.toLocaleString()}
              {suffix}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground">
              {label}
            </h3>
          </div>

          <p className="text-sm sm:text-base text-muted-foreground">
            {description}
          </p>
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
    <>
      {/* Full-width background wrapper */}
      <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-muted/30">
        <section
          id="achievements"
          ref={sectionRef}
          className="py-12 sm:py-16 lg:py-20 xl:py-2"
        >
          {/* Main container matching navbar max-width of 1920px */}
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 ">
            {/* Inner content container with max-width 1200px */}
            <div className="max-w-[1200px] mx-auto">
              {/* Header */}
              <div className="text-center mb-10 sm:mb-12 lg:mb-16">
                <h2 className="font-roboto font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 animate-on-scroll opacity-0">
                  <span className="text-[#0084C7]">Our Impact</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto animate-on-scroll -mt-3 opacity-0  transition-all duration-700 leading-relaxed font-medium text-muted-foreground">
                  Measurable results that demonstrate our commitment to 
                  <br/>transforming healthcare and improving lives across the Middle
                  East
                </p>
              </div>

              {/* Hidden Counter Cards (for future use) */}
              <div className="hidden grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-10 sm:mb-12 lg:mb-16">
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-start">
                {/* Left: Transforming Lives */}
                <div className="animate-on-scroll opacity-0 flex flex-col bg-card/20 rounded-2xl p-5 sm:p-6 lg:p-7 border border-border/30 hover:border-border/50 transition-all duration-300">
                  <h3 className="font-roboto text-xl flex sm:text-2xl lg:text-3xl font-bold text-[#0084C7] md:text-center mb-3 sm:mb-4 text-left">
                    Transforming Lives Togather
                  </h3>
                  <p className="font-roboto font-medium text-sm sm:text-base lg:text-base text-muted-foreground mb-5 sm:mb-6 leading-relaxed text-left">
                    Behind every statistic is a human story of hope, resilience,
                    and transformation. Our impact extends far beyond
                    numbers—we're building healthier communities, stronger
                    families, and a more sustainable healthcare future.
                  </p>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start space-x-3 p-3 sm:p-4 bg-card rounded-lg border-l-4 border-primary hover:shadow-md transition-all duration-300">
                      <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-roboto font-bold text-sm sm:text-base text-[#0084C7] text-left">
                          Patient-Centered Care
                        </h4>
                        <p className="font-roboto text-xs sm:text-sm text-muted-foreground">
                          Every treatment plan is personalized to meet
                          individual needs.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-3 sm:p-4 bg-card rounded-lg border-l-4 border-secondary hover:shadow-md transition-all duration-300">
                      <Users className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-roboto font-bold text-sm sm:text-base text-[#0084C7] text-left">
                          Community Empowerment
                        </h4>
                        <p className="font-roboto text-xs sm:text-sm text-muted-foreground">
                          Building local capacity and knowledge for sustainable
                          outcomes.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-3 sm:p-4 bg-card rounded-lg border-l-4 border-primary hover:shadow-md transition-all duration-300">
                      <TrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-roboto font-bold text-sm sm:text-base text-[#0084C7] text-left">
                          Continuous Improvement
                        </h4>
                        <p className="font-roboto text-xs sm:text-sm text-muted-foreground">
                          Data-driven approaches ensure our programs evolve and
                          improve.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Recognition & Awards */}
                <div className="animate-on-scroll opacity-0 bg-gradient-primary/5 p-5 sm:p-6 lg:p-7 rounded-2xl border border-primary/10 hover:border-primary/20 transition-all duration-300">
                  <h4 className="font-roboto text-xl sm:text-2xl lg:text-2xl font-bold text-[#0084C7] mb-4 sm:mb-5 text-center">
                    AIMS' Reputable and Trusted Partners
                  </h4>

                  <div className="space-y-4 sm:space-y-5">
                    <div className="text-center p-4 sm:p-5 bg-card rounded-xl shadow-card hover:shadow-glow transition-all duration-300">
                      <img
                        src={Diabestes}
                        alt="Diabetes Association KP"
                        className="mx-auto w-12 sm:w-14 h-auto mb-3 object-contain"
                      />
                      <p className="font-roboto text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        Established in 1985, Diabetes Association KP is a
                        charitable organization and owner of the Sugar Hospital
                        land and building.
                      </p>
                    </div>

                    <div className="text-center p-4 sm:p-5 bg-card rounded-xl shadow-card hover:shadow-glow transition-all duration-300">
                      <img
                        src={KMU}
                        alt="Khyber Medical University"
                        className="mx-auto w-14 sm:w-16 h-auto mb-3 object-contain"
                      />
                      <p className="font-roboto text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        KMU and AIMS jointly promote Family Medicine in KP and
                        support Sugar Hospital as a training and research
                        center.
                      </p>
                    </div>

                    <div className="text-center p-4 sm:p-5 bg-card rounded-xl shadow-card hover:shadow-glow transition-all duration-300">
                      <img
                        src={MetiZindagi}
                        alt="Meethi Zindagi"
                        className="mx-auto w-20 sm:w-24 h-auto mb-3 object-contain"
                      />
                      <p className="font-roboto text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        Meethi Zindagi provides free insulin and glucometers to
                        children while raising awareness and education on
                        diabetes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <MembershipSection />
    </>
  );
};

export default Achievements;
