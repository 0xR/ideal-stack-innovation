import ClientComponent from "@/app/ClientComponent";
import { deleteItem, getItems, updateItemDone } from "./actions";
import { Item } from "./Item";
import { UploadFile } from "./UploadFile";
import { Gallery } from "./Gallery";

export default async function Home() {
  const items = await getItems();

  return (
    <main className="p-24">
      <ClientComponent />

      <h2 className="text-xl font-semibold my-4">To do items</h2>
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onChange={updateItemDone}
            onDelete={deleteItem}
          />
        ))}
      </ul>

      <UploadFile />
      <Gallery />
    </main>
  );
}
