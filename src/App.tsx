import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Globe, Package, Plane, Ship, ShieldCheck, ArrowRight, Phone, Mail, MapPin, Leaf, Grid, TreePine, FileText, BarChart, ChevronRight, Filter, Search, Download, Wheat } from 'lucide-react';
import { useEffect, useState } from 'react';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const Logo = ({ className = "h-14 w-auto", textFill = "#1e293b", strokeColor = "#1e293b" }) => (
  <svg viewBox="0 0 450 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="logo-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000000" floodOpacity="0.2"/>
      </filter>
      <linearGradient id="leaf-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ef4444" />
        <stop offset="100%" stopColor="#7f1d1d" />
      </linearGradient>
    </defs>
    <g filter="url(#logo-shadow)">
      {/* Globe Outline */}
      <circle cx="60" cy="60" r="46" stroke={strokeColor} strokeWidth="2.5"/>
      
      {/* Abstract Continents */}
      <path d="M 40 15 Q 50 20 45 30 T 35 45 Q 45 55 40 70 T 30 85" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M 75 16 Q 65 25 70 40 T 85 55 Q 90 70 80 85 T 70 104" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M 45 18 L 50 22 L 45 28" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M 82 42 L 75 48 L 78 55" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>

      {/* Orbit Ring */}
      <ellipse cx="60" cy="60" rx="62" ry="16" transform="rotate(-35 60 60)" stroke={strokeColor} strokeWidth="2.5"/>
      
      {/* Nodes */}
      <circle cx="18" cy="30" r="4" stroke={strokeColor} strokeWidth="2.5" fill={textFill === '#ffffff' ? '#020617' : '#ffffff'}/>
      <circle cx="102" cy="90" r="4" stroke={strokeColor} strokeWidth="2.5" fill={textFill === '#ffffff' ? '#020617' : '#ffffff'}/>
      <circle cx="15" cy="75" r="4" stroke={strokeColor} strokeWidth="2.5" fill={textFill === '#ffffff' ? '#020617' : '#ffffff'}/>
      <circle cx="95" cy="25" r="4" stroke={strokeColor} strokeWidth="2.5" fill={textFill === '#ffffff' ? '#020617' : '#ffffff'}/>

      {/* Bottom Lines */}
      <line x1="42" y1="98" x2="78" y2="98" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="50" y1="104" x2="58" y2="104" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="64" y1="104" x2="74" y2="104" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round"/>

      {/* Maple Leaf */}
      <path d="M38 86 v -8 l -7 -3 l 3 -6 l -8 -4 l 9 -2 l 3 -11 l 3 11 l 9 2 l -8 4 l 3 6 l -7 3 v 8 z" fill="url(#leaf-grad)"/>

      {/* Text */}
      <text x="130" y="76" fontFamily="Arial, Helvetica, sans-serif" fontSize="48" fontWeight="400" fill={textFill} letterSpacing="-0.5">VIJAY GLOBAL</text>
    </g>
  </svg>
);

function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <Link to="/" className="flex items-center">
            <Logo className="h-14 w-auto" textFill="#1e293b" strokeColor="#1e293b" />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/#about" className="text-slate-700 hover:text-red-600 font-medium transition-colors">About</Link>
            <Link to="/#products" className="text-slate-700 hover:text-red-600 font-medium transition-colors">Products</Link>
            <Link to="/#services" className="text-slate-700 hover:text-red-600 font-medium transition-colors">Services</Link>
            <Link to="/#contact" className="text-slate-700 hover:text-red-600 font-medium transition-colors">Contact</Link>
            <Link to="/#contact" className="bg-red-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-red-700 transition-colors shadow-md hover:shadow-lg">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link to="/" className="flex items-center mb-4 md:mb-0">
            <Logo className="h-10 w-auto" textFill="#ffffff" strokeColor="#ffffff" />
          </Link>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Vijay Global. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

