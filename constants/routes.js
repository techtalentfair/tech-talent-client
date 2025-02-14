const ROUTES = {
  HOME: "/",
  ABOUT_US: "/about-us",
  OUR_EVENTS: "/events",
  EVENT_DETAILS: "/event-details/:id",
  PROJECT_DETAILS: "/project-details/:id",
  CONTACT_US: "/contact-us",
  PRIVACY_POLICY: "/privacy-policy",
  BLOG: "/blog",
  ARTICLE_DETAILS: "/article-details/:id",
  NEWSLETTER: "/newsletter",
  NEWSLETTER_DETAILS: "/newsletter/:id",
  DASHBOARD: {
    SUPER_ADMIN: {
      HOME: "/dashboard/s",
      STATIC_PAGES_LIST: "/dashboard/s/static-pages",
      STATIC_PAGE_EDIT: "/dashboard/s/static-pages/:id",
      
      EVENTS_LIST: "/dashboard/s/events",
      EVENT_ADD: "/dashboard/s/events/add",
      EVENT_EDIT: "/dashboard/s/events/:id",
      
      PROJECTS_LIST: "/dashboard/s/projects",
      PROJECT_ADD: "/dashboard/s/projects/add",
      PROJECT_EDIT: "/dashboard/s/projects/:id",
      
      ARTICLES_LIST: "/dashboard/s/articles",
      ARTICLE_ADD: "/dashboard/s/articles/add",
      ARTICLE_EDIT: "/dashboard/s/articles/:id",
      
      ANNOUNCEMENTS_LIST: "/dashboard/s/announcements",
      ANNOUNCEMENT_ADD: "/dashboard/s/announcements/add",
      ANNOUNCEMENT_EDIT: "/dashboard/s/announcements/:id",
      
      SEO_SETTINGS: "/dashboard/s/seo-settings",
    },
  },
};
export default ROUTES;