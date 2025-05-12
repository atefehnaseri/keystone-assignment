//structural component (with componet composition technique)
export default function NavBar({ children }) {
  return <nav className="nav-bar">{children}</nav>;
}
