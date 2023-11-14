"use client";

import { myAction } from "./actions";

export default function ClientComponent() {
  return (
    <form action={myAction}>
      <input name="item"></input>
      <button type="submit">Add to Cart</button>
    </form>
  );
}
