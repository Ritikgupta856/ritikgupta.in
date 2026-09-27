const mdxComponents = {
  h1: ({ children, ...props }) => (
    <h1 {...props} className={`scroll-mt-8 ${props.className || ""}`.trim()}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 {...props} className={`scroll-mt-8 ${props.className || ""}`.trim()}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 {...props} className={`scroll-mt-8 ${props.className || ""}`.trim()}>
      {children}
    </h3>
  ),
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-muted">{children}</thead>,
  tbody: ({ children }) => (
    <tbody className="divide-y divide-border">{children}</tbody>
  ),
  tr: ({ children }) => (
    <tr className="transition-colors hover:bg-muted/50">{children}</tr>
  ),
  th: ({ children }) => (
    <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-border px-4 py-3 text-muted-foreground">
      {children}
    </td>
  ),
};

export default mdxComponents;