function TilesCatalog() {
  const tiles = [
    { id: 1, name: 'Lustrous Glossy 1', size: '600x1200mm', finish: 'Glossy', image: 'https://www.erekaz.com/uploads/02%20%20-%2060%20X%20120%20-%20Lustrous%20Glossy%201.png', pdf: 'https://www.erekaz.com/catalogue/02%20%20-%2060%20X%20120%20-%20Lustrous%20Glossy%201.pdf' },
    { id: 2, name: 'Statuario 1', size: '600x1200mm', finish: 'Glossy', image: 'https://www.erekaz.com/uploads/06%20-%2060%20X%20120%20-%20Statuario%201.png', pdf: 'https://www.erekaz.com/catalogue/06%20-%2060%20X%20120%20-%20Statuario%201.pdf' },
    { id: 3, name: 'Pearl Series', size: '600x1200mm', finish: 'Polished', image: 'https://www.erekaz.com/uploads/08%20-%2060%20X%20120%20-%20Pearl%20Series.png', pdf: 'https://www.erekaz.com/catalogue/08%20-%2060%20X%20120%20-%20Pearl%20Series.pdf' },
    { id: 4, name: 'Matt Series', size: '800x1600mm', finish: 'Matt', image: 'https://www.erekaz.com/uploads/14%20-%2080%20X%20160%20-%20Matt%20Series.png', pdf: 'https://www.erekaz.com/catalogue/14%20-%2080%20X%20160%20-%20Matt%20Series.pdf' },
    { id: 5, name: 'Wood Planks', size: '200x1200mm', finish: 'Wood', image: 'https://www.erekaz.com/uploads/29%20-%2020%20x%20120.%20cm%20Wood%20Planks.png', pdf: 'https://www.erekaz.com/catalogue/29%20-%2020%20x%20120.%20cm%20Wood%20Planks.pdf' },
    { id: 6, name: 'Endless Series', size: '800x1600mm', finish: 'Glossy', image: 'https://www.erekaz.com/uploads/13%20-%2080%20X%20160%20-%20Endless%20Series.png', pdf: 'https://www.erekaz.com/catalogue/13%20-%2080%20X%20160%20-%20Endless%20Series.pdf' },
    { id: 7, name: 'Dark High Gloss', size: '800x1600mm', finish: 'High Gloss', image: 'https://www.erekaz.com/uploads/17%20-%2080%20X%20160%20-%20Dark%20High%20Gloss%20Series.png', pdf: 'https://www.erekaz.com/catalogue/17%20-%2080%20X%20160%20-%20Dark%20High%20Gloss%20Series.pdf' },
    { id: 8, name: 'Bookmatch', size: 'Slab', finish: 'Polished', image: 'https://www.erekaz.com/uploads/21%20-%20Slab%20Tile%20-%20Bookmatch.png', pdf: 'https://www.erekaz.com/catalogue/21%20-%20Slab%20Tile%20-%20Bookmatch.pdf' },
    { id: 9, name: 'Carving', size: '1200x1200mm', finish: 'Carving', image: 'https://www.erekaz.com/uploads/32%20-%20120%20X%20120%20cm%20Carving.png', pdf: 'https://www.erekaz.com/catalogue/32%20-%20120%20X%20120%20cm%20Carving.pdf' },
  ];

  const [currentHeaderImg, setCurrentHeaderImg] = useState(0);
  const headerImages = [
    "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeaderImg((prev) => (prev + 1) % headerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-slate-950 text-white py-16 relative overflow-hidden">
        {headerImages.map((img, index) => (
          <div 
            key={img}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentHeaderImg ? 'opacity-20' : 'opacity-0'}`}
            style={{ backgroundImage: `url('${img}')` }}
          ></div>
        ))}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Porcelain Tiles Collection</h1>
          <div className="flex items-center text-slate-400 text-sm font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link to="/#products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-white">Porcelain Tiles</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-64 shrink-0">
            <div className="sticky top-28 space-y-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-lg mb-6 flex items-center text-slate-900"><Filter className="h-5 w-5 mr-2 text-red-600"/> Filters</h3>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-slate-900 mb-3">Size</h4>
                  <div className="space-y-3">
                    {['600x1200mm', '800x800mm', '600x600mm', '200x1200mm'].map(size => (
                      <label key={size} className="flex items-center cursor-pointer group">
                        <input type="checkbox" className="rounded border-slate-300 text-red-600 focus:ring-red-600 w-4 h-4 cursor-pointer" />
                        <span className="ml-3 text-slate-600 text-sm group-hover:text-slate-900 transition-colors">{size}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Finish</h4>
                  <div className="space-y-3">
                    {['Glossy', 'High Gloss', 'Matt', 'Polished', 'Rustic', 'Wood'].map(finish => (
                      <label key={finish} className="flex items-center cursor-pointer group">
                        <input type="checkbox" className="rounded border-slate-300 text-red-600 focus:ring-red-600 w-4 h-4 cursor-pointer" />
                        <span className="ml-3 text-slate-600 text-sm group-hover:text-slate-900 transition-colors">{finish}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Catalogs Section */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-lg mb-4 flex items-center text-slate-900"><FileText className="h-5 w-5 mr-2 text-red-600"/> Catalogs</h3>
                <div className="space-y-3">
                  <a href="https://www.erekaz.com/catalogue/25%20-%20Slab%20Tile%20-%20Master%20Catalogue.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:border-red-200 hover:bg-red-50 transition-colors group">
                    <span className="text-sm font-medium text-slate-700 group-hover:text-red-700">Master Catalogue</span>
                    <Download className="h-4 w-4 text-slate-400 group-hover:text-red-600" />
                  </a>
                  <a href="https://www.erekaz.com/catalogue/26%20-%20Slab%20Tile%20-%20Glazed%20Slab%20tiles.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:border-red-200 hover:bg-red-50 transition-colors group">
                    <span className="text-sm font-medium text-slate-700 group-hover:text-red-700">Glazed Slab Tiles</span>
                    <Download className="h-4 w-4 text-slate-400 group-hover:text-red-600" />
                  </a>
                  <a href="https://www.erekaz.com/catalogue/29%20-%2020%20x%20120.%20cm%20Wood%20Planks.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:border-red-200 hover:bg-red-50 transition-colors group">
                    <span className="text-sm font-medium text-slate-700 group-hover:text-red-700">Wood Planks</span>
                    <Download className="h-4 w-4 text-slate-400 group-hover:text-red-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="flex-1">
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <p className="text-slate-600 font-medium">Showing {tiles.length} products</p>
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input type="text" placeholder="Search tiles..." className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none" />
                </div>
                <select className="border border-slate-200 rounded-lg text-sm py-2 px-4 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none bg-white">
                  <option>Sort by: Featured</option>
                  <option>Sort by: Newest</option>
                  <option>Sort by: Name (A-Z)</option>
                </select>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {tiles.map(tile => (
                <a key={tile.id} href={tile.pdf} target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col">
                  <div className="aspect-square overflow-hidden bg-slate-100 relative">
                    <img 
                      src={tile.image} 
                      alt={tile.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 bg-white text-slate-900 px-6 py-2.5 rounded-full font-semibold text-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg flex items-center">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <h3 className="font-bold text-lg text-slate-900 mb-3 group-hover:text-red-600 transition-colors">{tile.name}</h3>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-500 flex items-center"><Grid className="h-4 w-4 mr-1.5 opacity-50"/>{tile.size}</span>
                      <span className="bg-slate-100 px-2.5 py-1 rounded-md font-medium text-slate-700 border border-slate-200">{tile.finish}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AgriCatalog() {
  const products = [
    { id: 1, name: 'Green Lentils', category: 'Lentils', origin: 'Canada', image: 'https://i.postimg.cc/43ZjNZSC/green-lentils-product-image-(1).png' },
    { id: 2, name: 'Red Lentils', category: 'Lentils', origin: 'Canada', image: 'https://i.postimg.cc/V6t7jVTL/red-lentils-product-image.png' },
    { id: 3, name: 'White Peas', category: 'Peas', origin: 'Canada', image: 'https://i.postimg.cc/8CJwSYTM/white-peas-product-image.png' },
    { id: 8, name: 'Chickpeas', category: 'Pulses', origin: 'Canada', image: 'https://i.postimg.cc/tJyzFCWf/chickpeas-product-image.png' },
  ];

  const [currentHeaderImg, setCurrentHeaderImg] = useState(0);
  const headerImages = [
    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2000&auto=format&fit=crop"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeaderImg((prev) => (prev + 1) % headerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-slate-950 text-white py-16 relative overflow-hidden">
        {headerImages.map((img, index) => (
          <div 
            key={img}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentHeaderImg ? 'opacity-30' : 'opacity-0'}`}
            style={{ backgroundImage: `url('${img}')` }}
          ></div>
        ))}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Agricultural Products</h1>
          <div className="flex items-center text-slate-300 text-sm font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link to="/#products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-white">Agri Products</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-64 shrink-0">
            <div className="sticky top-28 space-y-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-lg mb-6 flex items-center text-slate-900"><Filter className="h-5 w-5 mr-2 text-red-600"/> Filters</h3>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Export Type</h4>
                  <div className="space-y-3">
                    {['Bulk Vessel', 'Containers', 'Bagged'].map(type => (
                      <label key={type} className="flex items-center cursor-pointer group">
                        <input type="checkbox" className="rounded border-slate-300 text-red-600 focus:ring-red-600 w-4 h-4 cursor-pointer" />
                        <span className="ml-3 text-slate-600 text-sm group-hover:text-slate-900 transition-colors">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-red-600 p-6 rounded-xl shadow-sm text-white">
                <h3 className="font-bold text-lg mb-2">Bulk Orders</h3>
                <p className="text-red-100 text-sm mb-4">Contact us for bulk pricing and shipping logistics for agricultural commodities.</p>
                <Link to="/#contact" className="block w-full text-center bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="flex-1">
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <p className="text-slate-600 font-medium">Showing {products.length} products</p>
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input type="text" placeholder="Search commodities..." className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none" />
                </div>
                <select className="border border-slate-200 rounded-lg text-sm py-2 px-4 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none bg-white">
                  <option>Sort by: Featured</option>
                  <option>Sort by: Name (A-Z)</option>
                  <option>Sort by: Category</option>
                </select>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map(product => (
                <div key={product.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col">
                  <div className="aspect-square overflow-hidden bg-slate-100 relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 bg-white text-slate-900 px-6 py-2.5 rounded-full font-semibold text-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">View Details</span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <h3 className="font-bold text-lg text-slate-900 mb-3 group-hover:text-red-600 transition-colors">{product.name}</h3>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-500 flex items-center"><MapPin className="h-4 w-4 mr-1.5 opacity-50"/>{product.origin}</span>
                      <span className="bg-slate-100 px-2.5 py-1 rounded-md font-medium text-slate-700 border border-slate-200">{product.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const [currentHeroImg, setCurrentHeroImg] = useState(0);
  const heroImages = [
    "https://images.unsplash.com/photo-1586528116311-ad8ed7c66364?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop"
  ];

  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImg((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((img, index) => (
            <img
              key={img}
              src={img}
              alt={`Global logistics ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentHeroImg ? 'opacity-20' : 'opacity-0'}`}
              referrerPolicy="no-referrer"
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-2 leading-tight">
              Your Trusted Partner in <span className="text-red-500">Global Trade</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-slate-200 mb-6">
              Vancouver, BC
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
              Sourcing premium products globally and distributing locally, while exporting domestic excellence to overseas clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center group shadow-lg shadow-red-600/20">
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#products" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors flex items-center justify-center">
                Explore Our Products
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">About Vijay Global</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Vijay Global is engaged in the importing and exporting of goods across international markets. We specialize in bridging the gap between global suppliers and local markets.
                </p>
                <p>
                  Our operations involve sourcing high-quality products from trusted global suppliers and distributing them locally. Simultaneously, we take pride in exporting premium domestic products to our overseas clients.
                </p>
                <p>
                  We manage every aspect of the trade process—from operations and logistics to documentation and compliance—ensuring smooth, efficient, and reliable international transactions for all our partners.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop" 
                alt="Global trade and logistics" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="font-bold text-2xl mb-2">Seamless Transactions</div>
                  <div className="text-slate-200 font-medium">End-to-end supply chain management</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Products</h2>
            <p className="text-lg text-slate-600">
              We specialize in sourcing and distributing high-quality commodities across three main sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Porcelain Tiles - Internal Catalog Link */}
            <Link to="/tiles" className="block group">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 h-full flex flex-col"
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" 
                    alt="Porcelain Tiles" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors duration-500 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 bg-white text-slate-900 px-6 py-2 rounded-full font-semibold text-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">View Catalog</span>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 -mt-16 relative z-10 border-4 border-white shadow-sm">
                    <Grid className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">Porcelain Tiles</h3>
                  <p className="text-slate-600 leading-relaxed flex-1">
                    Premium quality porcelain tiles sourced from top global manufacturers, suitable for residential and commercial projects.
                  </p>
                </div>
              </motion.div>
            </Link>

            {/* Agri Products */}
            <Link to="/agri" className="block group">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 h-full flex flex-col"
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2000&auto=format&fit=crop" 
                    alt="Agri Products" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors duration-500 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 bg-white text-slate-900 px-6 py-2 rounded-full font-semibold text-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">View Catalog</span>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 -mt-16 relative z-10 border-4 border-white shadow-sm">
                    <Leaf className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">Agri Products</h3>
                  <p className="text-slate-600 leading-relaxed flex-1">
                    High-grade agricultural commodities, ensuring food security and quality supply chains for our international partners.
                  </p>
                </div>
              </motion.div>
            </Link>

            {/* Lumber Wood Products */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col group"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=2000&auto=format&fit=crop" 
                  alt="Lumber Wood Products" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 -mt-16 relative z-10 border-4 border-white shadow-sm">
                  <TreePine className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Lumber Wood Products</h3>
                <p className="text-slate-600 leading-relaxed flex-1">
                  Sustainable and durable lumber and wood products for construction, manufacturing, and structural applications.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive Trade Services</h2>
            <p className="text-lg text-slate-600">
              We manage the complexities of international trade so you can focus on your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <BarChart className="h-8 w-8 text-slate-700 group-hover:text-red-600 transition-colors" />,
                title: "Trade Operations",
                description: "End-to-end management of sourcing, purchasing, and sales across borders."
              },
              {
                icon: <Ship className="h-8 w-8 text-slate-700 group-hover:text-red-600 transition-colors" />,
                title: "Logistics",
                description: "Efficient coordination of freight, transportation, and warehousing solutions."
              },
              {
                icon: <FileText className="h-8 w-8 text-slate-700 group-hover:text-red-600 transition-colors" />,
                title: "Documentation",
                description: "Accurate preparation and handling of all required international trade documents."
              },
              {
                icon: <ShieldCheck className="h-8 w-8 text-slate-700 group-hover:text-red-600 transition-colors" />,
                title: "Compliance",
                description: "Ensuring all transactions adhere to local and international trade regulations."
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-red-200 hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className="mb-6 bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm border border-slate-100 group-hover:border-red-100 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-slate-400 mb-10 max-w-md leading-relaxed">
                Ready to partner with Vijay Global? Contact us today to discuss your import/export needs and how we can facilitate your international trade operations.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="bg-white/5 p-4 rounded-xl mr-6 border border-white/10 group-hover:bg-red-600/20 group-hover:border-red-500/30 transition-colors">
                    <MapPin className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1 text-white">Location</h4>
                    <p className="text-slate-400 text-lg">Vancouver, BC<br />Canada</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="bg-white/5 p-4 rounded-xl mr-6 border border-white/10 group-hover:bg-red-600/20 group-hover:border-red-500/30 transition-colors">
                    <Phone className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1 text-white">Phone</h4>
                    <a href="tel:7785132929" className="text-slate-400 text-lg hover:text-red-400 transition-colors">
                      778-513-2929
                    </a>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="bg-white/5 p-4 rounded-xl mr-6 border border-white/10 group-hover:bg-red-600/20 group-hover:border-red-500/30 transition-colors">
                    <Mail className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1 text-white">Email</h4>
                    <a href="mailto:info@vijayglobal.ca" className="text-slate-400 text-lg hover:text-red-400 transition-colors">
                      info@vijayglobal.ca
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl text-slate-900 border border-slate-100">
              <h3 className="text-2xl font-bold mb-8">Send us a Message</h3>
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all bg-slate-50 hover:bg-white" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all bg-slate-50 hover:bg-white" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all bg-slate-50 hover:bg-white" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Interest</label>
                  <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all bg-slate-50 hover:bg-white cursor-pointer">
                    <option>Porcelain Tiles</option>
                    <option>Agri Products</option>
                    <option>Lumber Wood Products</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all bg-slate-50 hover:bg-white resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="w-full bg-red-600 text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20 mt-2">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 scroll-smooth">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tiles" element={<TilesCatalog />} />
          <Route path="/agri" element={<AgriCatalog />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
