import { apiSlice } from "../services/apiSlice";

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    retrieveUser: builder.query<UserDetailsTypes, void>({
      query: () => ({
        url: "/users/me/",
        headers: {
          Authorization: `Bearer ${
            typeof window !== "undefined" &&
            localStorage.getItem("access-token")
          }`,
        },
      }),
    }),
    login: builder.mutation({
      query: ({ username, password }) => ({
        url: "/api/token/",
        method: "POST",
        body: { email: username, password },
      }),
    }),
    register: builder.mutation({
      query: ({ first_name, last_name, email, password }) => ({
        url: "/users/",
        method: "POST",
        body: { first_name, last_name, email, password },
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useRetrieveUserQuery } =
  authApiSlice;
