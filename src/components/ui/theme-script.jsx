// Server component on purpose: the browser must apply the theme class before
// first paint, and a script rendered from a client component both warns in
// React 19 and runs too late to prevent a flash.
const script = `(function(){try{var t=localStorage.getItem("theme")||"dark";var d=t==="dark"||(t==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches);var e=document.documentElement;e.classList.toggle("dark",d);e.style.colorScheme=d?"dark":"light"}catch(e){}})()`;

export default function ThemeScript() {
  return (
    <script suppressHydrationWarning dangerouslySetInnerHTML={{ __html: script }} />
  );
}
