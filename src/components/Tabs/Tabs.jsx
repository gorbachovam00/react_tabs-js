import React, { useEffect, useState } from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  useEffect(() => {
    if (!tabs.some(tab => tab.id === activeTabId)) {
      setActiveTab(tabs[0].id);
    } else {
      setActiveTab(activeTabId);
    }
  }, [activeTabId, tabs]);

  const handleTabClick = (event, tabId) => {
    event.preventDefault();
    if (tabId !== activeTab) {
      onTabSelected(tabId);
    }
  };

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={activeTab === tab.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={event => handleTabClick(event, tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};
