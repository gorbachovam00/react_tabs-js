export const Tabs = ({ tabs, activeTab, handleTabClick }) => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map(tab => (
        <li
          className={activeTab === tab.id ? 'is-active' : ''}
          data-cy="Tab"
          key={tab.id}
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={event => {
              event.preventDefault();
              handleTabClick(tab.id);
            }}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
