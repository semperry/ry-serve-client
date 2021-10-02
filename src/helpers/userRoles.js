import withAuth from "../withAuth";

export const Admin = withAuth(["super-user", "admin"]);
export const SuperUser = withAuth(["super-user"]);
