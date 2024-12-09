import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-screen bg-gray-100">
      <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-screen">
        <Image
          src="/hero-section.jpeg"
          alt="hero-section"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      {/* Content Section */}
      <div className="relative flex flex-col items-center text-center bg-white py-12">
        <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">
          First Look
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4">
          NIKE AIR MAX PULSE
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse—designed to push you past your limits and help you go to the max.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
            Notify Me
          </button>
          <button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
            Shop Air Max
          </button>
        </div>
      </div>

      {/* Best of Air Max Section */}
      <div className="bg-white px-6 py-8 relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Best of Air Max</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 font-bold rounded-full">Shop</button>
            <div className="flex space-x-2">
              <button className="p-2 bg-gray-100 rounded-full">←</button>
              <button className="p-2 bg-gray-300 rounded-full">→</button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              img: "/air1.jpeg",
              title: "Nike Air Max Pulse",
              desc: "Women's Shoes",
              price: "₹ 13,995",
            },
            {
              img: "/air2.jpeg",
              title: "Nike Air Max Pulse",
              desc: "Men's Shoes",
              price: "₹ 13,995",
            },
            {
              img: "/air3.jpeg",
              title: "Nike Air Max 97 SE",
              desc: "Men's Shoes",
              price: "₹ 16,995",
            },
          ].map((product, index) => (
            <div
              key={index}
              className="border border-white rounded-md p-4 hover:shadow-lg transition"
            >
              <Image
                src={product.img}
                alt={product.title}
                width={300}
                height={300}
                className="mx-auto"
              />
              <div className="mt-4 text-center">
                <h3 className="font-medium text-lg">{product.title}</h3>
                <p className="text-gray-500 text-sm">{product.desc}</p>
                <p className="font-bold mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Section */}
      <div className="relative bg-white py-16 px-4 text-center">
        <Image
          src="/feature.jpeg"
          alt="Running Man"
          width={1200}
          height={600}
          className="rounded-lg mx-auto"
        />
        <h1 className="mt-8 text-4xl sm:text-5xl font-extrabold text-gray-900">
          STEP INTO WHAT FEELS GOOD
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Cause everyone should know the feeling of running in that perfect
          pair!
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
          Find Your Shoe
        </button>
      </div>

      {/* Gear Up Section */}
      <div className="bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Gear Up</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12">
            {[
              {
                img: "/gear1.jpeg",
                title: "Nike Dri-FIT ADV TechKnit Ultra",
                price: "₹ 3,895",
              },
              {
                img: "/gear2.jpeg",
                title: "Nike Dri-FIT Challenger",
                price: "₹ 2,495",
              },
              {
                img: "/gear3.jpeg",
                title: "Nike Dri-FIT ADV Run Division",
                price: "₹ 5,295",
              },
              {
                img: "/gear4.jpeg",
                title: "Nike Fast",
                price: "₹ 3,795",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center flex flex-col items-center"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={300}
                  height={300}
                  className="rounded-lg"
                />
                <p className="text-gray-700 font-medium mt-4">{item.title}</p>
                <p className="text-gray-500 text-sm">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Essential Images Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Images with Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Image 1 */}
            <div className="relative">
              <Image
                src="/essential1.jpeg"
                alt="Image 1"
                width={300} 
                height={300} 
                className="w-full h-72 object-cover rounded-lg"
              />
              <div className="absolute bottom-8 left-4 bg-white text-black py-2 px-4 rounded-[20px]">
                <span>Men&apos;s</span>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative">
              <Image
                src="/essential2.jpeg"
                alt="Image 2"
                width={300} 
                height={300}
                className="w-full h-72 object-cover rounded-lg"
              />
              <div className="absolute bottom-8 left-4 bg-white text-black py-2 px-4 rounded-[20px]">
                <span>Women&apos;s</span>
              </div>
            </div>

            {/* Image 3 */}
            <div className="relative">
              <Image
                src="/essesntial3.jpeg"
                alt="Image 3"
                width={300} 
                height={300} 
                className="w-full h-72 object-cover rounded-lg"
              />
              <div className="absolute bottom-8 left-4 bg-white text-black py-2 px-4 rounded-[20px]">
                <span>Kids&apos;</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}










