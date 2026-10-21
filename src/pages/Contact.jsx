export default function Contact() {
  return (
    <>
      <section className="breadcrumb">
        <div className="container-max">
          <h1>Contact us</h1>
        </div>
      </section>

      <section
        className="padding100 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://silkspoon.com.bd/public/media/silk-spoon-table1-10-2.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="glass-card max-w-md">
            <h2 className="font-bricolage text-[26px] font-bold text-soft mb-4">Opening Hours:</h2>
            <ul className="space-y-2 text-white/90 text-sm">
              <li>Monday – Thursday: 12:00 – 22:30</li>
              <li>Friday – Saturday: 12:00 – 23:00</li>
              <li>Sunday: 12:00 – 22:00</li>
            </ul>
          </div>

          <form
            className="bg-white rounded-[15px] p-6 shadow-card"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="font-bricolage text-xl font-bold text-heading mb-5">Send a Message</h3>
            <label className="form-label">Name</label>
            <input className="input-field mb-4" type="text" required />
            <label className="form-label">Email</label>
            <input className="input-field mb-4" type="email" required />
            <label className="form-label">Phone</label>
            <input className="input-field mb-4" type="tel" />
            <label className="form-label">Message</label>
            <textarea className="input-field mb-5 min-h-[100px]" required />
            <button type="submit" className="btn-submit w-full">
              Send
            </button>
          </form>
        </div>
      </section>

      <section className="padding100 bg-white">
        <div className="container-max grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-bricolage text-lg font-bold text-heading mb-2">Phone Number</h3>
            <a href="tel:+8801700000000" className="text-primary hover:text-secondary">
              +880 17XX-XXXXXX
            </a>
          </div>
          <div>
            <h3 className="font-bricolage text-lg font-bold text-heading mb-2">Email</h3>
            <a href="mailto:info@silkspoon.com.bd" className="text-primary hover:text-secondary">
              info@silkspoon.com.bd
            </a>
          </div>
          <div>
            <h3 className="font-bricolage text-lg font-bold text-heading mb-2">Address</h3>
            <p className="text-primary text-sm">Gulshan, Dhaka, Bangladesh</p>
          </div>
        </div>
      </section>
    </>
  )
}
