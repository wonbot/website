export async function GET(request: Request) {
  const referer = request.headers.get("referer");

  if (!referer) {
    return Response.redirect("https://expel.best");
  }
  const res = await fetch("https://api.expel.best/health/history", {
    method: "GET",
    headers: {
      Authorization: "Bearer NxyyS3cr3tK3y!!!?",
    },
    cache: "no-store",
  });

  const data = await res.json();
  return Response.json(data);
}
