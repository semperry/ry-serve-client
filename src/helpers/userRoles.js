import withAuth from "./withAuth";

export const AdminUser = withAuth(["super-user", "admin"]);
export const SuperUser = withAuth(["super-user"]);
export const StandardUser = withAuth(["super-user", "admin", "user"]);
