import Cta from "@components/Cta";

export default function Layout({ children }) {
  return (
    <div>
      {children}
      <Cta />
    </div>
  );
}
