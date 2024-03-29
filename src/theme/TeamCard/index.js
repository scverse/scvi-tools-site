import React from "react";
import IconLink from "@theme/IconLink";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

import styles from "./styles.module.scss";

function TeamCard(props) {
  const {
    name,
    websiteLink,
    description,
    image,
    githubLink,
    twitterLink,
  } = props;

  return (
    <div className={`${styles.teamCard} card`}>
      <div className={`${styles.teamAvatar} avatar`}>
        <img
          className="avatar__photo avatar__photo--xl"
          src={image || useBaseUrl(`img/logo.svg`)}
        />
        <div className={`${styles.teamCardContent} avatar__intro`}>
          {websiteLink ? (
            <a
              className={`${styles.teamCardName} avatar__name`}
              href={websiteLink}
              target="_blank"
            >
              {name}
            </a>
          ) : (
            <div className={`${styles.teamCardName} avatar__name`}>{name}</div>
          )}
          <small className="avatar__subtitle">{description}</small>
          <div className={styles.iconContainer}>
            <IconLink icon={faGithub} link={githubLink}></IconLink>
            <IconLink icon={faTwitter} link={twitterLink}></IconLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
