const Footer = () => {
  const currentYear = new Date().getFullYear();

  // SVG for LinkedIn
  const LinkedInIcon = (
    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.01 19h-2.99v-8.82h2.99v8.82zm-1.5-10.07c-.97 0-1.76-.79-1.76-1.76s.79-1.76 1.76-1.76c.97 0 1.76.79 1.76 1.76s-.78 1.76-1.76 1.76zm14.51 10.07h-2.99v-4.52c0-1.08-.02-2.47-1.5-2.47s-1.73 1.17-1.73 2.39v4.6h-2.98v-8.81h2.86v1.2h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.58z"/>
    </svg>
  );

  // SVG for Instagram
  const InstagramIcon = (
    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.056 1.84.246 2.272.415a4.6 4.6 0 0 1 1.675 1.07A4.6 4.6 0 0 1 21.352 4.9c.17.433.359 1.066.415 2.272.059 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.206-.246 1.84-.415 2.272a4.6 4.6 0 0 1-1.07 1.675 4.6 4.6 0 0 1-1.675 1.07c-.433.17-1.066.359-2.272.415-1.266.059-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.056-1.84-.246-2.272-.415a4.6 4.6 0 0 1-1.675-1.07 4.6 4.6 0 0 1-1.07-1.675c-.17-.433-.359-1.066-.415-2.272C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.056-1.206.246-1.84.415-2.272a4.6 4.6 0 0 1 1.07-1.675A4.6 4.6 0 0 1 4.9 2.578c.433-.17 1.066-.359 2.272-.415C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.74 0 8.332.012 7.052.07 5.773.128 4.797.313 4.05.548A6.45 6.45 0 0 0 1.553 1.553C.313 2.797.128 3.774.07 5.052.012 6.332 0 6.74 0 12c0 5.26.012 5.668.07 6.948.058 1.277.242 2.254.483 3.001.24.747.627 1.4 1.122 1.896.496.495 1.149.882 1.896 1.122.747.241 1.724.425 3.001.483 1.28.058 1.688.07 6.948.07s5.668-.012 6.948-.07c1.277-.058 2.254-.242 3.001-.483.747-.24 1.4-.627 1.896-1.122.495-.496.882-1.149 1.122-1.896.241-.747.425-1.724.483-3.001.058-1.28.07-1.688.07-6.948s-.012-5.668-.07-6.948c-.058-1.277-.242-2.254-.483-3.001A6.45 6.45 0 0 0 22.448 1.553c-.747-.241-1.724-.425-3.001-.483C15.668.012 15.26 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.998 3.998 0 1 1 0-7.996 3.998 3.998 0 0 1 0 7.996zm7.2-11.848a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  );

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Gensys</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming businesses through innovative technology solutions.
              We build modern, scalable, and reliable digital experiences that drive growth.
            </p>
           <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 flex-wrap">
  <a
    href="https://www.linkedin.com/in/kartik-dubey-357238203/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 flex items-center"
    aria-label="Kartik Dubey LinkedIn"
  >
    {LinkedInIcon}
    <span>Kartik Dubey</span>
  </a>
  <a
    href="https://www.linkedin.com/in/kirtan-bhatt-31313a253/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 flex items-center"
    aria-label="Kirtan Bhatt LinkedIn"
  >
    {LinkedInIcon}
    <span>Kirtan Bhatt</span>
  </a>
  {/* Company Instagram */}
  <a
    href="https://www.instagram.com/_gensys_/" // Replace with your real company Instagram
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-2 rounded-lg hover:opacity-80 flex items-center"
    aria-label="Company Instagram"
  >
    {InstagramIcon}
    <span className="font-medium">Instagram</span>
  </a>
</div>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Web Development</span></li>
              <li><span className="text-gray-300">Mobile Apps</span></li>
              <li><span className="text-gray-300">UI/UX Design</span></li>
              <li><span className="text-gray-300">Cloud Solutions</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {currentYear} Gensys. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
