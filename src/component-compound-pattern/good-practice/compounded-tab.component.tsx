import React, { createContext, useContext, useMemo, useState } from 'react';

type TabsContextValue = {
    activeIndex: number;
    setActiveIndex: (index: number) => void;
};

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext(): TabsContextValue {
    const ctx = useContext(TabsContext);
    if (!ctx) {
        throw new Error('Tabs compound components must be used within <Tabs>');
    }
    return ctx;
}

type TabsRootProps = React.PropsWithChildren<{
    defaultIndex?: number;
    onChange?: (activeIndex: number) => void;
    className?: string;
}>;

function TabsRoot({ defaultIndex = 0, onChange, className, children }: TabsRootProps) {
    const [activeIndex, setActiveIndexState] = useState(defaultIndex);

    const setActiveIndex = (index: number) => {
        setActiveIndexState(index);
        onChange?.(index);
    };

    const value = useMemo(() => ({ activeIndex, setActiveIndex }), [activeIndex]);

    return (
        <TabsContext.Provider value={value}>
            <div className={className}>{children}</div>
        </TabsContext.Provider>
    );
}

type TabProps = React.PropsWithChildren<{
    disabled?: boolean;
    className?: string;
    index?: number;
    isActive?: boolean;
    selectIndex?: (index: number) => void;
}>;

const Tab = React.memo(function Tab({ children, disabled, className, index = 0, isActive = false, selectIndex }: TabProps) {
    return (
        <button
            type="button"
            disabled={disabled}
            onClick={() => !disabled && selectIndex?.(index)}
            className={className}
            style={{
                padding: '6px 10px',
                cursor: disabled ? 'not-allowed' : 'pointer',
                opacity: disabled ? 0.5 : 1,
                borderBottom: isActive ? '2px solid black' : '2px solid transparent',
            }}
        >
            {children}
        </button>
    );
});

type TabsListProps = React.PropsWithChildren<{ className?: string }>;

function TabsList({ children, className }: TabsListProps) {
    const { activeIndex, setActiveIndex } = useTabsContext();
    const items = React.Children.toArray(children).map((child, index) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child as React.ReactElement<any>, {
            index,
            isActive: index === activeIndex,
            selectIndex: setActiveIndex,
        });
    });
    return (
        <div className={className} style={{ display: 'flex', gap: 8 }}>
            {items}
        </div>
    );
}

type TabsPanelProps = React.PropsWithChildren<{ index?: number; isActive?: boolean; className?: string }>;

const TabsPanel = React.memo(function TabsPanel({ index = 0, isActive = false, className, children }: TabsPanelProps) {
    if (!isActive) return null;
    return (
        <div className={className} style={{ padding: 12 }}>
            {children}
        </div>
    );
});

type TabsPanelsProps = React.PropsWithChildren<{ className?: string }>;

function TabsPanels({ children, className }: TabsPanelsProps) {
    const { activeIndex } = useTabsContext();
    const items = React.Children.toArray(children).map((child, index) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child as React.ReactElement<any>, {
            index,
            isActive: index === activeIndex,
        });
    });
    return <div className={className}>{items}</div>;
}

export const Tabs = Object.assign(TabsRoot, {
    Tab,
    List: TabsList,
    Panel: TabsPanel,
    Panels: TabsPanels,
});

// Keep requested naming: CompounedComponentBasedTab (good example)
const CompounedComponentBasedTab = () => {
    return (
        <Tabs onChange={(index) => console.log('Tab is changed', index)}>
            <Tabs.List>
                <Tabs.Tab>Pie</Tabs.Tab>
                <Tabs.Tab className="custom-tab">Cake</Tabs.Tab>
                <Tabs.Tab disabled={true}>Candies</Tabs.Tab>
                <Tabs.Tab>Cookies</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panels>
                <Tabs.Panel>Pie content</Tabs.Panel>
                <Tabs.Panel>Cake content</Tabs.Panel>
                <Tabs.Panel>Candies content</Tabs.Panel>
                <Tabs.Panel>Cookies content</Tabs.Panel>
            </Tabs.Panels>
        </Tabs>
    );
};

export default CompounedComponentBasedTab;


