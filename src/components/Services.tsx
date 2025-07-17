
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies like React, Node.js, and cloud platforms.",
      technologies: ["React", "Node.js", "TypeScript", "AWS"],
      icon: "🌐"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android using Flutter and React Native.",
      technologies: ["Flutter", "React Native", "iOS", "Android"],
      icon: "📱"
    },
    {
      title: "Database Solutions",
      description: "Scalable database design, optimization, and migration services for PostgreSQL, MySQL, and MongoDB.",
      technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
      icon: "🗄️"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that combine beautiful aesthetics with intuitive user experiences.",
      technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
      icon: "🎨"
    },
    {
      title: "Custom Software Development",
      description: "Tailored software solutions to automate processes and solve complex business challenges.",
      technologies: ["Python", "Java", "C#", ".NET"],
      icon: "⚙️"
    },
    {
      title: "Cloud & DevOps",
      description: "Cloud infrastructure setup, CI/CD pipelines, and automated deployment solutions.",
      technologies: ["AWS", "Docker", "Kubernetes", "GitHub Actions"],
      icon: "☁️"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive IT solutions to help your business thrive in the digital age
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
