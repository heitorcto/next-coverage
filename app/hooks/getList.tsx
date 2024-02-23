export default async function getList(): Promise<Array<{ id: number, name: string }>> {
    const res = await fetch('https://run.mocky.io/v3/8db874cc-eb91-402a-9f0c-bdbe995c626d')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
