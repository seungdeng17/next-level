import Nav from "./Nav";
import HeadInfo from "./HeadInfo";

export default function Layout({ children }) {
  return (
    <>
      <HeadInfo />
      <Nav />
      <div>{children}</div>
    </>
  );
}
