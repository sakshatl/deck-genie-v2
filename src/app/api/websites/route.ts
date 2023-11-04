import uiConfig from './dummy.json';

export async function GET(request: Request) {
  return Response.json({ data: { ...uiConfig }, error: "boom" });
}