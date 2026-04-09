export async function POST(request) {
  try {
    const body = await request.json();
    console.log("Request body:", body);

    const response = await fetch(
      "https://magnus.cost2costsupplement.com/api/v1/form-submit",
      {
        method: "POST",
        headers: {
      "Content-Type": "application/json",
      "X-Tenant": "promolecules.com",        // ← yahan apni value daalo
    },
        body: JSON.stringify({
          name: body.name,
          email: body.email,
          phone: body.phone,
          message: body.message,
        }),
      }
    );

    const text = await response.text();
    console.log("API raw response:", text);        // ← terminal mein dekhna
    console.log("API status:", response.status);

    // HTML aa raha hai toh API URL galat hai
    if (text.startsWith("<!DOCTYPE") || text.startsWith("<html")) {
      return Response.json(
        { error: "External API returned HTML - URL may be wrong" },
        { status: 502 }
      );
    }

    const data = JSON.parse(text);
    return Response.json(data, { status: response.status });

  } catch (error) {
    console.error("ROUTE ERROR:", error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
}