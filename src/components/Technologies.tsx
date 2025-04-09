
import React from 'react';
import { cn } from '@/lib/utils';
import { Code, Server, Database, Globe, Brain } from 'lucide-react';

type TechCategoryProps = {
  title: string;
  items: string[];
  className?: string;
  icon: React.ReactNode;
};

const TechCategory = ({ title, items, className, icon }: TechCategoryProps) => {
  return (
    <div className={cn("mb-12", className)}>
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-md bg-white/5 flex items-center justify-center mr-3 border border-mcr-purple/20">
          {icon}
        </div>
        <h3 className="section-subheading mb-0">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="bg-gradient-to-br from-mcr-blue to-mcr-blue/90 text-white px-4 py-2 rounded-md shadow-sm border border-mcr-purple/20 hover:border-mcr-purple/40 transition-all duration-300 neon-glow"
            style={{ animationDelay: `${index * 0.1}s` }}
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
    <section id="technologies" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 z-0 bg-tech-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-mcr-purple/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-mcr-purple/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-heading">Technologies We Work With</h2>
          <p className="text-lg text-mcr-gray max-w-3xl mx-auto">
            Our team has expertise in a wide range of modern technologies and platforms to deliver the best solutions for your needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto glass-panel p-8">
          <TechCategory 
            title="Cloud & Infrastructure" 
            items={["AWS", "Azure", "GCP", "Terraform", "Docker", "Kubernetes", "CI/CD"]} 
            icon={<Server className="h-5 w-5 text-mcr-glow" />}
          />
          
          <TechCategory 
            title="Programming Languages" 
            items={["Go", "Python", ".NET", "Java", "JavaScript", "TypeScript", "Rust"]} 
            icon={<Code className="h-5 w-5 text-mcr-glow" />}
          />
          
          <TechCategory 
            title="Databases & Storage" 
            items={["PostgreSQL", "MongoDB", "Cassandra", "Redis", "Elasticsearch", "DynamoDB", "S3"]} 
            icon={<Database className="h-5 w-5 text-mcr-glow" />}
          />
          
          <TechCategory 
            title="APIs & Integration" 
            items={["REST", "GraphQL", "gRPC", "Kong", "API Gateway", "Microservices"]} 
            icon={<Globe className="h-5 w-5 text-mcr-glow" />}
          />

          <TechCategory 
            title="Artificial Intelligence" 
            items={["Ollama", "OpenRouter", "LLM Integration", "AI Agents", "Vector Databases", "Embeddings"]} 
            icon={<Brain className="h-5 w-5 text-mcr-glow" />}
          />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
