export default async function page({ params }) {
  const { blogId } = await params;
  return (
    <div className="'mx-auto my-5 max-w-6xl px-5 2xl:max-w-7xl">{blogId}</div>
  );
}
