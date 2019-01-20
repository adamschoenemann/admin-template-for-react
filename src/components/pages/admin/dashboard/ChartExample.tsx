import * as React from "react";
import { Theme, createStyles, withStyles } from "@material-ui/core";
import { Chart } from "@bndynet/recharts-wrapper";
import { fade } from "@material-ui/core/styles/colorManipulator";

const data = [{ name: "Mon", Visits: 0, Orders: 20 }, { name: "Tue", Visits: 100, Orders: 0 }, { name: "Wed", Visits: 0, Orders: 430 }];

function loadData() {
    return new Promise<any[]>((resolve, reject) => {
        setTimeout(() => {
            const response = [{ name: "Mon", Visits: 2200, Orders: 3400, ShoppingCart: 1210 }, { name: "Tue", Visits: 1280, Orders: 2398, ShoppingCart: 3000 }, { name: "Wed", Visits: 5000, Orders: 4300, ShoppingCart: 2300 }, { name: "Thu", Visits: 4780, Orders: 2908, ShoppingCart: 4500 }, { name: "Fri", Visits: 5890, Orders: 4800, ShoppingCart: 1000 }, { name: "Sat", Visits: 4390, Orders: 3800, ShoppingCart: 3400 }, { name: "Sun", Visits: 4490, Orders: 4300, ShoppingCart: 2300 }];
            resolve(response);
        }, 5000);
    });
}

const styles = (theme: Theme) =>
    createStyles({
        loadingElement: {
            backgroundColor: fade(theme.palette.background.paper, 0.5),
        },
    });

class ChartExample extends React.Component<{
    classes: { loadingElement: any };
}> {
    public render() {
        return <Chart classes={{ loadingElement: this.props.classes.loadingElement }} data={data} xKey="name" dataSource={loadData} series={[{ key: "Visits", color: "#82ca9d", type: "bar" }, { key: "Orders", color: "#8884d8", type: "area" }, { key: "ShoppingCart", color: "#ff0000" }]} loadingElement={<span>Loading...</span>} />;
    }
}

export default withStyles(styles)(ChartExample);
