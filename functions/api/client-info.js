const FALLBACK_RAY_ID = 'cGFnZSB1bmRlciBjb25zdHJ1Y3Rpb24=';

const firstForwardedIp = (headerValue) => {
  if (!headerValue) {
    return null;
  }

  return headerValue.split(',')[0]?.trim() || null;
};

export function onRequestGet({ request }) {
  const url = new URL(request.url);
  const headers = request.headers;
  const rayId = headers.get('cf-ray') || FALLBACK_RAY_ID;
  const revealIp = url.searchParams.get('revealIp') === '1';
  const ip = revealIp
    ? headers.get('cf-connecting-ip') ||
      firstForwardedIp(headers.get('x-forwarded-for'))
    : null;

  return new Response(JSON.stringify({ rayId, ip }), {
    headers: {
      'Cache-Control': 'no-store',
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}
