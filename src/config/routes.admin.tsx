import { Dashboard, Markdown, DataTableExample } from "app/pages/admin";
import { NotFound } from "app/pages/public";
import BondProposal from "app/pages/admin/bond/BondProposal";

const routes = [
  {
    path: "/admin",
    exact: true,
    component: Dashboard,
  },
  {
    path: "/admin/dashboard",
    exact: true,
    component: Dashboard,
  },
  {
    path: "/admin/markdown",
    exact: true,
    component: Markdown,
  },
  {
    path: "/admin/examples/datatable",
    exact: true,
    component: DataTableExample,
  },
  {
    path: "/admin/bond/proposal",
    exact: true,
    component: BondProposal,
  },
  {
    component: NotFound,
  },
];

export default routes;
