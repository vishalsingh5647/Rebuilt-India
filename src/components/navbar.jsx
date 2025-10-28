import { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'TECH', path: '/tech' },
    { name: 'TRAVEL', path: '/travel' },
    { name: 'HEALTH', path: '/health' },
    { name: 'FASHION', path: '/fashion' },
    { name: 'SPORTS', path: '/sports' },
    { name: 'BLOG', path: '/blog' },
    { name: 'LAYOUTS', path: '/layouts', hasDropdown: true },
    { name: 'SUPPORT', path: '/support', hasDropdown: true },
    { name: 'BUY IT NOW', path: '/buy', highlight: true }
  ];

  const socialIcons = [
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'YouTube', icon: '▶️', url: '#' },
    { name: 'Vimeo', icon: '🎬', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' }
  ];

  return (
    <nav className="w-full">
      {/* Top Bar */}
      <div className="bg-[#1a1a1a] text-white text-sm">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="text-gray-300">{currentDate}</div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Support</a>
            <span className="text-gray-500">|</span>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Documentation</a>
            <span className="text-gray-500">|</span>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Buy It Now</a>
            <div className="flex items-center gap-3 ml-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-gray-300 hover:text-white transition-colors text-base"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Logo and Advertisement Section */}
      <div className="bg-black text-white py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight">NewsCard Pro</h1>
            <p className="text-gray-400 text-sm mt-1">Just another News/Magazine site</p>
          </div>

          {/* Advertisement Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 rounded-lg flex items-center gap-4">
            <div>
              <div className="text-2xl font-bold">ADVERTISEMENT SECTION</div>
              <div className="text-sm text-blue-200">EASILY ADD BANNER ADVERTISEMENT HERE</div>
            </div>
            <div className="bg-white text-black px-4 py-2 rounded font-bold text-sm">
              ADVERTISEMENT<br />SECTION
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-[#2563eb] text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <ul className="flex items-center">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setActiveMenu(link.name)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <a
                    href={link.path}
                    className={`
                      flex items-center gap-1 px-4 py-4 text-sm font-medium
                      hover:bg-[#1e40af] transition-colors
                      ${link.highlight ? 'bg-[#1e40af]' : ''}
                    `}
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown size={16} />}
                  </a>
                  {link.hasDropdown && activeMenu === link.name && (
                    <div className="absolute top-full left-0 bg-white text-gray-800 shadow-lg py-2 min-w-[200px] z-50">
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 1</a>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 2</a>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 3</a>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <button className="p-3 hover:bg-[#1e40af] transition-colors" aria-label="Search">
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
