export default async function UserId( { params } ) {
  const { id } = await params

  return (
    <>
      <div>Hello {id}</div>
    </>
  );
}
