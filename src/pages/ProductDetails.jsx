import { useParams } from "react-router-dom";
import { useState } from "react";
import productsData from "../data/ProductData.jsx"

export default function ProductDetails() {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === id);

  const [activeTab, setActiveTab] = useState("specs");

  if (!product) {
    return (
      <div className="text-center py-40 text-xl font-bold">
        Product Not Found
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen font-sans pt-20">
      <div className="container mx-auto px-6 py-14">

        <h1 className="text-4xl font-extrabold text-[#0c1635] mb-10">
          {product.title}
        </h1>

        <div className="flex flex-col lg:flex-row gap-12">

          {/* LEFT IMAGE */}
          <div className="lg:w-1/2">
            <div className="relative bg-white border border-gray-200 rounded-lg p-2 shadow-md overflow-hidden group">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[500px] object-cover rounded-md transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* RIGHT DETAILS */}
          <div className="lg:w-1/2">

            <p className="text-gray-700 text-lg leading-relaxed mb-8 border-l-4 border-red-600 pl-4">
              {product.description}
            </p>

            {/* TABS */}
            <div className="mb-8">
              <div className="flex border-b border-gray-200 mb-6">
                {["specs", "dimensions"].map((tab) => (
                  <button
                    key={tab}
                    className={`mr-6 pb-2 text-sm font-bold uppercase tracking-widest transition-all ${
                      activeTab === tab
                        ? "text-red-600 border-b-2 border-red-600"
                        : "text-gray-400 hover:text-[#0c1635]"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="bg-white p-6 rounded-md border shadow-sm">
                <table className="w-full text-sm">
                  <tbody>
                    {Object.entries(
                      activeTab === "specs" ? product.specs : product.dimensions
                    ).map(([key, value], index) => (
                      <tr
                        key={key}
                        className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                      >
                        <td className="py-3 px-4 font-semibold text-gray-500 uppercase w-1/3">
                          {key}
                        </td>
                        <td className="py-3 px-4 font-semibold text-[#0c1635]">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* FEATURES */}
            <h2 className="text-sm font-bold uppercase text-gray-400 mb-4 tracking-widest">
              Key Features
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
              {product.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  ✔ {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-red-600 text-white text-center py-4 rounded-md font-bold uppercase tracking-widest hover:bg-[#0c1635] transition-all shadow-md">
                Request Quote
              </button>

              <button className="flex-1 border-2 border-[#0c1635] text-[#0c1635] py-4 rounded-md font-bold uppercase tracking-widest hover:bg-[#0c1635] hover:text-white transition-all">
                Download Datasheet
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
