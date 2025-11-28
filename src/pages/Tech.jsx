import Navbar from '../components/navbar';
import { Search } from 'lucide-react';
import Footer from '../components/Footer';

// Local tag chip and cards for this page
const Tag = ({ children, color = 'bg-red-600' }) => (
  <span className={`text-white text-[10px] font-semibold px-2 py-1 rounded ${color}`}>{children}</span>
);

const GridCard = ({ item }) => (
  <div className="bg-white border border-gray-200 rounded overflow-hidden hover-lift animate-scaleIn">
    <div className="relative h-40">
      <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
      <div className="absolute left-3 bottom-3 flex gap-2">
        {item.tags[0] && <Tag color="bg-red-600">{item.tags[0]}</Tag>}
        {item.tags[1] && <Tag color="bg-red-700">{item.tags[1]}</Tag>}
      </div>
    </div>
    <div className="p-3">
      <h3 className="text-[17px] font-semibold text-gray-900 leading-snug line-clamp-2">{item.title}</h3>
      <p className="text-[11px] text-gray-500 mt-1">{item.date} / {item.author}</p>
      <p className="text-[13px] text-gray-700 mt-2 leading-relaxed line-clamp-3">{item.excerpt}</p>
    </div>
  </div>
);

const SidebarItem = ({ item }) => (
  <div className="bg-white border border-gray-200 rounded overflow-hidden flex gap-3 p-3 items-start hover-lift animate-scaleIn">
    <img src={item.img} alt={item.title} className="w-20 h-16 object-cover rounded" />
    <div className="min-w-0">
      <div className="flex items-center gap-2 text-[10px] font-semibold mb-0.5">
        {item.tags?.[0] && <span className="text-red-600">{item.tags[0]}</span>}
        {item.tags?.[1] && <span className="text-red-700">{item.tags[1]}</span>}
      </div>
      <h4 className="text-sm font-semibold text-gray-900 mt-0.5 line-clamp-2">{item.title}</h4>
      <p className="text-[11px] text-gray-500">{item.date} / {item.author}</p>
    </div>
  </div>
);

const gridItems = [
  {
    tags: ['MAIN STORIES', 'TECH'],
    title: 'MacBook Pro for Business Man',
    date: 'Jan 19, 2019',
    author: 'Theme Horse',
    img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros ante, placerat ac pulvinar at, iaculis a quam...'
  },
  {
    tags: ['POPULAR', 'TECH'],
    title: 'Best Microsoft Surface Laptop',
    date: 'Jan 16, 2019',
    author: 'Theme Horse',
    img: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros ante, placerat ac pulvinar at, iaculis a quam...'
  },
  {
    tags: ['TECH'],
    title: 'Flying into the Future with Drone Technology',
    date: 'Jan 16, 2019',
    author: 'Theme Horse',
    img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros ante, placerat ac pulvinar at, iaculis a quam...'
  },
  {
    tags: ['POPULAR'],
    title: 'Apple will launch a three camera',
    date: 'Jan 15, 2019',
    author: 'Theme Horse',
    img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros ante, placerat ac pulvinar at, iaculis a quam...'
  },
  {
    tags: ['RECOMMENDED', 'TECH'],
    title: 'The Best iPad Productivity Apps',
    date: 'Jan 14, 2019',
    author: 'Theme Horse',
    img: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros ante, placerat ac pulvinar at, iaculis a quam...'
  },
  {
    tags: ["EDITOR'S PICK", 'TECH'],
    title: 'Best Classic Film Cameras',
    date: 'Jan 14, 2019',
    author: 'Theme Horse',
    img: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros ante, placerat ac pulvinar at, iaculis a quam...'
  }
];

