const IMAGES = [
  'https://silkspoon.com.bd/public/media/gallery/whatsapp-image-2026-03-05-at-113948-7.jpeg',
  'https://silkspoon.com.bd/public/media/gallery/whatsapp-image-2026-03-05-at-11394-7.jpeg',
  'https://silkspoon.com.bd/public/media/gallery/whatsapp-image-2026-03-05-at-113947-a-7.jpeg',
  'https://silkspoon.com.bd/public/media/gallery/whatsapp-image-2026-03-05-at-113947-am-10.jpeg',
  'https://silkspoon.com.bd/public/media/gallery/whatsapp-image-2026-03-05-at-113946-am-9.jpeg',
  'https://silkspoon.com.bd/public/media/beef-satay-1.jpeg',
  'https://silkspoon.com.bd/public/media/9-2-6.jpg',
  'https://silkspoon.com.bd/public/media/10-4-7.jpg',
]

export default function Gallery() {
  return (
    <>
      <section className="breadcrumb">
        <div className="container-max">
          <h1>Image Gallery</h1>
        </div>
      </section>

      <section className="padding100 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {IMAGES.map((src, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-[20px] shadow-[0_0_8px_0_rgb(221,221,221)] aspect-square"
              >
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
