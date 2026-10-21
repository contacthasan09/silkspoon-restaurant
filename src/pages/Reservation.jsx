export default function Reservation() {
  return (
    <>
      <section className="breadcrumb">
        <div className="container-max">
          <h1>Reservation</h1>
        </div>
      </section>

      <section className="padding50 bg-soft">
        <div className="container-max max-w-lg mx-auto">
          <form
            className="bg-white rounded-[15px] p-6 md:p-8 shadow-card"
            onSubmit={(e) => e.preventDefault()}
          >
            <h2 className="font-bricolage text-xl font-bold text-heading mb-6 text-center">
              Book a Table
            </h2>

            <label className="form-label">Full Name</label>
            <input className="input-field mb-4" type="text" required />

            <label className="form-label">Phone</label>
            <input className="input-field mb-4" type="tel" required />

            <label className="form-label">Email</label>
            <input className="input-field mb-4" type="email" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="form-label">Date</label>
                <input className="input-field" type="date" required />
              </div>
              <div>
                <label className="form-label">Time</label>
                <input className="input-field" type="time" required />
              </div>
            </div>

            <label className="form-label">Guests</label>
            <select className="input-field mb-4" defaultValue="2">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'Guest' : 'Guests'}
                </option>
              ))}
            </select>

            <label className="form-label">Special Requests</label>
            <textarea className="input-field mb-6 min-h-[80px]" />

            <button type="submit" className="btn-submit w-full">
              Reserve Table
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
