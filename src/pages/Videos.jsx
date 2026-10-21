export default function Videos() {
  return (
    <>
      <section className="breadcrumb">
        <div className="container-max">
          <h1>Video Gallery</h1>
        </div>
      </section>

      <section className="padding100 bg-soft">
        <div className="container-max max-w-2xl text-center">
          <h2 className="section-title text-xl mb-4">Latest Videos</h2>
          <p className="text-primary mb-8" style={{ lineHeight: '25.6px' }}>
            Watch our kitchen in action and get a taste of the Silk Spoon experience. Follow us on social media for more.
          </p>
          <div className="aspect-video bg-dark rounded-[20px] flex items-center justify-center text-white/60">
            <div className="text-center p-6">
              <svg className="mx-auto mb-3 opacity-50" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              <p className="text-sm">Video content coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
