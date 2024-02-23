import getList from "../hooks/getList"

export default async function List() {
  const data: Array<{ id: number, name: string }> = await getList()

  return (
    <>
        {data.map((member) => (<p key={member.name}>{member.name}</p>))}
    </>
  );
}
