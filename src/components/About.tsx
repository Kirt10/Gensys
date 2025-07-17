
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Gensys
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-gray-900">Our Mission:</strong> We empower businesses to thrive in the digital age by delivering innovative, scalable, and reliable technology solutions that drive growth and efficiency.
                </p>
                
                <p>
                  <strong className="text-gray-900">Our Vision:</strong> To be the trusted technology partner that transforms ideas into powerful digital experiences, helping our clients stay ahead in an ever-evolving technological landscape.
                </p>
                
                <p>
                  With a team of experienced developers, designers, and technology consultants, we bring together expertise in modern frameworks, cloud technologies, and user experience design to create solutions that make a real impact.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Expertise</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {["React", "Node.js", "Flutter", "Python", "AWS", "PostgreSQL", "TypeScript", "Docker", "Figma"].map((tech) => (
                    <div key={tech} className="bg-gray-100 text-center py-3 rounded-lg font-medium text-gray-700">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Team collaboration"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
              
              {/* Floating stats cards */}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
