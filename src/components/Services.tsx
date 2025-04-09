
import React from 'react';
import { Code, Users, LucideIcon, GitMerge, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

type ServiceProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
};

const ServiceCard = ({ title, description, icon: Icon, className }: ServiceProps) => {
  return (
    <div className={cn(
      "bg-mcr-blue/5 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-mcr-blue/10",
      className
    )}>
      <div className="rounded-full bg-mcr-teal/10 w-12 h-12 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-mcr-teal" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-mcr-glow">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-mcr-lightblue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Our Services</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We provide comprehensive technology solutions to help businesses transform and thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            title="Technical Consulting"
            description="Expert advice on technology strategy, architecture, and implementation to optimize your business processes."
            icon={GitMerge}
          />
          <ServiceCard
            title="Developer Interviews"
            description="Professional technical assessment services to help you find and hire the best talent for your team."
            icon={Users}
          />
          <ServiceCard
            title="Architecture Design"
            description="Design robust, scalable, and efficient system architectures tailored to your specific requirements."
            icon={Code}
          />
          <ServiceCard
            title="Proof of Concept"
            description="Develop working prototypes to validate your ideas and demonstrate the feasibility of your projects."
            icon={Lightbulb}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
