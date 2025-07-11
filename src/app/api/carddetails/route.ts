import { NextResponse } from "next/server";

const API_URL = "https://686cf6e914219674dcc9d528.mockapi.io/cars/cardetails";

export async function GET() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch car data" },
      { status: 500 },
    );
  }
}

export async function PUT(request: Request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "Missing car id" }, { status: 400 });
    }
    const body = await request.json();
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to update car data" },
        { status: res.status },
      );
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to update car data" },
      { status: 500 },
    );
  }
}
