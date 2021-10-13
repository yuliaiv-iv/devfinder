import React from "react";
import "./Profile.css";
import { Company } from "../Icons/Company";
import { Web } from "../Icons/Web";
import { Twitter } from "../Icons/Twitter";
import { Location } from "../Icons/Location";
import { convertDate } from "../../utils/config";
import { renderInfoSection, renderNumberSection } from "../../utils/config";

function Profile({ user }) {
  const {
    name,
    login,
    public_repos,
    followers,
    following,
    bio,
    avatar_url,
    location,
    twitter_username,
    blog,
    company,
    created_at,
  } = user;

  return (
    <main className="profile__container">
      <img src={avatar_url} alt="profile" className="profile__image" />
      <div className="profile__user">
        <h2 className="profile__name">{name}</h2>
        <a
          className="profile__link"
          href="https://api.github.com/users/octocat"
        >
          {`@${login}`}
        </a>
      </div>
      <p className="profile__date">{`Joined ${convertDate(created_at)}`}</p>
      <p className="profile__bio">{!bio ? "This profile has no bio" : bio}</p>
      <div className="profile__info">
        {renderNumberSection("Repos", public_repos)}
        {renderNumberSection("Followers", followers)}
        {renderNumberSection("Following", following)}
      </div>
      <div className="profile__extra">
        {renderInfoSection(<Location />, location)}
        {renderInfoSection(<Twitter />, twitter_username)}
        {renderInfoSection(<Web />, blog)}
        {renderInfoSection(<Company />, company)}
      </div>
    </main>
  );
}

export default Profile;
