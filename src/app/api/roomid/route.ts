export async function GET() {
  const res = await fetch("http://localhost:8000/api/roomid/");
  const data = await res.json();

  return Response.json({ data });
}
