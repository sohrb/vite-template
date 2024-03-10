import { cloneElement } from "react";

function BuildProviderTree(providers: React.ReactElement[]) {
  return function ProviderTree(props: React.PropsWithChildren) {
    const lastIndex = providers.length - 1;
    let children = props.children;

    for (let i = lastIndex; i >= 0; i--) {
      const element = providers[i];
      children = cloneElement(element, undefined, children);
    }

    return children;
  };
}

const Providers = BuildProviderTree([]);

export default Providers;
