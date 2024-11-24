// Services.js
export default function Services() {
    const services = [
      { title: "Guided Tours", description: "Explore the country's highlights with a local guide." },
      { title: "Cultural Experiences", description: "Engage with local traditions and culture." },
      { title: "Travel Insurance", description: "Stay protected with our comprehensive travel insurance." }
    ];
  
    return (
      <section className="py-16 ">
        <h2 className="text-3xl  font-bold text-center mb-8 max-w-xl mx-auto bg-white  rounded-lg shadow-lg">Our Services</h2>
        <div className="flex justify-center gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg w-80">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  