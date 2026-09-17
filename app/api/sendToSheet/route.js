export async function POST(request) {
  try {
    const payload = await request.json();
    const SHEET_URLS = {
      هنقرستيشن: process.env.SHEET_HN,
      جاهز: process.env.SHEET_JAHZ,
      "تو يو": process.env.SHEET_TOYOU,
      كيتا: process.env.SHEET_KITA,
      "مستر مندوب": process.env.SHEET_MRMANDOB,
      "ذا شفز": process.env.SHEET_THECHEF,
      نينجا: process.env.SHEET_NINJA,
    };

    const url = SHEET_URLS[payload.App] || SHEET_URLS["هنقرستيشن"];

    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
