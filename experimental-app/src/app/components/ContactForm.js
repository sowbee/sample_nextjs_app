// ContactForm.js
export default function ContactForm() {
    return (
      <section className="py-16 ">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <label className="block mb-4">
            Name:
            <input type="text" className="w-full mt-2 p-2 border border-gray-300 rounded" />
          </label>
          <label className="block mb-4">
            Email:
            <input type="email" className="w-full mt-2 p-2 border border-gray-300 rounded" />
          </label>
          <label className="block mb-4">
            Message:
            <textarea className="w-full mt-2 p-2 border border-gray-300 rounded"></textarea>
          </label>
          <button className="w-full py-2 bg-blue-600 text-white rounded">Send</button>
        </form>
      </section>
    );
  }
  