import React from "react";

import Seo from "../../components/seo";

import MainMenu from "../../content/main-menu";
import SocialLinks from "../../content/social-links";

const EmailsPreferences = (props) => {
  return (
    <>
      <Seo {...props} meta={{ title: "Emails from the Queen" }} />
      <main>
        <header>
          <h1>
            Your preferences have been{" "}
            <span>
              saved{" "}
              <span role="img" aria-label="Envolope with arrow">
                📩
              </span>
            </span>
          </h1>
        </header>
      </main>
      <footer>
        <nav>
          <MainMenu />
          <SocialLinks />
        </nav>
      </footer>
    </>
  );
};

export default EmailsPreferences;