const sidebarData = {
  Popular: [
    {
      tags: ['MAIN STORIES', 'TECH'],
      title: 'MacBook Pro for Business Man',
      date: 'Jan 19, 2019',
      author: 'Theme Horse',
      img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=200&auto=format&fit=crop'
    },
    {
      tags: ['FASHION', 'RECOMMENDED'],
      title: 'The Best Red Lipsticks of all Time',
      date: 'Jan 14, 2019',
      author: 'Theme Horse',
      img: 'https://images.unsplash.com/photo-1490111718993-d98654ce6cf7?q=80&w=200&auto=format&fit=crop'
    },
    {
      tags: ['POPULAR', 'SPORTS'],
      title: 'Cars you Should Buy',
      date: 'Jan 14, 2019',
      author: 'Theme Horse',
      img: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=200&auto=format&fit=crop'
    },
    {
      tags: ['SPORTS', 'TRENDING STORIES'],
      title: 'Tours with Ocean Sports',
      date: 'Jan 14, 2019',
      author: 'Theme Horse',
      img: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=200&auto=format&fit=crop'
    }
  ],
  Recent: [
    {
      tags: ['TRAVEL'],
      title: 'Best Nightlife Cities in the World',
      date: 'Jan 16, 2019',
      author: 'Theme Horse',
      img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=200&auto=format&fit=crop'
    }
  ],
  Commented: [
    {
      tags: ['TRAVEL'],
      title: 'Beautiful Cities in the World',
      date: 'Jan 7, 2019',
      author: 'Theme Horse',
      img: 'https://images.unsplash.com/photo-1508830524289-0adcbe822b40?q=80&w=200&auto=format&fit=crop'
    }
  ]
};

const CategoriesPanel = ({ current = 'Tech' }) => {
  const cats = [
    { name: "Editor's Pick", count: 1 },
    { name: 'Fashion', count: 5 },
    { name: 'Health', count: 5 },
    { name: 'Main Stories', count: 4 },
    { name: 'Popular', count: 5 },
    { name: 'Recommended', count: 6 },
    { name: 'Sports', count: 5 },
    { name: 'Tech', count: 6 },
    { name: 'Travel', count: 5 },
    { name: 'Trending Stories', count: 2 }
  ];
  return (
    <div className="bg-white border border-gray-200 rounded">
      <div className="p-3">
        <div className="flex items-center gap-2 mb-2">
          <span className="border-l-4 border-red-600 h-5" />
          <h3 className="text-gray-800 font-semibold">Categories</h3>
        </div>
        <ul className="space-y-1">
          {cats.map((c) => (
            <li key={c.name}>
              <a href="#" className={`text-sm ${c.name === current ? 'text-red-600 font-medium' : 'text-gray-700 hover:text-red-600'}`}>
                {c.name} <span className="text-gray-400">({c.count})</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Tech = () => {
  return (
    <div>
      <Navbar />

      {/* Breadcrumb Section */}
      <section className="bg-white border-t-2 border-red-600 animate-fadeDown">
        <div className="container mx-auto px-4 py-3 text-sm">
          <nav className="flex items-center gap-2 text-gray-600" aria-label="Breadcrumb">
            <a href="/" className="text-red-600 hover:text-red-700 font-medium">Home</a>
            <span className="text-gray-400">/</span>
            <a href="/blog" className="text-red-600 hover:text-red-700 font-medium">Blog</a>
            <span className="text-gray-400">/</span>
            <span className="text-gray-800 font-semibold">Tech</span>
          </nav>
        </div>
      </section>

      {/* Tech category section */}
      <section className="bg-gray-50 animate-fadeUp">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Grid */}
            <div className="md:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {gridItems.map((it, idx) => (
                  <GridCard key={idx} item={it} />
                ))}
              </div>
            </div>
            {/* Sidebar */}
            <div className="md:col-span-4 space-y-4">
              {/* Search */}
              <div className="bg-white border border-gray-200 rounded overflow-hidden">
                <div className="p-3">
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full border border-gray-200 rounded-l px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-red-600"
                    />
                    <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-r" aria-label="Search">
                      <Search size={16} />
                    </button>
                  </div>
                </div>
              </div>
              {/* Tabs */}
              <div className="bg-white border border-gray-200 rounded">
                <div className="flex items-center gap-2 p-2">
                  {['Popular', 'Recent', 'Commented'].map((t) => (
                    <button key={t} className={`text-sm px-3 py-1.5 rounded ${t === 'Popular' ? 'bg-white text-gray-900 border border-gray-200' : 'text-gray-700'}`}>
                      {t}
                    </button>
                  ))}
                </div>
                <div className="p-3 space-y-3">
                  {sidebarData.Popular.map((it, i) => (
                    <SidebarItem key={i} item={it} />
                  ))}
                </div>
              </div>

              {/* Categories */}
              <CategoriesPanel current="Tech" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tech;
