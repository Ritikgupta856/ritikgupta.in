const mdxComponents = {
  h1: ({ children, ...props }) => (
    <h1 {...props} className={`scroll-mt-24 text-3xl font-bold mt-8 mb-4 ${props.className || ""}`.trim()}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 {...props} className={`scroll-mt-24 text-2xl font-semibold mt-8 mb-3 ${props.className || ""}`.trim()}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 {...props} className={`scroll-mt-24 text-xl font-semibold mt-6 mb-2 ${props.className || ""}`.trim()}>
      {children}
    </h3>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-gray-100 dark:bg-gray-800">
      {children}
    </thead>
  ),
  tbody: ({ children }) => (
    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
      {children}
    </tbody>
  ),
  tr: ({ children }) => (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
      {children}
    </tr>
  ),
  th: ({ children }) => (
    <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-3 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
      {children}
    </td>
  ),
};

export default mdxComponents;