export const convertDate = (newsDate) => {
  let monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const createdDate = new Date(newsDate);
  const convertedDate =
    createdDate.getDate() +
    " " +
    monthNames[createdDate.getMonth()] +
    " " +
    createdDate.getFullYear();
  return convertedDate;
};

export const renderInfoSection = (icon, info, user) => {
  return (
    <div className="profile__block">
      <div className={`profile__icon ${!info ? "profile__icon_na" : ""}`}>
        {icon}
      </div>
      {user ? (
        <a
          className="profile__blog"
          target="_blank"
          rel="noreferrer"
          href={info}
        >
          {info}
        </a>
      ) : (
        <p className={`profile__text ${!info ? "profile__text_na" : ""}`}>
          {!info ? "Not Available" : info}
        </p>
      )}
    </div>
  );
};

export const renderNumberSection = (title, info) => {
  return (
    <div className="profile__detaills">
      <p className="profile__title">{title}</p>
      <div className="profile__number">{info}</div>
    </div>
  );
};
