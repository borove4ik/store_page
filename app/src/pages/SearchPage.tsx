// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import type { searchProducts } from "../services/api";
// import type { Product } from "../types/product"; 

// export default function SearchPage() {
//   const [searchParams] = useSearchParams();
//   const query = searchParams.get("q") || "";
//   const [results, setResults] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!query.trim()) return;

//     setLoading(true);
//     searchProducts(query)
//       .then((data) => setResults(data))
//       .finally(() => setLoading(false));
//   }, [query]);

//   return (
//     <div className="p-4">
//       <h1 className="text-xl mb-4">
//         Результаты поиска: <span className="font-semibold">"{query}"</span>
//       </h1>

//       {loading && <p>Загрузка...</p>}

//       {!loading && results.length === 0 && (
//         <p>Ничего не найдено по вашему запросу.</p>
//       )}

//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//         {results.map((product) => (
//           <div key={product.id} className="border p-2 rounded">
//             <img src={product.image} alt={product.name} className="w-full" />
//             <h2 className="text-sm mt-2">{product.name}</h2>
//             <p className="text-sm font-bold">{product.price} ₽</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
}
