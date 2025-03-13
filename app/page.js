import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        <p>
          <Link href={"meals"}>Meals</Link>
        </p>
        <p>
          <Link href={"community"}>Community</Link>
        </p>
        <p>
          <Link href={"meals/1"}>Meals Details</Link>
        </p>
        <p>
          <Link href={"meals/share"}>Meals Share</Link>
        </p>
      </h1>
    </main>
  );
}
