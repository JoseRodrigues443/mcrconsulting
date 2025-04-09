
import React from 'react';
import { cn } from '@/lib/utils';

type TechCategoryProps = {
  title: string;
  items: string[];
  className?: string;
};

const TechCategory = ({ title, items, className }: TechCategoryProps) => {
  return (
    <div className={cn("mb-8", className)}>
      <h3 className="section-subheading">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="bg-white text-mcr-blue px-4 py-2 rounded-md shadow-sm border border-gray-200 hover:border-mcr-teal transition-colors"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const Technologies = () => {
  return (
    <section id="technologies" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Technologies We Work With</h2>
          <p className="text-lg text-mcr-gray max-w-3xl mx-auto">
            Our team has expertise in a wide range of modern technologies and platforms to deliver the best solutions for your needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <TechCategory 
            title="Cloud & Infrastructure" 
            items={["AWS", "Azure", "GCP", "Terraform", "Docker", "Kubernetes", "CI/CD"]} 
          />
          
          <TechCategory 
            title="Programming Languages" 
            items={["Go", "Python", ".NET", "Java", "JavaScript", "TypeScript", "Rust"]} 
          />
          
          <TechCategory 
            title="Databases & Storage" 
            items={["PostgreSQL", "MongoDB", "Cassandra", "Redis", "Elasticsearch", "DynamoDB", "S3"]} 
          />
          
          <TechCategory 
            title="APIs & Integration" 
            items={["REST", "GraphQL", "gRPC", "Kong", "API Gateway", "Microservices"]} 
          />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
