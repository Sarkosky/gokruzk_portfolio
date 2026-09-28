export const svgMapping: Record<string, string> = {
  python: "/icons/python.svg",
  typescript: "/icons/typescript.svg",
  sql: "/icons/sql.svg",
  "django (drf)": "/icons/djangorest.svg",
  django: "/icons/djangorest.svg",
  fastapi: "/icons/fastapi.svg",
  "next.js": "/icons/nextjs.svg",
  react: "/icons/react.svg",
  "react native": "/icons/react.svg",
  "tailwind css": "/icons/tailwindcss.svg",
  postgresql: "/icons/postgresql.svg",
  mysql: "/icons/mysql.svg",
  mongodb: "/icons/mongodb.svg",
  linux: "/icons/linux.svg",
  docker: "/icons/docker.svg",
  vercel: "/icons/vercel.svg",
  aws: "/icons/aws.svg",
  gcp: "/icons/gcp.svg",
  git: "/icons/git.svg",
  neovim: "/icons/neovim.svg",
  mssql: "/icons/mssql.svg",
  gitlab: "/icons/gitlab.svg",
  github: "/icons/github.svg",
  jwt: "/icons/jwt.svg",
  sqlalchemy: "/icons/sqlalchemy.svg",
  prisma: "/icons/prisma.svg",
};

export const getSvgPath = (tech: string) => {
  return svgMapping[tech.toLowerCase()] || "";
};
