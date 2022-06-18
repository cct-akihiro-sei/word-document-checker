import React from "react";

export interface HeroListItemProps {
  key: string;
  icon: string;
  primaryText: string;
}

export interface HeroListProps {
  message: string;
  items: HeroListItemProps[];
  children: React.ReactNode;
}

const HeroListItem: React.VFC<HeroListItemProps> = ({ key, icon, primaryText }) => {
  return (
    <li className="ms-ListItem" key={key}>
      <i className={`ms-Icon ms-Icon--${icon}`}></i>
      <span className="ms-font-m ms-fontColor-neutralPrimary">{primaryText}</span>
    </li>
  );
};

export const HeroList: React.VFC<HeroListProps> = ({ message, items, children }) => {
  return (
    <main className="ms-welcome__main">
      <h2 className="ms-font-xl ms-fontWeight-semilight ms-fontColor-neutralPrimary ms-u-slideUpIn20">{message}</h2>
      <ul className="ms-List ms-welcome__features ms-u-slideUpIn10">
        {items.map((item) => (
          <HeroListItem key={item.key} icon={item.icon} primaryText={item.primaryText} />
        ))}
      </ul>
      {children}
    </main>
  );
};
