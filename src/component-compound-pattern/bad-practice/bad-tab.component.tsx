import React, { useState } from 'react';

type TabItem = {
    name: string;
    className?: string;
    disabled?: boolean;
};

type TabsWithoutCCProps = {
    tabs: TabItem[];
    onChange?: (activeIndex: number) => void;
    className?: string;
};

// "Bad" example: rigid API, data-driven only, styling/behavior leaks into props
function TabsWithoutCC({ tabs, onChange, className }: TabsWithoutCCProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index: number, disabled?: boolean) => {
        if (disabled) return;
        setActiveIndex(index);
        onChange?.(index);
    };

    return (
        <div className={className}>
            <div style={{ display: 'flex', gap: 8 }}>
                {tabs.map((tab, index) => (
                    <button
                        key={tab.name}
                        type="button"
                        className={tab.className}
                        disabled={tab.disabled}
                        onClick={() => handleClick(index, tab.disabled)}
                        style={{
                            padding: '6px 10px',
                            cursor: tab.disabled ? 'not-allowed' : 'pointer',
                            opacity: tab.disabled ? 0.5 : 1,
                            borderBottom: index === activeIndex ? '2px solid black' : '2px solid transparent',
                        }}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>
            <div style={{ padding: 12 }}>
                Active tab: {tabs[activeIndex]?.name}
            </div>
        </div>
    );
}

// Keep requested naming: ComplicatedTab (bad example)
const ComplicatedTab = () => {
    return (
        <TabsWithoutCC
            onChange={(index) => console.log('Tab is changed', index)}
            tabs={[
                { name: 'Pie' },
                { name: 'Cake', className: 'custom-tab' },
                { name: 'Candies', disabled: true },
                { name: 'Cookies' },
            ]}
        />
    );
};

export default ComplicatedTab;