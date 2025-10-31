import { useState, useEffect } from 'react';
import { Search, ChevronDown, Linkedin as LinkedinIcon } from 'lucide-react';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    { name: 'SUPPORT', path: '/support' },
    { name: 'SUBSCRIBE', path: '/subscribe' }
  ];

  // Social icons rendered as brand SVGs from Simple Icons CDN
  // Colors: icon (gray-300), button bg (gray-700), hover bg (gray-600)
  // Track current pathname to highlight active link
  const [pathname, setPathname] = useState(typeof window !== 'undefined' ? window.location.pathname : '/');
  useEffect(() => {
    const update = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', update);
    return () => window.removeEventListener('popstate', update);
  }, []);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const isActive = (path) => {
    if (!pathname) return false;
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  const socialIcons = [
    { name: 'Facebook', brand: 'facebook', url: '#' },
    { name: 'YouTube', brand: 'youtube', url: '#' },
    { name: 'LinkedIn', brand: 'linkedin', url: '#' },
    { name: 'Instagram', brand: 'instagram', url: '#' }
  ];

  return (
    <nav className="w-full">
      {/* Top Bar */}
      <div className="bg-[#1a1a1a] text-white text-sm animate-fadeDown">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="text-gray-300">{currentDate}</div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
            <span className="text-gray-500">|</span>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            <span className="text-gray-500">|</span>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Advertise</a>
            <div className="flex items-center gap-2 ml-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.name}
                  className="w-9 h-9 grid place-items-center rounded-sm bg-gray-700/90 border border-gray-600 hover:bg-gray-600 transition-colors"
                >
                  {social.brand === 'linkedin' ? (
                    <LinkedinIcon size={16} className="text-gray-300" />
                  ) : (
                    <img
                      src={`https://cdn.simpleicons.org/${social.brand}/d1d5db`}
                      alt={social.name}
                      className="w-4 h-4"
                      loading="lazy"
                      width="16"
                      height="16"
                    />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Logo and Advertisement Section */}
      <div className="bg-black text-white py-6 animate-fadeDown">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img src="/Logo/Logo.jpeg" alt="Site logo" className="h-12 w-auto object-contain" loading="eager" decoding="async" />
            <div className="leading-tight">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Rebuilt India</h1>
              <p className="text-gray-400 text-xs sm:text-sm mt-0.5">News, Tech, Travel and more</p>
            </div>
          </a>

          {/* Advertisement Banner */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 px-8 py-4 rounded-lg flex items-center gap-4">
            <div>
              <div className="text-2xl font-bold">ADVERTISEMENT SECTION</div>
              <div className="text-sm text-red-200">EASILY ADD BANNER ADVERTISEMENT HERE</div>
            </div>
            <div className="bg-white text-black px-4 py-2 rounded font-bold text-sm">
              ADVERTISEMENT<br />SECTION
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className={`bg-red-600 text-white sticky top-0 z-40 ${scrolled ? 'shadow-lg' : ''} animate-fadeDown`}>
        <div className="container mx-auto px-4">
          <div className="relative flex items-center justify-between">
            <ul className="flex items-center gap-1">
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
                      flex items-center gap-1 px-4 py-4 text-sm font-medium tracking-wide
                      hover:bg-red-700 transition-all border-b-2 border-transparent hover:border-white/80
                      ${isActive(link.path) ? 'bg-red-700 border-white/90' : ''}
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
            <button
              className="p-3 hover:bg-red-700 transition-colors rounded"
              aria-label="Search"
              onClick={() => setShowSearch((v) => !v)}
            >
              <Search size={20} />
            </button>
            {showSearch && (
              <div className="absolute right-0 top-full mt-2 bg-white text-gray-800 rounded shadow-lg p-2 w-72 animate-fadeDown">
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full border border-gray-200 rounded-l px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-red-600"
                  />
                  <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-r">
                    <Search size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
