export const Tabs = ({ tabs, activeTab, handleTabClick }) => {
  const activeTabData = tabs.find(tab => tab.id === activeTab) || tabs[0];

  return (
    <div>
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

      <div className="block" data-cy="TabContent">
        {activeTabData.content}
      </div>
    </div>
  );
};
