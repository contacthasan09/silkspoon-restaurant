import { Link } from 'react-router-dom'

const HERO_VIDEO =
  'https://videos.pexels.com/video-files/3195650/3195650-uhd_2560_1440_25fps.mp4'
const HERO_POSTER =
  'https://silkspoon.com.bd/public/media/68-1772611871252-10.avif'
const SPECIALS = [
  {
    title: 'Beef Satay',
    img: 'https://silkspoon.com.bd/public/media/beef-satay-1.jpeg',
  },
  {
    title: 'Thai Favourites',
    img: 'https://silkspoon.com.bd/public/media/9-2-6.jpg',
  },
  {
    title: 'Chef Selection',
    img: 'https://silkspoon.com.bd/public/media/10-4-7.jpg',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero — background video behind the original green tint overlay */}
      <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center padding100 overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={HERO_VIDEO}
          poster={HERO_POSTER}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(3,32,12,0.55)' }}
          aria-hidden="true"
        />
        <div className="container-max text-center relative z-10 max-w-3xl">
          <h1 className="section-title-white text-4xl md:text-[46px] leading-tight mb-4">
            Silk Spoon — A Taste of Thailand in the Heart of Gulshan
          </h1>
          <p className="text-soft text-base md:text-lg mb-8 max-w-xl mx-auto">
            Where authentic Thai cuisine begins. Fresh flavours, warm hospitality.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/menu" className="btn-pill">
              View Menu
            </Link>
            <Link to="/reservation" className="btn-primary">
              Book a Table
            </Link>
          </div>
        </div>
      </section>

      {/* Chef's Special */}
      <section className="bg-dark padding100">
        <div className="container-max">
          <h2 className="section-title-white text-2xl md:text-[26px] text-center mb-10">
            Chef&apos;s Special — Crafted to Savor
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {SPECIALS.map((s) => (
              <article key={s.title} className="group overflow-hidden rounded-[20px]">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="bg-primary text-white text-center py-3 font-bricolage font-bold text-lg">
                  {s.title}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Food menu teaser */}
      <section
        className="padding100 border-b border-gray-100"
        style={{
          backgroundImage: `linear-gradient(rgba(243,253,232,0.92), rgba(243,253,232,0.92)), url('https://silkspoon.com.bd/public/media/63-1772611868929-7.avif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container-max text-center max-w-2xl mx-auto">
          <h2 className="section-title text-2xl md:text-[26px] mb-4">
            Where Every Dish is a Journey into Authentic Thai Flavors.
          </h2>
          <p className="text-primary mb-8" style={{ lineHeight: '25.6px' }}>
            From spicy curries to delicate street-food classics — explore our full menu of authentic Thai dishes.
          </p>
          <Link to="/menu" className="btn-pill">
            Explore Food Menu
          </Link>
        </div>
      </section>

      {/* Commitment */}
      <section className="padding50 bg-white">
        <div className="container-max max-w-3xl text-center">
          <h2 className="section-title text-xl md:text-2xl mb-4">Our Commitment</h2>
          <p className="text-primary" style={{ lineHeight: '25.6px' }}>
            We source fresh ingredients and prepare every dish with care — bringing the true taste of Thailand to
            Gulshan. Come for the food; stay for the experience.
          </p>
        </div>
      </section>
    </>
  )
}