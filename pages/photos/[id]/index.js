import Image from "next/image";
import Link from "next/link";

export default function index({ photo }) {
  const { title, url } = photo;

  return (
    <div>
      <h2>{title}</h2>
      <Image src={url} alt={title} width={500} height={500} />
      <Link href="/photos">go back</Link>
    </div>
  );
}

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const photo = await res.json();

  return {
    props: {
      photo,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`
  );
  const photos = await res.json();
  const ids = photos.map((photo) => photo.id);
  const paths = ids.map((id) => ({
    params: {
      id: String(id),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
