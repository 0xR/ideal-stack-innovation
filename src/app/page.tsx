import ClientComponent from "@/app/ClientComponent";
import { getItems } from "./actions";
import { UploadFile } from "./UploadFile";

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
              <input type="checkbox" defaultChecked={!!item.done} readOnly />{" "}
              {item.name}
            </li>
          );
        })}
      </ul>

      <UploadFile />
    </main>
  );
}
