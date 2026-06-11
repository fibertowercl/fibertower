(async function () {
  try {
    let sid = sessionStorage.getItem('_ft_sid');
    if (!sid) {
      sid = Math.random().toString(36).slice(2, 11) + Date.now().toString(36);
      sessionStorage.setItem('_ft_sid', sid);
    }

    const geo = await fetch('https://ipapi.co/json/').then(r => r.json());

    await fetch('https://pxkgbhvgwtwrjxdmnhup.supabase.co/rest/v1/visits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4a2diaHZnd3R3cmp4ZG1uaHVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExNTA3MTMsImV4cCI6MjA5NjcyNjcxM30.v8strQ8VdtX_0Zj3ixw1k1kxR4jyaBZZZ2BNJHHAzts',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4a2diaHZnd3R3cmp4ZG1uaHVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExNTA3MTMsImV4cCI6MjA5NjcyNjcxM30.v8strQ8VdtX_0Zj3ixw1k1kxR4jyaBZZZ2BNJHHAzts',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({
        ip: geo.ip || null,
        city: geo.city || null,
        region: geo.region || null,
        country: geo.country_name || null,
        isp: geo.org || null,
        page: window.location.pathname,
        referrer: document.referrer || 'directo',
        user_agent: navigator.userAgent,
        session_id: sid
      })
    });
  } catch (_) {}
})();
