import React from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "../supabase";
export default function Login() {
  return (
    <>
      <div>Login</div>
      <Auth
        supabaseClient={supabase}
        providers={["github"]}
        appearance={{
          theme: ThemeSupa,
          extend: true,
        }}
        showLinks={false}
        magicLink={true}
        view="magic_link"
        localization={{
          variables: {
            magic_link: {
              button_label: "Send Magic Link",
            },
          },
        }}
      />
    </>
  );
}
