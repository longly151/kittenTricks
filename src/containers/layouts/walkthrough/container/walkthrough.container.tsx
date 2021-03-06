import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Walkthrough } from './walkthrough.component';
import { routes } from './routes';

interface State {
  selectedLayoutIndex: number;
}

export class WalkthroughContainer extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    selectedLayoutIndex: 0,
  };

  private data = routes;

  private onCategorySelect = (selectedLayoutIndex: number) => {
    this.setState({ selectedLayoutIndex });
  };

  private onItemSelect = (index: number) => {
    const { [index]: selectedItem } = this.data;

    this.props.navigation.navigate(selectedItem.route);
  };

  public render(): React.ReactNode {
    return (
      <Walkthrough
        data={this.data}
        selectedLayoutIndex={this.state.selectedLayoutIndex}
        onItemSelect={this.onItemSelect}
        onLayoutSelect={this.onCategorySelect}
      />
    );
  }
}
