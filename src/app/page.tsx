import ClientComponent from "@/app/ClientComponent";
import { getItems } from "./actions";

export default async function Home() {
  const items = await getItems();

  return (
    <main className="p-24">
      <ClientComponent />

      <h2 className="text-xl font-semibold my-4">To do items</h2>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id} className="flex gap-2">
              <input type="checkbox" checked={!!item.done} /> {item.name}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
