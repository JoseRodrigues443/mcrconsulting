
import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-mcr-lightblue">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-heading">About MCR Consulting</h2>
            <p className="text-lg mb-6 text-mcr-gray">
              MCR Consulting is a leading technology solutions provider based in Portugal. 
              We specialize in helping businesses navigate the complex world of modern 
              technology to create efficient, scalable, and innovative solutions.
            </p>
            <p className="text-lg mb-8 text-mcr-gray">
              Our team of experienced consultants and developers brings diverse expertise 
              across multiple domains and technologies, ensuring that we can address the 
              most challenging problems with practical, effective solutions.
            </p>
            
            <div className="space-y-3">
              <ValueProposition text="Expert team with years of industry experience" />
              <ValueProposition text="Tailored solutions for your specific business needs" />
              <ValueProposition text="Commitment to excellence and client satisfaction" />
              <ValueProposition text="Continuous learning and adoption of cutting-edge technologies" />
            </div>
          </div>
          
          <div className="bg-mcr-blue/5 p-8 rounded-lg shadow-md border border-mcr-blue/10">
            <h3 className="section-subheading">Our Approach</h3>
            <div className="space-y-6">
              <ApproachStep 
                number="01" 
                title="Understand" 
                description="We take the time to thoroughly understand your business, challenges, and goals." 
              />
              <ApproachStep 
                number="02" 
                title="Analyze" 
                description="Our experts analyze your requirements and identify the most effective solutions." 
              />
              <ApproachStep 
                number="03" 
                title="Implement" 
                description="We implement customized solutions using the most appropriate technologies." 
              />
              <ApproachStep 
                number="04" 
                title="Support" 
                description="We provide ongoing support and optimization to ensure long-term success." 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ValueProposition = ({ text }: { text: string }) => {
  return (
    <div className="flex items-start">
      <CheckCircle className="h-5 w-5 text-mcr-teal mr-2 mt-0.5 flex-shrink-0" />
      <p className="text-mcr-dark">{text}</p>
    </div>
  );
};

const ApproachStep = ({ 
  number, 
  title, 
  description 
}: { 
  number: string; 
  title: string; 
  description: string 
}) => {
  return (
    <div className="flex">
      <div className="mr-4">
        <div className="bg-mcr-teal/10 text-mcr-teal font-bold rounded-full w-10 h-10 flex items-center justify-center">
          {number}
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-mcr-blue mb-1">{title}</h4>
        <p className="text-mcr-gray">{description}</p>
      </div>
    </div>
  );
};

export default About;
