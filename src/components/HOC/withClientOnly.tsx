import React, { useEffect, useState, ComponentType } from "react";

const withClientOnly = (WrappedComponent: ComponentType<any>) => {
    const ClientOnlyComponent = (props: any) => {
        const [isClient, setIsClient] = useState(false);

        useEffect(() => {
            setIsClient(true);
        }, []);

        if (!isClient) {
            return null;
        }

        return <WrappedComponent {...props} />;
    };

    ClientOnlyComponent.displayName = `withClientOnly(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    return ClientOnlyComponent;
};

export default withClientOnly;