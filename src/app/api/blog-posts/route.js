import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

const connectionConfig = {
  host: process.env.DB_HOST, // Your database host
  user: process.env.DB_USER, // Your database user
  password: process.env.DB_PASSWORD, // Your database password
  database: process.env.DB_NAME, // Your database name
};

export async function GET() {
  try {
    const connection = await mysql.createConnection(connectionConfig);

    // to get all possts
    const [rows] = await connection.execute(
      "SELECT * FROM sunspace_blog WHERE SBLG_publish = '1' ORDER BY SBLG_date DESC;"
    );
    await connection.end();
    return NextResponse.json({ data: rows });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
export async function POST(request) {
  const res = await request.json();
  if (!res?.slug) {
    return;
  }
  try {
    const connection = await mysql.createConnection(connectionConfig);
    const id = res.slug;
    // to get all possts
    const [rows] = await connection.execute(
      "SELECT * FROM sunspace_blog WHERE SBLG_publish = '1' AND SBLG_link = '" +
        id +
        "' ORDER BY SBLG_language ASC;"
    );
    await connection.end();
    return NextResponse.json({ data: rows[0] });
  } catch (error) {}
}
