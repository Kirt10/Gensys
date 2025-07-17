
import { InteractiveCard } from "@/components/InteractiveCard";

interface ServiceCardProps {
  title: string;
  description: string;
  technologies: string[];
  icon: string;
}

const ServiceCard = ({ title, description, technologies, icon }: ServiceCardProps) => {
  return (
    <InteractiveCard hoverEffect="lift" className="h-full">
      <div className="p-8">
        <div className="text-center mb-6">
          <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          {description}
        </p>
        
        <div className="space-y-2">
          <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Technologies:
          </div>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium transform hover:scale-105 transition-transform duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95">
          Learn More
        </button>
      </div>
    </InteractiveCard>
  );
};

export default ServiceCard;
