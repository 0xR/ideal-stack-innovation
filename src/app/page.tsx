import ClientComponent from "@/app/ClientComponent";
import { getItems } from "./actions";

export default async function Home() {
  const items = await getItems();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ClientComponent />
      <ul>
        {items.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </main>
  );
}
