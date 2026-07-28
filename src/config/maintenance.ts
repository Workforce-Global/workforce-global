export const maintenanceConfig = {
  // Set to true to enable global maintenance mode (entire site down except for admins)
  global: false,

  // Scheduled maintenance banner
  scheduled: {
    enabled: false,
    date: "Saturday",
    startTime: "11:00 PM UTC",
    endTime: "1:00 AM UTC",
    message: "We will be performing scheduled maintenance.",
  },

  // Section-level maintenance modes (allows specific features to be taken offline)
  sections: {
    about: false,
    clients: false,
    process: false,
    innovation: false,
    contact: false,
    services: false,
    projects: false,
    team: false,
    testimonials: false,
    stats: false,
    cta: false,
    footer: false,
    header: false,

  } as Record<string, boolean>,

  // Admin bypass configuration
  admin: {
    // Key used in localStorage to bypass maintenance mode
    // Usage: localStorage.setItem("wg-admin-bypass", "true")
    bypassKey: "wg-admin-bypass",
  },
};
