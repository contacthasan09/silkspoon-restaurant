import { Link } from 'react-router-dom'

const LOGO = 'https://silkspoon.com.bd/public/media/silkspoon-logo.png'

export default function Footer() {
  return (
    <footer className="bg-dark text-white" style={{ padding: '100px 0 40px' }}>
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <img src={LOGO} alt="Silk Spoon" className="h-14 w-auto mb-4 brightness-110" />
            <p className="text-sm text-soft/80 leading-relaxed">
              Where Authentic Thai Cuisine Begins — a taste of Thailand in the heart of Gulshan.
            </p>
          </div>
          <div>
            <h4 className="font-bricolage text-xl font-bold text-soft mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/menu" className="hover:text-secondary transition-colors">Food Menu</Link></li>
              <li><Link to="/gallery" className="hover:text-secondary transition-colors">Image Gallery</Link></li>
              <li><Link to="/videos" className="hover:text-secondary transition-colors">Video Gallery</Link></li>
              <li><Link to="/reservation" className="hover:text-secondary transition-colors">Reservation</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bricolage text-xl font-bold text-soft mb-4">Visit Us</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Gulshan, Dhaka, Bangladesh</li>
              <li>
                <a href="tel:+8801700000000" className="hover:text-secondary transition-colors">
                  +880 17XX-XXXXXX
                </a>
              </li>
              <li>
                <a href="mailto:info@silkspoon.com.bd" className="hover:text-secondary transition-colors">
                  info@silkspoon.com.bd
                </a>
              </li>
            </ul>
            <Link to="/reservation" className="btn-pill mt-5 inline-block">
              Book a Table
            </Link>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-xs text-white/50 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Silk Spoon Restaurant. All rights reserved.</p>
          <p className="text-silk">Authentic Thai · Gulshan</p>
        </div>
      </div>
    </footer>
  )
}
