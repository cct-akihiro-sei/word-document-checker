import { DefaultButton } from "@fluentui/react";
import * as React from "react";
import { Header } from "./components/Header";
import { HeroList, HeroListItemProps } from "./components/HeroList";
import Progress from "./components/Progress";
import { addKaneko } from "./scripts/add-kaneko.script";

/* global Word, require */

export interface AppProps {
  title: string;
  isOfficeInitialized: boolean;
}

export interface AppState {
  listItems: HeroListItemProps[];
}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps, context: AppState) {
    super(props, context);
    this.state = {
      listItems: [],
    };
  }

  componentDidMount() {
    this.setState({
      listItems: [
        {
          key: "ribbon",
          icon: "Ribbon",
          primaryText: "Achieve more with Office integration",
        },
        {
          key: "unlock",
          icon: "Unlock",
          primaryText: "Unlock features and functionality",
        },
        {
          key: "design",
          icon: "Design",
          primaryText: "Create and visualize like a pro",
        },
      ],
    });
  }

  render() {
    const { title, isOfficeInitialized } = this.props;

    if (!isOfficeInitialized) {
      return (
        <Progress
          title={title}
          logo={require("./../../assets/cct_logo-filled.png")}
          message="Please side load your addin to see app body."
        />
      );
    }

    return (
      <div className="ms-welcome">
        <Header logo={require("./../../assets/cct_logo-filled.png")} title={this.props.title} message="Welcome" />
        <HeroList message="Discover what Office Add-ins can do for you today!" items={this.state.listItems}>
          <p className="ms-font-l">
            Modify the source files, then click <b>Run</b>.
          </p>
          <DefaultButton className="ms-welcome__action" iconProps={{ iconName: "ChevronRight" }} onClick={addKaneko}>
            Run
          </DefaultButton>
        </HeroList>
      </div>
    );
  }
}
